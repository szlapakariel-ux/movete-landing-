import { useState } from 'react'
import { Check } from 'lucide-react'
import { Section } from '../components/Section'
import { SectionHeading } from '../components/SectionHeading'
import { PhoneMockup } from '../components/PhoneMockup'
import { APP_SOCIO } from '../content/landing'

// Pantalla del mockup asociada a cada bloque (en orden).
const blockScreens = ['home', 'classes', 'profile', 'reservas', 'qr'] as const

export function Socios() {
  const [active, setActive] = useState(0)
  const screen = blockScreens[active] ?? 'home'

  return (
    <Section id="app-socio" tone="light" ariaLabel="App móvil Android para socios">
      <SectionHeading
        eyebrow={APP_SOCIO.eyebrow}
        title={APP_SOCIO.title}
        subtitle={APP_SOCIO.subtitle}
        accent="violet"
        tone="light"
      />

      <div className="mt-14 grid gap-12 lg:grid-cols-[340px_1fr] lg:items-start">
        {/* Mockup pegajoso que cambia según el bloque activo */}
        <div className="order-1 lg:sticky lg:top-28">
          <PhoneMockup screen={screen} />
        </div>

        {/* Bloques de funciones */}
        <div className="order-2 space-y-4">
          {APP_SOCIO.blocks.map((block, i) => {
            const isActive = i === active
            return (
              <div
                key={block.title}
                className={`overflow-hidden rounded-3xl border transition-all ${
                  isActive
                    ? 'border-brandviolet-500/40 bg-white shadow-card'
                    : 'border-ink-900/10 bg-white/70'
                }`}
              >
                <button
                  type="button"
                  onClick={() => setActive(i)}
                  aria-expanded={isActive}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="flex items-center gap-3">
                    <span
                      className={`inline-flex h-9 w-9 items-center justify-center rounded-xl text-sm font-bold ${
                        isActive
                          ? 'bg-brandviolet-500 text-white'
                          : 'bg-ink-900/5 text-ink-700'
                      }`}
                    >
                      {i + 1}
                    </span>
                    <span className="font-display text-lg font-bold text-ink-900">
                      {block.title}
                    </span>
                  </span>
                  <span
                    className={`text-xs font-semibold ${
                      isActive ? 'text-brandviolet-500' : 'text-ink-700/50'
                    }`}
                  >
                    {block.features.length} funciones
                  </span>
                </button>

                {isActive && (
                  <div className="grid gap-4 px-6 pb-6 sm:grid-cols-2">
                    {block.features.map((f) => (
                      <article
                        key={f.title}
                        className="rounded-2xl border border-ink-900/10 bg-paper p-4"
                      >
                        <h3 className="text-sm font-bold text-ink-900">{f.title}</h3>
                        <p className="mt-1.5 text-xs leading-relaxed text-ink-700">
                          {f.description}
                        </p>
                        <ul className="mt-3 space-y-1.5">
                          {f.bullets.map((b) => (
                            <li
                              key={b}
                              className="flex items-start gap-2 text-xs text-ink-700"
                            >
                              <Check
                                className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brandviolet-500"
                                strokeWidth={3}
                              />
                              {b}
                            </li>
                          ))}
                        </ul>
                      </article>
                    ))}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>

      <p className="mx-auto mt-12 max-w-3xl rounded-2xl border border-brandviolet-500/20 bg-brandviolet-500/5 px-6 py-5 text-center text-base font-semibold text-ink-900">
        {APP_SOCIO.closing}
      </p>
    </Section>
  )
}
