import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import {
  HiLightningBolt,
  HiChip,
  HiShieldCheck,
  HiCube,
  HiColorSwatch,
  HiClock,
} from 'react-icons/hi'
import { MdSpeed, MdCleaningServices, MdGamepad, MdCloudSync, MdSecurity, MdDevices } from 'react-icons/md'

export default function Features() {
  const [isArabic, setIsArabic] = useState(false)

  useEffect(() => {
    setIsArabic(localStorage.getItem('lang') === 'ar')
  }, [])

  const features = isArabic
    ? [
        {
          icon: <MdCleaningServices size={28} />,
          title: 'منظف متقدم',
          desc: 'يزيل ملفات النظام المؤقتة، الكاش، وملفات Windows Update',
          color: 'from-primary-500 to-green-400',
          bgColor: 'bg-primary-500/10',
        },
        {
          icon: <MdSpeed size={28} />,
          title: 'تسريع الألعاب',
          desc: 'Game Booster يوقف العمليات غير الضرورية ويعطي أولوية للألعاب',
          color: 'from-accent-500 to-cyan-400',
          bgColor: 'bg-accent-500/10',
        },
        {
          icon: <HiChip size={28} />,
          title: 'محسن المحاكيات',
          desc: 'Bluestacks, LDPlayer, MEmu - تحسين شامل للأداء',
          color: 'from-purple-500 to-pink-400',
          bgColor: 'bg-purple-500/10',
        },
        {
          icon: <MdCloudSync size={28} />,
          title: 'مزامنة سحابية',
          desc: 'احفظ إعداداتك على السحابة وطبقها على أي جهاز',
          color: 'from-blue-500 to-indigo-400',
          bgColor: 'bg-blue-500/10',
        },
        {
          icon: <MdSecurity size={28} />,
          title: 'حماية الخصوصية',
          desc: 'يمسح آثار التصفح، الملفات الحساسة، ويوقف تتبع ويندوز',
          color: 'from-green-500 to-emerald-400',
          bgColor: 'bg-green-500/10',
        },
        {
          icon: <MdDevices size={28} />,
          title: 'متعدد المنصات',
          desc: 'يدعم Windows و macOS و Linux بواجهة موحدة',
          color: 'from-orange-500 to-yellow-400',
          bgColor: 'bg-orange-500/10',
        },
        {
          icon: <HiLightningBolt size={28} />,
          title: 'وضع Esports',
          desc: 'تعديلات احترافية في ثانية: Res, Graphics, Input Lag',
          color: 'from-red-500 to-rose-400',
          bgColor: 'bg-red-500/10',
        },
        {
          icon: <HiColorSwatch size={28} />,
          title: 'ألوان احترافية',
          desc: 'VibranceGUI مدمج - تحسين ألوان الشاشة للألعاب',
          color: 'from-pink-500 to-purple-400',
          bgColor: 'bg-pink-500/10',
        },
        {
          icon: <HiCube size={28} />,
          title: 'تحليل AI',
          desc: 'ذكاء اصطناعي يحلل جهازك ويقترح تحسينات مخصصة',
          color: 'from-cyan-500 to-blue-400',
          bgColor: 'bg-cyan-500/10',
        },
        {
          icon: <HiClock size={28} />,
          title: 'جدولة ذكية',
          desc: 'التنظيف التلقائي في أوقات محددة - وأنت نايم',
          color: 'from-teal-500 to-green-400',
          bgColor: 'bg-teal-500/10',
        },
        {
          icon: <MdGamepad size={28} />,
          title: 'Game Profiles',
          desc: 'إعدادات مخصصة لكل لعبة - يتغير تلقائياً',
          color: 'from-violet-500 to-purple-400',
          bgColor: 'bg-violet-500/10',
        },
        {
          icon: <HiShieldCheck size={28} />,
          title: 'تحليل الشاشات الزرقاء',
          desc: 'يحلل minidump ويقولك سبب المشكلة بالضبط',
          color: 'from-amber-500 to-orange-400',
          bgColor: 'bg-amber-500/10',
        },
      ]
    : [
        {
          icon: <MdCleaningServices size={28} />,
          title: 'Advanced Cleaner',
          desc: 'Remove temp files, cache, logs, and Windows Update leftovers',
          color: 'from-primary-500 to-green-400',
          bgColor: 'bg-primary-500/10',
        },
        {
          icon: <MdSpeed size={28} />,
          title: 'Game Booster',
          desc: 'Kill unnecessary processes, prioritize games, reduce lag',
          color: 'from-accent-500 to-cyan-400',
          bgColor: 'bg-accent-500/10',
        },
        {
          icon: <HiChip size={28} />,
          title: 'Emulator Optimizer',
          desc: 'Boost Bluestacks, LDPlayer, MEmu performance dramatically',
          color: 'from-purple-500 to-pink-400',
          bgColor: 'bg-purple-500/10',
        },
        {
          icon: <MdCloudSync size={28} />,
          title: 'Cloud Sync',
          desc: 'Save your profiles to cloud and apply on any device',
          color: 'from-blue-500 to-indigo-400',
          bgColor: 'bg-blue-500/10',
        },
        {
          icon: <MdSecurity size={28} />,
          title: 'Privacy Guard',
          desc: 'Wipe browsing traces, block Windows telemetry, secure files',
          color: 'from-green-500 to-emerald-400',
          bgColor: 'bg-green-500/10',
        },
        {
          icon: <MdDevices size={28} />,
          title: 'Cross Platform',
          desc: 'Windows, macOS, Linux - one tool for all platforms',
          color: 'from-orange-500 to-yellow-400',
          bgColor: 'bg-orange-500/10',
        },
        {
          icon: <HiLightningBolt size={28} />,
          title: 'Esports Mode',
          desc: 'Pro settings in 1 click: Res, Graphics, Input Lag tweaks',
          color: 'from-red-500 to-rose-400',
          bgColor: 'bg-red-500/10',
        },
        {
          icon: <HiColorSwatch size={28} />,
          title: 'Color Enhancer',
          desc: 'Built-in VibranceGUI - boost screen colors for gaming',
          color: 'from-pink-500 to-purple-400',
          bgColor: 'bg-pink-500/10',
        },
        {
          icon: <HiCube size={28} />,
          title: 'AI Analyzer',
          desc: 'AI analyzes your system and suggests custom optimizations',
          color: 'from-cyan-500 to-blue-400',
          bgColor: 'bg-cyan-500/10',
        },
        {
          icon: <HiClock size={28} />,
          title: 'Smart Scheduler',
          desc: 'Auto-clean at scheduled times while you sleep',
          color: 'from-teal-500 to-green-400',
          bgColor: 'bg-teal-500/10',
        },
        {
          icon: <MdGamepad size={28} />,
          title: 'Game Profiles',
          desc: 'Auto-switching configs for each game you play',
          color: 'from-violet-500 to-purple-400',
          bgColor: 'bg-violet-500/10',
        },
        {
          icon: <HiShieldCheck size={28} />,
          title: 'BSOD Analyzer',
          desc: 'Analyze minidump files and tell you exactly what caused the crash',
          color: 'from-amber-500 to-orange-400',
          bgColor: 'bg-amber-500/10',
        },
      ]

  return (
    <section className="relative py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl sm:text-5xl font-black">
            <span className="gradient-text">
              {isArabic ? 'مميزات خارقة' : 'Power Features'}
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            {isArabic
              ? 'أكثر من 50+ أداة متكاملة لتنظيف وتسريع وتحسين جهازك'
              : '50+ integrated tools to clean, boost, and optimize your system'}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="card group cursor-default"
            >
              <div
                className={`w-12 h-12 rounded-xl ${feature.bgColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
              >
                <span className={`bg-gradient-to-br ${feature.color} bg-clip-text text-transparent`}>
                  {feature.icon}
                </span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
