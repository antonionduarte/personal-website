export interface CvContactLink {
  label: string
  href: string
}

export interface CvPerson {
  name: string
  title: string
  email: string
  location: string
  website: CvContactLink
  github: CvContactLink
  linkedin: CvContactLink
}

export interface CvRole {
  title: string
  team?: string
  period: string
  location?: string
  bullets: string[]
}

export interface CvExperience {
  company: string
  subtitle: string
  period: string
  location?: string
  logoUrl: string
  altText: string
  bullets?: string[]
  roles?: CvRole[]
}

export interface CvEducation {
  degree: string
  institution: string
  location: string
  period: string
  bullets: string[]
}

export interface CvPresentation {
  title: string
  event: string
  location: string
  period: string
  description: string
}

export interface CvSkillGroup {
  category: string
  items: string[]
}

export const cvData: {
  person: CvPerson
  summary: string[]
  experiences: CvExperience[]
  education: CvEducation[]
  presentations: CvPresentation[]
  skills: CvSkillGroup[]
} = {
  person: {
    name: "António Duarte",
    title: "Software Engineer",
    email: "antonionpnduarte@gmail.com",
    location: "Lisbon, Portugal",
    website: {
      label: "antonionduarte.dev",
      href: "https://antonionduarte.dev",
    },
    github: {
      label: "github.com/antonionduarte",
      href: "https://github.com/antonionduarte",
    },
    linkedin: {
      label: "linkedin.com/in/antonionduarte",
      href: "https://linkedin.com/in/antonionduarte",
    },
  },
  summary: [
    "Software Engineer at Paddle focused on backend systems, revenue recovery, recurring revenue analytics, and production service deployment across Go and Python/Django ecosystems.",
    "M.Sc. candidate in Computer Science and Engineering at NOVA SST with a focus on distributed systems, parallel computing, algorithms, and programming language design.",
  ],
  experiences: [
    {
      company: "Paddle",
      subtitle: "Junior Software Engineer",
      period: "Jan 2025 - Present",
      location: "Lisbon, Portugal",
      logoUrl: "/paddle_logo.svg",
      altText: "Paddle",
      roles: [
        {
          title: "Junior Software Engineer",
          team: "Retain Team",
          period: "Feb 2026 - Present",
          location: "Lisbon, Portugal",
          bullets: [
            "Authored 3 architectural proposals and 2 technical decision records defining the strategy for decoupling a revenue recovery system from a legacy monolith, protecting $1.08M/month in recovered payments across 723 sellers.",
            "Built a Go dunning microservice from zero to production, replacing a batch-based Python/Django system with an event-driven architecture using EventBridge and SQS.",
            "Eliminated a critical dependency between payment recovery and the data pipeline that had previously caused a 37% drop in daily recovered payments during an infrastructure outage, from 272 to 171 payments/day.",
            "Delivered 50+ PRs across 2 new services, owning application code in Go, Terraform/ECS infrastructure, event pipelines, auth configuration, API gateway routing, and BDD test suites.",
          ],
        },
        {
          title: "Junior Software Engineer",
          team: "Metrics Team",
          period: "Jan 2025 - Feb 2026",
          location: "Lisbon, Portugal",
          bullets: [
            "Maintained and extended a data-intensive MRR processing pipeline in Python/Django, powering recurring revenue analytics for thousands of SaaS companies.",
            "Overhauled internal migration tooling for onboarding payment providers by unifying candidate selection across integrations, automating data migration, and adding comprehensive test coverage.",
            "Built pipeline observability infrastructure spanning metric alerting, operational dashboards, database connection resilience, stale-data detection, and checkpoint optimizations for billing data generation.",
            "Led authoring and implementation of a technical decision record addressing critical security risks in external integration authentication, aligning the system with security best practices.",
            "Delivered 80+ PRs and resolved 30+ issues spanning reliability improvements, feature development, production investigations, and large-scale schema migrations.",
          ],
        },
        {
          title: "Junior Software Engineer",
          team: "Cross-Organization Initiatives",
          period: "2025 - Present",
          location: "Lisbon, Portugal",
          bullets: [
            "Authored decision records and custom agentic-skill initiatives for safe broad agentic development at Paddle.",
            "Developed global skills that encode Paddle architectural standards and internal library conventions for code implementation and reviews across the engineering ecosystem.",
            "Authored the decision record for introducing Profile-Guided Optimization across the Go service fleet and built an MVP CI workflow for automated weekly CPU profile collection.",
            "Coordinated with security to unblock infrastructure access and designed a zero-effort team rollout, measuring 2-14% CPU reduction with no application code changes.",
          ],
        },
      ],
    },
    {
      company: "Aptoide",
      subtitle: "Backend Engineer",
      period: "Dec 2023 - Dec 2024",
      location: "Lisbon, Portugal",
      logoUrl: "/aptoide_logo.svg",
      altText: "Aptoide",
      bullets: [
        "Developed backend services using Rust with actix-web and Python with Django, Flask, and FastAPI.",
        "Deployed and monitored microservices using Docker, PostgreSQL, Redis, and Elasticsearch.",
        "Developed Aptoide's performance-critical Mobile Measurement Platform in Rust.",
      ],
    },
    {
      company: "Generation Resonance",
      subtitle: "Department Head",
      period: "May 2024 - Jan 2025",
      location: "Lisbon, Portugal",
      logoUrl: "/gr_logo.svg",
      altText: "Generation Resonance",
      roles: [
        {
          title: "Department Head",
          period: "Jun 2024 - Jan 2025",
          bullets: [
            "Planned and led the technical roadmap of the project.",
            "Directed tech-related initiatives, articles, and coverage of technological developments.",
          ],
        },
        {
          title: "Web Developer",
          period: "May 2024 - Jan 2025",
          bullets: [
            "Developed the project's website, blog, and CMS using Next.js, TypeScript, and Vercel.",
          ],
        },
      ],
    },
    {
      company: "NOVA LINCS",
      subtitle: "Undergraduate Researcher",
      period: "Mar 2022 - Sep 2022",
      location: "Lisbon, Portugal",
      logoUrl: "/nova_lincs.png",
      altText: "NOVA LINCS",
      bullets: [
        "Enhanced a distributed systems simulator, achieving 90% accuracy relative to real code execution.",
        "Simulated implementations of 10 data consistency models for comparative analysis.",
        "Published and presented a paper at INForum 2022.",
      ],
    },
  ],
  education: [
    {
      degree: "M.Sc. in Computer Science and Engineering",
      institution: "SST-UNL (NOVA School of Science and Technology)",
      location: "Lisbon",
      period: "Sept 2022 - Present",
      bullets: [
        "Major in Distributed and Parallel Systems.",
        "Minor in Algorithms and Programming Language Design.",
      ],
    },
    {
      degree: "B.Sc. in Computer Science and Engineering",
      institution: "SST-UNL (NOVA School of Science and Technology)",
      location: "Lisbon",
      period: "Sept 2019 - Aug 2022",
      bullets: [
        "Completed a research project that led to publishing a scientific paper in a national conference.",
      ],
    },
    {
      degree: "Erasmus+ Programme in Computer Science",
      institution: "TU Dresden",
      location: "Dresden",
      period: "Apr 2023 - Aug 2023",
      bullets: [
        "Scholarship-backed exchange programme.",
        "Focused on distributed systems, parallel computing, and systems dependability.",
      ],
    },
  ],
  presentations: [
    {
      title: "Scientific Paper on Causal Consistency Simulation",
      event: "INForum",
      location: "Guarda, Portugal",
      period: "Sept 2022",
      description: "Presented a scientific paper on accurate simulation of causal consistency replication protocols.",
    },
  ],
  skills: [
    { category: "Programming Languages", items: ["Python", "Go", "Rust", "JavaScript", "TypeScript", "Java"] },
    { category: "Web Technologies", items: ["React", "Next.js", "Node.js", "HTML", "CSS", "TailwindCSS"] },
    { category: "Databases", items: ["PostgreSQL", "MySQL", "SQLite", "MongoDB", "Redis", "Elasticsearch"] },
    { category: "DevOps & Tools", items: ["Docker", "Kubernetes", "Terraform", "AWS", "ECS", "Git", "CI/CD", "Linux", "Bash"] },
    { category: "Concepts", items: ["Distributed Systems", "Microservices", "Event-Driven Architecture", "Observability", "Network Security", "Agile Methodologies"] },
  ],
}
