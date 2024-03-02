import Gradient from '@/components/ui/gradient';
import Link from 'next/link';
import Image from 'next/image';

const IMAGES = [
  {
    src: '/images/gallery/img_1.webp',
    alt: '',
  },
  {
    src: '/images/gallery/img_2.webp',
    alt: '',
  },
  {
    src: '/images/gallery/img_3.webp',
    alt: '',
  },
  {
    src: '/images/gallery/img_4.webp',
    alt: '',
  },
  {
    src: '/images/gallery/img_1.webp',
    alt: '',
  },
  {
    src: '/images/gallery/img_2.webp',
    alt: '',
  },
  {
    src: '/images/gallery/img_3.webp',
    alt: '',
  },
  {
    src: '/images/gallery/img_4.webp',
    alt: '',
  },
];

export default function About2() {
  return (
    <section className="w-full grid grid-cols-1 gap-10 my-40">
      <div className="w-full overflow-hidden relative" id="sliderAbout">
        <div id="sliderAbout-track">
          {
            IMAGES.map(({ alt, src }) => (
              <div key={crypto.randomUUID()} className="w-[40rem] pr-4">
                <Image
                  className="w-full aspect-video rounded-lg bg-web-gray-100 dark:bg-accent object-cover"
                  alt={alt}
                  src={src}
                  width={600}
                  height={600}
                />
              </div>
            ))
          }
        </div>
        <Gradient direction="l" />
        <Gradient direction="r" />
      </div>
      <div className="flex flex-col gap-3 text-xl justify-center ">
        <h1 className="text-4xl text-primary-title font-bold">About</h1>
        <p>
          We are a chapter club of the Association for Computing Machinery organization.
          Our goal is to expose passionate people.
        </p>
        <p>
          We are a chapter club of the Association for Computing Machinery organization.
          We are a chapter club of the Association for Computing Machinery
          {' '}
          <Link href="/" className="underline">
            organization.
          </Link>
        </p>
      </div>
    </section>
  );
}
