import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { Navbar } from '../sections/Navbar'
import { Footer } from '../sections/Footer'
import { initAnalytics } from '../analytics'

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

/** Shell común a todas las páginas: navbar + contenido + footer. */
export function Layout() {
  useScrollBehaviour()

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
