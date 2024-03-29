import { Metadata } from 'next';

import '../globals.css';

export const metadata: Metadata = {
  title: 'Paris Ciné Info - Le programme cinéma complet et sur mesure',
  description: 'Le programme cinéma complet et sur mesure',
};

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
