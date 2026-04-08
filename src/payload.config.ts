import { vercelPostgresAdapter } from '@payloadcms/db-vercel-postgres'
import { vercelBlobStorage } from '@payloadcms/storage-vercel-blob'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Posts } from './collections/Posts'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)
const postgresURL = process.env.POSTGRES_URL || process.env.DATABASE_URL
const blobToken = process.env.BLOB_READ_WRITE_TOKEN
const isVercelDeployment = process.env.VERCEL === '1'

if (!postgresURL) {
  throw new Error('Missing database connection string. Set POSTGRES_URL or DATABASE_URL.')
}

if (isVercelDeployment && !blobToken) {
  throw new Error(
    'Missing BLOB_READ_WRITE_TOKEN. Media uploads on Vercel require Vercel Blob storage to be configured.',
  )
}

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
    meta: {
      titleSuffix: '— dobrovolnik.cz',
    },
    components: {
      beforeLogin: ['@/components/BeforeLogin'],
      beforeDashboard: ['@/components/BeforeDashboard'],
    },
  },
  collections: [Users, Media, Posts],
  cors: [
    'https://dobrovolnik.sk',
    'https://www.dobrovolnik.sk',
    'http://localhost:3000',
  ],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: vercelPostgresAdapter({
    pool: {
      connectionString: postgresURL,
    },
  }),
  sharp,
  plugins: [
    ...(blobToken
      ? [
          vercelBlobStorage({
            collections: { media: true },
            // Upload directly from the browser to avoid Vercel's request size limits.
            clientUploads: true,
            token: blobToken,
          }),
        ]
      : []),
  ],
})
