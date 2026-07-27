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
		<section className="bg-stone-50 py-8 md:py-12">
			{/* Header */}
			<div className="mb-6 px-5 md:px-3">
				<p className="text-[11px] uppercase tracking-[0.45em] text-neutral-400 md:text-xs md:tracking-[0.55em]">
					Best Sellers
				</p>

				<h2 className="mt-2 text-3xl font-light text-neutral-900 md:mt-3">
					Customer Favorites
				</h2>

				<p className="mt-3 hidden max-w-xl text-sm leading-7 text-neutral-500 md:block">
					Our most-loved handcrafted crochet pieces, chosen time and again by
					customers who appreciate quality and timeless design.
				</p>
			</div>

			<div className="relative">
				{/* Left Arrow */}
				<button
					onClick={() => emblaApi?.scrollPrev()}
					className="absolute left-3 top-40 z-20 hidden -translate-y-1/2 rounded-full border border-neutral-200 bg-white/90 p-3 shadow-md backdrop-blur-md transition-all duration-300 hover:scale-110 hover:bg-black hover:text-white md:flex"
				>
					<ChevronLeft size={22} />
				</button>

				{/* Right Arrow */}
				<button
					onClick={() => emblaApi?.scrollNext()}
					className="absolute right-1 top-40 z-20 hidden -translate-y-1/2 rounded-full border border-neutral-200 bg-white/90 p-3 shadow-md backdrop-blur-md transition-all duration-300 hover:scale-110 hover:bg-black hover:text-white md:flex"
				>
					<ChevronRight size={22} />
				</button>

				{/* Carousel */}
				<div
					className="overflow-hidden px-5 md:px-3"
					ref={emblaRef}
				>
					<div className="flex gap-4 md:gap-2">
						{bestSellers.map((product) => (
							<Link
								key={product.id}
								href={`/product/${product.slug}`}
								className="group flex-[0_0_68%] sm:flex-[0_0_46%] lg:flex-[0_0_280px] transition-transform duration-500 md:hover:-translate-y-1"
							>
								{/* Image */}
								<div className="relative overflow-hidden rounded-2xl bg-neutral-100">
									<Image
										src={product.image}
										alt={product.title}
										width={400}
										height={540}
										className="aspect-[3/4] w-full object-cover transition-all duration-700 md:aspect-auto md:h-[340px] md:group-hover:scale-[1.06] md:group-hover:brightness-110"
									/>

									{/* Badge */}
									<span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.25em] shadow backdrop-blur-sm md:left-4 md:top-4 md:px-4 md:py-2 md:tracking-[0.3em]">
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
										className={`absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full border shadow-lg backdrop-blur-xl transition-all duration-300 md:right-4 md:top-4 md:h-10 md:w-10 ${
											isInWishlist(product.id)
												? "border-black bg-black text-white opacity-100"
												: "border-white/30 bg-white/80 text-black opacity-100 hover:bg-black hover:text-white md:translate-y-2 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100"
										}`}
									>
										<Bookmark
											size={16}
											strokeWidth={1.8}
											fill={isInWishlist(product.id) ? "currentColor" : "none"}
										/>
									</button>
								</div>

								{/* Product Info */}
								<div className="mt-4 space-y-1">
									<h3 className="text-sm font-medium tracking-tight text-neutral-900 md:text-base md:transition-all md:duration-300 md:group-hover:translate-x-1">
										{product.title}
									</h3>

									<p className="text-sm text-neutral-500">
										₹{product.price.toLocaleString("en-IN")}.00
									</p>

									<div className="mt-3 hidden items-center gap-2 opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100 md:flex">
										<span className="text-[11px] uppercase tracking-[0.3em] text-neutral-500">
											View Product
										</span>

										<ArrowUpRight
											size={15}
											className="text-neutral-600"
										/>
									</div>
								</div>
							</Link>
						))}
					</div>
				</div>
			</div>

			{/* CTA */}
			<div className="mt-8 flex justify-center px-5">
				<Link
					href="/best-sellers"
					className="w-full border border-neutral-900 py-3 text-center text-[11px] uppercase tracking-[0.3em] transition-all duration-300 hover:bg-neutral-900 hover:text-white md:w-auto md:px-8 md:text-xs md:tracking-[0.45em]"
				>
					View All Best Sellers
				</Link>
			</div>
		</section>
	);
}