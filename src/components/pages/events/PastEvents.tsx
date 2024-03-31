import Image from 'next/image';
import { PAST_EVENTS } from '@/data/events';
import { Section } from '@/components/ui/section';

export default function PastEvents() {
  return (
    <Section bgDirection="l" id="past-events">
      <section className="w-full flex flex-col items-center gap-4 max-w-6xl">
        <h1 className="text-primary-title font-bold text-5xl text-center">
          Eventos pasados
        </h1>
        <p className="text-xl text-center w-full max-w-2xl mb-24">
          Revive los eventos que ya han pasado, y si te los perdiste, no te preocupes, siempre
          habrá más.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full gap-6">
          {PAST_EVENTS.slice(0, 3).map(({ poster, title }) => (
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
