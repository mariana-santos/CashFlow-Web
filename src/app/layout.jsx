import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

import { Toaster } from 'react-hot-toast'

export const metadata = {
  title: 'CashFlow',
  description: 'Plataforma de empréstimos',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        {children}

        <Toaster position='bottom-right' />
      </body>
    </html>
  )
}
