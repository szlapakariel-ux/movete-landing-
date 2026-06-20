import { Seo } from '../components/Seo'
import { Breadcrumbs } from '../components/Breadcrumbs'
import { Section } from '../components/Section'
import { CONTACT } from '../content/landing'

export default function Privacidad() {
  return (
    <>
      <Seo
        title="Política de privacidad | Movete"
        description="Cómo Movete trata los datos que nos compartís a través del sitio y del formulario de demo."
        path="/privacidad"
      />
      <Breadcrumbs items={[{ name: 'Inicio', path: '/' }, { name: 'Privacidad', path: '/privacidad' }]} />

      <Section tone="darker" ariaLabel="Política de privacidad">
        <div className="mx-auto max-w-3xl">
          <h1 className="font-display text-3xl font-extrabold text-paper sm:text-4xl">Política de privacidad</h1>
          <div className="mt-8 space-y-6 text-paper/75">
            <p>
              En Movete cuidamos los datos que nos compartís. Esta página explica, de forma simple, qué
              información recibimos a través del sitio público y para qué la usamos.
            </p>
            <div>
              <h2 className="font-display text-xl font-bold text-paper">Qué datos recibimos</h2>
              <p className="mt-2">
                Cuando completás el formulario de demo, recibimos los datos que ingresás (nombre, datos de
                contacto y de tu gimnasio) con el único fin de comunicarnos para coordinar la demostración.
              </p>
            </div>
            <div>
              <h2 className="font-display text-xl font-bold text-paper">Para qué los usamos</h2>
              <p className="mt-2">
                Usamos esos datos para contactarte y mostrarte cómo Movete se aplica a tu negocio. No los
                vendemos ni los cedemos a terceros con fines publicitarios.
              </p>
            </div>
            <div>
              <h2 className="font-display text-xl font-bold text-paper">Tus derechos</h2>
              <p className="mt-2">
                Podés solicitar el acceso, la corrección o la eliminación de tus datos escribiéndonos a{' '}
                <a href={`mailto:${CONTACT.email}`} className="text-lime-400 underline">
                  {CONTACT.email}
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </Section>
    </>
  )
}
