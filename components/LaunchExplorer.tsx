"use client";
import { useLanguage } from "@/lib/locale";
import type { Launch } from "@/types/spacex";
import { LaunchList } from "@/components/launches/LaunchList";
export function LaunchExplorer({
  launches,
  source,
}: {
  launches: Launch[];
  source: "api" | "reference";
}) {
  const { t, lang, setLanguage } = useLanguage();
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
        <button
          className="language-toggle"
          type="button"
          onClick={() => setLanguage(lang === "es" ? "en" : "es")}
          aria-label={lang === "es" ? "Switch to English" : "Cambiar a español"}
        >
          {lang === "es" ? "EN" : "ES"}
        </button>
        <a
          href="https://github.com/arpwn/spacex-mission-control"
          target="_blank"
          rel="noreferrer"
        >
          {t("Código ↗")}{" "}
        </a>
      </header>
      <main id="main" className="container">
        <section className="hero">
          <p className="eyebrow">{t("EXPLORADOR / ARCHIVO HISTÓRICO")}</p>
          <h1>
            {t("Cada lanzamiento")} <br />
            <span>{t("cuenta una historia.")}</span>
          </h1>
          <p className="intro">
            {t(
              "Explora misiones, resultados y las fuentes detrás de cada vuelo.",
            )}{" "}
          </p>
          <div className="archive-metrics">
            <div>
              <strong>{t(coverage)}</strong>
              <span>{t("Cobertura de esta selección")}</span>
            </div>
            <div>
              <strong>{confirmed.length}</strong>
              <span>{t("Resultados documentados")}</span>
            </div>
            <div>
              <strong>{launches.length - confirmed.length}</strong>
              <span>{t("Registros sin confirmar")}</span>
            </div>
          </div>
        </section>
        <p className="archive-note">
          <span>●</span>{" "}
          {source === "api"
            ? t(
                "Archivo de una API comunitaria de SpaceX. Los registros reflejan la cobertura de esa fuente; este panel no ofrece seguimiento en tiempo real.",
              )
            : t(
                "La API no respondió. Se muestra una selección de 3 misiones históricas con fuentes de NASA, no el archivo completo. Los filtros se aplican a esta selección.",
              )}{" "}
          <a
            href="https://github.com/r-spacex/SpaceX-API"
            target="_blank"
            rel="noreferrer"
          >
            {t("Sobre la API ↗")}{" "}
          </a>
        </p>
        <LaunchList launches={launches} />
        <footer>
          {t("SpaceX Mission Control")}{" "}
          <span>{t("Proyecto personal · React + TypeScript + Next.js")}</span>
        </footer>
      </main>
    </>
  );
}
