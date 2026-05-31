import type { PriorProject } from '../types'

interface PriorProjectCardProps {
  project: PriorProject
}

export function PriorProjectCard({ project }: PriorProjectCardProps) {
  return (
    <article className="rounded-xl border border-stone-200 bg-stone-50/80 p-4 dark:border-stone-800 dark:bg-stone-900/50">
      <h3 className="text-base font-medium text-stone-900 dark:text-stone-100">
        {project.title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-stone-600 dark:text-stone-400">
        {project.summary}
      </p>
      <div className="mt-3 flex flex-wrap gap-3">
        {project.links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-indigo-600 transition-colors hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-300"
          >
            {link.label}
          </a>
        ))}
      </div>
    </article>
  )
}
