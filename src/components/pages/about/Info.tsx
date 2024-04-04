import { Section } from '@/components/ui/section';
import Image from 'next/image';

const IMAGES = [
  {
    src: 'https://res.cloudinary.com/dazt6g3o1/image/upload/v1710903364/mgmqaorpyocwutjj7l1y.webp',
    alt: '',
  },
  {
    src: 'https://res.cloudinary.com/dazt6g3o1/image/upload/v1710903379/flwwsodtiiwmexcyujqv.webp',
    alt: '',
  },
];

export default function Info() {
  return (
    <Section bgDirection="l" id="more-info">
      <div className="text-xl flex flex-col gap-40 max-w-[74rem]">
        <article className="grid md:grid-cols-2 gap-x-16 gap-y-6 items-center">
          <div className="flex flex-col gap-3" id="animation-text-l">
            <h1 className="text-4xl text-primary-title font-bold uppercase my-2">
              Marcamos la pauta para el futuro
            </h1>
            <p className="w-full max-w-3xl">
              Inspirando y conectando a profesionales de todas las áreas de la
              {' '}
              <strong>
                informática y
                de todos los niveles profesionales,
              </strong>
              {' '}
              IEEE CS guía el futuro de sus miembros y de
              la industria en general, permitiendo nuevas oportunidades tecnológicas para
              {' '}
              <strong>
                servir mejor a nuestro mundo.
              </strong>
            </p>
            <p className="w-full max-w-3xl">
              La informática y de todos los niveles profesionales, IEEE CS guía el futuro de
              sus miembros y de la
              {' '}
              <strong>industria en general.</strong>
            </p>
          </div>
          <Image
            src={IMAGES[0].src}
            alt={IMAGES[0].alt}
            width={600}
            height={600}
            className="rounded-lg w-full object-cover aspect-[4/3]"
            id="animation-image-r"
          />
        </article>
        <article className="grid md:grid-cols-2 gap-x-16 gap-y-6 items-center">
          <Image
            src={IMAGES[1].src}
            alt={IMAGES[1].alt}
            width={600}
            height={600}
            className="rounded-lg w-full object-cover aspect-[4/3] hidden md:flex"
            id="animation-image-l"
          />
          <div className="flex flex-col gap-3" id="animation-text-r">
            <h1 className="text-4xl text-primary-title font-bold uppercase my-2">
              Lideramos los desarrollos y avances en los campos de la informática y la ingeniería
            </h1>
            <p className="w-full max-w-3xl">
              <strong>Durante más de 75 años</strong>
              , el IEEE CS y sus miembros han alimentado la comunidad de
              la informática y la tecnología, desarrollando profesionales líderes,
              {' '}
              impulsando la rápida evolución de las tecnologías y
              <strong>
                {' '}
                fomentando iniciativas basadas en la comunidad.
              </strong>
            </p>
            <p className="w-full max-w-3xl">
              Como organización,
              {' '}
              <strong>IEEE CS continuará sirviendo como líder en la identificación,</strong>
              {' '}
              apoyo y avance de las oportunidades tecnológicas que
              {' '}
              <strong>benefician a la humanidad.</strong>
            </p>
          </div>
          <Image
            src={IMAGES[1].src}
            alt={IMAGES[1].alt}
            width={600}
            height={600}
            className="rounded-lg w-full object-cover aspect-[4/3] flex md:hidden"
            id="animation-image-l"
          />
        </article>
      </div>
    </Section>
  );
}
