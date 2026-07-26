"use client";

import Image from "next/image";
import Link from "next/link";
import { useWishlist } from "@/app/context/WishlistContext";
import { useCart } from "@/app/context/CartContext";

export default function WishlistPage() {
	const { wishlist, removeFromWishlist } = useWishlist();
	const { addToCart } = useCart();

	if (wishlist.length === 0) {
		return (
			<main className="mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 pt-32 pb-20">
				<h1 className="text-5xl font-light tracking-tight">Wishlist</h1>

				<p className="mt-6 max-w-md text-center leading-8 text-neutral-500">
					Save your favorite crochet pieces here so you can easily find them
					later.
				</p>

				<Link
					href="/shop"
					className="mt-10 rounded-full border border-black px-8 py-3 text-sm uppercase tracking-[0.25em] transition hover:bg-black hover:text-white"
				>
					Browse Shop
				</Link>
			</main>
		);
	}

	return (
		<main className="mx-auto max-w-7xl px-6 pt-32 pb-20">
			<h1 className="mb-12 text-5xl font-light tracking-tight">Wishlist</h1>

			<div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
				{wishlist.map((item) => (
					<div
						key={item.id}
						className="overflow-hidden rounded-xl border bg-white"
					>
						<Image
							src={item.image}
							alt={item.name}
							width={500}
							height={500}
							className="h-80 w-full object-cover"
						/>

						<div className="p-6">
							<h2 className="text-xl font-medium">{item.name}</h2>

							<p className="mt-2 text-neutral-500">${item.price.toFixed(2)}</p>

							<div className="mt-6 flex gap-3">
								<button
									onClick={() =>
										addToCart({
											id: item.id,
											name: item.name,
											price: item.price,
											image: item.image,
										})
									}
									className="flex-1 rounded-full bg-black py-3 text-white transition hover:bg-neutral-800"
								>
									Add to Cart
								</button>

								<button
									onClick={() => removeFromWishlist(item.id)}
									className="rounded-full border px-5 transition hover:bg-neutral-100"
								>
									Remove
								</button>
							</div>
						</div>
					</div>
				))}
			</div>
		</main>
	);
}
