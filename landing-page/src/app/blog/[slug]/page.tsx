import { notFound } from 'next/navigation'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { Nav } from '@/components/nav'
import { Footer } from '@/components/footer'
import { getPost, getAllSlugs } from '@/lib/blog'
import type { Metadata } from 'next'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) return {}
  return {
    title: `${post.title} — Aegis Blog`,
    description: post.excerpt,
  }
}

const categoryColors: Record<string, string> = {
  Engineering: '#2563EB',
  Research: '#7C3AED',
  Infrastructure: '#059669',
  Product: '#D97706',
  Security: '#DC2626',
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) notFound()

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
              <pattern id="post-grid" x="0" y="0" width="48" height="48" patternUnits="userSpaceOnUse">
                <path d="M 48 0 L 0 0 0 48" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#post-grid)" />
          </svg>

          <div className="relative max-w-[800px] mx-auto px-8">
            <div className="flex justify-between text-xs uppercase tracking-widest mb-10 pb-4 font-mono"
              style={{ color: 'rgba(255,255,255,0.3)', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
              <a href="/blog" className="hover:text-white/60 transition-colors">← Blog</a>
              <span>AEGIS</span>
            </div>

            {/* Category + meta */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span
                className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded"
                style={{
                  background: `${categoryColors[post.category] ?? '#2563EB'}25`,
                  color: categoryColors[post.category] ?? '#2563EB',
                  border: `1px solid ${categoryColors[post.category] ?? '#2563EB'}40`,
                }}
              >
                {post.category}
              </span>
              <span className="text-xs font-mono" style={{ color: 'rgba(255,255,255,0.4)' }}>{post.date}</span>
              {post.readTime && (
                <>
                  <span style={{ color: 'rgba(255,255,255,0.25)' }}>·</span>
                  <span className="text-xs font-mono" style={{ color: 'rgba(255,255,255,0.4)' }}>{post.readTime}</span>
                </>
              )}
            </div>

            <h1
              className="font-display font-extrabold text-white leading-tight mb-6"
              style={{ fontSize: 'clamp(28px, 4vw, 52px)' }}
            >
              {post.title}
            </h1>

            {/* Author */}
            <div className="flex items-center gap-3">
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center font-display font-bold text-sm text-white"
                style={{ background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.15)' }}
              >
                {post.author[0]}
              </div>
              <div>
                <p className="text-sm font-medium text-white">{post.author}</p>
                {post.role && (
                  <p className="text-xs font-mono" style={{ color: 'rgba(255,255,255,0.45)' }}>{post.role}</p>
                )}
              </div>
            </div>
          </div>

          <div aria-hidden="true" style={{ lineHeight: 0, marginTop: '48px' }}>
            <svg viewBox="0 0 1440 56" preserveAspectRatio="none" className="w-full block" style={{ height: '56px' }}>
              <path d="M0,28 C360,56 720,0 1080,28 C1260,42 1380,14 1440,28 L1440,56 L0,56 Z" fill="#F4F7FF" />
            </svg>
          </div>
        </section>

        {/* Article body */}
        <section className="py-16 bg-bg-alt">
          <div className="max-w-[800px] mx-auto px-8">
            <article className="prose-aegis">
              <MDXRemote source={post.content} />
            </article>

            {/* Author card */}
            <div className="mt-16 pt-10 border-t border-border flex items-start gap-5">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center font-display font-bold text-lg text-white shrink-0"
                style={{ background: 'linear-gradient(135deg, #1740A6, #3B82F6)' }}
              >
                {post.author[0]}
              </div>
              <div>
                <p className="text-sm font-semibold text-ink">{post.author}</p>
                {post.role && <p className="text-xs text-muted mb-1">{post.role}</p>}
                {post.handle && <p className="text-xs font-mono text-accent">{post.handle}</p>}
              </div>
            </div>

            {/* Back link */}
            <div className="mt-10">
              <a
                href="/blog"
                className="text-sm font-mono text-accent hover:underline"
              >
                ← Back to all posts
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
