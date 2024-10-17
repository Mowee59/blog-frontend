/*
 * This file is part of the Blog Frontend project.
 * 
 * Copyright (C) 2024 Aniss.dev
 * 
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 * 
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 * 
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */


import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/ui/header/Header";
import Footer from "@/components/ui/footer/Footer";
import { ThemeProviderComponent } from "@/providers/ThemeProviderComponent";
import "./globals.css";
import ReactQueryProviderComponent from "@/providers/ReactQueryProviderComponent";
import GoogleAnalytics from "@/components/GoogleAnalytics";

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
  // Create a Queryclient from react-query library

  return (
    // Warning: Hydration failed because the initial UI does not match what was returned from the server, because of the theme handling
    <html lang="fr" suppressHydrationWarning>
      <body className={inter.className}>
        <GoogleAnalytics />
        <ThemeProviderComponent>
          <ReactQueryProviderComponent>
            <Header />
            {children}
            <Footer />
          </ReactQueryProviderComponent>
        </ThemeProviderComponent>
      </body>
    </html>
  );
}
