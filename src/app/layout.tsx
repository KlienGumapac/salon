import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sheila Magpale Salon - Home of Champions | Professional Hair & Beauty Services",
  description: "Experience world-class hair styling, beauty treatments, and personalized care at Sheila Magpale Salon. Where beauty meets excellence and transforms you into a champion.",
  keywords: "hair salon, beauty salon, hair styling, hair coloring, bridal services, makeup, hair treatments, Sheila Magpale",
  authors: [{ name: "Sheila Magpale Salon" }],
  creator: "Sheila Magpale Salon",
  publisher: "Sheila Magpale Salon",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://sheilamagpalesalon.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Sheila Magpale Salon - Home of Champions",
    description: "Experience world-class hair styling, beauty treatments, and personalized care that transforms you into a champion.",
    url: 'https://sheilamagpalesalon.com',
    siteName: 'Sheila Magpale Salon',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Sheila Magpale Salon - Professional Beauty Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Sheila Magpale Salon - Home of Champions",
    description: "Experience world-class hair styling, beauty treatments, and personalized care that transforms you into a champion.",
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-site-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${playfair.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
