import type { Metadata } from "next";
import { Inter, Bebas_Neue } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/content";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${siteConfig.name} | ${siteConfig.tagline}`,
  description: siteConfig.description,
  keywords: ["auto detailing", "ceramic coating", "paint correction", "car wash", "mobile detailing", "Orlando"],
  openGraph: {
    title: `${siteConfig.name} | ${siteConfig.tagline}`,
    description: siteConfig.description,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${bebas.variable}`}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
