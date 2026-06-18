import {
  Home,
  Dumbbell,
  CalendarCheck,
  QrCode,
  User,
  Search,
  Check,
  Fingerprint,
  ChevronRight,
} from 'lucide-react'

type Screen = 'home' | 'classes' | 'reservas' | 'profile' | 'qr'

interface PhoneMockupProps {
  screen?: Screen
  className?: string
  /** Texto alternativo accesible que describe la pantalla mostrada. */
  label?: string
}

const screenLabels: Record<Screen, string> = {
  home: 'Pantalla de inicio de la app Movete',
  classes: 'Pantalla de clases disponibles de la app Movete',
  reservas: 'Pantalla de reservas de la app Movete',
  profile: 'Pantalla de perfil y abono de la app Movete',
  qr: 'Pantalla de check-in con QR de la app Movete',
}

/**
 * Mockup de la app móvil Android del socio (replica fiel de la app real).
 * Fondo oscuro, tarjetas violetas y acentos lima, como en la app.
 */
export function PhoneMockup({ screen = 'home', className = '', label }: PhoneMockupProps) {
  return (
    <div
      className={`relative mx-auto w-[270px] select-none ${className}`}
      role="img"
      aria-label={label ?? screenLabels[screen]}
    >
      <div className="relative rounded-[2.5rem] border-[10px] border-ink-600 bg-ink-900 shadow-2xl shadow-black/60">
        <div className="absolute left-1/2 top-2 z-10 h-5 w-24 -translate-x-1/2 rounded-full bg-ink-600" />
        <div className="relative h-[548px] overflow-hidden rounded-[1.9rem] bg-ink-900">
          <div className="flex h-full flex-col">
            <ScreenHeader />
            <div className="flex-1 overflow-hidden px-4">
              <ScreenBody screen={screen} />
            </div>
            <BottomNav screen={screen} />
          </div>
        </div>
      </div>
      <div className="absolute -inset-6 -z-10 rounded-[3rem] bg-brandviolet-500/25 blur-3xl" />
    </div>
  )
}

/** Marca "M" de Movete (lima), como aparece arriba en la app. */
function AppMark() {
  return (
    <svg viewBox="0 0 120 96" className="h-7 w-auto" fill="none" aria-hidden="true">
      <path
        d="M100.337 0.0112688L104.077 0.0512697C104.387 0.0512697 104.697 0.101275 104.997 0.181275C105.737 0.391275 107.287 0.79127 107.627 0.91127C114.677 3.44127 117.447 10.0413 115.377 17.5813C114.377 21.2413 112.927 24.7113 111.617 28.3013C110.067 32.6113 109.217 34.8613 107.517 39.1213C104.917 45.7013 102.217 52.3613 100.027 59.0513C99.2169 61.5213 98.5369 63.5213 98.2569 65.7613C98.0269 67.6013 100.257 69.9113 102.047 70.5113C107.577 72.3613 109.077 78.7413 102.387 79.9213C100.177 80.3113 95.3969 78.3713 93.4969 77.2113C86.3969 72.8613 86.9669 68.6313 87.9469 64.7813C88.6669 61.9713 90.5169 57.0413 91.5369 54.3013L100.827 28.4213C101.837 25.7013 102.917 22.9813 103.787 20.2313C104.567 17.7713 106.217 14.7813 105.137 12.3813C103.907 9.64127 100.707 9.66127 98.1869 11.0413C96.2069 12.1213 95.4469 13.3713 94.1169 15.2313C92.3069 17.6913 91.0069 20.5313 89.5469 23.1613C88.4369 25.1613 87.5369 26.8813 86.5069 28.8913C82.9769 35.7913 79.3969 42.6613 75.7469 49.5013C74.1669 52.4313 72.9369 55.1313 70.8769 57.8513C67.3569 62.4913 62.2169 65.4513 56.7169 63.8613C54.1669 63.1313 52.1069 61.3513 51.0169 58.9413C49.3169 55.2713 50.4769 50.5913 50.7269 46.5713C50.9669 42.6613 51.4869 38.7813 51.5869 34.8713C51.6169 33.4113 51.9969 32.0213 51.8769 30.5413C51.8869 29.2213 50.9069 27.7513 49.4269 28.7613C46.6069 30.6913 45.3669 35.4913 44.2069 38.5313C42.6969 42.4713 41.1969 46.4913 39.7569 50.4513L34.6869 64.2613L31.6869 72.3113C31.2369 73.4913 30.8369 74.7113 30.3669 75.8813C29.1669 78.8413 27.6469 81.6813 25.8369 84.3513C21.8669 90.1713 16.5469 93.7813 9.89688 94.9413C9.16688 95.0713 8.40688 95.1613 7.67688 95.2913C7.44688 95.3313 7.22687 95.3613 6.99687 95.3513L4.98687 95.3313C4.59687 95.3313 4.21688 95.2613 3.85688 95.1313C3.72688 95.0913 3.60688 95.0413 3.47688 94.9913C1.71688 94.3513 0.986874 93.7813 0.316874 92.3813C0.0568743 91.8413 -0.0431249 91.2413 0.0168751 90.6513L0.146876 89.3413C0.196876 88.8313 0.366876 88.3413 0.646876 87.9113C1.97688 85.8413 2.84688 85.3213 5.57688 84.9113C7.33688 84.6513 10.3969 84.3913 12.0169 83.6513C19.1969 80.3413 22.0569 69.8413 24.5369 63.0313L31.6769 43.5913L34.5169 35.8613C35.4969 33.1513 36.3969 30.3613 37.6969 27.7613C39.6269 23.9213 42.2769 20.6013 46.3469 18.9813C49.6669 17.6613 52.8869 17.3613 56.0269 18.6413C61.1669 20.7413 62.3869 25.6313 62.1669 31.0413C62.1069 32.4813 61.8769 34.0413 61.7869 35.5313L60.9069 47.1613C60.7569 48.8913 60.3769 51.0413 60.7669 52.6613C61.2169 53.9713 62.6169 52.5313 63.0069 51.9613C64.9969 49.0613 66.7969 45.4813 68.4169 42.3813L79.0269 21.9713C83.4769 13.5813 87.8669 2.69127 97.9269 0.401268C98.2669 0.321268 98.9869 0.221267 99.4569 0.111267C99.7469 0.0412673 100.047 -0.00872568 100.347 0.00127432L100.337 0.0112688Z"
        fill="#D4FF00"
      />
    </svg>
  )
}

/** Header común: marca M + pill violeta con el nombre del gym. */
function ScreenHeader() {
  return (
    <div className="px-4 pb-2 pt-4">
      <AppMark />
      <span className="mt-2 inline-block rounded-full bg-brandviolet-500 px-3 py-1 text-[11px] font-bold text-white">
        FitLife Gym
      </span>
    </div>
  )
}

/** Barra de navegación inferior flotante (violeta), con el ítem activo en lima. */
function BottomNav({ screen }: { screen: Screen }) {
  const items: { id: Screen | 'acceso'; label: string; icon: typeof Home }[] = [
    { id: 'home', label: 'Inicio', icon: Home },
    { id: 'classes', label: 'Clases', icon: Dumbbell },
    { id: 'reservas', label: 'Reservas', icon: CalendarCheck },
    { id: 'qr', label: 'Acceso', icon: QrCode },
    { id: 'profile', label: 'Mi perfil', icon: User },
  ]
  return (
    <div className="px-3 pb-3 pt-1">
      <nav className="flex items-center justify-between rounded-full bg-brandviolet-500 px-3 py-2">
        {items.map(({ id, label, icon: Icon }) => {
          const active = id === screen
          return (
            <span
              key={label}
              className={`flex flex-col items-center gap-0.5 ${
                active ? 'text-lime-400' : 'text-white/85'
              }`}
            >
              <Icon className="h-4 w-4" strokeWidth={active ? 2.6 : 2} />
              <span className="text-[8px] font-medium">{label}</span>
            </span>
          )
        })}
      </nav>
    </div>
  )
}

function ScreenBody({ screen }: { screen: Screen }) {
  switch (screen) {
    case 'classes':
      return <ClassesScreen />
    case 'reservas':
      return <ReservasScreen />
    case 'profile':
      return <ProfileScreen />
    case 'qr':
      return <QrScreen />
    default:
      return <HomeScreen />
  }
}

/* ---------------- Inicio ---------------- */
function HomeScreen() {
  return (
    <div className="space-y-3">
      <h2 className="font-display text-lg font-extrabold leading-tight text-white">
        Encontrá tu ritmo.
        <br />
        Reservá tu lugar.
      </h2>

      {/* Tarjeta de stats en lima (highlight) */}
      <div className="flex items-center justify-between rounded-2xl bg-lime-500 p-3 text-ink-900">
        <div>
          <p className="text-[10px] font-bold">Días moviéndote</p>
          <div className="mt-1 flex gap-4">
            <div>
              <p className="text-xl font-extrabold leading-none">1</p>
              <p className="text-[9px]">Clases</p>
            </div>
            <div>
              <p className="text-xl font-extrabold leading-none">1</p>
              <p className="text-[9px]">Semanas</p>
            </div>
          </div>
        </div>
        <Dumbbell className="h-9 w-9 opacity-80" />
      </div>

      <p className="text-[11px] font-bold text-white">Clases esta semana</p>
      <div className="grid grid-cols-2 gap-2">
        <ClassCard name="WOD Julio" time="Mié 07:00" place="Box NUÑEZ" spots="20 lugares" icon={Dumbbell} />
        <ClassCard name="Yoga Flow" time="Mié 08:15" place="Lomas" spots="18 lugares" icon={Home} />
      </div>
    </div>
  )
}

function ClassCard({
  name,
  time,
  place,
  spots,
  icon: Icon,
}: {
  name: string
  time: string
  place: string
  spots: string
  icon: typeof Home
}) {
  return (
    <div className="rounded-2xl bg-brandviolet-500 p-2.5">
      <div className="flex items-center gap-1.5">
        <Icon className="h-3.5 w-3.5 text-white" />
        <span className="truncate text-[11px] font-bold text-white">{name}</span>
      </div>
      <p className="mt-1 text-[10px] font-semibold text-white">{time}</p>
      <p className="text-[9px] text-white/70">{place}</p>
      <div className="mt-2 flex items-center justify-between">
        <span className="text-[9px] text-white/80">{spots}</span>
        <span className="rounded-full bg-lime-500 px-2 py-0.5 text-[8px] font-bold text-ink-900">
          Reservar ›
        </span>
      </div>
    </div>
  )
}

/* ---------------- Clases disponibles ---------------- */
function ClassesScreen() {
  return (
    <div className="space-y-3">
      <h2 className="font-display text-lg font-extrabold text-white">Clases disponibles</h2>

      {/* Buscador con borde lima */}
      <div className="flex items-center gap-2 rounded-full border-2 border-lime-500 px-3 py-2">
        <span className="flex-1 text-[10px] font-semibold text-lime-400">
          Buscar por clase, sede…
        </span>
        <Search className="h-3.5 w-3.5 text-lime-400" />
      </div>

      {/* Filtros */}
      <div className="flex flex-wrap gap-1.5">
        {['Clase', 'Horario', 'Instructor', 'Sede'].map((f) => (
          <span
            key={f}
            className="rounded-full border border-white/25 px-2.5 py-1 text-[9px] text-white/80"
          >
            {f} ▾
          </span>
        ))}
      </div>

      <p className="text-center text-[10px] font-bold text-white/70">Resultados</p>
      <div className="grid grid-cols-2 gap-2">
        <ClassCard name="Yoga Flow" time="Dom 09:30" place="Box NUÑEZ" spots="19 lugares" icon={Home} />
        <ClassCard name="Mobility" time="Dom 11:00" place="Lomas" spots="17 lugares" icon={Home} />
      </div>
    </div>
  )
}

/* ---------------- Reservas ---------------- */
function ReservasScreen() {
  return (
    <div className="space-y-3">
      <div>
        <h2 className="font-display text-lg font-extrabold text-white">Reservas</h2>
        <p className="text-[10px] text-white/60">Tu agenda, historial y lista de espera</p>
      </div>

      {/* Filtros (chip activo en lima) */}
      <div className="flex gap-1.5">
        <span className="rounded-full bg-lime-500 px-3 py-1 text-[9px] font-bold text-ink-900">
          Activas
        </span>
        <span className="rounded-full border border-white/25 px-3 py-1 text-[9px] text-white/80">
          Historial
        </span>
        <span className="rounded-full border border-white/25 px-3 py-1 text-[9px] text-white/80">
          Canceladas
        </span>
      </div>

      <div className="flex items-center justify-between">
        <span className="text-[11px] font-bold text-white">Activas</span>
        <span className="rounded-full bg-lime-500 px-2 py-0.5 text-[9px] font-bold text-ink-900">
          2
        </span>
      </div>

      <ReservaCard name="Running Técnica" date="mar, 23 jun · 07:00" instr="Lucía Moreno" />
      <ReservaCard name="Fuerza Base" date="lun, 22 jun · 08:00" instr="Nicolás Álvarez" />
    </div>
  )
}

function ReservaCard({ name, date, instr }: { name: string; date: string; instr: string }) {
  return (
    <div className="rounded-2xl bg-brandviolet-500 p-3">
      <div className="flex items-center gap-1.5">
        <Dumbbell className="h-3.5 w-3.5 text-white" />
        <span className="text-[12px] font-bold text-white">{name}</span>
      </div>
      <p className="mt-1 text-[10px] font-semibold text-white">{date}</p>
      <p className="text-[9px] text-white/70">Instructor {instr}</p>
      <div className="mt-2 flex items-center justify-between">
        <span className="flex items-center gap-1 rounded-full bg-white/15 px-2 py-0.5 text-[8px] text-white">
          <Check className="h-2.5 w-2.5" /> Confirmada
        </span>
        <span className="flex items-center gap-1 rounded-full bg-lime-500 px-2.5 py-0.5 text-[8px] font-bold text-ink-900">
          Cancelar ✕
        </span>
      </div>
    </div>
  )
}

/* ---------------- Mi Perfil / Abono ---------------- */
function ProfileScreen() {
  return (
    <div className="space-y-3">
      <h2 className="font-display text-lg font-extrabold text-white">Mi Perfil</h2>

      {/* Card de perfil violeta con avatar lima */}
      <div className="flex items-center gap-3 rounded-2xl bg-brandviolet-500 p-3">
        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-lime-500 text-sm font-extrabold text-ink-900">
          AS
        </span>
        <div className="min-w-0">
          <p className="truncate text-[12px] font-bold text-white">Ariel Szlapak</p>
          <p className="truncate text-[9px] text-white/80">szlapakariel@gmail.com</p>
          <p className="text-[9px] font-semibold text-lime-400">Miembro desde 2026</p>
        </div>
      </div>

      {/* Seguridad: huella */}
      <div className="flex items-center gap-2.5 rounded-2xl bg-white/5 p-3">
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-lime-500/20">
          <Fingerprint className="h-4 w-4 text-lime-400" />
        </span>
        <div className="flex-1">
          <p className="text-[10px] font-bold text-white">Ingreso con huella</p>
          <p className="text-[8px] font-semibold text-lime-400">Activado · huella</p>
        </div>
        <span className="flex h-4 w-7 items-center rounded-full bg-lime-500 px-0.5">
          <span className="ml-auto h-3 w-3 rounded-full bg-ink-900" />
        </span>
      </div>

      {/* Abono activo */}
      <div className="rounded-2xl bg-brandviolet-500 p-3">
        <div className="flex items-center justify-between">
          <span className="text-[10px] font-bold text-white">QA Pack Web</span>
          <span className="rounded-full bg-white/15 px-2 py-0.5 text-[8px] text-white">Activo</span>
        </div>
        <div className="mt-2 flex items-end justify-between">
          <div>
            <p className="text-[8px] text-white/70">Próximo vencimiento</p>
            <p className="text-[11px] font-bold text-lime-400">24/06/2026</p>
          </div>
          <div className="text-right">
            <p className="text-[8px] text-white/70">Monto mensual</p>
            <p className="text-[11px] font-bold text-white">ARS 12.000</p>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ---------------- QR de acceso ---------------- */
function QrScreen() {
  return (
    <div className="space-y-3">
      <h2 className="font-display text-lg font-extrabold text-white">QR de acceso</h2>

      <div className="rounded-3xl bg-brandviolet-500 p-4">
        <p className="text-center text-base font-extrabold text-white">Ariel</p>
        <div className="mx-auto mt-3 w-fit rounded-2xl bg-white p-3">
          <QrPattern />
        </div>
        <p className="mt-3 text-center text-[10px] font-bold text-white">Vence en 01:27</p>
        <div className="mx-auto mt-2 w-fit rounded-full bg-lime-500 px-5 py-1.5 text-[10px] font-bold text-ink-900">
          Actualizar
        </div>
      </div>

      <div className="flex items-center justify-center gap-1.5 text-[9px] text-white/60">
        <ChevronRight className="h-3 w-3 text-lime-400" />
        Mostrá este código en recepción
      </div>
    </div>
  )
}

/** Patrón decorativo tipo QR (no es un QR real). */
function QrPattern() {
  const cells = Array.from({ length: 121 }, (_, i) => (i * 53 + (i % 7) * 13) % 5 < 2)
  return (
    <div className="grid grid-cols-11 gap-[2px]" aria-hidden="true">
      {cells.map((on, i) => (
        <span key={i} className={`h-2.5 w-2.5 rounded-[1px] ${on ? 'bg-ink-900' : 'bg-transparent'}`} />
      ))}
    </div>
  )
}
