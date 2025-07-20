// sanity/sanity.config.ts
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import portfolioImage from './schemas/portfolioImage'

export default defineConfig({
  name: 'oliversnaps_portfolio',
  title: 'OliverSnaps Portfolio',

  projectId: 'w2ir6ri1',
  dataset: 'production',

  // This sets the URL for the studio to localhost:3333/studio
  basePath: '/studio',

  plugins: [structureTool()],

  schema: {
    types: [portfolioImage],
  },
})