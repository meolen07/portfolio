import type { Project, ProjectStatus } from '../types'

interface ProjectCardProps {
  project: Project
  featured?: boolean
}

const statusStyles: Record<ProjectStatus, string> = {
  'In Progress':
    'border-amber-200 bg-amber-50 text-amber-800 dark:border-amber-800/60 dark:bg-amber-950/40 dark:text-amber-300',
  Planned:
    'border-violet-200 bg-violet-50 text-violet-800 dark:border-violet-800/60 dark:bg-violet-950/40 dark:text-violet-300',
  'Learning Project':
    'border-sky-200 bg-sky-50 text-sky-800 dark:border-sky-800/60 dark:bg-sky-950/40 dark:text-sky-300',
}

export function ProjectCard({ project, featured = false }: ProjectCardProps) {
  return (
    <article
      className={`flex h-full flex-col rounded-2xl border border-stone-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md dark:border-stone-800 dark:bg-stone-900 ${
        featured ? 'sm:p-7' : 'p-5'
      }`}
    >
      <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
        <h3
          className={`font-semibold text-stone-900 dark:text-stone-50 ${
            featured ? 'text-xl' : 'text-lg'
          }`}
        >
          {project.title}
        </h3>
        <span
          className={`shrink-0 rounded-full border px-2.5 py-1 text-xs font-medium ${statusStyles[project.status]}`}
        >
          {project.status}
        </span>
      </div>

      <div className="mb-4 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-indigo-50 px-2.5 py-1 text-xs font-medium text-indigo-700 dark:bg-indigo-950/50 dark:text-indigo-300"
          >
            {tag}
          </span>
        ))}
      </div>

      <p className="mb-4 text-sm leading-relaxed text-stone-600 dark:text-stone-400">
        {project.summary}
      </p>

      <div className="mb-5 flex-1">
        <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-stone-500 dark:text-stone-400">
          {project.status === 'Planned' ? 'Planned Highlights' : 'Current Highlights'}
        </p>
        <ul className="space-y-2 text-sm text-stone-700 dark:text-stone-300">
          {project.highlights.map((highlight) => (
            <li key={highlight} className="flex gap-2">
              <span
                aria-hidden="true"
                className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-500"
              />
              <span>{highlight}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-wrap gap-3 border-t border-stone-100 pt-4 dark:border-stone-800">
        {project.links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-indigo-600 transition-colors hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-300"
          >
            {link.label} →
          </a>
        ))}
      </div>
    </article>
  )
}
