"use client"

import { useState, useEffect } from 'react';

import './metadata'
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