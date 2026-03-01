import { notFound } from "next/navigation"
import type { Metadata } from "next"
import PageTransition from "@/components/page-transition"

interface BlogPostPageProps {
  params: Promise<{ slug: string }>
}

const blogPosts: Record<string, { title: string; date: string; content: string; description: string; noindex?: boolean }> = {
  "coming-soon": {
    title: "Coming Soon...",
    date: "2025-02-01",
    content: "Why does every software engineer want to have a blog? Sigh...",
    description: "A placeholder post while I figure out what to write about.",
    noindex: true,
  },
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = blogPosts[slug]

  if (!post) {
    return { title: "Post Not Found" }
  }

  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      title: `${post.title} - António Duarte`,
      description: post.description,
      url: `https://antonionduarte.dev/blog/${slug}`,
      type: "article",
      publishedTime: post.date,
    },
    ...(post.noindex && {
      robots: { index: false, follow: true },
    }),
  }
}

export default async function BlogPost({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = blogPosts[slug as keyof typeof blogPosts]

  if (!post) { notFound() }

  return (
    <PageTransition>
      <article className="py-10 space-y-6">
        <header className="space-y-2">
          <h1 className="text-4xl tracking-tight">{post.title}</h1>
          <time className="text-sm text-muted-foreground" style={{ fontStyle: "normal" }}>{post.date}</time>
        </header>
        <div className="text-muted-foreground leading-relaxed rounded-2xl bg-card border border-border/60 p-6" style={{ fontStyle: "normal" }}>
          {post.content}
        </div>
      </article>
    </PageTransition>
  )
}
