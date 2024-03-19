import Link from 'next/link';
import Image from 'next/image';

export default function About() {
  return (
    <section className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 my-40" id="about">
      <div className="flex flex-col gap-3 text-xl justify-center ">
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
      <Image
        className="w-full aspect-video rounded-lg bg-web-gray-100 object-cover"
        alt=""
        src="https://res.cloudinary.com/dazt6g3o1/image/upload/v1710883836/bejo8x3wc3qr1pcpxr8m.jpg"
        width={600}
        height={600}
      />
    </section>
  );
}
