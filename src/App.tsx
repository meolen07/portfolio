import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { InterestCard } from './components/InterestCard'
import { Navbar } from './components/Navbar'
import { PriorProjectCard } from './components/PriorProjectCard'
import { ProjectCard } from './components/ProjectCard'
import { SectionHeading } from './components/SectionHeading'
import { SkillGroup } from './components/SkillGroup'
import { interests } from './data/interests'
import { priorProjects, rlProjects } from './data/projects'
import { siteConfig } from './data/site'
import { skillGroups } from './data/skills'

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />

        <section
          id="about"
          aria-labelledby="about-heading"
          className="py-16 sm:py-20"
        >
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <SectionHeading id="about-heading" title="About" />
            <p className="max-w-3xl text-base leading-relaxed text-stone-700 dark:text-stone-300">
              {siteConfig.about}
            </p>
          </div>
        </section>

        <section
          id="rl-projects"
          aria-labelledby="rl-projects-heading"
          className="border-y border-stone-200/80 bg-white py-16 dark:border-stone-800/80 dark:bg-stone-900/30 sm:py-20"
        >
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <SectionHeading
              id="rl-projects-heading"
              title="RL Projects"
              subtitle="Learning-focused reinforcement learning work in progress and planned research directions."
            />
            <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
              {rlProjects.map((project) => (
                <ProjectCard key={project.id} project={project} featured />
              ))}
            </div>

            <div className="mt-14 border-t border-stone-200 pt-10 dark:border-stone-800">
              <SectionHeading
                title="Prior Machine Learning Projects"
                subtitle="Earlier ML engineering projects, included here as secondary background experience."
                className="mb-6"
              />
              <div className="grid gap-4 md:grid-cols-2">
                {priorProjects.map((project) => (
                  <PriorProjectCard key={project.id} project={project} />
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          id="research-interests"
          aria-labelledby="research-interests-heading"
          className="py-16 sm:py-20"
        >
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <SectionHeading
              id="research-interests-heading"
              title="Research Interests"
            />
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {interests.map((interest) => (
                <InterestCard key={interest.id} interest={interest} />
              ))}
            </div>
          </div>
        </section>

        <section
          id="skills"
          aria-labelledby="skills-heading"
          className="border-y border-stone-200/80 bg-white py-16 dark:border-stone-800/80 dark:bg-stone-900/30 sm:py-20"
        >
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <SectionHeading id="skills-heading" title="Skills" />
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {skillGroups.map((group) => (
                <SkillGroup key={group.id} group={group} />
              ))}
            </div>
          </div>
        </section>

        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
