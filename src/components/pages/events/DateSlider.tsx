'use client';

import { motion } from 'framer-motion';
import { type Date } from '@/types/Date';

export default function DateSalider({ duration, dates }: { duration: number, dates: Date[] }) {
  const data = dates.concat(dates);
  const { length } = dates;

  return (
    <div
      className={`flex overflow-hidden font-semibold w-full max-w-[${
        10 * length
      }rem]`}
    >
      {data.map(({ day, event }) => (
        <motion.div
          className="aspect-square pr-2 min-w-[10rem]"
          key={crypto.randomUUID()}
          animate={{
            x: `-${10 * length}rem`,
          }}
          transition={{
            duration,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          {
            event ? (
              <div className="w-full rounded-lg bg-primary-title aspect-square text-3xl py-4 p-3 text-background flex flex-col overflow-hidden">
                <span>
                  {day}
                </span>
                <span className="text-xl">
                  {event}
                </span>
              </div>
            ) : (
              <div className="w-full rounded-lg bg-accent aspect-square text-3xl p-4">
                {day}
              </div>
            )
          }
        </motion.div>
      ))}
    </div>
  );
}
