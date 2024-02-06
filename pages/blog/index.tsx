import { createClient } from "next-sanity";
import Link from 'next/link';
import React from "react";

// Define the Sanity client configuration outside of the component for better performance
const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: "production",
  apiVersion: "2022-03-25",
  useCdn: false,
});

// TypeScript interfaces for type safety
interface Post {
  _id: string;
  title: string;
  summary: string;
	slug: {
    current: string;
  };
}

interface BlogProps {
  posts: Post[];
}

// Fetch posts at build time
export async function getStaticProps() {
  const posts = await sanityClient.fetch(`*[_type == "blogPost"]`);
  return {
    props: {
      posts,
    },
  };
}

// Post component for individual posts
const PostComponent: React.FC<{ post: Post }> = ({ post }) => (
  <div key={post._id} className="mb-4">
    <h2 className="text-xl font-bold">{post.title}</h2>
    <span>{post.summary} </span>
    <Link 
      href={`/blog/${post.slug.current}`} 
      className="inline-block mt-2 px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
      passHref
    >
      Read More
    </Link>
  </div>
);

// Blog component for rendering the list of posts
const Blog: React.FC<BlogProps> = ({ posts }) => (
	<div>
		<h1>Cartberry Blog</h1>
		<div className="space-y-4">
			{posts.map((post) => (
				<PostComponent key={post._id} post={post} />
			))}
		</div>
	</div>
);

export default Blog;