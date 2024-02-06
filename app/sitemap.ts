import { MetadataRoute } from 'next'
import { createClient } from "next-sanity"

// Define the Sanity client configuration outside of the component for better performance
const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: "production",
  apiVersion: "2022-03-25",
  useCdn: false,
})

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const urlList: string[] = ['/', '/blog']

  // Fetch slugs from Sanity
	type SlugType = {current: string};
  const slugs: SlugType[] = await sanityClient.fetch(`*[_type == "blogPost"].slug`);
  
  // Append slugs to the URL list
  slugs.forEach(slug => {
    urlList.push(`/blog/${slug.current}`);
  });

  // Format the list
  return urlList.map((url) => ({
    url: 'https://cartberry.co' + url,
    lastModified: new Date(),
  }))
}