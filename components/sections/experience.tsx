import { Briefcase, Check } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { experiences } from '@/lib/data'

export function Experience() {
  return (
    <section
      id="experience"
      className="mx-auto max-w-6xl scroll-mt-24 px-4 py-24 md:px-6"
    >
      <SectionHeading
        eyebrow="Experience"
        title="Where I've worked"
        description="Professional experience building and maintaining production software."
      />

      <div className="mt-12 space-y-6">
        {experiences.map((exp, i) => (
          <Reveal key={exp.company} delay={i * 100}>
            <article className="relative rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/40 sm:p-8">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex items-start gap-4">
                  <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Briefcase className="size-6" />
                  </span>
                  <div>
                    <h3 className="font-display text-xl font-semibold">
                      {exp.role}
                    </h3>
                    <p className="font-medium text-primary">{exp.company}</p>
                    <p className="text-sm text-muted-foreground">{exp.location}</p>
                  </div>
                </div>
                <span className="inline-flex h-fit shrink-0 rounded-full border border-border bg-secondary px-3 py-1 text-sm font-medium text-muted-foreground">
                  {exp.period}
                </span>
              </div>

              <p className="mt-5 text-pretty leading-relaxed text-muted-foreground">
                {exp.description}
              </p>

              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {exp.achievements.map((a) => (
                  <li key={a} className="flex items-start gap-2.5 text-sm">
                    <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                    <span className="text-muted-foreground">{a}</span>
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
