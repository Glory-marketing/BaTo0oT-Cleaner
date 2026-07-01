import DashboardLayout from '@/components/dashboard/DashboardLayout'
import { useState, useEffect } from 'react'
import { HiCheck, HiTrash, HiSearch, HiRefresh } from 'react-icons/hi'

export default function CleanerPage() {
  const [isArabic, setIsArabic] = useState(false)
  const [scanning, setScanning] = useState(false)
  const [cleaning, setCleaning] = useState(false)
  const [progress, setProgress] = useState(0)
  const [foundFiles, setFoundFiles] = useState(null)

  useEffect(() => {
    setIsArabic(localStorage.getItem('lang') === 'ar')
  }, [])

  const categories = isArabic
    ? [
        { name: 'ملفات النظام المؤقتة', size: '1.2 GB', items: 15420 },
        { name: 'Cache المتصفحات', size: '856 MB', items: 8921 },
        { name: 'سلة المحذوفات', size: '234 MB', items: 342 },
        { name: 'Windows Update', size: '1.8 GB', items: 523 },
        { name: 'سجلات الأخطاء', size: '89 MB', items: 1240 },
        { name: 'Thumbnail Cache', size: '156 MB', items: 5432 },
        { name: 'ملفات التطبيقات المؤقتة', size: '445 MB', items: 2341 },
        { name: 'Delivery Optimization', size: '678 MB', items: 89 },
      ]
    : [
        { name: 'Temporary System Files', size: '1.2 GB', items: 15420 },
        { name: 'Browser Cache', size: '856 MB', items: 8921 },
        { name: 'Recycle Bin', size: '234 MB', items: 342 },
        { name: 'Windows Update Cache', size: '1.8 GB', items: 523 },
        { name: 'Error Logs', size: '89 MB', items: 1240 },
        { name: 'Thumbnail Cache', size: '156 MB', items: 5432 },
        { name: 'App Temp Files', size: '445 MB', items: 2341 },
        { name: 'Delivery Optimization', size: '678 MB', items: 89 },
      ]

  const totalSize = '5.4 GB'
  const totalItems = 34308

  const startScan = () => {
    setScanning(true)
    setProgress(0)
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(interval)
          setScanning(false)
          setFoundFiles({ size: totalSize, items: totalItems })
          return 100
        }
        return p + 2
      })
    }, 80)
  }

  const startClean = () => {
    setCleaning(true)
    setProgress(0)
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(interval)
          setCleaning(false)
          setFoundFiles(null)
          return 100
        }
        return p + 1
      })
    }, 50)
  }

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-white">
            {isArabic ? 'منظف النظام' : 'System Cleaner'}
          </h1>
          <p className="text-gray-400 text-sm">
            {isArabic
              ? 'افحص ونظف جهازك من الملفات غير الضرورية'
              : 'Scan and clean unnecessary files from your system'}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          <div className="card space-y-4">
            <h3 className="text-lg font-bold text-white">
              {isArabic ? 'الفحص' : 'Scan'}
            </h3>
            <p className="text-sm text-gray-400">
              {isArabic
                ? 'سيقوم البرنامج بفحص جميع أنواع الملفات المؤقتة'
                : 'The program will scan all types of temporary files'}
            </p>

            <div className="flex gap-3">
              <button
                onClick={startScan}
                disabled={scanning || cleaning}
                className="btn-primary flex items-center gap-2 !px-6"
              >
                <HiSearch />
                {scanning
                  ? isArabic ? 'جارٍ الفحص...' : 'Scanning...'
                  : isArabic ? 'ابدأ الفحص' : 'Start Scan'}
              </button>
              {foundFiles && (
                <button
                  onClick={startClean}
                  disabled={cleaning}
                  className="btn-secondary flex items-center gap-2 !px-6"
                >
                  <HiTrash />
                  {cleaning
                    ? isArabic ? 'جارٍ التنظيف...' : 'Cleaning...'
                    : isArabic ? 'تنظيف' : 'Clean'}
                </button>
              )}
            </div>

            {(scanning || cleaning) && (
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">
                    {scanning
                      ? isArabic ? 'جارٍ فحص الملفات...' : 'Scanning files...'
                      : isArabic ? 'جارٍ تنظيف الملفات...' : 'Cleaning files...'}
                  </span>
                  <span className="text-white font-medium">{progress}%</span>
                </div>
                <div className="h-2 rounded-full bg-white/5 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-primary-500 to-accent-500 transition-all duration-300"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>
            )}

            {foundFiles && !cleaning && (
              <div className="glass rounded-2xl p-4 space-y-2">
                <div className="flex items-center gap-2 text-primary-500">
                  <HiCheck />
                  <span className="text-sm font-medium">
                    {isArabic ? 'اكتمل الفحص!' : 'Scan complete!'}
                  </span>
                </div>
                <div className="text-sm text-gray-400">
                  {isArabic
                    ? `وجد ${foundFiles.items.toLocaleString()} ملف بحجم ${foundFiles.size}`
                    : `Found ${foundFiles.items.toLocaleString()} files totaling ${foundFiles.size}`}
                </div>
              </div>
            )}

            {cleaning && progress >= 100 && (
              <div className="glass rounded-2xl p-4 space-y-2">
                <div className="flex items-center gap-2 text-primary-500">
                  <HiRefresh />
                  <span className="text-sm font-medium">
                    {isArabic ? 'تم التنظيف بنجاح!' : 'Cleaning completed!'}
                  </span>
                </div>
                <p className="text-sm text-gray-400">
                  {isArabic
                    ? 'تم تحرير 5.4 GB من المساحة'
                    : 'Freed up 5.4 GB of space'}
                </p>
              </div>
            )}
          </div>

          <div className="card">
            <h3 className="text-lg font-bold text-white mb-4">
              {isArabic ? 'فئات التنظيف' : 'Cleanup Categories'}
            </h3>
            <div className="space-y-2 max-h-96 overflow-y-auto">
              {categories.map((cat, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between py-2 px-3 rounded-xl hover:bg-white/5 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      defaultChecked
                      className="w-4 h-4 rounded border-gray-600 bg-white/5 text-primary-500 focus:ring-primary-500"
                    />
                    <span className="text-sm text-gray-300">{cat.name}</span>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-white font-medium">{cat.size}</div>
                    <div className="text-xs text-gray-500">{cat.items.toLocaleString()} items</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
