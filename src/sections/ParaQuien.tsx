import { Link } from 'react-router-dom'
import { Flower2, Footprints, Dumbbell, Building2, ArrowRight } from 'lucide-react'
import { Section } from '../components/Section'
import { SectionHeading } from '../components/SectionHeading'
import { PARA_PAGES } from '../content/pages'
import { track } from '../analytics'

const icons = [Flower2, Footprints, Dumbbell, Building2]
const blurbs = [
  'Cupos por camilla o mat, packs de clases y reservas sin WhatsApp.',
  'Tus grupos en la plaza, el parque o la pista, con cobros ordenados desde el celular.',
  'WOD del día, cupos reales y check-in QR para tu comunidad.',
  'Morosos, vencimientos y accesos bajo control, sin planillas.',
]

/** Grilla de enlaces desde la home hacia cada página de rubro. */
export function ParaQuien() {
  return (
    <Section id="para-quien" tone="darker" ariaLabel="Para quién es Movete">
      <SectionHeading
        eyebrow="¿Para quién?"
        title="Movete se adapta a cómo trabaja tu rubro"
        subtitle="Gimnasios, boxes, estudios, escuelas y entrenadores independientes. Elegí el tuyo y mirá cómo se aplica a tu día a día."
      />
      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {PARA_PAGES.map((p, i) => {
          const Icon = icons[i]
          return (
            <Link
              key={p.slug}
              to={p.slug}
              onClick={() => track('click_feature_page', { feature: p.nav, from: 'home_para_quien' })}
              className="group flex h-full flex-col rounded-3xl border border-white/10 bg-ink-800 p-6 transition-all duration-200 hover:-translate-y-1 hover:border-lime-500/40"
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
