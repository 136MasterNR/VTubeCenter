export const metadata = {
  title: 'VTube Center',
  description: 'Get a list of every single VTuber in the world!',
  keywords: [
    'virtual',
    'doggirls',
    'dog',
    'girls',
    'anime',
    'list',
    'online',
    'media',
    'link',
    'video',
    'image',
    'live',
    'stream',
    'livestream',
  ],
  google: 'notranslate',
  rating: 'general',
  googleSiteVerification: 'u_JknkJF5JDYvj-PzNGwOc2XQ0XRfryIgr8PeF0y3Vc',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'cyan' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
  openGraph: {
    type: 'website',
    locale: 'en-US',
    title: 'VTube Center',
    description: 'Get a list of every single VTuber in the world!',
    images:
      'https://github.com/136MasterNR/VTubeCenter/raw/migration/app/public/img/seo/embed.jpg',
  },
  twitter: {
    images:
      'https://github.com/136MasterNR/VTubeCenter/raw/migration/app/public/img/seo/embed.jpg',
    title: 'VTube Center',
    card: 'summary_large_image',
    creator: '@136MasterNR and @Naibuu',
  },
}

import '../scss/globals.scss'

import { Nav } from '@/components/Nav'
import Loading from './loading'

import { Plus_Jakarta_Sans } from 'next/font/google'
import StyledComponentsRegistry from '@/lib/registry'
const fontPrimary = Plus_Jakarta_Sans({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <StyledComponentsRegistry>
        <body className={fontPrimary.className}>
          <Nav />
          <Loading />
          {children}
          <div className="bg"></div>
        </body>
      </StyledComponentsRegistry>
    </html>
  )
}
