import type { Metadata } from "next";
import { Overpass } from "next/font/google";
import "./globals.css";

const overpass = Overpass({
  variable: "--font-overpass",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  display: "swap",
});

const title = "Binsar Damanik — Backend Developer (Node.js / TypeScript)";
const description =
  "Backend developer building production APIs with Node.js / TypeScript (NestJS, Express) and PostgreSQL. Banking and real-estate systems. Seeking remote (UTC+7).";

export const metadata: Metadata = {
  metadataBase: new URL("https://binsar-portofolio.vercel.app"),
  title,
  description,
  openGraph: {
    title,
    description,
    url: "/",
    siteName: "Binsar Damanik",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${overpass.variable} antialiased`}>{children}</body>
    </html>
  );
}
