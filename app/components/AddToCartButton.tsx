"use client";

import { useCart } from "@/app/context/CartContext";
import type { Product } from "@/app/data/products";

type Props = {
	product: Product;
};

export default function AddToCartButton({ product }: Props) {
	const { addToCart } = useCart();

	return (
		<button
			onClick={() =>
				addToCart({
					id: product.id,
					name: product.title,
					price: product.price,
					image: product.image,
				})
			}
			className="mt-10 self-start rounded-full border border-black px-6 py-3 text-xs font-medium uppercase tracking-[0.25em] transition-all duration-300 hover:bg-black hover:text-white"
		>
			Add to Cart
		</button>
	);
}
