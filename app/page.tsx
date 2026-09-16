import { Navbar } from '@/components/portfolio/navbar'
import { Hero } from '@/components/portfolio/hero'
import { About } from '@/components/portfolio/about'
import { Skills } from '@/components/portfolio/skills'
import { Projects } from '@/components/portfolio/projects'
import { Experience } from '@/components/portfolio/experience'
import { Education } from '@/components/portfolio/education'
import { Certifications } from '@/components/portfolio/certifications'
import { Leadership } from '@/components/portfolio/leadership'
import { Resume } from '@/components/portfolio/resume'
import { Contact } from '@/components/portfolio/contact'
import { Footer } from '@/components/portfolio/footer'
import { ScrollProgress } from '@/components/portfolio/scroll-progress'
import { AmbientBackground } from '@/components/portfolio/ambient-background'
import { BackToTop } from '@/components/portfolio/back-to-top'
import { SmoothScroll } from '@/components/portfolio/smooth-scroll'

export default function Page() {
  return (
    <SmoothScroll>
      <ScrollProgress />
      <AmbientBackground />
      <Navbar />
      <main className="relative z-10 w-full max-w-[100vw] overflow-x-clip">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Certifications />
        <Leadership />
        <Resume />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </SmoothScroll>
  )
}
