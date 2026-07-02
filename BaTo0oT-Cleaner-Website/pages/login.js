import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { useAuth } from '@/contexts/AuthContext'

export default function LoginPage() {
  const [isArabic, setIsArabic] = useState(false)
  const [isSignUp, setIsSignUp] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')
  const { signIn, signUp, user } = useAuth()
  const router = useRouter()

  useEffect(() => {
    setIsArabic(localStorage.getItem('lang') === 'ar')
  }, [])

  useEffect(() => {
    if (user) router.replace('/dashboard')
  }, [user, router])

  async function handleSubmit(e) {
    e.preventDefault()
    setError('')
    setMessage('')

    if (isSignUp) {
      const { error } = await signUp(email, password)
      if (error) setError(error.message)
      else setMessage(isArabic ? 'تم إرسال رابط التأكيد إلى بريدك الإلكتروني' : 'Confirmation link sent to your email')
    } else {
      const { error } = await signIn(email, password)
      if (error) setError(error.message)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center pt-16 bg-[#0a0a0f]">
      <div className="hero-glow hero-glow-1" />
      <div className="hero-glow hero-glow-2" />
      <div className="relative z-10 w-full max-w-md mx-4">
        <div className="glass rounded-3xl p-8 space-y-6 border border-white/10">
          <div className="text-center space-y-2">
            <h1 className="text-3xl font-black gradient-text">
              {isArabic ? 'مرحباً بعودتك' : 'Welcome Back'}
            </h1>
            <p className="text-gray-400 text-sm">
              {isArabic
                ? (isSignUp ? 'أنشئ حساب جديد للبدء' : 'سجل دخولك للوصول إلى لوحة التحكم')
                : (isSignUp ? 'Create an account to get started' : 'Sign in to access your dashboard')}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm text-gray-400 mb-1">
                {isArabic ? 'البريد الإلكتروني' : 'Email'}
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-primary-500 transition-colors"
                placeholder="you@example.com"
                required
              />
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-1">
                {isArabic ? 'كلمة المرور' : 'Password'}
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-primary-500 transition-colors"
                placeholder="••••••••"
                required
                minLength={6}
              />
            </div>

            {error && (
              <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
                {error}
              </div>
            )}
            {message && (
              <div className="p-3 rounded-xl bg-green-500/10 border border-green-500/20 text-green-400 text-sm">
                {message}
              </div>
            )}

            <button type="submit" className="btn-primary w-full !py-3">
              {isArabic ? (isSignUp ? 'إنشاء حساب' : 'تسجيل دخول') : (isSignUp ? 'Create Account' : 'Sign In')}
            </button>
          </form>

          <div className="text-center">
            <button
              onClick={() => { setIsSignUp(!isSignUp); setError(''); setMessage('') }}
              className="text-sm text-primary-500 hover:text-primary-400 transition-colors"
            >
              {isArabic
                ? (isSignUp ? 'لديك حساب؟ سجل دخول' : 'ليس لديك حساب؟ اشترك')
                : (isSignUp ? 'Already have an account? Sign in' : "Don't have an account? Sign up")}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
