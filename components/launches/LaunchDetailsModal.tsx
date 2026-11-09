"use client";
import { useLanguage } from "@/lib/locale";
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
  const { t, lang } = useLanguage();
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
        <span className="eyebrow">{t("ARCHIVO DE MISIÓN")}</span>
        <button
          className="close-dialog"
          onClick={() => dialog.current?.close()}
          aria-label={t("Cerrar misión")}
        >
          {t("×")}{" "}
        </button>
      </div>
      <h2 id="mission-title">{t(launch.name)}</h2>
      <p className="mission-date">
        {missionDate(launch.date_utc, lang)}
        {t("· Fecha en UTC")}{" "}
      </p>
      <dl className="mission-facts">
        <div>
          <dt>{t("Resultado")}</dt>
          <dd>{t(missionStatus(launch))}</dd>
        </div>
        <div>
          <dt>{t("Número de vuelo")}</dt>
          <dd>{launch.flight_number || t("No indicado")}</dd>
        </div>
      </dl>
      <h3>{t("Contexto de la misión")}</h3>
      <p className="dialog-description">
        {t(
          launch.details ||
            "La API no incluye una descripción de esta misión. Consulta los enlaces disponibles para ampliar el contexto.",
        )}
      </p>
      {launch.success === null && (
        <p className="archive-note">
          {t(
            "Este registro no tiene un resultado confirmado en la fuente; su fecha no demuestra que la misión se haya completado.",
          )}{" "}
        </p>
      )}
      <h3>{t("Fuentes y enlaces")}</h3>
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
              {t(label)} ↗
            </a>
          ))}
        {!sources.some(([, url]) => url?.startsWith("https://")) && (
          <p>{t("La fuente no incluye enlaces adicionales.")}</p>
        )}
      </div>
    </dialog>
  );
}
