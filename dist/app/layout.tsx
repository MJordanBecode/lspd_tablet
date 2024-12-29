import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'LSPD Tablet',
  description: 'Tablette LSPD pour FiveM',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

