import type { ReactNode } from 'react'

type Tone = 'dark' | 'darker' | 'light'

interface SectionProps {
  id?: string
  tone?: Tone
  className?: string
  children: ReactNode
  ariaLabel?: string
}

const toneStyles: Record<Tone, string> = {
  dark: 'bg-ink-800 text-paper',
  darker: 'bg-ink-900 text-paper',
  light: 'bg-paper text-ink-900',
}

/**
 * Wrapper de sección reutilizable.
 * - `tone` alterna fondos oscuros/claros para diferenciar bloques.
 * - `id` permite el scroll por anclas desde la navegación.
 */
export function Section({
  id,
  tone = 'darker',
  className = '',
  children,
  ariaLabel,
}: SectionProps) {
  return (
    <section
      id={id}
      aria-label={ariaLabel}
      className={`scroll-mt-20 py-20 sm:py-28 ${toneStyles[tone]} ${className}`}
    >
      <div className="container-mv">{children}</div>
    </section>
  )
}
