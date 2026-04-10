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
    title: `${post.title} — Pragmabase Blog`,
    description: post.excerpt,
  }
}

const categoryColors: Record<string, string> = {
  Engineering: '#A8FF3E',
  Research: '#C4B5FD',
  Protocol: '#818CF8',
  Product: '#F59E0B',
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) notFound()

  const catColor = categoryColors[post.category] ?? '#C4B5FD'

  return (
    <>
      <Nav />
      <main style={{ background: '#0A0A0F' }}>

        {/* Header */}
        <section className="relative py-20 overflow-hidden" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{
            backgroundImage: 'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }} />
          <div className="absolute top-0 left-1/3 w-[500px] h-[400px] pointer-events-none"
            style={{ background: 'radial-gradient(ellipse, rgba(124,58,237,0.1) 0%, transparent 65%)' }} />

          <div className="relative max-w-[800px] mx-auto px-6 md:px-8">
            <div className="flex justify-between text-xs uppercase tracking-widest mb-12 pb-4 font-mono"
              style={{ color: 'rgba(255,255,255,0.18)', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
              <a href="/blog" className="transition-colors hover:text-white/50">← Blog</a>
              <span>Pragmabase</span>
            </div>

            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-full"
                style={{ background: catColor + '15', color: catColor, border: `1px solid ${catColor}30` }}>
                {post.category}
              </span>
              <span className="text-xs font-mono" style={{ color: 'rgba(255,255,255,0.2)' }}>{post.date}</span>
              {post.readTime && (
                <>
                  <span style={{ color: 'rgba(255,255,255,0.15)' }}>·</span>
                  <span className="text-xs font-mono" style={{ color: 'rgba(255,255,255,0.2)' }}>{post.readTime}</span>
                </>
              )}
            </div>

            <h1 className="font-display font-bold text-white leading-tight mb-8" style={{ fontSize: 'clamp(28px,4vw,52px)' }}>
              {post.title}
            </h1>

            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center font-display font-bold text-sm"
                style={{ background: 'rgba(124,58,237,0.2)', border: '1px solid rgba(124,58,237,0.3)', color: '#C4B5FD' }}>
                {post.author[0]}
              </div>
              <div>
                <p className="text-sm font-medium" style={{ color: '#EDECF4' }}>{post.author}</p>
                {post.role && (
                  <p className="text-xs font-mono" style={{ color: 'rgba(255,255,255,0.3)' }}>{post.role}</p>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Article body */}
        <section className="py-16" style={{ background: '#0F0F18' }}>
          <div className="max-w-[800px] mx-auto px-6 md:px-8">
            <article style={{ color: '#9E9EB8' }} className="prose-pragmabase">
              <MDXRemote source={post.content} />
            </article>

            {/* Author card */}
            <div className="mt-16 pt-10 flex items-start gap-5" style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center font-display font-bold text-lg shrink-0"
                style={{ background: 'rgba(124,58,237,0.2)', border: '1px solid rgba(124,58,237,0.3)', color: '#C4B5FD' }}>
                {post.author[0]}
              </div>
              <div>
                <p className="text-sm font-bold" style={{ color: '#EDECF4' }}>{post.author}</p>
                {post.role && <p className="text-xs mb-1" style={{ color: '#6B6B85' }}>{post.role}</p>}
                {post.handle && <p className="text-xs font-mono" style={{ color: '#A8FF3E' }}>{post.handle}</p>}
              </div>
            </div>

            <div className="mt-10">
              <a href="/blog" className="text-sm font-mono transition-colors hover:opacity-70" style={{ color: '#A8FF3E' }}>
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
