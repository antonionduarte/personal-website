import Link from "next/link"

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-md">
      <div className="mx-auto max-w-4xl px-5 py-4 flex justify-between items-center">
        <Link href="/" className="text-lg font-semibold tracking-tight text-foreground hover:text-primary active:opacity-70 transition-colors duration-200">
          António Duarte
        </Link>
        <nav>
          <ul className="flex gap-5">
            <li><Link href="/" className="text-sm text-muted-foreground hover:text-primary active:opacity-70 transition-colors duration-200">Home</Link></li>
            <li><Link href="/blog" className="text-sm text-muted-foreground hover:text-primary active:opacity-70 transition-colors duration-200">Blog</Link></li>
            <li><Link href="/cv" className="text-sm text-muted-foreground hover:text-primary active:opacity-70 transition-colors duration-200">CV</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
