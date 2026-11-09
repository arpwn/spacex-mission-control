export interface Launch {
  id: string;
  flight_number?: number;
  name: string;
  date_utc: string;
  details: string | null;
  success: boolean | null;
  links: {
    webcast: string | null;
    wikipedia: string | null;
    article?: string | null;
    patch: {
      small: string | null;
    };
  };
  rocket: string;
  launchpad: string;
}
