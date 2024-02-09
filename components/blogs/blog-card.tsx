import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { urlFor } from '@/services/sanity'
import {type Post} from '@/types/blog-types'

type BlogCardProps = {
  post: Post
}

const BlogCard: React.FC<BlogCardProps> = ({ post }) => (
  <div className="card shadow-lg rounded-lg p-4">    
    <div className="flex flex-row">
      <div className="flex-shrink-0"> {/* Adjust the max-width as needed */}
				{post.image && (
					<div className="rounded-lg overflow-hidden m-1"> {/* This maintains a 1:1 aspect ratio */}
						<Image 
							src={urlFor(post.image).url()}  
							alt={post.title} 
							width={80} 
							height={80} 
							className="rounded mr-4 object-cover w-full h-full" // Use object-cover to maintain aspect ratio without stretching
						/>
					</div>
				)}
			</div>
      <div className="ml-2">
        <h3 className="text-lg font-bold">{post.title}</h3>
        <p>{post.summary.split(" ").length > 25 ? `${post.summary.split(" ").slice(0, 25).join(" ")}...` : post.summary}</p>
      </div>
    </div>
    <div className="flex flex-row justify-end">
      <Link href={`/blog/${post.slug.current}`} passHref>
        <div className="text-sm font-semibold">Read more</div>
      </Link>
    </div>
  </div>
)

export default BlogCard