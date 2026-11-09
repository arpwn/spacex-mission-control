import type { Launch } from "../types/spacex";
// Small, explicit reference selection. Dates and mission context are sourced from
// the linked NASA mission pages, checked 2026-11-08. This is not an API snapshot.
const missions = [
  {
    id: "reference-ixpe",
    name: "IXPE",
    date: "2021-12-09",
    details:
      "Observatorio espacial dedicado al estudio de la polarización de los rayos X de objetos del universo.",
    source: "https://science.nasa.gov/mission/ixpe/",
  },
  {
    id: "reference-dart",
    name: "DART",
    date: "2021-11-24",
    details:
      "Misión de defensa planetaria que probó la desviación de un asteroide mediante un impacto sobre Dimorphos.",
    source: "https://science.nasa.gov/mission/dart/",
  },
  {
    id: "reference-tess",
    name: "TESS",
    date: "2018-04-18",
    details:
      "Telescopio espacial que busca exoplanetas mediante la observación de cambios en el brillo de las estrellas.",
    source: "https://science.nasa.gov/mission/tess/",
  },
];
export const referenceLaunches: Launch[] = missions.map((m) => ({
  id: m.id,
  name: m.name,
  date_utc: m.date,
  details: m.details,
  success: true,
  links: {
    webcast: null,
    wikipedia: null,
    article: m.source,
    patch: { small: null },
  },
  rocket: "",
  launchpad: "",
}));
