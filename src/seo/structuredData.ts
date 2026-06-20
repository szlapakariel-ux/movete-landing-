import { SITE_URL } from '../components/Seo'

/** Datos de la organización (global). */
export const organizationLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Movete',
  url: SITE_URL + '/',
  logo: SITE_URL + '/favicon.svg',
  description:
    'Plataforma de gestión para gimnasios, boxes y estudios: panel web para administradores y app Android para socios.',
}

/** Aplicación de software (home y páginas de producto). */
export const softwareApplicationLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Movete',
  url: SITE_URL + '/',
  description:
    'Plataforma para gimnasios, boxes y estudios. Panel web para administrar clases, reservas, pagos, abonos y asistencia, más una app Android para socios.',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web, Android',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'ARS',
    description: 'Demo gratuito disponible',
  },
  author: {
    '@type': 'Organization',
    name: 'Movete',
    url: SITE_URL + '/',
  },
}

/** Migas de pan (BreadcrumbList) para páginas internas. */
export function breadcrumbLd(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: SITE_URL + item.path,
    })),
  }
}

/** Preguntas frecuentes (FAQPage). Usar SOLO si las preguntas son visibles en la página. */
export function faqLd(items: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  }
}
