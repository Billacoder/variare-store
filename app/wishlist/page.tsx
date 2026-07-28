"use client";

import Image from "next/image";
import Link from "next/link";
import { Bookmark } from "lucide-react";

import { products } from "@/app/data/products";
import { useWishlist } from "@/app/context/WishlistContext";

export default function WishlistPage() {
	const { wishlist, removeFromWishlist } = useWishlist();

	if (wishlist.length === 0) {
		return (
			<main className="mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 pb-20 pt-32">
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
		<main className="mx-auto max-w-7xl px-6 pb-20 pt-32">
			<div className="mb-14">
				<p className="text-[11px] uppercase tracking-[0.45em] text-neutral-400">
					Saved Pieces
				</p>

				<h1 className="mt-4 text-5xl font-light tracking-tight">
					Your Wishlist
				</h1>
			</div>

			<div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
				{wishlist.map((item) => {
					const product = products.find((p) => p.id === item.id);

					if (!product) return null;

					return (
						<Link
							key={item.id}
							href={`/product/${product.slug}`}
							className="group"
						>
							<div className="relative overflow-hidden rounded-3xl bg-neutral-100">
								<Image
									src={item.image}
									alt={item.name}
									width={500}
									height={650}
									className="aspect-[3/4] w-full object-cover transition duration-700 group-hover:scale-105"
								/>
							</div>

							<div className="mt-5">
								<h3 className="text-lg font-medium transition duration-300 group-hover:translate-x-1">
									{item.name}
								</h3>

								<p className="mt-2 text-neutral-500">
									₹{item.price.toLocaleString("en-IN")}.00
								</p>
							</div>
						</Link>
					);
				})}
			</div>
		</main>
	);
}