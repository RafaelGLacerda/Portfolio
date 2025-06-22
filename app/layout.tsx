import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Rafael Lacerda',
    icons: {
    icon: '/icone.png',
  },
  description: 'Meu Portfolio',
  generator: 'Rafael Lacerda',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
