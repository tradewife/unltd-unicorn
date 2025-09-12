import './globals.css';
import { IM_Fell_English } from 'next/font/google';
import { GeistSans } from 'geist/font/sans';
import type { Metadata } from 'next';
import React from 'react';

const display = IM_Fell_English({ weight: '400', subsets: ['latin'], variable: '--font-display' });

export const metadata: Metadata = {
  title: 'UNLTD — Computational Amplification by Aegntic',
  description:
    'Context-engineered, multi-agent systems that turn expert knowledge into shipped products—safely, repeatably. Join the waitlist.',
  openGraph: {
    title: 'UNLTD — Computational Amplification by Aegntic',
    description:
      'Context-engineered, multi-agent systems that turn expert knowledge into shipped products—safely, repeatably.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${GeistSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
