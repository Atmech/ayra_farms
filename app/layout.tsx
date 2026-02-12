import type { Metadata } from "next";
import { Cormorant_Garamond, La_Belle_Aurore, Montserrat } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const laBelleAurore = La_Belle_Aurore({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-hand",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ayra Farms — The Heirloom Journal | Luxury Farmstay in Konkan",
  description:
    "A curated collection of slow moments, captured in the laterite heart of the Konkan coast. Experience luxury farmstay living in Dapoli, Ratnagiri, Maharashtra.",
  keywords: [
    "Ayra Farms",
    "luxury farmstay",
    "Konkan",
    "Dapoli",
    "Ratnagiri",
    "Maharashtra",
    "slow living",
    "heritage stay",
  ],
  openGraph: {
    title: "Ayra Farms — The Heirloom Journal",
    description:
      "A curated collection of slow moments, captured in the laterite heart of the Konkan coast.",
    siteName: "Ayra Farms",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ayra Farms — The Heirloom Journal",
    description:
      "Luxury farmstay in Dapoli, Ratnagiri. Slow living in the Konkan coast.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${cormorant.variable} ${laBelleAurore.variable} ${montserrat.variable} bg-parchment text-ink font-serif overflow-x-hidden antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
