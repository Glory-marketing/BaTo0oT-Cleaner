import DashboardLayout from '@/components/dashboard/DashboardLayout'
import { useState, useEffect } from 'react'
import { HiCloudUpload, HiDownload, HiCheck } from 'react-icons/hi'

export default function CloudPage() {
  const [isArabic, setIsArabic] = useState(false)

  useEffect(() => {
    setIsArabic(localStorage.getItem('lang') === 'ar')
  }, [])

  const content = isArabic
    ? {
        title: 'المزامنة السحابية',
        desc: 'احفظ إعداداتك على السحابة وطبقها على أي جهاز',
        lastSync: 'آخر مزامنة: من 5 دقائق',
        upload: 'رفع إلى السحابة',
        download: 'تحميل من السحابة',
        premium: 'المزامنة السحابية متاحة للمستخدمين Premium',
        upgrade: 'ترقية إلى Premium',
      }
    : {
        title: 'Cloud Sync',
        desc: 'Save your settings to cloud and apply on any device',
        lastSync: 'Last synced: 5 minutes ago',
        upload: 'Upload to Cloud',
        download: 'Download from Cloud',
        premium: 'Cloud sync is available for Premium users',
        upgrade: 'Upgrade to Premium',
      }

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-white">{content.title}</h1>
          <p className="text-gray-400 text-sm">{content.desc}</p>
        </div>

        <div className="glass rounded-2xl p-4">
          <div className="flex items-center gap-2 text-sm text-primary-500">
            <HiCheck />
            <span>{content.lastSync}</span>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <button className="card flex items-center gap-4 hover:border-primary-500/30 transition-all">
            <div className="w-12 h-12 rounded-xl bg-primary-500/10 flex items-center justify-center text-primary-500">
              <HiCloudUpload size={24} />
            </div>
            <div className="text-left">
              <div className="text-white font-medium">{content.upload}</div>
              <div className="text-xs text-gray-400">{isArabic ? 'رفع جميع الإعدادات' : 'Upload all settings'}</div>
            </div>
          </button>
          <button className="card flex items-center gap-4 hover:border-primary-500/30 transition-all">
            <div className="w-12 h-12 rounded-xl bg-accent-500/10 flex items-center justify-center text-accent-500">
              <HiDownload size={24} />
            </div>
            <div className="text-left">
              <div className="text-white font-medium">{content.download}</div>
              <div className="text-xs text-gray-400">{isArabic ? 'تحميل آخر الإعدادات' : 'Download latest settings'}</div>
            </div>
          </button>
        </div>

        <div className="card">
          <div className="text-center py-8 space-y-4">
            <HiCloudUpload className="text-4xl text-gray-500 mx-auto" />
            <p className="text-gray-400 text-sm">{content.premium}</p>
            <button className="btn-primary">{content.upgrade}</button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
