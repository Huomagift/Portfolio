import type { Metadata } from 'next';
import './globals.css';
import SmoothScroll from '@/components/motion/SmoothScroll';
import CustomCursor from '@/components/motion/CustomCursor';

export const metadata: Metadata = {
  title: 'Gift Amadi (huomagift) — Electrical/Electronics Engineer |AI Product Developer | Software developer',
  description: 'I build products that solve problems. Portfolio of Gift Amadi (huomagift) featuring Rights Compass, Harvest Rescue, StuffSwap, and more.',
  keywords: ['Gift Amadi', 'huomagift', 'Software Developer Nigeria', 'AI Products Nigeria', 'Next.js', 'React Native', 'Rights Compass', 'Harvest Rescue'],
  authors: [{ name: 'Gift (huomagift)', url: 'https://linkedin.com/in/huomagift' }],
  metadataBase: new URL('https://huomagift.vercel.app/'),
  openGraph: {
    title: 'Gift Amadi (huomagift) — Products That Solve Problems',
    description: 'Software developer and Product developer building scalable and sustainable solutions.',
    url: 'https://huomagift.vercel.app/',
    siteName: 'Gift Portfolio',
    locale: 'en_NG',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gift (huomagift) — AI Product Developer',
    description: 'I build products that solve problems',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-ink text-bone font-sans min-h-screen relative antialiased selection:bg-coral selection:text-white">
        <SmoothScroll>
          <CustomCursor />
          {/* Subtle noise grain texture over whole page */}
          <div className="grain-overlay fixed inset-0 z-50 pointer-events-none" />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
