export default function Loading() {
  return (
    <main className="container empty-state" role="status">
      <p className="eyebrow">SPACEX MISSION CONTROL</p>
      <h1><span className="loading-es" lang="es">Conectando con el archivo…</span><span className="loading-en" lang="en">Connecting to the archive…</span></h1>
      <p><span className="loading-es" lang="es">Cargando misiones y resultados.</span><span className="loading-en" lang="en">Loading missions and outcomes.</span></p>
    </main>
  );
}
