"use client";

import Image from "next/image";
import Link from "next/link";
import { products } from "@/app/data/products";
import { useCart } from "@/app/context/CartContext";
import { useWishlist } from "@/app/context/WishlistContext";
import { Heart } from "lucide-react";

export default function ShopPage() {
	const { addToCart } = useCart();
	const { addToWishlist } = useWishlist();

	return (
		<section className="mx-auto max-w-7xl px-6 py-12">
			<h1 className="mb-10 text-4xl font-semibold">Shop All</h1>

			<div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
				{products.map((product) => (
					<div key={product.slug}>
						<Link href={`/product/${product.slug}`} className="group block">
							<div className="overflow-hidden bg-neutral-100">
								<Image
									src={product.image}
									alt={product.title}
									width={400}
									height={400}
									className="h-72 w-full object-cover transition duration-500 group-hover:scale-105"
								/>
							</div>

							<h2 className="mt-4 text-lg font-medium">{product.title}</h2>

							<p className="text-neutral-500">{product.price}</p>
						</Link>

						<button
							onClick={() =>
								addToCart({
									id: product.id,
									name: product.title,
									price:
										typeof product.price === "number"
											? product.price
											: Number(String(product.price).replace(/[^0-9.]/g, "")),
									image: product.image,
								})
							}
							className="mt-4 w-full rounded-full bg-black py-3 text-sm font-medium text-white transition hover:bg-neutral-800"
						>
							Add to Cart
						</button>

						<button
							onClick={() =>
								addToWishlist({
									id: product.id,
									name: product.title,
									price:
										typeof product.price === "number"
											? product.price
											: Number(String(product.price).replace(/[^0-9.]/g, "")),
									image: product.image,
								})
							}
							className="flex w-12 h-12 items-center justify-center rounded-full border hover:bg-neutral-100 transition"
						>
							<Heart className="h-5 w-5" />
						</button>
					</div>
				))}
			</div>
		</section>
	);
}
