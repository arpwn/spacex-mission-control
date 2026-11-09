"use client";
import { useLanguage } from "@/lib/locale";
export default function Loading() {
  const { t } = useLanguage();
  return (
    <main className="container empty-state" role="status">
      <p className="eyebrow">{t("SPACEX MISSION CONTROL")}</p>
      <h1>{t("Conectando con el archivo…")}</h1>
      <p>{t("Cargando misiones y resultados.")}</p>
    </main>
  );
}
