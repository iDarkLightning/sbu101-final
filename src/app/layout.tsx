import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { Nav } from "./components";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const bigilla = localFont({
  src: "./bigilla.woff2",
  display: "swap",
  variable: "--font-bigilla",
});

export const metadata: Metadata = {
  title: "Help the Homeless",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${bigilla.variable}`}>
        <Nav />
        {children}
      </body>
    </html>
  );
}
