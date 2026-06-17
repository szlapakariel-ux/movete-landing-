import { Users, CalendarDays, TrendingUp, AlertCircle } from 'lucide-react'

interface AdminMockupProps {
  className?: string
}

/**
 * Mockup del panel web (Web Admin) del gimnasio, dibujado con CSS/SVG.
 * Placeholder visual: reemplazá por capturas reales del panel si las tenés.
 */
export function AdminMockup({ className = '' }: AdminMockupProps) {
  return (
    <div
      className={`w-full max-w-xl select-none ${className}`}
      role="img"
      aria-label="Panel web de administración de Movete para el gimnasio"
    >
      <div className="overflow-hidden rounded-2xl border border-white/10 bg-ink-800 shadow-2xl shadow-black/50">
        {/* Barra del navegador */}
        <div className="flex items-center gap-2 border-b border-white/10 bg-ink-700 px-4 py-3">
          <span className="h-3 w-3 rounded-full bg-red-400/70" />
          <span className="h-3 w-3 rounded-full bg-yellow-400/70" />
          <span className="h-3 w-3 rounded-full bg-lime-500/80" />
          <div className="ml-3 flex-1 rounded-md bg-ink-900/60 px-3 py-1 text-[10px] text-paper/40">
            panel de movete
          </div>
        </div>

        {/* Contenido del panel */}
        <div className="flex">
          {/* Sidebar */}
          <aside className="hidden w-32 shrink-0 space-y-1 border-r border-white/10 bg-ink-900/40 p-3 sm:block">
            {['Inicio', 'Socios', 'Clases', 'Reservas', 'Pagos', 'Reportes'].map(
              (item, i) => (
                <div
                  key={item}
                  className={`rounded-lg px-3 py-2 text-[11px] ${
                    i === 0
                      ? 'bg-lime-500/15 font-semibold text-lime-400'
                      : 'text-paper/55'
                  }`}
                >
                  {item}
                </div>
              ),
            )}
          </aside>

          {/* Main */}
          <div className="flex-1 p-4">
            <div className="mb-3 flex items-center justify-between">
              <p className="font-display text-sm font-bold text-paper">
                Resumen de hoy
              </p>
              <span className="rounded-full bg-lime-500/15 px-2.5 py-1 text-[10px] font-semibold text-lime-400">
                En vivo
              </span>
            </div>

            {/* KPIs */}
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
              {[
                { icon: Users, label: 'Socios activos', value: '482' },
                { icon: CalendarDays, label: 'Clases hoy', value: '24' },
                { icon: TrendingUp, label: 'Ocupación', value: '87%' },
                { icon: AlertCircle, label: 'Pagos vencidos', value: '6' },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="rounded-xl bg-white/5 p-2.5">
                  <Icon className="h-4 w-4 text-lime-400" />
                  <p className="mt-2 text-base font-bold text-paper">{value}</p>
                  <p className="text-[9px] leading-tight text-paper/50">{label}</p>
                </div>
              ))}
            </div>

            {/* Gráfico simple */}
            <div className="mt-3 rounded-xl bg-white/5 p-3">
              <p className="mb-2 text-[10px] text-paper/50">Ocupación por hora</p>
              <div className="flex h-20 items-end gap-1.5">
                {[40, 65, 50, 80, 95, 70, 85, 60, 75].map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-t bg-gradient-to-t from-lime-600 to-lime-400"
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>
            </div>

            {/* Fila de tabla */}
            <div className="mt-3 space-y-1.5">
              {[
                { name: 'CrossFit · 18:00', tag: '18/20', ok: true },
                { name: 'Funcional · 19:00', tag: 'Lleno', ok: false },
              ].map((r) => (
                <div
                  key={r.name}
                  className="flex items-center justify-between rounded-lg bg-white/5 px-3 py-2"
                >
                  <span className="text-[11px] text-paper/80">{r.name}</span>
                  <span
                    className={`rounded-full px-2 py-0.5 text-[9px] font-semibold ${
                      r.ok
                        ? 'bg-lime-500/20 text-lime-400'
                        : 'bg-brandviolet-500/20 text-brandviolet-400'
                    }`}
                  >
                    {r.tag}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
