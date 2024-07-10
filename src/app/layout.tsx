import type { Metadata } from "next";
import {  Kode_Mono } from "next/font/google";
import AuthProvider from "./context/AuthProvider";
import "./globals.css";

const inter = Kode_Mono({ subsets: ["latin"], weight: "400", display: 'swap', adjustFontFallback: false});

export const metadata: Metadata = {
  title: "Silent Echoes",
  description: "A platform to send your thoughts anonymously.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <AuthProvider>
        <body className={inter.className}>
          {children}
        </body>
      </AuthProvider>
    </html>
  );
}
