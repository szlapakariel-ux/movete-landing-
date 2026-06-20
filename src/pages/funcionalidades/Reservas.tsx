import { MessageSquareDashed, Users2, CalendarX, CalendarCheck, Clock, ListChecks } from 'lucide-react'
import { Seo } from '../../components/Seo'
import { Breadcrumbs } from '../../components/Breadcrumbs'
import { PageHero } from '../../components/PageHero'
import { Section } from '../../components/Section'
import { SectionHeading } from '../../components/SectionHeading'
import { Card } from '../../components/Card'
import { Faq } from '../../components/Faq'
import { FeatureCTA } from '../../components/FeatureCTA'
import { PhoneMockup } from '../../components/PhoneMockup'
import { AdminMockup } from '../../components/AdminMockup'
import { FEATURE_PAGES } from '../../content/pages'
import { breadcrumbLd, faqLd } from '../../seo/structuredData'

const PAGE = FEATURE_PAGES[0]

const faqs = [
  {
    q: '¿El socio puede cancelar su reserva?',
    a: 'Sí. El socio cancela desde la app respetando la política de cancelación que configura cada gimnasio (por ejemplo, hasta cierta cantidad de horas antes de la clase).',
  },
  {
    q: '¿Qué pasa cuando una clase se llena?',
    a: 'La clase muestra su cupo en tiempo real y, al completarse, el socio puede sumarse a la lista de espera. Si se libera un lugar, queda ordenado quién sigue.',
  },
  {
    q: '¿La recepción puede gestionar reservas también?',
    a: 'Sí. Desde el panel web, tu equipo ve y administra reservas por socio o por clase, cambia estados y exporta la información cuando lo necesita.',
  },
]

export default function Reservas() {
  return (
    <>
      <Seo
        title={PAGE.seoTitle}
        description={PAGE.seoDescription}
        path={PAGE.slug}
        image="/og/reservas.png"
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
        eyebrow="Reservas y cupos"
        title={PAGE.h1}
        intro="Organizá las reservas de tus clases con cupos reales, cancelaciones según tu política y lista de espera. Sin planillas ni mensajes sueltos."
        bullets={['Cupos en tiempo real', 'Cancelaciones con reglas', 'Lista de espera ordenada', 'Reservas desde la app']}
        visual={<PhoneMockup screen="classes" />}
      />

      <Section tone="dark" ariaLabel="El problema de las reservas por mensajes">
        <SectionHeading
          eyebrow="El problema"
          title="Cuando las reservas pasan por WhatsApp, algo siempre se pierde"
          accent="violet"
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-3">
          <Card icon={MessageSquareDashed} accent="violet" title="Mensajes dispersos" description="Turnos por chat y capturas que nadie termina de controlar." />
          <Card icon={Users2} accent="violet" title="Sobrecupos" description="Clases sobrevendidas porque el cupo se lleva “a ojo”." />
          <Card icon={CalendarX} accent="violet" title="Cancelaciones mal registradas" description="Lugares que quedan bloqueados o se liberan tarde." />
        </div>
      </Section>

      <Section tone="darker" ariaLabel="Cómo funciona la reserva">
        <SectionHeading eyebrow="Cómo funciona" title="Reservar es simple para el socio y ordenado para tu equipo" />
        <div className="mt-14 grid gap-5 sm:grid-cols-3">
          <Card icon={CalendarCheck} title="Reserva desde la app" description="El socio elige la clase, ve el cupo real y reserva en segundos." bullets={['Catálogo de clases', 'Cupo en tiempo real', 'Filtros por día, sede e instructor']} />
          <Card icon={Clock} title="Cancelación con reglas" description="Cancela desde la app respetando la política de cancelación del establecimiento." bullets={['Política configurable', 'Libera el lugar automáticamente', 'Historial de reservas']} />
          <Card icon={ListChecks} title="Lista de espera" description="Cuando la clase está llena, el socio se anota en espera y mantiene su lugar ordenado." bullets={['Alta en espera', 'Cupos controlados', 'Menos gestión manual']} />
        </div>
      </Section>

      <Section tone="dark" ariaLabel="Capturas de reservas">
        <SectionHeading eyebrow="App y panel" title="Lo que ve el socio y lo que controla tu equipo" />
        <div className="mt-14 grid items-center gap-12 lg:grid-cols-2">
          <div className="flex justify-center"><PhoneMockup screen="reservas" /></div>
          <div className="flex justify-center"><AdminMockup /></div>
        </div>
      </Section>

      <Section tone="darker" ariaLabel="Beneficios de las reservas">
        <SectionHeading eyebrow="Beneficios" title="Menos consultas, más control" />
        <div className="mt-14 grid gap-5 sm:grid-cols-3">
          <Card title="Recepción" description="Deja de responder los mismos mensajes y trabaja con información ordenada." />
          <Card title="Instructores" description="Llegan a la clase sabiendo cuántos socios reservaron y quiénes." />
          <Card title="Socios" description="Reservan y cancelan solos, con reglas claras y sin depender de nadie." />
        </div>
      </Section>

      <Faq items={faqs} />

      <FeatureCTA
        title="Ordená las reservas de tu gimnasio"
        related={[
          { label: FEATURE_PAGES[2].nav, to: FEATURE_PAGES[2].slug },
          { label: FEATURE_PAGES[1].nav, to: FEATURE_PAGES[1].slug },
        ]}
      />
    </>
  )
}
