import Footer from './components/Footer'
import Header from './components/Header'
import './globals.css'
import { Outfit } from 'next/font/google'

const outfit = Outfit({ subsets: ['latin'] })

export const metadata = {
  title: "Winifred's portfolio",
  description: 'Writer, Content Creator',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body><Header/>{children}<Footer/></body>
    </html>
  )
}
