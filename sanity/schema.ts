import { type SchemaTypeDefinition } from 'sanity'
import landingPage from './landing-page'
import blogPost from './blog-post'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [landingPage, blogPost],
}
