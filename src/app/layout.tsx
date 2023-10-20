import { Footer } from './components/footer'
import { Header } from './components/header'
import './globals.css'
import './variables.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import StyledComponentsRegistry from './lib/registry'
import { OpenSans } from './fonts'
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Koch Empreendimentos',
  description: 'Generated by create next app',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false
  },
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className={`${inter.className} ${OpenSans.className}`}>
          <StyledComponentsRegistry>
            <Header/>
            {children}
            <Footer/>
          </StyledComponentsRegistry>
        </body>
    </html>
  )
}
