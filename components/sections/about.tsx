import { GraduationCap } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { about } from '@/lib/data'

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl scroll-mt-24 px-4 py-24 md:px-6">
      <SectionHeading
        eyebrow="About me"
        title="Turning ideas into reliable software"
      />

      <div className="mt-12 grid gap-10 lg:grid-cols-[1.4fr_1fr]">
        <Reveal className="space-y-5">
          {about.paragraphs.map((p, i) => (
            <p key={i} className="text-pretty leading-relaxed text-muted-foreground">
              {p}
            </p>
          ))}

          <div className="grid grid-cols-3 gap-4 pt-4">
            {about.highlights.map((h) => (
              <div
                key={h.label}
                className="rounded-2xl border border-border bg-card p-4 text-center"
              >
                <div className="font-display text-2xl font-bold text-primary sm:text-3xl">
                  {h.value}
                </div>
                <div className="mt-1 text-xs text-muted-foreground sm:text-sm">
                  {h.label}
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="glass rounded-2xl p-6">
            <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              <GraduationCap className="size-4 text-primary" />
              Education
            </div>
            <ul className="mt-5 space-y-5">
              {about.education.map((e) => (
                <li key={e.degree} className="relative pl-5">
                  <span className="absolute left-0 top-2 size-2 rounded-full bg-primary" />
                  <p className="font-semibold leading-tight">{e.degree}</p>
                  <p className="text-sm text-muted-foreground">{e.school}</p>
                  <p className="mt-0.5 text-xs font-medium text-primary">{e.period}</p>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
