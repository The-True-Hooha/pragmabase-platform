'use client'

import { Nav } from '@/components/nav'
import { Footer } from '@/components/footer'
import { useState } from 'react'

const teamSizes = ['1–5 agents', '6–25 agents', '26–100 agents', '100+ agents']
const useCases = ['Financial agents', 'Research systems', 'Customer automation', 'Data pipelines', 'Agent marketplaces', 'Other']
const deployTargets = ['Cloud managed (Pragmabase)', 'Self-hosted (our infra)', 'Air-gapped / private cloud']

export default function EnterpriseContactPage() {
  const [form, setForm] = useState({
    name: '', company: '', email: '', teamSize: '', useCase: '', deploy: '', notes: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  function validate() {
    const e: Record<string, string> = {}
    if (!form.name.trim())    e.name    = 'Required'
    if (!form.company.trim()) e.company = 'Required'
    if (!form.email.includes('@')) e.email = 'Enter a valid email'
    if (!form.teamSize) e.teamSize = 'Please select'
    return e
  }

  function handleSubmit(ev: React.FormEvent) {
    ev.preventDefault()
    const e = validate()
    if (Object.keys(e).length) { setErrors(e); return }
    setSubmitted(true)
  }

  function field(key: keyof typeof form, label: string, placeholder: string, type = 'text') {
    return (
      <div>
        <label className="block font-mono text-[10px] font-bold uppercase tracking-widest mb-2" style={{ color: 'rgba(255,255,255,0.3)' }}>
          {label}{['name','company','email','teamSize'].includes(key) ? ' *' : ''}
        </label>
        <input type={type} value={form[key]} placeholder={placeholder}
          onChange={e => { setForm(f => ({ ...f, [key]: e.target.value })); setErrors(er => ({ ...er, [key]: '' })) }}
          className="w-full px-4 py-3.5 rounded-xl text-sm font-mono outline-none transition-all"
          style={{
            background: 'rgba(255,255,255,0.04)',
            border: errors[key] ? '1px solid rgba(251,146,60,0.6)' : '1px solid rgba(255,255,255,0.1)',
            color: '#EDECF4',
          }}
          onFocus={ev => (ev.currentTarget.style.border = '1px solid rgba(196,181,253,0.4)')}
          onBlur={ev => (ev.currentTarget.style.border = errors[key] ? '1px solid rgba(251,146,60,0.6)' : '1px solid rgba(255,255,255,0.1)')}
        />
        {errors[key] && <p className="mt-1 text-xs font-mono" style={{ color: '#FB923C' }}>{errors[key]}</p>}
      </div>
    )
  }

  return (
    <>
      <Nav />
      <main style={{ background: '#0A0A0F' }}>

        {/* Background */}
        <div className="fixed inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute inset-0 opacity-[0.025]" style={{
            backgroundImage: 'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }} />
          <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[600px] h-[500px]"
            style={{ background: 'radial-gradient(ellipse, rgba(124,58,237,0.1) 0%, transparent 65%)' }} />
        </div>

        <div className="relative max-w-[1280px] mx-auto px-6 md:px-8 py-20">
          <div className="flex justify-between text-xs uppercase tracking-widest mb-12 pb-4 font-mono"
            style={{ color: 'rgba(255,255,255,0.18)', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
            <a href="/enterprise" style={{ color: 'rgba(255,255,255,0.18)' }} className="hover:text-white/40 transition-colors">← Enterprise</a>
            <span>Talk to Sales</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">

            {/* Left — pitch */}
            <div>
              <div className="inline-block font-mono text-[10px] font-bold uppercase tracking-widest mb-5 px-2.5 py-1.5 rounded-full"
                style={{ background: 'rgba(196,181,253,0.1)', border: '1px solid rgba(196,181,253,0.2)', color: '#C4B5FD' }}>
                Enterprise Sales
              </div>
              <h1 className="font-display font-bold text-white leading-tight mb-5"
                style={{ fontSize: 'clamp(32px,4.5vw,56px)', letterSpacing: '-0.02em' }}>
                Let&apos;s build your<br />agent infrastructure<br />
                <span style={{ color: '#C4B5FD' }}>together.</span>
              </h1>
              <p className="text-base leading-relaxed mb-10" style={{ color: '#6B6B85', maxWidth: '420px' }}>
                Fill in the form and we&apos;ll get back to you within one business day.
                No hard sell — we&apos;ll help you figure out if Pragmabase is the right fit.
              </p>

              {/* What to expect */}
              <div className="space-y-5">
                {[
                  { color: '#A8FF3E', title: 'Architecture review', desc: 'We map your use case to the right deployment topology — managed, self-hosted, or air-gapped.' },
                  { color: '#C4B5FD', title: 'Custom guardrail design', desc: 'Our team helps you encode your compliance rules as Soroban smart contracts.' },
                  { color: '#818CF8', title: 'Migration support', desc: 'If you\'re moving from another platform, we provide a structured migration plan.' },
                  { color: '#F59E0B', title: 'Dedicated onboarding', desc: 'Named support engineer for the first 30 days. We\'re on-call while you get up and running.' },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-lg shrink-0 flex items-center justify-center mt-0.5"
                      style={{ background: item.color + '12', border: `1px solid ${item.color}25` }}>
                      <div className="w-1.5 h-1.5 rounded-full" style={{ background: item.color }} />
                    </div>
                    <div>
                      <p className="font-bold text-sm mb-0.5" style={{ color: '#EDECF4' }}>{item.title}</p>
                      <p className="text-sm" style={{ color: '#6B6B85' }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Trust signals */}
              <div className="mt-10 pt-8 flex flex-wrap gap-4" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                {['Response within 1 business day', 'No lock-in contracts', 'SOC 2 in progress'].map((t) => (
                  <div key={t} className="flex items-center gap-2 text-xs font-mono" style={{ color: 'rgba(255,255,255,0.25)' }}>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M2 6l3 3 5-5.5" stroke="#A8FF3E" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    {t}
                  </div>
                ))}
              </div>
            </div>

            {/* Right — form */}
            <div>
              {submitted ? (
                <div className="rounded-2xl p-12 text-center"
                  style={{ background: 'rgba(168,255,62,0.05)', border: '1px solid rgba(168,255,62,0.2)' }}>
                  <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-5"
                    style={{ background: 'rgba(168,255,62,0.12)' }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M4 12l5.5 5.5L20 7" stroke="#A8FF3E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <h2 className="font-display font-bold text-2xl mb-3" style={{ color: '#EDECF4' }}>We&apos;ll be in touch.</h2>
                  <p className="text-sm leading-relaxed mb-6" style={{ color: '#6B6B85' }}>
                    Thanks, <span style={{ color: '#EDECF4' }}>{form.name}</span>. Someone from the team will reach out to{' '}
                    <span style={{ color: '#A8FF3E' }}>{form.email}</span> within one business day.
                  </p>
                  <a href="/enterprise"
                    className="inline-block font-bold text-sm px-6 py-3 rounded-xl transition-all"
                    style={{ background: 'rgba(168,255,62,0.12)', color: '#A8FF3E', border: '1px solid rgba(168,255,62,0.25)' }}>
                    ← Back to Enterprise
                  </a>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate
                  className="rounded-2xl p-8 space-y-5"
                  style={{ background: '#14141F', border: '1px solid rgba(255,255,255,0.07)' }}>

                  <div className="grid sm:grid-cols-2 gap-5">
                    {field('name', 'Name', 'David Ogar')}
                    {field('company', 'Company', 'Acme Corp')}
                  </div>
                  {field('email', 'Work email', 'you@company.com', 'email')}

                  {/* Team size */}
                  <div>
                    <label className="block font-mono text-[10px] font-bold uppercase tracking-widest mb-2" style={{ color: 'rgba(255,255,255,0.3)' }}>
                      Agent fleet size *
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {teamSizes.map((size) => (
                        <button key={size} type="button"
                          onClick={() => { setForm(f => ({ ...f, teamSize: size })); setErrors(e => ({ ...e, teamSize: '' })) }}
                          className="px-3 py-2.5 rounded-xl text-sm font-mono text-left transition-all"
                          style={{
                            background: form.teamSize === size ? 'rgba(196,181,253,0.12)' : 'rgba(255,255,255,0.04)',
                            border: form.teamSize === size ? '1px solid rgba(196,181,253,0.4)' : '1px solid rgba(255,255,255,0.08)',
                            color: form.teamSize === size ? '#C4B5FD' : '#6B6B85',
                          }}>
                          {size}
                        </button>
                      ))}
                    </div>
                    {errors.teamSize && <p className="mt-1 text-xs font-mono" style={{ color: '#FB923C' }}>{errors.teamSize}</p>}
                  </div>

                  {/* Use case */}
                  <div>
                    <label className="block font-mono text-[10px] font-bold uppercase tracking-widest mb-2" style={{ color: 'rgba(255,255,255,0.3)' }}>
                      Primary use case
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {useCases.map((uc) => (
                        <button key={uc} type="button"
                          onClick={() => setForm(f => ({ ...f, useCase: uc }))}
                          className="px-3 py-1.5 rounded-full text-xs font-mono transition-all"
                          style={{
                            background: form.useCase === uc ? 'rgba(168,255,62,0.12)' : 'rgba(255,255,255,0.04)',
                            border: form.useCase === uc ? '1px solid rgba(168,255,62,0.35)' : '1px solid rgba(255,255,255,0.08)',
                            color: form.useCase === uc ? '#A8FF3E' : '#6B6B85',
                          }}>
                          {uc}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Deploy target */}
                  <div>
                    <label className="block font-mono text-[10px] font-bold uppercase tracking-widest mb-2" style={{ color: 'rgba(255,255,255,0.3)' }}>
                      Deployment preference
                    </label>
                    <div className="space-y-2">
                      {deployTargets.map((dt) => (
                        <button key={dt} type="button"
                          onClick={() => setForm(f => ({ ...f, deploy: dt }))}
                          className="w-full px-4 py-3 rounded-xl text-sm font-mono text-left transition-all"
                          style={{
                            background: form.deploy === dt ? 'rgba(129,140,248,0.1)' : 'rgba(255,255,255,0.04)',
                            border: form.deploy === dt ? '1px solid rgba(129,140,248,0.35)' : '1px solid rgba(255,255,255,0.08)',
                            color: form.deploy === dt ? '#818CF8' : '#6B6B85',
                          }}>
                          {dt}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Notes */}
                  <div>
                    <label className="block font-mono text-[10px] font-bold uppercase tracking-widest mb-2" style={{ color: 'rgba(255,255,255,0.3)' }}>
                      Anything else?
                    </label>
                    <textarea value={form.notes} rows={3}
                      placeholder="Compliance requirements, current stack, timeline..."
                      onChange={e => setForm(f => ({ ...f, notes: e.target.value }))}
                      className="w-full px-4 py-3.5 rounded-xl text-sm font-mono outline-none transition-all resize-none"
                      style={{
                        background: 'rgba(255,255,255,0.04)',
                        border: '1px solid rgba(255,255,255,0.1)',
                        color: '#EDECF4',
                      }}
                      onFocus={e => (e.currentTarget.style.border = '1px solid rgba(196,181,253,0.4)')}
                      onBlur={e => (e.currentTarget.style.border = '1px solid rgba(255,255,255,0.1)')}
                    />
                  </div>

                  <button type="submit"
                    className="w-full font-bold text-base py-4 rounded-xl transition-all"
                    style={{ background: '#A8FF3E', color: '#0A0A0F', boxShadow: '0 8px 32px rgba(168,255,62,0.2)' }}
                    onMouseEnter={e => ((e.currentTarget as HTMLElement).style.background = '#BFFF66')}
                    onMouseLeave={e => ((e.currentTarget as HTMLElement).style.background = '#A8FF3E')}
                  >
                    Send message →
                  </button>

                  <p className="text-[11px] font-mono text-center" style={{ color: 'rgba(255,255,255,0.15)' }}>
                    We respond within 1 business day. No spam, ever.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
