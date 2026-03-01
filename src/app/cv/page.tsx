import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Mail, MapPin, Github, Briefcase, BookOpen, Presentation, FileText } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"
import ResumeCard from "@/components/resume-card"
import TechnicalSkills from "./technical-skills"
import PageTransition from "@/components/page-transition"

export const metadata: Metadata = {
  title: "CV",
  description: "Curriculum Vitae of António Duarte - Software Engineer specialized in Distributed Systems and Parallel Computing. Experience at Paddle, Aptoide, and NOVA Lincs.",
  alternates: { canonical: "/cv" },
  openGraph: {
    title: "CV - António Duarte, Software Engineer",
    description: "Curriculum Vitae of António Duarte - Software Engineer specialized in Distributed Systems and Parallel Computing.",
    url: "https://antonionduarte.dev/cv",
  },
}

export default function CVPage() {
  return (
    <PageTransition>
      <div className="py-10 space-y-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
          <Image src="/profile.jpeg" alt="António Duarte" width={130} height={130} className="rounded-2xl shadow-md shadow-black/30 flex-shrink-0" />
          <div className="space-y-2">
            <h1 className="text-4xl tracking-tight font-heading">Hi, I&apos;m António</h1>
            <p className="text-lg text-muted-foreground" style={{ fontStyle: "normal" }}>Software Engineer</p>
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 text-sm text-muted-foreground" style={{ fontStyle: "normal" }}>
              <span className="flex items-center gap-1.5"><Mail className="h-3.5 w-3.5" /> antonionpnduarte@gmail.com</span>
              <Link href="https://github.com/antonionduarte" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-primary transition-colors duration-300">
                <Github className="h-3.5 w-3.5" /> antonionduarte
              </Link>
              <span className="flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5" /> Lisbon, Portugal</span>
            </div>
          </div>
        </div>

        {/* Summary */}
        <div className="rounded-2xl bg-card border border-border/60 p-6 shadow-sm shadow-black/10">
          <h2 className="flex items-center gap-2 text-xl mb-4"><FileText className="h-5 w-5 text-primary" /> Summary</h2>
          <div className="space-y-3 text-muted-foreground leading-relaxed" style={{ fontStyle: "normal" }}>
            <p>24-year-old Software Engineer @ Paddle specialized in Distributed &amp; Parallel Systems, that also dabbled very strongly in Algorithms and Programming Language Design.</p>
            <p>Very interested in Distributed Systems (although I enjoy keeping myself updated in most areas related to CS, from Programming Languages to Machine Learning), and as such my career so far has been focused around Backend &amp; Data Engineering.</p>
          </div>
        </div>

        {/* Work Experience */}
        <div className="rounded-2xl bg-card border border-border/60 p-6 shadow-sm shadow-black/10">
          <h2 className="flex items-center gap-2 text-xl mb-2"><Briefcase className="h-5 w-5 text-primary" /> Work Experience</h2>
          <div className="divide-y divide-border/60" style={{ fontStyle: "normal" }}>
            <ResumeCard logoUrl="/paddle_logo.svg" altText="Paddle" title="Paddle" subtitle="Junior Software Engineer" period="Jan 2025 - Now"
              description={<ul className="ml-4 list-disc space-y-1"><li>Maintenance and Development of a Data Processing Pipeline in Python.</li><li>Distributed Service Deployment and Monitoring using Kubernetes and ElasticStack.</li></ul>} />
            <ResumeCard logoUrl="/aptoide_logo.svg" altText="Aptoide" title="Aptoide" subtitle="Backend Engineer" period="Dec 2023 - Dec 2024"
              description={<ul className="ml-4 list-disc space-y-1"><li>Development of Backend Services using Rust (actix-web) and Python (Django, Flask and FastAPI).</li><li>Distributed Deployment and Monitoring of Microservices using Docker, PostgreSQL, Redis and Elasticsearch.</li><li>Developed Aptoide&apos;s performance-critical Mobile Measurement Platform in Rust.</li></ul>} />
            <ResumeCard logoUrl="/gr_logo.svg" altText="Generation Resonance" title="Generation Resonance" subtitle="Department Head" period="May 2024 - Jan 2025"
              roles={[
                { title: "Department Head", period: "June 2024 - January 2025", description: <ul className="ml-4 list-disc space-y-1"><li>Planned and led the technical roadmap of the project.</li><li>Directed tech-related initiatives, articles, and coverage of technological developments.</li></ul> },
                { title: "Web Developer", period: "May 2024 - January 2025", description: <ul className="ml-4 list-disc space-y-1"><li>Developed the project&apos;s website, blog, and CMS system using Next.js, TypeScript, and Vercel.</li></ul> },
              ]} />
            <ResumeCard logoUrl="/nova_lincs.png" altText="NOVA Lincs" title="NOVA Lincs" subtitle="Undergraduate Researcher" period="Mar 2022 - Sep 2022"
              description={<ul className="ml-4 list-disc space-y-1"><li>Enhanced a distributed systems simulator achieving 90% accuracy relative to real code execution.</li><li>Simulated implementation of 10 data consistency models for comparative analysis.</li><li>Published and presented a paper at INForum 2022.</li></ul>} />
          </div>
        </div>

        {/* Education */}
        <div className="rounded-2xl bg-card border border-border/60 p-6 shadow-sm shadow-black/10">
          <h2 className="flex items-center gap-2 text-xl mb-4"><BookOpen className="h-5 w-5 text-primary" /> Education</h2>
          <div className="space-y-6" style={{ fontStyle: "normal" }}>
            <div className="space-y-2">
              <div className="flex items-start justify-between gap-4">
                <h3 className="font-semibold text-sm">M.Sc. in Computer Science and Engineering</h3>
                <span className="text-xs tabular-nums text-muted-foreground flex-shrink-0">Sept 2022 - Now</span>
              </div>
              <div className="flex items-center gap-2"><span className="text-sm text-muted-foreground">SST-UNL (NOVA School of Science and Technology)</span> <Badge variant="secondary">Lisbon</Badge></div>
              <ul className="ml-4 list-disc text-sm text-muted-foreground space-y-0.5"><li>Major in Distributed and Parallel Systems.</li><li>Minor in Algorithms and Programming Languages Design.</li></ul>
            </div>
            <div className="border-t border-border/60 pt-6 space-y-2">
              <div className="flex items-start justify-between gap-4">
                <h3 className="font-semibold text-sm">B.Sc. in Computer Science and Engineering</h3>
                <span className="text-xs tabular-nums text-muted-foreground flex-shrink-0">Sept 2019 - Aug 2022</span>
              </div>
              <div className="flex items-center gap-2"><span className="text-sm text-muted-foreground">SST-UNL (NOVA School of Science and Technology)</span> <Badge variant="secondary">Lisbon</Badge></div>
              <p className="text-sm text-muted-foreground">Research project that led to publishing a Scientific Paper in a national conference.</p>
            </div>
            <div className="border-t border-border/60 pt-6 space-y-2">
              <div className="flex items-start justify-between gap-4">
                <h3 className="font-semibold text-sm">Erasmus+ Programme in Computer Science</h3>
                <span className="text-xs tabular-nums text-muted-foreground flex-shrink-0">Apr 2023 - Aug 2023</span>
              </div>
              <div className="flex items-center gap-2"><span className="text-sm text-muted-foreground">TU Dresden</span> <Badge variant="secondary">Dresden</Badge></div>
              <ul className="ml-4 list-disc text-sm text-muted-foreground space-y-0.5"><li>Scholarship-backed exchange programme.</li><li>Focus on Distributed Systems, Parallel Computing and Systems Dependability.</li></ul>
            </div>
          </div>
        </div>

        {/* Presentations */}
        <div className="rounded-2xl bg-card border border-border/60 p-6 shadow-sm shadow-black/10">
          <h2 className="flex items-center gap-2 text-xl mb-4"><Presentation className="h-5 w-5 text-primary" /> Presentations</h2>
          <div style={{ fontStyle: "normal" }} className="space-y-2">
            <div className="flex items-start justify-between gap-4">
              <h3 className="font-semibold text-sm">Scientific Paper on Causal Consistency Simulation</h3>
              <span className="text-xs tabular-nums text-muted-foreground flex-shrink-0">Sept 2022</span>
            </div>
            <div className="flex items-center gap-2"><span className="text-sm text-muted-foreground">INForum</span> <Badge variant="secondary">Guarda, Portugal</Badge></div>
            <p className="text-sm text-muted-foreground">Scientific paper presentation on Accurate Simulation of Causal Consistency Replication protocols.</p>
          </div>
        </div>

        {/* Technical Skills */}
        <TechnicalSkills />
      </div>
    </PageTransition>
  )
}
