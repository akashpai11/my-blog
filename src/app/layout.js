import Navbar from '@/components/navbar/Navbar'
import './globals.css'
import { Inter, Montserrat } from 'next/font/google'
import Footer from '@/components/footer/Footer'
import { ThemeProvider } from '@/context/ThemeContext'

const inter = Inter({ subsets: ['latin'] })

// creating fonts
const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata = {
  title: 'Webdev Blogs',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <ThemeProvider>
          <div className='container'>
            <Navbar />
            {children}
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
