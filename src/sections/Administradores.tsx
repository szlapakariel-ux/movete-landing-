import {
  LayoutDashboard,
  Users,
  CalendarRange,
  ClipboardList,
  CreditCard,
  BarChart4,
  BellRing,
  ShieldCheck,
  Building2,
} from 'lucide-react'
import { Section } from '../components/Section'
import { SectionHeading } from '../components/SectionHeading'
import { Card } from '../components/Card'
import { ADMIN } from '../content/landing'

const icons = [
  LayoutDashboard,
  Users,
  CalendarRange,
  ClipboardList,
  CreditCard,
  BarChart4,
  BellRing,
  ShieldCheck,
  Building2,
]

export function Administradores() {
  return (
    <Section id="admin" tone="darker" ariaLabel="Panel web para administradores">
      <SectionHeading
        eyebrow={ADMIN.eyebrow}
        title={ADMIN.title}
        subtitle={ADMIN.subtitle}
      />

      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {ADMIN.cards.map((card, i) => (
          <Card
            key={card.title}
            icon={icons[i]}
            title={card.title}
            description={card.description}
            bullets={card.bullets}
            accent="lime"
          />
        ))}
      </div>
    </Section>
  )
}
