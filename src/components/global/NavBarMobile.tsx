'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { navLinks } from '@/data/navLinks';
import { Button } from '@/components/ui/button';
import Link from '@/components/ui/link';
import LanguageToggle from '@/components/ui/languageToggle';
import ThemeToggle from '@/components/ui/themeToggle';

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
          navLinks.map(({ href, text }) => (
            <Link
              className="text-xl w-full"
              href={href}
              key={text}
            >
              {text}
            </Link>
          ))
        }
        </div>
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <LanguageToggle />
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          type="button"
          aria-label="mas opciones"
          onClick={handleClick}
        >
          <X />
        </Button>
      </nav>
    </>
  );
}
