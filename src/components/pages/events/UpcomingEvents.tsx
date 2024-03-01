import { CalendarDays, Clock } from 'lucide-react';

export default function UpcomingEvents() {
  const events = [
    {
      name: 'Workshop: Introduction to Web Development',
      description: 'Learn the basics of web development and build your first website.',
      date: 'March 20, 2023',
      hour: '10:00 AM - 12:00 PM',
      img: null,
    },
    {
      name: 'Workshop: Introduction to Web Development',
      description: 'Learn the basics of web development and build your first website.',
      date: 'March 20, 2023',
      hour: '10:00 AM - 12:00 PM',
      img: null,
    },
    {
      name: 'Workshop: Introduction to Web Development',
      description: 'Learn the basics of web development and build your first website.',
      date: 'March 20, 2023',
      hour: '10:00 AM - 12:00 PM',
      img: null,
    },
  ];

  return (
    <section className="w-full my-40 flex flex-col items-center gap-4">
      <h1 className="text-primary-title font-bold text-5xl text-center">
        Upcoming Events
      </h1>
      <p className="text-xl text-center w-full max-w-2xl mb-24">
        Join us at one of our upcoming events. From workshops to conferences,
        we&apos;ve got you covered.
      </p>
      <div className="flex flex-col gap-10">
        {
          events.map((event) => (
            <article key={crypto.randomUUID()} className="w-full grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-8">
              <div className="flex flex-col gap-2">
                <h2 className="font-bold text-2xl text-start text-primary-title">
                  {event.name}
                </h2>
                <p className="text-xl text-start mb-6">
                  {event.description}
                </p>
                <div className="flex flex-col gap-4 text-lg">
                  <div className="flex gap-4 items-center">
                    <CalendarDays className="w-8 h-8 " />
                    <h4 className="">{event.date}</h4>
                  </div>
                  <div className="flex gap-4 items-center">
                    <Clock className="w-8 h-8" />
                    <h4 className="">{event.hour}</h4>
                  </div>
                </div>
              </div>
              <div className="w-full aspect-video bg-web-gray-100 rounded-lg" />
            </article>
          ))
        }
      </div>
    </section>
  );
}
