import { Link } from 'react-router-dom'
import {
  MessageSquareDashed,
  Users2,
  DollarSign,
  Dumbbell,
  ListChecks,
  QrCode,
  Building2,
  Wallet,
  BarChart3,
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
import { AdminMockup } from '../../components/AdminMockup'
import { Button } from '../../components/Button'
import { PARA_PAGES, FEATURE_PAGES } from '../../content/pages'
import { whatsappUrlWith } from '../../content/landing'
import { track } from '../../analytics'
import { breadcrumbLd, faqLd } from '../../seo/structuredData'

const PAGE = PARA_PAGES[2]

const faqs = [
  {
    q: 'Ya uso un software del ambiente, ¿por qué cambiarme?',
    a: 'Porque pagás en pesos argentinos sin atarte al dólar, tenés soporte directo por WhatsApp en Argentina y lo que usás todos los días —WOD, cupos y check-in con QR— está acá. Para arrancar, podés importar tus atletas por CSV y empezar a operar el mismo día.',
  },
  {
    q: '¿Los atletas ven el WOD del día en la app?',
    a: 'Sí. Tu box publica el WOD del día y cada atleta lo consulta desde la app, con historial para revisar los de días anteriores. Así toda la comunidad llega a la clase sabiendo qué se entrena.',
  },
  {
    q: '¿Qué pasa si un atleta cancela a último momento?',
    a: 'La política de cancelación la configurás vos. Si cancela dentro del plazo, recupera el crédito de la clase. Si se pasa del plazo, la cancelación se bloquea y el crédito se consume. Reglas claras para todos, sin discusiones.',
  },
]

export default function Boxes() {
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
        eyebrow="Para boxes y funcional"
        title={PAGE.h1}
        intro="Movete es la plataforma de gestión para boxes de CrossFit, centros funcionales y academias de combate: publicás el WOD, controlás cupos reales con lista de espera y tus atletas hacen check-in con QR. Todo en pesos argentinos."
        bullets={['WOD del día en la app', 'Cupos reales con lista de espera', 'Check-in con QR sin fila', 'Precio fijo en pesos']}
        visual={<PhoneMockup screen="home" />}
      />

      <Section tone="dark" ariaLabel="El problema de gestionar un box por WhatsApp">
        <SectionHeading
          eyebrow="El problema"
          title="“Se me desarma la lista de espera en WhatsApp y las clases colapsan”"
          accent="violet"
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-3">
          <Card icon={MessageSquareDashed} accent="violet" title="Lista de espera en el chat" description="Cuando la clase explota, el orden de quién sigue se pierde entre mensajes y capturas." />
          <Card icon={Users2} accent="violet" title="Clases que colapsan" description="Sin cupo real por clase, los horarios pico se sobrevenden y la comunidad se calienta." />
          <Card icon={DollarSign} accent="violet" title="Software atado al dólar" description="Las herramientas del ambiente cotizan en dólares o cuestan una fortuna por mes." />
        </div>
      </Section>

      <Section tone="darker" ariaLabel="Cómo funciona Movete en un box">
        <SectionHeading eyebrow="Pensado para tu box" title="El día a día del box, resuelto en la app" />
        <div className="mt-14 grid gap-5 sm:grid-cols-3">
          <Card icon={Dumbbell} title="WOD del día" description="Publicás el WOD y toda la comunidad lo consulta desde la app antes de llegar." bullets={['Lo publica el box', 'El atleta lo ve en la app', 'Historial de WODs anteriores']} />
          <Card icon={ListChecks} title="Cupos y lista de espera" description="Cada clase tiene su cupo real. Cuando se llena, la lista de espera ordena quién sigue." bullets={['Cupo en tiempo real', 'Espera ordenada, sin chats', 'Cancelación con tu política']} />
          <Card icon={QrCode} title="Check-in con QR" description="El atleta genera un QR dinámico en la app y arranca la clase sin fila en la recepción." bullets={['Se escanea desde el navegador', 'Celular, tablet o notebook', 'Carga manual como respaldo']} />
        </div>
      </Section>

      <Section tone="dark" ariaLabel="Capturas de la app y el panel">
        <SectionHeading eyebrow="App y panel" title="Lo que ve el atleta y lo que controla tu equipo" />
        <div className="mt-14 grid items-center gap-12 lg:grid-cols-2">
          <div className="flex justify-center"><PhoneMockup screen="qr" /></div>
          <div className="flex justify-center"><AdminMockup /></div>
        </div>
      </Section>

      <Section tone="darker" ariaLabel="Más herramientas para el box">
        <SectionHeading eyebrow="Además" title="La operación completa, no solo las clases" />
        <div className="mt-14 grid gap-5 sm:grid-cols-3">
          <Card icon={Building2} title="Multi-sede y coaches" description="Manejás varias sedes desde un solo panel y les das a tus coaches roles y permisos según lo que hace cada uno." />
          <Card icon={Wallet} title="Pagos sin perseguir a nadie" description="Tus atletas pagan con Mercado Pago desde la app o registrás el pago en el panel. Estado de cuenta y deudores siempre a mano." />
          <Card icon={BarChart3} title="Datos para decidir" description="Estadísticas de clases y asistencia, notificaciones push y por email, importación por CSV y app offline-first." />
        </div>
      </Section>

      <Section tone="dark" ariaLabel="Precio para boxes">
        <SectionHeading
          eyebrow="Precio"
          title="Precio fijo en pesos, sin sorpresas con el dólar"
          subtitle="Mientras las alternativas del exterior cotizan en dólares, con Movete sabés exactamente cuánto pagás cada mes."
        />
        <div className="mx-auto mt-14 max-w-3xl rounded-3xl border border-lime-500/25 bg-ink-700/60 p-8 shadow-card sm:p-10">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-lime-400">Plan sugerido: Pro</p>
              <p className="mt-3 font-display text-4xl font-extrabold text-paper sm:text-5xl">
                $99.900<span className="text-lg font-semibold text-paper/60">/mes</span>
              </p>
              <p className="mt-2 text-sm text-paper/70">Hasta 120 atletas activos</p>
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-paper/70">
              ¿Más de 120 atletas o varias sedes? Armamos un plan Enterprise a la medida de tu box.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-4 border-t border-white/10 pt-8">
            <Button
              as="a"
              variant="whatsapp"
              size="lg"
              href={whatsappUrlWith('Hola 👋 Tengo un box y quiero saber más de Movete.')}
              target="_blank"
              rel="noopener"
              onClick={() => track('click_whatsapp', { from: 'para_boxes' })}
            >
              <MessageCircle className="h-5 w-5" />
              Hablar por WhatsApp
            </Button>
            <Link
              to="/#precios"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-paper/80 transition-colors hover:text-lime-400"
            >
              Ver todos los planes
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </Section>

      <Faq items={faqs} />

      <FeatureCTA
        title="Ordená tu box con Movete"
        text="Te mostramos el WOD, los cupos y el check-in con QR funcionando con la operación real de tu box, en una demo sin compromiso."
        related={[
          { label: FEATURE_PAGES[3].nav, to: FEATURE_PAGES[3].slug },
          { label: FEATURE_PAGES[0].nav, to: FEATURE_PAGES[0].slug },
        ]}
      />
    </>
  )
}
