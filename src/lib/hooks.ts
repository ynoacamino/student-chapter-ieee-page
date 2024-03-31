'use client';

import PhotoSwipeLightbox from 'photoswipe/lightbox';
import { useEffect } from 'react';

export const useGallery = ({ id }: { id: string }) => {
  useEffect(() => {
    const lightbox = new PhotoSwipeLightbox({
      gallery: `#${id}`,
      children: 'a',
      pswpModule: () => import('photoswipe'),
      preload: [2, 4],
    });
    lightbox.init();

    return () => {
      lightbox.destroy();
    };
  }, [id]);
};
