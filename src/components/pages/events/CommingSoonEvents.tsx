import Image from 'next/image';

import { FUTURE_EVENTS } from '@/data/events';
import { Section } from '@/components/ui/section';

export default function CommingSoonEvents() {
  return (
    <Section bgDirection="r" id="comming-soon-events">
      <section className="w-full flex flex-col items-center gap-4 max-w-6xl">
        <h1 className="text-primary-title font-bold text-5xl text-center">
          Próximamente más eventos
        </h1>
        <p className="text-xl text-center w-full max-w-2xl mb-24">
          Estén atentos a los eventos que se avecinan próximamente
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 w-full gap-6">
          {FUTURE_EVENTS.slice(2, 5).map(({ poster, title }) => (
            <Image
              key={crypto.randomUUID()}
              className="aspect-square w-full rounded-lg bg-web-gray-100 object-cover"
              src={poster.thumbnail}
              alt={title}
              width={600}
              height={600}
            />
          ))}
        </div>
      </section>
    </Section>
  );
}
