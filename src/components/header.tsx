import Link from "next/link"
import { Button } from "@/components/ui/button"
import { AuroraText } from "@/components/magicui/aurora-text";

export default function Header() {
  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold tracking-tighter">
          <AuroraText>AD</AuroraText>
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
