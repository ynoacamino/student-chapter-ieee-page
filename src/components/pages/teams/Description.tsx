import Image from 'next/image';
import { TEAM } from '@/data/team';
import { Github, Instagram, Linkedin } from 'lucide-react';
import Link from '@/components/ui/link';

export default function Description() {
  return (
    <section className="w-full my-40 flex flex-col gap-10">
      {
        TEAM.map(({
          description, name, photo, position,
        }) => (
          <div
            key={crypto.randomUUID()}
            className="grid grid-cols-1 md:grid-cols-3 gap-x-0 md:gap-x-6 gap-y-10 md:gap-y-0 w-full"
            id={position.en}
          >
            <Image
              src={photo}
              alt={name}
              width={600}
              height={600}
              className="aspect-square bg-web-gray-100 w-full rounded-lg"
            />
            <div className="col-span-2 flex flex-col justify-start items-start gap-8">
              <span className="flex flex-col gap-2">
                <h1 className="font-bold text-3xl text-primary-title">{`${name.split(' ')[0]} ${name.split(' ')[1]}`}</h1>
                <p className="text-xl">{description}</p>
              </span>
              <span className="flex gap-2 text-lg flex-wrap">
                <Link href="/" className="flex gap-4 items-center w-40">
                  <span className="flex-1 text-center">Github</span>
                  <Github size={24} />
                </Link>
                <Link href="/" className="flex gap-4 items-center w-40">
                  <span className="flex-1 text-center">Instagram</span>
                  <Instagram size={24} />
                </Link>
                <Link href="/" className="flex gap-4 items-center w-40">
                  <span className="flex-1 text-center">Linkedin</span>
                  <Linkedin size={24} />
                </Link>
              </span>
            </div>
          </div>
        ))
      }
    </section>
  );
}
