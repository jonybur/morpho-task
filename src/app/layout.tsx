import type { Metadata, Viewport } from 'next'
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

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  title: {
    template: '%s | Morpho Task',
    default: 'Morpho Task',
  },
  description: 'Morpho Task Application - Manage and explore vaults efficiently',
  keywords: ['morpho', 'defi', 'vaults', 'finance'],
  authors: [{ name: 'Morpho Team' }],
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'Morpho Task',
    description: 'Morpho Task Application - Manage and explore vaults efficiently',
  },
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