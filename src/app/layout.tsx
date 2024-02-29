import './globals.css';
import type { Metadata } from 'next';

import { cn } from '@/lib/utils';
import { Open_Sans } from 'next/font/google';
import ThemeProvider from '@/components/providers/ThemeProvider';

import Header from '@/components/global/Header';
import Footer from '@/components/global/Footer';

export const metadata: Metadata = {
  title: 'IEEE UNSA | Student Chapter',
  description: 'IEEE UNSA Student Chapter official website.',
};

// const monserrat = Montserrat({
//   subsets: ['latin'],
//   // weight: ['200', '400', '600', '700', '800', '900'],
// });

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
          'bg-background flex flex-col justify-start items-center text-primary',
          open_sans.className,
        )}
      >
        <ThemeProvider>
          <Header />
          <main className="flex flex-col items-center w-full max-w-6xl px-6">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
