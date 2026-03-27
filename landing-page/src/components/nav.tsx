'use client'

import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

const NAV_LINKS = [
  { label: 'Research', href: '/research' },
  { label: 'Pricing', href: '/#pricing' },
  { label: 'Docs', href: '/docs' },
  { label: 'Blog', href: '/blog' },
]

export function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className="sticky top-0 z-50 transition-all duration-300"
      style={
        scrolled
          ? {
              background: 'rgba(255,255,255,0.96)',
              borderBottom: '1px solid #E5E9F2',
              boxShadow: '0 1px 20px rgba(0,0,0,0.06)',
              backdropFilter: 'blur(12px)',
            }
          : {
              background: 'rgba(15,31,92,0.7)',
              borderBottom: '1px solid rgba(255,255,255,0.06)',
              backdropFilter: 'blur(16px)',
            }
      }
    >
      <div className="max-w-[1280px] mx-auto px-8 h-14 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2.5">
          <svg width="22" height="22" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <polygon
              points="10,1 18.5,6 18.5,14 10,19 1.5,14 1.5,6"
              fill={scrolled ? 'rgba(37,99,235,0.12)' : 'rgba(96,165,250,0.15)'}
            />
            <polygon
              points="10,1 18.5,6 18.5,14 10,19 1.5,14 1.5,6"
              stroke={scrolled ? '#2563EB' : '#93C5FD'}
              strokeWidth="1.2"
              fill="none"
            />
            <polygon
              points="10,5.5 14.5,8.5 14.5,12 10,15 5.5,12 5.5,8.5"
              fill={scrolled ? '#2563EB' : '#60A5FA'}
            />
          </svg>
          <span
            className={cn('font-display font-bold text-sm tracking-tight transition-colors duration-300',
              scrolled ? 'text-ink' : 'text-white'
            )}
          >
            aegis
          </span>
        </a>

        {/* Center links */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={cn(
                'text-sm transition-colors duration-200',
                scrolled ? 'text-muted hover:text-ink' : 'text-white/55 hover:text-white'
              )}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right */}
        <div className="flex items-center gap-4">
          <a
            href="https://github.com"
            className={cn(
              'hidden md:flex items-center gap-1.5 text-sm transition-colors duration-200',
              scrolled ? 'text-muted hover:text-ink' : 'text-white/45 hover:text-white/80'
            )}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
            ★ 2.4k
          </a>
          <button
            className={cn(
              'text-sm px-4 py-1.5 rounded-lg font-medium transition-all duration-200',
              scrolled
                ? 'border border-ink/20 text-ink hover:bg-bg-alt'
                : 'border border-white/20 text-white/85 bg-white/8 hover:bg-white/14'
            )}
          >
            Login ↓
          </button>
        </div>
      </div>
    </nav>
  )
}
