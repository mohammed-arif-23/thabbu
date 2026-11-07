import type { Metadata, Viewport } from 'next';
import { Playfair_Display, DM_Sans, Dancing_Script, Alex_Brush } from 'next/font/google';
import './globals.css';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['600', '700', '800', '900'],
  style: ['normal', 'italic'],
  variable: '--font-serif',
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-sans',
  display: 'swap',
});

const dancingScript = Dancing_Script({
  subsets: ['latin'],
  weight: ['600', '700'],
  variable: '--font-cursive',
  display: 'swap',
});

const alexBrush = Alex_Brush({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-calligraphy',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'DEAR TAMATARR 🍅 — A Keepsake for Thabbu',
  description: "A little collection of things I remember about you. Not a breakup book, vaaipe ila po!",
  icons: {
    icon: 'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🍅</text></svg>',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: 'cover',
  themeColor: '#FFF9F3',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${dmSans.variable} ${dancingScript.variable} ${alexBrush.variable}`}
      style={{ colorScheme: 'light' }}
    >
      <body>{children}</body>
    </html>
  );
}
