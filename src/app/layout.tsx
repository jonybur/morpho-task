import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Navbar } from '../components/Navbar'
import '../index.css'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500'],
  variable: '--font-inter',
  adjustFontFallback: true
})

export const metadata: Metadata = {
  title: 'Morpho Task',
  description: 'Morpho Task Application',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
} 