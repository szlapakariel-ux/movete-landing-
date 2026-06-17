import { LayoutGrid, Smartphone, Layers, LineChart, ArrowRight } from 'lucide-react'
import { Section } from '../components/Section'
import { SectionHeading } from '../components/SectionHeading'
import { AdminMockup } from '../components/AdminMockup'
import { PhoneMockup } from '../components/PhoneMockup'
import { SOLUCION } from '../content/landing'

const icons = [LayoutGrid, Smartphone, Layers, LineChart]

export function Solucion() {
  return (
    <Section id="solucion" tone="dark" ariaLabel="La solución de Movete">
      <SectionHeading
        eyebrow={SOLUCION.eyebrow}
        title={SOLUCION.title}
        subtitle={SOLUCION.intro}
      />

      <div className="mt-14 grid items-center gap-12 lg:grid-cols-2">
        {/* Composición admin + socio */}
        <div className="relative order-2 flex items-center justify-center lg:order-1">
          <div className="pointer-events-none absolute inset-0 -z-10 rounded-full bg-lime-500/10 blur-3xl" />
          <AdminMockup />
          <div className="absolute -bottom-8 right-0 hidden sm:block">
            <PhoneMockup screen="classes" className="w-[180px]" />
          </div>
        </div>

        {/* Puntos */}
        <div className="order-1 space-y-4 lg:order-2">
          {SOLUCION.points.map((point, i) => {
            const Icon = icons[i]
            const accent = i % 2 === 0 ? 'text-lime-400 bg-lime-500/15' : 'text-brandviolet-400 bg-brandviolet-500/15'
            return (
              <div
                key={point.title}
                className="flex gap-4 rounded-2xl border border-white/10 bg-ink-700/50 p-5"
              >
                <span className={`inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${accent}`}>
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-bold text-paper">{point.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-paper/65">
                    {point.description}
                  </p>
                </div>
              </div>
            )
          })}

          <a
            href="#admin"
            className="inline-flex items-center gap-2 pt-2 text-sm font-semibold text-lime-400 hover:gap-3 transition-all"
          >
            Conocé el panel de gestión
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </Section>
  )
}
