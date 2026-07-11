import type { RouteRecord } from 'vite-react-ssg'
import { Layout } from './components/Layout'
import { RouteError } from './components/RouteError'
import Home from './pages/Home'
import Reservas from './pages/funcionalidades/Reservas'
import Pagos from './pages/funcionalidades/Pagos'
import AppSocios from './pages/funcionalidades/AppSocios'
import CheckinQR from './pages/funcionalidades/CheckinQR'
import Estudios from './pages/para/Estudios'
import Entrenadores from './pages/para/Entrenadores'
import Boxes from './pages/para/Boxes'
import Gimnasios from './pages/para/Gimnasios'
import SolicitarDemo from './pages/SolicitarDemo'
import Privacidad from './pages/Privacidad'
import NotFound from './pages/NotFound'

export const routes: RouteRecord[] = [
  {
    path: '/',
    element: <Layout />,
    errorElement: <RouteError />,
    entry: 'src/components/Layout.tsx',
    children: [
      { index: true, element: <Home /> },
      { path: 'funcionalidades/reservas-y-cupos', element: <Reservas /> },
      { path: 'funcionalidades/pagos-y-abonos', element: <Pagos /> },
      { path: 'funcionalidades/app-para-socios', element: <AppSocios /> },
      { path: 'funcionalidades/check-in-qr', element: <CheckinQR /> },
      { path: 'estudios', element: <Estudios /> },
      { path: 'entrenadores', element: <Entrenadores /> },
      { path: 'boxes', element: <Boxes /> },
      { path: 'gimnasios', element: <Gimnasios /> },
      { path: 'solicitar-demo', element: <SolicitarDemo /> },
      { path: 'privacidad', element: <Privacidad /> },
      { path: '*', element: <NotFound /> },
    ],
  },
]
