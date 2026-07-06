import { useEffect, useRef } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { Navbar } from '../sections/Navbar'
import { Footer } from '../sections/Footer'
import { initAnalytics, track } from '../analytics'

/** Al cambiar de ruta, sube al inicio o salta a la ancla (#seccion) si la hay. */
function useScrollBehaviour() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1))
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
        return
      }
    }
    window.scrollTo({ top: 0 })
  }, [pathname, hash])
}

/**
 * Dispara un page_view manual en cada cambio de ruta (SPA).
 * El primer page_view ya lo envia gtag('config', ...) al cargar el script,
 * por eso aca solo se notifican las navegaciones posteriores.
 */
function usePageViewTracking() {
  const { pathname } = useLocation()
  const isFirstRender = useRef(true)

useEffect(() => {
  if (isFirstRender.current) {
    isFirstRender.current = false
    return
  }
  track('page_view', {
    page_path: pathname,
    page_location: window.location.href,
    page_title: document.title,
  })
}, [pathname])
}

/** Shell comun a todas las paginas: navbar + contenido + footer. */
export function Layout() {
  useScrollBehaviour()
  usePageViewTracking()

useEffect(() => {
  initAnalytics()
}, [])

return (
    <>
      <Navbar />
    <main>
      <Outlet />
    </main>
    <Footer />
    </>
    )
}
