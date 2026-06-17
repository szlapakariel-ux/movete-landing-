import { Navbar } from './sections/Navbar'
import { Hero } from './sections/Hero'
import { Problema } from './sections/Problema'
import { Solucion } from './sections/Solucion'
import { Administradores } from './sections/Administradores'
import { Socios } from './sections/Socios'
import { Pagos } from './sections/Pagos'
import { Seguridad } from './sections/Seguridad'
import { ComoFunciona } from './sections/ComoFunciona'
import { Beneficios } from './sections/Beneficios'
import { Diferencial } from './sections/Diferencial'
import { CTAFinal } from './sections/CTAFinal'
import { Footer } from './sections/Footer'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Problema />
        <Solucion />
        <Administradores />
        <Socios />
        <Pagos />
        <Seguridad />
        <ComoFunciona />
        <Beneficios />
        <Diferencial />
        <CTAFinal />
      </main>
      <Footer />
    </>
  )
}

export default App
