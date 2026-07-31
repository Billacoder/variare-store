"use client";

import { useState } from "react";
import Link from "next/link";

import { useCart } from "@/app/context/CartContext";
import type { Product } from "@/app/data/products";

type Props = {
  product: Product;
  size?: string;
};

const collectionsWithSizes = [
  "wearables",
  "beanies",
  "blankets",
  "little-knits",
];

export default function AddToCartButton({
  product,
  size,
}: Props) {
  const { addToCart } = useCart();

  const [added, setAdded] = useState(false);
  const [showSizeError, setShowSizeError] = useState(false);

  const price =
    typeof product.price === "number"
      ? product.price
      : Number(String(product.price).replace(/[^0-9.]/g, ""));

  const requiresSize = collectionsWithSizes.includes(product.collection);

  function handleAddToCart() {
    if (requiresSize && !size) {
      setShowSizeError(true);
      return;
    }

    setShowSizeError(false);

    addToCart({
      id: product.id,
      name: product.title,
      price,
      image: product.image,
      size,
    });

    setAdded(true);
  }

  return (
    <div className="mt-10">
      <button
        onClick={handleAddToCart}
        className="rounded-full border border-black px-6 py-3 text-xs font-medium uppercase tracking-[0.25em] transition-all duration-300 hover:bg-black hover:text-white"
      >
        Add to Cart
      </button>

      {showSizeError && (
        <p className="mt-4 text-sm text-red-500">
          Please select a size before adding this item.
        </p>
      )}

      {added && (
        <div className="mt-6 rounded-2xl border border-green-200 bg-green-50 p-5">
          <p className="text-sm font-medium text-green-700">
            ✓ Added to your cart.
          </p>

          <Link
            href="/cart"
            className="mt-4 inline-flex rounded-full bg-black px-6 py-3 text-xs font-medium uppercase tracking-[0.25em] text-white transition hover:bg-neutral-800"
          >
            Go to Cart
          </Link>
        </div>
      )}
    </div>
  );
}