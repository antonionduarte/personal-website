import { Badge } from "@/components/ui/badge"
import { cvData } from "@/lib/cv-data"
import { Cpu } from "lucide-react"

export default function TechnicalSkills() {
  return (
    <div className="rounded-2xl bg-card border border-border/60 p-6 shadow-sm shadow-black/10">
      <h2 className="flex items-center gap-2 text-xl mb-5"><Cpu className="h-5 w-5 text-primary" /> Technical Skills</h2>
      <div className="space-y-5" style={{ fontStyle: "normal" }}>
        {cvData.skills.map((g) => (
          <div key={g.category} className="space-y-2">
            <h3 className="text-sm font-semibold text-foreground">{g.category}</h3>
            <div className="flex flex-wrap gap-1.5">
              {g.items.map((s) => <Badge key={s} variant="secondary" className="text-xs">{s}</Badge>)}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
