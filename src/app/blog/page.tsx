import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

// TODO: this would typically come from a database or CMS
const blogPosts = [
  {
    id: 1,
    title: "Coming Soon...",
    description:
      "Still have nothing to write about.",
    date: "2025-02-01",
    slug: "coming-soon",
  },
   // Add more blog posts here
]

export default function BlogIndex() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">Blog</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post) => (
          <Card key={post.id}>
            <CardHeader>
              <CardTitle>
                <Link href={`/blog/${post.slug}`} className="hover:underline">
                  {post.title}
                </Link>
              </CardTitle>
              <CardDescription>{post.date}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{post.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

