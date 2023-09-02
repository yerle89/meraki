import './globals.css'
import { Inter } from 'next/font/google'
import NavigationBar from './home/components/NavigationBar'
import Banner from './home/components/Banner'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Meraki',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      </head>
      <body className={inter.className}>
        <NavigationBar />
        <Banner />
        {children}
      </body>
    </html>
  )
}
