import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import SiteLayout from '../components/Layout';
import { SITE_INFO } from '../constants';
import './globals.css';

export const metadata: Metadata = {
  title: `${SITE_INFO.name} | Nutrition & Bien-être`,
  description:
    'Entreprise agroalimentaire camerounaise spécialisée dans la transformation naturelle du soja, du mil et du pois d’Angole.',
  icons: {
    icon: [
      { url: '/images/logo.png' },
      { url: '/favicon.png' },
    ],
    apple: '/images/logo.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>
        <SiteLayout>{children}</SiteLayout>
      </body>
    </html>
  );
}
