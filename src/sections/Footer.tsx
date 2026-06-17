import { MessageCircle, Mail } from 'lucide-react'
import { Logo } from '../components/Logo'
import { NAV_LINKS, FOOTER, BRAND, CONTACT, whatsappUrl } from '../content/landing'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/10 bg-ink-900" aria-label="Pie de página">
      <div className="container-mv py-14">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr]">
          {/* Marca */}
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-paper/60">
              {FOOTER.description}
            </p>
          </div>

          {/* Navegación */}
          <nav aria-label="Enlaces del pie">
            <p className="text-sm font-semibold text-paper">Navegación</p>
            <ul className="mt-4 space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-paper/60 transition-colors hover:text-lime-400"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contacto */}
          <div>
            <p className="text-sm font-semibold text-paper">Contacto</p>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-paper/60 transition-colors hover:text-lime-400"
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="inline-flex items-center gap-2 text-sm text-paper/60 transition-colors hover:text-lime-400"
                >
                  <Mail className="h-4 w-4" />
                  {CONTACT.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-paper/45 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {BRAND.name}. {FOOTER.rights}
          </p>
          <p>{FOOTER.privacy}</p>
        </div>
      </div>
    </footer>
  )
}
