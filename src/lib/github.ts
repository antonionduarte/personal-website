const GITHUB_USERNAME = "antonionduarte"
const REVALIDATE = 14400 // 4 hours

// --- Types ---

export interface ContributionDay {
  date: string
  count: number
  level: 0 | 1 | 2 | 3 | 4
}

export interface ContributionData {
  total: Record<string, number>
  contributions: ContributionDay[]
}

export interface GitHubProfile {
  public_repos: number
  followers: number
  created_at: string
}

export interface LanguageData {
  name: string
  bytes: number
  percentage: number
  color: string
}

// --- Language Colors ---

const LANGUAGE_COLORS: Record<string, string> = {
  TypeScript: "#3178c6",
  JavaScript: "#f1e05a",
  Python: "#3572A5",
  Rust: "#dea584",
  Go: "#00ADD8",
  Java: "#b07219",
  Shell: "#89e051",
  HTML: "#e34c26",
  CSS: "#563d7c",
  C: "#555555",
  "C++": "#f34b7d",
  Solidity: "#AA6746",
  TeX: "#3D6117",
  Makefile: "#427819",
  Dockerfile: "#384d54",
  Nix: "#7e7eff",
}

const FALLBACK_COLOR = "#8a8468"

// --- GitHub API Headers ---

function githubHeaders(): HeadersInit {
  const headers: HeadersInit = { Accept: "application/vnd.github.v3+json" }
  if (process.env.GITHUB_TOKEN) {
    headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`
  }
  return headers
}

// --- Fetch Functions ---

export async function fetchContributions(): Promise<ContributionData | null> {
  try {
    const res = await fetch(
      `https://github-contributions-api.jogruber.de/v4/${GITHUB_USERNAME}?y=last`,
      { next: { revalidate: REVALIDATE } },
    )
    if (!res.ok) return null
    return await res.json()
  } catch {
    return null
  }
}

export interface YearlyTotal {
  year: string
  contributions: number
}

export async function fetchAllContributions(): Promise<{ totals: YearlyTotal[]; contributions: ContributionDay[] } | null> {
  try {
    const res = await fetch(
      `https://github-contributions-api.jogruber.de/v4/${GITHUB_USERNAME}?y=all`,
      { next: { revalidate: REVALIDATE } },
    )
    if (!res.ok) return null
    const data: ContributionData = await res.json()

    const totals = Object.entries(data.total)
      .filter(([key]) => /^\d{4}$/.test(key))
      .map(([year, contributions]) => ({ year, contributions }))
      .sort((a, b) => a.year.localeCompare(b.year))

    return { totals, contributions: data.contributions }
  } catch {
    return null
  }
}

export async function fetchProfile(): Promise<GitHubProfile | null> {
  try {
    const res = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}`, {
      next: { revalidate: REVALIDATE },
      headers: githubHeaders(),
    })
    if (!res.ok) return null
    const data = await res.json()
    return {
      public_repos: data.public_repos,
      followers: data.followers,
      created_at: data.created_at,
    }
  } catch {
    return null
  }
}

export async function fetchLanguages(): Promise<LanguageData[] | null> {
  try {
    // Step 1: Fetch all repos
    const reposRes = await fetch(
      `https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100&sort=updated`,
      {
        next: { revalidate: REVALIDATE },
        headers: githubHeaders(),
      },
    )
    if (!reposRes.ok) return null
    const repos: Array<{ name: string; fork: boolean }> = await reposRes.json()

    // Step 2: Filter forks
    const ownRepos = repos.filter((r) => !r.fork)

    // Step 3: Fetch language breakdown for each repo in parallel
    const langResults = await Promise.allSettled(
      ownRepos.map(async (repo) => {
        const res = await fetch(
          `https://api.github.com/repos/${GITHUB_USERNAME}/${repo.name}/languages`,
          {
            next: { revalidate: REVALIDATE },
            headers: githubHeaders(),
          },
        )
        if (!res.ok) return {}
        return (await res.json()) as Record<string, number>
      }),
    )

    // Step 4: Aggregate bytes across all repos
    const totals: Record<string, number> = {}
    for (const result of langResults) {
      if (result.status !== "fulfilled") continue
      for (const [lang, bytes] of Object.entries(result.value)) {
        totals[lang] = (totals[lang] || 0) + bytes
      }
    }

    // Step 5: Sort and compute percentages
    const totalBytes = Object.values(totals).reduce((a, b) => a + b, 0)
    if (totalBytes === 0) return null

    const sorted = Object.entries(totals)
      .sort(([, a], [, b]) => b - a)
      .slice(0, 8)

    return sorted.map(([name, bytes]) => ({
      name,
      bytes,
      percentage: (bytes / totalBytes) * 100,
      color: LANGUAGE_COLORS[name] || FALLBACK_COLOR,
    }))
  } catch {
    return null
  }
}
