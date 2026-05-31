import { siteConfig } from '../data/site'

export function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="border-t border-stone-200/80 py-16 dark:border-stone-800/80 sm:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2
          id="contact-heading"
          className="text-2xl font-semibold tracking-tight text-stone-900 sm:text-3xl dark:text-stone-50"
        >
          Contact
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-stone-600 dark:text-stone-400">
          {siteConfig.contactText}
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href={`mailto:${siteConfig.email}`}
            className="inline-flex items-center rounded-xl bg-indigo-600 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-indigo-700"
          >
            Email
          </a>
          <a
            href={siteConfig.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-xl border border-stone-300 bg-white px-4 py-2.5 text-sm font-medium text-stone-800 transition-colors hover:border-indigo-300 hover:text-indigo-700 dark:border-stone-700 dark:bg-stone-900 dark:text-stone-100 dark:hover:border-indigo-500 dark:hover:text-indigo-400"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  )
}
