import { useState, useEffect } from 'react'

export default function AboutPage() {
  const [isArabic, setIsArabic] = useState(false)

  useEffect(() => {
    setIsArabic(localStorage.getItem('lang') === 'ar')
  }, [])

  const content = isArabic
    ? {
        title: 'عن BaTo0oT Cleaner',
        desc: 'نبني مستقبل تحسين أداء الأجهزة',
        mission: 'مهمتنا',
        missionText: 'تقديم أداة مجانية وقوية لكل مستخدم لتحسين أداء جهازه بدون تعقيد. نؤمن أن جهازك يستحق أفضل أداء.',
        story: 'قصتنا',
        storyText: 'بدأنا كفريق من محترفي الألعاب وتقنية المعلومات، لاحظنا أن كل برامج التحسين الموجودة إما مدفوعة بشكل مبالغ فيه أو ضعيفة. قررنا بناء BaTo0oT Cleaner - الأداة التي كنا نتمنى وجودها.',
        values: 'قيمنا',
        valuesList: [
          { title: 'المجانية', desc: 'الأدوات الأساسية مجانية للجميع' },
          { title: 'الشفافية', desc: 'نوضح كل تعديل قبل تطبيقه' },
          { title: 'الأمان', desc: 'أعلى معايير الأمان والخصوصية' },
          { title: 'التميز', desc: 'نسعى للأفضل دائماً' },
        ],
        team: 'فريقنا',
        teamMembers: [
          { name: 'BaTo0oT', role: 'المؤسس والمطور الرئيسي' },
          { name: 'Team Alpha', role: 'فريق التطوير' },
          { name: 'Beta Testers', role: 'مجتمع المختبرين' },
        ],
      }
    : {
        title: 'About BaTo0oT Cleaner',
        desc: 'Building the future of system optimization',
        mission: 'Our Mission',
        missionText: 'To provide a powerful, free tool for everyone to optimize their system performance without complexity. Your device deserves the best performance.',
        story: 'Our Story',
        storyText: 'We started as a team of gaming and IT professionals. We noticed that existing optimization tools were either overpriced or underpowered. So we built BaTo0oT Cleaner - the tool we wished existed.',
        values: 'Our Values',
        valuesList: [
          { title: 'Free', desc: 'Core tools are free for everyone' },
          { title: 'Transparency', desc: 'Explain every change before applying' },
          { title: 'Security', desc: 'Highest security and privacy standards' },
          { title: 'Excellence', desc: 'Always striving for the best' },
        ],
        team: 'Our Team',
        teamMembers: [
          { name: 'BaTo0oT', role: 'Founder & Lead Developer' },
          { name: 'Team Alpha', role: 'Development Team' },
          { name: 'Beta Testers', role: 'Testing Community' },
        ],
      }

  return (
    <div className="pt-24">
      <section className="relative py-16 overflow-hidden bg-grid">
        <div className="hero-glow hero-glow-1" />
        <div className="hero-glow hero-glow-2" />
        <div className="max-w-4xl mx-auto px-4 text-center space-y-4 relative z-10">
          <h1 className="text-4xl sm:text-6xl font-black">
            <span className="gradient-text">{content.title}</span>
          </h1>
          <p className="text-xl text-gray-400">{content.desc}</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 space-y-16">
          <div className="glass rounded-3xl p-8 md:p-12">
            <h2 className="text-2xl font-bold text-white mb-4">{content.mission}</h2>
            <p className="text-gray-400 leading-relaxed text-lg">{content.missionText}</p>
          </div>

          <div className="glass rounded-3xl p-8 md:p-12">
            <h2 className="text-2xl font-bold text-white mb-4">{content.story}</h2>
            <p className="text-gray-400 leading-relaxed text-lg">{content.storyText}</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-6 text-center">{content.values}</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {content.valuesList.map((v, i) => (
                <div key={i} className="card text-center p-6">
                  <h3 className="text-white font-semibold mb-2">{v.title}</h3>
                  <p className="text-sm text-gray-400">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-2xl font-bold text-white mb-6">{content.team}</h2>
            <div className="grid sm:grid-cols-3 gap-4">
              {content.teamMembers.map((m, i) => (
                <div key={i} className="card p-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                    {m.name[0]}
                  </div>
                  <h3 className="text-white font-semibold">{m.name}</h3>
                  <p className="text-sm text-gray-400">{m.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
