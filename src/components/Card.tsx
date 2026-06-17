import type { LucideIcon } from 'lucide-react'
import { Check } from 'lucide-react'

interface CardProps {
  icon?: LucideIcon
  title: string
  description: string
  bullets?: string[]
  /** Acento del ícono y de los bullets. */
  accent?: 'lime' | 'violet'
  tone?: 'dark' | 'light'
}

/** Tarjeta comercial reutilizable: ícono + título + descripción + bullets (máx 3). */
export function Card({
  icon: Icon,
  title,
  description,
  bullets,
  accent = 'lime',
  tone = 'dark',
}: CardProps) {
  const isLime = accent === 'lime'
  const iconWrap = isLime
    ? 'bg-lime-500/15 text-lime-400'
    : 'bg-brandviolet-500/15 text-brandviolet-400'
  const bulletColor = isLime ? 'text-lime-400' : 'text-brandviolet-400'

  const surface =
    tone === 'dark'
      ? 'bg-ink-700/60 border-white/10 hover:border-lime-500/40'
      : 'bg-white border-ink-900/10 hover:border-brandviolet-500/40'
  const titleColor = tone === 'dark' ? 'text-paper' : 'text-ink-900'
  const descColor = tone === 'dark' ? 'text-paper/65' : 'text-ink-700'

  return (
    <article
      className={`group flex h-full flex-col rounded-3xl border p-6 shadow-card transition-all duration-200 hover:-translate-y-1 sm:p-7 ${surface}`}
    >
      {Icon && (
        <span
          className={`mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl ${iconWrap}`}
          aria-hidden="true"
        >
          <Icon className="h-6 w-6" strokeWidth={2} />
        </span>
      )}
      <h3 className={`text-lg font-bold ${titleColor}`}>{title}</h3>
      <p className={`mt-2 text-sm leading-relaxed ${descColor}`}>{description}</p>
      {bullets && bullets.length > 0 && (
        <ul className="mt-5 space-y-2 border-t border-white/5 pt-5">
          {bullets.map((b) => (
            <li
              key={b}
              className={`flex items-start gap-2 text-sm ${
                tone === 'dark' ? 'text-paper/80' : 'text-ink-700'
              }`}
            >
              <Check className={`mt-0.5 h-4 w-4 shrink-0 ${bulletColor}`} strokeWidth={3} />
              <span>{b}</span>
            </li>
          ))}
        </ul>
      )}
    </article>
  )
}
