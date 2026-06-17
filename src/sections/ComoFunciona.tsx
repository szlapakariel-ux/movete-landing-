import { Settings2, MonitorCog, Smartphone } from 'lucide-react'
import { Section } from '../components/Section'
import { SectionHeading } from '../components/SectionHeading'
import { COMO_FUNCIONA } from '../content/landing'

const icons = [Settings2, MonitorCog, Smartphone]

export function ComoFunciona() {
  return (
    <Section id="como-funciona" tone="dark" ariaLabel="Cómo funciona Movete">
      <SectionHeading
        eyebrow={COMO_FUNCIONA.eyebrow}
        title={COMO_FUNCIONA.title}
      />

      <ol className="mt-14 grid gap-6 md:grid-cols-3">
        {COMO_FUNCIONA.steps.map((step, i) => {
          const Icon = icons[i]
          return (
            <li
              key={step.number}
              className="relative rounded-3xl border border-white/10 bg-ink-700/50 p-7"
            >
              <span
                className="absolute right-6 top-6 font-display text-5xl font-extrabold text-white/5"
                aria-hidden="true"
              >
                {step.number}
              </span>
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-lime-500 text-ink-900">
                <Icon className="h-6 w-6" />
              </span>
              <h3 className="mt-5 font-display text-xl font-bold text-paper">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-paper/65">
                {step.description}
              </p>
            </li>
          )
        })}
      </ol>
    </Section>
  )
}
