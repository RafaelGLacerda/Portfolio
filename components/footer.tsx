import { ArrowUp, Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/components/brand-icons'
import { navLinks, profile } from '@/lib/data'

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/30">
      <div className="mx-auto max-w-6xl px-4 py-12 md:px-6">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row md:items-start">
          <div className="text-center md:text-left">
            <a href="#home" className="font-display text-xl font-bold tracking-tight">
              Rafael<span className="text-primary"> Lacerda</span>
            </a>
            <p className="mt-2 max-w-xs text-sm text-muted-foreground">
              Full-stack software engineer crafting modern web experiences.
            </p>
          </div>

          <nav aria-label="Footer" className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <FooterIcon href={profile.socials.github} label="GitHub">
              <GithubIcon className="size-5" />
            </FooterIcon>
            <FooterIcon href={profile.socials.linkedin} label="LinkedIn">
              <LinkedinIcon className="size-5" />
            </FooterIcon>
            <FooterIcon href={profile.socials.email} label="Email">
              <Mail className="size-5" />
            </FooterIcon>
            <a
              href="#home"
              aria-label="Back to top"
              className="flex size-10 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-primary hover:text-primary"
            >
              <ArrowUp className="size-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

function FooterIcon({
  href,
  label,
  children,
}: {
  href: string
  label: string
  children: React.ReactNode
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex size-10 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-primary hover:text-primary"
    >
      {children}
    </a>
  )
}
