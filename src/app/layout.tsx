export const metadata = {
  title: 'VTube Center',
  description: 'Get a list of every anime Virtual Doggirl in the world!',
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
  openGraph: {
    type: 'website',
    locale: 'en-US',
    title: 'VTube Center',
    description: 'Get a list of every anime Virtual Doggirl in the world!',
  },
  twitter: {
    images:
      'https://github.com/136MasterNR/VTubeCenter/raw/migration/app/public/img/seo/embed.jpg',
    title: 'VTube Center',
    card: 'summary_large_image',
    creator: '@136MasterNR and @Naibuu',
  },
}

"use client"

import { useState, useEffect } from 'react';

import '../scss/globals.scss';
import Loading from './loading'

import { Plus_Jakarta_Sans } from 'next/font/google'
const fontPrimary = Plus_Jakarta_Sans({ subsets: ['latin'] })

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 750);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!loading) {
      const loadingElement = document.getElementById('loading');
      if (loadingElement) {
        const animationEndHandler = () => {
          loadingElement.style.display = 'none';
          loadingElement.removeEventListener('animationend', animationEndHandler);
        };

        loadingElement.addEventListener('animationend', animationEndHandler);
        loadingElement.classList.add('loading-fade-out');
      }
    }
  }, [loading]);

  return (
    <html lang="en">
      <body className={fontPrimary.className}>
        <Loading loading={loading}/>
        {children}
        <div className="bg"></div>
      </body>
    </html>
  );
}