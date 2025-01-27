import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const skills = [
    { category: "Programming Languages", items: ["Rust", "Python", "JavaScript", "TypeScript", "Java", "C++"] },
    { category: "Web Technologies", items: ["React", "Next.js", "Node.js", "HTML", "CSS", "TailwindCSS"] },
    { category: "Databases", items: ["PostgreSQL", "MongoDB", "Redis", "ElasticSearch"] },
    { category: "DevOps & Tools", items: ["Docker", "Git", "CI/CD", "Linux", "Bash"] },
    {
        category: "Concepts",
        items: ["Distributed Systems", "Microservices", "RESTful APIs", "GraphQL", "Agile Methodologies"],
    },
]

export default function TechnicalSkills() {
    return (
        <Card className="sticky top-6">
            <CardHeader>
                <CardTitle>Technical Skills</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
                {skills.map((skillGroup) => (
                    <div key={skillGroup.category} className="space-y-2">
                        <h3 className="font-semibold text-sm">{skillGroup.category}</h3>
                        <div className="flex flex-wrap gap-2">
                            {skillGroup.items.map((skill) => (
                                <Badge key={skill} variant="secondary">
                                    {skill}
                                </Badge>
                            ))}
                        </div>
                    </div>
                ))}
            </CardContent>
        </Card>
    )
}
