import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'
import { About } from '@/components/sections/about'
import { Experience } from '@/components/sections/experience'
import { Hero } from '@/components/sections/hero'
import { Projects } from '@/components/sections/projects'
import { Skills } from '@/components/sections/skills'

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
      </main>
      <Footer />
    </>
  )
}
