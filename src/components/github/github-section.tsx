import { fetchContributions, fetchProfile, fetchLanguages, fetchAllContributions } from "@/lib/github"
import ContributionHeatmap from "./contribution-heatmap"
import ContributionTrend from "./contribution-trend"
import LanguageBreakdown from "./language-breakdown"
import GitHubStats from "./github-stats"

export default async function GitHubSection() {
  const [contribResult, profileResult, langResult, allContribResult] = await Promise.allSettled([
    fetchContributions(),
    fetchProfile(),
    fetchLanguages(),
    fetchAllContributions(),
  ])

  const contributions = contribResult.status === "fulfilled" ? contribResult.value : null
  const profile = profileResult.status === "fulfilled" ? profileResult.value : null
  const languages = langResult.status === "fulfilled" ? langResult.value : null
  const allContributions = allContribResult.status === "fulfilled" ? allContribResult.value : null

  if (!contributions && !profile && !languages) return null

  return (
    <div className="space-y-5">
      {profile && contributions && (
        <GitHubStats profile={profile} totalContributions={contributions.total} />
      )}

      {languages && languages.length > 0 && (
        <LanguageBreakdown languages={languages} />
      )}

      {allContributions && allContributions.totals.length > 0 && (
        <ContributionTrend totals={allContributions.totals} />
      )}

      {contributions && (
        <ContributionHeatmap contributions={contributions.contributions} />
      )}
    </div>
  )
}
