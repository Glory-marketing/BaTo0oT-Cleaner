import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { HiDownload, HiCheck, HiShieldCheck, HiStar, HiCode, HiCube } from 'react-icons/hi'
import { FaWindows, FaApple, FaLinux } from 'react-icons/fa'

export default function DownloadPage() {
  const [isArabic, setIsArabic] = useState(false)
  const [selectedOS, setSelectedOS] = useState('windows')

  useEffect(() => {
    setIsArabic(localStorage.getItem('lang') === 'ar')
  }, [])

  const content = isArabic
    ? {
        title: 'حمّل BaTo0oT Cleaner',
        desc: 'متوفر لجميع المنصات - مجاني تماماً',
      }
    : {
        title: 'Download BaTo0oT Cleaner',
        desc: 'Available for all platforms - Completely free',
      }

  const versions = [
    {
      id: 'windows',
      label: 'Windows',
      icon: <FaWindows size={32} />,
      version: 'v3.0.0',
      size: '24.5 MB',
      features: ['Windows 10/11', '32-bit & 64-bit', 'Portable version'],
    },
    {
      id: 'macos',
      label: 'macOS',
      icon: <FaApple size={32} />,
      version: 'v3.0.0',
      size: '28.2 MB',
      features: ['macOS 12+', 'Intel & Apple Silicon', 'Native M1/M2 support'],
    },
    {
      id: 'linux',
      label: 'Linux',
      icon: <FaLinux size={32} />,
      version: 'v3.0.0',
      size: '22.1 MB',
      features: ['Ubuntu/Debian', 'Arch/Manjaro', 'AppImage & Snap'],
    },
  ]

  return (
    <div className="pt-24">
      <section className="relative py-16 overflow-hidden bg-grid">
        <div className="hero-glow hero-glow-1" />
        <div className="hero-glow hero-glow-2" />
        <div className="max-w-4xl mx-auto px-4 text-center space-y-4 relative z-10">
          <h1 className="text-4xl sm:text-6xl font-black">
            <span className="gradient-text">{content.title}</span>
          </h1>
          <p className="text-xl text-gray-400">{content.desc}</p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center gap-4 mb-12">
            {versions.map((os) => (
              <button
                key={os.id}
                onClick={() => setSelectedOS(os.id)}
                className={`flex items-center gap-3 px-6 py-4 rounded-2xl transition-all ${
                  selectedOS === os.id
                    ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/30'
                    : 'glass text-gray-300 hover:bg-white/10'
                }`}
              >
                {os.icon}
                <span className="font-semibold">{os.label}</span>
              </button>
            ))}
          </div>

          {versions.map((os) =>
            os.id === selectedOS ? (
              <motion.div
                key={os.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-lg mx-auto"
              >
                <div className="card text-center p-8 space-y-6">
                  <div className="text-primary-500 flex justify-center">{os.icon}</div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{os.label}</h3>
                    <p className="text-sm text-gray-400">
                      {isArabic ? 'آخر إصدار' : 'Latest version'}: {os.version} ({os.size})
                    </p>
                  </div>

                  <ul className="space-y-2">
                    {os.features.map((f, i) => (
                      <li key={i} className="flex items-center justify-center gap-2 text-sm text-gray-300">
                        <HiCheck className="text-primary-500" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <button className="btn-primary w-full text-lg !py-4 flex items-center justify-center gap-2">
                    <HiDownload size={22} />
                    {isArabic ? 'تحميل' : 'Download'} {os.label}
                  </button>

                  <p className="text-xs text-gray-500 flex items-center justify-center gap-1">
                    <HiShieldCheck className="text-primary-500" />
                    {isArabic ? 'آمن 100% - مفحوص ضد الفيروسات' : '100% Safe - Virus scanned'}
                  </p>
                </div>
              </motion.div>
            ) : null
          )}
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-8">
            {isArabic ? 'إصدارات أخرى' : 'Other Versions'}
          </h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              {
                title: isArabic ? 'نسخة محمولة' : 'Portable',
                desc: isArabic ? 'شغل بدون تثبيت من USB' : 'Run without installation from USB',
                icon: <HiCube />,
              },
              {
                title: isArabic ? 'CLI Version' : 'CLI Version',
                desc: isArabic ? 'لمحترفي سطر الأوامر' : 'For command-line power users',
                icon: <HiCode />,
              },
              {
                title: isArabic ? 'Premium Build' : 'Premium Build',
                desc: isArabic ? 'النسخة الكاملة بكل المميزات' : 'Full version with all features',
                icon: <HiStar />,
              },
            ].map((v, i) => (
              <div key={i} className="card text-center p-6 space-y-3">
                <div className="text-primary-500 text-2xl flex justify-center">{v.icon}</div>
                <h3 className="text-white font-semibold">{v.title}</h3>
                <p className="text-sm text-gray-400">{v.desc}</p>
                <button className="btn-secondary text-sm !px-6 !py-2">
                  {isArabic ? 'تحميل' : 'Download'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-8">
          <div className="glass rounded-3xl p-12 border border-primary-500/20">
            <h2 className="text-2xl font-bold text-white mb-4">
              {isArabic ? 'ماذا بعد التحميل؟' : 'What happens after download?'}
            </h2>
            <div className="grid sm:grid-cols-3 gap-6">
              {[
                { step: '1', title: isArabic ? 'ثبّت البرنامج' : 'Install', desc: isArabic ? 'بضع نقرات فقط' : 'Just a few clicks' },
                { step: '2', title: isArabic ? 'افحص جهازك' : 'Scan', desc: isArabic ? 'تحليل كامل للنظام' : 'Full system analysis' },
                { step: '3', title: isArabic ? 'استمتع بالأداء' : 'Enjoy', desc: isArabic ? 'جهاز أسرع من أي وقت مضى' : 'Faster than ever' },
              ].map((s, i) => (
                <div key={i} className="space-y-2">
                  <div className="w-10 h-10 rounded-full bg-primary-500/20 flex items-center justify-center mx-auto text-primary-500 font-bold">
                    {s.step}
                  </div>
                  <h3 className="text-white font-semibold">{s.title}</h3>
                  <p className="text-sm text-gray-400">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
