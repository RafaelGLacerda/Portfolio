import { ArrowUpRight } from 'lucide-react'
import { GithubIcon } from '@/components/brand-icons'
import Image from 'next/image'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { Button } from '@/components/ui/button'
import { projects } from '@/lib/data'

export function Projects() {
  return (
    <section
      id="projects"
      className="scroll-mt-24 border-y border-border bg-secondary/30 py-24"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading
          eyebrow="Projects"
          title="Selected work"
          description="A few projects I've designed and built end to end. Explore the live demos or dive into the source."
        />

        <div className="mt-12 grid auto-rows-fr gap-6 md:grid-cols-2">
          {projects.map((project, i) => (
            <Reveal
              key={project.title}
              delay={(i % 2) * 100}
              className="h-full"
            >
              <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5">
                {/* Image */}
                <div className="relative flex h-72 items-center justify-center overflow-hidden border-b border-border bg-muted/40 p-4">
                  <Image
                    src={project.image || '/placeholder.svg'}
                    alt={`${project.title} project screenshot`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-contain transition-transform duration-500 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-xl font-semibold">
                    {project.title}
                  </h3>

                  <p className="mt-2 min-h-[72px] line-clamp-3 text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>

                  <ul className="mt-4 flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <li
                        key={tech}
                        className="rounded-md bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto flex flex-wrap gap-3 pt-6">
                    {project.demo && (
                      <Button asChild size="sm" className="rounded-full">
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Live Demo
                          <ArrowUpRight className="ml-1 size-4" />
                        </a>
                      </Button>
                    )}

                    <Button
                      asChild
                      size="sm"
                      variant="outline"
                      className="rounded-full"
                    >
                      <a
                        href={project.source}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <GithubIcon className="mr-1 size-4" />
                        Source Code
                      </a>
                    </Button>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}