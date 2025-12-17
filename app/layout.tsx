import type { Metadata } from "next";
import "./globals.css";
import Image from "next/image";
import Link from "next/link";



export const metadata: Metadata = {
  title: "Shidda Agency",
  description: "Created by @shidda_dev – Development & Design Studio",
  icons: {
    icon: "/logo/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={` font-sans antialiased bg-black text-white`}
      >
        <Link href="/" className="fixed top-4 left-4 z-50">
          <Image
            src="/logo/logo.png"
            alt="Shidda Agency Logo"
            width={0}
            height={0}
            sizes="100vw"
            className="w-10 h-auto  pointer-events-none select-none opacity-90"
          />
        </Link>
        {children}
      </body>
    </html>
  );
}
