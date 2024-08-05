import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import "@/styles/main.scss";
import Navigation from "@/components/navigation/navigation-full";
import NavigationMenu from "@/components/navigation/navigation-menu";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <NavigationMenu />
        <main>{children}</main>
      </body>
    </html>
  );
}
