import { notFound } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

// TODO: make this import data from a CMS
const blogPosts = {
  "coming-soon": {
    title: "Coming Soon...",
    date: "2025-02-01",
    content: "Why does every software engineer want to have a blog? Sigh...",
  },
}

export default async function BlogPost({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPosts[slug as keyof typeof blogPosts]

  if (!post) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl">{post.title}</CardTitle>
          <p className="text-sm text-muted-foreground">{post.date}</p>
        </CardHeader>
        <CardContent>
          <div className="prose dark:prose-invert max-w-none">{post.content}</div>
        </CardContent>
      </Card>
    </div>
  )
}