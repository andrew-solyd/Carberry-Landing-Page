// Define the Sanity client configuration outside of the component for better performance
import { createClient } from "next-sanity"
import imageUrlBuilder from '@sanity/image-url'

export const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: "production",
  apiVersion: "2022-03-25",
  useCdn: false,
})

// Fetch posts at build time
export async function getStaticProps() {
  const posts = await sanityClient.fetch(`*[_type == "blogPost"]`)
  return {
    props: {
      posts,
    },
  }
}

const builder = imageUrlBuilder(sanityClient)

export function urlFor(source: string) {
  return builder.image(source)
}

// Fetch initial posts at build time
export async function getInitialPosts() {
  const posts = await sanityClient.fetch(`*[_type == "blogPost"] | order(_createdAt desc)[0...5]`);
  return {
    props: {
      posts,
    },
  }
}

// Fetch more posts for endless scrolling
export async function fetchMorePosts(startIndex: number, limit: number = 2) {
  const morePosts = await sanityClient.fetch(`*[_type == "blogPost"] | order(_createdAt desc)[${startIndex}...${startIndex + limit}]`);
  return morePosts;
}