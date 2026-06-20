import { useEffect } from 'react'
import { Check } from 'lucide-react'
import { Seo } from '../components/Seo'
import { Breadcrumbs } from '../components/Breadcrumbs'
import { DemoForm } from '../components/DemoForm'
import { DEMO_PAGE } from '../content/pages'
import { breadcrumbLd } from '../seo/structuredData'
import { track } from '../analytics'

const puntos = [
  'Te mostramos el flujo con más impacto para tu negocio',
  'Reservas, pagos, abonos y check-in en un solo lugar',
  'Sin compromiso y adaptado a tu operación',
]

export default function SolicitarDemo() {
  useEffect(() => {
    track('view_demo_page')
  }, [])

  return (
    <>
      <Seo
        title={DEMO_PAGE.seoTitle}
        description={DEMO_PAGE.seoDescription}
        path={DEMO_PAGE.slug}
        image="/og/demo.png"
        jsonLd={[breadcrumbLd([{ name: 'Inicio', path: '/' }, { name: DEMO_PAGE.nav, path: DEMO_PAGE.slug }])]}
      />
      <Breadcrumbs items={[{ name: 'Inicio', path: '/' }, { name: DEMO_PAGE.nav, path: DEMO_PAGE.slug }]} />

      <section className="relative overflow-hidden bg-ink-900 pb-20 pt-10" aria-label={DEMO_PAGE.h1}>
        <div className="pointer-events-none absolute -right-24 top-10 h-96 w-96 rounded-full bg-brandviolet-500/20 blur-3xl" />
        <div className="pointer-events-none absolute -left-28 top-40 h-80 w-80 rounded-full bg-lime-500/10 blur-3xl" />

        <div className="container-mv relative grid items-start gap-12 lg:grid-cols-2">
          <div className="lg:pt-6">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-lime-400">Solicitar demo</p>
            <h1 className="font-display text-4xl font-extrabold leading-[1.1] sm:text-5xl">{DEMO_PAGE.h1}</h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-paper/75 sm:text-lg">
              Contanos cómo trabajás hoy y te mostramos el flujo que más impacto puede tener en tu gimnasio,
              box o estudio.
            </p>
            <ul className="mt-8 space-y-3">
              {puntos.map((p) => (
                <li key={p} className="flex items-start gap-2.5 text-sm text-paper/85">
                  <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-lime-500/20">
                    <Check className="h-3.5 w-3.5 text-lime-400" strokeWidth={3} />
                  </span>
                  {p}
                </li>
              ))}
            </ul>
          </div>

          <DemoForm />
        </div>
      </section>
    </>
  )
}
