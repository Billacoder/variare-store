"use client";

import { useCart } from "@/app/context/CartContext";
import type { Product } from "@/app/data/products";

type Props = {
	product: Product;
	size?: string;
};

export default function AddToCartButton({
	product,
	size,
}: Props) {
	const { addToCart } = useCart();

	const price =
		typeof product.price === "number"
			? product.price
			: Number(String(product.price).replace(/[^0-9.]/g, ""));

	return (
		<button
			onClick={() =>
				addToCart({
					id: product.id,
					name: product.title,
					price,
					image: product.image,
					size,
				})
			}
			className="mt-10 self-start rounded-full border border-black px-6 py-3 text-xs font-medium uppercase tracking-[0.25em] transition-all duration-300 hover:bg-black hover:text-white"
		>
			Add to Cart
		</button>
	);
}