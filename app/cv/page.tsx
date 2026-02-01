"use client";

import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Mail,
  MapPin,
  Github,
  ChevronRightIcon,
  Briefcase,
  BookOpen,
  Presentation,
  FileText,
} from "lucide-react";
import Link from "next/link";
import TechnicalSkills from "./technical-skills";
import { motion } from "framer-motion";
import React from "react";
import { cn } from "@/lib/utils";

interface Role {
  title: string;
  period: string;
  description: React.ReactNode;
}

interface ResumeCardProps {
  logoUrl: string;
  altText: string;
  title: string;
  subtitle?: string;
  href?: string;
  period?: string;
  description?: React.ReactNode;
  roles?: Role[];
  className?: string;
}

const ResumeCard = ({
  logoUrl,
  altText,
  title,
  subtitle,
  href,
  period,
  description,
  roles,
  className,
}: ResumeCardProps) => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (description || roles) {
      e.preventDefault();
      setIsExpanded(!isExpanded);
    }
  };

  return (
    <Link
      href={href || "#"}
      className={`block w-full cursor-pointer group relative`} // Add className here
      onClick={handleClick}
    >
      <div className={`${className} py-4 last:border-b-0`}>
        <div className="flex items-center">
          <div className="w-12 flex-none">
            <Avatar className="w-12 h-12 rounded-[1rem]">
              <AvatarImage src={logoUrl} alt={altText} className="object-contain" />
              <AvatarFallback>{altText[0]}</AvatarFallback>
            </Avatar>
          </div>
          <div className="flex-grow ml-4">
            <CardHeader className="space-y-0 p-0">
              <div className="flex items-center justify-between gap-x-2 text-base">
                <h3 className="flex items-center font-semibold leading-none text-xs sm:text-sm">
                  {title}
                  <ChevronRightIcon
                    className={cn(
                      "size-4 translate-x-0 transform opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100",
                      isExpanded ? "rotate-90" : "rotate-0"
                    )}
                  />
                </h3>
                <div className="text-xs sm:text-sm tabular-nums text-muted-foreground text-right">
                  {period}
                </div>
              </div>
              {subtitle && <div className="font-sans text-white/85 text-xs mt-0.5">{subtitle}</div>}
            </CardHeader>
          </div>
        </div>
        {isExpanded && (description || roles) && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="overflow-hidden mt-4 text-sm text-muted-foreground"
          >
            {description}
            {roles && (
              <div className="mt-2 space-y-4">
                {roles.map((role, index) => (
                  <div key={index}>
                    <div className="font-semibold text-white/85">
                      {role.title} — {role.period}
                    </div>
                    {role.description && (
                      <div className="mt-1">{role.description}</div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        )}
      </div>
    </Link>
  );
};

export default function CVPage() {
  return (
    <div className="min-h-screen bg-background py-8">
      <div className="mx-auto max-w-6xl flex flex-col lg:flex-row gap-8">
        <div className="lg:w-3/4 space-y-8">
          {/* Header */}
          <div className="flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
            <div>
              <Image
                src="/profile.jpeg"
                alt="António Duarte"
                width={150}
                height={150}
                className="rounded-full transition-transform duration-300 ease-in-out transform hover:-rotate-3"
              />
            </div>

            <div className="flex flex-col justify-center items-center sm:items-start">
              <h1 className="text-4xl font-bold tracking-tight">Hi, I&apos;m António 👋</h1>
              <p className="text-xl text-white/70 mb-4">Software Engineer</p>
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
          <Card className="group">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText />
                Summary
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 transition-transform duration-300 ease-in-out transform group-hover:translate-x-2">
                <p className="text-white/70">
                  Hey all, I&#39;m a 24-year-old Software Engineer @ Paddle specialized in Distributed &amp; Parallel Systems, that also dabbled very strongly in Algorithms and Programming Language Design.
                </p>
                <p className="text-white/70">
                  I&#39;m very interested in Distributed Systems (although I enjoy keeping myself updated in most areas related to CS, from Programming Languages to Machine Learning), and as
                  such my career so far has been focused around Backend &amp; Data Engineering.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Work Experience */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Briefcase />
                Work Experience
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-1">
              <ResumeCard
                className="pt-0"
                logoUrl="/paddle_logo.svg"
                altText="Paddle"
                title="Paddle"
                subtitle="Junior Software Engineer"
                period="January 2025 - Now"
                description={
                  <ul className="ml-4 list-disc text-sm text-white/70">
                    <li>Maintenance and Development of a Data Processing Pipeline in Python.</li>
                    <li>Distributed Service Deployment and Monitoring using Kubernetes and ElasticStack.</li>
                  </ul>
                }
              />
              <ResumeCard
                logoUrl="/aptoide_logo.svg"
                altText="Aptoide"
                title="Aptoide"
                subtitle="Backend Engineer"
                period="December 2023 - December 2024"
                description={
                  <ul className="ml-4 list-disc text-sm text-white/70">
                    <li>Development of Backend Services using Rust (actix-web) and Python (Django, Flask and FastAPI).</li>
                    <li>Distributed Deployment and Monitoring of Microservices using Docker, PostgreSQL, Redis and Elasticsearch.</li>
                    <li>Developed Aptoide&apos;s performance-critical Mobile Measurement Platform in Rust.</li>
                  </ul>
                }
              />
              <ResumeCard
                logoUrl="/gr_logo.svg"
                altText="Generation Resonance"
                title="Generation Resonance"
                subtitle="Department Head"
                period="May 2024 - January 2025"
                roles={[
                  {
                    title: "Department Head",
                    period: "June 2024 - January 2025",
                    description: (
                      <ul className="ml-4 list-disc text-sm text-white/70">
                        <li>Management of the Technology and Innovation team at Generation Resonance, a United Nations Association Portugal associated Youth NGO, delegating tasks, organizing and distributing work through the team.</li>
                      </ul>
                    ),
                  },
                  {
                    title: "Web Developer",
                    period: "May 2024 - January 2025",
                    description: (
                      <ul className="ml-4 list-disc text-sm text-white/70">
                        <li>Development of the NGO&apos;s website, blog and backend services, using Next.js, Strapi and TailwindCSS, to manage the organization&apos;s activities and projects.</li>
                      </ul>
                    ),
                  },
                ]}
              />
              <ResumeCard
                className="pb-0"
                logoUrl="/nova_lincs.png"
                altText="NOVA Lincs"
                title="NOVA Lincs (Laboratory for Computer Science and Informatics)"
                subtitle="Undergraduate Researcher"
                period="March 2022 - September 2022"
                description={
                  <ul className="ml-4 list-disc text-sm text-white/70">
                    <li>Work in enhancing a distributed systems simulator to achieve realistic throughput and latency metrics for consistency model simulations, achieved an accuracy relative to real code execution of 90%.</li>
                    <li>Simulated implementation of 10 data consistency models resulting in a realistic and reliable comparative analysis between them.</li>
                    <li>Published and presented a paper on INForum 2022 explaining the inner functioning of the developed solution.</li>
                  </ul>
                }
              />
            </CardContent>
          </Card>

          {/* Education */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen />
                Education
              </CardTitle>
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
                <ul className="ml-4 list-disc text-sm text-white/70">
                  <li>Major in Distributed and Parallel Systems.</li>
                  <li>Minor in Algorithms and Programming Languages Design.</li>
                </ul>
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
                <p className="text-sm text-white/70">
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
                <ul className="ml-4 list-disc text-sm text-white/70">
                  <li>Scholarship-backed exchange programme.</li>
                  <li>Focus on Distributed Systems, Parallel Computing and Systems Dependability.</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Presentations */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Presentation />
                Presentations
              </CardTitle>
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
                <p className="text-sm text-white/70">
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
  );
}
