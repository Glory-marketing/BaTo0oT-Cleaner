import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function Stats() {
  const [isArabic, setIsArabic] = useState(false)

  useEffect(() => {
    setIsArabic(localStorage.getItem('lang') === 'ar')
  }, [])

  const items = isArabic
    ? [
        { value: '500M+', label: 'ملف تم تنظيفه', icon: '🗑️' },
        { value: '10M+', label: 'ساعة لعب محسنة', icon: '🎮' },
        { value: '250K+', label: 'مستخدم Premium', icon: '⭐' },
        { value: '150+', label: 'دولة حول العالم', icon: '🌍' },
      ]
    : [
        { value: '500M+', label: 'Files Cleaned', icon: '🗑️' },
        { value: '10M+', label: 'Gaming Hours Boosted', icon: '🎮' },
        { value: '250K+', label: 'Premium Users', icon: '⭐' },
        { value: '150+', label: 'Countries Worldwide', icon: '🌍' },
      ]

  return (
    <section className="relative py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-800/50 via-primary-500/5 to-dark-800/50" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card text-center py-8"
            >
              <div className="text-3xl mb-3">{item.icon}</div>
              <div className="text-3xl sm:text-4xl font-black gradient-text mb-1">
                {item.value}
              </div>
              <div className="text-sm text-gray-400">{item.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
