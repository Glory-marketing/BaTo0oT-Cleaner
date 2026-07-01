import DashboardLayout from '@/components/dashboard/DashboardLayout'
import { useState, useEffect } from 'react'
import { HiClock, HiPlus, HiTrash } from 'react-icons/hi'

export default function SchedulerPage() {
  const [isArabic, setIsArabic] = useState(false)

  useEffect(() => {
    setIsArabic(localStorage.getItem('lang') === 'ar')
  }, [])

  const tasks = isArabic
    ? [
        { name: 'تنظيف يومي', type: 'يومي', time: '03:00', active: true },
        { name: 'تحليل الأداء', type: 'أسبوعي', time: '12:00', active: true },
        { name: 'Game Mode تلقائي', type: 'عند تشغيل لعبة', time: 'تلقائي', active: false },
      ]
    : [
        { name: 'Daily Cleanup', type: 'Daily', time: '03:00 AM', active: true },
        { name: 'Performance Analysis', type: 'Weekly', time: '12:00 PM', active: true },
        { name: 'Auto Game Mode', type: 'On Game Launch', time: 'Automatic', active: false },
      ]

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-white">
              {isArabic ? 'الجدولة' : 'Scheduler'}
            </h1>
            <p className="text-gray-400 text-sm">
              {isArabic ? 'جدولة مهام التنظيف والتحسين' : 'Schedule cleaning and optimization tasks'}
            </p>
          </div>
          <button className="btn-primary flex items-center gap-2 text-sm !px-4 !py-2.5">
            <HiPlus />
            {isArabic ? 'مهمة جديدة' : 'New Task'}
          </button>
        </div>

        <div className="space-y-3">
          {tasks.map((task, i) => (
            <div key={i} className="card flex items-center justify-between">
              <div className="flex items-center gap-4">
                <HiClock className={`text-xl ${task.active ? 'text-primary-500' : 'text-gray-500'}`} />
                <div>
                  <div className="text-white font-medium">{task.name}</div>
                  <div className="text-xs text-gray-400">{task.type} • {task.time}</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" defaultChecked={task.active} className="sr-only peer" />
                  <div className="w-11 h-6 bg-white/10 rounded-full peer peer-checked:bg-primary-500 after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full"></div>
                </label>
                <button className="text-gray-500 hover:text-red-400 transition-colors">
                  <HiTrash />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  )
}
