import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { ClientProviders } from "@/components/shared/ClientProviders";
import { GoogleAnalytics } from "@/components/shared/GoogleAnalytics";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: "ElectIQ | Election Education & Voter Journey Platform",
  description: "Your non-partisan guide to the electoral process, voting rights, and civic engagement.",
  keywords: ["elections", "voting rights", "civic education", "US elections", "voter registration"],
  authors: [{ name: "ElectIQ Team" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  openGraph: {
    title: "ElectIQ | Your Voter Journey Starts Here",
    description: "Navigate the complex world of elections with ease.",
    url: "https://election-education-542097547792.us-central1.run.app",
    siteName: "ElectIQ",
    images: [
      {
        url: "https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?auto=format&fit=crop&q=80&w=1200",
        width: 1200,
        height: 630,
        alt: "ElectIQ Platform Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ElectIQ | Election Education Platform",
    description: "Your guide to the electoral process.",
    images: ["https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?auto=format&fit=crop&q=80&w=1200"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <body className="antialiased">
        <GoogleAnalytics />
        <ClientProviders>{children}</ClientProviders>
      </body>
    </html>
  );
}
