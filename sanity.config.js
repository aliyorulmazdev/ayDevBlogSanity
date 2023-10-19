import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import {codeInput} from '@sanity/code-input'
import { vercelDeployTool } from 'sanity-plugin-vercel-deploy'

export default defineConfig({
  name: 'default',
  title: 'aydev-blog',

  projectId: 'fg0ja0q5',
  dataset: 'production',

  plugins: [deskTool(), visionTool(), codeInput(), vercelDeployTool(),],

  schema: {
    types: schemaTypes,
  },
})
