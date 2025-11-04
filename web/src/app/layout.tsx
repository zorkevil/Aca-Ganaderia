import type { Metadata } from 'next';
import { Heebo } from 'next/font/google';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'animate.css';
import 'tom-select/dist/css/tom-select.bootstrap5.min.css';
import './globals.css';
import '@/styles/bootstrap-custom.css';
import '@/styles/styles.css';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Script from 'next/script';

const heebo = Heebo({
  subsets: ['latin'],
  variable: '--font-heebo',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'ACA Ganadería',
    template: '%s | ACA Ganadería',
  },
  description: 'ACA Ganadería — Soluciones y servicios para el sector ganadero.',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${heebo.variable} font-sans antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />

        {/* Script de Bootstrap */}
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" />

        {/* WOW.js */}
        <Script
          src="https://cdn.jsdelivr.net/npm/wowjs@1.1.3/dist/wow.min.js"
          strategy="afterInteractive"
        />

        {/* Custom JS */}
        <Script src="/js/animations.js" strategy="afterInteractive" />
        <Script src="/js/main.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
