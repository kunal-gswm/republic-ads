export function JsonLd() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://republicads.in/#organization",
        "name": "RepublicAds",
        "url": "https://republicads.in",
        "logo": "https://republicads.in/icon.png",
        "sameAs": [
          "https://twitter.com/republicads",
          "https://linkedin.com/company/republicads",
          "https://instagram.com/republicads"
        ]
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://republicads.in/#localbusiness",
        "name": "RepublicAds Performance Marketing",
        "url": "https://republicads.in",
        "telephone": "+91-9876543210",
        "priceRange": "$$",
        "image": "https://republicads.in/icon.png",
        "description": "Performance marketing agency helping Delhi NCR businesses scale with SEO, Google Ads, and Meta Ads."
      },
      {
        "@type": "Service",
        "name": "SEO Optimization",
        "provider": {
          "@id": "https://republicads.in/#organization"
        }
      },
      {
        "@type": "Service",
        "name": "Google My Business (GMB) Optimization",
        "provider": {
          "@id": "https://republicads.in/#organization"
        }
      },
      {
        "@type": "Service",
        "name": "Google Ads Management",
        "provider": {
          "@id": "https://republicads.in/#organization"
        }
      }
    ]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}
