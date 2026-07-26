"use client";

import Image from "next/image";
import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";
import {
	ChevronLeft,
	ChevronRight,
	Bookmark,
	ArrowUpRight,
} from "lucide-react";

import { products } from "@/app/data/products";
import { useWishlist } from "@/app/context/WishlistContext";

export default function BestSellers() {
	const [emblaRef, emblaApi] = useEmblaCarousel({
		loop: true,
		align: "start",
		dragFree: true,
	});

	const { toggleWishlist, isInWishlist } = useWishlist();

	const bestSellers = products.filter((product) => product.bestSeller);

	return (
		<section className="bg-stone-50 py-12">
			{/* Header */}
			<div className="mb-6 px-3">
				<p className="text-xs uppercase tracking-[0.55em] text-neutral-400">
					Best Sellers
				</p>

				<h2 className="mt-3 text-3xl font-light text-neutral-900">
					Customer Favorites
				</h2>

				<p className="mt-3 max-w-xl text-sm leading-7 text-neutral-500">
					Our most-loved handcrafted crochet pieces, chosen time and again by
					customers who appreciate quality and timeless design.
				</p>
			</div>

			<div className="relative">
				{/* Left Arrow */}
				<button
					onClick={() => emblaApi?.scrollPrev()}
					className="absolute left-3 top-40 z-20 -translate-y-1/2 rounded-full border border-neutral-200 bg-white/90 p-3 shadow-md backdrop-blur-md transition-all duration-300 hover:scale-110 hover:bg-black hover:text-white"
				>
					<ChevronLeft size={22} />
				</button>

				{/* Right Arrow */}
				<button
					onClick={() => emblaApi?.scrollNext()}
					className="absolute right-1 top-40 z-20 -translate-y-1/2 rounded-full border border-neutral-200 bg-white/90 p-3 shadow-md backdrop-blur-md transition-all duration-300 hover:scale-110 hover:bg-black hover:text-white"
				>
					<ChevronRight size={22} />
				</button>

				{/* Carousel */}
				<div className="overflow-hidden px-3" ref={emblaRef}>
					<div className="flex gap-2">
						{bestSellers.map((product) => (
							<Link
								key={product.id}
								href={`/product/${product.slug}`}
								className="group flex-[0_0_280px] transition-transform duration-500 hover:-translate-y-1"
							>
								{/* Image */}
								<div className="relative overflow-hidden rounded-2xl bg-neutral-100">
									<Image
										src={product.image}
										alt={product.title}
										width={280}
										height={340}
										className="h-[340px] w-full object-cover transition-all duration-1000 ease-out group-hover:scale-[1.06] group-hover:brightness-110"
									/>

									{/* Best Seller Badge */}
									<span className="absolute left-4 top-4 rounded-full bg-white/90 px-4 py-2 text-[10px] font-medium uppercase tracking-[0.3em] shadow backdrop-blur-sm">
										Best Seller
									</span>

									{/* Wishlist */}
									<button
										onClick={(e) => {
											e.preventDefault();
											e.stopPropagation();

											toggleWishlist({
												id: product.id,
												name: product.title,
												price: product.price,
												image: product.image,
											});
										}}
										aria-label="Toggle Wishlist"
										className={`absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border shadow-lg backdrop-blur-xl transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 ${
											isInWishlist(product.id)
												? "border-black bg-black text-white opacity-100"
												: "translate-y-2 border-white/30 bg-white/80 text-black opacity-0 hover:bg-black hover:text-white"
										}`}
									>
										<Bookmark
											size={18}
											strokeWidth={1.8}
											fill={isInWishlist(product.id) ? "currentColor" : "none"}
										/>
									</button>
								</div>

								{/* Product Info */}
								<div className="mt-5 space-y-1">
									<h3 className="text-base font-medium tracking-tight text-neutral-800 transition-all duration-300 group-hover:translate-x-1 group-hover:text-black">
										{product.title}
									</h3>

									<p className="text-sm text-neutral-500">
										₹{product.price.toLocaleString("en-IN")}
									</p>

									<div className="mt-3 flex items-center gap-2 opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100">
										<span className="text-[11px] uppercase tracking-[0.3em] text-neutral-500">
											View Product
										</span>

										<ArrowUpRight size={15} className="text-neutral-600" />
									</div>
								</div>
							</Link>
						))}
					</div>
				</div>
			</div>

			{/* CTA */}
			<div className="mt-10 flex justify-center">
				<Link
					href="/best-sellers"
					className="border border-neutral-900 px-8 py-3 text-xs uppercase tracking-[0.45em] transition-all duration-300 hover:bg-neutral-900 hover:text-white"
				>
					View All Best Sellers
				</Link>
			</div>
		</section>
	);
}
