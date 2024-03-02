import Image from 'next/image';
import { TEAM } from '@/data/team';
import Link from 'next/link';

export default function Avatars() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 w-full gap-8 my-40">
      {
        TEAM.map(({ avatar, position, name }) => (
          <Link
            href={`/teams/#${position}`}
            key={crypto.randomUUID()}
            className="flex gap-4 w-full items-center"
          >
            <Image
              src={avatar}
              alt={position}
              width={150}
              height={150}
              className="rounded-full"
            />
            <span className="flex flex-col">
              <h1 className="font-bold text-2xl text-primary-title">{`${name.split(' ')[0]} ${name.split(' ')[1]}`}</h1>
              <p className="text-xl">{position}</p>
            </span>
          </Link>
        ))
      }
    </section>
  );
}
