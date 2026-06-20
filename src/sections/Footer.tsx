import { Link } from 'react-router-dom'
import { MessageCircle, Mail } from 'lucide-react'
import { Logo } from '../components/Logo'
import { FOOTER, BRAND, CONTACT, whatsappUrl } from '../content/landing'
import { FEATURE_PAGES, DEMO_PAGE } from '../content/pages'
import { track } from '../analytics'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/10 bg-ink-900" aria-label="Pie de página">
      <div className="container-mv py-14">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-paper/60">{FOOTER.description}</p>
          </div>

          <nav aria-label="Soluciones">
            <p className="text-sm font-semibold text-paper">Soluciones</p>
            <ul className="mt-4 space-y-2.5">
              {FEATURE_PAGES.map((p) => (
                <li key={p.slug}>
                  <Link
                    to={p.slug}
                    onClick={() => track('click_feature_page', { feature: p.nav, from: 'footer' })}
                    className="text-sm text-paper/60 transition-colors hover:text-lime-400"
                  >
                    {p.nav}
                  </Link>
                </li>
              ))}
              <li>
                <Link to={DEMO_PAGE.slug} className="text-sm text-paper/60 transition-colors hover:text-lime-400">
                  {DEMO_PAGE.nav}
                </Link>
              </li>
            </ul>
          </nav>

          <div>
            <p className="text-sm font-semibold text-paper">Contacto</p>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => track('click_whatsapp', { from: 'footer' })}
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
