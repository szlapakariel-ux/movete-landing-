import {
  Receipt,
  Users2,
  MessageSquareDashed,
  CreditCard,
  Wallet,
  CalendarCheck,
  Smartphone,
  BellRing,
  WifiOff,
  MessageCircle,
  ArrowRight,
  Check,
} from 'lucide-react'
import { Link } from 'react-router-dom'
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

const PAGE = PARA_PAGES[1]

const faqs = [
  {
    q: 'Tengo pocos alumnos, ¿no me alcanza con WhatsApp y Excel gratis?',
    a: 'WhatsApp y Excel no cuestan plata, pero el costo real es tu tiempo: horas revisando el homebanking para ver quién transfirió y chats interminables para coordinar cupos. A eso sumale los cobros que se caen porque nadie los reclamó a tiempo. El plan Starter cuesta menos que la cuota de un solo alumno.',
  },
  {
    q: '¿Cómo pagan mis alumnos?',
    a: 'Compran o renuevan sus packs y abonos desde la app con Mercado Pago (Checkout Pro). Y si alguien te paga en efectivo o por transferencia, lo registrás en el panel en segundos. Todo queda en el estado de cuenta de cada alumno.',
  },
  {
    q: '¿Necesito una computadora o un local para usarlo?',
    a: 'No. El panel es web, lo abrís desde el navegador y lo podés instalar como app en tu celular (PWA) para tenerlo a un toque entre clase y clase. Y la app de tus alumnos —Android o iPhone— funciona offline-first: en la plaza o el parque con mala señal, siguen viendo sus entrenamientos y reservas.',
  },
]

export default function Entrenadores() {
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
        eyebrow="Entrenadores y profes independientes"
        title={PAGE.h1}
        intro="Para personal trainers, profes de plaza, running teams y calistenia. Tus alumnos reservan y pagan desde la app, y vos ves quién pagó y quién debe sin revisar el homebanking. Sin local, sin recepción, sin planillas."
        bullets={['Cobros con Mercado Pago', 'Deudores del mes de un vistazo', 'Cupos por horario para tus grupos', 'Avisos push a todo el grupo']}
        visual={<PhoneMockup screen="home" />}
      />

      <Section tone="dark" ariaLabel="El problema de gestionar con WhatsApp y capturas">
        <SectionHeading
          eyebrow="El problema"
          title="Entrenás una hora y administrás tres"
          accent="violet"
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-3">
          <Card icon={Receipt} accent="violet" title="La caza de capturas" description="“Pierdo horas revisando el homebanking para ver quién me transfirió.” Capturas sueltas, transferencias sin nombre y cuentas que no cierran." />
          <Card icon={Users2} accent="violet" title="Cupos a ojo" description="Grupos que se llenan por chat, alumnos que caen sin avisar y horarios sobrevendidos porque nadie llevó la cuenta." />
          <Card icon={MessageSquareDashed} accent="violet" title="Avisos uno por uno" description="Llueve, es feriado o cambia el punto de encuentro: el mismo mensaje reenviado a cada chat y siempre alguien que no se entera." />
        </div>
      </Section>

      <Section tone="darker" ariaLabel="Cómo Movete ordena cobros y cupos">
        <SectionHeading eyebrow="Cómo funciona" title="Cobros, deudores y cupos resueltos desde el celular" />
        <div className="mt-14 grid gap-5 sm:grid-cols-3">
          <Card icon={CreditCard} title="Cobrás con Mercado Pago" description="Tus alumnos compran o renuevan sus packs y abonos desde la app. Se acabó la caza de capturas de transferencia." bullets={['Checkout Pro desde la app', 'Packs de créditos y abonos', 'Efectivo o transferencia: lo registrás en el panel']} />
          <Card icon={Wallet} title="Quién pagó y quién debe" description="Estado de cuenta por alumno y deudores del mes de un vistazo, sin cruzar el homebanking con el Excel." bullets={['Estado de cuenta por alumno', 'Deudores del mes', 'Estadísticas de tu actividad']} />
          <Card icon={CalendarCheck} title="Cupos por horario" description="Definís el cupo de cada grupo y tus alumnos reservan solos desde la app. Vos llegás a la plaza sabiendo quiénes van." bullets={['Reservas desde la app', 'Lista de espera ordenada', 'Cancelación según tu política']} />
        </div>
      </Section>

      <Section tone="dark" ariaLabel="Movete al aire libre, sin oficina">
        <SectionHeading eyebrow="Sin local propio" title="Tu oficina es el celular, tu gimnasio es la plaza" />
        <div className="mt-14 grid items-center gap-12 lg:grid-cols-2">
          <div className="flex justify-center"><PhoneMockup screen="classes" /></div>
          <div className="grid gap-5">
            <Card icon={Smartphone} title="Panel web, sin recepción" description="El panel se abre desde el navegador, también en el celular. Registrás un pago o revisás las reservas entre clase y clase, desde donde estés." />
            <Card icon={BellRing} title="Avisos a todo el grupo" description="Cambio de punto de encuentro, lluvia o feriado: un solo aviso por notificación push, in-app o email y se enteran todos a la vez." />
            <Card icon={WifiOff} title="App que funciona sin señal" description="La app de tus alumnos es offline-first: en la plaza, el parque o la pista con mala señal, siguen viendo sus entrenamientos y reservas. Y tus alumnos actuales los importás desde un CSV." />
          </div>
        </div>
      </Section>

      <Section tone="darker" ariaLabel="Precio para entrenadores independientes">
        <SectionHeading
          eyebrow="Precio"
          title="Cuesta menos que la cuota de un solo alumno"
          subtitle="Si cobrás $10.000 o más por mes a cada alumno, con la cuota de uno solo ya cubrís Movete. Todo lo demás es tiempo que recuperás."
        />
        <div className="mx-auto mt-14 grid max-w-3xl gap-5 sm:grid-cols-2">
          <div className="flex h-full flex-col rounded-3xl border border-lime-500/40 bg-ink-700/60 p-7 shadow-card">
            <p className="text-sm font-semibold uppercase tracking-widest text-lime-400">Starter</p>
            <p className="mt-3 font-display text-4xl font-extrabold text-paper">
              $14.900<span className="text-base font-semibold text-paper/60">/mes</span>
            </p>
            <p className="mt-2 text-sm text-paper/70">Hasta 20 alumnos activos. Ideal para arrancar con tu grupo.</p>
            <ul className="mt-5 space-y-2 border-t border-white/10 pt-5">
              {['Cobros con Mercado Pago', 'Reservas y cupos por horario', 'Deudores del mes y estado de cuenta'].map((b) => (
                <li key={b} className="flex items-start gap-2 text-sm text-paper/80">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-lime-400" strokeWidth={3} />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex h-full flex-col rounded-3xl border border-white/10 bg-ink-700/60 p-7 shadow-card">
            <p className="text-sm font-semibold uppercase tracking-widest text-paper/60">Growth</p>
            <p className="mt-3 font-display text-4xl font-extrabold text-paper">
              $29.900<span className="text-base font-semibold text-paper/60">/mes</span>
            </p>
            <p className="mt-2 text-sm text-paper/70">Hasta 50 alumnos activos. Para cuando el running team ya es una comunidad.</p>
            <ul className="mt-5 space-y-2 border-t border-white/10 pt-5">
              {['Todo lo de Starter', 'Más alumnos y más grupos', 'Estadísticas para hacer crecer tu actividad'].map((b) => (
                <li key={b} className="flex items-start gap-2 text-sm text-paper/80">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-lime-400" strokeWidth={3} />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Button
            as="a"
            variant="whatsapp"
            size="lg"
            href={whatsappUrlWith('Hola 👋 Soy entrenador/a independiente y quiero saber más de Movete.')}
            target="_blank"
            rel="noopener"
            onClick={() => track('click_whatsapp', { from: 'para_entrenadores' })}
          >
            <MessageCircle className="h-5 w-5" />
            Consultar por WhatsApp
          </Button>
          <Link
            to="/#precios"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-paper/80 transition-colors hover:text-lime-400"
          >
            Ver todos los planes
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Section>

      <Faq items={faqs} tone="dark" />

      <FeatureCTA
        title="Ordená tus alumnos y tus cobros con Movete"
        text="Te mostramos cómo se adapta a tus grupos y horarios en una demo sin compromiso."
        related={[
          { label: FEATURE_PAGES[1].nav, to: FEATURE_PAGES[1].slug },
          { label: FEATURE_PAGES[2].nav, to: FEATURE_PAGES[2].slug },
        ]}
      />
    </>
  )
}
