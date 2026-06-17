import { Check, Building2, Smartphone } from 'lucide-react'
import { Section } from '../components/Section'
import { SectionHeading } from '../components/SectionHeading'
import { BENEFICIOS } from '../content/landing'

export function Beneficios() {
  const columns = [
    { ...BENEFICIOS.gym, icon: Building2, accent: 'lime' as const },
    { ...BENEFICIOS.member, icon: Smartphone, accent: 'violet' as const },
  ]

  return (
    <Section id="beneficios" tone="darker" ariaLabel="Beneficios de Movete">
      <SectionHeading eyebrow={BENEFICIOS.eyebrow} title={BENEFICIOS.title} />

      <div className="mt-14 grid gap-6 lg:grid-cols-2">
        {columns.map((col) => {
          const isLime = col.accent === 'lime'
          const Icon = col.icon
          return (
            <div
              key={col.title}
              className="rounded-3xl border border-white/10 bg-ink-700/50 p-7 sm:p-8"
            >
              <div className="mb-6 flex items-center gap-3">
                <span
                  className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl ${
                    isLime
                      ? 'bg-lime-500/15 text-lime-400'
                      : 'bg-brandviolet-500/15 text-brandviolet-400'
                  }`}
                >
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="font-display text-xl font-bold text-paper">
                  {col.title}
                </h3>
              </div>
              <ul className="grid gap-3 sm:grid-cols-2">
                {col.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-sm text-paper/85"
                  >
                    <Check
                      className={`mt-0.5 h-4 w-4 shrink-0 ${
                        isLime ? 'text-lime-400' : 'text-brandviolet-400'
                      }`}
                      strokeWidth={3}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )
        })}
      </div>
    </Section>
  )
}
