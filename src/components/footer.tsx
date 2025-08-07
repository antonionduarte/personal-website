import { Github, Linkedin, Twitter } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="mx-auto max-w-6xl px-4 py-6 flex flex-col sm:flex-row justify-between items-center">
        <p className="text-sm text-muted-foreground">© 2025 António Nunes Duarte. All rights reserved.</p>
        <div className="flex space-x-4 mt-4 sm:mt-0">
          <Link
            href="https://github.com/antonionduarte"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Github className="h-5 w-5" />
          </Link>
          <Link
            href="https://linkedin.com/in/antonionduarte"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Linkedin className="h-5 w-5" />
          </Link>
          <Link
            href="https://x.com/antonionduarte"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Twitter className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </footer>
  )
}