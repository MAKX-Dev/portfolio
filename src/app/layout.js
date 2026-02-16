import './globals.css'
import Navbar from './components/Navbar'

export const metadata = {
  title: 'MAKX Dev - Full Stack Developer',
  description: 'Portfolio of MAKX Dev - Competitive Programmer & Full Stack Developer',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 min-h-screen">
        <Navbar />
        <main className="max-w-7xl mx-auto px-4 py-8">
          {children}
        </main>
      </body>
    </html>
  )
}