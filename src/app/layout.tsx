import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/ui/header/Header";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Blog - Homepage",
  description: "My Blog",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
