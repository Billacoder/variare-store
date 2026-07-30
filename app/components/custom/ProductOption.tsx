"use client";

import { Check, ChevronRight } from "lucide-react";

type Product = {
  name: string;
  icon: string;
  description: string;
  price: number;
};

type ProductOptionProps = {
  product: Product;
  active: boolean;
  onClick: () => void;
};

export default function ProductOption({
  product,
  active,
  onClick,
}: ProductOptionProps) {
  return (
    <button
      onClick={onClick}
      className={`group relative overflow-hidden rounded-3xl border bg-white p-7 text-left transition-all duration-500 ${
        active
          ? "border-black shadow-xl ring-1 ring-black"
          : "border-neutral-200 hover:-translate-y-1 hover:border-black hover:shadow-xl"
      }`}
    >
      {active && (
        <div className="absolute right-5 top-5">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-black text-white">
            <Check size={16} />
          </div>
        </div>
      )}

      <div className="text-5xl">
        {product.icon}
      </div>

      <h3 className="mt-8 text-xl font-semibold">
        {product.name}
      </h3>

      <p className="mt-3 leading-7 text-neutral-500">
        {product.description}
      </p>

      <div className="mt-8">
        <p className="text-xs uppercase tracking-[0.25em] text-neutral-400">
          Starting From
        </p>

        <p className="mt-2 text-2xl font-semibold">
          ₹{product.price.toLocaleString()}
        </p>
      </div>

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
}