"use client";

import { FileText } from "lucide-react";

type NotesSectionProps = {
  notes: string;
  setNotes: React.Dispatch<React.SetStateAction<string>>;
};

export default function NotesSection({
  notes,
  setNotes,
}: NotesSectionProps) {
  return (
    <section className="space-y-8">
      <div>
        <div className="flex items-center gap-3">
          <FileText className="text-neutral-400" size={24} />

          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">
              Step 4
            </p>

            <h2 className="mt-1 font-serif text-3xl">
              Additional Details
            </h2>
          </div>
        </div>

        <p className="mt-4 max-w-2xl text-neutral-600">
          Tell us anything else you'd like us to know. Mention colours,
          patterns, preferred yarn, inspiration, names to embroider,
          special requests, or anything that will help us create your
          perfect piece.
        </p>
      </div>

      <textarea
        rows={6}
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
        placeholder="Example: I'd love this in cream with dark brown sleeves, slightly oversized, and inspired by the second reference photo..."
        className="w-full rounded-2xl border border-neutral-300 bg-white px-5 py-4 text-neutral-900 placeholder:text-neutral-400 outline-none transition focus:border-black focus:ring-2 focus:ring-black/5 resize-none"
      />
    </section>
  );
}