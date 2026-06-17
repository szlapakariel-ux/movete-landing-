import { Check, ArrowRight, Smartphone } from 'lucide-react'
import { Button } from '../components/Button'
import { PhoneMockup } from '../components/PhoneMockup'
import { AdminMockup } from '../components/AdminMockup'
import { HERO, CTA } from '../content/landing'

export function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-ink-900 pt-28 pb-20 sm:pt-36 sm:pb-28"
      aria-label="Presentación de Movete"
    >
      {/* Glows de acento */}
      <div className="pointer-events-none absolute -left-32 top-0 h-96 w-96 rounded-full bg-lime-500/15 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 top-40 h-96 w-96 rounded-full bg-brandviolet-500/20 blur-3xl" />

      <div className="container-mv relative grid items-center gap-14 lg:grid-cols-2">
        {/* Texto */}
        <div className="animate-fade-up text-center lg:text-left">
          <span className="inline-flex items-center gap-2 rounded-full border border-lime-500/30 bg-lime-500/10 px-4 py-1.5 text-xs font-semibold text-lime-400">
            <Smartphone className="h-4 w-4" />
            {HERO.eyebrow}
          </span>

          <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.1] sm:text-5xl lg:text-[3.4rem]">
            Todo tu gimnasio{' '}
            <span className="text-gradient-brand">ordenado</span> en una sola
            plataforma
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-paper/75 sm:text-lg lg:mx-0">
            {HERO.subtitle}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
            <Button as="a" href="#demo" variant="primary" size="lg">
              {CTA.primary}
              <ArrowRight className="h-5 w-5" />
            </Button>
            <Button as="a" href="#como-funciona" variant="secondary" size="lg">
              {CTA.secondary}
            </Button>
          </div>

          <ul className="mx-auto mt-9 grid max-w-xl gap-3 text-left sm:grid-cols-2 lg:mx-0">
            {HERO.bullets.map((b) => (
              <li key={b} className="flex items-start gap-2.5 text-sm text-paper/85">
                <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-lime-500/20">
                  <Check className="h-3.5 w-3.5 text-lime-400" strokeWidth={3} />
                </span>
                {b}
              </li>
            ))}
          </ul>
        </div>

        {/* Composición visual: app + panel */}
        <div className="relative animate-fade-up">
          <div className="relative mx-auto flex max-w-lg items-center justify-center">
            <AdminMockup className="hidden translate-x-6 sm:block" />
            <div className="sm:absolute sm:-bottom-10 sm:-left-2 sm:translate-x-0">
              <PhoneMockup screen="home" className="animate-float" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
