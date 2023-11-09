import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Shadcn Recipes',
  description: 'Recipes App developed using Shadcn UI Library and Nextjs v14',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav>
          <h1>Shadcn Recipes</h1>
        </nav>
        {children}
      </body>
    </html>
  )
}
