import React from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import Image from 'next/image';
import { createClient } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';
import { ParsedUrlQuery } from 'querystring';
import { PortableText } from '@portabletext/react';
import { BlogPosting, WithContext } from 'schema-dts';
import Header from '@/components/universal/header'; // Adjust the import path as necessary
import Footer from '@/components/universal/footer'; // Adjust the import path as necessary
import '@/app/globals.css'; // Global styles
// Sanity client configuration
const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: 'production',
  apiVersion: '2022-03-25',
  useCdn: false,
});
const builder = imageUrlBuilder(sanityClient);

function urlFor(source: string) {
  return builder.image(source);
}

// TypeScript interfaces for improved type safety
interface PostType {
     title: string;
     content: any[];
     summary: string;
     author?: string; // Optional if you have posts without an explicit author
     image?: string;
     date: string;
   }

export const generateContentStructuredData = (post: PostType): WithContext<BlogPosting> => {
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
	};

	return schema;
}

interface IParams extends ParsedUrlQuery {
  slug: string;
}

// Fetching paths for static generation
export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await sanityClient.fetch(
    `*[_type == "blogPost" && defined(slug.current)][].slug.current`
  ).then((slugs: string[]) => slugs.map(slug => ({ params: { slug } })));

  return { paths, fallback: false };
};

// Fetching post data for static generation
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as IParams;

  const post = await sanityClient.fetch(
    `*[_type == "blogPost" && slug.current == $slug][0]`, 
    { slug }
  );

  if (!post) {
    return { notFound: true };
  }

  return { props: { post } };
};

interface DataProps {
     data: WithContext<BlogPosting>;
   }

const StructuredData: React.FC<DataProps> = ({ data }) => {
	return (
			<script
				key="structured-data"
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
			/>
	);
}
interface BlockProps {
  node: {
    style: string;
  };
  children: React.ReactNode;
}

interface LinkMarkProps {
  children: React.ReactNode;
  value?: { href: string };
}

interface BlockProps {
  children: React.ReactNode;
}
// Define your custom serializers
const myPortableTextComponents = {

  marks: {
    link: ({children, value}: LinkMarkProps) => {
      const rel = value?.href && !value.href.startsWith('/') ? 'noreferrer noopener' : undefined
  		return (
    		<a href={value?.href} rel={rel}>
          {children}
        </a>
      )
    },
  },
	block: {
  	h3: ({children}: BlockProps)  => <h3 className="text-xl font-semibold my-4">{children}</h3>,
	},
	list: ({children}: BlockProps) => <ul className="mt-4 list-inside">{children}</ul>, // Use <ul> or <ol> as preferred, with common styling
  listItem: ({children}: BlockProps) => <li className="pl-4 mb-3 list-disc">{children}</li>, // Apply common styling for all list items
}

const Post: React.FC<{ post: PostType }> = ({ post }) => {
  return (
    <div className="flex flex-col min-h-screen justify-between">
      <Header />
      <main className="flex flex-col mt-5 mx-4 sm:w-[600px] md:flex-row md:items-start md:justify-between md:w-full">
        <article className="prose lg:prose-xl mx-auto px-7 mt-2 w-full md:w-1/2">
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
        </article>
				{post.image && (
					<div className="hidden md:block md:pl-4 md:w-96 relative h-96">
						<Image src={urlFor(post.image).url()} alt={post.title} layout='fill' objectFit='cover' className="rounded-lg shadow-lg mt-5" unoptimized={true}/>
					</div>
				)}
      </main>
      <Footer />
    </div>
  );
};

export default Post;