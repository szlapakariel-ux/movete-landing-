import { Check } from 'lucide-react'
import { Button } from '../components/Button'
import { ContactForm } from './ContactForm'
import { CTA_FINAL, CTA, HERO } from '../content/landing'

export function CTAFinal() {
  return (
    <section
      id="demo"
      className="relative overflow-hidden bg-ink-900 py-20 sm:py-28"
      aria-label="Solicitá tu demo de Movete"
    >
      {/* Glows de acento */}
      <div className="pointer-events-none absolute -left-20 bottom-0 h-96 w-96 rounded-full bg-lime-500/15 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 top-0 h-96 w-96 rounded-full bg-brandviolet-500/20 blur-3xl" />

      <div className="container-mv relative grid items-center gap-12 lg:grid-cols-2">
        {/* Texto */}
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-lime-400">
            {CTA_FINAL.eyebrow}
          </p>
          <h2 className="font-display text-3xl font-extrabold leading-tight sm:text-4xl">
            {CTA_FINAL.title}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-paper/75 sm:text-lg">
            {CTA_FINAL.subtitle}
          </p>

          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {HERO.bullets.map((b) => (
              <li key={b} className="flex items-start gap-2.5 text-sm text-paper/85">
                <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-lime-500/20">
                  <Check className="h-3.5 w-3.5 text-lime-400" strokeWidth={3} />
                </span>
                {b}
              </li>
            ))}
          </ul>

          <div className="mt-8 hidden lg:block">
            <Button as="a" href="#hero" variant="secondary" size="lg">
              {CTA.finalSecondary}
            </Button>
          </div>
        </div>

        {/* Formulario */}
        <ContactForm />
      </div>
    </section>
  )
}
