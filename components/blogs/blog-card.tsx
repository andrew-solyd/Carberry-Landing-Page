import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { urlFor } from '@/services/sanity'
import {type Post} from '@/types/blog-types'

type BlogCardProps = {
  post: Post
}

const BlogCard: React.FC<BlogCardProps> = ({ post }) => (
  <div className="card rounded-lg p-4" style={container}>    
    <div className="flex flex-col sm:flex-row ml-1">
      <div className="sm:flex-shrink-0"> {/* Adjust the max-width as needed */}
				{post.image && (
					<div className="rounded-lg overflow-hidden m-4 sm:m-1"> {/* This maintains a 1:1 aspect ratio */}
						<Link href={`/blog/${post.slug.current}`} passHref>
							<Image 
								src={urlFor(post.image).url()}  
								alt={post.title} 
								width={80} 
								height={80} 
								className="rounded mr-4 object-cover w-full h-full" // Use object-cover to maintain aspect ratio without stretching
							/>
						</Link>
					</div>
				)}
			</div>
      <div className="flex flex-col ml-5">
				<Link href={`/blog/${post.slug.current}`} passHref>
        	<h3 className="text-lg font-bold leading-6 mb-2">{post.title}</h3>
				</Link>
        <p className="text-sm">{post.summary.split(" ").length > 25 ? `${post.summary.split(" ").slice(0, 25).join(" ")}...` : post.summary}</p>
        <div className="flex flex-row justify-end mt-4 mr-2">
          <Link href={`/blog/${post.slug.current}`} passHref>
            <div className="text-sm font-semibold">Read more</div>
          </Link>
        </div>
      </div>
    </div>    
  </div>
)

export default BlogCard

const container = {
  borderWidth: "0px",
  borderColor: "rgba(0,173,238,0.5)",
  borderRadius: "1.5rem",
  background: "linear-gradient(#fff, rgb(0 0 0 / 0.02))",
  boxShadow: "0px 0px 0px 1px var(--shadow-color), 0px 1px 1px -0.5px var(--shadow-color), 0px 3px 3px -1.5px var(--shadow-color), 0px 6px 6px -3px var(--shadow-color), 0px 12px 12px -6px var(--shadow-color), 0px 24px 24px -12px var(--shadow-color)",
  "--shadow-color": "rgb(0 0 0 / 0.06)"
}