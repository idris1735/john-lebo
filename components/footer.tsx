import Link from "next/link"

const footerLinks = {
  about: [
    { label: "About John Gaul", href: "#about" },
    { label: "Development Plan", href: "#vision" },
    { label: "Experience", href: "#experience" },
    { label: "Track Record", href: "#track-record" },
  ],
  engage: [
    { label: "Leadership Philosophy", href: "#philosophy" },
    { label: "Photo Gallery", href: "#gallery" },
    { label: "Get Involved", href: "#get-involved" },
    { label: "Become a Volunteer", href: "#volunteer-form" },
    { label: "Community Feedback", href: "#contact" },
  ],
  resources: [
    { label: "The 7 Pillars", href: "#vision" },
    { label: "Global Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ],
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-background py-16 lg:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-16 grid gap-12 md:grid-cols-2 lg:grid-cols-5 lg:gap-8">
          <div className="lg:col-span-2">
            <Link href="#top" className="mb-6 flex items-center gap-2">
              <span className="font-serif text-xl font-medium text-foreground">JGL</span>
            </Link>
            <p className="mb-6 max-w-sm leading-relaxed text-muted-foreground">
              Rt. Hon. Barr. John Gaul Lebo - Candidate for House of Representatives, Abi/Yakurr Federal Constituency
              2027.
            </p>
            <div className="space-y-3 text-sm text-muted-foreground">
              <p className="font-semibold text-foreground">Campaign Office</p>
              <p>
                Abi/Yakurr Federal Constituency Campaign Secretariat
                <br />
                Cross River State, Nigeria
              </p>
            </div>
          </div>

          <div>
            <h4 className="mb-4 font-medium text-foreground">About</h4>
            <ul className="space-y-3">
              {footerLinks.about.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-medium text-foreground">Engage</h4>
            <ul className="space-y-3">
              {footerLinks.engage.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-medium text-foreground">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
          <p className="text-sm text-muted-foreground">
            © 2027 John Gaul Lebo Campaign. Abi/Yakurr Federal Constituency, Cross River State, Nigeria.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <Link href="#about" className="transition-colors hover:text-foreground">
              Service
            </Link>
            <Link href="#vision" className="transition-colors hover:text-foreground">
              Vision
            </Link>
            <Link href="#track-record" className="transition-colors hover:text-foreground">
              Results
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
