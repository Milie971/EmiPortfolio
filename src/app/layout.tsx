import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Quicksand } from "next/font/google";
import { cn } from "@/lib/utils";
import "./globals.css";

const QuicksandFont = Quicksand({
  subsets: ["latin"],
  variable: "--font-caption",
});

export const metadata: Metadata = {
  title: "Emilie Lolia . Concepteur d'application web",
  description:
    "Passionate software Engineer, ready for the coding adventure, always ready to learn something",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={cn(
          GeistSans.variable,
          GeistMono.variable,
          QuicksandFont.className,
          "font-sans h-full bg-background text-foreground"
        )}
      >
        {children}
      </body>
    </html>
  );
}
