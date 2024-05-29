import Gradient from '@/components/ui/gradient';
import Image from 'next/image';
import { Section } from '@/components/ui/section';

const IMAGES = [
  {
    src: 'https://res.cloudinary.com/dazt6g3o1/image/upload/v1716953801/jvunl5jqtwthwsyf0gzd.webp',
    alt: 'Conocenos 2',
  },
  {
    src: 'https://res.cloudinary.com/dazt6g3o1/image/upload/v1716953873/yay6ppum6lqqwrgn57kr.webp',
    alt: 'Conocenos 3',
  },
  {
    src: 'https://res.cloudinary.com/dazt6g3o1/image/upload/v1716953894/wxpk7ugm3f7shschdkar.webp',
    alt: 'Conocenos 4',
  },
  {
    src: 'https://res.cloudinary.com/dazt6g3o1/image/upload/v1716953914/tfgzbuwlvuwmedz6ufhm.webp',
    alt: 'Conocenos 5',
  },
  {
    src: 'https://res.cloudinary.com/dazt6g3o1/image/upload/v1716953801/jvunl5jqtwthwsyf0gzd.webp',
    alt: 'Conocenos 2',
  },
  {
    src: 'https://res.cloudinary.com/dazt6g3o1/image/upload/v1716953873/yay6ppum6lqqwrgn57kr.webp',
    alt: 'Conocenos 3',
  },
  {
    src: 'https://res.cloudinary.com/dazt6g3o1/image/upload/v1716953894/wxpk7ugm3f7shschdkar.webp',
    alt: 'Conocenos 4',
  },
  {
    src: 'https://res.cloudinary.com/dazt6g3o1/image/upload/v1716953914/tfgzbuwlvuwmedz6ufhm.webp',
    alt: 'Conocenos 5',
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
            Nuestro capítulo se dedica a promover actividades y eventos que estimulen la investigación y el desarrollo en áreas relacionadas con la tecnología y la ingeniería. A través de talleres, visitas técnicas, cursos y otras iniciativas, buscamos crear un impacto positivo en la comunidad universitaria y en la ciudad de Arequipa.
          </p>
          <p>
            Nuestra misión es ofrecer oportunidades que impulsen el crecimiento académico y profesional de nuestros miembros.
          </p>
        </div>
      </div>
    </Section>
  );
}
