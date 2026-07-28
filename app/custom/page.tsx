"use client";

"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Check,
  ChevronRight,
  Upload,
  Palette,
  Ruler,
  Sparkles,
} from "lucide-react";

const products = [
  {
    name: "Plushie",
    icon: "🧸",
    description: "Cute handmade companions",
    price: 900,
  },
  {
    name: "Bag",
    icon: "👜",
    description: "Everyday crochet bags",
    price: 1200,
  },
  {
    name: "Blanket",
    icon: "🛏️",
    description: "Soft handmade blankets",
    price: 2500,
  },
  {
    name: "Beanie",
    icon: "🧢",
    description: "Warm custom beanies",
    price: 800,
  },
  {
    name: "Wearable",
    icon: "🧶",
    description: "Cardigans, tops & sweaters",
    price: 2200,
  },
  {
    name: "Keychain",
    icon: "🔑",
    description: "Cute mini accessories",
    price: 450,
  },
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
  { name: "Olive", hex: "#78866B" },
  { name: "Mustard", hex: "#D9A441" },
  { name: "Terracotta", hex: "#C96A4B" },
];

const steps = [
  "Product",
  "Colour",
  "Measurements",
  "Inspiration",
  "Contact",
  "Review",
];

export default function CustomPage() {
  const [selectedProduct, setSelectedProduct] = useState("");
const [selectedColour, setSelectedColour] = useState("#F5F1E8");

const [timeline, setTimeline] = useState("I'm flexible");
const [uploadedImages, setUploadedImages] = useState<File[]>([]);
const [notes, setNotes] = useState("");
const [budget, setBudget] = useState("");
const [quantity, setQuantity] = useState(1);

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


 const handleMeasurement = (
  e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
) => {
  const { name, value } = e.target;

  setMeasurements((prev) => ({
    ...prev,
    [name]: value,
  }));
};


const selectedProductData = products.find(
  (product) => product.name === selectedProduct
);

const estimatedPrice =
  (selectedProductData?.price ?? 0) * quantity;


const completedSteps = [
  selectedProduct,
  selectedColour,
  uploadedImages.length > 0,
  notes,
].filter(Boolean).length;

const progress = Math.round(
  (completedSteps / 4) * 100
);

const hasMeasurements = Object.values(measurements).some(
  (value) => value !== ""
);


const orderReady =
  selectedProduct &&
  uploadedImages.length > 0 &&
  notes;


  const charactersRemaining = 1000 - notes.length;


  const increaseQuantity = () => {
  setQuantity((prev) => prev + 1);
};

const decreaseQuantity = () => {
  if (quantity > 1) {
    setQuantity((prev) => prev - 1);
  }
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
  <div className="flex items-center justify-between">
    <div>
      <p className="text-[11px] uppercase tracking-[0.35em] text-neutral-400">
        Step 1
      </p>

      <h2 className="mt-2 text-3xl font-semibold">
        Choose Your Product
      </h2>
    </div>

    <Sparkles
      size={26}
      className="text-neutral-400"
    />
  </div>

  <p className="mt-5 max-w-2xl text-neutral-500">
    Every piece is handcrafted from scratch. Select the item you'd like us
    to create for you.
  </p>

  <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">

    {products.map((product) => {
      const active = selectedProduct === product.name;

      return (
        <button
          key={product.name}
          onClick={() => setSelectedProduct(product.name)}
          className={`group relative overflow-hidden rounded-3xl border bg-white p-7 text-left transition-all duration-500

          ${
            active
              ? "border-black shadow-xl ring-1 ring-black"
              : "border-neutral-200 hover:-translate-y-1 hover:border-black hover:shadow-xl"
          }`}
        >
          {/* Selected Badge */}

          {active && (
            <div className="absolute right-5 top-5">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-black text-white">
                <Check size={16} />
              </div>
            </div>
          )}

          {/* Icon */}

          <div className="text-5xl">
            {product.icon}
          </div>

          {/* Title */}

          <h3 className="mt-8 text-xl font-semibold">
            {product.name}
          </h3>

          {/* Description */}

          <p className="mt-3 leading-7 text-neutral-500">
            {product.description}
          </p>

          {/* Price */}

          <div className="mt-8">
            <p className="text-xs uppercase tracking-[0.25em] text-neutral-400">
              Starting From
            </p>

            <p className="mt-2 text-2xl font-semibold">
              ₹{product.price.toLocaleString()}
            </p>
          </div>

          {/* Bottom */}

          <div className="mt-10 flex items-center justify-between border-t pt-6">

            <span className="text-sm font-medium">
              {active ? "Selected" : "Select"}
            </span>

            <ChevronRight
              size={18}
              className={`transition-transform duration-300 ${
                active
                  ? "translate-x-1"
                  : "group-hover:translate-x-1"
              }`}
            />

          </div>
        </button>
      );
    })}

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