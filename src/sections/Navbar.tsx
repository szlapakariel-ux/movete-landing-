import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Logo } from '../components/Logo'
import { Button } from '../components/Button'
import { NAV_LINKS, CTA } from '../content/landing'

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open
          ? 'border-b border-white/10 bg-ink-900/90 backdrop-blur'
          : 'bg-transparent'
      }`}
    >
      <nav
        className="container-mv flex h-16 items-center justify-between sm:h-20"
        aria-label="Navegación principal"
      >
        <a href="#hero" aria-label="Movete — inicio">
          <Logo />
        </a>

        {/* Links desktop */}
        <ul className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-paper/75 transition-colors hover:text-lime-400"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <Button as="a" href="#demo" variant="primary">
            {CTA.primary}
          </Button>
        </div>

        {/* Toggle mobile */}
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-lg p-2 text-paper lg:hidden"
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Menú mobile */}
      {open && (
        <div className="border-t border-white/10 bg-ink-900 lg:hidden">
          <ul className="container-mv flex flex-col gap-1 py-4">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block rounded-lg px-2 py-3 text-base font-medium text-paper/80 hover:bg-white/5 hover:text-lime-400"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="mt-2">
              <Button
                as="a"
                href="#demo"
                variant="primary"
                size="lg"
                className="w-full"
                onClick={() => setOpen(false)}
              >
                {CTA.primary}
              </Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
