"use client";

import { Clock3 } from "lucide-react";

type TimelineSelectProps = {
  timeline: string;
  setTimeline: React.Dispatch<React.SetStateAction<string>>;
};

const timelines = [
  {
    value: "No Rush",
    title: "No Rush",
    description: "Whenever it's ready",
  },
  {
    value: "2-4 Weeks",
    title: "2–4 Weeks",
    description: "Standard handmade production",
  },
  {
    value: "1-2 Weeks",
    title: "1–2 Weeks",
    description: "Priority order (subject to availability)",
  },
];

export default function TimelineSelect({
  timeline,
  setTimeline,
}: TimelineSelectProps) {
  return (
    <section className="space-y-8">
      <div>
        <div className="flex items-center gap-3">
          <Clock3
            size={24}
            className="text-neutral-400"
          />

          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">
              Step 6
            </p>

            <h2 className="mt-1 font-serif text-3xl">
              Preferred Timeline
            </h2>
          </div>
        </div>

        <p className="mt-4 max-w-2xl text-neutral-600">
          Let us know when you'd ideally like your custom piece completed.
          Handmade items take time, and we'll always confirm the expected
          delivery date before beginning your order.
        </p>
      </div>

      <div className="grid gap-4">
        {timelines.map((option) => (
          <button
            key={option.value}
            type="button"
            onClick={() => setTimeline(option.value)}
            className={`rounded-2xl border p-6 text-left transition-all ${
              timeline === option.value
                ? "border-black bg-black text-white"
                : "border-neutral-300 bg-white hover:border-black"
            }`}
          >
            <h3 className="font-medium text-lg">
              {option.title}
            </h3>

            <p
              className={`mt-2 text-sm ${
                timeline === option.value
                  ? "text-neutral-300"
                  : "text-neutral-500"
              }`}
            >
              {option.description}
            </p>
          </button>
        ))}
      </div>
    </section>
  );
}