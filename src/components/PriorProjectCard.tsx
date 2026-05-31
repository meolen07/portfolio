import type { PriorProject } from '../types'

interface PriorProjectCardProps {
  project: PriorProject
}

export function PriorProjectCard({ project }: PriorProjectCardProps) {
  return (
    <article className="rounded-lg border border-stone-200 bg-stone-50/60 p-3.5 dark:border-stone-800 dark:bg-stone-900/40">
      <h3 className="text-sm font-medium text-stone-900 dark:text-stone-100">
        {project.title}
      </h3>

      {project.tags && project.tags.length > 0 ? (
        <div className="mt-2 flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-stone-200/80 px-2 py-0.5 text-[11px] font-medium text-stone-600 dark:bg-stone-800 dark:text-stone-400"
            >
              {tag}
            </span>
          ))}
        </div>
      ) : null}

      <p className="mt-2 text-xs leading-relaxed text-stone-600 dark:text-stone-400">
        {project.summary}
      </p>

      {project.highlights && project.highlights.length > 0 ? (
        <ul className="mt-2 space-y-1 text-xs text-stone-600 dark:text-stone-400">
          {project.highlights.map((highlight) => (
            <li key={highlight} className="flex gap-1.5">
              <span
                aria-hidden="true"
                className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-stone-400"
              />
              <span>{highlight}</span>
            </li>
          ))}
        </ul>
      ) : null}

      <div className="mt-2.5 flex flex-wrap gap-2.5">
        {project.links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-medium text-indigo-600 transition-colors hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-300"
          >
            {link.label}
          </a>
        ))}
      </div>
    </article>
  )
}
