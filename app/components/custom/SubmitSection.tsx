"use client";

import { ArrowRight } from "lucide-react";

type SubmitSectionProps = {
  agreed: boolean;
};

export default function SubmitSection({
  agreed,
}: SubmitSectionProps) {
  return (
    <section className="border-t border-neutral-200 pt-12">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-xl">
          <h2 className="font-serif text-3xl">
            Ready to submit your request?
          </h2>

          <p className="mt-4 leading-7 text-neutral-600">
            Once submitted, we'll review your custom design, contact you to
            confirm the details, and provide a personalised quotation before
            any work begins.
          </p>
        </div>

        <button
          type="submit"
          disabled={!agreed}
          className="flex items-center justify-center gap-3 rounded-full bg-black px-10 py-4 text-white transition-all duration-300 hover:scale-[1.02] hover:bg-neutral-800 disabled:cursor-not-allowed disabled:bg-neutral-300 disabled:text-neutral-500"
        >
          Submit Request
          <ArrowRight size={18} />
        </button>
      </div>
    </section>
  );
}