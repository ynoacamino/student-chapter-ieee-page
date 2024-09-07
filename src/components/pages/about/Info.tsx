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
              Para aquellos interesados en formar parte de nuestra comunidad, ofrecemos una variedad de actividades que incluyen talleres, cursos, visitas técnicas y seminarios.
            </p>
            <p className="w-full max-w-3xl">
              Estas iniciativas no solo mejoran las habilidades técnicas de nuestros miembros, sino que también fomentan la colaboración y el intercambio de conocimientos entre estudiantes y profesionales.
            </p>
          </div>
          <img
            src={IMAGES[0].src}
            alt={IMAGES[0].alt}
            width={600}
            height={600}
            className="rounded-lg w-full object-cover aspect-[4/3]"
            id="animation-image-r"
          />
        </article>
        <article className="grid md:grid-cols-2 gap-x-16 gap-y-6 items-center">
          <img
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
              Invitamos a todos los estudiantes y profesionales interesados en la tecnología a unirse a nosotros participando en la variedad de actividades que realizamos cada cierto tiempo.
            </p>
            <p className="w-full max-w-3xl">
              Juntos, podemos impulsar el crecimiento de la comunidad tecnológica en Arequipa y contribuir al desarrollo de innovaciones que impacten positivamente en la sociedad.
            </p>
          </div>
          <img
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
