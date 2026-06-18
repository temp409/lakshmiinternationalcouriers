import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lakshmi International Couriers",
  description:
    "Premium domestic and international courier services with pickup, packing, tracking, and worldwide delivery support."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
