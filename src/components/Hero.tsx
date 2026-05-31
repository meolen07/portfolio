import { siteConfig } from '../data/site'

const externalLinkProps = {
  target: '_blank' as const,
  rel: 'noopener noreferrer',
}

export function Hero() {
  return (
    <section
      id="hero"
      className="border-b border-stone-200/80 bg-gradient-to-b from-indigo-50/50 to-stone-50 pt-28 pb-16 dark:border-stone-800/80 dark:from-indigo-950/20 dark:to-stone-950 sm:pt-32 sm:pb-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="mb-4 inline-flex rounded-full border border-indigo-200 bg-white/80 px-3 py-1 text-xs font-medium text-indigo-700 dark:border-indigo-800 dark:bg-stone-900/80 dark:text-indigo-300">
          {siteConfig.badge}
        </p>

        <h1 className="max-w-3xl text-3xl font-semibold tracking-tight text-stone-900 sm:text-4xl lg:text-5xl dark:text-stone-50">
          {siteConfig.name}
        </h1>

        <p className="mt-4 max-w-2xl text-lg font-medium text-stone-800 dark:text-stone-200">
          {siteConfig.headline}
        </p>

        <p className="mt-4 max-w-3xl text-base leading-relaxed text-stone-600 dark:text-stone-400">
          {siteConfig.subheadline}
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={siteConfig.github}
            {...externalLinkProps}
            className="inline-flex items-center rounded-xl bg-indigo-600 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-indigo-700"
          >
            GitHub
          </a>
          {/* Place resume.pdf in the public/ folder so this link works after deployment. */}
          <a
            href={siteConfig.resumePath}
            className="inline-flex items-center rounded-xl border border-stone-300 bg-white px-4 py-2.5 text-sm font-medium text-stone-800 transition-colors hover:border-indigo-300 hover:text-indigo-700 dark:border-stone-700 dark:bg-stone-900 dark:text-stone-100 dark:hover:border-indigo-500 dark:hover:text-indigo-400"
          >
            Resume
          </a>
          <a
            href={`mailto:${siteConfig.email}`}
            className="inline-flex items-center rounded-xl border border-stone-300 bg-white px-4 py-2.5 text-sm font-medium text-stone-800 transition-colors hover:border-indigo-300 hover:text-indigo-700 dark:border-stone-700 dark:bg-stone-900 dark:text-stone-100 dark:hover:border-indigo-500 dark:hover:text-indigo-400"
          >
            Email
          </a>
        </div>
      </div>
    </section>
  )
}
