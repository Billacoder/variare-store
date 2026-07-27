"use client";

import Image from "next/image";
import Link from "next/link";
import { Heart } from "lucide-react";

import { products } from "@/app/data/products";
import { useCart } from "@/app/context/CartContext";
import { useWishlist } from "@/app/context/WishlistContext";

export default function ShopPage() {
	const { addToCart } = useCart();
	const { addToWishlist, isInWishlist } = useWishlist();

	return (
		<section className="mx-auto max-w-7xl px-5 py-16 md:px-8">
			{/* Header */}
			<div className="mb-14">
				<p className="text-[11px] uppercase tracking-[0.45em] text-neutral-400">
					Collection
				</p>

				<h1 className="mt-3 text-4xl font-light md:text-6xl">
					Shop All
				</h1>

				<p className="mt-4 max-w-xl text-sm leading-7 text-neutral-500">
					Explore every handcrafted crochet piece from the Variare collection.
				</p>
			</div>

			<div className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3 lg:grid-cols-4">
				{products.map((product) => (
					<div key={product.slug} className="group">
						<Link href={`/product/${product.slug}`}>
							<div className="relative overflow-hidden rounded-2xl bg-neutral-100">
								<Image
									src={product.image}
									alt={product.title}
									width={500}
									height={650}
									className="aspect-[3/4] w-full object-cover transition duration-700 group-hover:scale-105"
								/>

								<button
									onClick={(e) => {
										e.preventDefault();

										addToWishlist({
											id: product.id,
											name: product.title,
											price:
												typeof product.price === "number"
													? product.price
													: Number(
															String(product.price).replace(
																/[^0-9.]/g,
																""
															)
													  ),
											image: product.image,
										});
									}}
									className={`absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full backdrop-blur-md transition ${
										isInWishlist(product.id)
											? "bg-black text-white"
											: "bg-white/80 hover:bg-black hover:text-white"
									}`}
								>
									<Heart
										size={18}
										fill={isInWishlist(product.id) ? "currentColor" : "none"}
									/>
								</button>
							</div>

							<div className="mt-4">
								<h2 className="text-sm font-medium md:text-base">
									{product.title}
								</h2>

								<p className="mt-1 text-sm text-neutral-500">
									₹
									{(
										typeof product.price === "number"
											? product.price
											: Number(
													String(product.price).replace(/[^0-9.]/g, "")
											  )
									).toLocaleString("en-IN")}
								</p>
							</div>
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
							className="mt-5 w-full border border-black py-3 text-[11px] uppercase tracking-[0.25em] transition-all duration-300 hover:bg-black hover:text-white"
						>
							Add to Cart
						</button>
					</div>
				))}
			</div>
		</section>
	);
}