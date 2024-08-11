import type { Metadata } from "next";
import "./globals.css";
import NavbarHeader from "@/components/navbar/header";
import Footer from "@/components/footer/footer";

export const metadata: Metadata = {
  title: "Contact Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="container max-w-[1400px] m-auto px-4">
        <NavbarHeader />
        {children}
        <Footer />
      </body>
    </html>
  );
}
