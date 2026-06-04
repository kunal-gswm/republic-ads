import Link from "next/link"

const footerLinks = {
  services: [
    { href: "#services", label: "SEO" },
    { href: "#services", label: "Google Ads" },
    { href: "#services", label: "GMB Optimization" },
    { href: "#services", label: "Meta Ads" },
    { href: "#services", label: "Analytics" },
  ],
  company: [
    { href: "#", label: "About (Coming Soon)" },
    { href: "#", label: "Blog (Coming Soon)" },
    { href: "#audit-form", label: "Contact" },
  ],
  resources: [
    { href: "#results", label: "Case Studies" },
    { href: "#testimonials", label: "Testimonials" },
  ],
  legal: [
    { href: "#", label: "Privacy Policy" },
    { href: "#", label: "Terms of Service" },
    { href: "#", label: "Cookie Policy" },
  ],
}

export function Footer() {
  return (
    <footer className="py-16 lg:py-20 px-6 lg:px-8 border-t border-border">
      <div className="max-w-7xl mx-auto">
        {/* Footer Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12 mb-12 lg:mb-16">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1 mb-4 lg:mb-0">
            <Link href="/" className="font-serif text-xl font-bold tracking-tight drop-shadow-[0_2px_4px_rgba(42,38,33,0.08)] flex items-center select-none">
              <span className="text-[#A37930] select-none">Republic</span>
              <span className="text-[#73767B] select-none">Ads</span>
            </Link>
            <p className="text-sm text-foreground-muted mt-4 leading-relaxed max-w-xs">
              Performance marketing for brands ready to scale.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-medium text-foreground mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-foreground-muted hover:text-foreground transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-medium text-foreground mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-foreground-muted hover:text-foreground transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-sm font-medium text-foreground mb-4">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-foreground-muted hover:text-foreground transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-medium text-foreground mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-foreground-muted hover:text-foreground transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-foreground-muted">
            &copy; {new Date().getFullYear()} <span className="font-semibold text-primary">Republic</span><span className="font-semibold text-foreground-muted">Ads</span>. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="#" className="text-sm text-foreground-muted hover:text-foreground transition-colors duration-200">
              Twitter
            </Link>
            <Link href="#" className="text-sm text-foreground-muted hover:text-foreground transition-colors duration-200">
              LinkedIn
            </Link>
            <Link href="#" className="text-sm text-foreground-muted hover:text-foreground transition-colors duration-200">
              Instagram
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
