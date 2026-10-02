import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, Playfair_Display } from 'next/font/google';
import './globals.css';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-sans',
  display: 'swap',
});

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-serif',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'ThrillHikers — Dream. Explore. Discover | Curated Group Trips & Tours',
  description:
    'Curated group trips and custom tours across the Himalayas, beaches, deserts and beyond. Small groups, verified trip captains, and transparent pricing.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} ${playfairDisplay.variable} scroll-smooth`}>
      <body className="antialiased min-h-screen flex flex-col bg-[#FDFDFC] text-stone-900 font-sans selection:bg-emerald-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}
