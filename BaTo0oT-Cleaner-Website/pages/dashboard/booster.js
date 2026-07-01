import DashboardLayout from '@/components/dashboard/DashboardLayout'
import { useState, useEffect } from 'react'
import { HiFire, HiLightningBolt, HiChip, HiShieldCheck } from 'react-icons/hi'
import { MdGamepad, MdSpeed } from 'react-icons/md'

export default function BoosterPage() {
  const [isArabic, setIsArabic] = useState(false)
  const [gameMode, setGameMode] = useState(false)
  const [esportsMode, setEsportsMode] = useState(false)

  useEffect(() => {
    setIsArabic(localStorage.getItem('lang') === 'ar')
  }, [])

  const toggleGameMode = () => {
    setGameMode(!gameMode)
  }

  const toggleEsports = () => {
    setEsportsMode(!esportsMode)
  }

  const processes = isArabic
    ? [
        { name: 'Chrome (12 tabs)', pid: 8421, cpu: '8.2%', ram: '1.8 GB', type: 'browser' },
        { name: 'Discord', pid: 5632, cpu: '2.1%', ram: '456 MB', type: 'communication' },
        { name: 'Spotify', pid: 2341, cpu: '1.5%', ram: '234 MB', type: 'media' },
        { name: 'Steam', pid: 6789, cpu: '0.8%', ram: '312 MB', type: 'game' },
        { name: 'OneDrive', pid: 1234, cpu: '0.3%', ram: '89 MB', type: 'sync' },
        { name: 'Windows Update', pid: 4321, cpu: '5.6%', ram: '167 MB', type: 'system' },
      ]
    : [
        { name: 'Chrome (12 tabs)', pid: 8421, cpu: '8.2%', ram: '1.8 GB', type: 'browser' },
        { name: 'Discord', pid: 5632, cpu: '2.1%', ram: '456 MB', type: 'communication' },
        { name: 'Spotify', pid: 2341, cpu: '1.5%', ram: '234 MB', type: 'media' },
        { name: 'Steam', pid: 6789, cpu: '0.8%', ram: '312 MB', type: 'game' },
        { name: 'OneDrive', pid: 1234, cpu: '0.3%', ram: '89 MB', type: 'sync' },
        { name: 'Windows Update', pid: 4321, cpu: '5.6%', ram: '167 MB', type: 'system' },
      ]

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-white">
            {isArabic ? 'تسريع الألعاب' : 'Game Booster'}
          </h1>
          <p className="text-gray-400 text-sm">
            {isArabic
              ? 'أوقف العمليات غير الضرورية وخصص الموارد للألعاب'
              : 'Kill unnecessary processes and dedicate resources to gaming'}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <div className={`card cursor-pointer transition-all ${gameMode ? 'border-primary-500/40 bg-primary-500/5' : ''}`} onClick={toggleGameMode}>
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl ${gameMode ? 'bg-primary-500 text-white' : 'bg-white/5 text-primary-500'}`}>
                  <MdGamepad />
                </div>
                <div>
                  <h3 className="text-white font-bold">{isArabic ? 'Game Mode' : 'Game Mode'}</h3>
                  <p className="text-xs text-gray-400">{isArabic ? 'يوقف العمليات غير الضرورية ويخصص الموارد للعبة' : 'Stops unnecessary processes, prioritizes game resources'}</p>
                </div>
              </div>
              <div className={`w-12 h-6 rounded-full transition-colors ${gameMode ? 'bg-primary-500' : 'bg-white/10'}`}>
                <div className={`w-5 h-5 rounded-full bg-white transition-transform mt-0.5 ${gameMode ? 'translate-x-6' : 'translate-x-0.5'}`} />
              </div>
            </div>
          </div>

          <div className={`card cursor-pointer transition-all ${esportsMode ? 'border-accent-500/40 bg-accent-500/5' : ''}`} onClick={toggleEsports}>
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl ${esportsMode ? 'bg-accent-500 text-white' : 'bg-white/5 text-accent-500'}`}>
                  <HiFire />
                </div>
                <div>
                  <h3 className="text-white font-bold">{isArabic ? 'Esports Mode' : 'Esports Mode'}</h3>
                  <p className="text-xs text-gray-400">{isArabic ? 'إعدادات احترافية بضغطة: دقة، رسومات، زمن استجابة' : 'One-click pro settings: resolution, graphics, input lag'}</p>
                </div>
              </div>
              <div className={`w-12 h-6 rounded-full transition-colors ${esportsMode ? 'bg-accent-500' : 'bg-white/10'}`}>
                <div className={`w-5 h-5 rounded-full bg-white transition-transform mt-0.5 ${esportsMode ? 'translate-x-6' : 'translate-x-0.5'}`} />
              </div>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-white">
              {isArabic ? 'العمليات النشطة' : 'Active Processes'}
            </h3>
            <button className="btn-primary text-sm !px-4 !py-2">
              <HiLightningBolt className="inline mr-1" />
              {isArabic ? 'إنهاء المحدد' : 'Kill Selected'}
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-gray-500 border-b border-white/5">
                  <th className="text-left py-2 px-2">
                    <input type="checkbox" className="rounded" />
                  </th>
                  <th className="text-left py-2 px-2">{isArabic ? 'العملية' : 'Process'}</th>
                  <th className="text-left py-2 px-2">PID</th>
                  <th className="text-left py-2 px-2">CPU</th>
                  <th className="text-left py-2 px-2">RAM</th>
                  <th className="text-left py-2 px-2">{isArabic ? 'النوع' : 'Type'}</th>
                </tr>
              </thead>
              <tbody>
                {processes.map((proc, i) => (
                  <tr key={i} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                    <td className="py-2 px-2">
                      <input type="checkbox" className="rounded" defaultChecked={proc.type !== 'game'} />
                    </td>
                    <td className="py-2 px-2 text-white">{proc.name}</td>
                    <td className="py-2 px-2 text-gray-400">{proc.pid}</td>
                    <td className="py-2 px-2 text-gray-400">{proc.cpu}</td>
                    <td className="py-2 px-2 text-gray-400">{proc.ram}</td>
                    <td className="py-2 px-2">
                      <span className={`px-2 py-0.5 rounded-full text-xs ${
                        proc.type === 'browser' ? 'bg-blue-500/10 text-blue-400' :
                        proc.type === 'game' ? 'bg-primary-500/10 text-primary-400' :
                        proc.type === 'system' ? 'bg-yellow-500/10 text-yellow-400' :
                        'bg-gray-500/10 text-gray-400'
                      }`}>
                        {proc.type}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="grid sm:grid-cols-3 gap-4">
          {[
            { label: isArabic ? 'تحسين المعالج' : 'CPU Optimization', value: isArabic ? 'مفعل' : 'Active', icon: <HiChip />, color: 'text-primary-500' },
            { label: isArabic ? 'تحسين الذاكرة' : 'RAM Optimization', value: isArabic ? 'مفعل' : 'Active', icon: <HiLightningBolt />, color: 'text-accent-500' },
            { label: isArabic ? 'تحسين GPU' : 'GPU Optimization', value: isArabic ? 'غير مفعل' : 'Inactive', icon: <MdSpeed />, color: 'text-gray-400' },
          ].map((item, i) => (
            <div key={i} className="card flex items-center gap-3">
              <div className={`text-xl ${item.color}`}>{item.icon}</div>
              <div>
                <div className="text-xs text-gray-400">{item.label}</div>
                <div className="text-sm text-white font-medium">{item.value}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  )
}
