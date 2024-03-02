'use client';

import Image from 'next/image';
import { useEffect } from 'react';

import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';

/* eslint-disable react/jsx-pascal-case */
// function Box({ aspectRatio }: { aspectRatio: '1/1' | '16/9' | '9/16' }) {
//   return (
//     <div className={cn('w-full aspect-[1/1] bg-web-gray-100 rounded-md transition-shadow
// hover:cursor-pointer hover:shadow-lg', {
//       'aspect-[16/9]': aspectRatio === '16/9',
//       'aspect-[9/16]': aspectRatio === '9/16',
//       'aspect-[1/1]': aspectRatio === '1/1',
//     })}
//     />
//   );
// }

const IMAGES = [
  [
    {
      preview: '/images/gallery/img_1.webp',
      full: '/images/gallery/img_1.jpg',
      alt: '',
      width: 1016,
      height: 1280,
    },
    {
      preview: '/images/gallery/img_2.webp',
      full: '/images/gallery/img_2.jpg',
      alt: '',
      width: 1280,
      height: 853,
    },
    {
      preview: '/images/gallery/img_3.webp',
      full: '/images/gallery/img_3.jpg',
      alt: '',
      width: 1280,
      height: 1280,
    },
    {
      preview: '/images/gallery/img_4.webp',
      full: '/images/gallery/img_4.jpg',
      alt: '',
      width: 853,
      height: 1280,
    },
  ],
  [
    {
      preview: '/images/gallery/img_5.webp',
      full: '/images/gallery/img_5.jpg',
      alt: '',
      width: 853,
      height: 1280,
    },
    {
      preview: '/images/gallery/img_6.webp',
      full: '/images/gallery/img_6.jpg',
      alt: '',
      width: 1280,
      height: 1027,
    },
    {
      preview: '/images/gallery/img_7.webp',
      full: '/images/gallery/img_7.jpg',
      alt: '',
      width: 1280,
      height: 720,
    },
    {
      preview: '/images/gallery/img_8.webp',
      full: '/images/gallery/img_8.jpg',
      alt: '',
      width: 1280,
      height: 853,
    },
  ],
  [
    {
      preview: '/images/gallery/img_9.webp',
      full: '/images/gallery/img_9.jpg',
      alt: '',
      width: 1280,
      height: 853,
    },
    {
      preview: '/images/gallery/img_10.webp',
      full: '/images/gallery/img_10.jpg',
      alt: '',
      width: 853,
      height: 1280,
    },
    {
      preview: '/images/gallery/img_11.webp',
      full: '/images/gallery/img_11.jpg',
      alt: '',
      width: 1280,
      height: 893,
    },
    {
      preview: '/images/gallery/img_12.webp',
      full: '/images/gallery/img_12.jpg',
      alt: '',
      width: 1280,
      height: 1280,
    },
  ],
];

export default function Gallery() {
  useEffect(() => {
    const lightbox = new PhotoSwipeLightbox({
      gallery: '#gallery',
      children: 'a',
      pswpModule: () => import('photoswipe'),
    });
    lightbox.init();

    return () => {
      lightbox.destroy();
    };
  }, []);
  return (
    <section
      className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-0 sm:gap-x-6 mb-40 gap-y-6 pswp-gallery"
      id="gallery"
    >
      <div className="flex flex-col gap-6">
        {/* <Box aspectRatio="9/16" />
        <Box aspectRatio="1/1" />
        <Box aspectRatio="1/1" />
        <Box aspectRatio="16/9" /> */}
        {
          IMAGES[0].map((image) => (
            <a
              href={image.full}
              data-pswp-width={image.width}
              data-pswp-height={image.height}
              key={crypto.randomUUID()}
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src={image.preview}
                alt="Gallery image"
                width={600}
                height={600}
                className="w-full h-auto rounded-md"
              />
            </a>
          ))
        }
      </div>
      <div className="flex flex-col gap-6">
        {/* <Box aspectRatio="16/9" />
        <Box aspectRatio="9/16" />
        <Box aspectRatio="1/1" />
        <Box aspectRatio="1/1" /> */}
        {
          IMAGES[1].map((image) => (
            <a
              href={image.full}
              data-pswp-width={image.width}
              data-pswp-height={image.height}
              key={crypto.randomUUID()}
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src={image.preview}
                alt="Gallery image"
                width={600}
                height={600}
                className="w-full h-auto rounded-md"
              />
            </a>
          ))
        }
      </div>
      <div className="flex flex-col gap-6 col-span-1 sm:col-span-2 md:col-span-1">
        {/* <Box aspectRatio="1/1" />
        <Box aspectRatio="16/9" />
        <Box aspectRatio="1/1" />
        <Box aspectRatio="9/16" /> */}
        {
          IMAGES[2].map((image) => (
            <a
              href={image.full}
              data-pswp-width={image.width}
              data-pswp-height={image.height}
              key={crypto.randomUUID()}
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src={image.preview}
                alt="Gallery image"
                width={600}
                height={600}
                className="w-full h-auto rounded-md"
              />
            </a>
          ))
        }
      </div>
    </section>
  );
}
