import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/app/components/navbar/Navbar'
import Footer from '@/app/components/footer/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Next App',
  description: 'Next.js starter app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="container">
        </div>
        <Navbar />
        {children}
        <Footer />
        </body>
    </html>
  );
}