import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabase'
import DashboardLayout from '@/components/dashboard/DashboardLayout'
import AuthGuard from '@/components/dashboard/AuthGuard'
import { useAuth } from '@/contexts/AuthContext'

export default function AdminDashboard() {
  const [isArabic, setIsArabic] = useState(false)
  const [subscriptions, setSubscriptions] = useState([])
  const [vodafoneNumber, setVodafoneNumber] = useState('01000000000')
  const [editingNumber, setEditingNumber] = useState(false)
  const [newNumber, setNewNumber] = useState('')
  const [tab, setTab] = useState('subscriptions')
  const { user } = useAuth()

  useEffect(() => {
    setIsArabic(localStorage.getItem('lang') === 'ar')
    fetchSubscriptions()
    fetchSettings()
  }, [])

  async function fetchSubscriptions() {
    const { data } = await supabase
      .from('subscriptions')
      .select('*, profiles(username, full_name)')
      .order('created_at', { ascending: false })
    if (data) setSubscriptions(data)
  }

  async function fetchSettings() {
    const { data } = await supabase
      .from('user_settings')
      .select('settings')
      .eq('user_id', user?.id)
      .single()
    if (data?.settings?.vodafone_number) {
      setVodafoneNumber(data.settings.vodafone_number)
    }
  }

  async function toggleSubscription(id, currentStatus) {
    const newStatus = currentStatus === 'active' ? 'canceled' : 'active'
    await supabase
      .from('subscriptions')
      .update({ status: newStatus, updated_at: new Date().toISOString() })
      .eq('id', id)
    fetchSubscriptions()
  }

  async function saveVodafoneNumber() {
    if (!newNumber.trim()) return
    await supabase
      .from('user_settings')
      .upsert({
        user_id: user?.id,
        settings: { vodafone_number: newNumber },
        updated_at: new Date().toISOString(),
      })
    setVodafoneNumber(newNumber)
    setEditingNumber(false)
    setNewNumber('')
  }

  return (
    <AuthGuard>
      <DashboardLayout>
        <div className="space-y-6">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-white">
              {isArabic ? 'لوحة التحكم - الإدارة' : 'Admin Dashboard'}
            </h1>
            <p className="text-gray-400 text-sm">
              {isArabic ? 'إدارة الاشتراكات والإعدادات' : 'Manage subscriptions and settings'}
            </p>
          </div>

          <div className="flex gap-2 border-b border-white/10 pb-2">
            {[
              { key: 'subscriptions', labelAr: 'الاشتراكات', labelEn: 'Subscriptions' },
              { key: 'vodafone', labelAr: 'فودافون كاش', labelEn: 'Vodafone Cash' },
            ].map((t) => (
              <button
                key={t.key}
                onClick={() => setTab(t.key)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                  tab === t.key
                    ? 'bg-primary-500/10 text-primary-500 border border-primary-500/20'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {isArabic ? t.labelAr : t.labelEn}
              </button>
            ))}
          </div>

          {tab === 'subscriptions' && (
            <div className="space-y-3">
              {subscriptions.length === 0 && (
                <p className="text-gray-500 text-center py-8">
                  {isArabic ? 'لا توجد اشتراكات بعد' : 'No subscriptions yet'}
                </p>
              )}
              {subscriptions.map((sub) => (
                <div key={sub.id} className="card flex items-center justify-between">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-white font-medium">
                        {sub.profiles?.full_name || sub.profiles?.username || sub.user_id.slice(0, 8)}
                      </span>
                      <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                        sub.plan === 'ultimate' ? 'bg-purple-500/10 text-purple-400 border border-purple-500/20'
                        : 'bg-primary-500/10 text-primary-400 border border-primary-500/20'
                      }`}>
                        {sub.plan}
                      </span>
                    </div>
                    <div className="text-xs text-gray-500">
                      {sub.current_period_start?.slice(0, 10)} → {sub.current_period_end?.slice(0, 10)}
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className={`text-xs font-medium ${
                      sub.status === 'active' ? 'text-green-400' : 'text-red-400'
                    }`}>
                      {isArabic ? (sub.status === 'active' ? 'نشط' : 'ملغي') : sub.status}
                    </span>
                    <button
                      onClick={() => toggleSubscription(sub.id, sub.status)}
                      className={`text-xs px-3 py-1.5 rounded-lg font-medium transition-all ${
                        sub.status === 'active'
                          ? 'bg-red-500/10 text-red-400 hover:bg-red-500/20 border border-red-500/20'
                          : 'bg-green-500/10 text-green-400 hover:bg-green-500/20 border border-green-500/20'
                      }`}
                    >
                      {isArabic ? (sub.status === 'active' ? 'إيقاف' : 'تفعيل') : (sub.status === 'active' ? 'Deactivate' : 'Activate')}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {tab === 'vodafone' && (
            <div className="card max-w-md">
              <h3 className="text-lg font-bold text-white mb-4">
                {isArabic ? 'رقم فودافون كاش للاشتراكات' : 'Vodafone Cash Number for Subscriptions'}
              </h3>
              {editingNumber ? (
                <div className="space-y-3">
                  <input
                    type="text"
                    value={newNumber}
                    onChange={(e) => setNewNumber(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-primary-500"
                    placeholder="010xxxxxxxx"
                    dir="ltr"
                  />
                  <div className="flex gap-2">
                    <button onClick={saveVodafoneNumber} className="btn-primary !py-2 !px-4 text-sm">
                      {isArabic ? 'حفظ' : 'Save'}
                    </button>
                    <button onClick={() => setEditingNumber(false)} className="btn-secondary !py-2 !px-4 text-sm">
                      {isArabic ? 'إلغاء' : 'Cancel'}
                    </button>
                  </div>
                </div>
              ) : (
                <div className="space-y-3">
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-center">
                    <span className="text-2xl font-bold text-white" dir="ltr">{vodafoneNumber}</span>
                  </div>
                  <button onClick={() => { setNewNumber(vodafoneNumber); setEditingNumber(true) }} className="btn-secondary !py-2 !px-4 text-sm">
                    {isArabic ? 'تعديل الرقم' : 'Edit Number'}
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </DashboardLayout>
    </AuthGuard>
  )
}
