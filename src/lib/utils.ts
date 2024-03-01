import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

function randomStrings(str: string): string[] {
  const TIMES = 40;
  const randomChars = '!"#$%&\'()*+,-./0123456789:;<=>?@'.split('');

  const input = str.split('');
  const result = [];

  for (let i = 0; i < TIMES; i += 1) {
    for (let j = 0; j < input.length; j += 1) {
      const random = Math.round(Math.random() * randomChars.length);
      input[j] = randomChars[random];
    }
    result.push(input.join(''));
  }

  return result;
}
