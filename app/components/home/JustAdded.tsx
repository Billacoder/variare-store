"use client";

import SectionLabel from "@/app/components/ui/SectionLabel";
import Button from "@/app/components/ui/Button";
import ProductCarousel from "@/app/components/product/ProductCarousel";
import ProductCard from "@/app/components/product/ProductCard";

import { products } from "@/app/data/products";

export default function JustAdded() {
  const featuredProducts = products
  .filter((product) => product.newArrival)
  .slice(0, 6);

  return (
    <section className="py-8 md:py-12">
      {/* Header */}
      <div className="mb-5 px-5 md:px-3">
        <SectionLabel>New Arrivals</SectionLabel>
      </div>

      {/* Carousel */}
      <ProductCarousel>
        {featuredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </ProductCarousel>
    </section>
  );
}