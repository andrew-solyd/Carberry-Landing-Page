/* eslint-disable import/no-anonymous-default-export */
export default {
  name: 'blogPost',
  title: 'Blog Post',
  type: 'document',
  fields: [
    {
      title: 'Title',
			name: 'title',
      type: 'string',
    },
		{
      title: 'Author',
			name: 'author',
      type: 'string',
    },
		{
			title: 'Slug',
			name: 'slug',
			type: 'slug',
			options: {
				source: 'title',
				maxLength: 200, // will be ignored if slugify is set
				slugify: (input: string) => input
														.toLowerCase()
														.replace(/\s+/g, '-')
														.slice(0, 200)
			}
		},
		{
			title: 'Summary',
			name: 'summary',
			type: 'text'
		},
		{
			title: 'Publish Date',
			name: 'date',
			type: 'date'
		},
		{
			title: 'Content', 
			name: 'content',
			type: 'array', 
			of: [{type: 'block'}]
		}
    // Add more fields as needed
  ],
}