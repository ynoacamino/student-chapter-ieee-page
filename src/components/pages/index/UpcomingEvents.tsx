import { CalendarDays } from 'lucide-react';
import Image from 'next/image';

import { UPCOMING_EVENTS } from '@/data/events';

export default function UpcomingEvents() {
  return (
    <section className="w-full my-40 grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-4" id="upcoming-events">
      <div className="w-full flex flex-col gap-6 items-center md:items-start">
        <header className="flex flex-col gap-1">
          <h1 className="font-bold text-4xl text-center md:text-start text-primary-title">
            Eventos próximos
          </h1>
          <h2 className="text-xl text-center md:text-start">
            Estén atentos a los eventos que se avecinan próximamente
          </h2>
        </header>
        <main className="flex gap-6 flex-col w-full">
          {
          UPCOMING_EVENTS.slice(0, 2).map(({ title, description }) => (
            <div key={crypto.randomUUID()} className="flex items-center gap-4">
              <CalendarDays className="min-w-10 h-10" />
              <div className="">
                <h3 className="text-xl font-bold text-primary-title">{title}</h3>
                <h4 className="text-lg pr-12">{description}</h4>
              </div>
            </div>
          ))
        }
        </main>
      </div>
      <Image
        className="w-full aspect-video bg-web-gray-100 rounded-lg object-cover"
        src="/images/gallery/img_9.webp"
        alt=""
        width={600}
        height={600}
      />
    </section>
  );
}
