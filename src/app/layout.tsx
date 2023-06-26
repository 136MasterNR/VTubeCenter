import '../scss/globals.scss'
import { Plus_Jakarta_Sans } from 'next/font/google'

const fontPrimary = Plus_Jakarta_Sans({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={fontPrimary.className}>{children}
      <div className="bg"></div>
      </body>
    </html>
  )
}
