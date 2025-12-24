"use client";

import { motion } from "framer-motion";
import { Launch } from "@/types/spacex";

interface Props {
  launch: Launch;
  onClick: () => void;
}

export function LaunchCard({ launch, onClick }: Props) {
  const launchDate = new Date(launch.date_utc).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <motion.div
      layout
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className="cursor-pointer rounded-2xl bg-zinc-900 p-4 shadow-sm transition hover:bg-zinc-800"
    >
      <div className="flex items-start justify-between">
        <h3 className="text-lg font-semibold text-zinc-100">
          {launch.name}
        </h3>

        <span
          className={`rounded-full px-2 py-0.5 text-xs font-medium ${
            launch.success === true
              ? "bg-green-500/10 text-green-400"
              : launch.success === false
              ? "bg-red-500/10 text-red-400"
              : "bg-zinc-500/10 text-zinc-400"
          }`}
        >
          {launch.success === true
            ? "Success"
            : launch.success === false
            ? "Failure"
            : "Unknown"}
        </span>
      </div>

      <p className="mt-2 text-sm text-zinc-400">
        {launchDate}
      </p>

      <p className="mt-3 line-clamp-3 text-sm text-zinc-300">
        {launch.details || "No mission details available."}
      </p>
    </motion.div>
  );
}
