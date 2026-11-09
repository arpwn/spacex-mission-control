export type Language = "es" | "en";
export const translations: Record<Language, Record<string, string>> = {
  en: {
    "ARCHIVO DE MISIÓN": "MISSION RECORD",
    "Archivo de lanzamientos": "Launch archive",
    "Archivo de una API comunitaria de SpaceX. Los registros reflejan la cobertura de esa fuente; este panel no ofrece seguimiento en tiempo real.":
      "Archive from a community SpaceX API. Records reflect that source’s coverage; this dashboard does not provide live tracking.",
    Año: "Year",
    "Buscar misión": "Search missions",
    "Cada lanzamiento": "Every launch",
    "Cargando misiones y resultados.": "Loading missions and outcomes.",
    "Cerrar misión": "Close mission",
    "Cobertura de esta selección": "Coverage of this selection",
    "Conectando con el archivo…": "Connecting to the archive…",
    "Contexto de la misión": "Mission context",
    "Código ↗": "Source code ↗",
    "EXPLORADOR / ARCHIVO HISTÓRICO": "EXPLORER / HISTORICAL ARCHIVE",
    "Ej. Crew, Starlink, Falcon…": "E.g. Crew, Starlink, Falcon…",
    "El archivo no está disponible.": "The archive is unavailable.",
    Estado: "Status",
    "Estado de {0}": "Status of {0}",
    "Este registro no tiene un resultado confirmado en la fuente; su fecha no demuestra que la misión se haya completado.":
      "This record has no confirmed outcome in the source; its date does not establish that the mission was completed.",
    "Explora misiones, resultados y las fuentes detrás de cada vuelo.":
      "Explore missions, outcomes, and the sources behind each flight.",
    "Explorar misión": "Explore mission",
    "Filtros del archivo": "Archive filters",
    "Fuentes y enlaces": "Sources and links",
    "La API no respondió. Se muestra una selección de 3 misiones históricas con fuentes de NASA, no el archivo completo. Los filtros se aplican a esta selección.":
      "The API did not respond. A reference selection of 3 historical missions with NASA sources is shown instead of the full archive. Filters apply to this selection.",
    "La fuente no incluye enlaces adicionales.":
      "The source includes no additional links.",
    "MISIÓN DE REFERENCIA": "REFERENCE MISSION",
    "Más antiguos": "Oldest first",
    "Más recientes": "Newest first",
    "No encontramos esa misión.": "We could not find that mission.",
    "No pudimos consultar la fuente de lanzamientos. Puedes intentarlo de nuevo.":
      "We could not reach the launch data source. You can try again.",
    "Número de vuelo": "Flight number",
    Orden: "Sort order",
    "Paginación de lanzamientos": "Launch pagination",
    "Proyecto personal · React + TypeScript + Next.js":
      "Personal project · React + TypeScript + Next.js",
    "Prueba otro nombre, año o resultado.":
      "Try a different name, year, or outcome.",
    "Registro con fecha y resultado; la fuente no incluye una descripción.":
      "A dated record with an outcome; the source includes no description.",
    "Registros sin confirmar": "Unconfirmed records",
    "Reintentar consulta": "Try again",
    "Restablecer filtros": "Reset filters",
    Resultado: "Outcome",
    "Resultados documentados": "Documented outcomes",
    "Siguiente →": "Next →",
    "Sobre la API ↗": "About the API ↗",
    "Todos los años": "All years",
    "Transmisión o contexto disponibles en las fuentes de la misión.":
      "A webcast or additional context is available in the mission sources.",
    "VUELO {0}": "FLIGHT {0}",
    "Ver misión {0}": "View mission {0}",
    "cuenta una historia.": "tells a story.",
    de: "of",
    resultado: "result",
    resultados: "results",
    "· Fecha en UTC": "· Date in UTC",
    "· Página": "· Page",
    Área: "Department",
    "← Anterior": "← Previous",
    "Con resultado": "With outcome",
    Todos: "All",
    Éxito: "Success",
    Fallo: "Failure",
    "Sin confirmar": "Unconfirmed",
    "Transmisión de la misión": "Mission webcast",
    Artículo: "Article",
    "No indicado": "Not provided",
    "Observatorio espacial dedicado al estudio de la polarización de los rayos X de objetos del universo.":
      "Space observatory studying X-ray polarization from objects in the universe.",
    "Misión de defensa planetaria que probó la desviación de un asteroide mediante un impacto sobre Dimorphos.":
      "Planetary defense mission that tested asteroid deflection by impacting Dimorphos.",
    "Telescopio espacial que busca exoplanetas mediante la observación de cambios en el brillo de las estrellas.":
      "Space telescope searching for exoplanets by observing changes in stellar brightness.",
    "La API no incluye una descripción de esta misión. Consulta los enlaces disponibles para ampliar el contexto.":
      "The API includes no description for this mission. Follow the available links for more context.",
    "SPACEX MISSION CONTROL": "SPACEX MISSION CONTROL",
    "SpaceX Mission Control": "SpaceX Mission Control",
    "· UTC": "· UTC",
    "×": "×",
  },
  es: {},
};
export function translate(
  value: string | number | null | undefined,
  lang: Language,
  parameters: (string | number)[] = [],
): string {
  const key = String(value ?? "");

  const text = translations[lang][key] ?? key;
  return text.replace(/\{(\d+)\}/g, (token, index) =>
    parameters[Number(index)] === undefined
      ? token
      : String(parameters[Number(index)]),
  );
}
