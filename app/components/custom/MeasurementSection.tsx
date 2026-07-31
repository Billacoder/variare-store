"use client";

import { Ruler } from "lucide-react";
import MeasurementInput from "./MeasurementInput";

type MeasurementSectionProps = {
  selectedProduct: string;
  measurements: Record<string, string>;
  handleMeasurement: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
};

export default function MeasurementSection({
  selectedProduct,
  measurements,
  handleMeasurement,
}: MeasurementSectionProps) {
  if (!selectedProduct) {
    return (
      <section className="space-y-6">
        <div>
          <div className="flex items-center gap-3">
            <Ruler size={24} className="text-neutral-400" />

            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">
                Step 2
              </p>

              <h2 className="mt-1 font-serif text-3xl">
                Measurements
              </h2>
            </div>
          </div>

          <p className="mt-4 text-neutral-600">
            Select a product first to enter your measurements.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="space-y-8">
      <div>
        <div className="flex items-center gap-3">
          <Ruler size={24} className="text-neutral-400" />

          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">
              Step 2
            </p>

            <h2 className="mt-1 font-serif text-3xl">
              Measurements
            </h2>
          </div>
        </div>

        <p className="mt-4 text-neutral-600">
          Enter your measurements in centimetres (cm).
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <MeasurementInput
          name="chest"
          placeholder="Chest (cm)"
          value={measurements.chest || ""}
          onChange={handleMeasurement}
        />

        <MeasurementInput
          name="waist"
          placeholder="Waist (cm)"
          value={measurements.waist || ""}
          onChange={handleMeasurement}
        />

        <MeasurementInput
          name="hips"
          placeholder="Hips (cm)"
          value={measurements.hips || ""}
          onChange={handleMeasurement}
        />

        <MeasurementInput
          name="length"
          placeholder="Length (cm)"
          value={measurements.length || ""}
          onChange={handleMeasurement}
        />
      </div>
    </section>
  );
}