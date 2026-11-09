"use client";
import { useState } from "react";
import type { Launch } from "@/types/spacex";
import { filterLaunches } from "@/lib/launches";
import { LaunchCard } from "./LaunchCard";
import { LaunchDetailsModal } from "./LaunchDetailsModal";
const pageSize = 12;
export function LaunchList({ launches }: { launches: Launch[] }) {
  const [selected, setSelected] = useState<Launch | null>(null);
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState("confirmed");
  const [year, setYear] = useState("all");
  const [sort, setSort] = useState("newest");
  const [page, setPage] = useState(1);
  const years = [
    ...new Set(launches.map((l) => new Date(l.date_utc).getUTCFullYear())),
  ].sort((a, b) => b - a);
  const filtered = filterLaunches(launches, { query, status, year, sort });
  const pages = Math.max(1, Math.ceil(filtered.length / pageSize));
  const current = Math.min(page, pages);
  const visible = filtered.slice((current - 1) * pageSize, current * pageSize);
  function reset() {
    setQuery("");
    setStatus("confirmed");
    setYear("all");
    setSort("newest");
    setPage(1);
  }
  return (
    <>
      <section className="filters" aria-label="Filtros del archivo">
        <div className="search-field">
          <label htmlFor="mission-search">Buscar misión</label>
          <input
            id="mission-search"
            type="search"
            placeholder="Ej. Crew, Starlink, Falcon…"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setPage(1);
            }}
          />
        </div>
        <div>
          <label htmlFor="status-filter">Resultado</label>
          <select
            id="status-filter"
            value={status}
            onChange={(e) => {
              setStatus(e.target.value);
              setPage(1);
            }}
          >
            {[
              ["confirmed", "Con resultado"],
              ["all", "Todos"],
              ["success", "Éxito"],
              ["failure", "Fallo"],
              ["unconfirmed", "Sin confirmar"],
            ].map(([value, label]) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="year-filter">Año</label>
          <select
            id="year-filter"
            value={year}
            onChange={(e) => {
              setYear(e.target.value);
              setPage(1);
            }}
          >
            <option value="all">Todos los años</option>
            {years.map((y) => (
              <option key={y}>{y}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="sort-filter">Orden</label>
          <select
            id="sort-filter"
            value={sort}
            onChange={(e) => {
              setSort(e.target.value);
              setPage(1);
            }}
          >
            <option value="newest">Más recientes</option>
            <option value="oldest">Más antiguos</option>
          </select>
        </div>
      </section>
      <div className="results-heading">
        <h2>Archivo de lanzamientos</h2>
        <p role="status">
          {filtered.length} {filtered.length === 1 ? "resultado" : "resultados"} · Página {current} de {pages}
        </p>
      </div>
      {!visible.length ? (
        <div className="empty-state">
          <h3>No encontramos esa misión.</h3>
          <p>Prueba otro nombre, año o resultado.</p>
          <button onClick={reset}>Restablecer filtros</button>
        </div>
      ) : (
        <div className="launch-grid">
          {visible.map((l) => (
            <LaunchCard key={l.id} launch={l} onClick={() => setSelected(l)} />
          ))}
        </div>
      )}
      <nav className="pagination" aria-label="Paginación de lanzamientos">
        <button disabled={current === 1} onClick={() => setPage(current - 1)}>
          ← Anterior
        </button>
        <span>
          {current} / {pages}
        </span>
        <button
          disabled={current === pages}
          onClick={() => setPage(current + 1)}
        >
          Siguiente →
        </button>
      </nav>
      {selected && (
        <LaunchDetailsModal
          launch={selected}
          onClose={() => setSelected(null)}
        />
      )}
    </>
  );
}
