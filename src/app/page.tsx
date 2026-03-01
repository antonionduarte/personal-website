import Image from "next/image"
import Link from "next/link"
import { Suspense } from "react"
import { Badge } from "@/components/ui/badge"
import { Github, BookOpen, User, Cpu, ArrowRight } from "lucide-react"
import PageTransition from "@/components/page-transition"
import GitHubSection from "@/components/github/github-section"

const primarySkills = [
  "Distributed Systems", "Microservices", "Go", "Python", "PostgreSQL", "Network Security",
]

const secondarySkills = [
  "Rust", "JavaScript", "TypeScript", "React", "TailwindCSS",
  "MySQL", "SQLite", "Redis", "Node.js",
  "Docker", "Kubernetes", "AWS",
  "CI/CD", "Git", "RESTful APIs", "Java 🤢",
]

const projects = [
  {
    title: "Causal Consistency Simulator",
    description: "Enhanced a simulator to achieve realistic throughput and latency metrics for consistency model simulations.",
    tag: "Consistency Models",
    href: "https://github.com/antonionduarte/replication-dsim",
  },
  {
    title: "Go Protocol Runtime",
    description: "A work in progress runtime to implement and execute distributed algorithms in a pseudocode-like fashion.",
    tag: "Go",
    href: "https://github.com/antonionduarte/go-simple-protocol-runtime",
  },
]

export default function Home() {
  return (
    <PageTransition>
      <div className="py-10 space-y-10">
        {/* Hero Card */}
        <div className="rounded-2xl bg-gradient-to-br from-card via-card to-secondary/50 border border-border/60 p-8 md:p-10 shadow-lg shadow-black/20">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
            <Image
              src="/profile.jpeg"
              alt="António Duarte"
              width={130}
              height={130}
              className="rounded-2xl shadow-md shadow-black/30 flex-shrink-0"
              priority
            />
            <div className="text-center sm:text-left space-y-3">
              <h1 className="text-3xl md:text-4xl tracking-tight font-heading">António Duarte</h1>
              <p className="text-lg text-muted-foreground">Software Engineer @ Paddle | Distributed and Parallel Systems</p>
              <div className="flex flex-wrap justify-center sm:justify-start gap-2">
                <Badge variant="secondary" className="bg-primary/15 text-primary border-primary/20">Distributed Systems</Badge>
                <Badge variant="secondary" className="bg-primary/15 text-primary border-primary/20">Parallel Computing</Badge>
                <Badge variant="secondary" className="bg-primary/15 text-primary border-primary/20">Algorithm Design</Badge>
              </div>
              <div className="flex flex-wrap justify-center sm:justify-start gap-3 pt-1">
                <Link href="/blog" className="inline-flex items-center gap-1.5 text-sm bg-primary text-primary-foreground px-4 py-2 rounded-xl hover:bg-primary/90 active:scale-[0.97] transition-all duration-200">
                  <BookOpen className="h-4 w-4" /> Read My Blog
                </Link>
                <Link href="/cv" className="inline-flex items-center gap-1.5 text-sm border border-border px-4 py-2 rounded-xl hover:bg-card hover:border-primary/40 active:scale-[0.97] transition-all duration-200">
                  View My CV <ArrowRight className="h-3.5 w-3.5" />
                </Link>
                <Link href="https://github.com/antonionduarte" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm border border-border px-4 py-2 rounded-xl hover:bg-card hover:border-primary/40 active:scale-[0.97] transition-all duration-200">
                  <Github className="h-4 w-4" /> GitHub
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* About Me */}
          <div className="md:col-span-2 rounded-2xl bg-card border border-border/60 p-6 shadow-sm shadow-black/10 hover:shadow-md hover:shadow-black/15 hover:border-border transition-all duration-300">
            <h2 className="flex items-center gap-2 mb-4 text-sm font-semibold text-foreground" style={{ fontStyle: "normal" }}>
              <User className="w-4 h-4 text-primary" /> About Me
            </h2>
            <div className="space-y-3 text-muted-foreground leading-relaxed" style={{ fontStyle: "normal" }}>
              <p>Hey all, I&apos;m a 24-year-old Software Engineer specialized in Distributed &amp; Parallel Systems, that also dabbled very strongly in Algorithms and Programming Language Design.</p>
              <p>I tell this story in interviews and usually people find it funny: originally, when I was 6, I watched Indiana Jones and decided I wanted to be an Archaeologist. Then, when I was 11, I realized that most Archaeologists don&apos;t get to shoot nazis and explore ancient ruins while wearing cool hats. When I realized, however, that with the right mods I could do all that in Minecraft, I decided to become a Software Engineer instead. And here we are.</p>
            </div>
          </div>

          {/* Skills */}
          <div className="rounded-2xl bg-card border border-border/60 p-6 shadow-sm shadow-black/10 hover:shadow-md hover:shadow-black/15 hover:border-border transition-all duration-300">
            <h2 className="flex items-center gap-2 mb-4 text-sm font-semibold text-foreground" style={{ fontStyle: "normal" }}>
              <Cpu className="w-4 h-4 text-primary" /> Skills
            </h2>
            <div className="flex flex-wrap gap-1.5">
              {primarySkills.map((skill) => (
                <Badge key={skill} variant="secondary" className="text-sm bg-primary/15 text-primary border-primary/20">{skill}</Badge>
              ))}
            </div>
            <div className="flex flex-wrap gap-1.5 mt-2">
              {secondarySkills.map((skill) => (
                <Badge key={skill} variant="secondary" className="text-xs">{skill}</Badge>
              ))}
            </div>
          </div>

          {/* Blog Teaser — full width row */}
          <Link href="/blog" className="group md:col-span-3 rounded-2xl bg-card border border-border/60 p-6 shadow-sm shadow-black/10 hover:shadow-md hover:shadow-black/15 hover:border-primary/30 active:scale-[0.99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background transition-all duration-200 block">
            <div className="flex items-center justify-between gap-4" style={{ fontStyle: "normal" }}>
              <div className="flex items-center gap-4">
                <BookOpen className="w-5 h-5 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-semibold group-hover:text-primary transition-colors duration-300">Coming Soon...</h3>
                  <p className="text-sm text-muted-foreground mt-0.5">When I eventually have a thought worth writing, I shall do it, but for now, I&apos;ll remain in silence.</p>
                </div>
              </div>
              <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all duration-300 flex-shrink-0" />
            </div>
          </Link>

        </div>

        {/* Projects — separate 2-col grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {projects.map((project) => (
            <Link key={project.title} href={project.href} target="_blank" rel="noopener noreferrer" className="group rounded-2xl bg-card border border-border/60 p-6 shadow-sm shadow-black/10 hover:shadow-md hover:shadow-black/15 hover:border-primary/30 active:scale-[0.99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background transition-all duration-200 flex flex-col">
              <h3 className="font-semibold group-hover:text-primary transition-colors duration-300 mb-2" style={{ fontStyle: "normal" }}>{project.title}</h3>
              <p className="text-sm text-muted-foreground flex-grow" style={{ fontStyle: "normal" }}>{project.description}</p>
              <div className="flex items-center gap-2 mt-4 text-xs text-muted-foreground group-hover:text-primary transition-colors duration-300" style={{ fontStyle: "normal" }}>
                <Github className="h-3.5 w-3.5" />
                <span>{project.tag}</span>
              </div>
            </Link>
          ))}
        </div>

        {/* GitHub Activity */}
        <Suspense fallback={<GitHubSkeleton />}>
          <GitHubSection />
        </Suspense>
      </div>
    </PageTransition>
  )
}

function GitHubSkeleton() {
  return (
    <div className="space-y-5 animate-pulse">
      {/* Stats row */}
      <div className="rounded-2xl bg-card border border-border/60 p-5">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-0 md:divide-x md:divide-border/60">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="flex flex-col items-center gap-2 px-3">
              <div className="h-6 w-12 rounded bg-muted" />
              <div className="h-3 w-20 rounded bg-muted/60" />
            </div>
          ))}
        </div>
      </div>

      {/* Language breakdown */}
      <div className="rounded-2xl bg-card border border-border/60 p-6">
        <div className="h-4 w-20 rounded bg-muted mb-4" />
        <div className="flex h-3 rounded-full overflow-hidden mb-5 gap-px">
          {[35, 25, 15, 10, 8, 7].map((w, i) => (
            <div key={i} className="bg-muted" style={{ width: `${w}%` }} />
          ))}
        </div>
        <div className="grid grid-cols-2 gap-x-6 gap-y-2">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-muted flex-shrink-0" />
              <div className="h-3 w-16 rounded bg-muted/60" />
              <div className="h-3 w-8 rounded bg-muted/40 ml-auto" />
            </div>
          ))}
        </div>
      </div>

      {/* Contribution trend chart */}
      <div className="rounded-2xl bg-card border border-border/60 p-6">
        <div className="h-4 w-36 rounded bg-muted mb-4" />
        <div className="w-full rounded bg-muted/30" style={{ aspectRatio: "3 / 1" }} />
      </div>

      {/* Contribution heatmap */}
      <div className="rounded-2xl bg-card border border-border/60 p-6">
        <div className="h-4 w-24 rounded bg-muted mb-4" />
        <div className="h-[114px] w-full rounded bg-muted/30" />
      </div>
    </div>
  )
}
