import { useState, type FormEvent } from 'react'
import { MessageCircle, CheckCircle2, Loader2, Send } from 'lucide-react'
import { Button } from './Button'
import { CONTACT } from '../content/landing'
import { track } from '../analytics'

const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_KEY as string | undefined

type Status = 'idle' | 'sending' | 'success' | 'error'

const TIPOS = ['Gimnasio', 'Box', 'Estudio', 'Otro']
const SOCIOS = ['Hasta 50', '51 a 150', '151 a 300', 'Más de 300']
const SEDES = ['1', '2 a 3', '4 o más']
const PROBLEMAS = ['Reservas', 'Pagos', 'Abonos', 'Socios', 'Organización general', 'Otro']

export function DemoForm() {
  const [status, setStatus] = useState<Status>('idle')
  const [started, setStarted] = useState(false)
  const [lastData, setLastData] = useState<Record<string, string>>({})

  const onFirstInteraction = () => {
    if (!started) {
      setStarted(true)
      track('start_demo_form')
    }
  }

  function buildWhatsapp(d: Record<string, string>) {
    const lines = [
      '👋 *Solicitud de demo de Movete*',
      '',
      `*Nombre:* ${d.nombre}`,
      `*Negocio:* ${d.gimnasio} (${d.tipo})`,
      `*WhatsApp:* ${d.whatsapp}`,
      `*Email:* ${d.email}`,
      `*Socios:* ${d.socios}`,
      `*Sedes:* ${d.sedes}`,
      `*Problema a resolver:* ${d.problema}`,
    ]
    if (d.clases) lines.push(`*Clases semanales:* ${d.clases}`)
    if (d.sistema) lines.push(`*Sistema actual:* ${d.sistema}`)
    if (d.comentario) lines.push(`*Comentario:* ${d.comentario}`)
    return `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(lines.join('\n'))}`
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const fd = new FormData(form)

    // Honeypot: si el campo oculto viene completo, es un bot → cortamos en silencio.
    if ((fd.get('botcheck') as string) || (fd.get('company_website') as string)) {
      setStatus('success')
      return
    }

    const data = Object.fromEntries(
      Array.from(fd.entries()).map(([k, v]) => [k, v.toString().trim()]),
    ) as Record<string, string>
    setLastData(data)
    setStatus('sending')
    track('submit_demo_form', {
      tipo: data.tipo,
      socios: data.socios,
      sedes: data.sedes,
      problema: data.problema,
    })

    // Envío por email vía Web3Forms si está configurada la clave pública.
    if (WEB3FORMS_KEY) {
      try {
        await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify({
            access_key: WEB3FORMS_KEY,
            subject: `Demo Movete — ${data.gimnasio || data.nombre}`,
            from_name: 'Landing Movete',
            ...data,
          }),
        })
      } catch {
        // Si falla el email, igual ofrecemos WhatsApp en la confirmación.
      }
    }

    setStatus('success')
  }

  if (status === 'success') {
    const wa = buildWhatsapp(lastData)
    return (
      <div className="rounded-3xl border border-lime-500/30 bg-ink-800 p-8 text-center sm:p-10">
        <CheckCircle2 className="mx-auto h-14 w-14 text-lime-400" />
        <h2 className="mt-4 font-display text-2xl font-bold text-paper">¡Recibimos tu solicitud!</h2>
        <p className="mt-2 text-paper/70">
          Te vamos a contactar para coordinar tu demo. Si querés, mandanos también los datos por WhatsApp
          y agilizamos la respuesta.
        </p>
        <Button
          as="a"
          href={wa}
          target="_blank"
          rel="noopener noreferrer"
          variant="whatsapp"
          className="mt-6"
          onClick={() => track('click_whatsapp', { from: 'demo_success' })}
        >
          <MessageCircle className="h-4 w-4" />
          Enviar también por WhatsApp
        </Button>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      onFocusCapture={onFirstInteraction}
      noValidate
      className="rounded-3xl border border-white/10 bg-ink-800 p-7 shadow-card sm:p-9"
    >
      {/* Honeypot antispam (oculto para humanos) */}
      <div className="absolute left-[-9999px]" aria-hidden="true">
        <label>
          No completar este campo
          <input type="text" name="company_website" tabIndex={-1} autoComplete="off" />
        </label>
        <input type="checkbox" name="botcheck" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field name="nombre" label="Nombre y apellido" required autoComplete="name" />
        <Field name="gimnasio" label="Nombre del gimnasio, box o estudio" required autoComplete="organization" />
        <Field name="whatsapp" label="WhatsApp" type="tel" required autoComplete="tel" />
        <Field name="email" label="Email" type="email" required autoComplete="email" />
        <SelectField name="tipo" label="Tipo de negocio" options={TIPOS} required />
        <SelectField name="socios" label="Cantidad aproximada de socios" options={SOCIOS} required />
        <SelectField name="sedes" label="Cantidad de sedes" options={SEDES} required />
        <SelectField name="problema" label="Principal problema a resolver" options={PROBLEMAS} required />
        <Field name="clases" label="Clases semanales (opcional)" type="number" />
        <Field name="sistema" label="Sistema que usás hoy (opcional)" />
      </div>

      <div className="mt-4">
        <Field name="comentario" label="Comentario adicional (opcional)" textarea />
      </div>

      {status === 'error' && (
        <p role="alert" className="mt-4 text-sm text-red-400">
          No pudimos enviar el formulario. Probá de nuevo o escribinos por WhatsApp.
        </p>
      )}

      <Button type="submit" variant="primary" size="lg" className="mt-6 w-full" disabled={status === 'sending'}>
        {status === 'sending' ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" /> Enviando…
          </>
        ) : (
          <>
            <Send className="h-5 w-5" /> Solicitar demo
          </>
        )}
      </Button>

      <p className="mt-4 text-center text-xs text-paper/45">
        Al enviar aceptás nuestra{' '}
        <a href="/privacidad" className="underline hover:text-lime-400">
          política de privacidad
        </a>
        .
      </p>
    </form>
  )
}

const inputClasses =
  'mt-1.5 w-full rounded-xl border border-white/15 bg-ink-900/60 px-4 py-3 text-sm text-paper placeholder-paper/30 transition-colors focus:border-lime-500 focus-visible:ring-1 focus-visible:ring-lime-500'

interface FieldProps {
  name: string
  label: string
  type?: string
  required?: boolean
  textarea?: boolean
  autoComplete?: string
}

function Field({ name, label, type = 'text', required, textarea, autoComplete }: FieldProps) {
  return (
    <div>
      <label htmlFor={name} className="text-sm font-medium text-paper/85">
        {label}
        {required && <span className="ml-1 text-lime-400">*</span>}
      </label>
      {textarea ? (
        <textarea id={name} name={name} rows={3} className={inputClasses} />
      ) : (
        <input id={name} name={name} type={type} required={required} autoComplete={autoComplete} className={inputClasses} />
      )}
    </div>
  )
}

function SelectField({ name, label, options, required }: { name: string; label: string; options: string[]; required?: boolean }) {
  return (
    <div>
      <label htmlFor={name} className="text-sm font-medium text-paper/85">
        {label}
        {required && <span className="ml-1 text-lime-400">*</span>}
      </label>
      <select id={name} name={name} required={required} defaultValue="" className={inputClasses}>
        <option value="" disabled>
          Seleccioná una opción
        </option>
        {options.map((o) => (
          <option key={o} value={o} className="bg-ink-800">
            {o}
          </option>
        ))}
      </select>
    </div>
  )
}
