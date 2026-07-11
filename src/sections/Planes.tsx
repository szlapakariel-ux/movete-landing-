import { Check, MessageCircle } from 'lucide-react'
import { Section } from '../components/Section'
import { SectionHeading } from '../components/SectionHeading'
import { Button } from '../components/Button'
import { PLANES, whatsappUrlWith } from '../content/landing'
import { track } from '../analytics'

export function Planes() {
  return (
    <Section id="precios" tone="darker" ariaLabel="Planes y precios de Movete">
      <SectionHeading
        eyebrow={PLANES.eyebrow}
        title={PLANES.title}
        subtitle={PLANES.subtitle}
      />

      <ul className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {PLANES.plans.map((plan) => (
          <li
            key={plan.name}
            className="flex flex-col rounded-3xl border border-white/10 bg-ink-800 p-7"
          >
            <h3 className="font-display text-xl font-bold text-paper">{plan.name}</h3>
            <p className="mt-1 text-sm text-paper/60">{plan.description}</p>

            <p className="mt-5 font-display text-4xl font-extrabold text-paper">
              {plan.price ? (
                <>
                  ${plan.price}
                  <span className="text-base font-semibold text-paper/50"> /mes</span>
                </>
              ) : (
                'A medida'
              )}
            </p>

            <ul className="mt-5 space-y-2 border-t border-white/10 pt-5">
              {plan.limits.map((limit) => (
                <li key={limit} className="flex items-start gap-2 text-sm text-paper/80">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-lime-400" />
                  {limit}
                </li>
              ))}
            </ul>

            <p className="mt-4 text-xs font-semibold uppercase tracking-widest text-paper/40">
              Incluye
            </p>
            <ul className="mt-2 space-y-2">
              {plan.includes.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-paper/65">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-brandviolet-400" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-auto pt-6">
              <Button
                as="a"
                href={whatsappUrlWith(
                  `Hola 👋 Quiero saber más sobre el plan ${plan.name} de Movete.`,
                )}
                target="_blank"
                rel="noopener noreferrer"
                variant="whatsapp"
                className="w-full"
                onClick={() => track('click_whatsapp', { from: 'planes', plan: plan.name })}
              >
                <MessageCircle className="h-4 w-4" />
                {PLANES.cta}
              </Button>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  )
}
