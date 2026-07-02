import Link from 'next/link'
import { useState, useEffect } from 'react'
import { HiHeart } from 'react-icons/hi'
import Logo3D from './Logo3D'

export default function Footer() {
  const [isArabic, setIsArabic] = useState(false)
  const [year, setYear] = useState(2026)

  useEffect(() => {
    setIsArabic(localStorage.getItem('lang') === 'ar')
    setYear(new Date().getFullYear())
  }, [])

  const content = isArabic
    ? {
        tagline: 'محترف لتحسين أداء جهازك وتجربة الألعاب',
        quickLinks: 'روابط سريعة',
        features: 'المميزات',
        pricing: 'الأسعار',
        download: 'تحميل',
        product: 'المنتج',
        about: 'عن المنصة',
        blog: 'المدونة',
        support: 'الدعم الفني',
        contact: 'اتصل بنا',
        rights: 'جميع الحقوق محفوظة',
      }
    : {
        tagline: 'Professional system optimization & gaming booster',
        quickLinks: 'Quick Links',
        features: 'Features',
        pricing: 'Pricing',
        download: 'Download',
        product: 'Product',
        about: 'About',
        blog: 'Blog',
        support: 'Support',
        contact: 'Contact',
        rights: 'All rights reserved',
      }

  return (
    <footer className="relative bg-dark-800 border-t border-white/5">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500 to-transparent opacity-30" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <Logo3D size={40} />
              <span className="text-xl font-bold">
                <span className="gradient-text">BaTo0oT</span>
                <span className="text-white"> Cleaner</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              {content.tagline}
            </p>
            <div className="flex gap-3 pt-2">
              {['github', 'twitter', 'discord'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-10 h-10 rounded-lg glass flex items-center justify-center text-gray-400 hover:text-primary-500 hover:border-primary-500/30 transition-all"
                >
                  <span className="text-xs font-bold uppercase">{social[0]}</span>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">{content.quickLinks}</h4>
            <ul className="space-y-3">
              {[
                { href: '/', label: isArabic ? 'الرئيسية' : 'Home' },
                { href: '/features', label: content.features },
                { href: '/pricing', label: content.pricing },
                { href: '/download', label: content.download },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 text-sm hover:text-primary-500 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">{content.product}</h4>
            <ul className="space-y-3">
              {[
                { href: '/about', label: content.about },
                { href: '/blog', label: content.blog },
                { href: '/dashboard', label: isArabic ? 'لوحة التحكم' : 'Dashboard' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 text-sm hover:text-primary-500 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">
              {isArabic ? 'ابق على تواصل' : 'Stay Connected'}
            </h4>
            <div className="glass rounded-2xl p-5 space-y-3">
              <p className="text-gray-400 text-sm">
                {isArabic
                  ? 'اشترك في النشرة البريدية لتحصل على آخر التحديثات'
                  : 'Subscribe to get the latest updates and offers'}
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder={isArabic ? 'بريدك الإلكتروني' : 'Your email'}
                  className="flex-1 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-primary-500/50 transition-colors"
                />
                <button className="btn-primary !px-4 !py-2.5 text-sm">
                  {isArabic ? 'اشتراك' : 'Join'}
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {year} BaTo0oT Cleaner. {content.rights}.
          </p>
          <p className="text-gray-500 text-xs flex items-center gap-1">
            {isArabic ? 'صنع بـ' : 'Made with'}{' '}
            <HiHeart className="text-red-500" />{' '}
            {isArabic ? 'للمنصة' : 'for gamers'}
          </p>
        </div>
      </div>
    </footer>
  )
}
