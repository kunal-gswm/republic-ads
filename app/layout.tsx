import type { Metadata } from 'next'
import { Cormorant_Garamond, Plus_Jakarta_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { Toaster } from "@/components/ui/sonner"
import { JsonLd } from "@/components/json-ld"
import './globals.css'

const cormorant = Cormorant_Garamond({ 
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-serif",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: 'RepublicAds | Performance Marketing for Delhi NCR Businesses & Startups',
  description: 'RepublicAds is a performance marketing agency helping Delhi NCR businesses and startups scale through SEO, Google My Business optimization, Google Ads, and Meta Ads. Book your free growth audit today.',
  icons: {
    icon: '/icon.png',
    apple: '/icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${jakarta.variable} bg-background`}>
      <body className="font-sans font-normal antialiased">
        {children}
        <Toaster />
        <JsonLd />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
