import { Section } from '@/components/ui/section';

export default function VisionAndMision() {
  return (
    <Section bgDirection="r" id="vision-and-mission">
      <div className="grid grid-cols-1 md:grid-cols-2 text-center text-xl gap-x-20 gap-y-20 max-w-6xl">
        <article className="flex flex-col items-center gap-6" id="animation-text-l">
          <h1 className="text-4xl text-primary-title font-bold">
            Visión
          </h1>
          <div className="w-full max-w-md flex flex-col gap-4">
            <p>
              Nuestra visión es convertirnos en un referente en la promoción del conocimiento tecnológico y científico, creando una comunidad vibrante y colaborativa que inspire a los estudiantes y profesionales a liderar proyectos innovadores y a contribuir activamente en el desarrollo de la tecnología.
            </p>
          </div>
        </article>
        <article className="flex flex-col items-center gap-6" id="animation-text-r">
          <h1 className="text-4xl text-primary-title font-bold">
            Misión
          </h1>
          <div className="w-full max-w-md flex flex-col gap-4">
            <p>
              Nuestra misión es fomentar el interés y la participación en el campo de la informática y la tecnología, ofreciendo oportunidades de aprendizaje y desarrollo profesional a través de diversas actividades y eventos. Buscamos crear un entorno de cooperación y apoyo que promueva la excelencia técnica y el crecimiento continuo de nuestros miembros.
            </p>
          </div>
        </article>
      </div>
    </Section>
  );
}
