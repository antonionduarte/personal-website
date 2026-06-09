"use client"

import { Download } from "lucide-react"

/**
 * A discrete inline link (styled to match the contact row) that triggers the
 * browser's print-to-PDF flow. On print, the on-screen UI is hidden and the
 * single-column <CvDocument /> is revealed (see globals.css @media print), so
 * "Save as PDF" produces a clean, ATS-friendly document. The document title is
 * set temporarily so the suggested file name is sensible.
 */
export default function DownloadButton() {
  const handleDownload = () => {
    const previousTitle = document.title
    document.title = "António Duarte - CV"

    const restore = () => {
      document.title = previousTitle
      window.removeEventListener("afterprint", restore)
    }
    window.addEventListener("afterprint", restore)

    window.print()
  }

  return (
    <button
      type="button"
      onClick={handleDownload}
      aria-label="Download CV as PDF"
      className="flex items-center gap-1.5 hover:text-primary active:opacity-70 focus-visible:outline-none focus-visible:text-primary transition-colors duration-300"
    >
      <Download className="h-3.5 w-3.5" /> Download PDF
    </button>
  )
}
