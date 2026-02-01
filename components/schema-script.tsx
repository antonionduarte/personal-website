"use client";

import Script from "next/script";

export default function SchemaScript() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "António Duarte",
    "jobTitle": "Software Engineer",
    "worksFor": {
      "@type": "Organization",
      "name": "Paddle"
    },
    "url": "https://antonionduarte.dev",
    "sameAs": [
      "https://www.linkedin.com/in/antonionduarte",
      "https://github.com/antonionduarte"
    ]
  };

  return (
    <Script
      id="structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}