"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ChevronRightIcon } from "lucide-react"
import Link from "next/link"
import { AnimatePresence, motion } from "motion/react"
import React from "react"
import { cn } from "@/lib/utils"

interface Role {
  title: string
  period: string
  description: React.ReactNode
}

interface ResumeCardProps {
  logoUrl: string
  altText: string
  title: string
  subtitle?: string
  href?: string
  period?: string
  description?: React.ReactNode
  roles?: Role[]
}

export default function ResumeCard({
  logoUrl, altText, title, subtitle, href, period, description, roles,
}: ResumeCardProps) {
  const [isExpanded, setIsExpanded] = React.useState(false)

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (description || roles) {
      e.preventDefault()
      setIsExpanded(!isExpanded)
    }
  }

  return (
    <Link href={href || "#"} className="block w-full cursor-pointer group" onClick={handleClick}>
      <div className="py-4">
        <div className="flex items-center">
          <Avatar className="w-11 h-11 rounded-xl flex-shrink-0">
            <AvatarImage src={logoUrl} alt={altText} className="object-contain" />
            <AvatarFallback className="rounded-xl text-xs">{altText[0]}</AvatarFallback>
          </Avatar>
          <div className="flex-grow ml-4 min-w-0">
            <div className="flex items-center justify-between gap-x-2">
              <h3 className="flex items-center font-semibold text-sm text-foreground" style={{ fontStyle: "normal" }}>
                {title}
                <ChevronRightIcon className={cn(
                  "size-3.5 ml-1 opacity-0 transition-all duration-300 ease-out group-hover:opacity-100",
                  isExpanded ? "rotate-90 opacity-100" : "rotate-0"
                )} />
              </h3>
              <span className="text-xs tabular-nums text-muted-foreground text-right flex-shrink-0">{period}</span>
            </div>
            {subtitle && <p className="text-sm text-muted-foreground mt-0.5" style={{ fontStyle: "normal" }}>{subtitle}</p>}
          </div>
        </div>
        <AnimatePresence initial={false}>
          {isExpanded && (description || roles) && (
            <motion.div
              key="content"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden mt-3 ml-[3.75rem] text-sm text-muted-foreground"
              style={{ fontStyle: "normal" }}
            >
              {description}
              {roles && (
                <ul className="mt-2 space-y-3">
                  {roles.map((role, index) => (
                    <li key={index}>
                      <div>{role.title} - <span className="text-xs">{role.period}</span></div>
                      {role.description && <div className="mt-1">{role.description}</div>}
                    </li>
                  ))}
                </ul>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Link>
  )
}
