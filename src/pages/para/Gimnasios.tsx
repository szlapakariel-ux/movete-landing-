import { Link } from 'react-router-dom'
import {
  FileSpreadsheet,
  UserX,
  Banknote,
  Wallet,
  BellRing,
  QrCode,
  BarChart3,
  FileUp,
  Medal,
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
import { Button } from '../../components/Button'
import { PhoneMockup } from '../../components/PhoneMockup'
import { AdminMockup } from '../../components/AdminMockup'
import { PARA_PAGES, FEATURE_PAGES } from '../../content/pages'
import { whatsappUrlWith } from '../../content/landing'
import { track } from '../../analytics'
import { breadcrumbLd, faqLd } from '../../seo/structuredData'

const PAGE = PARA_PAGES[3]

const faqs = [
  {
    q: 'No tengo computadora ni molinete en la entrada, ¿cómo controlo el QR?',
    a: 'No hace falta molinete ni PC. El socio muestra su QR desde la app y vos lo escaneás desde el navegador de cualquier dispositivo con cámara: un celular o una tablet en el mostrador alcanza. Y si la cámara falla, ingresás el código a mano.',
  },
  {
    q: 'Hoy tengo todo en planillas y cuaderno, ¿tengo que cargar socio por socio?',
    a: 'No. Arrancás importando tus socios por CSV: exportás tu planilla, la subís y quedan cargados con sus datos. Después completás membresías y estados de cuenta, sin recargar todo a mano.',
  },
  {
    q: '¿Movete le cobra solo al socio o le bloquea la entrada si debe?',
    a: 'Ninguna de las dos, y te lo decimos de frente: no hay débito automático ni bloqueo físico del ingreso. El socio paga con Mercado Pago desde la app, y el efectivo o las transferencias las registrás a mano en el panel. Los vencimientos se avisan con recordatorios automáticos por push, email y dentro de la app, y vos ves al instante quién debe para decidir qué hacer.',
  },
]

export default function Gimnasios() {
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
        eyebrow="Gimnasios y escuelas deportivas"
        title={PAGE.h1}
        intro="Sabé de un vistazo quién pagó el mes y quién no, avisá los vencimientos sin perseguir a nadie y controlá la puerta con un QR. Para gimnasios de barrio y escuelas deportivas que hoy gestionan con planilla, cuaderno y efectivo."
        bullets={['Deudores del mes de un vistazo', 'Recordatorios de vencimiento automáticos', 'Check-in con QR en la puerta', 'Estadísticas de ingresos y ocupación']}
        visual={<PhoneMockup screen="qr" />}
      />

      <Section tone="dark" ariaLabel="El problema de gestionar con planillas y cuaderno">
        <SectionHeading
          eyebrow="El problema"
          title="La planilla no te avisa quién entró sin pagar"
          accent="violet"
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-3">
          <Card icon={FileSpreadsheet} accent="violet" title="El control se pierde" description="Entre la planilla, el cuaderno y la memoria, nunca sabés con certeza quién pagó el mes y quién no." />
          <Card icon={UserX} accent="violet" title="Morosos que entran igual" description="Perseguir deudores cansa, incomoda y desgasta la relación con el socio que sí paga a tiempo." />
          <Card icon={Banknote} accent="violet" title="Efectivo sin registro" description="Cobros en mano y transferencias sueltas que no quedan anotados en ningún lado consistente." />
        </div>
      </Section>

      <Section tone="darker" ariaLabel="Cómo Movete ordena pagos y accesos">
        <SectionHeading eyebrow="Cómo funciona" title="Quién pagó, quién debe y quién entró: todo a la vista" />
        <div className="mt-14 grid gap-5 sm:grid-cols-3">
          <Card icon={Wallet} title="Deudores y estado de cuenta" description="El panel te muestra los deudores del mes y el estado de cuenta de cada socio, con su ficha e historial completo." bullets={['Deudores del mes de un vistazo', 'Pago con Mercado Pago desde la app', 'Efectivo y transferencias se registran a mano']} />
          <Card icon={BellRing} title="Vencimientos con recordatorios" description="Cuando el abono está por vencer, el socio recibe recordatorios automáticos. Vos no perseguís a nadie." bullets={['Avisos por push, email y en la app', 'Membresías, planes y packs', 'El estado se actualiza al registrar el pago']} />
          <Card icon={QrCode} title="Check-in con QR en la puerta" description="El socio muestra su QR desde la app y lo escaneás desde el navegador de cualquier dispositivo con cámara." bullets={['Un celular o tablet en el mostrador alcanza', 'Ingreso manual del código si la cámara falla', 'Registro de asistencia automático']} />
        </div>
      </Section>

      <Section tone="dark" ariaLabel="Capturas de la app y el panel">
        <SectionHeading eyebrow="App y panel" title="Tu socio ve su abono al día; vos ves el negocio completo" />
        <div className="mt-14 grid items-center gap-12 lg:grid-cols-2">
          <div className="flex justify-center"><PhoneMockup screen="profile" /></div>
          <div className="flex justify-center"><AdminMockup /></div>
        </div>
      </Section>

      <Section tone="darker" ariaLabel="Más herramientas para tu gimnasio o escuela">
        <SectionHeading eyebrow="Además" title="Arrancás rápido y crecés con datos" />
        <div className="mt-14 grid gap-5 sm:grid-cols-3">
          <Card icon={FileUp} title="Importás tus socios por CSV" description="Exportá tu planilla actual y subila: tus socios quedan cargados desde el día uno, sin tipear todo de nuevo." />
          <Card icon={BarChart3} title="Estadísticas del negocio" description="Ingresos, ocupación de clases y cancelaciones para decidir con números y no con sensaciones." />
          <Card icon={Medal} title="También para escuelas deportivas" description="Artes marciales, fútbol infantil, tenis y paddle: gestionás a tus alumnos con planes por categoría, multi-sede y roles para tu equipo." />
        </div>
      </Section>

      <Section tone="dark" ariaLabel="Precio del plan para gimnasios">
        <SectionHeading eyebrow="Precio" title="Un plan que cuesta menos que un solo abono impago" />
        <div className="mx-auto mt-12 max-w-3xl rounded-3xl border border-lime-500/20 bg-gradient-to-br from-ink-700/60 to-ink-900 p-8 text-center sm:p-12">
          <p className="text-sm font-semibold uppercase tracking-widest text-lime-400">Plan sugerido: Pro</p>
          <p className="mt-4 font-display text-5xl font-extrabold text-paper">
            $99.900<span className="text-xl font-bold text-paper/60">/mes</span>
          </p>
          <p className="mt-2 text-sm text-paper/70">Hasta 120 socios activos</p>
          <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-paper/70">
            Para un gimnasio típico de barrio es menos del 1% de la facturación mensual. Y seamos honestos con el tope: si tenés más de 120 socios activos, tu plan es Enterprise, con precio a medida — escribinos y lo armamos juntos.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button
              as="a"
              href={whatsappUrlWith('Hola 👋 Tengo un gimnasio y quiero saber más de Movete.')}
              target="_blank"
              rel="noopener"
              variant="whatsapp"
              size="lg"
              onClick={() => track('click_whatsapp', { from: 'para_gimnasios' })}
            >
              <MessageCircle className="h-5 w-5" />
              Consultar por WhatsApp
            </Button>
            <Link
              to="/#precios"
              className="inline-flex items-center gap-1.5 rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-paper/80 transition-colors hover:border-lime-500 hover:text-lime-400"
            >
              Ver todos los planes
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </Section>

      <Faq items={faqs} />

      <FeatureCTA
        title="Dejá la planilla y quedate con el control"
        text="Te mostramos Movete con los números de tu gimnasio o escuela en una demo sin compromiso."
        related={[
          { label: FEATURE_PAGES[3].nav, to: FEATURE_PAGES[3].slug },
          { label: FEATURE_PAGES[1].nav, to: FEATURE_PAGES[1].slug },
        ]}
      />
    </>
  )
}
