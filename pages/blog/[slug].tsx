import { GetStaticPaths, GetStaticProps } from 'next';
import { createClient } from 'next-sanity';
import { ParsedUrlQuery } from 'querystring';
import BlockContent from '@sanity/block-content-to-react';
import { BlogPosting, WithContext } from 'schema-dts';

// Sanity client configuration
const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: 'production',
  apiVersion: '2022-03-25',
  useCdn: false,
});

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

// Post component
const Post: React.FC<{ post: PostType }> = ({ post }) => {
	return (
		<article className="prose lg:prose-xl mx-auto">
			<h1>{post.title}</h1>
			<span>Author: {post.author} </span>
			<span>Publish Date: {post.date}</span>
			<BlockContent blocks={post.content} />
			<StructuredData data={generateContentStructuredData(post)} />
		</article>
	);
};

export default Post;