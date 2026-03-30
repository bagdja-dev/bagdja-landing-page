import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:4000"),
  title: {
    default: "Bagdja — The Integrated Distribution Platform",
    template: "%s | Bagdja",
  },
  description:
    "Bagdja unifies distribution (Store), identity (SSO/Auth), and monetization (Billing) into one SDK and dashboard — built for modern developers.",
  openGraph: {
    type: "website",
    title: "Bagdja — The Integrated Distribution Platform",
    description:
      "Store × Identity × Monetize — one platform for discovery, authentication, and billing.",
    images: [{ url: "/icon-logo.png", width: 1200, height: 630, alt: "Bagdja" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bagdja — The Integrated Distribution Platform",
    description:
      "Store × Identity × Monetize — one platform for discovery, authentication, and billing.",
    images: ["/icon-logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
