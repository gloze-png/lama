import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ChatWidget from "./components/common/ChatWidget";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Zanan Legal Practitioners",
    template: "%s | Zanan Legal Practitioners",
  },

  description:
    "Zanan Legal Practitioners provides strategic, practical and dependable legal solutions to individuals, businesses and institutions.",

  keywords: [
    "Zanan Legal Practitioners",
    "Law Firm",
    "Legal Practitioners",
    "Lawyers",
    "Legal Services",
    "Corporate Law",
    "Dispute Resolution",
  ],

  authors: [
    {
      name: "Zanan Legal Practitioners",
    },
  ],

  creator: "Zanan Legal Practitioners",

  metadataBase: new URL("https://zananlegal.ng"),

  openGraph: {
    title: "Zanan Legal Practitioners",
    description:
      "Strategic legal counsel for individuals, businesses and institutions.",
    type: "website",
    locale: "en_NG",
    siteName: "Zanan Legal Practitioners",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="min-h-screen bg-white text-black">
        {children}
        <ChatWidget/>
      </body>
    </html>
  );
}