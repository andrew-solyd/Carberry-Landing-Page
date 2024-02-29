import React from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { ParsedUrlQuery } from 'querystring'
import { PortableText, PortableTextReactComponents, PortableTextMarkComponentProps, PortableTextComponentProps, ReactPortableTextList, ReactPortableTextListItem } from '@portabletext/react'
import { BlogPosting, WithContext } from 'schema-dts'
import Header from '@/components/universal/header' 
import Footer from '@/components/universal/footer' 
import '@/app/globals.css' // Global styles
import { type Post } from '@/types/blog-types'
import RandomBlogCard  from '@/components/blogs/random-blog'
import { sanityClient, urlFor } from '@/services/sanity'
import { Analytics } from '@/components/analytics'


export const generateContentStructuredData = (post: Post): WithContext<BlogPosting> => {
	const schema: WithContext<BlogPosting> = {
		'@context': 'https://schema.org',
		'@type': 'BlogPosting',
		headline: post.title,
		description: post.summary,
		author: [{
				'@type': 'Person',
				name: post.author || "Amalia Ferguson",
			}],
		image: post.image || '',
		datePublished: post.date,
	}

	return schema
}

interface IParams extends ParsedUrlQuery {
  slug: string
}

// Fetching paths for static generation
export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await sanityClient.fetch(
    `*[_type == "blogPost" && defined(slug.current)][].slug.current`
  ).then((slugs: string[]) => slugs.map(slug => ({ params: { slug } })))

  return { paths, fallback: false }
}

// Fetching post data for static generation
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as IParams

  const post = await sanityClient.fetch(
    `*[_type == "blogPost" && slug.current == $slug][0]`, 
    { slug }
  )

  if (!post) {
    return { notFound: true }
  }

  return { props: { post } }
}

interface DataProps {
     data: WithContext<BlogPosting>
   }

const StructuredData: React.FC<DataProps> = ({ data }) => {
	return (
			<script
				key="structured-data"
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
			/>
	)
}

// Define your custom serializers
const myPortableTextComponents: PortableTextReactComponents = {

  marks: {
    link: ({children, value}: PortableTextMarkComponentProps) => {
      const rel = value?.href && !value.href.startsWith('/') ? 'noreferrer noopener' : undefined
  		return (
    		<a href={value?.href} rel={rel} className="underline">
          {children}
        </a>
      )
    },
  },
	block: {
  	h3: ({children}: PortableTextComponentProps<{}>) => (
      <h3 className="text-xl font-semibold mt-6">{children}</h3>
    ),
		h2: ({children}: PortableTextComponentProps<{}>) => (
      <h2 className="text-xl font-semibold mt-6">{children}</h2>
    ),
		normal: ({children}: PortableTextComponentProps<{}>) => (
      <p className="my-2 text-base">{children}</p>
    ),
		
	},
	list: {
    bullet: ({children}: PortableTextComponentProps<ReactPortableTextList>) => (
      <ul className="mt-4 list-inside">{children}</ul>
    ),
    // Define other list types if needed
  },
  listItem: {
    bullet: ({children}: PortableTextComponentProps<ReactPortableTextListItem>) => (
      <li className="pl-1 ml-5 mb-3 list-disc">{children}</li>
    ),
		number: ({children}: PortableTextComponentProps<ReactPortableTextListItem>) => (
      <li className="pl-1 ml-5 mb-3 list-decimal">{children}</li>
    ),
	},
	// Minimal implementations for required missing properties
  types: {}, // Assuming no custom types adjust as necessary
  hardBreak: () => <br />, // Default behavior for hard breaks
  unknownMark: ({children}) => <span>{children}</span>, // Fallback for unknown marks
  unknownType: ({children}) => <div>{children}</div>, // Fallback for unknown types
  unknownBlockStyle: ({children}) => <div>{children}</div>, // Fallback for unknown block styles
  unknownList: ({children}) => <ul>{children}</ul>, // Fallback for unknown lists
  unknownListItem: ({children}) => <li>{children}</li>, 
}

const Post: React.FC<{ post: Post }> = ({ post }) => {
  return (
		<>
			<Head>
        <title>{post.title}</title>
        <meta name="description" content={post.summary} />
      </Head>
			<div className="flex flex-col min-h-screen justify-between">
				<Header />
				<main className="flex flex-col mt-5 mx-4 md:flex-row md:items-start md:justify-between md:w-full">
					<article className="w-full sm:w-[600px] sm:max-w-[600px] prose lg:prose-xl mx-auto px-7 mt-2">
						<h1 className="text-3xl mb-5 font-bold">
							{post.title}
						</h1>
						<div className="bg-orange-200 text-xs px-3 py-1 rounded-full inline-flex">
							Post contains generative AI writing
						</div>
						<div className="text-sm my-5 font-semibold">
							Publish Date: {post.date}
						</div>          
						<PortableText value={post.content} components={myPortableTextComponents}/>
						<StructuredData data={generateContentStructuredData(post)} />
						<div className="my-5 text-sm font-semibold">Continue reading...</div>
						<RandomBlogCard currentSlug={post.slug.current}/>
					</article>
					{post.image && (
						<div className="hidden md:block md:pl-4 md:w-96 relative h-96">
							<Image 
								src={urlFor(post.image).url()} 
								alt={post.title} 
								fill 
								style={{ objectFit: 'cover' }} 
								className="rounded-lg shadow-lg mt-5" 
								unoptimized={true}
							/>
						</div>
					)}
				</main>
				<Footer />
			</div>
			<Analytics />
		</>
  )
}

export default Post