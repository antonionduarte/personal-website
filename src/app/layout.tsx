import "./globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header"
import Footer from "@/components/footer"
import type React from "react" 
import SchemaScript from "@/components/schema-script"

const inter = Inter({ subsets: ["latin"] })

// app/layout.js
export const metadata = {
  title: "António Duarte",
  description:
    "Software Engineer @ Paddle | Distributed and Parallel Systems. Software Engineer specialized in Distributed Systems and Parallel Computing.",
  metadataBase: new URL("https://antonionduarte.dev"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "António Duarte",
    description:
      "Software Engineer @ Paddle | Distributed and Parallel Systems. Software Engineer specialized in Distributed Systems and Parallel Computing.",
    url: "https://antonionduarte.dev",
    type: "profile",
    profile: {
      firstName: "António",
      lastName: "Duarte",
      username: "antonionduarte",
      gender: "male",
    },
  },
  twitter: {
    card: "summary_large_image",
    title: "António Duarte",
    description:
      "Software Engineer @ Paddle | Distributed and Parallel Systems. Software Engineer specialized in Distributed Systems and Parallel Computing.",
    site: "@antonionduarte",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <SchemaScript />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
