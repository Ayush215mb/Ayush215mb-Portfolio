import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/common/navbar";

const manrope = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ayush215mb",
  description: "Portfolio of Ayush Yadav",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${manrope.className}  h-full antialiased`}>
      <body className="min-h-full bg-neutral-950 flex flex-col my-16  items-center">
        <Navbar />
        <main className=" mx-20 mt-20 max-w-2/3 ">{children}</main>
      </body>
    </html>
  );
}
