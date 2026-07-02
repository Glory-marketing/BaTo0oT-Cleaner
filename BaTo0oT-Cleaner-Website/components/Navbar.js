import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { HiMenu, HiX } from 'react-icons/hi'
import { useAuth } from '@/contexts/AuthContext'
import Logo3D from './Logo3D'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [isArabic, setIsArabic] = useState(false)
  const { user } = useAuth()
  const router = useRouter()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    const lang = localStorage.getItem('lang')
    setIsArabic(lang === 'ar')
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleLang = () => {
    const newLang = isArabic ? 'en' : 'ar'
    localStorage.setItem('lang', newLang)
    setIsArabic(!isArabic)
    if (newLang === 'ar') {
      document.body.classList.add('arabic')
    } else {
      document.body.classList.remove('arabic')
    }
    router.reload()
  }

  const navLinks = isArabic
    ? [
        { href: '/', label: 'الرئيسية' },
        { href: '/features', label: 'المميزات' },
        { href: '/pricing', label: 'الأسعار' },
        { href: '/download', label: 'تحميل' },
      ]
    : [
        { href: '/', label: 'Home' },
        { href: '/features', label: 'Features' },
        { href: '/pricing', label: 'Pricing' },
        { href: '/download', label: 'Download' },
      ]

  const mobileLinks = isArabic
    ? [
        { href: '/', label: 'الرئيسية' },
        { href: '/features', label: 'المميزات' },
        { href: '/pricing', label: 'الأسعار' },
        { href: '/download', label: 'تحميل' },
        { href: '/login', label: 'تسجيل دخول' },
      ]
    : [
        { href: '/', label: 'Home' },
        { href: '/features', label: 'Features' },
        { href: '/pricing', label: 'Pricing' },
        { href: '/download', label: 'Download' },
        { href: '/login', label: 'Sign In' },
      ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          <Link href="/" className="flex items-center gap-2 group">
            <Logo3D size={40} />
            <span className="text-xl font-bold">
              <span className="gradient-text">BaTo0oT</span>
              <span className="text-white"> Cleaner</span>
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-primary-500 ${
                  router.pathname === link.href
                    ? 'text-primary-500'
                    : 'text-gray-300'
                }`}
              >
                {link.label}
              </Link>
            ))}
            {!user && (
              <Link
                href="/login"
                className={`text-sm font-medium transition-colors hover:text-primary-500 ${
                  router.pathname === '/login' ? 'text-primary-500' : 'text-gray-300'
                }`}
              >
                {isArabic ? 'تسجيل دخول' : 'Sign In'}
              </Link>
            )}
            <button
              onClick={toggleLang}
              className="px-3 py-1 rounded-lg text-sm bg-white/10 hover:bg-white/20 transition-colors"
            >
              {isArabic ? 'EN' : 'AR'}
            </button>
            <Link
              href={user ? '/dashboard' : '/login'}
              className="btn-primary text-sm !px-6 !py-2.5"
            >
              {isArabic ? (user ? 'لوحة التحكم' : 'تسجيل دخول') : (user ? 'Dashboard' : 'Sign In')}
            </Link>
          </div>

          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>

          {isOpen && (
            <div className="md:hidden glass rounded-2xl p-4 mb-4 space-y-2">
              {mobileLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block px-4 py-3 rounded-lg text-sm font-medium hover:bg-white/10 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            <button
              onClick={toggleLang}
              className="w-full text-left px-4 py-3 rounded-lg text-sm font-medium hover:bg-white/10 transition-colors"
            >
              {isArabic ? 'English' : 'العربية'}
            </button>
            <Link
              href={user ? '/dashboard' : '/login'}
              className="block btn-primary text-center text-sm !py-3"
              onClick={() => setIsOpen(false)}
            >
              {isArabic ? (user ? 'لوحة التحكم' : 'تسجيل دخول') : (user ? 'Dashboard' : 'Sign In')}
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
