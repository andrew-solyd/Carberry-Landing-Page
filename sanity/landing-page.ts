export default {
  name: 'landingPage',
  title: 'Landing Page',
  type: 'document',
  fields: [
    {
      name: 'utm',
      title: 'UTM (don not change)',
      type: 'string',
    },
    {
      name: 'header',
      title: 'Header',
      type: 'string',
    },
    {
      name: 'subheader',
      title: 'Subheader',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
    },
    {
      name: 'cta',
      title: 'Call To Action',
      type: 'string',
    },
    {
      name: 'props',
      title: 'Properties',
      type: 'array',
      of: [{ type: 'string' }],
    },
  ],
}