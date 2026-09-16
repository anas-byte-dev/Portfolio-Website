import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
})

const siteUrl = 'https://anas-siddiqui.vercel.app'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Anas Siddiqui | Java Full Stack Developer',
  description:
    'Portfolio of Anas Siddiqui — Java Full Stack Developer building full-stack applications with Java, Spring Boot, React.js, MySQL, and REST APIs.',
  keywords: [
    'Anas Siddiqui',
    'Java Full Stack Developer',
    'Spring Boot',
    'React.js',
    'MySQL',
    'REST APIs',
    'Portfolio',
  ],
  authors: [{ name: 'Anas Siddiqui' }],
  openGraph: {
    type: 'website',
    url: siteUrl,
    title: 'Anas Siddiqui | Java Full Stack Developer',
    description:
      'Full-stack applications with Java, Spring Boot, React.js, MySQL, and REST APIs.',
    siteName: 'Anas Siddiqui',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Anas Siddiqui | Java Full Stack Developer',
    description:
      'Full-stack applications with Java, Spring Boot, React.js, MySQL, and REST APIs.',
  },
  generator: 'v0.app',
}

export const viewport: Viewport = {
  colorScheme: 'dark light',
  themeColor: '#0a0a0f',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`dark bg-background ${inter.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
