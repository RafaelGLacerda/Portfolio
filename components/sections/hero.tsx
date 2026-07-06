import { ArrowDown, Download, Mail, MapPin } from 'lucide-react'
import Image from 'next/image'
import { GithubIcon, LinkedinIcon } from '@/components/brand-icons'
import { Button } from '@/components/ui/button'
import { profile } from '@/lib/data'

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-svh items-center overflow-hidden pt-28 pb-16"
    >
      {/* background accents */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 left-1/4 size-[32rem] rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute -bottom-32 right-1/5 size-[28rem] rounded-full bg-accent/15 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.15] dark:opacity-[0.08]"
          style={{
            backgroundImage:
              'linear-gradient(to right, var(--border) 1px, transparent 1px), linear-gradient(to bottom, var(--border) 1px, transparent 1px)',
            backgroundSize: '56px 56px',
            maskImage:
              'radial-gradient(ellipse 70% 60% at 50% 40%, black, transparent)',
          }}
        />
      </div>

      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-4 md:grid-cols-[1.1fr_0.9fr] md:gap-8 md:px-6">
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3.5 py-1.5 text-sm font-medium text-muted-foreground backdrop-blur">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-primary" />
            </span>
            Available for new opportunities
          </span>

          <h1 className="mt-6 text-pretty font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl">
            Hi, I&apos;m {profile.name.split(' ')[0]}
            <span className="mt-2 block gradient-text">{profile.name.split(' ')[1]}</span>
          </h1>

          <p className="mt-4 flex items-center gap-2 text-lg font-medium text-foreground/90">
            {profile.role}
          </p>

          <p className="mt-5 max-w-xl text-pretty leading-relaxed text-muted-foreground">
            {profile.intro}
          </p>

          <p className="mt-4 inline-flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="size-4 text-primary" />
            {profile.location}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button asChild size="lg" className="rounded-full">
              <a href="#projects">View my work</a>
            </Button>
          </div>

          <div className="mt-8 flex items-center gap-2">
            <SocialIcon href={profile.socials.github} label="GitHub">
              <GithubIcon className="size-5" />
            </SocialIcon>
            <SocialIcon href={profile.socials.linkedin} label="LinkedIn">
              <LinkedinIcon className="size-5" />
            </SocialIcon>
            <SocialIcon href={profile.socials.email} label="Email">
              <Mail className="size-5" />
            </SocialIcon>
          </div>
        </div>

        {/* Photo */}
        <div className="animate-fade-up justify-self-center [animation-delay:120ms] md:justify-self-end">
          <div className="animate-float relative">
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-tr from-primary/40 to-accent/30 blur-2xl" />
            <div className="glass-strong relative rounded-[1.75rem] p-2 shadow-2xl">
              <div className="relative aspect-[4/5] w-64 overflow-hidden rounded-[1.35rem] sm:w-72">
                <Image
                  src={profile.photo || '/placeholder.svg'}
                  alt={`Portrait of ${profile.name}`}
                  fill
                  priority
                  sizes="(max-width: 768px) 16rem, 18rem"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to About section"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 text-muted-foreground transition-colors hover:text-foreground md:block"
      >
        <ArrowDown className="size-5 animate-bounce" />
      </a>
    </section>
  )
}

function SocialIcon({
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
      className="flex size-10 items-center justify-center rounded-full border border-border bg-card/50 text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-primary hover:text-primary"
    >
      {children}
    </a>
  )
}
