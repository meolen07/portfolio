import type { Interest } from '../types'

interface InterestCardProps {
  interest: Interest
}

export function InterestCard({ interest }: InterestCardProps) {
  return (
    <article className="rounded-2xl border border-stone-200 bg-white p-5 transition-colors hover:border-indigo-200 dark:border-stone-800 dark:bg-stone-900 dark:hover:border-indigo-800/60">
      <h3 className="text-base font-semibold text-stone-900 dark:text-stone-50">
        {interest.title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-stone-600 dark:text-stone-400">
        {interest.description}
      </p>
    </article>
  )
}
