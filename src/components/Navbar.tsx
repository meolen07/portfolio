import { navLinks, siteConfig } from '../data/site'
import { useTheme } from '../hooks/useTheme'

export function Navbar() {
  const { theme, toggleTheme } = useTheme()

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-stone-200/80 bg-stone-50/90 backdrop-blur-md dark:border-stone-800/80 dark:bg-stone-950/90">
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6"
      >
        <a
          href="#hero"
          className="shrink-0 text-sm font-semibold tracking-tight text-stone-900 transition-colors hover:text-indigo-600 dark:text-stone-100 dark:hover:text-indigo-400"
        >
          <span className="hidden sm:inline">{siteConfig.name}</span>
          <span className="sm:hidden">{siteConfig.initials}</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="rounded-lg px-3 py-2 text-sm text-stone-600 transition-colors hover:bg-stone-100 hover:text-indigo-600 dark:text-stone-300 dark:hover:bg-stone-900 dark:hover:text-indigo-400"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          className="rounded-lg border border-stone-200 bg-white px-3 py-2 text-sm font-medium text-stone-700 transition-colors hover:border-indigo-300 hover:text-indigo-600 dark:border-stone-700 dark:bg-stone-900 dark:text-stone-200 dark:hover:border-indigo-500 dark:hover:text-indigo-400"
        >
          {theme === 'dark' ? 'Light' : 'Dark'}
        </button>
      </nav>

      <div className="border-t border-stone-200/80 px-4 py-2 md:hidden dark:border-stone-800/80">
        <ul className="flex flex-wrap items-center justify-center gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="rounded-lg px-2.5 py-1.5 text-xs text-stone-600 transition-colors hover:text-indigo-600 dark:text-stone-300 dark:hover:text-indigo-400"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}
