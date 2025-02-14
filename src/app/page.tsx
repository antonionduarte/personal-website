import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, BookOpen, ExternalLink, Briefcase, User, Cpu } from "lucide-react"
import BentoCard from "@/components/bento-card"

const skills = [
  "Rust",
  "Python",
  "JavaScript",
  "TypeScript",
  "React",
  "Node.js",
  "Docker",
  "Kubernetes",
  "AWS",
  "Distributed Systems",
  "Microservices",
  "CI/CD",
]

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 gap-6">
        {/* Banner */}
        <BentoCard className="col-span-full" noPadding>
          <div className="relative min-h-[400px] md:h-[400px] overflow-hidden rounded-lg bg-gradient-to-br from-purple-700 via-blue-600 to-cyan-500">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="p-6 md:p-10 flex flex-col md:flex-row items-center md:items-center gap-6 text-white">
                <Image
                  src="/profile.jpeg"
                  alt="António Duarte"
                  width={150}
                  height={150}
                  className="rounded-[1rem] border-4 border-white w-32 h-32 md:w-[150px] md:h-[150px]"
                />
                <div className="text-center md:text-left">
                  <h1 className="text-3xl md:text-4xl font-bold mb-2">António Duarte</h1>
                  <p className="text-xl mb-4">Software Engineer @ Paddle | Distributed and Parallel Systems </p>
                  <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-4">
                    <Badge variant="secondary" className="bg-white/20 hover:bg-white/30 transition-colors">
                      Distributed Systems
                    </Badge>
                    <Badge variant="secondary" className="bg-white/20 hover:bg-white/30 transition-colors">
                      Parallel and Concurrent Systems
                    </Badge>
                    <Badge variant="secondary" className="bg-white/20 hover:bg-white/30 transition-colors">
                      Algorithm Design
                    </Badge>
                  </div>
                  <div className="flex flex-wrap justify-center md:justify-start gap-2">
                    <Button asChild variant="secondary" size="sm">
                      <Link href="/blog">Read My Blog</Link>
                    </Button>
                    <Button asChild variant="outline" size="sm">
                      <Link href="/cv">View My CV</Link>
                    </Button>
                    <Button asChild variant="outline" size="sm">
                      <Link href="https://github.com/antonionduarte">GitHub</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </BentoCard>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* About Me Card */}
          <BentoCard title="About Me" icon={<User className="w-4 h-4" />} className="md:col-span-2">
            <div className="space-y-4">
              <p className="text-muted-foreground">
                Hey all, I'm a 23-year-old Software Engineer specialized in Distributed & Parallel Systems, that also dabbled very strongly in Algorithms and Programming Language Design.
              </p>
              <p className="text-muted-foreground">
                I'm very interested in Distributed Systemsm, Parallel Computing and High Performance Computing (although I honestly enjoy keeping myself updated in most areas related to CS, from Programming Languages to Machine Learning), and as such my career so far has been focused around Backend & Data Engineering.
              </p>
            </div>
          </BentoCard>

          {/* Skills Card */}
          <BentoCard title="Skills" icon={<Cpu className="w-4 h-4" />} className="group">
            <div className="mt-[0.3rem] flex flex-wrap gap-2">
              {skills.map((skill) => (
                <Badge key={skill} variant="secondary" className="bg-primary/10 hover:bg-primary/20 transition-colors">
                  {skill}
                </Badge>
              ))}
            </div>
          </BentoCard>

          {/* Latest Blog Post Card */}
          <BentoCard title="Latest Blog Post" icon={<BookOpen className="w-4 h-4" />} className="group">
            <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
              Coming Soon... 
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              When I eventually have a thought worth writing, I shall do it, but for now, I'll remain in silence.
            </p>
            <Button asChild variant="ghost" size="sm" className="group-hover:text-primary transition-colors">
              <Link href="/blog/understanding-distributed-systems">
                Read More
                <ExternalLink className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </BentoCard>

          {/* Featured Project Card 1 */}
          <BentoCard title="Featured Project" icon={<Briefcase className="w-4 h-4" />} className="group">
            <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
              Causal Consistency Simulator
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              Enhanced a simulator to achieve realistic throughput and latency metrics for consistency model
              simulations.
            </p>
            <div className="flex justify-between items-center">
              <Badge>Consistency Models</Badge>
              <Button asChild variant="ghost" size="sm" className="group-hover:text-primary transition-colors">
                <Link href="https://github.com/antonionduarte/replication-dsim" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  View on GitHub
                </Link>
              </Button>
            </div>
          </BentoCard>

          {/* Featured Project Card 2 */}
          <BentoCard title="Featured Project" icon={<Briefcase className="w-4 h-4" />} className="group">
            <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
              Go Protocol Runtime 
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              A work in progress runtime to implement and execute distributed algorithms in a pseudocode-like fashion.
            </p>
            <div className="flex justify-between items-center">
              <Badge>Go</Badge>
              <Button asChild variant="ghost" size="sm" className="group-hover:text-primary transition-colors">
                <Link
                  href="https://github.com/antonionduarte/go-simple-protocol-runtime"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="mr-2 h-4 w-4" />
                  View on GitHub
                </Link>
              </Button>
            </div>
          </BentoCard>
        </div>
      </div>
    </div>
  )
}