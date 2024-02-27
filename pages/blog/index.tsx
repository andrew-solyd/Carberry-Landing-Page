
import React from 'react'
import { useState, useEffect, useCallback } from 'react'
import Head from 'next/head'
import { type Post} from '@/types/blog-types'
import BlogCard from '@/components/blogs/blog-card' 
import '@/app/globals.css' // Global styles
import { getInitialPosts, fetchMorePosts } from '@/services/sanity'
import Header from '@/components/universal/header' 
import Footer from '@/components/universal/footer' 
import { Analytics } from '@/components/analytics'

interface BlogProps {
  posts: Post[]
}

const Blog: React.FC<BlogProps> = ({ posts: initialPosts }) => {
  const [posts, setPosts] = useState<Post[]>(initialPosts)
	const [hasMore, setHasMore] = useState(true)
  const [startIndex, setStartIndex] = useState(5)
	const [isLoading, setIsLoading] = useState(false)

  const handleScroll = useCallback(async () => {
		// Check if the user has scrolled to the bottom, if there are more posts to load, and if it's not currently loading
		if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight || !hasMore || isLoading) return
		setIsLoading(true)
		const morePosts = await fetchMorePosts(startIndex, 3) // Ensure you're fetching two posts at a time
		setPosts((prevPosts) => [...prevPosts, ...morePosts])
		setStartIndex(prevIndex => prevIndex + 3) // Increment startIndex by 2 to fetch the next set of posts
		if (morePosts.length < 2) setHasMore(false) // If fewer than 2 posts are returned, assume there are no more posts to fetch
		setIsLoading(false) // Reset loading state
	}, [startIndex, hasMore, isLoading])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

	return (
		<>
			<Head>
				<title>Official Cartberry Blog</title>				
				<meta name="description" content="Your frugal go-to source for navigating dinner options and grocery deals." />
				<link rel="preconnect" href="https://cdn.sanity.io" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://cdn.sanity.io" />
			</Head>
			<div className="flex flex-col min-h-screen justify-between">
				<Header />
				<div>
					<div className="mt-10 flex flex-col items-center justify-center sm:w-[650px] mx-auto">
						<div className="space-y-4 mx-10">
							{posts.map((post) => (
								<BlogCard key={post._id} post={post} /> // Use BlogCard here
							))}
						</div>
					</div>
				</div>
				<Footer />
			</div>
			<Analytics />
		</>
	)
}

// Use getInitialPosts instead of getStaticProps for initial data fetching
export const getStaticProps = async () => {
  const { props } = await getInitialPosts()
  return {
    props,
  }
}

export default Blog