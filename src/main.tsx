import './index.css'
import { ViteReactSSG } from 'vite-react-ssg'
import { routes } from './routes'
import { reloadOncePerWindow } from './components/RouteError'

// Un chunk con hash de un build anterior ya no existe tras un deploy;
// Vite emite este evento al fallar la precarga. Recargar toma el build nuevo.
if (typeof window !== 'undefined') {
  window.addEventListener('vite:preloadError', (event) => {
    if (reloadOncePerWindow()) event.preventDefault()
  })
}

export const createRoot = ViteReactSSG({ routes })
