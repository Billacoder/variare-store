"use client";

import { useState } from "react";

const products = [
  "Plushie",
  "Bag",
  "Blanket",
  "Beanie",
  "Wearable",
  "Keychain",
];

const popularColours = [
  { name: "Cream", hex: "#F5F1E8" },
  { name: "White", hex: "#FFFFFF" },
  { name: "Black", hex: "#1E1E1E" },
  { name: "Brown", hex: "#8B5E3C" },
  { name: "Pink", hex: "#F8BBD9" },
  { name: "Red", hex: "#D63A3A" },
  { name: "Blue", hex: "#6FA8DC" },
  { name: "Sage", hex: "#A8BBA3" },
  { name: "Lavender", hex: "#C7B5E8" },
];

export default function CustomPage() {
  const [selectedProduct, setSelectedProduct] = useState("");
  const [selectedColour, setSelectedColour] = useState("#F5F1E8");

  const [measurements, setMeasurements] = useState({
    bust: "",
    waist: "",
    hips: "",
    sleeve: "",
    length: "",
    head: "",
    fit: "",
    blanketWidth: "",
    blanketLength: "",
    strap: "",
    plushieHeight: "",
    accessories: "",
  });

  const handleMeasurement = (e) => {
    setMeasurements({
      ...measurements,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <main className="min-h-screen bg-stone-50 pt-32 pb-24">
      <div className="mx-auto max-w-5xl px-6">

        {/* Header */}

        <div className="mb-20 text-center">

          <p className="uppercase tracking-[0.35em] text-neutral-500">
            Custom Crochet
          </p>

          <h1 className="mt-4 font-serif text-5xl md:text-7xl">
            Design Your Piece
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-neutral-600">
            Every custom order is handmade with care. Tell us your vision and
            we'll create something that's uniquely yours.
          </p>

        </div>

        <div className="space-y-16 rounded-3xl bg-white p-8 shadow-sm md:p-14">

          {/* Product */}

          <section>

            <h2 className="mb-6 text-2xl font-semibold">
              1. Choose a Product
            </h2>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

              {products.map((product) => (
                <button
                  key={product}
                  onClick={() => setSelectedProduct(product)}
                  className={`rounded-2xl border p-6 transition ${
                    selectedProduct === product
                      ? "border-black bg-black text-white"
                      : "border-neutral-200 hover:border-black"
                  }`}
                >
                  {product}
                </button>
              ))}

            </div>

          </section>

          {/* Colour */}

          <section>

            <h2 className="mb-6 text-2xl font-semibold">
              2. Choose a Colour
            </h2>

            <p className="mb-6 text-neutral-500">
              Select one of our popular yarn colours or choose any colour you'd
              like.
            </p>

            <div className="flex flex-wrap gap-4">

              {popularColours.map((colour) => (
                <button
                  key={colour.name}
                  onClick={() => setSelectedColour(colour.hex)}
                  className={`flex items-center gap-3 rounded-full border px-4 py-2 transition ${
                    selectedColour === colour.hex
                      ? "border-black"
                      : "border-neutral-300"
                  }`}
                >
                  <span
                    className="h-6 w-6 rounded-full border"
                    style={{
                      backgroundColor: colour.hex,
                    }}
                  />

                  {colour.name}
                </button>
              ))}

            </div>

            <div className="mt-10 flex items-center gap-6">

              <input
                type="color"
                value={selectedColour}
                onChange={(e) => setSelectedColour(e.target.value)}
                className="h-16 w-16 cursor-pointer rounded-xl border"
              />

              <div>

                <p className="font-medium">
                  Custom Colour
                </p>

                <p className="text-neutral-500">
                  {selectedColour}
                </p>

              </div>

              <div
                className="h-14 w-14 rounded-full border"
                style={{
                  backgroundColor: selectedColour,
                }}
              />

            </div>

          </section>

          {/* Dynamic Measurements */}

          {selectedProduct === "Wearable" && (
            <section>

              <h2 className="mb-6 text-2xl font-semibold">
                3. Garment Measurements
              </h2>

              <div className="grid gap-5 md:grid-cols-2">

                <input
                  type="number"
                  name="bust"
                  placeholder="Bust (cm)"
                  value={measurements.bust}
                  onChange={handleMeasurement}
                  className="rounded-xl border p-4"
                />

                <input
                  type="number"
                  name="waist"
                  placeholder="Waist (cm)"
                  value={measurements.waist}
                  onChange={handleMeasurement}
                  className="rounded-xl border p-4"
                />

                <input
                  type="number"
                  name="hips"
                  placeholder="Hips (cm)"
                  value={measurements.hips}
                  onChange={handleMeasurement}
                  className="rounded-xl border p-4"
                />

                <input
                  type="number"
                  name="sleeve"
                  placeholder="Sleeve Length (cm)"
                  value={measurements.sleeve}
                  onChange={handleMeasurement}
                  className="rounded-xl border p-4"
                />

                <input
                  type="number"
                  name="length"
                  placeholder="Garment Length (cm)"
                  value={measurements.length}
                  onChange={handleMeasurement}
                  className="rounded-xl border p-4"
                />

              </div>

            </section>
          )}

          {selectedProduct === "Beanie" && (
            <section>

              <h2 className="mb-6 text-2xl font-semibold">
                3. Beanie Measurements
              </h2>

              <div className="grid gap-5 md:grid-cols-2">

                <input
                  type="number"
                  name="head"
                  placeholder="Head Circumference (cm)"
                  value={measurements.head}
                  onChange={handleMeasurement}
                  className="rounded-xl border p-4"
                />

                <select
                  name="fit"
                  value={measurements.fit}
                  onChange={handleMeasurement}
                  className="rounded-xl border p-4"
                >
                  <option value="">Preferred Fit</option>
                  <option>Snug</option>
                  <option>Regular</option>
                  <option>Oversized</option>
                </select>

              </div>

            </section>
          )}

          {selectedProduct === "Blanket" && (
            <section>

              <h2 className="mb-6 text-2xl font-semibold">
                3. Blanket Size
              </h2>

              <div className="grid gap-5 md:grid-cols-2">

                <input
                  type="number"
                  name="blanketWidth"
                  placeholder="Width (cm)"
                  value={measurements.blanketWidth}
                  onChange={handleMeasurement}
                  className="rounded-xl border p-4"
                />

                <input
                  type="number"
                  name="blanketLength"
                  placeholder="Length (cm)"
                  value={measurements.blanketLength}
                  onChange={handleMeasurement}
                  className="rounded-xl border p-4"
                />

              </div>

            </section>
          )}

          {selectedProduct === "Bag" && (
            <section>

              <h2 className="mb-6 text-2xl font-semibold">
                3. Bag Details
              </h2>

              <input
                type="number"
                name="strap"
                placeholder="Preferred Strap Length (cm)"
                value={measurements.strap}
                onChange={handleMeasurement}
                className="w-full rounded-xl border p-4"
              />

            </section>
          )}

          {selectedProduct === "Plushie" && (
            <section>

              <h2 className="mb-6 text-2xl font-semibold">
                3. Plushie Details
              </h2>

              <div className="grid gap-5">

                <input
                  type="number"
                  name="plushieHeight"
                  placeholder="Desired Height (cm)"
                  value={measurements.plushieHeight}
                  onChange={handleMeasurement}
                  className="rounded-xl border p-4"
                />

                <input
                  name="accessories"
                  placeholder="Accessories (hat, bow, glasses...)"
                  value={measurements.accessories}
                  onChange={handleMeasurement}
                  className="rounded-xl border p-4"
                />

              </div>

            </section>
          )}

          {selectedProduct === "Keychain" && (
            <section>

              <h2 className="text-2xl font-semibold">
                3. Keychain Details
              </h2>

              <p className="mt-4 text-neutral-500">
                Tell us the approximate size and any special requests in the
                notes section below.
              </p>

            </section>
          )}
                    {/* Upload Inspiration */}

          <section>

            <h2 className="mb-6 text-2xl font-semibold">
              4. Upload Inspiration
            </h2>

            <p className="mb-6 text-neutral-500">
              Upload photos, Pinterest screenshots, sketches or anything that
              helps us understand your vision.
            </p>

            <label className="flex h-60 cursor-pointer items-center justify-center rounded-3xl border-2 border-dashed border-neutral-300 bg-stone-100 transition hover:border-black hover:bg-stone-200">

              <div className="text-center">

                <div className="mb-4 text-5xl">
                  📷
                </div>

                <p className="text-lg font-medium">
                  Click to upload inspiration
                </p>

                <p className="mt-2 text-neutral-500">
                  JPG, PNG, WEBP • Multiple images allowed
                </p>

              </div>

              <input
                type="file"
                multiple
                accept="image/*"
                className="hidden"
              />

            </label>

          </section>

          {/* Additional Notes */}

          <section>

            <h2 className="mb-6 text-2xl font-semibold">
              5. Additional Notes
            </h2>

            <textarea
              rows={7}
              placeholder="Describe exactly what you'd like. Include colours, themes, names, favourite characters, sizing requests, or any other important details."
              className="w-full rounded-2xl border border-neutral-300 p-5 outline-none transition focus:border-black"
            />

          </section>

          {/* Contact */}

          <section>

            <h2 className="mb-6 text-2xl font-semibold">
              6. Contact Details
            </h2>

            <div className="grid gap-5 md:grid-cols-2">

              <input
                placeholder="Full Name"
                className="rounded-xl border border-neutral-300 p-4 outline-none transition focus:border-black"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="rounded-xl border border-neutral-300 p-4 outline-none transition focus:border-black"
              />

              <input
                placeholder="Phone Number"
                className="rounded-xl border border-neutral-300 p-4 outline-none transition focus:border-black"
              />

              <input
                placeholder="Instagram (Optional)"
                className="rounded-xl border border-neutral-300 p-4 outline-none transition focus:border-black"
              />

            </div>

          </section>

          {/* Timeline */}

          <section>

            <h2 className="mb-6 text-2xl font-semibold">
              7. When do you need it?
            </h2>

            <select className="w-full rounded-xl border border-neutral-300 p-4 outline-none transition focus:border-black">

              <option>I'm flexible</option>

              <option>Within 2 Weeks</option>

              <option>Within 1 Month</option>

              <option>Within 2 Months</option>

              <option>Gift (Specific Date)</option>

            </select>

          </section>

          {/* Agreement */}

          <section>

            <label className="flex items-start gap-4">

              <input
                type="checkbox"
                className="mt-1 h-5 w-5"
              />

              <span className="text-neutral-600 leading-7">
                I understand that every custom crochet piece is handmade and
                pricing may vary depending on the complexity, materials and
                time required.
              </span>

            </label>

          </section>

          {/* Submit */}

          <div className="pt-4">

            <button className="w-full rounded-full bg-black py-5 text-lg font-medium text-white transition hover:bg-neutral-800">

              Request Custom Quote

            </button>

            <p className="mt-5 text-center text-sm text-neutral-500">
              We'll review your request and get back to you with a personalised
              quote as soon as possible.
            </p>

          </div>

        </div>

      </div>

    </main>
  );
}