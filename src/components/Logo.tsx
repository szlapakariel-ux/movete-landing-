interface LogoProps {
  /** Tamaño aproximado en píxeles del alto. */
  className?: string
  tone?: 'light' | 'dark'
}

/**
 * Logo de Movete (placeholder tipográfico, estilo dinámico).
 * -------------------------------------------------------------
 * Reemplazá este componente por el SVG/imagen real de la marca
 * cuando lo tengas. Mantené el `aria-label` para accesibilidad.
 */
export function Logo({ className = 'h-8', tone = 'light' }: LogoProps) {
  const textColor = tone === 'light' ? 'text-paper' : 'text-ink-900'
  return (
    <span
      className={`inline-flex items-center gap-1 font-display text-2xl font-extrabold tracking-tight ${textColor} ${className}`}
      aria-label="Movete"
      role="img"
    >
      <svg
        viewBox="0 0 32 32"
        className="h-7 w-7"
        fill="none"
        aria-hidden="true"
      >
        <rect width="32" height="32" rx="9" fill="#0B0B0F" />
        <path
          d="M7 23V11l5 7 5-7v12"
          stroke="#C6F042"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M20 23V11h6"
          stroke="#8B5CF6"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span className="-skew-x-6">
        Move<span className="text-lime-400">te</span>
      </span>
    </span>
  )
}
