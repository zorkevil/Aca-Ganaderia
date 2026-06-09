import type { Metadata } from 'next';
import { Heebo } from 'next/font/google';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'animate.css';
import 'tom-select/dist/css/tom-select.bootstrap5.min.css';
import 'swiper/css';
import 'swiper/css/navigation';
import '@/styles/styles.css';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButtonServer from '@/components/misc/WhatsAppButton/WhatsAppButton.server';

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
    icon: [
      { url: '/img/branding/favicon/favicon.ico', type: 'image/x-icon' },
      { url: '/img/branding/favicon/favicon.svg', type: 'image/svg+xml' },
      { url: '/img/branding/favicon/favicon-96x96.png', type: 'image/png', sizes: '96x96' },
    ],
    apple: { url: '/img/favicon/apple-touch-icon.png', sizes: '180x180' },
  },
  manifest: '/site.webmanifest',
  applicationName: 'ACA Ganadería',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        {/* ==============================
            Google Tag Manager - ACA
        ============================== */}
        <Script id="gtm-init" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-TNXDXT2J');`}
        </Script>

        {/* ==============================
            Google Analytics 4 - Agencia
        ============================== */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-VC9H8LJ3SW"
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-VC9H8LJ3SW');
          `}
        </Script>
      </head>

      <body data-bs-theme="light" className={`${heebo.variable} font-sans antialiased`}>
        {/* ==============================
            Google Tag Manager (noscript) - ACA
        ============================== */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TNXDXT2J"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>

        <Header />

        <main>{children}</main>

        <WhatsAppButtonServer />

        <Footer />

        {/* ==============================
            Scripts globales
        ============================== */}

        {/* Bootstrap */}
        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
          strategy="afterInteractive"
        />

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
