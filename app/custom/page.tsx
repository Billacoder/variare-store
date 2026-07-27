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

const colours = [
  "Cream",
  "White",
  "Black",
  "Brown",
  "Pink",
  "Red",
  "Blue",
  "Sage",
  "Lavender",
];

const sizes = ["Small", "Medium", "Large"];

export default function CustomPage() {
  const [selectedProduct, setSelectedProduct] = useState("");
  const [selectedColour, setSelectedColour] = useState("");
  const [selectedSize, setSelectedSize] = useState("");

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
            Every custom order is handmade with care. Tell us your
            vision and we'll create something that's uniquely yours.
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

          {/* Colours */}

          <section>

            <h2 className="mb-6 text-2xl font-semibold">
              2. Choose a Colour
            </h2>

            <div className="flex flex-wrap gap-3">

              {colours.map((colour) => (
                <button
                  key={colour}
                  onClick={() => setSelectedColour(colour)}
                  className={`rounded-full border px-6 py-3 transition ${
                    selectedColour === colour
                      ? "border-black bg-black text-white"
                      : "border-neutral-300 hover:border-black"
                  }`}
                >
                  {colour}
                </button>
              ))}

            </div>

          </section>

          {/* Size */}

          <section>

            <h2 className="mb-6 text-2xl font-semibold">
              3. Select Size
            </h2>

            <div className="flex flex-wrap gap-4">

              {sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`rounded-xl border px-8 py-4 transition ${
                    selectedSize === size
                      ? "border-black bg-black text-white"
                      : "border-neutral-300 hover:border-black"
                  }`}
                >
                  {size}
                </button>
              ))}

            </div>

          </section>

          {/* Inspiration */}

          <section>

            <h2 className="mb-6 text-2xl font-semibold">
              4. Upload Inspiration
            </h2>

            <label className="flex h-56 cursor-pointer items-center justify-center rounded-3xl border-2 border-dashed border-neutral-300 bg-stone-100 transition hover:border-black">

              <div className="text-center">

                <p className="text-lg font-medium">
                  Click to upload photos
                </p>

                <p className="mt-2 text-neutral-500">
                  Pinterest, sketches, pets, colours...
                </p>

              </div>

              <input
                type="file"
                multiple
                className="hidden"
              />

            </label>

          </section>

          {/* Notes */}

          <section>

            <h2 className="mb-6 text-2xl font-semibold">
              5. Additional Notes
            </h2>

            <textarea
              rows={6}
              placeholder="Tell us exactly how you'd like your crochet piece to look..."
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
                className="rounded-xl border border-neutral-300 p-4 outline-none focus:border-black"
              />

              <input
                placeholder="Email"
                className="rounded-xl border border-neutral-300 p-4 outline-none focus:border-black"
              />

              <input
                placeholder="Phone Number"
                className="rounded-xl border border-neutral-300 p-4 outline-none focus:border-black"
              />

              <input
                placeholder="Instagram (optional)"
                className="rounded-xl border border-neutral-300 p-4 outline-none focus:border-black"
              />

            </div>

          </section>

          {/* Submit */}

          <div className="pt-6">

            <button className="w-full rounded-full bg-black py-5 text-lg text-white transition hover:bg-neutral-800">
              Request Custom Quote
            </button>

          </div>

        </div>
      </div>
    </main>
  );
}