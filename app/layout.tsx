import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Rafael Lacerda',
  icons: {
    icon: 'images/icone.png',
  },
  description:
    'Portfolio of Rafael Lacerda, a full-stack software and web engineer building modern web apps with Next.js, TypeScript, React, Node.js and more.',
  keywords: [
    'Rafael Lacerda',
    'Software Engineer',
    'Full-Stack Developer',
    'Next.js',
    'React',
    'TypeScript',
    'Node.js',
    'Portfolio',
  ],
  authors: [{ name: 'Rafael Lacerda' }],
  openGraph: {
    title: 'Rafael Lacerda — Full-Stack Software Engineer',
    description:
      'Full-stack software and web engineer building modern web apps with Next.js, TypeScript, React and Node.js.',
    type: 'website',
  },
  generator: 'v0.app',
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#111318' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${spaceGrotesk.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
