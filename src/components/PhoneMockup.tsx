import { CalendarCheck, QrCode, Wallet, Bell, ChevronRight } from 'lucide-react'

type Screen = 'home' | 'classes' | 'wallet' | 'qr'

interface PhoneMockupProps {
  screen?: Screen
  className?: string
  /** Texto alternativo accesible que describe la pantalla mostrada. */
  label?: string
}

/**
 * Mockup de la app móvil Android del socio (dibujado con CSS/SVG).
 * Es un placeholder visual: reemplazá por capturas reales si las tenés.
 */
export function PhoneMockup({
  screen = 'home',
  className = '',
  label = 'App móvil Android de Movete para el socio',
}: PhoneMockupProps) {
  return (
    <div
      className={`relative mx-auto w-[270px] select-none ${className}`}
      role="img"
      aria-label={label}
    >
      {/* Cuerpo del teléfono */}
      <div className="relative rounded-[2.5rem] border-[10px] border-ink-600 bg-ink-900 shadow-2xl shadow-black/60">
        {/* Notch */}
        <div className="absolute left-1/2 top-2 z-10 h-5 w-24 -translate-x-1/2 rounded-full bg-ink-600" />
        {/* Pantalla */}
        <div className="h-[540px] overflow-hidden rounded-[1.9rem] bg-gradient-to-b from-ink-800 to-ink-900">
          <ScreenContent screen={screen} />
        </div>
      </div>
      {/* Brillo de acento */}
      <div className="absolute -inset-6 -z-10 rounded-[3rem] bg-lime-500/20 blur-3xl" />
    </div>
  )
}

function StatusBar() {
  return (
    <div className="flex items-center justify-between px-5 pt-4 text-[10px] font-medium text-paper/60">
      <span>9:41</span>
      <span className="flex gap-1">
        <span>●●●</span>
        <span>5G</span>
      </span>
    </div>
  )
}

function ScreenContent({ screen }: { screen: Screen }) {
  if (screen === 'qr') return <QrScreen />
  if (screen === 'wallet') return <WalletScreen />
  if (screen === 'classes') return <ClassesScreen />
  return <HomeScreen />
}

function HomeScreen() {
  return (
    <div className="flex h-full flex-col">
      <StatusBar />
      <div className="px-5 pt-4">
        <p className="text-xs text-paper/50">Hola,</p>
        <p className="font-display text-lg font-bold text-paper">Martina 👋</p>
      </div>
      <div className="mx-5 mt-4 rounded-2xl bg-gradient-to-br from-lime-500 to-lime-600 p-4 text-ink-900">
        <p className="text-[11px] font-semibold uppercase tracking-wide">Tu próxima clase</p>
        <p className="mt-1 text-base font-bold">Funcional · 18:00</p>
        <p className="text-xs opacity-80">Sede Centro · Lucas</p>
      </div>
      <div className="mt-4 grid grid-cols-3 gap-2 px-5">
        {[
          { icon: CalendarCheck, label: 'Reservar' },
          { icon: Wallet, label: 'Abono' },
          { icon: QrCode, label: 'Check-in' },
        ].map(({ icon: Icon, label }) => (
          <div
            key={label}
            className="flex flex-col items-center gap-1 rounded-2xl bg-white/5 py-3"
          >
            <Icon className="h-5 w-5 text-lime-400" />
            <span className="text-[10px] text-paper/70">{label}</span>
          </div>
        ))}
      </div>
      <div className="mt-4 px-5">
        <p className="mb-2 text-xs font-semibold text-paper/60">Actividad de hoy</p>
        <div className="space-y-2">
          {['Spinning · 19:30', 'Movilidad · 20:30'].map((c) => (
            <div
              key={c}
              className="flex items-center justify-between rounded-xl bg-white/5 px-3 py-2.5"
            >
              <span className="text-xs text-paper/85">{c}</span>
              <ChevronRight className="h-4 w-4 text-paper/40" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function ClassesScreen() {
  return (
    <div className="flex h-full flex-col">
      <StatusBar />
      <div className="px-5 pt-4">
        <p className="font-display text-lg font-bold text-paper">Clases</p>
        <p className="text-xs text-paper/50">Hoy · Miércoles</p>
      </div>
      <div className="mt-4 space-y-2 px-5">
        {[
          { name: 'CrossFit WOD', time: '18:00', spots: '4 cupos', full: false },
          { name: 'Funcional', time: '19:00', spots: 'Lleno · Espera', full: true },
          { name: 'Yoga', time: '20:00', spots: '9 cupos', full: false },
          { name: 'Pilates', time: '21:00', spots: '2 cupos', full: false },
        ].map((c) => (
          <div key={c.name} className="rounded-2xl bg-white/5 p-3.5">
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold text-paper">{c.name}</span>
              <span className="text-xs text-paper/50">{c.time}</span>
            </div>
            <div className="mt-2 flex items-center justify-between">
              <span
                className={`text-[11px] ${c.full ? 'text-brandviolet-400' : 'text-lime-400'}`}
              >
                {c.spots}
              </span>
              <span
                className={`rounded-full px-3 py-1 text-[10px] font-semibold ${
                  c.full
                    ? 'bg-brandviolet-500/20 text-brandviolet-400'
                    : 'bg-lime-500 text-ink-900'
                }`}
              >
                {c.full ? 'Lista de espera' : 'Reservar'}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function WalletScreen() {
  return (
    <div className="flex h-full flex-col">
      <StatusBar />
      <div className="px-5 pt-4">
        <p className="font-display text-lg font-bold text-paper">Mi abono</p>
      </div>
      <div className="mx-5 mt-4 rounded-2xl bg-gradient-to-br from-brandviolet-500 to-brandviolet-600 p-4 text-white">
        <p className="text-[11px] font-semibold uppercase tracking-wide opacity-80">
          Plan mensual
        </p>
        <p className="mt-1 text-xl font-bold">12 créditos</p>
        <p className="text-xs opacity-80">Vence el 30/06</p>
      </div>
      <div className="mt-4 px-5">
        <p className="mb-2 text-xs font-semibold text-paper/60">Movimientos</p>
        <div className="space-y-2">
          {[
            { t: 'Funcional', d: '-1 crédito', ok: false },
            { t: 'Pago aprobado', d: '+ Mensual', ok: true },
            { t: 'CrossFit', d: '-1 crédito', ok: false },
          ].map((m) => (
            <div
              key={m.t}
              className="flex items-center justify-between rounded-xl bg-white/5 px-3 py-2.5"
            >
              <span className="text-xs text-paper/85">{m.t}</span>
              <span
                className={`text-[11px] font-semibold ${
                  m.ok ? 'text-lime-400' : 'text-paper/50'
                }`}
              >
                {m.d}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-auto p-5">
        <div className="rounded-full bg-lime-500 py-2.5 text-center text-sm font-bold text-ink-900">
          Renovar membresía
        </div>
      </div>
    </div>
  )
}

function QrScreen() {
  return (
    <div className="flex h-full flex-col">
      <StatusBar />
      <div className="px-5 pt-4">
        <p className="font-display text-lg font-bold text-paper">Check-in</p>
        <p className="text-xs text-paper/50">Mostrá este código en recepción</p>
      </div>
      <div className="flex flex-1 flex-col items-center justify-center px-5">
        <div className="rounded-3xl bg-white p-5">
          <QrPattern />
        </div>
        <div className="mt-5 flex items-center gap-2 rounded-full bg-lime-500/15 px-4 py-2">
          <Bell className="h-4 w-4 text-lime-400" />
          <span className="text-xs font-medium text-lime-400">Código dinámico activo</span>
        </div>
        <p className="mt-3 text-center text-[11px] text-paper/50">
          Se actualiza solo para una asistencia rápida y segura.
        </p>
      </div>
    </div>
  )
}

/** Patrón decorativo tipo QR (no es un QR real). */
function QrPattern() {
  const cells = Array.from({ length: 81 }, (_, i) => (i * 37) % 7 < 3)
  return (
    <div className="grid grid-cols-9 gap-1" aria-hidden="true">
      {cells.map((on, i) => (
        <span
          key={i}
          className={`h-3 w-3 rounded-[2px] ${on ? 'bg-ink-900' : 'bg-transparent'}`}
        />
      ))}
    </div>
  )
}
