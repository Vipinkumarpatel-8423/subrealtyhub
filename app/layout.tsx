import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header/Header";
import Footer from "@/components/layout/Footer/Footer"

export const metadata: Metadata = {
  title: "SAB Realty Hub",
  description:
    "SAB Realty Hub - Real Estate Investment & Property Projects",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />

        {children}
        <Footer />
      </body>
    </html>
  );
}