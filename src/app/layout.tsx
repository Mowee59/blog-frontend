import Script from 'next/script';import type { Metadata } from "next";
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
            {/* Google Analytics */}
            <Script async
        id="google-analytics"
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=G-T1XTL8NY99`}
      />
      <Script id="ga-setup" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-T1XTL8NY99', {
            page_path: window.location.pathname,
          });
        `}
      </Script>
      
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
