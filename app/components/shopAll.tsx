"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Link from "next/link";
import {
	ChevronLeft,
	ChevronRight,
	Bookmark,
	ArrowUpRight,
} from "lucide-react";

import { products } from "@/app/data/products";
import { useWishlist } from "@/app/context/WishlistContext";

export default function ShopAll() {
	const [emblaRef, emblaApi] = useEmblaCarousel({
		loop: true,
		align: "start",
		dragFree: true,
	});

	const { toggleWishlist, isInWishlist } = useWishlist();

	// Show only the first 6 products
	const featuredProducts = products.slice(0, 6);

	return (
		<section className="py-8 md:py-12">
			{/* Header */}
			<div className="mb-4 px-4 md:px-3">
				<p className="text-xs uppercase tracking-[0.55em] text-neutral-400">
					Shop All
				</p>
			</div>

			<div className="relative">
				{/* Left Arrow */}
				<button
					onClick={() => emblaApi?.scrollPrev()}
					className="hidden md:flex absolute left-3 top-32 z-20 -translate-y-1/2 rounded-full border border-neutral-200 bg-white/90 p-3 shadow-md backdrop-blur-md transition-all duration-300 hover:scale-110 hover:bg-black hover:text-white"
				>
					<ChevronLeft size={22} />
				</button>

				{/* Right Arrow */}
				<button
					onClick={() => emblaApi?.scrollNext()}
					className="hidden md:flex absolute right-0.5 top-32 z-20 -translate-y-1/2 rounded-full border border-neutral-200 bg-white/90 p-3 shadow-md backdrop-blur-md transition-all duration-300 hover:scale-110 hover:bg-black hover:text-white"
				>
					<ChevronRight size={22} />
				</button>

				{/* Carousel */}
				<div className="overflow-hidden px-4 md:px-3" ref={emblaRef}>
					<div className="flex gap-2">
						{featuredProducts.map((product) => (
							<Link
								key={product.id}
								href={`/product/${product.slug}`}
								className="group flex-[0_0_75%] sm:flex-[0_0_45%] lg:flex-[0_0_250px]"
							>
								{/* Image */}
								<div className="relative overflow-hidden bg-neutral-100">
									<Image
										src={product.image}
										alt={product.title}
										width={250}
										height={250}
										className="h-[220px] sm:h-[240px] md:h-[250px] w-full object-cover transition-all duration-1000 ease-out group-hover:scale-[1.06] group-hover:brightness-110"
									/>

									{/* Wishlist Button */}
									<button
										onClick={(e) => {
											e.preventDefault();
											e.stopPropagation();

											toggleWishlist({
												id: product.id,
												name: product.title,
												price:
													typeof product.price === "number"
														? product.price
														: Number(
																String(product.price).replace(/[^0-9.]/g, ""),
															),
												image: product.image,
											});
										}}
										aria-label="Toggle Wishlist"
										className={`absolute right-3 top-3 flex h-9 w-9 md:h-10 md:w-10 items-center justify-center rounded-full border shadow-lg backdrop-blur-xl transition-all duration-300 ${
											isInWishlist(product.id)
												? "border-black bg-black text-white"
												: "bg-white/80 border-white/30 text-black md:opacity-0 md:translate-y-2 md:group-hover:opacity-100 md:group-hover:translate-y-0 hover:bg-black hover:text-white"
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
									<h3 className="text-sm md:text-base font-medium tracking-tight text-neutral-800 transition-all duration-300 group-hover:translate-x-1 group-hover:text-black">
										{product.title}
									</h3>

									<p className="text-xs md:text-sm text-neutral-500">
										₹{product.price.toLocaleString("en-IN")}.00
									</p>

									<div className="hidden md:flex mt-3 items-center gap-2 opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100">
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
			<div className="mt-8 flex justify-center">
				<Link
					href="/shop"
					className="border border-neutral-900 px-6 md:px-8 py-3 text-xs uppercase tracking-[0.45em] transition-all duration-300 hover:bg-neutral-900 hover:text-white"
				>
					Shop Now
				</Link>
			</div>
		</section>
	);
}
