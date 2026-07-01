import DashboardLayout from '@/components/dashboard/DashboardLayout'
import { useState, useEffect } from 'react'
import { HiChip, HiCheck, HiLightningBolt } from 'react-icons/hi'
import { MdDevices } from 'react-icons/md'

export default function EmulatorPage() {
  const [isArabic, setIsArabic] = useState(false)
  const [selectedEmulator, setSelectedEmulator] = useState('bluestacks')

  useEffect(() => {
    setIsArabic(localStorage.getItem('lang') === 'ar')
  }, [])

  const emulators = [
    {
      id: 'bluestacks',
      name: 'Bluestacks',
      icon: 'B',
      color: 'from-blue-500 to-indigo-400',
    },
    {
      id: 'ldplayer',
      name: 'LDPlayer',
      icon: 'L',
      color: 'from-green-500 to-emerald-400',
    },
    {
      id: 'memu',
      name: 'MEmu',
      icon: 'M',
      color: 'from-orange-500 to-red-400',
    },
    {
      id: 'nox',
      name: 'Nox',
      icon: 'N',
      color: 'from-yellow-500 to-amber-400',
    },
  ]

  const optimizations = isArabic
    ? [
        { name: 'تخصيص 4 أنوية معالج', desc: 'خصص 4 أنوية CPU للمحاكي', enabled: true },
        { name: 'تخصيص 4 GB RAM', desc: 'خصص 4 جيجابايت من الذاكرة للمحاكي', enabled: true },
        { name: 'تفعيل Virtualization', desc: 'تأكد من تفعيل Intel VT-x / AMD-V', enabled: true },
        { name: 'تحسين الرسومات (OpenGL)', desc: 'استخدام OpenGL بدلاً من DirectX', enabled: false },
        { name: 'وضع الأداء العالي', desc: 'تفعيل High Performance Mode', enabled: true },
        { name: 'إيقاف الخدمات الخلفية', desc: 'إيقاف خدمات ويندوز غير الضرورية', enabled: true },
        { name: 'تحسين الـ FPS', desc: 'تثبيت FPS عند 60 إطار', enabled: true },
        { name: 'تقليل زمن الاستجابة', desc: 'تقليل Input Lag', enabled: false },
      ]
    : [
        { name: 'Allocate 4 CPU Cores', desc: 'Dedicate 4 CPU cores to the emulator', enabled: true },
        { name: 'Allocate 4 GB RAM', desc: 'Dedicate 4 GB of RAM to the emulator', enabled: true },
        { name: 'Enable Virtualization', desc: 'Ensure Intel VT-x / AMD-V is enabled', enabled: true },
        { name: 'Graphics Mode (OpenGL)', desc: 'Use OpenGL instead of DirectX', enabled: false },
        { name: 'High Performance Mode', desc: 'Enable High Performance Mode', enabled: true },
        { name: 'Stop Background Services', desc: 'Stop unnecessary Windows services', enabled: true },
        { name: 'FPS Optimization', desc: 'Lock FPS at 60', enabled: true },
        { name: 'Input Lag Reduction', desc: 'Reduce input latency', enabled: false },
      ]

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-white">
            {isArabic ? 'تحسين المحاكيات' : 'Emulator Optimizer'}
          </h1>
          <p className="text-gray-400 text-sm">
            {isArabic
              ? 'حسن أداء المحاكيات وزد FPS في ألعاب الموبايل'
              : 'Boost emulator performance and increase FPS in mobile games'}
          </p>
        </div>

        <div className="flex gap-3 overflow-x-auto pb-2">
          {emulators.map((emu) => (
            <button
              key={emu.id}
              onClick={() => setSelectedEmulator(emu.id)}
              className={`flex items-center gap-2 px-4 py-3 rounded-xl transition-all whitespace-nowrap ${
                selectedEmulator === emu.id
                  ? 'bg-gradient-to-r ' + emu.color + ' text-white'
                  : 'glass text-gray-300 hover:bg-white/10'
              }`}
            >
              <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${emu.color} flex items-center justify-center text-sm font-bold text-white`}>
                {emu.icon}
              </div>
              <span className="font-medium">{emu.name}</span>
            </button>
          ))}
        </div>

        <div className="card">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-white">
              {isArabic ? 'إعدادات التحسين' : 'Optimization Settings'}
            </h3>
            <button className="btn-primary text-sm !px-6 !py-2.5 flex items-center gap-2">
              <HiLightningBolt />
              {isArabic ? 'تطبيق الكل' : 'Apply All'}
            </button>
          </div>
          <div className="space-y-2">
            {optimizations.map((opt, i) => (
              <div key={i} className="flex items-center justify-between py-3 px-4 rounded-xl hover:bg-white/5 transition-colors">
                <div>
                  <div className="text-sm text-white font-medium">{opt.name}</div>
                  <div className="text-xs text-gray-400">{opt.desc}</div>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" defaultChecked={opt.enabled} className="sr-only peer" />
                  <div className="w-11 h-6 bg-white/10 rounded-full peer peer-checked:bg-primary-500 after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full"></div>
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
