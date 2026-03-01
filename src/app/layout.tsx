import "./globals.css"
import { Nunito_Sans, Fraunces } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header"
import Footer from "@/components/footer"
import type React from "react"
import type { Metadata } from "next"

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  variable: "--font-body",
})

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-heading",
})

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "António Duarte",
  jobTitle: "Software Engineer",
  description: "Software Engineer specialized in Distributed Systems and Parallel Computing.",
  image: "https://antonionduarte.dev/profile.jpeg",
  url: "https://antonionduarte.dev",
  worksFor: {
    "@type": "Organization",
    name: "Paddle",
    url: "https://www.paddle.com",
  },
  alumniOf: [
    {
      "@type": "CollegeOrUniversity",
      name: "NOVA School of Science and Technology (SST-UNL)",
      url: "https://www.fct.unl.pt",
    },
    {
      "@type": "CollegeOrUniversity",
      name: "TU Dresden",
      url: "https://tu-dresden.de",
    },
  ],
  knowsAbout: [
    "Distributed Systems",
    "Parallel Computing",
    "Algorithm Design",
    "Rust",
    "Python",
    "Go",
    "TypeScript",
    "Kubernetes",
    "PostgreSQL",
    "Microservices",
  ],
  sameAs: [
    "https://www.linkedin.com/in/antonionduarte",
    "https://github.com/antonionduarte",
    "https://x.com/antonionduarte",
  ],
}

export const metadata: Metadata = {
  title: {
    default: "António Duarte - Software Engineer, Distributed Systems",
    template: "%s - António Duarte",
  },
  description:
    "Software Engineer @ Paddle specialized in Distributed Systems and Parallel Computing.",
  metadataBase: new URL("https://antonionduarte.dev"),
  alternates: { canonical: "/" },
  openGraph: {
    title: "António Duarte - Software Engineer, Distributed Systems",
    description: "Software Engineer @ Paddle | Distributed and Parallel Systems.",
    url: "https://antonionduarte.dev",
    type: "profile",
    firstName: "António",
    lastName: "Duarte",
    username: "antonionduarte",
    gender: "male",
  },
  twitter: {
    card: "summary_large_image",
    title: "António Duarte - Software Engineer, Distributed Systems",
    description: "Software Engineer @ Paddle | Distributed and Parallel Systems.",
    site: "@antonionduarte",
  },
  robots: {
    index: true, follow: true,
    googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 },
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${nunitoSans.variable} ${fraunces.variable} ${nunitoSans.className}`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">
              <div className="mx-auto max-w-4xl px-5">{children}</div>
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
