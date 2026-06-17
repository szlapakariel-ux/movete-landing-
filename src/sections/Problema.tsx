import {
  MessageSquareDashed,
  ReceiptText,
  Users2,
  UserX,
  Repeat2,
  BarChart3,
} from 'lucide-react'
import { Section } from '../components/Section'
import { SectionHeading } from '../components/SectionHeading'
import { Card } from '../components/Card'
import { PROBLEMA } from '../content/landing'

const icons = [
  MessageSquareDashed,
  ReceiptText,
  Users2,
  UserX,
  Repeat2,
  BarChart3,
]

export function Problema() {
  return (
    <Section id="problema" tone="darker" ariaLabel="El problema que resuelve Movete">
      <SectionHeading
        eyebrow={PROBLEMA.eyebrow}
        title={PROBLEMA.title}
        subtitle={PROBLEMA.intro}
        accent="violet"
      />

      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {PROBLEMA.cards.map((card, i) => (
          <Card
            key={card.title}
            icon={icons[i]}
            title={card.title}
            description={card.description}
            accent="violet"
          />
        ))}
      </div>

      <p className="mx-auto mt-12 max-w-3xl rounded-2xl border border-brandviolet-500/20 bg-brandviolet-500/5 px-6 py-5 text-center text-base font-medium text-paper/85">
        {PROBLEMA.closing}
      </p>
    </Section>
  )
}
