import Header from './components/header/Header'
import './globals.css'
import { Roboto } from 'next/font/google'


const roboto = Roboto({ subsets: ['latin'],
  weight: ["100", "300", "400", "500", "700", "900"]})

export const metadata = {
  title: 'Blogopedia',
  description: 'A simple blog app'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Header/>
        <div className="content">
          {children}
        </div>
        </body>
    </html>
  )
}
