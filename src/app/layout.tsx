import type { Metadata, Viewport } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import GlobalScrollTop from "@/components/layout/GlobalScrollTop";
import PageReveal from "@/components/layout/PageReveal";
import CookieConsent from "@/components/layout/CookieConsent";
import SecurityLoader from "@/components/layout/SecurityLoader";
import Script from "next/script";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: 'swap',
});

const poppins = Poppins({
  weight: ['400', '600', '700', '900'],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: 'swap',
});

export const viewport: Viewport = {
  themeColor: "#ff3c3c",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://pizzastarweb.netlify.app'),
  title: "Pizza Star | Taste the Star of Flavor 🍕",
  description: "Authentic wood-fired Indian fusion pizzas. Discover our recipes, blog, and download the Pizza Star app for exclusive deals.",
  keywords: ["Pizza Star", "Indian Fusion Pizza", "Pizza Blog", "Download Pizza App", "Best Pizza in India"],
  manifest: "/manifest.json",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://pizzastarweb.netlify.app",
    siteName: "Pizza Star",
    title: "Pizza Star | Taste the Star of Flavor 🍕",
    description: "Authentic wood-fired Indian fusion pizzas. Discover our recipes, blog, and app.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://pizzastarweb.netlify.app';
  const GA_ID = process.env.NEXT_PUBLIC_GA_ID || 'G-XXXXXXXXXX';
  const ADSENSE_ID = process.env.NEXT_PUBLIC_ADSENSE_ID || 'ca-pub-9190694258297146';

  return (
    <html lang="en" className="dark scroll-smooth" style={{ colorScheme: 'dark' }}>
      <head>
        <meta name="google-adsense-account" content="ca-pub-9190694258297146" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://pagead2.googlesyndication.com" />
        <link rel="canonical" href={SITE_URL} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Restaurant",
              "name": "Pizza Star",
              "image": `${SITE_URL}/og-image.jpg`,
              "@id": SITE_URL,
              "url": SITE_URL,
              "telephone": "+91XXXXXXXXXX",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Rajound",
                "addressLocality": "Kaithal",
                "addressRegion": "Haryana",
                "postalCode": "136027",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 29.8333,
                "longitude": 76.4667
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday"
                ],
                "opens": "11:00",
                "closes": "23:00"
              },
              "menu": `${SITE_URL}/menu`,
              "servesCuisine": ["Pizza", "Indian Fusion"],
              "priceRange": "$$"
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Pizza Star",
              "url": SITE_URL,
              "potentialAction": {
                "@type": "SearchAction",
                "target": `${SITE_URL}/blog?q={search_term_string}`,
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
          `}
        </Script>
        <Script
          async
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_ID}`}
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />

      </head>
      <body className={`${inter.variable} ${poppins.variable} antialiased selection:bg-pizza-primary/20`}>
        <SecurityLoader />
        <GlobalScrollTop />
        <CookieConsent />
        <Navbar />
        <main className="min-h-screen">
          <PageReveal>
            {children}
          </PageReveal>
        </main>
        <Footer />
      </body>
    </html>
  );
}
