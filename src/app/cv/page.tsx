import Image from "next/image"
import { Avatar } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, MapPin, Github } from "lucide-react"
import Link from "next/link"
import TechnicalSkills from "./technical-skills"

export default function CVPage() {
    return (
        <div className="min-h-screen bg-background p-6 md:p-12">
            <div className="mx-auto max-w-6xl flex flex-col lg:flex-row gap-8">
                <div className="lg:w-3/4 space-y-8">
                    {/* Header */}
                    <div className="pl-6 grid-cols-1 flex flex-col sm:flex-row items-center sm:items-center gap-6 text-center sm:text-left">
                        <div>
                            <Image
                                src="/profile.jpeg"
                                alt="António Duarte"
                                width={150}
                                height={150}
                                className="rounded-full"
                            />
                        </div>
                        <div className="flex flex-col justify-center items-center sm:items-start h-full">
                            <h1 className="text-4xl font-bold tracking-tight">António Duarte</h1>
                            <p className="text-xl text-muted-foreground mb-4">Computer Science</p>
                            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 text-muted-foreground">
                                <div className="flex items-center gap-2">
                                    <Mail className="h-4 w-4" />
                                    <span>antonionpnduarte@gmail.com</span>
                                </div>
                                <Link
                                    href="https://github.com/antonionduarte"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 hover:text-foreground transition-colors"
                                >
                                    <Github className="h-4 w-4" />
                                    <span>antonioduarte</span>
                                </Link>
                                <div className="flex items-center gap-2">
                                    <MapPin className="h-4 w-4" />
                                    <span>Lisbon, Portugal</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Summary */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Summary</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground">
                                Hey all, I&#39;m a 23-year-old Computer Scientist in an M.Sc. focused on Distributed Systems, Computer
                                Networks, Network Security, and Parallel Computing. I am interested in Unix-based operating systems and
                                am an avid Linux user.
                                I&#39;m very interested in Distributed Systems (although I honestly enjoy keeping myself updated in most areas related to CS, from Programming Languages to Machine Learning), and as
                                such my career so far has been focused around Backend & Data Engineering.
                            </p>
                        </CardContent>
                    </Card>

                    {/* Experience */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Experience</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            {/* Paddle */}
                            <div className="flex gap-4">
                                <Avatar className="h-12 w-12 rounded-xl">
                                    <Image src={'/paddle_logo.svg'} alt="Aptoide logo" width={48} height={48} />
                                </Avatar>
                                <div className="space-y-2 w-full">
                                    <div className="flex items-center justify-between">
                                        <h3 className="font-semibold">Software Engineer</h3>
                                        <div className="text-sm text-muted-foreground">January 2024 - Now</div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="font-medium">Paddle</span>
                                        <Badge variant="secondary">Remote</Badge>
                                    </div>
                                    <ul className="ml-4 list-disc text-sm text-muted-foreground">
                                        <li>
                                            Maintenance and Development of a Data Processing Pipeline in Python.
                                        </li>
                                        <li>
                                            Distributed Service Deployment and Monitoring using Kubernetes and ElasticStack.
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            {/* Aptoide */}
                            <div className="flex gap-4">
                                <Avatar className="h-12 w-12 rounded-xl">
                                    <Image src={'/aptoide_logo.svg'} alt="Aptoide logo" width={48} height={48} />
                                </Avatar>
                                <div className="space-y-2 w-full">
                                    <div className="flex items-center justify-between">
                                        <h3 className="font-semibold">Backend Engineer</h3>
                                        <div className="text-sm text-muted-foreground">December 2023 - Now</div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="font-medium">Aptoide</span>
                                        <Badge variant="secondary">Lisbon, Portugal</Badge>
                                    </div>
                                    <ul className="ml-4 list-disc text-sm text-muted-foreground">
                                        <li>
                                            Development of Backend Services using Rust (actix-web) and
                                            Python (Django, Flask and FastAPI).
                                        </li>
                                        <li>
                                            Distributed Deployment and Monitoring of Microservices using Docker, PostgresSQL, Redis and
                                            ElasticSearch.
                                        </li>
                                        <li>
                                            Developed Aptoide&#39;s performance-critical Mobile Measurement Platform in Rust.
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            {/* Generation Resonance */}
                            <div className="flex gap-4">
                                <Avatar className="h-12 w-12 rounded-xl">
                                    <Image src={'/gr_logo.svg'} alt="Generation Resonance logo" width={150} height={150} />
                                </Avatar>
                                <div className="space-y-2 w-full">
                                    <div className="flex items-center justify-between">
                                        <h3 className="font-semibold">Department Head</h3>
                                        <div className="text-sm text-muted-foreground">May 2024 - Now</div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="font-medium">Generation Resonance</span>
                                        <Badge variant="secondary">Lisbon, Portugal</Badge>
                                    </div>
                                    <ul className="ml-4 list-disc text-sm text-muted-foreground ">
                                        <li>
                                            Management of the Technology and Innovation team at Generation Resonance, a United Nations
                                            Association Portugal associated Youth NGO, delegating tasks, organizing and distributing work
                                            through the team.
                                        </li>
                                        <li>
                                            Development of the NGO&#39;s website, blog and backend services, using Next.js, Strapi and
                                            TailwindCSS, to manage the organization&#39;s activities and projects.
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            {/* NOVA Lincs */}
                            <div className="flex gap-4">
                                <Avatar className="h-12 w-12 rounded-xl">
                                    <Image src={"/nova_lincs.png"} alt="NOVA Lincs logo" width={150} height={150} />
                                </Avatar>
                                <div className="space-y-2 w-full">
                                    <div className="flex items-center justify-between">
                                        <h3 className="font-semibold">Undergraduate Researcher</h3>
                                        <div className="text-sm text-muted-foreground">March 2022 - September 2022</div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="font-medium">NOVA Lincs (Laboratory for Computer Science and Informatics)</span>
                                        <Badge variant="secondary">Lisbon, Portugal</Badge>
                                    </div>
                                    <ul className="ml-4 list-disc text-sm text-muted-foreground">
                                        <li>
                                            Work in enhancing a distributed systems simulator to achieve realistic throughput and latency
                                            metrics for consistency model simulations, achieved an accuracy relative to real code execution of
                                            90%.
                                        </li>
                                        <li>
                                            Simulated implementation of 10 data consistency models resulting in a realistic and reliable
                                            comparative analysis between them.
                                        </li>
                                        <li>
                                            Published and presented a paper on INForum 2022 explaining the inner functioning of the developed
                                            solution.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Education */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Education</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            {/* M.Sc. */}
                            <div className="space-y-2">
                                <div className="flex items-center justify-between">
                                    <h3 className="font-semibold">M.Sc. in Computer Science and Engineering</h3>
                                    <div className="text-sm text-muted-foreground">Sept. 2022 - Now</div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="font-medium">SST-UNL (NOVA School of Science and Technology)</span>
                                    <Badge variant="secondary">Lisbon, Portugal</Badge>
                                </div>
                                <p className="text-sm text-muted-foreground">
                                    Master&#39;s with a focus on Distributed Systems, Reliability, Concurrent Computing and Network Security.
                                </p>
                            </div>

                            {/* BSc */}
                            <div className="space-y-2">
                                <div className="flex items-center justify-between">
                                    <h3 className="font-semibold">B.Sc. in Computer Science and Engineering</h3>
                                    <div className="text-sm text-muted-foreground">Sept. 2019 - Aug. 2022</div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="font-medium">SST-UNL (NOVA School of Science and Technology)</span>
                                    <Badge variant="secondary">Lisbon, Portugal</Badge>
                                </div>
                                <p className="text-sm text-muted-foreground">
                                    Research project that lead to the publishing of a Scientific Paper in a national conference in the end
                                    of the BSc.
                                </p>
                            </div>

                            {/* TU Dresden */}
                            <div className="space-y-2">
                                <div className="flex items-center justify-between">
                                    <h3 className="font-semibold">Erasmus+ Programme in Computer Science and Engineering</h3>
                                    <div className="text-sm text-muted-foreground">April 2023 - August 2023</div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="font-medium">TU Dresden</span>
                                    <Badge variant="secondary">Dresden, Germany</Badge>
                                </div>
                                <ul className="ml-4 list-disc text-sm text-muted-foreground">
                                    <li>Scholarship-backed exchange programme.</li>
                                    <li>Focus on Distributed Systems, Parallel Computing and Systems Dependability.</li>
                                </ul>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Presentations */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Presentations</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-2">
                                <div className="flex items-center justify-between">
                                    <h3 className="font-semibold">Scientific Paper on Causal Consistency Simulation</h3>
                                    <div className="text-sm text-muted-foreground">Sept. 2022</div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="font-medium">INForum</span>
                                    <Badge variant="secondary">Guarda, Portugal</Badge>
                                </div>
                                <p className="text-sm text-muted-foreground">
                                    Scientific paper presentation on Accurate Simulation of Causal Consistency Replication protocols.
                                </p>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Technical Skills Sidebar */}
                <div className="lg:w-1/4">
                    <TechnicalSkills />
                </div>
            </div>
        </div>
    )
}

