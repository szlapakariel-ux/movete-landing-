import { Link } from 'react-router-dom'
import {
  MessageSquareDashed,
  CalendarX,
  Wallet,
  LayoutGrid,
  Clock,
  ListChecks,
  Ticket,
  CreditCard,
  BellRing,
  MessageCircle,
  ArrowRight,
} from 'lucide-react'
import { Seo } from '../../components/Seo'
import { Breadcrumbs } from '../../components/Breadcrumbs'
import { PageHero } from '../../components/PageHero'
import { Section } from '../../components/Section'
import { SectionHeading } from '../../components/SectionHeading'
import { Card } from '../../components/Card'
import { Faq } from '../../components/Faq'
import { FeatureCTA } from '../../components/FeatureCTA'
import { PhoneMockup } from '../../components/PhoneMockup'
import { Button } from '../../components/Button'
import { PARA_PAGES, FEATURE_PAGES } from '../../content/pages'
import { whatsappUrlWith } from '../../content/landing'
import { track } from '../../analytics'
import { breadcrumbLd, faqLd } from '../../seo/structuredData'

const PAGE = PARA_PAGES[0]

const faqs = [
  {
    q: 'Mis alumnos son gente grande, ¿les va a costar usar una app?',
    a: 'No. Reservar es elegir la clase y tocar un botón, nada más. Y si a alguien no le resulta cómodo el celular, tu recepción puede gestionar sus reservas desde el panel web: los dos modos conviven sin problema.',
  },
  {
    q: '¿Qué pasa si un alumno cancela a último momento?',
    a: 'Se aplica la política que configures para tu estudio: si cancela dentro del plazo, el crédito se le devuelve completo; si el plazo ya pasó, la cancelación se bloquea y el crédito se consume. La regla la aplica el sistema, sin discusiones por WhatsApp.',
  },
  {
    q: '¿Cómo pagan los packs mis alumnos?',
    a: 'Pueden comprar y renovar sus packs desde la app con Mercado Pago (Checkout Pro), o podés registrar pagos manuales en el panel si te pagan en efectivo o por transferencia. El estado de cuenta de cada alumno queda siempre al día.',
  },
]

export default function Estudios() {
  return (
    <>
      <Seo
        title={PAGE.seoTitle}
        description={PAGE.seoDescription}
        path={PAGE.slug}
        jsonLd={[
          breadcrumbLd([
            { name: 'Inicio', path: '/' },
            { name: PAGE.nav, path: PAGE.slug },
          ]),
          faqLd(faqs.map((f) => ({ q: f.q, a: f.a }))),
        ]}
      />
      <Breadcrumbs items={[{ name: 'Inicio', path: '/' }, { name: PAGE.nav, path: PAGE.slug }]} />

      <PageHero
        eyebrow="Para estudios de pilates, yoga y danza"
        title={PAGE.h1}
        intro="Cupo por camilla o mat visible en tiempo real, cancelaciones con reglas claras y packs de clases que se controlan solos. Tu estudio ordenado y tu recepción sin contestar los mismos mensajes todo el día."
        bullets={['Cupo por camilla o mat en tiempo real', 'Política de cancelación que se aplica sola', 'Lista de espera cuando la clase se llena', 'Packs de clases con créditos y vencimientos']}
        visual={<PhoneMockup screen="classes" />}
      />

      <Section tone="dark" ariaLabel="El problema de gestionar un estudio con WhatsApp y Excel">
        <SectionHeading
          eyebrow="El problema"
          title="“Me avisan dos horas antes que no vienen y pierdo el cupo de la camilla”"
          accent="violet"
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-3">
          <Card icon={MessageSquareDashed} accent="violet" title="WhatsApp + Excel" description="Reservas por chat, la planilla al costado y capturas que nadie termina de cruzar. Cada cambio de horario es una cadena de mensajes." />
          <Card icon={CalendarX} accent="violet" title="Camillas y mats vacíos" description="Cancelan a último momento, nadie llega a ocupar el lugar y la clase sale igual. El cupo perdido no se recupera." />
          <Card icon={Wallet} accent="violet" title="Packs sin control" description="Créditos que se pierden de vista, vencimientos que pasan de largo y clases que se toman con packs ya vencidos." />
        </div>
      </Section>

      <Section tone="darker" ariaLabel="Cómo Movete cuida el cupo de cada clase">
        <SectionHeading eyebrow="Cómo funciona" title="El cupo se cuida solo, clase por clase" />
        <div className="mt-14 grid gap-5 sm:grid-cols-3">
          <Card icon={LayoutGrid} title="Cupo estricto por camilla o mat" description="Definís cuántos lugares tiene cada clase y el cupo se ve en tiempo real desde la app y el panel. Nunca se vende un lugar de más." bullets={['Sin sobrecupos', 'Cupo visible antes de reservar', 'Multi-sede si tenés más de un estudio']} />
          <Card icon={Clock} title="Cancelación con reglas claras" description="Configurás el plazo de tu estudio: dentro del plazo, el crédito se devuelve completo; pasado el plazo, la cancelación se bloquea y el crédito se consume." bullets={['Política configurable por vos', 'La regla se aplica sola', 'Sin discusiones por WhatsApp']} />
          <Card icon={ListChecks} title="Lista de espera ordenada" description="Cuando la clase se llena, el alumno se anota en espera y queda claro quién sigue si se libera un lugar." bullets={['Orden transparente', 'Clases llenas sin caos', 'Menos gestión manual']} />
        </div>
      </Section>

      <Section tone="dark" ariaLabel="Packs de clases y cobros">
        <SectionHeading eyebrow="Packs y cobros" title="Packs de clases con créditos que se administran solos" />
        <div className="mt-14 grid gap-5 sm:grid-cols-3">
          <Card icon={Ticket} title="Packs de clases" description="Vendés packs de 4, 8 o 12 clases con créditos y vencimientos. Cada reserva descuenta un crédito automáticamente y el alumno siempre ve cuántos le quedan." />
          <Card icon={CreditCard} title="Cobros con Mercado Pago" description="Tus alumnos compran y renuevan sus packs desde la app Android con Checkout Pro. Y si te pagan en efectivo o por transferencia, lo registrás en el panel." />
          <Card icon={BellRing} title="Estado de cuenta y avisos" description="Ves los deudores del mes y el estado de cuenta de cada alumno. Las notificaciones push y por email recuerdan pagos pendientes y vencimientos por vos." />
        </div>
      </Section>

      <Section tone="darker" ariaLabel="Beneficios para tu estudio">
        <SectionHeading eyebrow="Beneficios" title="La recepción deja de contestar mensajes" />
        <div className="mt-14 grid gap-5 sm:grid-cols-3">
          <Card title="Recepción" description="Deja de responder “¿hay lugar mañana?”: los alumnos ven el cupo real y reservan solos desde la app." />
          <Card title="Instructores" description="Llegan a cada clase sabiendo qué camillas y mats están reservados y quiénes vienen." />
          <Card title="Alumnos" description="Reservan, cancelan y compran sus packs desde el celular, con reglas claras y sin depender de nadie." />
        </div>
      </Section>

      <Section tone="dark" ariaLabel="Plan sugerido para estudios">
        <SectionHeading
          eyebrow="Plan sugerido"
          title="Cuesta menos que la cuota de un solo alumno"
          subtitle="Si en tu estudio la cuota mensual está entre $20.000 y $35.000, Movete se paga con una sola. Elegí el plan según cuántos alumnos activos tenés."
        />
        <div className="mx-auto mt-14 grid max-w-3xl gap-5 sm:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-ink-700/60 p-7 shadow-card">
            <p className="text-sm font-semibold uppercase tracking-widest text-lime-400">Growth</p>
            <p className="mt-3 font-display text-3xl font-extrabold text-paper">
              $29.900<span className="text-base font-semibold text-paper/60">/mes</span>
            </p>
            <p className="mt-2 text-sm leading-relaxed text-paper/65">Hasta 50 alumnos activos. Ideal para estudios que arrancan o trabajan con grupos reducidos.</p>
          </div>
          <div className="rounded-3xl border border-lime-500/30 bg-ink-700/60 p-7 shadow-card">
            <p className="text-sm font-semibold uppercase tracking-widest text-lime-400">Pro</p>
            <p className="mt-3 font-display text-3xl font-extrabold text-paper">
              $99.900<span className="text-base font-semibold text-paper/60">/mes</span>
            </p>
            <p className="mt-2 text-sm leading-relaxed text-paper/65">Hasta 120 alumnos activos. Para estudios con varias salas, turnos llenos o más de una sede.</p>
          </div>
        </div>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Button
            as="a"
            href={whatsappUrlWith('Hola 👋 Tengo un estudio y quiero saber más de Movete.')}
            variant="whatsapp"
            size="lg"
            target="_blank"
            rel="noopener"
            onClick={() => track('click_whatsapp', { from: 'para_estudios' })}
          >
            <MessageCircle className="h-5 w-5" />
            Consultar por WhatsApp
          </Button>
          <Link
            to="/#precios"
            className="inline-flex items-center gap-1.5 rounded-full border border-white/15 px-5 py-3 text-sm text-paper/80 transition-colors hover:border-lime-500 hover:text-lime-400"
          >
            Ver todos los planes
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Section>

      <Faq items={faqs} />

      <FeatureCTA
        title="Ordená tu estudio con Movete"
        text="Te mostramos Movete aplicado a un estudio como el tuyo, con tus clases y tus packs, en una demo sin compromiso."
        related={[
          { label: FEATURE_PAGES[0].nav, to: FEATURE_PAGES[0].slug },
          { label: FEATURE_PAGES[1].nav, to: FEATURE_PAGES[1].slug },
        ]}
      />
    </>
  )
}
