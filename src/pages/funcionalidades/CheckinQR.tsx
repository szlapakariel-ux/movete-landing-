import { ClipboardList, QrCode, ScanLine, Clock, Users, ShieldCheck } from 'lucide-react'
import { Seo } from '../../components/Seo'
import { Breadcrumbs } from '../../components/Breadcrumbs'
import { PageHero } from '../../components/PageHero'
import { Section } from '../../components/Section'
import { SectionHeading } from '../../components/SectionHeading'
import { Card } from '../../components/Card'
import { Faq } from '../../components/Faq'
import { FeatureCTA } from '../../components/FeatureCTA'
import { PhoneMockup } from '../../components/PhoneMockup'
import { FEATURE_PAGES } from '../../content/pages'
import { breadcrumbLd, faqLd } from '../../seo/structuredData'

const PAGE = FEATURE_PAGES[3]

const faqs = [
  {
    q: '¿El QR sirve para abrir molinetes o puertas?',
    a: 'El check-in con QR registra el ingreso del socio de forma ágil desde el panel del gimnasio. No controla molinetes ni puertas: es un registro de asistencia, no un control de acceso físico.',
  },
  {
    q: '¿Por qué el QR es dinámico?',
    a: 'El código se actualiza periódicamente desde la app del socio, lo que evita que se reutilice o se comparta como una captura fija.',
  },
  {
    q: '¿Quién escanea el QR?',
    a: 'El equipo del gimnasio escanea el QR desde el panel para registrar el ingreso del socio de forma rápida en recepción.',
  },
]

export default function CheckinQR() {
  return (
    <>
      <Seo
        title={PAGE.seoTitle}
        description={PAGE.seoDescription}
        path={PAGE.slug}
        image="/og/check-in-qr.png"
        jsonLd={[
          breadcrumbLd([{ name: 'Inicio', path: '/' }, { name: PAGE.nav, path: PAGE.slug }]),
          faqLd(faqs.map((f) => ({ q: f.q, a: f.a }))),
        ]}
      />
      <Breadcrumbs items={[{ name: 'Inicio', path: '/' }, { name: PAGE.nav, path: PAGE.slug }]} />

      <PageHero
        eyebrow="Check-in con QR"
        title={PAGE.h1}
        intro="Agilizá el registro de ingreso de tus socios con un código QR dinámico desde la app. El equipo lo escanea desde el panel y queda registrada la asistencia."
        bullets={['QR dinámico desde la app', 'Escaneo desde el panel', 'Registro de asistencia', 'Recepción más ágil']}
        visual={<PhoneMockup screen="qr" />}
      />

      <Section tone="dark" ariaLabel="El problema de registrar ingresos a mano">
        <SectionHeading eyebrow="El problema" title="Registrar ingresos a mano cuesta tiempo y genera errores" accent="violet" />
        <div className="mt-14 grid gap-5 sm:grid-cols-3">
          <Card icon={ClipboardList} accent="violet" title="Planillas y listas" description="Anotar ingresos a mano es lento y se pierde información." />
          <Card icon={Clock} accent="violet" title="Filas en recepción" description="En horarios pico, el ingreso manual genera demoras." />
          <Card icon={Users} accent="violet" title="Sin seguimiento" description="Es difícil saber quién asiste y con qué frecuencia." />
        </div>
      </Section>

      <Section tone="darker" ariaLabel="Cómo funciona el check-in">
        <SectionHeading eyebrow="Cómo funciona" title="Del celular del socio al panel del gimnasio" />
        <div className="mt-14 grid gap-5 sm:grid-cols-3">
          <Card icon={QrCode} title="QR dinámico en la app" description="El socio abre su QR, que se actualiza solo para mayor seguridad." bullets={['Código dinámico', 'Siempre a mano', 'Sin capturas reutilizables']} />
          <Card icon={ScanLine} title="Escaneo desde el panel" description="El equipo escanea el QR desde el panel para registrar el ingreso." bullets={['Check-in en segundos', 'Sin planillas', 'Menos errores']} />
          <Card icon={ShieldCheck} title="Asistencia registrada" description="Cada ingreso queda registrado para el seguimiento operativo." bullets={['Historial de asistencia', 'Datos para decidir', 'Recepción ágil']} />
        </div>
      </Section>

      <Section tone="dark" ariaLabel="Captura del check-in">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="flex justify-center"><PhoneMockup screen="qr" /></div>
          <div>
            <SectionHeading eyebrow="Para recepción" title="Menos filas, mejor seguimiento" align="left" />
            <p className="mt-5 text-paper/70">
              El check-in con QR le da a tu equipo un registro de ingreso ágil y ordenado, sin reemplazar tu
              control físico de acceso si ya tenés uno. Es un registro de asistencia, no un control de molinetes.
            </p>
          </div>
        </div>
      </Section>

      <Faq items={faqs} />

      <FeatureCTA
        title="Agilizá el ingreso en tu gimnasio"
        related={[
          { label: FEATURE_PAGES[2].nav, to: FEATURE_PAGES[2].slug },
          { label: FEATURE_PAGES[1].nav, to: FEATURE_PAGES[1].slug },
        ]}
      />
    </>
  )
}
