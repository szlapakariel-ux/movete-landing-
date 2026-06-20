import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'

export interface Crumb {
  name: string
  path: string
}

/** Migas de pan visibles y accesibles para páginas internas. */
export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Migas de pan" className="container-mv pt-24 sm:pt-28">
      <ol className="flex flex-wrap items-center gap-1.5 text-sm text-paper/55">
        {items.map((item, i) => {
          const last = i === items.length - 1
          return (
            <li key={item.path} className="flex items-center gap-1.5">
              {last ? (
                <span className="text-paper/80" aria-current="page">
                  {item.name}
                </span>
              ) : (
                <Link to={item.path} className="transition-colors hover:text-lime-400">
                  {item.name}
                </Link>
              )}
              {!last && <ChevronRight className="h-3.5 w-3.5 text-paper/30" aria-hidden="true" />}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
