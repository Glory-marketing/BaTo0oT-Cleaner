import { useState, useEffect } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout({ children }) {
  const [isArabic, setIsArabic] = useState(false)

  useEffect(() => {
    const lang = localStorage.getItem('lang')
    setIsArabic(lang === 'ar')
    if (lang === 'ar') {
      document.body.classList.add('arabic')
    } else {
      document.body.classList.remove('arabic')
    }
  }, [])

  return (
    <div className={isArabic ? 'arabic' : ''} dir={isArabic ? 'rtl' : 'ltr'}>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
