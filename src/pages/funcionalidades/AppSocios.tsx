import { CalendarCheck, Wallet, Bell, User, QrCode, Building2, Dumbbell } from 'lucide-react'
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
import { FEATURE_PAGES, PLAY_STORE_URL } from '../../content/pages'
import { breadcrumbLd, faqLd } from '../../seo/structuredData'
import { track } from '../../analytics'

const PAGE = FEATURE_PAGES[2]

const faqs = [
  {
    q: '¿Cualquier persona puede usar la app?',
    a: 'La app la usan los socios de gimnasios, boxes y estudios que trabajan con Movete. El socio se vincula a su gimnasio con un código o link de invitación; no es una app de entrenamiento abierta para cualquier persona.',
  },
  {
    q: '¿Un socio puede estar en más de un gimnasio?',
    a: 'Sí. Cuando corresponde, un mismo socio puede vincularse a más de una organización y cambiar entre ellas sin cerrar sesión.',
  },
  {
    q: '¿En qué dispositivos funciona?',
    a: 'La app del socio está disponible para Android. Desde la app reserva clases, consulta abonos, recibe avisos y hace check-in con QR.',
  },
]

export default function AppSocios() {
  return (
    <>
      <Seo
        title={PAGE.seoTitle}
        description={PAGE.seoDescription}
        path={PAGE.slug}
        image="/og/app-socios.png"
        jsonLd={[
          breadcrumbLd([{ name: 'Inicio', path: '/' }, { name: PAGE.nav, path: PAGE.slug }]),
          faqLd(faqs.map((f) => ({ q: f.q, a: f.a }))),
        ]}
      />
      <Breadcrumbs items={[{ name: 'Inicio', path: '/' }, { name: PAGE.nav, path: PAGE.slug }]} />

      <PageHero
        eyebrow="App para socios · Android"
        title={PAGE.h1}
        intro="Dales a tus socios una app para reservar clases, consultar abonos, recibir avisos y hacer check-in con QR. Menos consultas repetidas para tu equipo."
        bullets={['Reservas y cupos', 'Abonos y saldos', 'Notificaciones', 'Check-in con QR']}
        visual={<PhoneMockup screen="home" />}
      />

      <Section tone="dark" ariaLabel="Qué hace el socio desde la app">
        <SectionHeading eyebrow="En la app" title="Todo lo que el socio resuelve solo" />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <Card icon={CalendarCheck} title="Clases y reservas" description="Ve las clases disponibles con su cupo, reserva y cancela según la política del gimnasio." bullets={['Catálogo de clases', 'Cupos en tiempo real', 'Lista de espera']} />
          <Card icon={Wallet} title="Abonos y pagos" description="Consulta su abono vigente, créditos, consumos y estado de cuenta." bullets={['Abono y créditos', 'Historial', 'Compra o renovación']} />
          <Card icon={Bell} title="Notificaciones" description="Recibe avisos importantes del gimnasio por la app, push o email." bullets={['Avisos del gimnasio', 'Recordatorios', 'Novedades']} />
          <Card icon={User} title="Perfil del socio" description="Gestiona sus datos, contraseña y preferencias de notificaciones." bullets={['Datos personales', 'Seguridad', 'Preferencias']} />
          <Card icon={Building2} title="Multiinstitución" description="Cuando corresponde, se vincula a más de un gimnasio con la misma cuenta." bullets={['Cambio de gimnasio', 'Misma cuenta', 'Por invitación']} />
          <Card icon={QrCode} title="Check-in con QR" description="Genera un QR dinámico para registrar su ingreso de forma ágil." bullets={['QR dinámico', 'Check-in rápido', 'Menos filas']} />
        </div>
      </Section>

      <Section tone="darker" ariaLabel="Entrenamiento del día">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="flex justify-center order-2 lg:order-1"><PhoneMockup screen="classes" /></div>
          <div className="order-1 lg:order-2">
            <SectionHeading eyebrow="Contenido diario" title="WOD y contenido del día, cuando aplica" align="left" />
            <p className="mt-5 text-paper/70">
              Si tu gimnasio trabaja con entrenamiento del día (WOD) u otro contenido, el socio puede consultarlo
              desde la app junto con sus clases y reservas.
            </p>
            <div className="mt-6 flex items-center gap-2 text-sm text-lime-400">
              <Dumbbell className="h-5 w-5" />
              Disponible según la configuración de cada organización
            </div>
          </div>
        </div>
      </Section>

      <Section tone="dark" ariaLabel="Descargar la app">
        <div className="mx-auto max-w-2xl rounded-3xl border border-white/10 bg-ink-700/50 p-8 text-center sm:p-10">
          <h2 className="font-display text-2xl font-bold text-paper">La app de los socios está en Google Play</h2>
          <p className="mx-auto mt-3 max-w-lg text-paper/70">
            La descargan los socios de organizaciones que trabajan con Movete. ¿Querés ofrecerla en tu gimnasio?
          </p>
          <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button
              as="a"
              href={PLAY_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              variant="secondary"
              size="lg"
              onClick={() => track('click_play_store', { from: 'app_socios' })}
            >
              Ver en Google Play
            </Button>
          </div>
        </div>
      </Section>

      <Faq items={faqs} />

      <FeatureCTA
        title="Pedí una demo para tu gimnasio"
        text="Te mostramos cómo se ve la app aplicada a tu operación y qué reciben tus socios."
        related={[
          { label: FEATURE_PAGES[0].nav, to: FEATURE_PAGES[0].slug },
          { label: FEATURE_PAGES[3].nav, to: FEATURE_PAGES[3].slug },
        ]}
      />
    </>
  )
}
