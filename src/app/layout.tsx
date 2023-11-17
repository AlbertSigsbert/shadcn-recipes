import type { Metadata } from "next";

import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "@/components/ui/toggle";

import { Inter } from "next/font/google";
import "./globals.css";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shadcn Recipes",
  description: "Recipes App developed using Shadcn UI Library and Nextjs v14",
};

export default function RootLayout({children}: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system">
          <nav className="flex justify-between">
            <h1>Shadcn Recipes</h1>
            <ModeToggle/>
          </nav>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
