"use client";

import { useState } from "react";
import Link from "next/link";
import AddToCartButton from "../addToCart/AddToCartButton";
import type { Product } from "@/app/data/products";

type Props = {
  product: Product;
};

const options = {
  wearables: [
    {
      label: "XS",
      bust: "76–81 cm",
      waist: "58–63 cm",
      hips: "84–89 cm",
    },
    {
      label: "S",
      bust: "82–87 cm",
      waist: "64–69 cm",
      hips: "90–95 cm",
    },
    {
      label: "M",
      bust: "88–93 cm",
      waist: "70–75 cm",
      hips: "96–101 cm",
    },
    {
      label: "L",
      bust: "94–99 cm",
      waist: "76–81 cm",
      hips: "102–107 cm",
    },
    {
      label: "XL",
      bust: "100–105 cm",
      waist: "82–87 cm",
      hips: "108–113 cm",
    },
  ],

  beanies: [
    { label: "Child" },
    { label: "Teen" },
    { label: "Adult" },
  ],

  blankets: [
    { label: "Baby Blanket" },
    { label: "Throw Blanket" },
    { label: "Twin" },
    { label: "Queen" },
  ],

  "little-knits": [
    { label: "Newborn" },
    { label: "0–3 Months" },
    { label: "3–6 Months" },
    { label: "6–12 Months" },
    { label: "1–2 Years" },
    { label: "2–4 Years" },
  ],
} as const;

export default function ProductConfigurator({ product }: Props) {
  const [size, setSize] = useState("");

  const sizes =
    options[product.collection as keyof typeof options] ?? [];

  const selectedSize = sizes.find((item) => item.label === size);

  return (
    <div className="mt-10 w-full">
      <h3 className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-neutral-500">
        Select Size
      </h3>

      <div className="flex flex-wrap gap-3">
        {sizes.map((item) => (
          <button
            key={item.label}
            type="button"
            onClick={() => setSize(item.label)}
            className={`rounded-full border px-6 py-3 text-sm transition-all duration-300 ${
              size === item.label
                ? "border-black bg-black text-white"
                : "border-neutral-300 hover:border-black"
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>

      {!size && (
        <p className="mt-4 text-sm text-neutral-500">
          Please select a size to continue.
        </p>
      )}

      {selectedSize && "bust" in selectedSize && (
        <div className="mt-6 rounded-2xl border border-neutral-200 bg-neutral-50 p-6">
          <h4 className="font-medium">
            Size {selectedSize.label} Measurements
          </h4>

          <div className="mt-5 grid grid-cols-3 gap-4">
            <div>
              <p className="text-xs uppercase tracking-widest text-neutral-500">
                Bust
              </p>
              <p className="mt-1 font-medium">{selectedSize.bust}</p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-widest text-neutral-500">
                Waist
              </p>
              <p className="mt-1 font-medium">{selectedSize.waist}</p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-widest text-neutral-500">
                Hips
              </p>
              <p className="mt-1 font-medium">{selectedSize.hips}</p>
            </div>
          </div>

          <div className="mt-6 border-t pt-6">
            <h5 className="font-medium">How to Measure</h5>

            <ul className="mt-3 space-y-2 text-sm text-neutral-600">
              <li>• Bust: Around the fullest part of your chest.</li>
              <li>• Waist: Around the narrowest part of your waist.</li>
              <li>• Hips: Around the fullest part of your hips.</li>
              <li>• If you're between sizes, choose the larger size.</li>
            </ul>
          </div>

          <div className="mt-6 rounded-xl bg-white p-4">
            <p className="text-sm text-neutral-600">
              Don't fit within these measurements?
            </p>

            <Link
              href="/custom"
              className="mt-2 inline-flex font-medium underline underline-offset-4"
            >
              Request a Custom Size →
            </Link>

            <p className="mt-2 text-xs text-neutral-500">
              We'll create your crochet piece using your exact measurements.
            </p>
          </div>
        </div>
      )}

      <div className="mt-8">
        <AddToCartButton
          product={product}
          size={size}
          disabled={!!sizes.length && !size}
        />
      </div>
    </div>
  );
}