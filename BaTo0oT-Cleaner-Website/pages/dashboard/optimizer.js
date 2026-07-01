import DashboardLayout from '@/components/dashboard/DashboardLayout'
import { useState, useEffect } from 'react'
import { HiAdjustments, HiLightningBolt, HiGlobe, HiChip } from 'react-icons/hi'

export default function OptimizerPage() {
  const [isArabic, setIsArabic] = useState(false)

  useEffect(() => {
    setIsArabic(localStorage.getItem('lang') === 'ar')
  }, [])

  const tweaks = isArabic
    ? [
        { category: 'الشبكة', items: [
          { name: 'TCP/IP Optimization', desc: 'تحسين حزمة TCP/IP للألعاب', enabled: true },
          { name: 'DNS Switcher', desc: 'التبديل لأسرع DNS تلقائياً', enabled: false },
          { name: 'Network Throttling', desc: 'إيقاف تحديد عرض النطاق', enabled: true },
        ]},
        { category: 'النظام', items: [
          { name: 'HPET Timer', desc: 'تقليل HPET Timer Resolution', enabled: true },
          { name: 'Power Plan', desc: 'تفعيل Ultimate Performance Plan', enabled: true },
          { name: 'Windows Telemetry', desc: 'إيقاف تتبع ويندوز', enabled: true },
        ]},
        { category: 'الرسومات', items: [
          { name: 'GPU Scheduling', desc: 'تفعيل Hardware Accelerated GPU Scheduling', enabled: true },
          { name: 'Visual Effects', desc: 'إيقاف التأثيرات البصرية غير الضرورية', enabled: true },
          { name: 'Color Vibrance', desc: 'تحسين ألوان الشاشة للألعاب', enabled: false },
        ]},
      ]
    : [
        { category: 'Network', items: [
          { name: 'TCP/IP Optimization', desc: 'Optimize TCP/IP stack for gaming', enabled: true },
          { name: 'DNS Switcher', desc: 'Auto-switch to fastest DNS', enabled: false },
          { name: 'Network Throttling', desc: 'Disable bandwidth throttling', enabled: true },
        ]},
        { category: 'System', items: [
          { name: 'HPET Timer', desc: 'Reduce HPET Timer Resolution', enabled: true },
          { name: 'Power Plan', desc: 'Enable Ultimate Performance Plan', enabled: true },
          { name: 'Windows Telemetry', desc: 'Disable Windows telemetry', enabled: true },
        ]},
        { category: 'Graphics', items: [
          { name: 'GPU Scheduling', desc: 'Enable Hardware Accelerated GPU Scheduling', enabled: true },
          { name: 'Visual Effects', desc: 'Disable unnecessary visual effects', enabled: true },
          { name: 'Color Vibrance', desc: 'Enhance screen colors for gaming', enabled: false },
        ]},
      ]

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-white">
            {isArabic ? 'تحسين متقدم' : 'Advanced Tweaks'}
          </h1>
          <p className="text-gray-400 text-sm">
            {isArabic ? 'تعديلات عميقة في النظام والشبكة لتحقيق أقصى أداء' : 'Deep system and network tweaks for maximum performance'}
          </p>
        </div>

        {tweaks.map((section, idx) => (
          <div key={idx} className="card">
            <h3 className="text-lg font-bold text-white mb-4">{section.category}</h3>
            <div className="space-y-2">
              {section.items.map((item, i) => (
                <div key={i} className="flex items-center justify-between py-3 px-4 rounded-xl hover:bg-white/5 transition-colors">
                  <div>
                    <div className="text-sm text-white font-medium">{item.name}</div>
                    <div className="text-xs text-gray-400">{item.desc}</div>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" defaultChecked={item.enabled} className="sr-only peer" />
                    <div className="w-11 h-6 bg-white/10 rounded-full peer peer-checked:bg-primary-500 after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full"></div>
                  </label>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </DashboardLayout>
  )
}
