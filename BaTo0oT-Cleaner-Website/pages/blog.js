import { useState, useEffect } from 'react'
import Link from 'next/link'
import { HiCalendar, HiTag, HiArrowLeft } from 'react-icons/hi'

export default function BlogPage() {
  const [isArabic, setIsArabic] = useState(false)

  useEffect(() => {
    setIsArabic(localStorage.getItem('lang') === 'ar')
  }, [])

  const posts = isArabic
    ? [
        { title: 'كيف تزيد FPS في ألعابك بـ 300%', date: '28 يونيو 2026', tag: 'ألعاب', excerpt: 'اكتشف أسرار تحسين أداء الألعاب باستخدام BaTo0oT Cleaner.' },
        { title: 'أفضل إعدادات Bluestacks للألعاب الثقيلة', date: '20 يونيو 2026', tag: 'محاكيات', excerpt: 'دليل شامل لتحسين أداء Bluestacks وتشغيل أي لعبة بدون تقطيع.' },
        { title: 'تنظيف ويندوز 11: الدليل الكامل', date: '15 يونيو 2026', tag: 'ويندوز', excerpt: '10 خطوات لتنظيف ويندوز 11 وزيادة المساحة والأداء.' },
        { title: 'AI في تحسين الأداء: المستقبل هنا', date: '8 يونيو 2026', tag: 'AI', excerpt: 'كيف يستخدم BaTo0oT الذكاء الاصطناعي لتحليل وتحسين جهازك.' },
        { title: 'مقارنة: BaTo0oT vs CCleaner vs Razer Cortex', date: '1 يونيو 2026', tag: 'مقارنات', excerpt: 'أيهما أفضل؟ مقارنة شاملة بين أقوى برامج تحسين الأداء.' },
        { title: 'إعدادات Esports الاحترافية لـ Valorant وCS2', date: '25 مايو 2026', tag: 'Esports', excerpt: 'احصل على إعدادات المحترفين في Valorant و Counter-Strike 2.' },
      ]
    : [
        { title: 'How to Increase FPS by 300%', date: 'June 28, 2026', tag: 'Gaming', excerpt: 'Discover the secrets of game performance optimization with BaTo0oT Cleaner.' },
        { title: 'Best Bluestacks Settings for Heavy Games', date: 'June 20, 2026', tag: 'Emulators', excerpt: 'Complete guide to optimize Bluestacks and run any game smoothly.' },
        { title: 'Windows 11 Cleaning: Complete Guide', date: 'June 15, 2026', tag: 'Windows', excerpt: '10 steps to clean Windows 11 and boost storage and performance.' },
        { title: 'AI in Performance Optimization: The Future', date: 'June 8, 2026', tag: 'AI', excerpt: 'How BaTo0oT uses artificial intelligence to analyze and optimize your system.' },
        { title: 'BaTo0oT vs CCleaner vs Razer Cortex', date: 'June 1, 2026', tag: 'Comparisons', excerpt: 'Which is best? Comprehensive comparison of top optimization tools.' },
        { title: 'Pro Esports Settings for Valorant & CS2', date: 'May 25, 2026', tag: 'Esports', excerpt: 'Get pro player settings for Valorant and Counter-Strike 2.' },
      ]

  return (
    <div className="pt-24">
      <section className="relative py-16 overflow-hidden bg-grid">
        <div className="hero-glow hero-glow-1" />
        <div className="hero-glow hero-glow-2" />
        <div className="max-w-4xl mx-auto px-4 text-center space-y-4 relative z-10">
          <h1 className="text-4xl sm:text-6xl font-black">
            <span className="gradient-text">
              {isArabic ? 'المدونة' : 'Blog'}
            </span>
          </h1>
          <p className="text-xl text-gray-400">
            {isArabic ? 'أحدث المقالات والنصائح لتحسين أداء جهازك' : 'Latest articles and tips for system optimization'}
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post, i) => (
              <Link key={i} href="#" className="card group">
                <div className="flex items-center gap-2 text-xs text-gray-500 mb-3">
                  <HiCalendar />
                  <span>{post.date}</span>
                  <span className="flex items-center gap-1 ml-auto px-2 py-0.5 rounded-full bg-primary-500/10 text-primary-500">
                    <HiTag />
                    {post.tag}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white group-hover:text-primary-500 transition-colors mb-2">
                  {post.title}
                </h3>
                <p className="text-sm text-gray-400 mb-4">{post.excerpt}</p>
                <span className="text-xs text-primary-500 flex items-center gap-1 group-hover:gap-2 transition-all">
                  {isArabic ? 'اقرأ المزيد' : 'Read more'}
                  <HiArrowLeft className={isArabic ? 'rotate-180' : ''} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
