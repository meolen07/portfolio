import type { SkillGroupData } from '../types'

interface SkillGroupProps {
  group: SkillGroupData
}

export function SkillGroup({ group }: SkillGroupProps) {
  return (
    <article className="rounded-2xl border border-stone-200 bg-white p-5 dark:border-stone-800 dark:bg-stone-900">
      <div className="mb-3 flex flex-wrap items-center gap-2">
        <h3 className="text-base font-semibold text-stone-900 dark:text-stone-50">
          {group.title}
        </h3>
        {group.note ? (
          <span className="rounded-full border border-indigo-200 bg-indigo-50 px-2 py-0.5 text-xs font-medium text-indigo-700 dark:border-indigo-800 dark:bg-indigo-950/40 dark:text-indigo-300">
            {group.note}
          </span>
        ) : null}
      </div>
      <ul className="flex flex-wrap gap-2">
        {group.skills.map((skill) => (
          <li
            key={skill}
            className="rounded-lg border border-stone-200 bg-stone-50 px-2.5 py-1 text-sm text-stone-700 dark:border-stone-700 dark:bg-stone-950 dark:text-stone-300"
          >
            {skill}
          </li>
        ))}
      </ul>
    </article>
  )
}
