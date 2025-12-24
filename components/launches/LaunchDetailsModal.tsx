"use client";

import { Launch } from "@/types/spacex";
import { motion } from "framer-motion";

interface Props {
  launch: Launch;
  onClose: () => void;
}

export function LaunchDetailsModal({ launch, onClose }: Props) {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="w-full max-w-2xl rounded-xl bg-zinc-900 p-6 text-zinc-100"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex justify-between items-start">
          <h2 className="text-xl font-semibold">{launch.name}</h2>
          <button
            onClick={onClose}
            className="text-zinc-400 hover:text-white"
          >
            ✕
          </button>
        </div>

        {/* Meta */}
        <p className="text-sm text-zinc-400 mt-1">
          {new Date(launch.date_utc).toDateString()}
        </p>

        {/* Status */}
        {launch.success !== null && (
          <span
            className={`inline-block mt-3 text-xs px-2 py-1 rounded ${
              launch.success
                ? "bg-green-500/20 text-green-400"
                : "bg-red-500/20 text-red-400"
            }`}
          >
            {launch.success ? "Mission Success" : "Mission Failed"}
          </span>
        )}

        {/* Description */}
        {launch.details && (
          <p className="mt-4 text-sm text-zinc-300">
            {launch.details}
          </p>
        )}

        {/* Video */}
        {launch.links.webcast && (
          <div className="mt-6 aspect-video">
            <iframe
              className="w-full h-full rounded"
              src={launch.links.webcast.replace("watch?v=", "embed/")}
              allowFullScreen
            />
          </div>
        )}

        {/* Links */}
        <div className="mt-4 flex gap-4 text-sm">
          {launch.links.wikipedia && (
            <a
              href={launch.links.wikipedia}
              target="_blank"
              className="text-blue-400 hover:underline"
            >
              Wikipedia
            </a>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}
