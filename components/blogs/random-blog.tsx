import React, { useEffect, useState } from 'react'
import { parseStringPromise } from 'xml2js'
import { createClient } from 'next-sanity'
import BlogCard from './blog-card'
import { Post } from '@/types/blog-types'
import { sanityClient } from '@/services/sanity'

type RandomBlogCardProps = {
  currentSlug: string;
}


const RandomBlogCard: React.FC<RandomBlogCardProps> = ({ currentSlug }) => {
  const [post, setPost] = useState<Post | null>(null)

  useEffect(() => {
    const fetchRandomPost = async () => {
      try {
        const sitemapUrl = `https://www.cartberry.co/sitemap.xml` // Adjust if your sitemap is located elsewhere
        const sitemapResponse = await fetch(sitemapUrl)
        const sitemapXml = await sitemapResponse.text()
        const parsedSitemap = await parseStringPromise(sitemapXml)
        const urls = parsedSitemap.urlset.url.map((urlEntry: any) => urlEntry.loc[0])
        const blogSlugs = urls
          .filter((url: string) => url.includes('/blog/'))
          .map((blogUrl: string) => blogUrl.split('/').pop())
					.filter((slug: string) => slug !== currentSlug)

        const randomSlug = blogSlugs[Math.floor(Math.random() * blogSlugs.length)]

				console.log(randomSlug)
        
        const query = `*[_type == "blogPost" && slug.current == $slug][0]`
        const randomPost = await sanityClient.fetch(query, { slug: randomSlug })

        setPost(randomPost)
      } catch (error) {
        console.error("Failed to fetch random blog post:", error)
      }
    }

    fetchRandomPost()
  }, [currentSlug])

  return (
    <div>
      {post ? (
        <BlogCard post={post} />
      ) : (
        <p>Loading random blog post...</p>
      )}
    </div>
  )
}

export default RandomBlogCard