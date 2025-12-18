import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Providers from "@/components/Providers";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-base",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Brindavan Chits | Modern, Secure, Transparent",
  description:
    "Brindavan Chits Karimnagar (India) Pvt. Ltd. — Modern, secure, transparent chit fund services with online auctions and VRM system.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased bg-white text-slate-900`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
