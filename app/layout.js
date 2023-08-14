import Head from 'next/head'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Solution Group - Solution Box ',
  description: 'Mayorista de informatica y telecomunicaciones',
  manifest: '/manifest.json',
  icons: { apple: "/apple-touch-icon.png" },
  themeColor: '#000000'
}

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/apple-touch-icon.png" />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
