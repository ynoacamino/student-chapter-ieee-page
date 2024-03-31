import Gradient from '@/components/ui/gradient';
import Link from 'next/link';
import Image from 'next/image';
import { Section } from '@/components/ui/section';

const IMAGES = [
  {
    src: 'https://res.cloudinary.com/dazt6g3o1/image/upload/v1710903364/mgmqaorpyocwutjj7l1y.webp',
    alt: '',
  },
  {
    src: 'https://res.cloudinary.com/dazt6g3o1/image/upload/v1710903379/flwwsodtiiwmexcyujqv.webp',
    alt: '',
  },
  {
    src: 'https://res.cloudinary.com/dazt6g3o1/image/upload/v1710903394/la07diffgkjlcb8lyhtj.webp',
    alt: '',
  },
  {
    src: 'https://res.cloudinary.com/dazt6g3o1/image/upload/v1710903410/g236shsfhahnpipmwvf8.webp',
    alt: '',
  },
  {
    src: 'https://res.cloudinary.com/dazt6g3o1/image/upload/v1710903364/mgmqaorpyocwutjj7l1y.webp',
    alt: '',
  },
  {
    src: 'https://res.cloudinary.com/dazt6g3o1/image/upload/v1710903379/flwwsodtiiwmexcyujqv.webp',
    alt: '',
  },
  {
    src: 'https://res.cloudinary.com/dazt6g3o1/image/upload/v1710903394/la07diffgkjlcb8lyhtj.webp',
    alt: '',
  },
  {
    src: 'https://res.cloudinary.com/dazt6g3o1/image/upload/v1710903410/g236shsfhahnpipmwvf8.webp',
    alt: '',
  },
];

export default function About2() {
  return (
    <Section id="about2" bgDirection="r" className="">
      <div className="w-full flex flex-col items-center justify-start gap-10">
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
        <div className="flex flex-col gap-3 text-xl justify-center max-w-6xl">
          <h1 className="text-4xl text-primary-title font-bold">Sobre nosotros</h1>
          <p>
            El Capítulo Estudiantil de Ingeniería de Sistemas de la Universidad Nacional de
            San Agustín es una comunidad comprometida con la excelencia académica y el avance
            tecnológico.
          </p>
          <p>
            Nos dedicamos a explorar y desarrollar soluciones innovadoras en el vasto
            campo de los sistemas,abarcando áreas como la ciberseguridad,
            la inteligencia artificial, el análisis de datos y
            {' '}
            <Link href="/events" className="underline">
              más.
            </Link>
          </p>
        </div>
      </div>
    </Section>
  );
}
