import type { Metadata } from 'next'
import { Roboto_Mono } from 'next/font/google'
// @mui
import { CssBaseline } from '@mui/material'

const roboto = Roboto_Mono({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Next Solar App',
  description: 'SolarApp Case',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <CssBaseline />
      <html lang="en">
        <body className={roboto.className}>{children}</body>
      </html>
    </>
  )
}
