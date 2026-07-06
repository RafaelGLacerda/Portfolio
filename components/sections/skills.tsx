import { Boxes, Code2, FlaskConical, Layers, Terminal } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { skillGroups } from '@/lib/data'

const icons: Record<string, React.ElementType> = {
  Frontend: Code2,
  Backend: Terminal,
  'Testing & QA': FlaskConical,
  'DevOps & Tools': Layers,
  Other: Boxes,
}

export function Skills() {
  return (
    <section
      id="skills"
      className="scroll-mt-24 border-y border-border bg-secondary/30 py-24"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading
          eyebrow="Skills"
          title="Technologies I work with"
          description="A pragmatic full-stack toolkit focused on modern, maintainable web development."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => {
            const Icon = icons[group.category] ?? Boxes
            return (
              <Reveal
                key={group.category}
                delay={i * 80}
                className="group h-full"
              >
                <div className="h-full rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5">
                  <div className="flex items-center gap-3">
                    <span className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                      <Icon className="size-5" />
                    </span>
                    <h3 className="font-display text-lg font-semibold">
                      {group.category}
                    </h3>
                  </div>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <li
                        key={skill}
                        className="rounded-lg border border-border bg-background px-3 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
