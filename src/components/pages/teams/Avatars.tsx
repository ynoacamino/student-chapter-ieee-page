import Image from 'next/image';
import { TEAM } from '@/data/team';
import Link from 'next/link';
import { Section } from '@/components/ui/section';

export default function Avatars() {
  return (
    <Section bgDirection="l">
      <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-8 max-w-6xl">
        {
        TEAM.map(({ avatar, position, name }) => (
          <Link
            href={`/teams/#${position.en}`}
            key={crypto.randomUUID()}
            className="flex gap-4 w-full max-w-[400px] items-center justify-self-center"
          >
            <Image
              src={avatar}
              alt={position.es}
              width={150}
              height={150}
              className="rounded-full"
              priority
            />
            <span className="flex flex-col">
              <h1 className="font-bold text-2xl text-primary-title">{`${name.split(' ')[0]} ${name.split(' ')[1]}`}</h1>
              <p className="text-xl">{position.es}</p>
            </span>
          </Link>
        ))
      }
      </div>
    </Section>
  );
}
