import type { Metadata } from 'next'
import { Navbar } from '../components/Navbar'
import '../index.css'

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
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap" rel="stylesheet" />
      </head>
      <body>
        <div id="root">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  )
} 