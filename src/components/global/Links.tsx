'use client';

import { NAVLINKS } from '@/data/navLinks';
import Link from '@/components/ui/link';
import { usePathname } from 'next/navigation';

export default function Links() {
  const path = usePathname();

  return (
    <div className="md:flex gap-2 hidden font-semibold">
      {
      NAVLINKS.map(({ href, text }) => (
        <Link className="text-base" href={href} key={text} isSelect={path.includes(href) && href !== '/'}>
          {text}
        </Link>
      ))
      }
    </div>
  );
}
