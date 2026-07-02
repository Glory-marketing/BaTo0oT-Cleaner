import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabase'
import { useAuth } from '@/contexts/AuthContext'
import DashboardLayout from '@/components/dashboard/DashboardLayout'
import AuthGuard from '@/components/dashboard/AuthGuard'

export default function Consumption() {
  const [isArabic, setIsArabic] = useState(false)
  const [logs, setLogs] = useState([])
  const { user } = useAuth()

  useEffect(() => {
    setIsArabic(localStorage.getItem('lang') === 'ar')
    if (user) fetchLogs()
  }, [user])

  async function fetchLogs() {
    const { data } = await supabase
      .from('performance_logs')
      .select('*')
      .eq('user_id', user.id)
      .order('logged_at', { ascending: false })
      .limit(20)
    if (data) setLogs(data)
  }

  const avgUsage = logs.length > 0 ? {
    cpu: (logs.reduce((s, l) => s + (l.cpu_usage || 0), 0) / logs.length).toFixed(1),
    ram: (logs.reduce((s, l) => s + (l.ram_usage || 0), 0) / logs.length).toFixed(1),
    gpu: (logs.reduce((s, l) => s + (l.gpu_usage || 0), 0) / logs.length).toFixed(1),
    fps: (logs.reduce((s, l) => s + (l.fps_avg || 0), 0) / logs.length).toFixed(0),
  } : null

  return (
    <AuthGuard>
      <DashboardLayout>
        <div className="space-y-6">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-white">
              {isArabic ? 'الاستهلاك والتقارير' : 'Consumption & Reports'}
            </h1>
            <p className="text-gray-400 text-sm">
              {isArabic ? 'متابعة أداء جهازك وإحصائيات البرنامج' : 'Track your system performance and usage stats'}
            </p>
          </div>

          {avgUsage && (
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { label: isArabic ? 'متوسط CPU' : 'Avg CPU', value: `${avgUsage.cpu}%`, color: 'text-primary-500' },
                { label: isArabic ? 'متوسط RAM' : 'Avg RAM', value: `${avgUsage.ram}%`, color: 'text-accent-500' },
                { label: isArabic ? 'متوسط GPU' : 'Avg GPU', value: `${avgUsage.gpu}%`, color: 'text-purple-500' },
                { label: isArabic ? 'متوسط FPS' : 'Avg FPS', value: avgUsage.fps, color: 'text-green-500' },
              ].map((stat, i) => (
                <div key={i} className="card text-center">
                  <div className={`text-2xl font-black ${stat.color}`}>{stat.value}</div>
                  <div className="text-xs text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          )}

          <div className="card">
            <h3 className="text-lg font-bold text-white mb-4">
              {isArabic ? 'سجل الأداء' : 'Performance History'}
            </h3>
            {logs.length === 0 ? (
              <p className="text-gray-500 text-center py-8">
                {isArabic ? 'لا توجد بيانات أداء بعد. استخدم البرنامج لتسجيل الإحصائيات.' : 'No performance data yet. Use the app to record stats.'}
              </p>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="text-gray-400 border-b border-white/5">
                      <th className="text-left py-2 pr-4">{isArabic ? 'التاريخ' : 'Date'}</th>
                      <th className="text-right px-2">CPU</th>
                      <th className="text-right px-2">RAM</th>
                      <th className="text-right px-2">GPU</th>
                      <th className="text-right pl-2">FPS</th>
                    </tr>
                  </thead>
                  <tbody>
                    {logs.map((log) => (
                      <tr key={log.id} className="border-b border-white/5 text-white">
                        <td className="py-2 pr-4 text-gray-400">
                          {new Date(log.logged_at).toLocaleDateString(isArabic ? 'ar-EG' : 'en-US', {
                            month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit'
                          })}
                        </td>
                        <td className="text-right px-2">{log.cpu_usage ?? '-'}%</td>
                        <td className="text-right px-2">{log.ram_usage ?? '-'}%</td>
                        <td className="text-right px-2">{log.gpu_usage ?? '-'}%</td>
                        <td className="text-right pl-2">{log.fps_avg ?? '-'}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </DashboardLayout>
    </AuthGuard>
  )
}
