import type { Metadata } from 'next'
import Navbar from './components/Navbar'
import './globals.css'
import Footer from './components/Footer'

export const metadata: Metadata = {
  title: 'My Portfolio',
  description: 'My portfolio website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <Navbar/>
        <main>{children}</main>
        <Footer/>
      </body>
    </html>
  )
}