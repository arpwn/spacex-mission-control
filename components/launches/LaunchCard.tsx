"use client";
import { useLanguage } from "@/lib/locale";
import type { Launch } from "@/types/spacex";
import { missionDate, missionStatus } from "@/lib/launches";
export function LaunchCard({
  launch,
  onClick,
}: {
  launch: Launch;
  onClick: () => void;
}) {
  const { t, lang } = useLanguage();
  return (
    <article className="launch-card">
      <div className="mission-top">
        <span className="flight">
          {launch.flight_number
            ? t("VUELO {0}", [String(launch.flight_number).padStart(3, "0")])
            : t("MISIÓN DE REFERENCIA")}
        </span>
        <span
          className={`mission-badge ${launch.success === true ? "success" : launch.success === false ? "failure" : "unconfirmed"}`}
        >
          {t(missionStatus(launch))}
        </span>
      </div>
      <h3>{t(launch.name)}</h3>
      <p className="mission-date">
        {missionDate(launch.date_utc, lang)} {t("· UTC")}
      </p>
      {launch.details ? (
        <p className="mission-description">{t(launch.details)}</p>
      ) : (
        <p className="mission-description no-description">
          {launch.links.webcast || launch.links.wikipedia
            ? t(
                "Transmisión o contexto disponibles en las fuentes de la misión.",
              )
            : t(
                "Registro con fecha y resultado; la fuente no incluye una descripción.",
              )}
        </p>
      )}
      <button onClick={onClick} aria-label={t("Ver misión {0}", [launch.name])}>
        {t("Explorar misión")} <span>↗</span>
      </button>
    </article>
  );
}
