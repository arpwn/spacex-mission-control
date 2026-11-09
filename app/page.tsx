import { getLaunches } from "@/lib/spacex";
import { LaunchExplorer } from "@/components/LaunchExplorer";
export const dynamic = "force-dynamic";
export default async function HomePage() {
  const { launches, source } = await getLaunches();
  return <LaunchExplorer launches={launches} source={source} />;
}
