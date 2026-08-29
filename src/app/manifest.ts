import { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Sailor',
    short_name: 'Sailor',
    description: 'Go offshore, meet your people',
    start_url: '/',
    display: 'standalone',
    background_color: '#FDFBF7',
    theme_color: '#0284c7',
    icons: [
      {
        src: '/icon?size=192',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable'
      },
      {
        src: '/icon?size=512',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable'
      }
    ],
  }
}
