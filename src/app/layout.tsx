import React from "react";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: 'BES Beauty POS',
  description: 'bes beauty',
}

export default function RootLayout({children}:{children:React.ReactNode}) {
  return (
    <html lang="en">
      <link rel="icon" href="/icon.ico" sizes="any" />
      <body>{children}</body>
    </html>
  );
}
