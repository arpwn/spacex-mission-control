import type { Launch } from "../types/spacex";
import { referenceLaunches } from "./reference-launches";
function isLaunch(value: unknown): value is Launch {
  if (!value || typeof value !== "object") return false;
  const l = value as Launch;
  return (
    typeof l.id === "string" &&
    typeof l.name === "string" &&
    typeof l.date_utc === "string" &&
    Number.isFinite(Date.parse(l.date_utc)) &&
    (l.success === true || l.success === false || l.success === null) &&
    (typeof l.details === "string" || l.details === null) &&
    !!l.links &&
    (typeof l.links.webcast === "string" || l.links.webcast === null) &&
    (typeof l.links.wikipedia === "string" || l.links.wikipedia === null)
  );
}
export async function getLaunches(): Promise<{
  launches: Launch[];
  source: "api" | "reference";
}> {
  try {
    const response = await fetch("https://api.spacexdata.com/v5/launches", {
      signal: AbortSignal.timeout(4000),
      next: { revalidate: 3600 },
    });
    if (!response.ok) throw new Error("Source unavailable");
    const data: unknown = await response.json();
    if (!Array.isArray(data) || !data.length || !data.every(isLaunch))
      throw new Error("Unexpected data");
    return { launches: data, source: "api" };
  } catch {
    return { launches: referenceLaunches, source: "reference" };
  }
}
