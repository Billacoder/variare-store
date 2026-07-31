"use client";

import { products } from "@/app/data/products";

import ProductGrid from "@/app/components/product/ProductGrid";
import ShopHeader from "@/app/components/product/ShopHeader";

export default function ShopPage() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-16 md:px-8">
      <ShopHeader />

      <ProductGrid
        products={products}
      />
    </section>
  );
}