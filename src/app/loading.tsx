"use client"

import '../scss/loading.scss';

import { useState, useEffect, } from 'react';

export default function Loading() {
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
    <div id="loading" className={`loading ${loading ? '' : 'loading-active'}`}>
      <object data="/img/assets/loading.svg" width={180}></object>
      Gathering VTubers...
    </div>
  )
}