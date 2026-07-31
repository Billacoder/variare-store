"use client";

import Button from "@/app/components/ui/Button";
import SectionLabel from "@/app/components/ui/SectionLabel";
import ProductCarousel from "@/app/components/product/ProductCarousel";
import ProductCard from "@/app/components/product/ProductCard";

import { products } from "@/app/data/products";

export default function ShopAll() {
  const featuredProducts = products.slice(0, 6);

  return (
    <section className="py-8 md:py-12">
      {/* Header */}
      <div className="mb-5 px-5 md:px-3">
        <SectionLabel>Shop all</SectionLabel>
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

      {/* CTA */}
      <div className="mt-8 flex justify-center px-5">
        <Button href="/shop" variant="outlineDark">
          Shop Now
        </Button>
      </div>
    </section>
  );
}