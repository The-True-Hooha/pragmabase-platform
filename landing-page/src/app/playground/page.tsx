'use client'

import { Nav } from '@/components/nav'
import { Footer } from '@/components/footer'
import { useEffect, useState } from 'react'

const LAUNCH_DATE = new Date('2025-04-15T00:00:00Z')

function useCountdown(target: Date) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0, done: false })

  useEffect(() => {
    function compute() {
      const diff = target.getTime() - Date.now()
      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, done: true })
        return
      }
      const days    = Math.floor(diff / (1000 * 60 * 60 * 24))
      const hours   = Math.floor((diff / (1000 * 60 * 60)) % 24)
      const minutes = Math.floor((diff / (1000 * 60)) % 60)
      const seconds = Math.floor((diff / 1000) % 60)
      setTimeLeft({ days, hours, minutes, seconds, done: false })
    }
    compute()
    const id = setInterval(compute, 1000)
    return () => clearInterval(id)
  }, [target])

  return timeLeft
}

function Digit({ value, label }: { value: number; label: string }) {
  const str = String(value).padStart(2, '0')
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="relative">
        <div className="font-display font-bold tabular-nums leading-none"
          style={{ fontSize: 'clamp(48px, 8vw, 96px)', color: '#EDECF4', letterSpacing: '-0.03em' }}>
          {str}
        </div>
        {/* Subtle scan line */}
        <div className="absolute inset-x-0 top-1/2 h-px pointer-events-none"
          style={{ background: 'rgba(168,255,62,0.08)' }} />
      </div>
      <span className="font-mono text-[10px] uppercase tracking-[0.2em]" style={{ color: 'rgba(255,255,255,0.2)' }}>
        {label}
      </span>
    </div>
  )
}

export default function PlaygroundPage() {
  const [email, setEmail]       = useState('')
  const [submitted, setSubmit]  = useState(false)
  const [error, setError]       = useState('')
  const { days, hours, minutes, seconds, done } = useCountdown(LAUNCH_DATE)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email.includes('@')) { setError('Enter a valid email.'); return }
    setSubmit(true)
    setError('')
  }

  return (
    <>
      <Nav />
      <main className="min-h-screen flex flex-col" style={{ background: '#0A0A0F' }}>

        {/* Background layers */}
        <div className="fixed inset-0 pointer-events-none" aria-hidden="true">
          {/* Grid */}
          <div className="absolute inset-0 opacity-[0.025]" style={{
            backgroundImage: 'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }} />
          {/* Purple core glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[700px]"
            style={{ background: 'radial-gradient(ellipse, rgba(124,58,237,0.16) 0%, transparent 65%)' }} />
          {/* Lime accent top-right */}
          <div className="absolute top-0 right-0 w-[400px] h-[350px]"
            style={{ background: 'radial-gradient(ellipse, rgba(168,255,62,0.06) 0%, transparent 65%)' }} />
          {/* Indigo bottom-left */}
          <div className="absolute bottom-0 left-0 w-[350px] h-[350px]"
            style={{ background: 'radial-gradient(ellipse, rgba(129,140,248,0.06) 0%, transparent 65%)' }} />
        </div>

        {/* Decorative orbit rings */}
        <div className="fixed inset-0 pointer-events-none flex items-center justify-center" aria-hidden="true">
          <svg className="absolute w-[700px] h-[700px] opacity-[0.04]" viewBox="0 0 700 700">
            <circle cx="350" cy="350" r="320" stroke="white" strokeWidth="1" strokeDasharray="8 12" fill="none"/>
            <circle cx="350" cy="350" r="240" stroke="white" strokeWidth="0.75" fill="none"/>
            <circle cx="350" cy="350" r="160" stroke="white" strokeWidth="0.5" strokeDasharray="4 8" fill="none"/>
          </svg>
        </div>

        {/* Main content */}
        <div className="relative flex-1 flex flex-col items-center justify-center px-6 py-20 text-center">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 font-mono text-[10px] font-bold uppercase tracking-widest mb-8 px-3 py-2 rounded-full"
            style={{ background: 'rgba(168,255,62,0.08)', border: '1px solid rgba(168,255,62,0.25)', color: '#A8FF3E' }}>
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: '#A8FF3E' }} />
            Launching April 15, 2025
          </div>

          {/* Headline */}
          <h1 className="font-display font-bold text-white leading-[1.02] tracking-tight mb-5"
            style={{ fontSize: 'clamp(36px,7vw,88px)' }}>
            The Playground<br />
            <span style={{ color: '#C4B5FD' }}>is almost live.</span>
          </h1>

          <p className="text-base md:text-lg leading-relaxed max-w-lg mb-14" style={{ color: '#6B6B85' }}>
            Simulate agentic transactions on Stellar testnet, test x402 pay-per-action flows,
            and validate Soroban guardrails — before your agents touch real funds.
          </p>

          {/* Countdown */}
          {!done ? (
            <div className="flex items-end gap-6 md:gap-10 mb-14">
              <Digit value={days}    label="Days" />
              <span className="font-display font-bold mb-8 md:mb-10" style={{ fontSize: 'clamp(28px,5vw,64px)', color: 'rgba(255,255,255,0.15)' }}>:</span>
              <Digit value={hours}   label="Hours" />
              <span className="font-display font-bold mb-8 md:mb-10" style={{ fontSize: 'clamp(28px,5vw,64px)', color: 'rgba(255,255,255,0.15)' }}>:</span>
              <Digit value={minutes} label="Minutes" />
              <span className="font-display font-bold mb-8 md:mb-10" style={{ fontSize: 'clamp(28px,5vw,64px)', color: 'rgba(255,255,255,0.15)' }}>:</span>
              <Digit value={seconds} label="Seconds" />
            </div>
          ) : (
            <div className="mb-14 font-display font-bold text-4xl" style={{ color: '#A8FF3E' }}>
              🚀 The Playground is live!
            </div>
          )}

          {/* Waitlist form */}
          {!submitted ? (
            <form onSubmit={handleSubmit} className="w-full max-w-md">
              <p className="font-mono text-[10px] font-bold uppercase tracking-widest mb-4" style={{ color: 'rgba(255,255,255,0.2)' }}>
                Join the early access waitlist
              </p>
              <div className="flex flex-col sm:flex-row gap-2.5">
                <input
                  type="email"
                  value={email}
                  onChange={e => { setEmail(e.target.value); setError('') }}
                  placeholder="your@email.com"
                  className="flex-1 px-4 py-3.5 rounded-xl text-sm font-mono outline-none transition-all"
                  style={{
                    background: 'rgba(255,255,255,0.05)',
                    border: error ? '1px solid rgba(251,146,60,0.6)' : '1px solid rgba(255,255,255,0.1)',
                    color: '#EDECF4',
                  }}
                  onFocus={e => (e.currentTarget.style.border = '1px solid rgba(168,255,62,0.4)')}
                  onBlur={e => (e.currentTarget.style.border = error ? '1px solid rgba(251,146,60,0.6)' : '1px solid rgba(255,255,255,0.1)')}
                />
                <button type="submit"
                  className="px-6 py-3.5 rounded-xl font-bold text-sm transition-all shrink-0"
                  style={{ background: '#A8FF3E', color: '#0A0A0F' }}
                  onMouseEnter={e => ((e.currentTarget as HTMLElement).style.background = '#BFFF66')}
                  onMouseLeave={e => ((e.currentTarget as HTMLElement).style.background = '#A8FF3E')}
                >
                  Notify me →
                </button>
              </div>
              {error && (
                <p className="mt-2 text-xs font-mono text-left" style={{ color: '#FB923C' }}>{error}</p>
              )}
              <p className="mt-3 text-[11px] font-mono text-left" style={{ color: 'rgba(255,255,255,0.15)' }}>
                No spam. We&apos;ll only email when the playground goes live.
              </p>
            </form>
          ) : (
            <div className="w-full max-w-md rounded-2xl p-6 text-center"
              style={{ background: 'rgba(168,255,62,0.06)', border: '1px solid rgba(168,255,62,0.25)' }}>
              <div className="w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-3"
                style={{ background: 'rgba(168,255,62,0.15)' }}>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M3 9l4.5 4.5 7.5-8" stroke="#A8FF3E" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <p className="font-bold text-sm mb-1" style={{ color: '#EDECF4' }}>You&apos;re on the list.</p>
              <p className="text-xs" style={{ color: '#6B6B85' }}>We&apos;ll email <span style={{ color: '#A8FF3E' }}>{email}</span> when the playground opens.</p>
            </div>
          )}

          {/* What to expect */}
          <div className="mt-20 w-full max-w-3xl">
            <p className="font-mono text-[10px] font-bold uppercase tracking-widest mb-8" style={{ color: 'rgba(255,255,255,0.15)' }}>
              What you&apos;ll be able to do
            </p>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                {
                  color: '#A8FF3E',
                  title: 'Simulate transactions',
                  desc: 'Run agent payment flows on Stellar testnet. Test x402 pay-per-action without real XLM.',
                  icon: (
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M3.5 10h13M10 3.5l6.5 6.5-6.5 6.5" stroke="#A8FF3E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  ),
                },
                {
                  color: '#C4B5FD',
                  title: 'Test Roku live',
                  desc: 'Spawn the default agent, give it a task and a budget, watch it reason and transact.',
                  icon: (
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <circle cx="10" cy="10" r="7.5" stroke="#C4B5FD" strokeWidth="1.4"/>
                      <circle cx="10" cy="10" r="3" stroke="#C4B5FD" strokeWidth="1.4" opacity="0.5"/>
                      <circle cx="10" cy="10" r="1" fill="#C4B5FD"/>
                    </svg>
                  ),
                },
                {
                  color: '#FB923C',
                  title: 'Validate guardrails',
                  desc: 'Trigger failure scenarios, see how Soroban guardrails respond, inspect the audit trail.',
                  icon: (
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M10 2L2.5 17.5h15L10 2z" stroke="#FB923C" strokeWidth="1.4" strokeLinejoin="round"/>
                      <path d="M10 8v4.5" stroke="#FB923C" strokeWidth="1.4" strokeLinecap="round"/>
                      <circle cx="10" cy="14.5" r="0.9" fill="#FB923C"/>
                    </svg>
                  ),
                },
              ].map((item) => (
                <div key={item.title} className="rounded-2xl p-5 text-left"
                  style={{ background: '#14141F', border: `1px solid ${item.color}18` }}>
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center mb-4"
                    style={{ background: item.color + '12' }}>
                    {item.icon}
                  </div>
                  <p className="font-bold text-sm mb-1.5" style={{ color: '#EDECF4' }}>{item.title}</p>
                  <p className="text-xs leading-relaxed" style={{ color: '#6B6B85' }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Stellar testnet note */}
          <div className="mt-10 flex items-center gap-2 font-mono text-xs" style={{ color: 'rgba(255,255,255,0.18)' }}>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <circle cx="6" cy="6" r="5" stroke="currentColor" strokeWidth="1"/>
              <path d="M6 4v2.5l1.5 1.5" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
            </svg>
            Runs on Stellar testnet · No real funds required · Free for early access users
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
