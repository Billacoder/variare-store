"use client";

import { Sparkles } from "lucide-react";

import StepHeader from "./StepHeader";
import ProductOption from "./ProductOption";

type Product = {
  id: number;
  name: string;
  title: string;
  icon: string;
  description: string;
  price: number;
};

interface ProductSelectorProps {
  products: Product[];
  selectedProduct: string;
 setSelectedProduct: (product: string) => void;
}

export default function ProductSelector({
  products,
  selectedProduct,
  setSelectedProduct,
}: ProductSelectorProps) {
  return (
    <section className="space-y-10">
      <StepHeader
        step="Step 1"
        title="Choose Your Product"
        description="Select the handcrafted piece you'd like us to create. Every order is made individually and tailored to your preferences."
        icon={<Sparkles className="text-neutral-400" size={26} />}
      />

      {products.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-neutral-300 py-16 text-center text-neutral-500">
          No products available.
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
         {products.map((product) => (
            <ProductOption
              key={product.id}
              product={product}
              active={selectedProduct === product.title}
              onClick={() => setSelectedProduct(product.title)}
            />
          ))}
        </div>
      )}
    </section>
  );
}