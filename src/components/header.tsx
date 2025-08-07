import Link from "next/link"
import { Button } from "@/components/ui/button"
import { AuroraText } from "@/components/magicui/aurora-text";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/60 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto max-w-6xl px-4 py-3 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold tracking-tighter inline-flex items-center rounded-md px-2 py-1 bg-background/50 backdrop-blur overflow-hidden isolate supports-[backdrop-filter]:bg-background/50">
          <AuroraText className="relative z-10" disableEffects>
            AD
          </AuroraText>
        </Link>
        <nav>
          <ul className="flex space-x-2">
            <li>
              <Button variant="ghost" asChild>
                <Link href="/">Home</Link>
              </Button>
            </li>
            <li>
              <Button variant="ghost" asChild>
                <Link href="/blog">Blog</Link>
              </Button>
            </li>
            <li>
              <Button variant="ghost" asChild>
                <Link href="/cv">CV</Link>
              </Button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
