'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { NAVLINKS } from '@/data/navLinks';
import { Button } from '@/components/ui/button';
import Link from '@/components/ui/link';
import ThemeToggleMobile from '@/components/ui/themeToogleMobile';

export default function NavBarMobile() {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        className="md:hidden"
        type="button"
        aria-label="mas opciones"
        onClick={handleClick}
      >
        <Menu />
      </Button>
      <nav className={`flex flex-col items-center justify-center gap-4 fixed h-screen z-[1000]
        w-full bg-one dark:bg-one-dark top-0 left-0 ${isOpen || 'left-[-100vh] opacity-0'} md:hidden transition-all bg-background`}
      >
        <div className="w-full max-w-40 flex flex-col gap-4">
          {
          NAVLINKS.map(({ href, text }) => (
            <button type="button" onClick={handleClick} key={text}>
              <Link
                className="text-xl w-full"
                href={href}

              >
                {text}
              </Link>
            </button>
          ))
        }
        </div>
        <ThemeToggleMobile />
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden w-14 h-14 mt-10"
          type="button"
          aria-label="mas opciones"
          onClick={handleClick}
        >
          <X className="w-16 h-16 stroke-1" />
        </Button>
      </nav>
    </>
  );
}
