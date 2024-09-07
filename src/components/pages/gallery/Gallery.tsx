/* eslint-disable jsx-a11y/img-redundant-alt */

'use client';

import { IMAGES } from '@/data/gallery';
import { useGallery } from '@/lib/hooks';

import './Gallery.css';

export default function Gallery() {
  useGallery({ id: 'gallery' });
  return (
    <section
      className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-0 sm:gap-x-6 mb-40 gap-y-6 pswp-gallery max-w-6xl px-6"
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
              className="hover:scale-105 transition-transform duration-200 ease-in-out relative"
            >
              <img
                src={image.image.thumbnail}
                alt="Gallery image"
                width={600}
                height={600}
                className="w-full h-auto rounded-md bg-web-gray-100"
              />
              <img
                src={image.image.thumbnail}
                alt="Gallery image"
                width={600}
                height={600}
                className="w-full h-auto rounded-md bg-web-gray-100 absolute top-0 left-0 blur-sm -z-10 opacity-80"
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
              className="hover:scale-105 transition-transform duration-200 ease-in-out relative"
            >
              <img
                src={image.image.thumbnail}
                alt="Gallery image"
                width={600}
                height={600}
                className="w-full h-auto rounded-md bg-web-gray-100"
              />
              <img
                src={image.image.thumbnail}
                alt="Gallery image"
                width={600}
                height={600}
                className="w-full h-auto rounded-md bg-web-gray-100 absolute top-0 left-0 blur-sm -z-10 opacity-80"
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
              className="hover:scale-105 transition-transform duration-200 ease-in-out relative"
            >
              <img
                src={image.image.thumbnail}
                alt="Gallery image"
                width={600}
                height={600}
                className="w-full h-auto rounded-md bg-web-gray-100"
              />
              <img
                src={image.image.thumbnail}
                alt="Gallery image"
                width={600}
                height={600}
                className="w-full h-auto rounded-md bg-web-gray-100 absolute top-0 left-0 blur-sm -z-10 opacity-80"
              />
            </a>
          ))
        }
      </div>
    </section>
  );
}
