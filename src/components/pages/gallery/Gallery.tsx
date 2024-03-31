'use client';

import Image from 'next/image';
import { useEffect } from 'react';

import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';

import { IMAGES } from '@/data/gallery';

export default function Gallery() {
  useEffect(() => {
    const lightbox = new PhotoSwipeLightbox({
      gallery: '#gallery',
      children: 'a',
      pswpModule: () => import('photoswipe'),
      preload: [2, 4],
    });
    lightbox.init();

    return () => {
      lightbox.destroy();
    };
  }, []);
  return (
    <section
      className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-0 sm:gap-x-6 mb-40 gap-y-6 pswp-gallery max-w-6xl"
      id="gallery"
    >
      <div className="flex flex-col gap-6">
        {
          IMAGES[0].map((image) => (
            <a
              href={image.image.full}
              data-pswp-width={image.width}
              data-pswp-height={image.height}
              key={crypto.randomUUID()}
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src={image.image.thumbnail}
                alt="Gallery image"
                width={600}
                height={600}
                className="w-full h-auto rounded-md bg-web-gray-100"
              />
            </a>
          ))
        }
      </div>
      <div className="flex flex-col gap-6">
        {
          IMAGES[1].map((image) => (
            <a
              href={image.image.full}
              data-pswp-width={image.width}
              data-pswp-height={image.height}
              key={crypto.randomUUID()}
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src={image.image.thumbnail}
                alt="Gallery image"
                width={600}
                height={600}
                className="w-full h-auto rounded-md bg-web-gray-100"
              />
            </a>
          ))
        }
      </div>
      <div className="flex flex-col gap-6 col-span-1 sm:col-span-2 md:col-span-1">
        {
          IMAGES[2].map((image) => (
            <a
              href={image.image.full}
              data-pswp-width={image.width}
              data-pswp-height={image.height}
              key={crypto.randomUUID()}
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src={image.image.thumbnail}
                alt="Gallery image"
                width={600}
                height={600}
                className="w-full h-auto rounded-md bg-web-gray-100"
              />
            </a>
          ))
        }
      </div>
    </section>
  );
}
