import { useState, useEffect } from 'react'
import Pricing from '@/components/Pricing'

export default function PricingPage() {
  const [isArabic, setIsArabic] = useState(false)

  useEffect(() => {
    setIsArabic(localStorage.getItem('lang') === 'ar')
  }, [])

  return (
    <div className="pt-24">
      <section className="relative py-16 overflow-hidden bg-grid">
        <div className="hero-glow hero-glow-1" />
        <div className="hero-glow hero-glow-2" />
        <div className="max-w-4xl mx-auto px-4 text-center space-y-4 relative z-10">
          <h1 className="text-4xl sm:text-6xl font-black">
            <span className="gradient-text">
              {isArabic ? 'اختر خطتك المثالية' : 'Choose Your Perfect Plan'}
            </span>
          </h1>
          <p className="text-xl text-gray-400">
            {isArabic
              ? 'ابدأ مجاناً، وطور تجربتك مع المميزات المدفوعة'
              : 'Start free, upgrade when you need more power'}
          </p>
        </div>
      </section>
      <Pricing />

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="glass rounded-3xl p-8 md:p-12 space-y-6">
            <h2 className="text-2xl font-bold text-white text-center">
              {isArabic ? 'الأسئلة الشائعة' : 'Frequently Asked Questions'}
            </h2>
            <div className="space-y-4">
              {[
                {
                  q: isArabic ? 'هل يمكنني الترقية من免費 إلى Premium?' : 'Can I upgrade from Free to Premium?',
                  a: isArabic ? 'نعم، يمكنك الترقية في أي وقت وستحتفظ بجميع إعداداتك.' : 'Yes, upgrade anytime and keep all your settings.',
                },
                {
                  q: isArabic ? 'هل توجد خصومات للطلاب؟' : 'Are there student discounts?',
                  a: isArabic ? 'نعم، نوفر خصم 40% للطلاب عبر البريد الجامعي.' : 'Yes, 40% discount for students with .edu email.',
                },
                {
                  q: isArabic ? 'هل الإصدار المجاني محدود؟' : 'Is the free version limited?',
                  a: isArabic ? 'الإصدار المجاني قوي جداً ويغطي معظم احتياجات التنظيف الأساسية.' : 'Free version is powerful and covers most basic cleaning needs.',
                },
                {
                  q: isArabic ? 'هل يمكنني استرداد أموالي؟' : 'Can I get a refund?',
                  a: isArabic ? 'نعم، نوفر ضمان استرداد أموال لمدة 30 يوماً.' : 'Yes, 30-day money-back guarantee.',
                },
              ].map((faq, i) => (
                <div key={i} className="card">
                  <h3 className="text-white font-semibold mb-2">{faq.q}</h3>
                  <p className="text-sm text-gray-400">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
