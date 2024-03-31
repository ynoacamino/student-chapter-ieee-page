import { Section } from '@/components/ui/section';
import Image from 'next/image';

export default function WhatIs() {
  return (
    <Section bgDirection="l" id="what-is">
      <div className="w-full text-center flex flex-col gap-10 items-center text-xl max-w-6xl">
        <h1 className="font-bold text-4xl text-primary-title">
          ¿Que es la IEEE Computer Society?
        </h1>
        <p className="w-full max-w-3xl">
          Con la participación de ingenieros informáticos, científicos, académicos y profesionales
          de la industria de todas las áreas de la informática, la IEEE Computer Society (CS)
          establece el estándar para la educación y el compromiso que alimenta el continuo
          avance tecnológico mundial.
        </p>
        <Image
          src="/images/about-us/photo1.png"
          alt="IEEE Computer Society"
          width={700}
          height={500}
          className="w-full h-auto rounded-lg shadow-lg my-4"
        />
        <p className="w-full max-w-3xl">
          A través de conferencias, publicaciones y programas, y reuniendo a los líderes de la
          informática y la ingeniería en cada fase de su carrera para el diálogo, el debate y la
          colaboración, IEEE CS faculta, da forma y guía el futuro no sólo de sus miembros,
          sino de la industria en general, permitiendo nuevas oportunidades.
        </p>
      </div>
    </Section>
  );
}
