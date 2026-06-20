import { Head } from 'vite-react-ssg'

export const SITE_URL = 'https://movete.szoluciones.com'

export interface SeoProps {
  title: string
  description: string
  /** Ruta relativa de la página, ej: "/funcionalidades/reservas-y-cupos" */
  path: string
  /** Ruta de la imagen social (relativa o absoluta). */
  image?: string
  /** Objetos JSON-LD a inyectar (structured data). */
  jsonLd?: Record<string, unknown>[]
}

/** Metadata SEO por página: title, description, canonical, Open Graph, Twitter y JSON-LD. */
export function Seo({ title, description, path, image = '/og-image.png', jsonLd }: SeoProps) {
  const url = `${SITE_URL}${path}`
  const img = image.startsWith('http') ? image : `${SITE_URL}${image}`

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Movete" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={img} />
      <meta property="og:locale" content="es_AR" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={img} />

      {jsonLd?.map((obj, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(obj)}
        </script>
      ))}
    </Head>
  )
}
