import './globals.css';
import type { Metadata } from 'next';

import { cn } from '@/lib/utils';
import { Open_Sans } from 'next/font/google';
import ThemeProvider from '@/components/providers/ThemeProvider';

import Header from '@/components/global/Header';
import Footer from '@/components/global/Footer';
import ProgressBarProvider from '@/components/providers/ProgressBarProvider';

export const metadata: Metadata = {
  title: 'IEEE UNSA | Student Chapter',
  description: 'IEEE UNSA Student Chapter official website.',
};

const open_sans = Open_Sans({
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          'bg-background flex flex-col justify-start items-center text-primary overflow-y-scroll',
          open_sans.className,
        )}
      >
        <ProgressBarProvider>
          <ThemeProvider>
            <Header />
            <main className="flex flex-col items-center w-full max-w-6xl px-6 ">
              {children}
            </main>
            <Footer />
          </ThemeProvider>
        </ProgressBarProvider>
      </body>
    </html>
  );
}
