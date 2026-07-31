"use client";

import { products } from "@/app/data/products";

import ProductGrid from "@/app/components/product/ProductGrid";
import Heading from "@/app/components/ui/Heading";
import Paragraph from "@/app/components/ui/Paragraph";

export default function ShopPage() {

	const bestSellers = products.filter(
		(product) => product.bestSeller
	);

	return (
		<main className="mx-auto max-w-7xl px-5 py-16 md:px-8 mt-4">
			{/* Header */}
			<div className="mb-8">
				<Heading className="mt-3">
					Bestseller
				</Heading>

				<Paragraph className="text-black">
				Explore every handcrafted crochet piece from the
				Variare collection.
				</Paragraph>
			</div>

			{/* Products */}
			<ProductGrid products={bestSellers} />
		</main>
	);
}