"use client";
import { useEffect, useRef } from "react";
import type { Launch } from "@/types/spacex";
import { missionDate, missionStatus } from "@/lib/launches";
export function LaunchDetailsModal({
  launch,
  onClose,
}: {
  launch: Launch;
  onClose: () => void;
}) {
  const dialog = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    if (dialog.current && !dialog.current.open) dialog.current.showModal();
  }, []);
  const sources = [
    ["Transmisión de la misión", launch.links.webcast],
    ["Wikipedia", launch.links.wikipedia],
    ["Artículo", launch.links.article],
  ];
  return (
    <dialog
      ref={dialog}
      className="launch-dialog"
      aria-labelledby="mission-title"
      onClose={onClose}
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          const r = e.currentTarget.getBoundingClientRect();
          if (
            e.clientX < r.left ||
            e.clientX > r.right ||
            e.clientY < r.top ||
            e.clientY > r.bottom
          )
            dialog.current?.close();
        }
      }}
    >
      <div className="dialog-top">
        <span className="eyebrow">ARCHIVO DE MISIÓN</span>
        <button
          className="close-dialog"
          onClick={() => dialog.current?.close()}
          aria-label="Cerrar misión"
        >
          ×
        </button>
      </div>
      <h2 id="mission-title">{launch.name}</h2>
      <p className="mission-date">
        {missionDate(launch.date_utc)} · Fecha en UTC
      </p>
      <dl className="mission-facts">
        <div>
          <dt>Resultado</dt>
          <dd>{missionStatus(launch)}</dd>
        </div>
        <div>
          <dt>Número de vuelo</dt>
          <dd>{launch.flight_number || "No indicado"}</dd>
        </div>
      </dl>
      <h3>Contexto de la misión</h3>
      <p className="dialog-description">
        {launch.details ||
          "La API no incluye una descripción de esta misión. Consulta los enlaces disponibles para ampliar el contexto."}
      </p>
      {launch.success === null && (
        <p className="archive-note">
          Este registro no tiene un resultado confirmado en la fuente; su fecha
          no demuestra que la misión se haya completado.
        </p>
      )}
      <h3>Fuentes y enlaces</h3>
      <div className="mission-sources">
        {sources
          .filter(([, url]) => url?.startsWith("https://"))
          .map(([label, url]) => (
            <a
              key={label}
              href={url!}
              target="_blank"
              rel="noopener noreferrer"
            >
              {label} ↗
            </a>
          ))}
        {!sources.some(([, url]) => url?.startsWith("https://")) && (
          <p>La fuente no incluye enlaces adicionales.</p>
        )}
      </div>
    </dialog>
  );
}
