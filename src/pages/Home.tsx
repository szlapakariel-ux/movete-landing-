import { Hero } from '../sections/Hero'
import { Problema } from '../sections/Problema'
import { Solucion } from '../sections/Solucion'
import { SolucionesLinks } from '../sections/SolucionesLinks'
import { ParaQuien } from '../sections/ParaQuien'
import { Administradores } from '../sections/Administradores'
import { Socios } from '../sections/Socios'
import { Pagos } from '../sections/Pagos'
import { Seguridad } from '../sections/Seguridad'
import { ComoFunciona } from '../sections/ComoFunciona'
import { Planes } from '../sections/Planes'
import { Beneficios } from '../sections/Beneficios'
import { Diferencial } from '../sections/Diferencial'
import { CTAFinal } from '../sections/CTAFinal'
import { Seo } from '../components/Seo'
import { HOME_PAGE } from '../content/pages'
import { organizationLd, softwareApplicationLd } from '../seo/structuredData'

export default function Home() {
  return (
    <>
      <Seo
        title={HOME_PAGE.seoTitle}
        description={HOME_PAGE.seoDescription}
        path="/"
        jsonLd={[organizationLd, softwareApplicationLd]}
      />
      <Hero />
      <Problema />
      <Solucion />
      <SolucionesLinks />
      <ParaQuien />
      <Administradores />
      <Socios />
      <Pagos />
      <Seguridad />
      <ComoFunciona />
      <Planes />
      <Beneficios />
      <Diferencial />
      <CTAFinal />
    </>
  )
}
