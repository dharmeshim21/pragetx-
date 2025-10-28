// app/layout.js

import "./globals.css";
import { IBM_Plex_Sans } from 'next/font/google';
import localFont from 'next/font/local';
import Providers from "./Providers";

// Configure IBM Plex Sans for headings
const ibmPlexSans = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['700'], // Use a bold weight for headings
  variable: '--font-ibm-plex-sans',
});

// Configure Satoshi for body text
const satoshi = localFont({
  src: [
    {
      path: '../public/Fonts/WEB/Satoshi-Regular.ttf',
      weight: '400',
    },
    {
      path: '../public/Fonts/WEB/Satoshi-Medium.ttf',
      weight: '500',
    },
  ],
  variable: '--font-satoshi',
});

export const metadata = {
  title: 'Automate Your Business Workflow in the Age of AI Agents | PragetX AI',
  description: 'PragetX is a trusted Custom Software Development Services provider. We help you craft conversion-focused websites with our globally available developers.',
  keywords: 'mobile app development company, app development, food delivery app, food delivery solution, online food app, android app development, iOS app development, India, USA, UAE, Sweden, Turkey, California, Top app development companies, on-demand solution',
  alternates: {
    canonical: 'https://pragetx.ai/',
  },
  openGraph: {
    title: 'Automate Your Business Workflow in the Age of AI Agents | PragetX AI',
    description: 'PragetX is a trusted Custom Software Development Services provider. We help you craft conversion-focused websites with our globally available developers.',
    url: '/',
    images: 'https://pragetx.ai/images/pragetx-bg.png',
  },
  icons: {
    icon: [{ url: '/images/favicon.png', type: 'image/webp' }],
    shortcut: [{ url: '/images/favicon.png', type: 'image/x-icon' }, { url: '/images/favicon.ico', type: 'image/x-icon' }],
  },
  verification: {
    google: 'hONy0TgECZnD84eIMrLiJyvwvc10p_6jYaaeTSvgzjM',
  },
}
export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${ibmPlexSans.variable} ${satoshi.variable}`}>
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}