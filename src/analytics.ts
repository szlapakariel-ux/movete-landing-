/**
 * Capa de analítica / eventos de conversión.
 * -------------------------------------------------------------
 * Los eventos se envían a GA4 vía gtag si está configurado el
 * Measurement ID en la variable de entorno VITE_GA_ID (ej: G-XXXXXXX).
 * Si no está configurada, los eventos se registran en dataLayer y en
 * consola (modo desarrollo) sin romper nada.
 */

export const GA_ID = import.meta.env.VITE_GA_ID as string | undefined

type Gtag = (...args: unknown[]) => void

declare global {
  interface Window {
    dataLayer?: unknown[]
    gtag?: Gtag
  }
}

/** Eventos de conversión soportados. */
export type AnalyticsEvent =
  | 'view_demo_page'
  | 'start_demo_form'
  | 'submit_demo_form'
  | 'click_whatsapp'
  | 'click_play_store'
  | 'click_feature_page'
  | 'view_feature_page'
  | 'page_view'
  | 'demo_solicitada'

/** Inicializa GA4 (carga el script de gtag una sola vez) si hay ID configurado. */
export function initAnalytics() {
  // No usar window.gtag como guard: el snippet de Consent Mode en index.html
  // ya define un gtag global antes de que corra esto.
  if (typeof window === 'undefined' || !GA_ID) return
  if (document.querySelector('script[src^="https://www.googletagmanager.com/gtag/js"]')) return

  const s = document.createElement('script')
  s.async = true
  s.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`
  document.head.appendChild(s)

  window.dataLayer = window.dataLayer || []
  // gtag.js solo procesa comandos pusheados como objeto `arguments`; un array
  // (rest params) se ignora silenciosamente. Reusar el gtag global del snippet
  // de Consent Mode en index.html, que ya pushea `arguments`.
  if (!window.gtag) {
    window.gtag = function () {
      // eslint-disable-next-line prefer-rest-params
      window.dataLayer!.push(arguments)
    } as Gtag
  }
  window.gtag('js', new Date())
  window.gtag('config', GA_ID)
}

/** Registra un evento de conversión. */
export function track(event: AnalyticsEvent, params: Record<string, unknown> = {}) {
  if (typeof window === 'undefined') return
  window.dataLayer = window.dataLayer || []

  if (window.gtag) {
    window.gtag('event', event, params)
  } else {
    // Sin GA configurado: dejamos el evento en dataLayer para depuración.
    window.dataLayer.push({ event, ...params })
    if (import.meta.env.DEV) console.debug('[analytics]', event, params)
  }
}
