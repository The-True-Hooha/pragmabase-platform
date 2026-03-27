import { Nav } from '@/components/nav'
import { Footer } from '@/components/footer'
import { getAllPosts } from '@/lib/blog'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog — Aegis',
  description: 'Thoughts on agent evaluation, reliability engineering, and the future of AI in production.',
}

const categoryColors: Record<string, string> = {
  Engineering: '#2563EB',
  Research: '#7C3AED',
  Infrastructure: '#059669',
  Product: '#D97706',
  Security: '#DC2626',
}

const categories = ['All', 'Engineering', 'Research', 'Infrastructure', 'Product', 'Security']

export default function BlogPage() {
  const posts = getAllPosts()
  const [featured, ...rest] = posts

  return (
    <>
      <Nav />
      <main>
        {/* Header */}
        <section
          className="relative py-20 overflow-hidden"
          style={{ background: 'linear-gradient(160deg, #0F1F5C 0%, #1740A6 45%, #2563EB 100%)' }}
        >
          <svg className="absolute inset-0 w-full h-full opacity-[0.12]" aria-hidden="true">
            <defs>
              <pattern id="blog-grid" x="0" y="0" width="48" height="48" patternUnits="userSpaceOnUse">
                <path d="M 48 0 L 0 0 0 48" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#blog-grid)" />
          </svg>

          <div className="relative max-w-[1280px] mx-auto px-8">
            <div className="flex justify-between text-xs uppercase tracking-widest mb-10 pb-4 font-mono"
              style={{ color: 'rgba(255,255,255,0.3)', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
              <span>BLOG</span>
              <span>AEGIS</span>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1
                  className="font-display font-extrabold text-white leading-tight mb-4"
                  style={{ fontSize: 'clamp(32px, 4.5vw, 60px)' }}
                >
                  Thinking about agents<br />in production.
                </h1>
                <p className="text-base mb-6" style={{ color: 'rgba(255,255,255,0.55)', maxWidth: '440px' }}>
                  Engineering deep dives, research findings, and product thinking from
                  the team building agent reliability infrastructure.
                </p>
                <div className="flex gap-6">
                  {[
                    { val: `${posts.length}`, lbl: 'Articles' },
                    { val: '4', lbl: 'Authors' },
                    { val: 'Weekly', lbl: 'Cadence' },
                  ].map((s) => (
                    <div key={s.lbl}>
                      <div className="font-mono font-bold text-xl text-white">{s.val}</div>
                      <div className="text-xs font-mono uppercase tracking-wider" style={{ color: 'rgba(255,255,255,0.35)' }}>{s.lbl}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="hidden lg:flex items-center justify-center">
                <BlogIllustration />
              </div>
            </div>
          </div>

          <div aria-hidden="true" style={{ lineHeight: 0, marginTop: '48px' }}>
            <svg viewBox="0 0 1440 56" preserveAspectRatio="none" className="w-full block" style={{ height: '56px' }}>
              <path d="M0,28 C360,56 720,0 1080,28 C1260,42 1380,14 1440,28 L1440,56 L0,56 Z" fill="#F4F7FF" />
            </svg>
          </div>
        </section>

        {/* Content */}
        <section className="py-20 bg-bg-alt">
          <div className="max-w-[1280px] mx-auto px-8">
            {/* Category filter */}
            <div className="flex flex-wrap gap-2 mb-12">
              {categories.map((cat) => (
                <span
                  key={cat}
                  className="text-xs font-mono px-4 py-2 rounded-full border cursor-default"
                  style={
                    cat === 'All'
                      ? { background: '#2563EB', color: '#fff', border: '1px solid #2563EB' }
                      : { background: '#fff', color: '#6B7280', border: '1px solid #E5E9F2' }
                  }
                >
                  {cat}
                </span>
              ))}
            </div>

            {posts.length === 0 ? (
              <div className="border border-border rounded-2xl bg-white p-16 text-center">
                <p className="text-muted font-mono text-sm">No posts yet. Drop an <code>.mdx</code> file in <code>content/blog/</code> to get started.</p>
              </div>
            ) : (
              <>
                {/* Featured post */}
                {featured && (
                  <a
                    href={`/blog/${featured.slug}`}
                    className="block border border-border rounded-2xl overflow-hidden bg-white mb-8 hover:border-accent transition-colors group"
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr]">
                      {/* Visual */}
                      <div
                        className="min-h-[200px] lg:min-h-full relative overflow-hidden"
                        style={{ background: 'linear-gradient(145deg, #0F1F5C, #2563EB)' }}
                      >
                        <svg className="absolute inset-0 w-full h-full opacity-20" aria-hidden="true">
                          <defs>
                            <pattern id="feat-grid" x="0" y="0" width="32" height="32" patternUnits="userSpaceOnUse">
                              <path d="M 32 0 L 0 0 0 32" fill="none" stroke="white" strokeWidth="0.5" />
                            </pattern>
                          </defs>
                          <rect width="100%" height="100%" fill="url(#feat-grid)" />
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span
                            className="font-mono text-xs uppercase tracking-widest px-3 py-1.5 rounded-full"
                            style={{ background: 'rgba(255,255,255,0.12)', color: 'rgba(255,255,255,0.6)', border: '1px solid rgba(255,255,255,0.15)' }}
                          >
                            Featured
                          </span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-10">
                        <div className="flex items-center gap-3 mb-5">
                          <span
                            className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded"
                            style={{
                              background: `${categoryColors[featured.category] ?? '#2563EB'}12`,
                              color: categoryColors[featured.category] ?? '#2563EB',
                            }}
                          >
                            {featured.category}
                          </span>
                          <span className="text-xs text-muted font-mono">{featured.date}</span>
                          {featured.readTime && (
                            <>
                              <span className="text-muted">·</span>
                              <span className="text-xs text-muted font-mono">{featured.readTime}</span>
                            </>
                          )}
                        </div>
                        <h2 className="font-display font-bold text-[22px] md:text-[26px] text-ink leading-tight mb-3 group-hover:text-accent transition-colors">
                          {featured.title}
                        </h2>
                        <p className="text-muted text-sm leading-relaxed mb-6">{featured.excerpt}</p>
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-xs font-semibold text-ink">{featured.author}</p>
                            {featured.role && <p className="text-xs text-muted">{featured.role}</p>}
                          </div>
                          <span className="bg-accent text-white text-sm font-medium px-5 py-2.5 rounded-xl">
                            Read →
                          </span>
                        </div>
                      </div>
                    </div>
                  </a>
                )}

                {/* Post grid */}
                {rest.length > 0 && (
                  <div className={`grid grid-cols-1 ${rest.length >= 2 ? 'md:grid-cols-2' : ''} ${rest.length >= 3 ? 'lg:grid-cols-3' : ''} gap-0 border border-border rounded-2xl overflow-hidden`}>
                    {rest.map((post, i) => (
                      <a
                        key={post.slug}
                        href={`/blog/${post.slug}`}
                        className={`block p-7 bg-white hover:bg-bg-alt transition-colors group
                          ${rest.length >= 3 && i % 3 !== 2 ? 'border-r border-border' : ''}
                          ${rest.length === 2 && i === 0 ? 'border-r border-border' : ''}
                          ${i < rest.length - (rest.length >= 3 ? rest.length % 3 || 3 : 1) ? 'border-b border-border' : ''}`}
                      >
                        <div className="flex items-center gap-2 mb-4">
                          <span
                            className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded"
                            style={{
                              background: `${categoryColors[post.category] ?? '#6B7280'}12`,
                              color: categoryColors[post.category] ?? '#6B7280',
                            }}
                          >
                            {post.category}
                          </span>
                          {post.readTime && <span className="text-[10px] text-muted font-mono">{post.readTime}</span>}
                        </div>
                        <h3 className="font-display font-bold text-base text-ink leading-snug mb-3 group-hover:text-accent transition-colors">
                          {post.title}
                        </h3>
                        <p className="text-xs text-muted leading-relaxed mb-5">{post.excerpt}</p>
                        <div className="border-t border-border pt-4 flex items-center justify-between">
                          <div>
                            <p className="text-[11px] font-medium text-ink">{post.author}</p>
                            <p className="text-[10px] text-muted font-mono">{post.date}</p>
                          </div>
                          <span className="text-xs text-accent font-mono opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                        </div>
                      </a>
                    ))}
                  </div>
                )}
              </>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

function BlogIllustration() {
  const articles = [
    { w: 200, cat: 'Engineering', color: '#2563EB' },
    { w: 160, cat: 'Research', color: '#7C3AED' },
    { w: 180, cat: 'Infrastructure', color: '#059669' },
  ]
  return (
    <svg width="300" height="200" viewBox="0 0 300 200" fill="none" aria-hidden="true">
      {articles.map((a, i) => (
        <g key={i}>
          <rect x="20" y={16 + i * 60} width={a.w + 60} height="50" rx="10"
            fill="rgba(255,255,255,0.07)" stroke="rgba(255,255,255,0.12)" strokeWidth="0.8" />
          <rect x="32" y={24 + i * 60} width="52" height="14" rx="4" fill={`${a.color}30`} />
          <text x="58" y={34 + i * 60} textAnchor="middle" fill={a.color} fontSize="7" fontFamily="JetBrains Mono">{a.cat}</text>
          <rect x="32" y={44 + i * 60} width={a.w - 10} height="6" rx="3" fill="rgba(255,255,255,0.25)" />
          <rect x="32" y={54 + i * 60} width={a.w - 40} height="5" rx="2.5" fill="rgba(255,255,255,0.12)" />
          <text x={a.w + 65} y={43 + i * 60} fill="rgba(255,255,255,0.3)" fontSize="14" fontFamily="DM Sans">→</text>
        </g>
      ))}
      {[{ x: 220, y: 155, label: 'Agents' }, { x: 260, y: 175, label: 'CI/CD' }, { x: 225, y: 190, label: 'Evals' }].map((tag) => (
        <g key={tag.label}>
          <rect x={tag.x - 20} y={tag.y - 10} width="50" height="18" rx="9"
            fill="rgba(255,255,255,0.07)" stroke="rgba(255,255,255,0.14)" strokeWidth="0.7" />
          <text x={tag.x + 5} y={tag.y + 3} textAnchor="middle" fill="rgba(255,255,255,0.45)" fontSize="7" fontFamily="JetBrains Mono">{tag.label}</text>
        </g>
      ))}
    </svg>
  )
}
