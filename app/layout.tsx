import { Footer, Navbar } from './components'
import './globals.css'
import type { Metadata } from 'next'



export const metadata: Metadata = {
  title: 'Car Hub',
  description: 'Explore cars of your choice',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      
      <body className="relative">
        <Navbar/>
        {children}</body>
        <Footer/>
    </html>
  )
}
