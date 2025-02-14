import { notFound } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

// TODO: make this import data from a CMS
const blogPosts = {
  "coming-soon": {
    title: "Coming Soon...",
    date: "2025-02-01",
    content: "Why does every software engineer want to have a blog? Sigh...",
  },
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = blogPosts[params.slug as keyof typeof blogPosts]

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