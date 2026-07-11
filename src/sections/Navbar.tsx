import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, ChevronDown } from 'lucide-react'
import { Logo } from '../components/Logo'
import { Button } from '../components/Button'
import { FEATURE_PAGES, PARA_PAGES, DEMO_PAGE } from '../content/pages'
import { track } from '../analytics'

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [solutionsOpen, setSolutionsOpen] = useState(false)
  const [paraOpen, setParaOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const closeTimer = useRef<ReturnType<typeof setTimeout>>()
  const paraCloseTimer = useRef<ReturnType<typeof setTimeout>>()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const openSolutions = () => {
    clearTimeout(closeTimer.current)
    setSolutionsOpen(true)
  }
  const closeSolutions = () => {
    closeTimer.current = setTimeout(() => setSolutionsOpen(false), 120)
  }

  const openPara = () => {
    clearTimeout(paraCloseTimer.current)
    setParaOpen(true)
  }
  const closePara = () => {
    paraCloseTimer.current = setTimeout(() => setParaOpen(false), 120)
  }

  const onFeatureClick = (nav: string) => {
    track('click_feature_page', { feature: nav, from: 'navbar' })
    setOpen(false)
    setSolutionsOpen(false)
    setParaOpen(false)
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open ? 'border-b border-white/10 bg-ink-900/90 backdrop-blur' : 'bg-transparent'
      }`}
    >
      <nav
        className="container-mv flex h-16 items-center justify-between sm:h-20"
        aria-label="Navegación principal"
      >
        <Link to="/" aria-label="Movete — inicio">
          <Logo />
        </Link>

        {/* Desktop */}
        <ul className="hidden items-center gap-8 lg:flex">
          <li>
            <Link to="/" className="text-sm font-medium text-paper/75 transition-colors hover:text-lime-400">
              Inicio
            </Link>
          </li>

          <li className="relative" onMouseEnter={openSolutions} onMouseLeave={closeSolutions}>
            <button
              type="button"
              className="flex items-center gap-1 text-sm font-medium text-paper/75 transition-colors hover:text-lime-400"
              aria-expanded={solutionsOpen}
              aria-haspopup="true"
              onClick={() => setSolutionsOpen((v) => !v)}
            >
              Soluciones
              <ChevronDown className={`h-4 w-4 transition-transform ${solutionsOpen ? 'rotate-180' : ''}`} />
            </button>
            {solutionsOpen && (
              <div className="absolute left-0 top-full w-72 pt-3">
                <ul className="overflow-hidden rounded-2xl border border-white/10 bg-ink-800 p-2 shadow-card">
                  {FEATURE_PAGES.map((p) => (
                    <li key={p.slug}>
                      <Link
                        to={p.slug}
                        onClick={() => onFeatureClick(p.nav)}
                        className="block rounded-xl px-4 py-2.5 text-sm text-paper/80 transition-colors hover:bg-white/5 hover:text-lime-400"
                      >
                        {p.nav}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </li>

          <li className="relative" onMouseEnter={openPara} onMouseLeave={closePara}>
            <button
              type="button"
              className="flex items-center gap-1 text-sm font-medium text-paper/75 transition-colors hover:text-lime-400"
              aria-expanded={paraOpen}
              aria-haspopup="true"
              onClick={() => setParaOpen((v) => !v)}
            >
              ¿Para quién?
              <ChevronDown className={`h-4 w-4 transition-transform ${paraOpen ? 'rotate-180' : ''}`} />
            </button>
            {paraOpen && (
              <div className="absolute left-0 top-full w-72 pt-3">
                <ul className="overflow-hidden rounded-2xl border border-white/10 bg-ink-800 p-2 shadow-card">
                  {PARA_PAGES.map((p) => (
                    <li key={p.slug}>
                      <Link
                        to={p.slug}
                        onClick={() => onFeatureClick(p.nav)}
                        className="block rounded-xl px-4 py-2.5 text-sm text-paper/80 transition-colors hover:bg-white/5 hover:text-lime-400"
                      >
                        {p.nav}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </li>

          <li>
            <Link
              to="/#como-funciona"
              className="text-sm font-medium text-paper/75 transition-colors hover:text-lime-400"
            >
              Cómo funciona
            </Link>
          </li>

          <li>
            <Link
              to="/#precios"
              className="text-sm font-medium text-paper/75 transition-colors hover:text-lime-400"
            >
              Precios
            </Link>
          </li>
        </ul>

        <div className="flex items-center gap-2">
          <Button
            as="a"
            href={DEMO_PAGE.slug}
            variant="primary"
            className="max-lg:px-3.5 max-lg:py-2 max-sm:text-xs"
          >
            {DEMO_PAGE.nav}
          </Button>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-lg p-2 text-paper lg:hidden"
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile */}
      {open && (
        <div className="border-t border-white/10 bg-ink-900 lg:hidden">
          <ul className="container-mv flex flex-col gap-1 py-4">
            <li>
              <Link
                to="/"
                onClick={() => setOpen(false)}
                className="block rounded-lg px-2 py-3 text-base font-medium text-paper/80 hover:bg-white/5 hover:text-lime-400"
              >
                Inicio
              </Link>
            </li>
            <li className="px-2 pt-2 text-xs font-semibold uppercase tracking-widest text-paper/40">
              Soluciones
            </li>
            {FEATURE_PAGES.map((p) => (
              <li key={p.slug}>
                <Link
                  to={p.slug}
                  onClick={() => onFeatureClick(p.nav)}
                  className="block rounded-lg px-4 py-3 text-base font-medium text-paper/80 hover:bg-white/5 hover:text-lime-400"
                >
                  {p.nav}
                </Link>
              </li>
            ))}
            <li className="px-2 pt-2 text-xs font-semibold uppercase tracking-widest text-paper/40">
              ¿Para quién?
            </li>
            {PARA_PAGES.map((p) => (
              <li key={p.slug}>
                <Link
                  to={p.slug}
                  onClick={() => onFeatureClick(p.nav)}
                  className="block rounded-lg px-4 py-3 text-base font-medium text-paper/80 hover:bg-white/5 hover:text-lime-400"
                >
                  {p.nav}
                </Link>
              </li>
            ))}
            <li>
              <Link
                to="/#como-funciona"
                onClick={() => setOpen(false)}
                className="mt-1 block rounded-lg px-2 py-3 text-base font-medium text-paper/80 hover:bg-white/5 hover:text-lime-400"
              >
                Cómo funciona
              </Link>
            </li>
            <li>
              <Link
                to="/#precios"
                onClick={() => setOpen(false)}
                className="block rounded-lg px-2 py-3 text-base font-medium text-paper/80 hover:bg-white/5 hover:text-lime-400"
              >
                Precios
              </Link>
            </li>
            <li className="mt-2">
              <Button
                as="a"
                href={DEMO_PAGE.slug}
                variant="primary"
                size="lg"
                className="w-full"
                onClick={() => setOpen(false)}
              >
                {DEMO_PAGE.nav}
              </Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
