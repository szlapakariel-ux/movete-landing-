import { CreditCard, Wallet, BellRing, Package, Receipt, RefreshCw } from 'lucide-react'
import { Seo } from '../../components/Seo'
import { Breadcrumbs } from '../../components/Breadcrumbs'
import { PageHero } from '../../components/PageHero'
import { Section } from '../../components/Section'
import { SectionHeading } from '../../components/SectionHeading'
import { Card } from '../../components/Card'
import { Faq } from '../../components/Faq'
import { FeatureCTA } from '../../components/FeatureCTA'
import { PhoneMockup } from '../../components/PhoneMockup'
import { Check } from 'lucide-react'
import { FEATURE_PAGES } from '../../content/pages'
import { breadcrumbLd, faqLd } from '../../seo/structuredData'

const PAGE = FEATURE_PAGES[1]

const faqs = [
  {
    q: '¿Movete cobra o retiene el dinero de mi gimnasio?',
    a: 'No. El cobro se integra con Mercado Pago y el dinero se acredita en la cuenta de Mercado Pago de cada organización. Movete ordena la información de pagos y abonos, no retiene fondos.',
  },
  {
    q: '¿Puedo tener planes, packs de clases y abonos distintos?',
    a: 'Sí. Podés configurar planes mensuales, packs de clases, créditos y clases individuales, y asignarlos a cada socio según corresponda.',
  },
  {
    q: '¿El socio ve su estado de cuenta?',
    a: 'Sí. Desde la app, cada socio consulta su abono vigente, créditos disponibles, historial de consumos y el estado de sus pagos.',
  },
]

export default function Pagos() {
  const gym = ['Registro de pagos y deudores', 'Planes, packs y membresías', 'Saldos y vencimientos', 'Cobro con Mercado Pago por organización']
  const socio = ['Abono vigente y créditos', 'Historial de consumos', 'Estado de cuenta propio', 'Compra o renovación desde la app']

  return (
    <>
      <Seo
        title={PAGE.seoTitle}
        description={PAGE.seoDescription}
        path={PAGE.slug}
        image="/og/pagos.png"
        jsonLd={[
          breadcrumbLd([{ name: 'Inicio', path: '/' }, { name: PAGE.nav, path: PAGE.slug }]),
          faqLd(faqs.map((f) => ({ q: f.q, a: f.a }))),
        ]}
      />
      <Breadcrumbs items={[{ name: 'Inicio', path: '/' }, { name: PAGE.nav, path: PAGE.slug }]} />

      <PageHero
        eyebrow="Pagos y abonos"
        title={PAGE.h1}
        intro="Gestioná planes, packs de clases, abonos, saldos, pagos y vencimientos desde una sola plataforma. Con integración de cobro mediante Mercado Pago por organización."
        bullets={['Planes y membresías', 'Saldos y vencimientos', 'Deudores del mes', 'Mercado Pago por organización']}
        visual={<PhoneMockup screen="profile" />}
      />

      <Section tone="dark" ariaLabel="Tipos de planes">
        <SectionHeading eyebrow="Planes y abonos" title="Cada gimnasio cobra como necesita" />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <Card icon={Package} title="Membresías" description="Planes mensuales o por período para acceso recurrente." />
          <Card icon={CreditCard} title="Packs de clases" description="Bonos de clases con cantidad y vencimiento definidos." />
          <Card icon={Wallet} title="Créditos" description="Consumo y devolución de créditos por reserva o asistencia." />
          <Card icon={Receipt} title="Clases individuales" description="Pago de clases sueltas cuando corresponde." />
        </div>
      </Section>

      <Section tone="darker" ariaLabel="Pagos para el gimnasio y el socio">
        <SectionHeading eyebrow="Dos lados, un sistema" title="Orden para el gimnasio, claridad para el socio" />
        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-lime-500/25 bg-lime-500/5 p-7">
            <h3 className="font-display text-xl font-bold text-paper">Para el gimnasio</h3>
            <ul className="mt-5 grid gap-3">
              {gym.map((i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm text-paper/85">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-lime-400" strokeWidth={3} />
                  {i}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border border-brandviolet-500/25 bg-brandviolet-500/5 p-7">
            <h3 className="font-display text-xl font-bold text-paper">Para el socio</h3>
            <ul className="mt-5 grid gap-3">
              {socio.map((i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm text-paper/85">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-brandviolet-400" strokeWidth={3} />
                  {i}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section tone="dark" ariaLabel="Alertas y recordatorios">
        <SectionHeading eyebrow="Seguimiento" title="Menos deudores olvidados" />
        <div className="mt-14 grid gap-5 sm:grid-cols-3">
          <Card icon={BellRing} title="Alertas de vencimiento" description="Identificá abonos por vencer y deudores del mes desde el panel." />
          <Card icon={RefreshCw} title="Renovaciones" description="El socio puede renovar su abono desde la app de forma simple." />
          <Card icon={Receipt} title="Estado de cuenta" description="Cada socio ve sus pagos, importes y estado al día." />
        </div>
      </Section>

      <Faq items={faqs} />

      <FeatureCTA
        title="Ordená los pagos y abonos de tu gimnasio"
        related={[
          { label: FEATURE_PAGES[0].nav, to: FEATURE_PAGES[0].slug },
          { label: FEATURE_PAGES[2].nav, to: FEATURE_PAGES[2].slug },
        ]}
      />
    </>
  )
}
