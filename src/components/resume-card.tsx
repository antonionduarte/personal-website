"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ChevronDownIcon, MapPinIcon } from "lucide-react"
import Link from "next/link"
import { AnimatePresence, motion } from "motion/react"
import React from "react"
import { cn } from "@/lib/utils"

interface Role {
  title: string
  team?: string
  period: string
  location?: string
  bullets?: string[]
  description?: React.ReactNode
}

interface ResumeCardProps {
  logoUrl: string
  altText: string
  title: string
  subtitle?: string
  href?: string
  period?: string
  location?: string
  bullets?: string[]
  description?: React.ReactNode
  roles?: Role[]
  defaultExpanded?: boolean
}

export default function ResumeCard({
  logoUrl,
  altText,
  title,
  subtitle,
  href,
  period,
  location,
  bullets,
  description,
  roles,
  defaultExpanded = false,
}: ResumeCardProps) {
  const hasDetails = Boolean(description || bullets?.length || roles?.length)
  const [isExpanded, setIsExpanded] = React.useState(defaultExpanded && hasDetails)
  const contentId = React.useId()

  const header = (
    <div className="flex w-full items-start gap-4 text-left">
      <Avatar className="h-11 w-11 flex-shrink-0 rounded-xl">
        <AvatarImage src={logoUrl} alt={altText} className="object-contain" />
        <AvatarFallback className="rounded-xl text-xs">{altText[0]}</AvatarFallback>
      </Avatar>
      <div className="min-w-0 flex-1">
        <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
          <div className="min-w-0">
            <h3 className="text-sm font-semibold text-foreground" style={{ fontStyle: "normal" }}>{title}</h3>
            {subtitle && (
              <p className="mt-0.5 text-sm text-muted-foreground" style={{ fontStyle: "normal" }}>{subtitle}</p>
            )}
          </div>
          {period && (
            <span className="shrink-0 text-xs tabular-nums text-muted-foreground sm:text-right">{period}</span>
          )}
        </div>
        {location && (
          <p className="mt-2 flex items-center gap-1.5 text-xs text-muted-foreground" style={{ fontStyle: "normal" }}>
            <MapPinIcon className="h-3.5 w-3.5" aria-hidden="true" />
            {location}
          </p>
        )}
      </div>
      {hasDetails && (
        <ChevronDownIcon
          className={cn(
            "mt-0.5 h-4 w-4 flex-shrink-0 text-muted-foreground transition-transform duration-300 ease-out group-hover:text-primary",
            isExpanded && "rotate-180"
          )}
          aria-hidden="true"
        />
      )}
    </div>
  )

  const toggleExpanded = () => {
    if (hasDetails) {
      setIsExpanded((value) => !value)
    }
  }

  return (
    <article className="group py-5 first:pt-4 last:pb-4">
      {hasDetails ? (
        <button
          type="button"
          aria-expanded={isExpanded}
          aria-controls={contentId}
          onClick={toggleExpanded}
          className="-m-2 w-[calc(100%+1rem)] rounded-xl p-2 transition-colors duration-200 hover:bg-muted/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          {header}
        </button>
      ) : href ? (
        <Link
          href={href}
          className="-m-2 block w-[calc(100%+1rem)] rounded-xl p-2 transition-colors duration-200 hover:bg-muted/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          {header}
        </Link>
      ) : (
        header
      )}

      <AnimatePresence initial={false}>
        {isExpanded && hasDetails && (
          <motion.div
            id={contentId}
            key="content"
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="mt-5 overflow-hidden pl-0 text-sm text-muted-foreground sm:pl-[3.75rem]"
            style={{ fontStyle: "normal" }}
          >
            {description}
            {bullets && <BulletList bullets={bullets} />}
            {roles && (
              <ol className="space-y-5">
                {roles.map((role, index) => (
                  <li key={`${role.team ?? role.title}-${role.period}`} className="grid grid-cols-[1rem_1fr] gap-4">
                    <div className="relative flex justify-center" aria-hidden="true">
                      {index < roles.length - 1 && (
                        <span className="absolute top-4 h-[calc(100%+1.25rem)] w-px bg-border/80" />
                      )}
                      <span
                        className={cn(
                          "relative z-10 mt-1 h-3 w-3 rounded-full border bg-card",
                          index === 0 ? "border-primary shadow-[0_0_0_3px_hsl(var(--primary)/0.12)]" : "border-border"
                        )}
                      />
                    </div>
                    <div className="min-w-0 pb-1">
                      <div className="flex flex-col gap-1.5 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
                        <div className="flex min-w-0 flex-wrap items-baseline gap-x-2 gap-y-1">
                          <h4 className="text-sm font-semibold leading-snug text-foreground">
                            {role.team ?? role.title}
                          </h4>
                          {role.team && (
                            <span className="text-xs text-muted-foreground">{role.title}</span>
                          )}
                          {role.location && (
                            <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                              <MapPinIcon className="h-3 w-3" aria-hidden="true" />
                              {role.location}
                            </span>
                          )}
                        </div>
                        <span className="shrink-0 text-xs tabular-nums text-muted-foreground sm:text-right">
                          {role.period}
                        </span>
                      </div>
                      {role.description}
                      {role.bullets && <BulletList bullets={role.bullets} className="mt-3" />}
                    </div>
                  </li>
                ))}
              </ol>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </article>
  )
}

function BulletList({ bullets, className }: { bullets: string[], className?: string }) {
  return (
    <ul className={cn("space-y-1.5 leading-relaxed", className)}>
      {bullets.map((bullet) => (
        <li key={bullet} className="relative pl-4">
          <span className="absolute left-0 top-[0.72em] h-1 w-1 rounded-full bg-muted-foreground/70" aria-hidden="true" />
          {bullet}
        </li>
      ))}
    </ul>
  )
}
