/**
 * Contenido editable de la landing de Movete.
 * -------------------------------------------------------------
 * Toda la copy y la configuración vive acá para que puedas editar
 * textos sin tocar el código de los componentes.
 *
 * Para personalizar: cambiá los strings de este archivo.
 */

/* ===========================================================
 * Configuración general / marca y contacto
 * =========================================================== */
export const BRAND = {
  name: 'Movete',
  tagline: 'Gestión de gimnasios + app para socios',
}

export const CONTACT = {
  /** Número de WhatsApp en formato internacional, sin "+" ni espacios. */
  whatsappNumber: '5491122441216',
  whatsappMessage:
    'Hola 👋 Quiero solicitar una demo de Movete para mi gimnasio.',
  email: 'soporte.movete@szoluciones.com',
  /**
   * Endpoint del formulario de demo (placeholder).
   * Conectá tu servicio (Formspree, tu API, etc.). Si queda vacío,
   * el formulario muestra un mensaje de éxito simulado.
   */
  formEndpoint: '',
}

/** Helper para armar el link de WhatsApp con mensaje pre-cargado. */
export const whatsappUrl = (() => {
  const text = encodeURIComponent(CONTACT.whatsappMessage)
  return `https://wa.me/${CONTACT.whatsappNumber}?text=${text}`
})()

/* ===========================================================
 * Navegación
 * =========================================================== */
export const NAV_LINKS = [
  { label: 'Problema', href: '#problema' },
  { label: 'Solución', href: '#solucion' },
  { label: 'Para tu equipo', href: '#admin' },
  { label: 'App del socio', href: '#app-socio' },
  { label: 'Cómo funciona', href: '#como-funciona' },
]

export const CTA = {
  primary: 'Solicitar demo',
  secondary: 'Ver cómo funciona',
  finalSecondary: 'Quiero conocer Movete',
  whatsapp: 'Escribinos por WhatsApp',
}

/* ===========================================================
 * 1. HERO
 * =========================================================== */
export const HERO = {
  eyebrow: 'Plataforma para gimnasios, boxes y estudios',
  title: 'Todo tu gimnasio ordenado en una sola plataforma',
  subtitle:
    'Movete centraliza la gestión administrativa y le da a tus socios una app móvil para reservar clases, ver sus abonos, recibir notificaciones y hacer check-in con QR.',
  bullets: [
    'Panel web para administrar el gimnasio',
    'App Android para socios',
    'Reservas, pagos, abonos y notificaciones',
    'Estadísticas, alertas y control de asistencia',
  ],
}

/* ===========================================================
 * 2. PROBLEMA
 * =========================================================== */
export const PROBLEMA = {
  eyebrow: 'El problema',
  title: 'Tu gimnasio no debería depender de mensajes sueltos',
  intro:
    'Cuando todo pasa por WhatsApp, planillas o memoria, cada consulta se vuelve una interrupción y cada error termina costando tiempo, dinero o experiencia.',
  cards: [
    {
      title: 'Reservas dispersas',
      description:
        'Turnos por chat, capturas y mensajes sueltos que nadie termina de controlar.',
    },
    {
      title: 'Pagos sin seguimiento',
      description:
        'No sabés con claridad quién pagó, quién debe ni cuándo vence cada abono.',
    },
    {
      title: 'Cupos difíciles de controlar',
      description:
        'Clases sobrevendidas o medio vacías porque el cupo se lleva “a ojo”.',
    },
    {
      title: 'Socios sin información',
      description:
        'Preguntan una y otra vez por horarios, abonos y disponibilidad.',
    },
    {
      title: 'Mucho trabajo manual',
      description:
        'El equipo pierde horas en tareas repetitivas en lugar de hacer crecer el gimnasio.',
    },
    {
      title: 'Falta de datos',
      description:
        'Sin números reales es difícil decidir qué clases conviene, cuándo y cómo escalar.',
    },
  ],
  closing:
    'Cuando la gestión depende de mensajes, planillas y memoria, el gimnasio pierde tiempo, control y oportunidades de crecimiento.',
}

/* ===========================================================
 * 3. SOLUCIÓN
 * =========================================================== */
export const SOLUCION = {
  eyebrow: 'La solución',
  title:
    'Movete convierte la gestión diaria en un sistema simple, ordenado y escalable',
  intro:
    'Movete conecta la operación interna del gimnasio con la experiencia diaria del socio.',
  points: [
    {
      title: 'El administrador gestiona todo',
      description:
        'Desde el panel web, tu equipo ordena socios, clases, reservas, pagos y abonos en un solo lugar.',
    },
    {
      title: 'El socio usa una app móvil',
      description:
        'Desde Android, cada socio reserva, consulta sus abonos y hace check-in sin depender de nadie.',
    },
    {
      title: 'Todo queda centralizado',
      description:
        'Reservas, pagos, abonos, clases y notificaciones dejan de vivir en chats y planillas.',
    },
    {
      title: 'Decidís con datos reales',
      description:
        'Estadísticas claras para entender tu negocio y prepararte para crecer.',
    },
  ],
}

/* ===========================================================
 * 4. ADMINISTRADORES (Web Admin)
 * =========================================================== */
export const ADMIN = {
  eyebrow: 'Para tu equipo · Panel web',
  title: 'Control total para administrar tu gimnasio',
  subtitle:
    'Desde el panel web, tu equipo puede gestionar socios, clases, reservas, pagos, abonos, estadísticas, notificaciones, sedes y permisos desde un solo lugar.',
  cards: [
    {
      title: 'Dashboard inteligente',
      description:
        'Visualizá lo importante del día: actividad reciente, clases de hoy, ocupación, cancelaciones, pagos vencidos y alertas operativas.',
      bullets: [
        'Estadísticas generales',
        'Ocupación en tiempo real',
        'Alertas y acciones rápidas',
      ],
    },
    {
      title: 'Gestión de socios',
      description:
        'Centralizá los datos de cada socio con historial de reservas, pagos, notas internas y contacto directo por WhatsApp.',
      bullets: [
        'Alta, edición y estado del socio',
        'Ficha completa',
        'Importación masiva por CSV',
      ],
    },
    {
      title: 'Clases y calendario',
      description:
        'Creá clases, configurá horarios, recurrencias, cupos, sedes, instructores y bloqueos de días u horarios.',
      bullets: ['Vista semanal', 'Clases recurrentes', 'Cupos reales por fecha'],
    },
    {
      title: 'Reservas y listas de espera',
      description:
        'Administrá reservas, estados, filtros, cupos y listas de espera sin depender de mensajes sueltos.',
      bullets: [
        'Reservas por socio o clase',
        'Cambio de estado',
        'Exportación CSV',
      ],
    },
    {
      title: 'Pagos, abonos y planes',
      description:
        'Ordená ingresos, deudores, membresías, packs de clases, créditos y renovaciones desde el mismo sistema.',
      bullets: [
        'Registro de pagos',
        'Estado de cuenta por socio',
        'Planes, abonos y créditos',
      ],
    },
    {
      title: 'Estadísticas del negocio',
      description:
        'Tomá decisiones con datos reales sobre ingresos, reservas, ocupación, crecimiento de socios y clases más populares.',
      bullets: [
        'Resumen de ingresos',
        'Métodos de pago',
        'Tasa de cancelación',
      ],
    },
    {
      title: 'Notificaciones automáticas',
      description:
        'Comunicá novedades, recordatorios, pagos pendientes y vencimientos por canales digitales.',
      bullets: ['In-app', 'Push', 'Email'],
    },
    {
      title: 'Equipo, roles y permisos',
      description:
        'Definí qué puede hacer cada persona del equipo según su rol: administración, recepción, instructores u otros perfiles.',
      bullets: [
        'Usuarios administrativos',
        'Invitaciones',
        'Permisos por rol',
      ],
    },
    {
      title: 'Sedes, marca y configuración',
      description:
        'Adaptá Movete a tu gimnasio: sedes, logo, color principal, horarios, política de cancelación y Mercado Pago.',
      bullets: ['Multi-sede', 'Identidad visual', 'Integración con Mercado Pago'],
    },
  ],
}

/* ===========================================================
 * 5. SOCIOS / APP MÓVIL — 15 funciones en 5 bloques
 * =========================================================== */
export const APP_SOCIO = {
  eyebrow: 'Para tus socios · App Android',
  title: 'Una app simple para que tus socios gestionen su entrenamiento',
  subtitle:
    'Desde la app móvil Android, cada socio puede registrarse, elegir su gimnasio, reservar clases, consultar actividades, ver sus abonos, revisar su estado de cuenta, comprar o renovar membresías, recibir notificaciones y hacer check-in con QR.',
  closing:
    'Tus socios se autogestionan mejor y tu equipo recibe menos consultas repetidas.',
  blocks: [
    {
      title: 'Registro y acceso',
      features: [
        {
          title: 'Registro y vinculación al gimnasio',
          description:
            'El socio crea su cuenta desde la app y se vincula a su gimnasio por nombre comercial, código o link de invitación.',
          bullets: [
            'Registro desde la app',
            'Selección de gimnasio',
            'Código o link de invitación',
          ],
        },
        {
          title: 'Multi-gimnasio',
          description:
            'Un mismo socio puede estar vinculado a más de un gimnasio y cambiar de organización sin cerrar sesión.',
          bullets: ['Cambio de gimnasio', 'Múltiples organizaciones', 'Misma cuenta'],
        },
        {
          title: 'Inicio claro',
          description:
            'Accede a un resumen de su actividad, clases, reservas y abonos desde una pantalla simple.',
          bullets: ['Resumen general', 'Accesos rápidos', 'Actividad del día'],
        },
      ],
    },
    {
      title: 'Clases y reservas',
      features: [
        {
          title: 'Clases y actividades',
          description:
            'Consulta el catálogo de actividades, busca por día, horario, sede o instructor y ve cupos reales antes de reservar.',
          bullets: [
            'Actividades disponibles',
            'Filtros simples',
            'Cupos en tiempo real',
          ],
        },
        {
          title: 'Reservas propias',
          description:
            'Crea, ve y cancela sus reservas respetando la política de cancelación del gimnasio.',
          bullets: [
            'Reservas activas y pasadas',
            'Estado de reserva',
            'Cancelación desde la app',
          ],
        },
        {
          title: 'Lista de espera',
          description:
            'Cuando una clase está llena, el socio se suma a la lista de espera y mantiene su lugar organizado.',
          bullets: ['Alta en espera', 'Cupos controlados', 'Menos gestión manual'],
        },
      ],
    },
    {
      title: 'Abonos y pagos',
      features: [
        {
          title: 'Abonos y créditos',
          description:
            'Consulta sus abonos activos, créditos disponibles, consumos y pagos recientes.',
          bullets: [
            'Estado del abono',
            'Créditos disponibles',
            'Historial de consumos',
          ],
        },
        {
          title: 'Estado de cuenta propio',
          description:
            'Consulta su situación financiera con el gimnasio: pagos, importes, estados y abono vigente.',
          bullets: ['Pagos e importes', 'Estado de cada pago', 'Abono vigente'],
        },
        {
          title: 'Compra y renovación de membresías',
          description:
            'Compra o renueva su abono desde la app con Mercado Pago, con opción manual si el checkout no está disponible.',
          bullets: ['Checkout Pro', 'Renovación simple', 'Solicitudes registradas'],
        },
        {
          title: 'Solicitudes de compra',
          description:
            'Las compras y renovaciones quedan registradas, con estados claros para evitar confusiones.',
          bullets: ['Pendiente', 'Aprobada', 'Rechazada'],
        },
      ],
    },
    {
      title: 'Notificaciones y perfil',
      features: [
        {
          title: 'WOD / entrenamiento del día',
          description:
            'El gimnasio publica el entrenamiento del día para que el socio lo consulte desde la app.',
          bullets: ['WOD diario', 'Detalle del entrenamiento', 'Historial disponible'],
        },
        {
          title: 'Perfil y preferencias',
          description:
            'Gestiona sus datos personales, contraseña, organización activa y preferencias de notificaciones.',
          bullets: [
            'Datos personales',
            'Cambio de contraseña',
            'Preferencias por gimnasio',
          ],
        },
        {
          title: 'Notificaciones',
          description:
            'Recibe avisos importantes desde la app, push o email, y consulta su historial.',
          bullets: ['In-app', 'Push Android', 'Email'],
        },
      ],
    },
    {
      title: 'Check-in y experiencia móvil',
      features: [
        {
          title: 'QR de check-in',
          description:
            'La app genera un QR dinámico para registrar asistencia de forma rápida desde el panel web.',
          bullets: ['Check-in ágil', 'Control de asistencia', 'Menos filas y errores'],
        },
        {
          title: 'Funciona con conexión inestable',
          description:
            'La app guarda la información en el dispositivo para mostrarla aunque el socio tenga mala conexión.',
          bullets: ['Offline-first', 'Datos disponibles', 'Mejor experiencia móvil'],
        },
      ],
    },
  ],
}

/* ===========================================================
 * 6. PAGOS, ABONOS Y MEMBRESÍAS
 * =========================================================== */
export const PAGOS = {
  eyebrow: 'Pagos y abonos',
  title: 'Pagos y abonos más claros para todos',
  closing:
    'Movete ordena la relación económica entre el gimnasio y cada socio, reduciendo dudas, reclamos y tareas manuales.',
  gym: {
    title: 'Para el gimnasio',
    items: [
      'Registro de pagos',
      'Estado de cuenta por socio',
      'Deudores del mes',
      'Planes, packs y membresías',
      'Consumo y devolución de créditos',
      'Integración con Mercado Pago',
    ],
  },
  member: {
    title: 'Para el socio',
    items: [
      'Consulta de abono vigente',
      'Créditos disponibles',
      'Historial de consumos',
      'Estado de cuenta propio',
      'Compra o renovación desde la app',
      'Solicitudes de compra con estado claro',
    ],
  },
}

/* ===========================================================
 * 7. SEGURIDAD, ROLES Y PRIVACIDAD
 * =========================================================== */
export const SEGURIDAD = {
  eyebrow: 'Seguridad y privacidad',
  title: 'Accesos separados y seguros para cada tipo de usuario',
  closing: 'Cada persona ve solo lo que necesita. Más orden, más seguridad y menos errores.',
  points: [
    {
      title: 'Control total para el administrador',
      description:
        'El administrador tiene la visión completa del sistema y de la operación del gimnasio.',
    },
    {
      title: 'Roles para el equipo',
      description:
        'El equipo interno puede tener roles y permisos según lo que necesita cada persona.',
    },
    {
      title: 'El socio ve solo lo suyo',
      description:
        'Accede a su perfil, sus reservas, sus abonos y su estado de cuenta. No ve datos de otros socios.',
    },
    {
      title: 'Separación de accesos',
      description:
        'El socio no accede al panel administrativo. El equipo no necesita la app del socio.',
    },
    {
      title: 'Gestión de privacidad',
      description:
        'Movete contempla la gestión de privacidad y la solicitud de eliminación de cuenta.',
    },
    {
      title: 'Menos errores, más protección',
      description:
        'Cada acceso acotado protege la información del gimnasio y de los socios.',
    },
  ],
}

/* ===========================================================
 * 8. CÓMO FUNCIONA
 * =========================================================== */
export const COMO_FUNCIONA = {
  eyebrow: 'Cómo funciona',
  title: 'Tres pasos para poner tu gimnasio en orden',
  steps: [
    {
      number: '01',
      title: 'Configuramos tu gimnasio',
      description:
        'Cargás tus sedes, clases, horarios, planes, instructores, reglas de cancelación, marca y medios de pago.',
    },
    {
      number: '02',
      title: 'Tu equipo administra desde el panel',
      description:
        'Gestionás socios, reservas, pagos, abonos, notificaciones, estadísticas y asistencia desde el panel web.',
    },
    {
      number: '03',
      title: 'Tus socios usan la app',
      description:
        'Reservan clases, ven cupos, consultan abonos, compran o renuevan membresías, reciben avisos y hacen check-in desde Android.',
    },
  ],
}

/* ===========================================================
 * 9. BENEFICIOS
 * =========================================================== */
export const BENEFICIOS = {
  eyebrow: 'Beneficios',
  title: 'Lo que gana tu gimnasio y lo que ganan tus socios',
  gym: {
    title: 'Para el gimnasio',
    items: [
      'Menos trabajo manual',
      'Menos dependencia de WhatsApp',
      'Más control sobre cupos y reservas',
      'Mejor seguimiento de pagos y deudores',
      'Más datos para tomar decisiones',
      'Mejor imagen profesional',
      'Operación preparada para crecer',
      'Equipo con roles claros',
      'Gestión multi-sede',
      'Comunicación más ordenada',
    ],
  },
  member: {
    title: 'Para el socio',
    items: [
      'Más autonomía',
      'Menos consultas repetidas',
      'Reservas simples',
      'Información clara de clases y abonos',
      'Notificaciones útiles',
      'Check-in rápido',
      'Estado de cuenta visible',
      'Compra y renovación más simple',
      'Mejor experiencia desde el celular',
    ],
  },
}

/* ===========================================================
 * 10. DIFERENCIAL
 * =========================================================== */
export const DIFERENCIAL = {
  eyebrow: 'El diferencial',
  title: 'Más que una app de reservas',
  intro:
    'Movete no solo permite reservar clases. Conecta la gestión administrativa del gimnasio con la experiencia diaria del socio.',
  items: [
    'Web Admin completo',
    'App móvil Android para socios',
    'Onboarding y vinculación por gimnasio',
    'Multi-organización',
    'Catálogo de actividades',
    'Clases y reservas',
    'Lista de espera',
    'Abonos, créditos y membresías',
    'Estado de cuenta del socio',
    'Mercado Pago',
    'Notificaciones',
    'QR de check-in',
    'Offline-first',
    'Roles y permisos',
    'Multi-sede',
    'Marca visual adaptable',
    'Estadísticas del negocio',
  ],
}

/* ===========================================================
 * 11. CTA FINAL
 * =========================================================== */
export const CTA_FINAL = {
  eyebrow: 'Empecemos',
  title:
    'Convertí la gestión de tu gimnasio en una experiencia simple, ordenada y profesional',
  subtitle:
    'Movete te ayuda a administrar mejor, reducir tareas manuales y ofrecer a tus socios una app moderna para entrenar sin fricciones.',
  form: {
    title: 'Solicitá tu demo',
    description:
      'Dejanos tus datos y te mostramos cómo Movete se adapta a tu gimnasio. Sin compromiso.',
    fields: {
      name: 'Nombre y apellido',
      gym: 'Nombre del gimnasio',
      email: 'Email',
      phone: 'Teléfono / WhatsApp',
      message: 'Contanos sobre tu gimnasio (opcional)',
    },
    submit: 'Solicitar demo',
    whatsappHint: '¿Preferís un mensaje directo?',
    successTitle: '¡Listo! Recibimos tu solicitud',
    successMessage:
      'Te vamos a contactar muy pronto para coordinar tu demo de Movete.',
  },
}

/* ===========================================================
 * Footer
 * =========================================================== */
export const FOOTER = {
  description:
    'La plataforma que une la gestión de tu gimnasio con una app simple para tus socios.',
  privacy: 'Movete contempla la gestión de privacidad y la eliminación de cuenta.',
  rights: 'Todos los derechos reservados.',
}
