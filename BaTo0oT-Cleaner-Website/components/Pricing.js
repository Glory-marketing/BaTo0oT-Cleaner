import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { HiCheck, HiLightningBolt, HiStar } from 'react-icons/hi'

export default function Pricing() {
  const [isArabic, setIsArabic] = useState(false)
  const [isAnnual, setIsAnnual] = useState(true)

  useEffect(() => {
    setIsArabic(localStorage.getItem('lang') === 'ar')
  }, [])

  const plans = isArabic
    ? [
        {
          name: 'مجاني',
          price: { monthly: '0', annual: '0' },
          desc: 'كل ما تحتاج لبدء تنظيف جهازك',
          features: [
            'منظف النظام الأساسي',
            'مدير العمليات',
            'Game Booster أساسي',
            'معلومات النظام',
            'تسريع RAM',
            'دعم أساسي',
          ],
          cta: 'تحميل مجاني',
          highlighted: false,
          badge: null,
        },
        {
          name: 'Premium',
          price: { monthly: '9.99', annual: '4.99' },
          desc: 'للمحترفين وعشاق الألعاب',
          features: [
            'كل شيء في الخطة المجانية',
            'AI Optimizer',
            'محسن المحاكيات (Bluestacks, LDPlayer)',
            'Esports Mode',
            'Network Optimizer',
            'مزامنة سحابية',
            'تحليل الشاشات الزرقاء',
            'Game Profiles',
            'Privacy Eraser',
            'دعم فني ذو أولوية',
          ],
          cta: 'ابدأ Premium',
          highlighted: true,
          badge: 'الأكثر شهرة',
        },
        {
          name: 'Ultimate',
          price: { monthly: '19.99', annual: '9.99' },
          desc: 'التجربة الكاملة بلا حدود',
          features: [
            'كل شيء في Premium',
            'AI Coach',
            'Auto Health Check',
            'Registry Cleaner متقدم',
            'Macro Recorder',
            'Script Runner',
            'Driver Updater',
            'Battery Optimizer',
            'Real-time Monitor',
            'دعم فني VIP 24/7',
          ],
          cta: 'اشتري Ultimate',
          highlighted: false,
          badge: 'الأفضل',
        },
      ]
    : [
        {
          name: 'Free',
          price: { monthly: '0', annual: '0' },
          desc: 'Everything you need to start cleaning',
          features: [
            'Basic System Cleaner',
            'Process Manager',
            'Basic Game Booster',
            'System Information',
            'RAM Optimizer',
            'Basic Support',
          ],
          cta: 'Download Free',
          highlighted: false,
          badge: null,
        },
        {
          name: 'Premium',
          price: { monthly: '$9.99', annual: '$4.99' },
          desc: 'For pros and gaming enthusiasts',
          features: [
            'Everything in Free',
            'AI Optimizer',
            'Emulator Booster (Bluestacks, LDPlayer)',
            'Esports Mode',
            'Network Optimizer',
            'Cloud Sync',
            'BSOD Analyzer',
            'Game Profiles',
            'Privacy Eraser',
            'Priority Support',
          ],
          cta: 'Get Premium',
          highlighted: true,
          badge: 'Most Popular',
        },
        {
          name: 'Ultimate',
          price: { monthly: '$19.99', annual: '$9.99' },
          desc: 'The complete unlimited experience',
          features: [
            'Everything in Premium',
            'AI Coach',
            'Auto Health Check',
            'Advanced Registry Cleaner',
            'Macro Recorder',
            'Script Runner',
            'Driver Updater',
            'Battery Optimizer',
            'Real-time Monitor',
            'VIP 24/7 Support',
          ],
          cta: 'Get Ultimate',
          highlighted: false,
          badge: 'Best Value',
        },
      ]

  return (
    <section className="relative py-24" id="pricing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-3xl sm:text-5xl font-black">
            <span className="gradient-text">
              {isArabic ? 'اختر خطتك' : 'Choose Your Plan'}
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            {isArabic
              ? 'ابدأ مجاناً وطور تجربتك مع المميزات المتقدمة'
              : 'Start free and upgrade for advanced features'}
          </p>

          <div className="inline-flex items-center gap-2 p-1 rounded-2xl glass">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-6 py-2.5 rounded-xl text-sm font-medium transition-all ${
                !isAnnual ? 'bg-primary-500 text-white' : 'text-gray-400'
              }`}
            >
              {isArabic ? 'شهري' : 'Monthly'}
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-6 py-2.5 rounded-xl text-sm font-medium transition-all ${
                isAnnual ? 'bg-primary-500 text-white' : 'text-gray-400'
              }`}
            >
              {isArabic ? 'سنوي' : 'Annual'}
            </button>
          </div>
          {isAnnual && (
            <p className="text-primary-500 text-sm font-medium">
              {isArabic ? 'وفر حتى 50% مع الخطة السنوية' : 'Save up to 50% with annual plan'}
            </p>
          )}
        </div>

        <div className="grid lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative card flex flex-col ${
                plan.highlighted
                  ? 'border-primary-500/40 bg-primary-500/5 scale-105'
                  : ''
              }`}
            >
              {plan.badge && (
                <div className={`absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold text-white flex items-center gap-1 ${
                  plan.badge === isArabic ? 'الأكثر شهرة' : 'Most Popular'
                    ? 'bg-gradient-to-r from-primary-500 to-accent-500'
                    : 'bg-gradient-to-r from-purple-500 to-pink-500'
                }`}>
                  <HiStar />
                  {plan.badge}
                </div>
              )}

              <div className="p-8 space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-1">{plan.name}</h3>
                  <p className="text-sm text-gray-400">{plan.desc}</p>
                </div>

                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-black text-white">
                    {isAnnual ? plan.price.annual : plan.price.monthly}
                  </span>
                  <span className="text-gray-400 text-sm">
                    {plan.price.monthly !== '0'
                      ? isArabic ? '/شهر' : '/month'
                      : ''}
                  </span>
                </div>

                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                      <HiCheck className="text-primary-500 mt-0.5 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={plan.price.monthly === '0' ? '/download' : '/pricing'}
                  className={`block text-center py-3 px-6 rounded-xl font-semibold text-sm transition-all ${
                    plan.highlighted
                      ? 'bg-primary-500 text-white hover:shadow-lg hover:shadow-primary-500/30'
                      : 'glass text-white hover:bg-white/10'
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
