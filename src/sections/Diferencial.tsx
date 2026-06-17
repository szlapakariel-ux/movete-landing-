import { Sparkles } from 'lucide-react'
import { Section } from '../components/Section'
import { SectionHeading } from '../components/SectionHeading'
import { DIFERENCIAL } from '../content/landing'

export function Diferencial() {
  return (
    <Section id="diferencial" tone="dark" ariaLabel="El diferencial de Movete">
      <SectionHeading
        eyebrow={DIFERENCIAL.eyebrow}
        title={DIFERENCIAL.title}
        subtitle={DIFERENCIAL.intro}
      />

      <ul className="mt-12 flex flex-wrap justify-center gap-3">
        {DIFERENCIAL.items.map((item, i) => {
          const isLime = i % 2 === 0
          return (
            <li
              key={item}
              className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium ${
                isLime
                  ? 'border-lime-500/30 bg-lime-500/10 text-lime-300'
                  : 'border-brandviolet-500/30 bg-brandviolet-500/10 text-brandviolet-300'
              }`}
            >
              <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
              {item}
            </li>
          )
        })}
      </ul>
    </Section>
  )
}
