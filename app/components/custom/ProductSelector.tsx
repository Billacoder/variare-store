"use client";

import { Sparkles } from "lucide-react";

import StepHeader from "./StepHeader";
import ProductOption from "./ProductOption";

type Product = {
  name: string;
  icon: string;
  description: string;
  price: number;
};

type ProductSelectorProps = {
  products: Product[];
  selectedProduct: string;
  setSelectedProduct: (product: string) => void;
};

export default function ProductSelector({
  products,
  selectedProduct,
  setSelectedProduct,
}: ProductSelectorProps) {
  return (
    <section>
      <StepHeader
        step="Step 1"
        title="Choose Your Product"
        description="Every piece is handcrafted from scratch. Select the item you'd like us to create for you."
        icon={<Sparkles size={26} className="text-neutral-400" />}
      />

      <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {products.map((product) => (
          <ProductOption
            key={product.name}
            product={product}
            active={selectedProduct === product.name}
            onClick={() => setSelectedProduct(product.name)}
          />
        ))}
      </div>
    </section>
  );
}