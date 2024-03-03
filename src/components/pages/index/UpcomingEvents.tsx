import { CalendarDays } from 'lucide-react';
import Image from 'next/image';

export default function UpcomingEvents() {
  return (
    <section className="w-full my-40 grid grid-cols-1 md:grid-cols-2 gap-y-10" id="upcoming-events">
      <div className="w-full flex flex-col gap-6 items-center md:items-start">
        <header className="flex flex-col gap-1">
          <h1 className="font-bold text-4xl text-center lg:text-start text-primary-title">Upcoming Events</h1>
          <h2 className="text-xl text-center lg:text-start">Stay tuner for events coming soon</h2>
        </header>
        <main className="pl-4 flex gap-5 flex-col w-full">
          {
          Array.from({ length: 2 }).map(() => (
            <div key={crypto.randomUUID()} className="flex items-center gap-4">
              <CalendarDays className="w-9 h-9" />
              <div className="">
                <h3 className="text-xl font-bold text-primary-title">Event 1 Name</h3>
                <h4 className="text-xl">Event 1 description</h4>
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
