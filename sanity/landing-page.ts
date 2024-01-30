/* eslint-disable import/no-anonymous-default-export */
export default {
  name: 'landingPage',
  title: 'Landing Page',
  type: 'document',
  fields: [
    {
      name: 'utm',
      title: 'UTM (0 is default page)',
      type: 'string',
    },
    {
      name: 'header',
      title: 'Hero header',
      type: 'string',
    },
    {
      name: 'subheader',
      title: 'Hero subheader',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'image',
      title: 'Hero image',
      type: 'image',
    },
    {
      name: 'cta',
      title: 'Hero call-to-action',
      type: 'string',
    },
    {
      name: 'propsHeader',
      title: 'How it works header',
      type: 'string',
    },
    {
      name: 'props',
      title: 'How it works steps',
      type: 'array',
      of: [{ type: 'string' }],
    },
		{
      name: 'propsImages',
      title: 'How it works images',
      type: 'array',
      of: [{ type: 'image' }],
    },
		{
      name: 'bottomHeader',
      title: 'Last section header',
      type: 'string'
    },
    {
      name: 'bottomParagraph',
      title: 'Last section paragraph',
      type: 'string'
    },
		{
      name: 'bottomCTA',
      title: 'Last call-to-action',
      type: 'string'
    }
  ],
}