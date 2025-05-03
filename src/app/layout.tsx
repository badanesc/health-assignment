import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "open-props/normalize.min.css";
import "./globals.css";

import { Providers } from "./Providers";
import { Header } from "@/features/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Prescription App",
  description: "Used to keep track of prescriptions and request refills",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Header />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
