import { Link } from 'react-router-dom'
import { CalendarCheck, CreditCard, Smartphone, QrCode, ArrowRight } from 'lucide-react'
import { Section } from '../components/Section'
import { SectionHeading } from '../components/SectionHeading'
import { FEATURE_PAGES } from '../content/pages'
import { track } from '../analytics'

const icons = [CalendarCheck, CreditCard, Smartphone, QrCode]
const blurbs = [
  'Reservas, cupos, cancelaciones y lista de espera, sin mensajes sueltos.',
  'Planes, abonos, saldos, pagos y vencimientos ordenados en un solo lugar.',
  'Tus socios reservan, ven sus abonos y hacen check-in desde el celular.',
  'Registro de ingreso ágil con un QR dinámico desde la app del socio.',
]

/** Grilla de enlaces reales desde la home hacia cada página de solución. */
export function SolucionesLinks() {
  return (
    <Section id="soluciones" tone="dark" ariaLabel="Soluciones de Movete">
      <SectionHeading
        eyebrow="Soluciones"
        title="Una página para cada necesidad de tu negocio"
        subtitle="Explorá en detalle cómo Movete resuelve cada parte de la operación."
      />
      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {FEATURE_PAGES.map((p, i) => {
          const Icon = icons[i]
          return (
            <Link
              key={p.slug}
              to={p.slug}
              onClick={() => track('click_feature_page', { feature: p.nav, from: 'home_grid' })}
              className="group flex h-full flex-col rounded-3xl border border-white/10 bg-ink-700/50 p-6 transition-all duration-200 hover:-translate-y-1 hover:border-lime-500/40"
            >
              <span className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-lime-500/15 text-lime-400">
                <Icon className="h-6 w-6" />
              </span>
              <h3 className="text-lg font-bold text-paper">{p.nav}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-paper/65">{blurbs[i]}</p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-lime-400 transition-all group-hover:gap-2.5">
                Ver más
                <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          )
        })}
      </div>
    </Section>
  )
}
