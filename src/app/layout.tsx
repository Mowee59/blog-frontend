import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/ui/header/Header";
import Footer from "@/components/ui/footer/Footer";
import { ThemeProviderComponent } from "@/providers/ThemeProviderComponent";
import "./globals.css";
import ReactQueryProviderComponent from "@/providers/ReactQueryProviderComponent";

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
