import type { Metadata } from 'next';
import './globals.css';
import SmoothScroll from '@/components/motion/SmoothScroll';
import CustomCursor from '@/components/motion/CustomCursor';

export const metadata: Metadata = {
  title: 'Gift Amadi (huomagift) — AI Product Developer | Software developer',
  description: 'I build products that solve problems, and I ship them. Portfolio of Gift Amadi (huomagift) featuring Rights Compass, Harvest Rescue AI, StuffSwap, and more.',
  keywords: ['Gift', 'huomagift', 'Software Developer Nigeria', 'AI Products Nigeria', 'Next.js', 'React Native', 'Rights Compass', 'Harvest Rescue AI'],
  authors: [{ name: 'Gift (huomagift)', url: 'https://linkedin.com/in/huomagift' }],
  metadataBase: new URL('https://huomagift.github.io/Portfolio/'),
  openGraph: {
    title: 'Gift Amadi (huomagift) — Products That Solve Problems',
    description: 'Software developer and Product developer building AI-powered MVPs for Nigeria and Africa.',
    url: 'https://huomagift.github.io/Portfolio/',
    siteName: 'Gift Portfolio',
    locale: 'en_NG',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gift (huomagift) — AI Product Developer',
    description: 'I build products that solve problems, and I ship them.',
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
          href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:ital,opsz,wght@0,12..96,700;0,12..96,800;1,12..96,700;1,12..96,800&family=DM+Mono:ital,wght@0,400;0,500;1,400&family=Familjen+Grotesk:ital,wght@0,400..700;1,400..700&family=Instrument+Serif:ital@0;1&family=Syne:ital,wght@0,700;0,800;1,700;1,800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-ink text-bone font-body min-h-screen relative antialiased selection:bg-coral selection:text-white">
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
