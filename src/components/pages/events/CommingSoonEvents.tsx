import { FUTURE_EVENTS } from '@/data/events';
import { Section } from '@/components/ui/section';
import { Photos } from '@/components/ui/Photos';

export default function CommingSoonEvents() {
  return (
    <Section bgDirection="r" id="comming-soon-events">
      <div className="w-full flex flex-col items-center gap-4 max-w-6xl">
        <h1 className="text-primary-title font-bold text-5xl text-center">
          Próximamente más eventos
        </h1>
        <p className="text-xl text-center w-full max-w-2xl mb-24">
          Estén atentos a los eventos que se avecinan próximamente
        </p>
        <Photos PHOTOS={FUTURE_EVENTS.slice(2, 5)} id="CommingSoonEvents" />
      </div>
    </Section>
  );
}
