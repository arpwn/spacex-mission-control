"use client";
export default function ErrorPage({ reset }: { reset: () => void }) {
  return (
    <main className="container empty-state">
      <p className="eyebrow">SPACEX MISSION CONTROL</p>
      <h1>El archivo no está disponible.</h1>
      <p>
        No pudimos consultar la fuente de lanzamientos. Puedes intentarlo de
        nuevo.
      </p>
      <button onClick={reset}>Reintentar consulta</button>
    </main>
  );
}
