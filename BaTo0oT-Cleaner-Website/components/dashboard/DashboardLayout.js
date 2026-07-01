import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import {
  HiHome, HiChip, HiShieldCheck, HiCube, HiAdjustments,
  HiDownload, HiStar, HiLogout, HiMenu, HiX, HiClock
} from 'react-icons/hi'
import { MdSpeed, MdCleaningServices, MdGamepad, MdCloudSync, MdDevices } from 'react-icons/md'

export default function DashboardLayout({ children }) {
  const [isArabic, setIsArabic] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [plan, setPlan] = useState('Free')
  const router = useRouter()

  useEffect(() => {
    setIsArabic(localStorage.getItem('lang') === 'ar')
  }, [])

  const navItems = isArabic
    ? [
        { href: '/dashboard', label: 'نظرة عامة', icon: <HiHome /> },
        { href: '/dashboard/cleaner', label: 'منظف النظام', icon: <MdCleaningServices /> },
        { href: '/dashboard/booster', label: 'تسريع الألعاب', icon: <MdSpeed /> },
        { href: '/dashboard/emulator', label: 'تحسين المحاكيات', icon: <HiChip /> },
        { href: '/dashboard/optimizer', label: 'تحسين متقدم', icon: <HiAdjustments /> },
        { href: '/dashboard/scheduler', label: 'الجدولة', icon: <HiClock /> },
        { href: '/dashboard/cloud', label: 'السحابة', icon: <MdCloudSync /> },
        { href: '/dashboard/settings', label: 'الإعدادات', icon: <HiAdjustments /> },
      ]
    : [
        { href: '/dashboard', label: 'Overview', icon: <HiHome /> },
        { href: '/dashboard/cleaner', label: 'System Cleaner', icon: <MdCleaningServices /> },
        { href: '/dashboard/booster', label: 'Game Booster', icon: <MdSpeed /> },
        { href: '/dashboard/emulator', label: 'Emulator Boost', icon: <HiChip /> },
        { href: '/dashboard/optimizer', label: 'Advanced Tweaks', icon: <HiAdjustments /> },
        { href: '/dashboard/scheduler', label: 'Scheduler', icon: <HiClock /> },
        { href: '/dashboard/cloud', label: 'Cloud Sync', icon: <MdCloudSync /> },
        { href: '/dashboard/settings', label: 'Settings', icon: <HiAdjustments /> },
      ]

  const planColors = {
    'Free': 'text-gray-400',
    'Premium': 'text-primary-500',
    'Ultimate': 'text-purple-500',
  }

  return (
    <div className="pt-16 min-h-screen flex">
      <aside className={`fixed lg:sticky top-16 h-[calc(100vh-4rem)] z-40 transition-all duration-300 ${
        isOpen ? 'left-0' : '-left-full lg:left-0'
      } w-64 glass border-r border-white/5 p-4 overflow-y-auto`}>
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center text-sm font-bold">
              B
            </div>
            <span className="text-sm font-semibold text-white">BaTo0oT</span>
          </div>
          <span className={`text-xs font-medium ${planColors[plan]}`}>{plan}</span>
        </div>

        <nav className="space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition-all ${
                router.pathname === item.href
                  ? 'bg-primary-500/10 text-primary-500 border border-primary-500/20'
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <span className="text-lg">{item.icon}</span>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="mt-6 pt-6 border-t border-white/5">
          <button className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-gray-400 hover:text-red-400 hover:bg-red-500/5 transition-all w-full">
            <HiLogout />
            {isArabic ? 'تسجيل خروج' : 'Sign Out'}
          </button>
        </div>
      </aside>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      <main className="flex-1 p-4 sm:p-6 lg:p-8">
        <div className="lg:hidden mb-4">
          <button
            onClick={() => setIsOpen(true)}
            className="p-2 rounded-xl glass text-white"
          >
            <HiMenu size={20} />
          </button>
        </div>
        {children}
      </main>
    </div>
  )
}
