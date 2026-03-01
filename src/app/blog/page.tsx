import Link from "next/link"
import type { Metadata } from "next"
import PageTransition from "@/components/page-transition"

export const metadata: Metadata = {
  title: "Blog",
  description: "Blog posts by António Duarte on distributed systems, software engineering, and technology.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Blog — António Duarte",
    description: "Blog posts by António Duarte on distributed systems, software engineering, and technology.",
    url: "https://antonionduarte.dev/blog",
  },
}

const blogPosts = [
  { id: 1, title: "Coming Soon...", description: "Still have nothing to write about.", date: "2025-02-01", slug: "coming-soon" },
]

export default function BlogIndex() {
  return (
    <PageTransition>
      <div className="py-10 space-y-8">
        <h1 className="text-4xl tracking-tight">Blog</h1>
        <div className="space-y-4">
          {blogPosts.map((post) => (
            <Link key={post.id} href={`/blog/${post.slug}`} className="group block rounded-2xl bg-card border border-border/60 p-6 shadow-sm shadow-black/10 hover:shadow-md hover:shadow-black/15 hover:border-primary/30 active:scale-[0.99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background transition-all duration-200">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="font-semibold group-hover:text-primary transition-colors duration-300" style={{ fontStyle: "normal" }}>{post.title}</h2>
                  <p className="text-sm text-muted-foreground mt-1" style={{ fontStyle: "normal" }}>{post.description}</p>
                </div>
                <time className="text-xs tabular-nums text-muted-foreground flex-shrink-0 mt-1" style={{ fontStyle: "normal" }}>{post.date}</time>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </PageTransition>
  )
}
