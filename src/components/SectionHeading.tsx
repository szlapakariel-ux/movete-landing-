interface SectionHeadingProps {
  eyebrow?: string
  title: string
  subtitle?: string
  /** Color del eyebrow/acento: lima (default) o violeta. */
  accent?: 'lime' | 'violet'
  align?: 'left' | 'center'
  tone?: 'dark' | 'light'
}

/** Encabezado de sección consistente: eyebrow + título + subtítulo. */
export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  accent = 'lime',
  align = 'center',
  tone = 'dark',
}: SectionHeadingProps) {
  const accentColor = accent === 'lime' ? 'text-lime-400' : 'text-brandviolet-400'
  const subColor = tone === 'dark' ? 'text-paper/70' : 'text-ink-700'
  const alignment = align === 'center' ? 'text-center mx-auto' : 'text-left'

  return (
    <div className={`max-w-3xl ${alignment}`}>
      {eyebrow && (
        <p
          className={`mb-3 text-sm font-semibold uppercase tracking-widest ${accentColor}`}
        >
          {eyebrow}
        </p>
      )}
      <h2 className="font-display text-3xl font-bold leading-tight sm:text-4xl md:text-[2.75rem]">
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-5 text-base leading-relaxed sm:text-lg ${subColor}`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
