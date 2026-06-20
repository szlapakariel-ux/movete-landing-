import { Section } from './Section'
import { SectionHeading } from './SectionHeading'

export interface FaqItem {
  q: string
  a: string
}

/** Bloque de preguntas frecuentes (las preguntas quedan visibles → habilita FAQPage). */
export function Faq({ items, tone = 'darker' }: { items: FaqItem[]; tone?: 'dark' | 'darker' }) {
  return (
    <Section tone={tone} ariaLabel="Preguntas frecuentes">
      <SectionHeading eyebrow="Preguntas frecuentes" title="Dudas habituales" />
      <dl className="mx-auto mt-12 max-w-3xl space-y-4">
        {items.map((item) => (
          <div key={item.q} className="rounded-2xl border border-white/10 bg-ink-700/50 p-6">
            <dt className="font-display text-lg font-bold text-paper">{item.q}</dt>
            <dd className="mt-2 text-sm leading-relaxed text-paper/70">{item.a}</dd>
          </div>
        ))}
      </dl>
    </Section>
  )
}
