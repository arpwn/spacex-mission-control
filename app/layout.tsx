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
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
