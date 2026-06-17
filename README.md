# Movete · Landing page

Landing page comercial de **Movete**, la plataforma de gestión para gimnasios,
boxes y estudios: un panel web para administrar el negocio + una app móvil
Android para los socios.

## Stack

- [Vite](https://vitejs.dev/) + [React 18](https://react.dev/) + TypeScript
- [Tailwind CSS](https://tailwindcss.com/) (tokens de marca en `tailwind.config.js`)
- [lucide-react](https://lucide.dev/) para íconos

## Scripts

```bash
npm install      # instalar dependencias
npm run dev      # entorno de desarrollo (http://localhost:5173)
npm run build    # compilar a /dist
npm run preview  # previsualizar el build
```

## Cómo editar los textos

Toda la copy de la landing vive en un solo archivo:

```
src/content/landing.ts
```

Ahí cambiás títulos, subtítulos, tarjetas y bullets sin tocar el código de los
componentes. En el mismo archivo configurás el contacto:

- `CONTACT.whatsappNumber` — número de WhatsApp (formato internacional, sin `+`).
- `CONTACT.whatsappMessage` — mensaje pre-cargado del botón de WhatsApp.
- `CONTACT.email` — email de contacto.
- `CONTACT.formEndpoint` — endpoint del formulario de demo. Si queda vacío, el
  formulario muestra un mensaje de éxito simulado (no envía datos).

## Identidad visual

Los colores de marca están centralizados en `tailwind.config.js`:

- `ink` — fondos oscuros (negro / antracita)
- `lime` — verde lima flúor (CTAs, acentos, estados activos)
- `brandviolet` — violeta secundario
- `paper` — blanco cálido / gris claro (secciones alternadas)

## Logo y mockups

- El logo (`src/components/Logo.tsx`) es un **placeholder tipográfico**.
  Reemplazalo por el SVG/imagen real de la marca cuando lo tengas.
- Los mockups de la app (`src/components/PhoneMockup.tsx`) y del panel
  (`src/components/AdminMockup.tsx`) están dibujados con CSS/SVG como
  placeholders. Podés reemplazarlos por capturas reales.
- Para la imagen de redes sociales, agregá `public/og-image.png`
  (referenciada en `index.html`).

## Estructura

```
src/
├── components/   # reutilizables: Section, Button, Card, Logo, mockups…
├── content/      # landing.ts → toda la copy editable
├── sections/     # cada bloque de la landing (Hero, Problema, Socios…)
├── App.tsx       # arma la página
└── main.tsx
```
