import { Link } from 'react-router-dom'
import { Seo } from '../components/Seo'
import { Button } from '../components/Button'

export default function NotFound() {
  return (
    <>
      <Seo title="Página no encontrada | Movete" description="La página que buscás no existe." path="/404" />
      <section className="flex min-h-[70vh] items-center justify-center bg-ink-900 px-5 text-center">
        <div>
          <p className="font-display text-7xl font-extrabold text-lime-400">404</p>
          <h1 className="mt-4 font-display text-2xl font-bold text-paper">No encontramos esta página</h1>
          <p className="mx-auto mt-3 max-w-md text-paper/65">
            Puede que el enlace esté roto o que la página ya no exista.
          </p>
          <Link to="/" className="mt-7 inline-block">
            <Button variant="primary" size="lg">
              Volver al inicio
            </Button>
          </Link>
        </div>
      </section>
    </>
  )
}
