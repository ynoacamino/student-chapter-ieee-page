import { TEAM } from '@/data/team';
import Link from 'next/link';
import IEEEOfficial from '../logos/IEEEOfficial';

const LINKS = [
  {
    name: 'Home',
    path: '/',
    links: [
      {
        name: 'About',
        path: '/#about',
      },
      {
        name: 'About 2',
        path: '/#about2',
      },
      {
        name: 'Upcoming Events',
        path: '/#upcoming-events',
      },
    ],
  },
  {
    name: 'About',
    path: '/about',
    links: [
      {
        name: 'What is?',
        path: '/about/#what-is',
      },
      {
        name: 'Vission and Mission',
        path: '/about/#vision-and-mission',
      },
      {
        name: 'More info',
        path: '/about/#more-info',
      },
    ],
  },
  {
    name: 'Events',
    path: '/events',
    links: [
      {
        name: 'Upcoming Events',
        path: '/events/#upcoming-events',
      },
      {
        name: 'Comming Soon Events',
        path: '/events/#comming-soon-events',
      },
      {
        name: 'Past Events',
        path: '/events/#past-events',
      },
    ],
  },
  {
    name: 'Teams',
    path: '/teams',
    links: TEAM.map(({ position }) => ({
      name: position,
      path: `/teams/#${position}`,
    })),
  },
];

export default function Footer() {
  return (
    <footer className="grid grid-cols-1 lg:grid-cols-3 w-full mb-10 mt-20 gap-x-10 gap-y-14 px-6">
      <div className="w-full flex justify-center lg:justify-start">
        <IEEEOfficial className="w-full max-w-lg" />
      </div>
      <div className="w-full max-w-3xl flex justify-between items-start col-span-1 lg:col-span-2 flex-col lg:flex-row lg:justify-self-end justify-self-center">
        {
          LINKS.map(({ links, name, path }) => (
            <div key={crypto.randomUUID()} className="flex flex-col gap-3 border-b-[1px] lg:border-b-0 border-web-gray-300 py-4 w-full lg:w-auto">
              <Link
                href={path}
                className="font-bold text-primary-title text-2xl"
              >
                {name}
              </Link>
              <div className="flex flex-col text-lg gap-2 w-full">
                {
                  links.map(({ name: subName, path: subPath }) => (
                    <Link
                      href={subPath}
                      key={crypto.randomUUID()}
                      className="flex items-start text-start hover:underline min-w-fit"
                    >
                      {subName}
                    </Link>
                  ))
                }
              </div>
            </div>
          ))
        }
      </div>
    </footer>
  );
}
