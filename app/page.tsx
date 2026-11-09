import { getLaunches } from "@/lib/spacex";
import { LaunchList } from "@/components/launches/LaunchList";
export const dynamic = "force-dynamic";
export default async function HomePage() {
  const { launches, source } = await getLaunches();
  const confirmed = launches.filter((l) => l.success !== null);
  const years = confirmed.map((l) => new Date(l.date_utc).getUTCFullYear());
  const coverage = years.length
    ? `${Math.min(...years)}—${Math.max(...years)}`
    : "Sin resultados documentados";
  return (
    <>
      <header className="mission-header">
        <a href="#main" className="brand">
          <span className="orbit">↗</span> SpaceX{" "}
          <strong>Mission Control</strong>
        </a>
        <a
          href="https://github.com/arpwn/spacex-mission-control"
          target="_blank"
          rel="noreferrer"
        >
          Código ↗
        </a>
      </header>
      <main id="main" className="container">
        <section className="hero">
          <p className="eyebrow">EXPLORADOR / ARCHIVO HISTÓRICO</p>
          <h1>
            Cada lanzamiento
            <br />
            <span>cuenta una historia.</span>
          </h1>
          <p className="intro">
            Explora misiones, resultados y las fuentes detrás de cada vuelo.
          </p>
          <div className="archive-metrics">
            <div>
              <strong>{coverage}</strong>
              <span>Cobertura de esta selección</span>
            </div>
            <div>
              <strong>{confirmed.length}</strong>
              <span>Resultados documentados</span>
            </div>
            <div>
              <strong>{launches.length - confirmed.length}</strong>
              <span>Registros sin confirmar</span>
            </div>
          </div>
        </section>
        <p className="archive-note">
          <span>●</span>{" "}
          {source === "api"
            ? "Archivo de una API comunitaria de SpaceX. Los registros reflejan la cobertura de esa fuente; este panel no ofrece seguimiento en tiempo real."
            : "La API no respondió. Se muestra una selección de 3 misiones históricas con fuentes de NASA, no el archivo completo. Los filtros se aplican a esta selección."}{" "}
          <a
            href="https://github.com/r-spacex/SpaceX-API"
            target="_blank"
            rel="noreferrer"
          >
            Sobre la API ↗
          </a>
        </p>
        <LaunchList launches={launches} />
        <footer>
          SpaceX Mission Control{" "}
          <span>Proyecto personal · React + TypeScript + Next.js</span>
        </footer>
      </main>
    </>
  );
}
