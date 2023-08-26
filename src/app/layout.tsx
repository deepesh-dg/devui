import MainNavbar from "@/components/MainNavbar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DevUI | For learners",
  description: "Common app templates in plain HTML and TailwindCSS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MainNavbar />
        <main className="lg:p-6 p-4 mx-auto max-w-6xl">{children}</main>
      </body>
    </html>
  );
}
