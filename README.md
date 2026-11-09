🚀 SpaceX Mission Control Dashboard

A modern, responsive dashboard to explore the history of SpaceX rocket launches using the public SpaceX API.
Built with a strong focus on UX, clean architecture, and maintainability.

🧱 Architecture & Tech Stack
Framework

Next.js (App Router)
Chosen for its file-based routing, built-in loading/error states, and excellent support for server-first applications with client-side interactivity where needed.

Language

TypeScript (strict mode)
Used across the entire project to ensure type safety, reduce runtime errors, and improve long-term maintainability.

Styling

Tailwind CSS
Enables rapid UI iteration, consistent spacing/typography, and responsive design without context-switching between files.

🤖 AI Usage

AI tools were used as an accelerator, not a replacement for decision-making.

Specifically:

Used ChatGPT to:

Brainstorm layout ideas and UX patterns for the dashboard.

Generate initial TypeScript interfaces based on the SpaceX API response.


## Archivo histórico

Incluye búsqueda por misión, filtros por año y resultado, orden cronológico, paginación y detalle en un diálogo nativo con navegación por teclado. La vista inicial excluye registros sin resultado confirmado. Las fechas se muestran en UTC.

La API comunitaria de r/SpaceX no es una fuente de seguimiento en tiempo real. Su repositorio fue archivado: https://github.com/r-spacex/SpaceX-API. Si la consulta falla o tarda más de cuatro segundos, la interfaz muestra una selección explícita de tres misiones de referencia con enlaces a NASA. Esta selección no se presenta como un archivo completo ni como una respuesta de la API. Las fuentes están en `lib/reference-launches.ts`.

Ejecuta `npm run test` (Node.js 22 o posterior), `npm run build` y `npm run lint`.
