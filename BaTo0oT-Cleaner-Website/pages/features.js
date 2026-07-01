import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import {
  HiBolt, HiChip, HiShieldCheck, HiCube, HiColorSwatch, HiClock,
  HiDownload, HiPlay, HiServer, HiGlobe, HiCode, HiAdjustments,
  HiLightningBolt, HiStar, HiFire, HiLockClosed, HiCloudUpload,
  HiChartBar, HiSupport, HiDatabase
} from 'react-icons/hi'
import { MdSpeed, MdCleaningServices, MdGamepad, MdCloudSync, MdSecurity, MdDevices } from 'react-icons/md'

export default function FeaturesPage() {
  const [isArabic, setIsArabic] = useState(false)

  useEffect(() => {
    setIsArabic(localStorage.getItem('lang') === 'ar')
  }, [])

  const heroContent = isArabic
    ? { title: 'مميزات خارقة', desc: 'أكثر من 50+ أداة احترافية لتحسين أداء جهازك وتجربة الألعاب' }
    : { title: 'Super Features', desc: '50+ professional tools to optimize your system and gaming experience' }

  const categories = isArabic
    ? [
        {
          title: '🧹 التنظيف والصيانة',
          items: [
            { name: 'منظف النظام المتقدم', desc: 'يزيل 500+ نوع من ملفات النظام المؤقتة', icon: <MdCleaningServices /> },
            { name: 'Registry Cleaner', desc: 'تنظيف عميق وآمن للريجستري', icon: <HiDatabase /> },
            { name: 'Privacy Eraser', desc: 'مسح آثار التصفح والملفات الحساسة', icon: <HiLockClosed /> },
            { name: 'Disk Analyzer', desc: 'تحليل مساحة القرص وتوزيع الملفات', icon: <HiChartBar /> },
            { name: 'Duplicate Finder', desc: 'إيجاد وحذف الملفات المكررة', icon: <HiServer /> },
            { name: 'Auto Health Check', desc: 'فحص دوري لصحة النظام', icon: <HiShieldCheck /> },
          ],
        },
        {
          title: '🎮 الألعاب والتسريع',
          items: [
            { name: 'Game Booster', desc: 'إيقاف العمليات غير الضرورية ورفع أداء الألعاب', icon: <MdGamepad /> },
            { name: 'Esports Mode', desc: 'إعدادات احترافية بضغطة واحدة', icon: <HiFire /> },
            { name: 'Game Profiles', desc: 'بروفايلات إعدادات لكل لعبة', icon: <HiAdjustments /> },
            { name: 'Frame Time Analyzer', desc: 'تحليل الـ Stuttering والميكرو لاج', icon: <HiChartBar /> },
            { name: 'Input Lag Reducer', desc: 'تقليل زمن الاستجابة بشكل كبير', icon: <HiLightningBolt /> },
            { name: 'FPS Counter', desc: 'عداد FPS مدمج مع Overlay', icon: <HiStar /> },
          ],
        },
        {
          title: '📱 المحاكيات',
          items: [
            { name: 'Bluestacks Optimizer', desc: 'تحسين أداء Bluestacks للألعاب', icon: <HiChip /> },
            { name: 'LDPlayer Booster', desc: 'تسريع LDPlayer وتقليل الـ Lag', icon: <HiChip /> },
            { name: 'MEmu Tuning', desc: 'إعدادات متقدمة لمحاكي MEmu', icon: <HiChip /> },
            { name: 'Nox Tweaker', desc: 'تحسين شامل لمحاكي Nox', icon: <HiChip /> },
            { name: 'Multi-Instance Manager', desc: 'إدارة حسابات متعددة بذكاء', icon: <HiCube /> },
          ],
        },
        {
          title: '⚡ تحسينات متقدمة',
          items: [
            { name: 'Network Optimizer', desc: 'تحسين إعدادات الشبكة للأونلاين', icon: <HiGlobe /> },
            { name: 'CPU Affinity Manager', desc: 'توزيع المعالجات بذكاء', icon: <HiChip /> },
            { name: 'RAM Allocator', desc: 'إدارة الذاكرة المخصصة للألعاب', icon: <HiBolt /> },
            { name: 'Power Plan Pro', desc: 'خطط طاقة خارقة وغير موجودة بويندوز', icon: <HiLightningBolt /> },
            { name: 'DNS Switcher', desc: 'تبديل DNS لأسرع اتصال', icon: <HiGlobe /> },
            { name: 'TCP/IP Optimizer', desc: 'تعديل إعدادات الشبكة العميقة', icon: <HiAdjustments /> },
          ],
        },
        {
          title: '☁️ السحابة والتزامن',
          items: [
            { name: 'Cloud Sync', desc: 'مزامنة الإعدادات عبر الأجهزة', icon: <MdCloudSync /> },
            { name: 'Profile Export/Import', desc: 'مشاركة إعداداتك مع الآخرين', icon: <HiCloudUpload /> },
            { name: 'Backup Gamer', desc: 'نسخ احتياطي لحفظات الألعاب', icon: <HiDatabase /> },
            { name: 'One-Click Migration', desc: 'نقل الإعدادات بين الأجهزة', icon: <MdDevices /> },
          ],
        },
        {
          title: '🤖 الذكاء الاصطناعي',
          items: [
            { name: 'AI Optimizer', desc: 'ذكاء اصطناعي لتحليل وتحسين النظام', icon: <HiChip /> },
            { name: 'Bottleneck Detector', desc: 'يكشف القطعة اللي تحد أداء جهازك', icon: <HiChartBar /> },
            { name: 'BSOD Analyzer', desc: 'تحليل الشاشات الزرقاء وتحديد السبب', icon: <HiShieldCheck /> },
            { name: 'Smart Config', desc: 'اقتراح إعدادات لكل لعبة حسب مواصفاتك', icon: <HiAdjustments /> },
            { name: 'Performance History', desc: 'تسجيل وتحليل أداء النظام', icon: <HiClock /> },
          ],
        },
      ]
    : [
        {
          title: '🧹 Cleaning & Maintenance',
          items: [
            { name: 'Advanced System Cleaner', desc: 'Remove 500+ types of junk files', icon: <MdCleaningServices /> },
            { name: 'Registry Cleaner', desc: 'Safe and deep registry cleaning', icon: <HiDatabase /> },
            { name: 'Privacy Eraser', desc: 'Wipe browsing traces and sensitive files', icon: <HiLockClosed /> },
            { name: 'Disk Analyzer', desc: 'Analyze disk space and file distribution', icon: <HiChartBar /> },
            { name: 'Duplicate Finder', desc: 'Find and remove duplicate files', icon: <HiServer /> },
            { name: 'Auto Health Check', desc: 'Periodic system health monitoring', icon: <HiShieldCheck /> },
          ],
        },
        {
          title: '🎮 Gaming & Boosting',
          items: [
            { name: 'Game Booster', desc: 'Kill unnecessary processes, boost gaming FPS', icon: <MdGamepad /> },
            { name: 'Esports Mode', desc: 'One-click pro settings configuration', icon: <HiFire /> },
            { name: 'Game Profiles', desc: 'Auto-switching configs per game', icon: <HiAdjustments /> },
            { name: 'Frame Time Analyzer', desc: 'Detect stuttering and micro-lags', icon: <HiChartBar /> },
            { name: 'Input Lag Reducer', desc: 'Significantly reduce response time', icon: <HiLightningBolt /> },
            { name: 'FPS Counter', desc: 'Built-in FPS counter with overlay', icon: <HiStar /> },
          ],
        },
        {
          title: '📱 Emulator Optimization',
          items: [
            { name: 'Bluestacks Optimizer', desc: 'Boost Bluestacks gaming performance', icon: <HiChip /> },
            { name: 'LDPlayer Booster', desc: 'Speed up LDPlayer, reduce lag', icon: <HiChip /> },
            { name: 'MEmu Tuning', desc: 'Advanced MEmu emulator settings', icon: <HiChip /> },
            { name: 'Nox Tweaker', desc: 'Comprehensive Nox optimization', icon: <HiChip /> },
            { name: 'Multi-Instance Manager', desc: 'Smart multi-account management', icon: <HiCube /> },
          ],
        },
        {
          title: '⚡ Advanced Tweaks',
          items: [
            { name: 'Network Optimizer', desc: 'Optimize network for online gaming', icon: <HiGlobe /> },
            { name: 'CPU Affinity Manager', desc: 'Smart core distribution', icon: <HiChip /> },
            { name: 'RAM Allocator', desc: 'Dedicated gaming memory management', icon: <HiBolt /> },
            { name: 'Power Plan Pro', desc: 'Hidden ultimate performance power plans', icon: <HiLightningBolt /> },
            { name: 'DNS Switcher', desc: 'Auto-switch to fastest DNS', icon: <HiGlobe /> },
            { name: 'TCP/IP Optimizer', desc: 'Deep network stack tuning', icon: <HiAdjustments /> },
          ],
        },
        {
          title: '☁️ Cloud & Sync',
          items: [
            { name: 'Cloud Sync', desc: 'Sync settings across all devices', icon: <MdCloudSync /> },
            { name: 'Profile Export/Import', desc: 'Share configurations with friends', icon: <HiCloudUpload /> },
            { name: 'Backup Gamer', desc: 'Backup game saves and settings', icon: <HiDatabase /> },
            { name: 'One-Click Migration', desc: 'Migrate settings between devices', icon: <MdDevices /> },
          ],
        },
        {
          title: '🤖 AI & Analytics',
          items: [
            { name: 'AI Optimizer', desc: 'AI-powered system analysis and tuning', icon: <HiChip /> },
            { name: 'Bottleneck Detector', desc: 'Detect which part limits performance', icon: <HiChartBar /> },
            { name: 'BSOD Analyzer', desc: 'Analyze blue screens, identify exact cause', icon: <HiShieldCheck /> },
            { name: 'Smart Config', desc: 'Game-specific config suggestions', icon: <HiAdjustments /> },
            { name: 'Performance History', desc: 'Track and analyze system performance', icon: <HiClock /> },
          ],
        },
      ]

  return (
    <div className="pt-24">
      <section className="relative py-16 overflow-hidden bg-grid">
        <div className="hero-glow hero-glow-1" />
        <div className="hero-glow hero-glow-2" />
        <div className="max-w-4xl mx-auto px-4 text-center space-y-4 relative z-10">
          <h1 className="text-4xl sm:text-6xl font-black">
            <span className="gradient-text">{heroContent.title}</span>
          </h1>
          <p className="text-xl text-gray-400">{heroContent.desc}</p>
        </div>
      </section>

      {categories.map((category, idx) => (
        <section key={idx} className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-2xl sm:text-3xl font-bold text-white mb-8"
            >
              {category.title}
            </motion.h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {category.items.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  viewport={{ once: true }}
                  className="card flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary-500/10 flex items-center justify-center text-primary-500 shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">{item.name}</h3>
                    <p className="text-sm text-gray-400">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-8">
          <div className="glass rounded-3xl p-12 border border-primary-500/20">
            <h2 className="text-3xl font-black gradient-text mb-4">
              {isArabic ? 'جاهز للتجربة؟' : 'Ready to Try?'}
            </h2>
            <p className="text-gray-400 mb-8">
              {isArabic ? 'حمله مجاناً وجرب الفرق بنفسك' : 'Download for free and feel the difference'}
            </p>
            <button className="btn-primary text-lg !px-10 !py-4">
              <HiDownload className="inline mr-2" />
              {isArabic ? 'تحميل مجاني' : 'Free Download'}
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
