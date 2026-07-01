import { useState, useEffect } from 'react'
import Link from 'next/link'
import { HiDownload, HiPlay, HiShieldCheck, HiLightningBolt, HiChip, HiSpeedometer } from 'react-icons/hi'

export default function Hero() {
  const [isArabic, setIsArabic] = useState(false)

  useEffect(() => {
    setIsArabic(localStorage.getItem('lang') === 'ar')
  }, [])

  const stats = isArabic
    ? [
        { value: '5M+', label: 'تحميل' },
        { value: '50K+', label: 'مستخدم Premium' },
        { value: '98%', label: 'رضا العملاء' },
      ]
    : [
        { value: '5M+', label: 'Downloads' },
        { value: '50K+', label: 'Premium Users' },
        { value: '98%', label: 'Satisfaction Rate' },
      ]

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-grid">
      <div className="hero-glow hero-glow-1" />
      <div className="hero-glow hero-glow-2" />
      <div className="hero-glow hero-glow-3" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary-500 border border-primary-500/20">
              <HiLightningBolt className="text-accent-500" />
              <span>
                {isArabic
                  ? 'الإصدار 3.0 أصبح متاحاً الآن'
                  : 'Version 3.0 is now available'}
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black leading-tight">
              {isArabic ? (
                <>
                  <span className="gradient-text">BaTo0oT</span>
                  <br />
                  <span className="text-white">محترف تنظيف</span>
                  <br />
                  <span className="text-white">وتسريع جهازك</span>
                </>
              ) : (
                <>
                  <span className="gradient-text">BaTo0oT</span>
                  <br />
                  <span className="text-white">Ultimate System</span>
                  <br />
                  <span className="text-white">Cleaner & Booster</span>
                </>
              )}
            </h1>

            <p className="text-lg sm:text-xl text-gray-400 leading-relaxed max-w-xl">
              {isArabic
                ? 'نظف جهازك، حسّن أداء الألعاب، وحسّن إعدادات المحاكيات بضغطة زر. البرنامج الأقوى لتحسين أداء ويندوز، ماك، ولينكس.'
                : 'Clean, optimize, and boost your system performance with one click. The most powerful cross-platform optimization tool for Windows, Mac, and Linux.'}
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href="/download" className="btn-primary flex items-center gap-2 text-lg !px-8 !py-4">
                <HiDownload size={22} />
                {isArabic ? 'تحميل مجاني' : 'Free Download'}
              </Link>
              <button className="btn-secondary flex items-center gap-2 text-lg !px-8 !py-4">
                <HiPlay size={22} />
                {isArabic ? 'عرض المميزات' : 'See Features'}
              </button>
            </div>

            <div className="flex items-center gap-2 text-sm text-gray-500">
              <HiShieldCheck className="text-primary-500" />
              <span>
                {isArabic
                  ? 'آمن ومعتمد من مكافي وسيمانتك'
                  : '100% Safe & Trusted by millions'}
              </span>
            </div>
          </div>

          <div className="relative lg:block">
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-accent-500/20 rounded-3xl animate-pulse-slow" />
              <div className="absolute inset-4 glass rounded-3xl border border-white/10 overflow-hidden">
                <div className="p-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                    <span className="text-xs text-gray-400 ml-2">
                      BaTo0oT Cleaner v3.0
                    </span>
                  </div>

                  <div className="glass rounded-2xl p-4 space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <HiSpeedometer className="text-primary-500" />
                        <span className="text-sm text-gray-300">
                          {isArabic ? 'حالة النظام' : 'System Status'}
                        </span>
                      </div>
                      <span className="text-xs text-primary-500 font-medium">
                        {isArabic ? 'ممتاز' : 'Excellent'}
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      {[
                        {
                          label: isArabic ? 'وحدة المعالجة' : 'CPU',
                          value: '23%',
                          color: 'bg-primary-500',
                        },
                        {
                          label: isArabic ? 'الذاكرة' : 'RAM',
                          value: '45%',
                          color: 'bg-accent-500',
                        },
                        {
                          label: isArabic ? 'القرص' : 'Disk',
                          value: '12%',
                          color: 'bg-neon-purple',
                        },
                        {
                          label: isArabic ? 'بطاقة الشاشة' : 'GPU',
                          value: '34%',
                          color: 'bg-neon-blue',
                        },
                      ].map((item) => (
                        <div key={item.label} className="space-y-1">
                          <div className="flex justify-between text-xs">
                            <span className="text-gray-400">{item.label}</span>
                            <span className="text-white font-medium">{item.value}</span>
                          </div>
                          <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
                            <div
                              className={`h-full rounded-full ${item.color}`}
                              style={{ width: item.value }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <button className="flex-1 px-3 py-2 rounded-xl bg-primary-500 text-xs font-medium text-white">
                      {isArabic ? 'تنظيف سريع' : 'Quick Clean'}
                    </button>
                    <button className="flex-1 px-3 py-2 rounded-xl glass text-xs font-medium text-gray-300">
                      {isArabic ? 'وضع اللعب' : 'Game Mode'}
                    </button>
                    <button className="flex-1 px-3 py-2 rounded-xl glass text-xs font-medium text-gray-300">
                      {isArabic ? 'تحليل' : 'Analyze'}
                    </button>
                  </div>
                </div>
              </div>

              <div className="absolute -top-4 -right-4 w-24 h-24 rounded-2xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center animate-float">
                <HiChip size={40} className="text-white" />
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-8 mt-20 max-w-2xl mx-auto">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl sm:text-4xl font-black gradient-text">
                {stat.value}
              </div>
              <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
