interface SectionHeadingProps {
  id?: string
  title: string
  subtitle?: string
  className?: string
}

export function SectionHeading({
  id,
  title,
  subtitle,
  className = '',
}: SectionHeadingProps) {
  return (
    <div className={`mb-8 sm:mb-10 ${className}`}>
      {id ? (
        <h2
          id={id}
          className="text-2xl font-semibold tracking-tight text-stone-900 sm:text-3xl dark:text-stone-50"
        >
          {title}
        </h2>
      ) : (
        <h2 className="text-2xl font-semibold tracking-tight text-stone-900 sm:text-3xl dark:text-stone-50">
          {title}
        </h2>
      )}
      {subtitle ? (
        <p className="mt-3 max-w-3xl text-base leading-relaxed text-stone-600 dark:text-stone-400">
          {subtitle}
        </p>
      ) : null}
    </div>
  )
}
