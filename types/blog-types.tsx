
export type Post = {
  _id: string;
  title: string;
	author?: string;
	date: string;
  summary: string;
  slug: {
    current: string;
  };
  image: string;
	content: any[];
}

export type BlogProps = {
  posts: Post[];
}