import { getLaunches } from "@/lib/spacex";
import { LaunchList } from "@/components/launches/LaunchList";

export default async function HomePage() {
  const launches = await getLaunches();

  return (
    <section>
      <h2 className="text-2xl font-semibold mb-6">
        Launches
      </h2>

      <LaunchList launches={launches} />
    </section>
  );
}
