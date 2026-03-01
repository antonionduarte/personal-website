import { Github, Linkedin, Twitter } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="border-t border-border/40">
      <div className="mx-auto max-w-4xl px-5 py-8 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} António Nunes Duarte</p>
        <div className="flex gap-4">
          <Link href="https://github.com/antonionduarte" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-muted-foreground hover:text-primary active:scale-90 transition-all duration-200"><Github className="h-5 w-5" /></Link>
          <Link href="https://linkedin.com/in/antonionduarte" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-muted-foreground hover:text-primary active:scale-90 transition-all duration-200"><Linkedin className="h-5 w-5" /></Link>
          <Link href="https://x.com/antonionduarte" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)" className="text-muted-foreground hover:text-primary active:scale-90 transition-all duration-200"><Twitter className="h-5 w-5" /></Link>
        </div>
      </div>
    </footer>
  )
}
