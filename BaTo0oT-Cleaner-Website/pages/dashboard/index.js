import DashboardLayout from '@/components/dashboard/DashboardLayout'
import AuthGuard from '@/components/dashboard/AuthGuard'
import { useState, useEffect } from 'react'
import { useAuth } from '@/contexts/AuthContext'
import Link from 'next/link'
import {
  HiChip, HiFire, HiStar, HiClock, HiShieldCheck, HiChartBar
} from 'react-icons/hi'
import { MdSpeed, MdCleaningServices, MdGamepad, MdDevices } from 'react-icons/md'

export default function Dashboard() {
  const [isArabic, setIsArabic] = useState(false)
  const { user, profile } = useAuth()

  useEffect(() => {
    setIsArabic(localStorage.getItem('lang') === 'ar')
  }, [])

  const stats = isArabic
    ? [
        { label: 'حالة النظام', value: 'ممتاز', icon: <HiShieldCheck />, color: 'text-primary-500' },
        { label: 'آخر تنظيف', value: 'منذ ساعتين', icon: <HiClock />, color: 'text-accent-500' },
        { label: 'درجة الحرارة', value: '52°C', icon: <HiFire />, color: 'text-orange-500' },
        { label: 'FPS المتوقع', value: '144+', icon: <HiStar />, color: 'text-yellow-500' },
      ]
    : [
        { label: 'System Status', value: 'Excellent', icon: <HiShieldCheck />, color: 'text-primary-500' },
        { label: 'Last Cleaned', value: '2 hours ago', icon: <HiClock />, color: 'text-accent-500' },
        { label: 'Temperature', value: '52°C', icon: <HiFire />, color: 'text-orange-500' },
        { label: 'Expected FPS', value: '144+', icon: <HiStar />, color: 'text-yellow-500' },
      ]

  const quickActions = isArabic
    ? [
        { label: 'تنظيف سريع', icon: <MdCleaningServices />, color: 'from-primary-500 to-green-400' },
        { label: 'وضع الألعاب', icon: <MdGamepad />, color: 'from-accent-500 to-cyan-400' },
        { label: 'تحليل النظام', icon: <HiChip />, color: 'from-purple-500 to-pink-400' },
        { label: 'تحسين المحاكيات', icon: <MdDevices />, color: 'from-blue-500 to-indigo-400' },
      ]
    : [
        { label: 'Quick Clean', icon: <MdCleaningServices />, color: 'from-primary-500 to-green-400' },
        { label: 'Game Mode', icon: <MdGamepad />, color: 'from-accent-500 to-cyan-400' },
        { label: 'System Analysis', icon: <HiChip />, color: 'from-purple-500 to-pink-400' },
        { label: 'Emulator Boost', icon: <MdDevices />, color: 'from-blue-500 to-indigo-400' },
      ]

  return (
    <AuthGuard>
      <DashboardLayout>
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-white">
                {isArabic ? 'نظرة عامة' : 'Overview'}
              </h1>
              <p className="text-gray-400 text-sm">
                {isArabic
                  ? `مرحباً ${profile?.full_name || user?.email}`
                  : `Welcome back, ${profile?.full_name || user?.email}`}
              </p>
            </div>
            <Link
              href="/dashboard/consumption"
              className="flex items-center gap-2 text-sm text-primary-500 hover:text-primary-400 transition-colors"
            >
              <HiChartBar />
              {isArabic ? 'الاستهلاك والتقارير' : 'Consumption & Reports'}
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((stat, i) => (
              <div key={i} className="card flex items-center gap-4">
                <div className={`text-2xl ${stat.color}`}>{stat.icon}</div>
                <div>
                  <div className="text-xs text-gray-400">{stat.label}</div>
                  <div className="text-lg font-bold text-white">{stat.value}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {quickActions.map((action, i) => (
              <button
                key={i}
                className="card hover:border-transparent relative overflow-hidden group text-left"
              >
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity bg-gradient-to-br ${action.color}`} />
                <div className="relative z-10">
                  <div className="text-2xl text-primary-500 mb-2">{action.icon}</div>
                  <span className="text-sm font-medium text-white">{action.label}</span>
                </div>
              </button>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            <div className="card">
              <h3 className="text-lg font-bold text-white mb-4">
                {isArabic ? 'معلومات الحساب' : 'Account Info'}
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-white/5">
                  <span className="text-sm text-gray-400">{isArabic ? 'البريد الإلكتروني' : 'Email'}</span>
                  <span className="text-sm text-white font-medium">{user?.email}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-white/5">
                  <span className="text-sm text-gray-400">{isArabic ? 'الخطة' : 'Plan'}</span>
                  <span className={`text-sm font-medium ${profile?.plan === 'ultimate' ? 'text-purple-400' : profile?.plan === 'premium' ? 'text-primary-400' : 'text-gray-400'}`}>
                    {profile?.plan || 'Free'}
                  </span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-sm text-gray-400">{isArabic ? 'تاريخ التسجيل' : 'Joined'}</span>
                  <span className="text-sm text-white font-medium">
                    {user?.created_at ? new Date(user.created_at).toLocaleDateString() : '-'}
                  </span>
                </div>
              </div>
            </div>

            <div className="card">
              <h3 className="text-lg font-bold text-white mb-4">
                {isArabic ? 'استخدام الموارد' : 'Resource Usage'}
              </h3>
              <div className="space-y-4">
                {[
                  { label: 'CPU', value: 23, color: 'bg-primary-500' },
                  { label: 'RAM', value: 48, color: 'bg-accent-500' },
                  { label: 'GPU', value: 12, color: 'bg-purple-500' },
                  { label: 'Disk', value: 45, color: 'bg-yellow-500' },
                ].map((item) => (
                  <div key={item.label} className="space-y-1">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">{item.label}</span>
                      <span className="text-white font-medium">{item.value}%</span>
                    </div>
                    <div className="h-2 rounded-full bg-white/5 overflow-hidden">
                      <div
                        className={`h-full rounded-full ${item.color} transition-all duration-500`}
                        style={{ width: `${item.value}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </DashboardLayout>
    </AuthGuard>
  )
}
