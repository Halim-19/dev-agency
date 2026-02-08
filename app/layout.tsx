import type { Metadata } from "next";
import "./globals.css";




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

        {children}
      </body>
    </html>
  );
}
