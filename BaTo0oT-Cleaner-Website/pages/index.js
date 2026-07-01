import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import Stats from '@/components/Stats'
import Pricing from '@/components/Pricing'

export default function Home() {
  const router = useRouter()

  useEffect(() => {
    const lang = localStorage.getItem('lang')
    if (!lang) {
      localStorage.setItem('lang', 'ar')
    }
  }, [])

  return (
    <>
      <Hero />
      <Stats />
      <Features />
      <Pricing />

      <section className="relative py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <div className="glass rounded-3xl p-12 space-y-6 border border-primary-500/20">
            <h2 className="text-3xl sm:text-4xl font-black">
              <span className="gradient-text">Ready to Supercharge Your System?</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Join 5M+ users worldwide. Download BaTo0oT Cleaner for free and experience
              the ultimate system optimization tool.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="https://github.com/Glory-marketing/BaTo0oT-Cleaner/releases/download/v3.0.0/BaTo0oT-Cleaner-v3.0-Windows.zip" className="btn-primary text-lg !px-10 !py-4 flex items-center gap-2">
                Download for Windows
              </a>
              <a href="https://github.com/Glory-marketing/BaTo0oT-Cleaner/releases/tag/v3.0.0" className="btn-secondary text-lg !px-10 !py-4">
                Download for macOS
              </a>
              <a href="https://github.com/Glory-marketing/BaTo0oT-Cleaner/releases/tag/v3.0.0" className="btn-secondary text-lg !px-10 !py-4">
                Download for Linux
              </a>
            </div>
            <p className="text-xs text-gray-500">
              Free version available. No credit card required.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
