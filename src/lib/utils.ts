import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function randomStrings({
  strStart, strEnd, times,
}: {
  strStart: string, strEnd: string, times: number
}): string[] {
  const TIMES = times;
  const randomChars = '!"#$%&\'()*+,-./0123456789:;<=>?@'.split('');

  const input = strStart.split('');
  const result = [];

  for (let i = 0; i < TIMES; i += 1) {
    const randomWord = [];

    for (let j = 0; j < input.length; j += 1) {
      let randomLetter;

      if (TIMES + j - input.length < i) {
        randomLetter = strEnd[j];
      } else {
        randomLetter = randomChars[Math.round(Math.random() * randomChars.length)];
      }

      randomWord[j] = randomLetter;
    }

    result.push(randomWord.join(''));
  }

  result.push(strEnd);

  return result;
}
