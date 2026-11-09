import "./globals.css";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "SpaceX Mission Control — Archivo de lanzamientos",
  description:
    "Explora el archivo histórico de lanzamientos de SpaceX con búsqueda, filtros por año, resultados y detalle de misión.",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: `try { const requested = new URLSearchParams(location.search).get('lang'); const lang = requested === 'en' || requested === 'es' ? requested : localStorage.getItem('lang'); document.documentElement.lang = lang === 'en' ? 'en' : 'es'; } catch {}` }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
