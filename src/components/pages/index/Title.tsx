'use client';

import { cn, randomStrings } from '@/lib/utils';
import {
  useEffect, useMemo, useState,
} from 'react';

export default function Title() {
  const FIRST_WORD = 'COMPUTER';
  const SECOND_WORD = 'SOCIETY';
  const MILISECONDS = 80;
  const TIMES = 10;

  const [firstWord, setFirstWord] = useState(';&-1@:=');
  const [secondWord, setSecondWord] = useState('.:/=3,');

  const words1 = useMemo(() => randomStrings({
    strEnd: FIRST_WORD,
    strStart: '/-4!!)@',
    times: TIMES,
  }), []);

  const words2 = useMemo(() => randomStrings({
    strEnd: SECOND_WORD,
    strStart: "8+2>.'",
    times: TIMES + FIRST_WORD.length,
  }), []);

  const [index1, setIndex1] = useState(0);
  const [index2, setIndex2] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setFirstWord(words1[index1]);
      setSecondWord(words2[index2]);

      if (index1 < words1.length - 1) setIndex1(index1 + 1);
      if (index2 < words2.length - 1) setIndex2(index2 + 1);

      if (index1 >= words1.length - 1 && index2 >= words2.length - 1) {
        clearInterval(interval);
      }
    }, MILISECONDS);

    return () => clearInterval(interval);
  }, [index1, index2, firstWord, secondWord, words1, words2]);

  return (
    <div className="flex flex-col w-full my-40 max-w-4xl gap-4 px-6">
      <h1 className="text-primary-title font-extrabold flex flex-col text-6xl sm:text-8xl md:text-9xl leading-[0.9] overflow-hidden">
        <span className="text-web-gray text-6xl sm:text-7xl md:text-8xl">IEEE</span>
        <span className="flex">
          {
            firstWord.split('').map((letter, i) => (
              <span
                key={crypto.randomUUID()}
                className={cn('w-16 sm:w-24 md:w-28 text-center', {
                  'text-web-gray-200': letter !== FIRST_WORD[i],
                })}
              >
                {letter}
              </span>
            ))
          }
          <span className="sr-only">{FIRST_WORD}</span>
        </span>
        <span className="flex">
          {
            secondWord.split('').map((letter, i) => (
              <span
                key={crypto.randomUUID()}
                className={cn('w-16 sm:w-20 md:w-24 text-center', {
                  'text-web-gray-200': letter !== SECOND_WORD[i],
                })}
              >
                {letter}
              </span>
            ))
          }
          <span className="sr-only">{SECOND_WORD}</span>
        </span>
      </h1>
      <h2 className="text-3xl font-semibold">
        Universidad Nacional de San Agustín de Arequipa
      </h2>
    </div>
  );
}
