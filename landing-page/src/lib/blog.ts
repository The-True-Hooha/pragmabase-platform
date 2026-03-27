import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const BLOG_DIR = path.join(process.cwd(), 'content/blog')

export interface PostMeta {
  slug: string
  title: string
  date: string
  author: string
  role?: string
  category: string
  excerpt: string
  readTime?: string
  handle?: string
}

export interface Post extends PostMeta {
  content: string
}

export function getAllPosts(): PostMeta[] {
  if (!fs.existsSync(BLOG_DIR)) return []

  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith('.mdx'))

  return files
    .map((filename) => {
      const slug = filename.replace(/\.mdx$/, '')
      const raw = fs.readFileSync(path.join(BLOG_DIR, filename), 'utf-8')
      const { data } = matter(raw)
      return {
        slug,
        title: data.title ?? 'Untitled',
        date: data.date ?? '',
        author: data.author ?? 'Aegis Team',
        role: data.role,
        category: data.category ?? 'Engineering',
        excerpt: data.excerpt ?? '',
        readTime: data.readTime,
        handle: data.handle,
      } satisfies PostMeta
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1))
}

export function getPost(slug: string): Post | null {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`)
  if (!fs.existsSync(filePath)) return null

  const raw = fs.readFileSync(filePath, 'utf-8')
  const { data, content } = matter(raw)

  return {
    slug,
    title: data.title ?? 'Untitled',
    date: data.date ?? '',
    author: data.author ?? 'Aegis Team',
    role: data.role,
    category: data.category ?? 'Engineering',
    excerpt: data.excerpt ?? '',
    readTime: data.readTime,
    handle: data.handle,
    content,
  }
}

export function getAllSlugs(): string[] {
  if (!fs.existsSync(BLOG_DIR)) return []
  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith('.mdx'))
    .map((f) => f.replace(/\.mdx$/, ''))
}
