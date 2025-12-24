"use client";

import { useMemo, useState } from "react";
import { Launch } from "@/types/spacex";
import { LaunchCard } from "./LaunchCard";
import { LaunchDetailsModal } from "./LaunchDetailsModal";
import { AnimatePresence } from "framer-motion";

type StatusFilter = "all" | "success" | "failure";
type SortOrder = "newest" | "oldest";

interface Props {
  launches: Launch[];
}

export function LaunchList({ launches }: Props) {
  const [selectedLaunch, setSelectedLaunch] = useState<Launch | null>(null);
  const [status, setStatus] = useState<StatusFilter>("all");
  const [sortOrder, setSortOrder] = useState<SortOrder>("newest");

  const filteredLaunches = useMemo(() => {
    let result = [...launches];

    // Filter by status
    if (status !== "all") {
      result = result.filter((launch) =>
        status === "success"
          ? launch.success === true
          : launch.success === false
      );
    }

    // Sort by date
    result.sort((a, b) => {
      const dateA = new Date(a.date_utc).getTime();
      const dateB = new Date(b.date_utc).getTime();
      return sortOrder === "newest" ? dateB - dateA : dateA - dateB;
    });

    return result;
  }, [launches, status, sortOrder]);

  return (
    <>
      {/* Controls */}
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex gap-2">
          {(["all", "success", "failure"] as StatusFilter[]).map((value) => (
            <button
              key={value}
              onClick={() => setStatus(value)}
              className={`rounded-lg px-3 py-1 text-sm transition ${
                status === value
                  ? "bg-zinc-100 text-zinc-900"
                  : "bg-zinc-800 text-zinc-300 hover:bg-zinc-700"
              }`}
            >
              {value.charAt(0).toUpperCase() + value.slice(1)}
            </button>
          ))}
        </div>

        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value as SortOrder)}
          className="rounded-lg bg-zinc-800 px-3 py-1 text-sm text-zinc-100"
        >
          <option value="newest">Newest first</option>
          <option value="oldest">Oldest first</option>
        </select>
      </div>

      {/* Grid */}
      {filteredLaunches.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20 text-zinc-400">
          <p className="text-lg">No launches found 🚫</p>
          <p className="text-sm mt-1">Try adjusting your filters</p>
        </div>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filteredLaunches.map((launch) => (
            <LaunchCard
              key={launch.id}
              launch={launch}
              onClick={() => setSelectedLaunch(launch)}
            />
          ))}
        </div>
      )}

      {/* Modal */}
      <AnimatePresence>
        {selectedLaunch && (
          <LaunchDetailsModal
            launch={selectedLaunch}
            onClose={() => setSelectedLaunch(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
