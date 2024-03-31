import Link from 'next/link';
import { NAVLINKS } from '@/data/navLinks';
import IEEEOfficial from '../logos/IEEEOfficial';

export default function Footer() {
  return (
    <footer className="w-full border-t border-section pt-10 flex justify-center items-start">
      <div className="grid grid-cols-1 lg:grid-cols-3 w-full max-w-7xl mb-10 gap-x-10 gap-y-14 px-6">
        <div className="w-full flex justify-center lg:justify-start">
          <IEEEOfficial className="w-full max-w-lg" />
        </div>
        <div className="w-full max-w-3xl flex justify-between items-start col-span-1 lg:col-span-2 flex-col lg:flex-row lg:justify-self-end justify-self-center">
          {
          NAVLINKS.map(({ links, text, href }) => {
            if (links) {
              return (
                <div key={crypto.randomUUID()} className="flex flex-col gap-3 border-b-[1px] lg:border-b-0 border-web-gray-300 py-4 w-full lg:w-auto">
                  <Link
                    href={href}
                    className="font-bold text-primary-title text-2xl"
                  >
                    {text}
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
              );
            }
            return null;
          })
        }
        </div>
      </div>
    </footer>
  );
}
