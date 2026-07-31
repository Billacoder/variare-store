"use client";

import SectionLabel from "@/app/components/ui/SectionLabel";
import Button from "@/app/components/ui/Button";
import ProductCarousel from "@/app/components/product/ProductCarousel";
import ProductCard from "@/app/components/product/ProductCard";

import { products } from "@/app/data/products";

export default function BestSellers() {
  const bestSellers = products
  .filter((product) => product.bestSeller);
  

  return (
    <section className="py-8 md:py-12">
      {/* Header */}
      <div className="mb-5 px-5 md:px-3">
        <SectionLabel>Best Sellers</SectionLabel>
      </div>

      {/* Carousel */}
      <ProductCarousel>
        {bestSellers.map((product) => (
          <ProductCard 
            key={product.id} 
            product={product}
            />
        ))}
      </ProductCarousel>

      {/* CTA */}
      <div className="mt-8 flex justify-center px-5">
        <Button href="/best-sellers" variant="outlineDark">
          Explore Best Sellers
        </Button>
      </div>
    </section>
  );
}