import type { Metadata } from "next";
import {Urbanist} from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const urbanist = Urbanist({subsets: ["latin"]});

export const metadata: Metadata = {
  title: "Lucas Cid Portafolio",
  description: "Landing Page by Lucas Cid",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={urbanist.className}>
      <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
        {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
