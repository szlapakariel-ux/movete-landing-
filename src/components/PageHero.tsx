import type { ReactNode } from 'react'
import { Check, ArrowRight } from 'lucide-react'
import { Button } from './Button'
import { DEMO_PAGE } from '../content/pages'
import { track } from '../analytics'

interface PageHeroProps {
  eyebrow: string
  title: string
  intro: string
  bullets?: string[]
  /** Composición visual a la derecha (mockups). */
  visual?: ReactNode
}

/** Encabezado superior de una página de funcionalidad. */
export function PageHero({ eyebrow, title, intro, bullets, visual }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-ink-900 pb-16 pt-10 sm:pb-20" aria-label={title}>
      <div className="pointer-events-none absolute -right-24 top-10 h-96 w-96 rounded-full bg-brandviolet-500/20 blur-3xl" />
      <div className="pointer-events-none absolute -left-28 top-40 h-80 w-80 rounded-full bg-lime-500/10 blur-3xl" />

      <div className="container-mv relative grid items-center gap-12 lg:grid-cols-2">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-lime-400">{eyebrow}</p>
          <h1 className="font-display text-4xl font-extrabold leading-[1.1] sm:text-5xl">{title}</h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-paper/75 sm:text-lg">{intro}</p>

          {bullets && (
            <ul className="mt-7 grid gap-3 sm:grid-cols-2">
              {bullets.map((b) => (
                <li key={b} className="flex items-start gap-2.5 text-sm text-paper/85">
                  <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-lime-500/20">
                    <Check className="h-3.5 w-3.5 text-lime-400" strokeWidth={3} />
                  </span>
                  {b}
                </li>
              ))}
            </ul>
          )}

          <div className="mt-8">
            <Button
              as="a"
              href={DEMO_PAGE.slug}
              variant="primary"
              size="lg"
              onClick={() => track('click_feature_page', { to: 'demo', from: 'page_hero' })}
            >
              Solicitar demo
              <ArrowRight className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {visual && <div className="flex items-center justify-center">{visual}</div>}
      </div>
    </section>
  )
}
