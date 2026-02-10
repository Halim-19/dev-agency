import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link"
import Image from "next/image"




export const metadata: Metadata = {
  title: "frameless Agency",
  description: "Created by @frameless_dev – Development & Design Studio",
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
        <Link href="/" className="fixed top-0 left-0 h-10 p-2 z-100">
          <Image
            src="/logo/logo.png"
            alt="frameless Agency Logo"
            width={0}
            height={0}
            sizes="100vw"
            className="w-10 h-auto pointer-events-none select-none opacity-90"
          />
        </Link>

        {children}
      </body>
    </html>
  );
}
