import { useEffect, useState } from 'react'
import { useRouteError } from 'react-router-dom'
import { Button } from './Button'

/**
 * Pantalla de error del router con auto-recuperación post-deploy.
 * -------------------------------------------------------------
 * Cada build genera archivos con hash (chunks JS y el manifest de datos
 * del SSG). Una pestaña abierta durante un deploy pide archivos del build
 * anterior, recibe el 404 en HTML y explota con "Unexpected token '<' ...
 * is not valid JSON". La solución es recargar: el navegador toma el build
 * nuevo. Acá lo hacemos solos, con un tope de un intento por minuto para
 * no entrar en loop si el error es otro.
 */

const RELOAD_KEY = 'movete:reload-after-deploy'
const RELOAD_WINDOW_MS = 60_000

function isStaleDeployError(error: unknown): boolean {
  const message =
    error instanceof Error
      ? `${error.name} ${error.message}`
      : String(error)
  return (
    message.includes('is not valid JSON') ||
    message.includes("Unexpected token '<'") ||
    message.includes('dynamically imported module') ||
    message.includes('Importing a module script failed')
  )
}

/** Recarga la página como mucho una vez por minuto. Devuelve si recargó. */
export function reloadOncePerWindow(): boolean {
  try {
    const last = Number(sessionStorage.getItem(RELOAD_KEY) || 0)
    if (Date.now() - last < RELOAD_WINDOW_MS) return false
    sessionStorage.setItem(RELOAD_KEY, String(Date.now()))
  } catch {
    // sessionStorage bloqueado: recargamos igual, sin guarda.
  }
  window.location.reload()
  return true
}

export function RouteError() {
  const error = useRouteError()
  const [showFallback, setShowFallback] = useState(false)

  useEffect(() => {
    if (isStaleDeployError(error) && reloadOncePerWindow()) return
    setShowFallback(true)
  }, [error])

  // Mientras decide (o recarga), no mostramos nada: el reload es inmediato.
  if (!showFallback) return null

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-ink-900 px-6 text-center">
      <h1 className="font-display text-3xl font-bold text-paper">
        Estamos actualizando el sitio
      </h1>
      <p className="mt-3 max-w-md text-paper/70">
        Parece que quedó cargada una versión anterior. Recargá la página y listo.
      </p>
      <Button
        variant="primary"
        size="lg"
        className="mt-8"
        onClick={() => window.location.reload()}
      >
        Recargar
      </Button>
      <a href="/" className="mt-4 text-sm text-paper/50 underline hover:text-lime-400">
        Ir al inicio
      </a>
    </div>
  )
}
