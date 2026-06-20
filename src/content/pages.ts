/**
 * Definición central de las páginas públicas de Movete.
 * Se usa para la navegación, los enlaces internos de la home,
 * el footer y el sitemap. Editá acá las URLs y la metadata SEO.
 */

export interface FeaturePage {
  slug: string
  nav: string
  seoTitle: string
  seoDescription: string
  h1: string
}

export const FEATURE_PAGES: FeaturePage[] = [
  {
    slug: '/funcionalidades/reservas-y-cupos',
    nav: 'Reservas y cupos',
    seoTitle: 'Reservas y cupos para clases de gimnasio | Movete',
    seoDescription:
      'Organizá reservas, cupos, cancelaciones y lista de espera para las clases de tu gimnasio, box o estudio.',
    h1: 'Reservas y cupos sin depender de WhatsApp',
  },
  {
    slug: '/funcionalidades/pagos-y-abonos',
    nav: 'Pagos y abonos',
    seoTitle: 'Pagos, abonos y membresías para gimnasios | Movete',
    seoDescription:
      'Gestioná planes, packs de clases, abonos, saldos, pagos y vencimientos desde una sola plataforma.',
    h1: 'Abonos, pagos y vencimientos más ordenados',
  },
  {
    slug: '/funcionalidades/app-para-socios',
    nav: 'App para socios',
    seoTitle: 'App para socios de gimnasios, boxes y estudios | Movete',
    seoDescription:
      'Dales a tus socios una app para reservar clases, consultar abonos, recibir avisos y hacer check-in con QR.',
    h1: 'Una app para que tus socios se autogestionen',
  },
  {
    slug: '/funcionalidades/check-in-qr',
    nav: 'Check-in con QR',
    seoTitle: 'Check-in con QR para gimnasios | Movete',
    seoDescription:
      'Agilizá el registro de ingreso de tus socios con un código QR dinámico desde la app Movete.',
    h1: 'Check-in más ágil con QR desde el celular',
  },
]

export const DEMO_PAGE = {
  slug: '/solicitar-demo',
  nav: 'Solicitar demo',
  seoTitle: 'Solicitá una demo de Movete | Gestión para gimnasios',
  seoDescription:
    'Conocé cómo Movete puede ordenar socios, clases, reservas, pagos y abonos en tu gimnasio, box o estudio.',
  h1: 'Conocé Movete aplicado a tu negocio',
}

export const HOME_PAGE = {
  slug: '/',
  seoTitle: 'Software de gestión para gimnasios, boxes y estudios | Movete',
  seoDescription:
    'Administrá socios, clases, reservas, pagos, abonos y check-in desde una sola plataforma. Tus socios se autogestionan con la app Movete.',
  h1: 'Todo tu gimnasio ordenado en una sola plataforma',
}

/** Enlace a la app en Google Play (editá cuando esté publicada). */
export const PLAY_STORE_URL =
  'https://play.google.com/store/apps/details?id=com.movete.app'

/** URLs públicas para el sitemap. */
export const PUBLIC_URLS = [
  HOME_PAGE.slug,
  ...FEATURE_PAGES.map((p) => p.slug),
  DEMO_PAGE.slug,
]
