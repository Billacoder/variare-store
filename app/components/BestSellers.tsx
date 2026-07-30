"use client";

import SectionLabel from "@/app/components/ui/SectionLabel";
import Button from "@/app/components/ui/Button";
import ProductCarousel from "@/app/components/product/ProductCarousel";
import ProductCard from "@/app/components/product/ProductCard";

import { products } from "@/app/data/products";

export default function BestSellers() {
  const bestSellers = products.filter((product) => product.bestSeller);

  return (
    <section className="bg-stone-50 py-8 md:py-12">
      
      <div className="mb-5 px-5 md:px-3">
        <SectionLabel>Best Sellers</SectionLabel>
      </div>

      <ProductCarousel>
        {bestSellers.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ProductCarousel>

      <div className="mt-8 flex w-full justify-center">
        <Button href="/best-sellers" variant="outlineDark">
          View All Collection
        </Button>
      </div>
    </section>
  );
}