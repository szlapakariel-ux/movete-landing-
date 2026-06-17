import { useState, type FormEvent } from 'react'
import { Send, MessageCircle, CheckCircle2, Loader2 } from 'lucide-react'
import { Button } from '../components/Button'
import { CTA_FINAL, CONTACT, whatsappUrl, CTA } from '../content/landing'

type Status = 'idle' | 'sending' | 'success' | 'error'

const f = CTA_FINAL.form

export function ContactForm() {
  const [status, setStatus] = useState<Status>('idle')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')

    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form).entries())

    // Si no hay endpoint configurado, simulamos un envío exitoso.
    if (!CONTACT.formEndpoint) {
      setTimeout(() => setStatus('success'), 700)
      return
    }

    try {
      const res = await fetch(CONTACT.formEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(data),
      })
      setStatus(res.ok ? 'success' : 'error')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="rounded-3xl border border-lime-500/30 bg-ink-800 p-8 text-center sm:p-10">
        <CheckCircle2 className="mx-auto h-14 w-14 text-lime-400" />
        <h3 className="mt-4 font-display text-2xl font-bold text-paper">
          {f.successTitle}
        </h3>
        <p className="mt-2 text-paper/70">{f.successMessage}</p>
        <Button as="a" href={whatsappUrl} target="_blank" rel="noopener noreferrer" variant="whatsapp" className="mt-6">
          <MessageCircle className="h-4 w-4" />
          {CTA.whatsapp}
        </Button>
      </div>
    )
  }

  return (
    <div className="rounded-3xl border border-white/10 bg-ink-800 p-7 shadow-card sm:p-9">
      <h3 className="font-display text-2xl font-bold text-paper">{f.title}</h3>
      <p className="mt-2 text-sm text-paper/65">{f.description}</p>

      <form onSubmit={handleSubmit} className="mt-6 space-y-4" noValidate>
        <Field id="name" name="name" label={f.fields.name} required autoComplete="name" />
        <Field id="gym" name="gym" label={f.fields.gym} required autoComplete="organization" />
        <div className="grid gap-4 sm:grid-cols-2">
          <Field id="email" name="email" type="email" label={f.fields.email} required autoComplete="email" />
          <Field id="phone" name="phone" type="tel" label={f.fields.phone} required autoComplete="tel" />
        </div>
        <Field id="message" name="message" label={f.fields.message} textarea />

        {status === 'error' && (
          <p role="alert" className="text-sm text-red-400">
            No pudimos enviar el formulario. Probá de nuevo o escribinos por WhatsApp.
          </p>
        )}

        <Button type="submit" variant="primary" size="lg" className="w-full" disabled={status === 'sending'}>
          {status === 'sending' ? (
            <>
              <Loader2 className="h-5 w-5 animate-spin" />
              Enviando…
            </>
          ) : (
            <>
              <Send className="h-5 w-5" />
              {f.submit}
            </>
          )}
        </Button>

        <div className="flex flex-col items-center gap-2 pt-1 text-center">
          <span className="text-xs text-paper/50">{f.whatsappHint}</span>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-lime-400 hover:text-lime-300"
          >
            <MessageCircle className="h-4 w-4" />
            {CTA.whatsapp}
          </a>
        </div>
      </form>
    </div>
  )
}

interface FieldProps {
  id: string
  name: string
  label: string
  type?: string
  required?: boolean
  textarea?: boolean
  autoComplete?: string
}

function Field({ id, name, label, type = 'text', required, textarea, autoComplete }: FieldProps) {
  const inputClasses =
    'mt-1.5 w-full rounded-xl border border-white/15 bg-ink-900/60 px-4 py-3 text-sm text-paper placeholder-paper/30 transition-colors focus:border-lime-500 focus-visible:ring-1 focus-visible:ring-lime-500'

  return (
    <div>
      <label htmlFor={id} className="text-sm font-medium text-paper/85">
        {label}
        {required && <span className="ml-1 text-lime-400">*</span>}
      </label>
      {textarea ? (
        <textarea id={id} name={name} rows={3} className={inputClasses} />
      ) : (
        <input
          id={id}
          name={name}
          type={type}
          required={required}
          autoComplete={autoComplete}
          className={inputClasses}
        />
      )}
    </div>
  )
}
