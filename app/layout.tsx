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
      <body className=" bg-neutral-950 py-20 ">
        <Navbar />
        <main className="w-full my-10">{children}</main>
      </body>
    </html>
  );
}
