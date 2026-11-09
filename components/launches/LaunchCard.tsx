"use client";
import type { Launch } from "@/types/spacex";
import { missionDate, missionStatus } from "@/lib/launches";
export function LaunchCard({
  launch,
  onClick,
}: {
  launch: Launch;
  onClick: () => void;
}) {
  return (
    <article className="launch-card">
      <div className="mission-top">
        <span className="flight">
          {launch.flight_number
            ? `VUELO ${String(launch.flight_number).padStart(3, "0")}`
            : "MISIÓN DE REFERENCIA"}
        </span>
        <span
          className={`mission-badge ${launch.success === true ? "success" : launch.success === false ? "failure" : "unconfirmed"}`}
        >
          {missionStatus(launch)}
        </span>
      </div>
      <h3>{launch.name}</h3>
      <p className="mission-date">{missionDate(launch.date_utc)} · UTC</p>
      {launch.details ? (
        <p className="mission-description">{launch.details}</p>
      ) : (
        <p className="mission-description no-description">
          {launch.links.webcast || launch.links.wikipedia
            ? "Transmisión o contexto disponibles en las fuentes de la misión."
            : "Registro con fecha y resultado; la fuente no incluye una descripción."}
        </p>
      )}
      <button onClick={onClick} aria-label={`Ver misión ${launch.name}`}>
        Explorar misión <span>↗</span>
      </button>
    </article>
  );
}
