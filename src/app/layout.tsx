import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  applicationName: "Atlas Jo",
  title: "Atlas Jo | Digital Solutions That Scale",
  description:
    "Atlas Jo builds websites, SaaS products, automation systems, UI/UX interfaces, AI integrations, and scalable software architecture for startups and modern businesses.",
  keywords: [
    "web development",
    "SaaS",
    "automation",
    "UI/UX",
    "AI integration",
    "software architecture",
    "Atlas Jo",
    "Jordan",
  ],
  authors: [{ name: "Atlas Jo" }],
  creator: "Atlas Jo",
  publisher: "Atlas Jo",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "Atlas Jo | Digital Solutions That Scale",
    description:
      "Websites, SaaS products, automation systems, UI/UX interfaces, AI integrations, and scalable architecture.",
    siteName: "Atlas Jo",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: "Atlas Jo | Digital Solutions That Scale",
    description:
      "Atlas Jo builds websites, SaaS products, automation systems, UI/UX interfaces, AI integrations, and scalable architecture.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <body>{children}</body>
    </html>
  );
}
