import DashboardLayout from '@/components/dashboard/DashboardLayout'
import { useState, useEffect } from 'react'

export default function SettingsPage() {
  const [isArabic, setIsArabic] = useState(false)

  useEffect(() => {
    setIsArabic(localStorage.getItem('lang') === 'ar')
  }, [])

  const sections = isArabic
    ? [
        { title: 'عام', items: [
          { label: 'اللغة', type: 'select', value: 'العربية', options: ['العربية', 'English'] },
          { label: 'تشغيل عند بدء التشغيل', type: 'toggle', value: true },
          { label: 'التحديث التلقائي', type: 'toggle', value: true },
          { label: 'إظهار الإشعارات', type: 'toggle', value: false },
        ]},
        { title: 'التنظيف', items: [
          { label: 'سلة المحذوفات', type: 'toggle', value: true },
          { label: 'Cache المتصفحات', type: 'toggle', value: true },
          { label: 'ملفات النظام المؤقتة', type: 'toggle', value: true },
          { label: 'Windows Update', type: 'toggle', value: false },
          { label: 'التأكيد قبل الحذف', type: 'toggle', value: true },
        ]},
        { title: 'الألعاب', items: [
          { label: 'Game Booster التلقائي', type: 'toggle', value: true },
          { label: 'Esports Mode عند فتح اللعبة', type: 'toggle', value: false },
          { label: 'إظهار FPS Counter', type: 'toggle', value: true },
          { label: 'تحسين المحاكيات تلقائياً', type: 'toggle', value: false },
        ]},
        { title: 'الخصوصية', items: [
          { label: 'إرسال إحصائيات الاستخدام', type: 'toggle', value: false },
          { label: 'مسح السجلات تلقائياً', type: 'toggle', value: true },
          { label: 'حماية الملفات الحساسة', type: 'toggle', value: true },
        ]},
      ]
    : [
        { title: 'General', items: [
          { label: 'Language', type: 'select', value: 'English', options: ['English', 'العربية'] },
          { label: 'Launch on Startup', type: 'toggle', value: true },
          { label: 'Auto Update', type: 'toggle', value: true },
          { label: 'Show Notifications', type: 'toggle', value: false },
        ]},
        { title: 'Cleaning', items: [
          { label: 'Recycle Bin', type: 'toggle', value: true },
          { label: 'Browser Cache', type: 'toggle', value: true },
          { label: 'System Temp Files', type: 'toggle', value: true },
          { label: 'Windows Update Cache', type: 'toggle', value: false },
          { label: 'Confirm before deleting', type: 'toggle', value: true },
        ]},
        { title: 'Gaming', items: [
          { label: 'Auto Game Booster', type: 'toggle', value: true },
          { label: 'Esports Mode on Game Launch', type: 'toggle', value: false },
          { label: 'Show FPS Counter', type: 'toggle', value: true },
          { label: 'Auto Emulator Optimization', type: 'toggle', value: false },
        ]},
        { title: 'Privacy', items: [
          { label: 'Send Usage Statistics', type: 'toggle', value: false },
          { label: 'Auto-clear Logs', type: 'toggle', value: true },
          { label: 'Protect Sensitive Files', type: 'toggle', value: true },
        ]},
      ]

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-white">
            {isArabic ? 'الإعدادات' : 'Settings'}
          </h1>
          <p className="text-gray-400 text-sm">
            {isArabic ? 'خصص البرنامج حسب احتياجاتك' : 'Customize the program to your needs'}
          </p>
        </div>

        {sections.map((section, idx) => (
          <div key={idx} className="card">
            <h3 className="text-lg font-bold text-white mb-4">{section.title}</h3>
            <div className="space-y-1">
              {section.items.map((item, i) => (
                <div key={i} className="flex items-center justify-between py-3 px-4 rounded-xl hover:bg-white/5 transition-colors">
                  <span className="text-sm text-gray-300">{item.label}</span>
                  {item.type === 'toggle' ? (
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" defaultChecked={item.value} className="sr-only peer" />
                      <div className="w-11 h-6 bg-white/10 rounded-full peer peer-checked:bg-primary-500 after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full"></div>
                    </label>
                  ) : (
                    <select className="bg-white/5 border border-white/10 rounded-xl px-3 py-1.5 text-sm text-white focus:outline-none focus:border-primary-500/50">
                      {item.options.map((opt, oi) => (
                        <option key={oi} value={opt} className="bg-dark-800">{opt}</option>
                      ))}
                    </select>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="flex justify-end gap-3">
          <button className="btn-secondary text-sm !px-6 !py-2.5">
            {isArabic ? 'إعادة تعيين' : 'Reset'}
          </button>
          <button className="btn-primary text-sm !px-6 !py-2.5">
            {isArabic ? 'حفظ الإعدادات' : 'Save Settings'}
          </button>
        </div>
      </div>
    </DashboardLayout>
  )
}
