import { Launch } from "@/types/spacex";

const BASE_URL = "https://api.spacexdata.com/v5";

export async function getLaunches(): Promise<Launch[]> {
  const res = await fetch(`${BASE_URL}/launches`, {
    next: { revalidate: 3600 } // cache inteligente
  });

  if (!res.ok) {
    throw new Error("Failed to fetch launches");
  }

  return res.json();
}
