export interface Launch {
  id: string;
  name: string;
  date_utc: string;
  details: string | null;
  success: boolean | null;
  links: {
    webcast: string | null;
    wikipedia: string | null;
    patch: {
      small: string | null;
    };
  };
  rocket: string;
  launchpad: string;
}
