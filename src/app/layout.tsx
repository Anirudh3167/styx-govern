import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Providers } from "@/app/providers";
import SessionWrapper from "@/app/sessionWrapper";
import { Toaster } from "@/components/ui/toaster";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Styx AI",
  description: "AI Governance and Compliance",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SessionWrapper>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
           <Providers> {children} <Toaster />  </Providers>
        </body>
      </html>
    </SessionWrapper>
  );
}
