import Image from 'next/image';
import { Section } from '@/components/ui/section';

export default function About() {
  return (
    <Section bgDirection="l" id="about">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 max-w-6xl mx-auto">
        <div className="flex flex-col gap-3 text-xl justify-center ">
          <h1 className="text-4xl text-primary-title font-bold">Sobre nosotros</h1>
          <p>
            El capítulo técnico de IEEE Computer Society en la Universidad Nacional de San Agustín de Arequipa está comprometido con el avance de la ciencia y la tecnología. Nos enfocamos en facilitar el intercambio de información técnica entre nuestros miembros y fomentar un entorno de aprendizaje continuo y desarrollo profesional.
          </p>
          <p>
            Nuestro principal objetivo es involucrar tanto a estudiantes como a profesionales en el ámbito de las tecnologías digitales, asegurando que se mantengan altos estándares de conocimiento y habilidades técnicas.
          </p>
        </div>
        <Image
          className="w-full aspect-video rounded-lg bg-web-gray-100 object-cover"
          alt=""
          src="https://res.cloudinary.com/dazt6g3o1/image/upload/v1716953760/pnmoa0bfgucs69lmt5rq.webp"
          width={600}
          height={600}
        />
      </div>
    </Section>
  );
}
