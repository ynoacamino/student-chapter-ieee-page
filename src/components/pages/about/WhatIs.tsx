import { Section } from '@/components/ui/section';
import Image from 'next/image';

export default function WhatIs() {
  return (
    <Section bgDirection="l" id="what-is">
      <div
        className="w-full text-center flex flex-col gap-10 items-center text-xl max-w-6xl"
        id="animation-text-l"
      >
        <h1 className="font-bold text-4xl text-primary-title">
          ¿Que es la IEEE Computer Society?
        </h1>
        <p className="w-full max-w-3xl">
          La IEEE Computer Society es una organización internacional que reúne a profesionales y estudiantes interesados en el campo de la computación y la tecnología. Se dedica a la promoción del conocimiento y la innovación a través de la organización de conferencias, publicaciones y actividades técnicas.
        </p>
        <Image
          src="/images/about-us/photo1.png"
          alt="IEEE Computer Society"
          width={700}
          height={500}
          className="w-full h-auto rounded-lg shadow-lg my-4"
          id="animation-image-r"
        />
        <p className="w-full max-w-3xl">
          Su objetivo es fomentar el avance de la informática y proporcionar recursos valiosos para el desarrollo profesional de sus miembros.
        </p>
      </div>
    </Section>
  );
}
