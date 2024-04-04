'use client';

import Image from 'next/image';
import { TEAM } from '@/data/team';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Avatars() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-4 max-w-6xl mb-24 px-3">
      {
        TEAM.map(({ avatar, position, name }, i) => (
          <motion.div
            key={crypto.randomUUID()}
            initial={{ opacity: 0, y: 200 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: i * 0.25, type: 'spring', stiffness: 300, damping: 24,
            }}
            className="w-full max-w-[460px] justify-self-center"
          >
            <Link
              href={`/teams/#${position.en}`}
              className="flex gap-4 w-full items-center hover:bg-accent transition-colors p-4 rounded-lg duration-150"
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
          </motion.div>
        ))
      }
    </div>
  );
}
