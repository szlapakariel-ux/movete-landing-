import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { Section } from './Section'
import { Button } from './Button'
import { DEMO_PAGE } from '../content/pages'
import { track } from '../analytics'

interface FeatureCTAProps {
  title?: string
  text?: string
  /** Enlaces internos relacionados (a otras páginas). */
  related?: { label: string; to: string }[]
}

/** Bloque de cierre de una página de funcionalidad: CTA a demo + enlaces internos. */
export function FeatureCTA({
  title = 'Ordená esto en tu gimnasio con Movete',
  text = 'Te mostramos cómo se adapta a tu operación en una demo sin compromiso.',
  related,
}: FeatureCTAProps) {
  return (
    <Section tone="darker" ariaLabel="Solicitar demo">
      <div className="mx-auto max-w-3xl rounded-3xl border border-lime-500/20 bg-gradient-to-br from-ink-700/60 to-ink-800 p-8 text-center sm:p-12">
        <h2 className="font-display text-2xl font-bold text-paper sm:text-3xl">{title}</h2>
        <p className="mx-auto mt-3 max-w-xl text-paper/70">{text}</p>
        <div className="mt-7 flex justify-center">
          <Button
            as="a"
            href={DEMO_PAGE.slug}
            variant="primary"
            size="lg"
            onClick={() => track('click_feature_page', { to: 'demo', from: 'feature_cta' })}
          >
            Solicitar demo
            <ArrowRight className="h-5 w-5" />
          </Button>
        </div>

        {related && related.length > 0 && (
          <div className="mt-8 border-t border-white/10 pt-6">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-paper/45">Seguí explorando</p>
            <div className="flex flex-wrap justify-center gap-3">
              {related.map((r) => (
                <Link
                  key={r.to}
                  to={r.to}
                  onClick={() => track('click_feature_page', { feature: r.label, from: 'related' })}
                  className="inline-flex items-center gap-1.5 rounded-full border border-white/15 px-4 py-2 text-sm text-paper/80 transition-colors hover:border-lime-500 hover:text-lime-400"
                >
                  {r.label}
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </Section>
  )
}
