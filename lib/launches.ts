import type { Launch } from "../types/spacex.ts";
export type Filters = {
  query: string;
  status: string;
  year: string;
  sort: string;
};
export function filterLaunches(launches: Launch[], filters: Filters) {
  const query = filters.query.trim().toLocaleLowerCase();
  return launches
    .filter(
      (l) =>
        l.name.toLocaleLowerCase().includes(query) &&
        (filters.year === "all" ||
          String(new Date(l.date_utc).getUTCFullYear()) === filters.year) &&
        (filters.status === "all" ||
          (filters.status === "confirmed" && l.success !== null) ||
          (filters.status === "success" && l.success === true) ||
          (filters.status === "failure" && l.success === false) ||
          (filters.status === "unconfirmed" && l.success === null)),
    )
    .sort(
      (a, b) =>
        (Date.parse(a.date_utc) - Date.parse(b.date_utc)) *
        (filters.sort === "oldest" ? 1 : -1),
    );
}
export function missionStatus(launch: Launch) {
  return launch.success === true
    ? "Éxito"
    : launch.success === false
      ? "Fallo"
      : "Sin confirmar";
}
export function missionDate(date: string, lang: "es" | "en" = "es") {
  return new Date(date).toLocaleDateString(lang === "es" ? "es-MX" : "en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    timeZone: "UTC",
  });
}
