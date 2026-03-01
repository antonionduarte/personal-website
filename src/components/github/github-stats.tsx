import { GitCommit, BookMarked, Users, Calendar } from "lucide-react"
import type { GitHubProfile } from "@/lib/github"
import type { ReactNode } from "react"

interface GitHubStatsProps {
  profile: GitHubProfile
  totalContributions: Record<string, number>
}

export default function GitHubStats({ profile, totalContributions }: GitHubStatsProps) {
  const contributions = totalContributions["lastYear"]
    || Object.values(totalContributions).reduce((a, b) => a + b, 0)
    || 0
  const yearsOnGitHub = new Date().getFullYear() - new Date(profile.created_at).getFullYear()

  const stats: { value: number; label: string; icon: ReactNode }[] = [
    { value: contributions, label: "Contributions", icon: <GitCommit className="h-3.5 w-3.5 text-primary" /> },
    { value: profile.public_repos, label: "Repositories", icon: <BookMarked className="h-3.5 w-3.5 text-primary" /> },
    { value: profile.followers, label: "Followers", icon: <Users className="h-3.5 w-3.5 text-primary" /> },
    { value: yearsOnGitHub, label: "Years", icon: <Calendar className="h-3.5 w-3.5 text-primary" /> },
  ]

  return (
    <div className="rounded-2xl bg-card border border-border/60 p-5 shadow-sm shadow-black/10 hover:shadow-md hover:shadow-black/15 hover:border-border transition-all duration-300">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-0 md:divide-x md:divide-border/60" style={{ fontStyle: "normal" }}>
        {stats.map((stat) => (
          <div key={stat.label} className="flex flex-col items-center gap-1 px-3">
            <p className="text-xl font-semibold text-foreground tabular-nums">{stat.value}</p>
            <p className="flex items-center gap-1 text-[11px] text-muted-foreground">
              {stat.icon} {stat.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
