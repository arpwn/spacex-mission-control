"use client";
import { useLanguage } from "@/lib/locale";
export default function ErrorPage({ reset }: { reset: () => void }) {
  const { t } = useLanguage();
  return (
    <main className="container empty-state">
      <p className="eyebrow">{t("SPACEX MISSION CONTROL")}</p>
      <h1>{t("El archivo no está disponible.")}</h1>
      <p>
        {t(
          "No pudimos consultar la fuente de lanzamientos. Puedes intentarlo de nuevo.",
        )}{" "}
      </p>
      <button onClick={reset}>{t("Reintentar consulta")}</button>
    </main>
  );
}
