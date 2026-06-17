import {
  ShieldCheck,
  UserCog,
  UserCheck,
  DoorClosed,
  Lock,
  ShieldAlert,
} from 'lucide-react'
import { Section } from '../components/Section'
import { SectionHeading } from '../components/SectionHeading'
import { SEGURIDAD } from '../content/landing'

const icons = [ShieldCheck, UserCog, UserCheck, DoorClosed, Lock, ShieldAlert]

export function Seguridad() {
  return (
    <Section id="seguridad" tone="darker" ariaLabel="Seguridad, roles y privacidad">
      <SectionHeading
        eyebrow={SEGURIDAD.eyebrow}
        title={SEGURIDAD.title}
      />

      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {SEGURIDAD.points.map((point, i) => {
          const Icon = icons[i]
          return (
            <div
              key={point.title}
              className="rounded-3xl border border-white/10 bg-ink-700/50 p-6"
            >
              <span className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-lime-500/15 text-lime-400">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="font-bold text-paper">{point.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-paper/65">
                {point.description}
              </p>
            </div>
          )
        })}
      </div>

      <p className="mx-auto mt-12 max-w-2xl rounded-2xl border border-lime-500/20 bg-lime-500/5 px-6 py-5 text-center text-base font-semibold text-paper">
        {SEGURIDAD.closing}
      </p>
    </Section>
  )
}
