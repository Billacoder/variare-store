"use client";

import Link from "next/link";

export default function ImageBanner() {
	return (
		<section className="relative h-[65vh] md:h-[80vh] w-full overflow-hidden">
			{/* Background Video */}
			<video
				autoPlay
				muted
				loop
				playsInline
				preload="auto"
				className="absolute inset-0 h-full w-full object-cover"
			>
				<source src="/hero.mp4" type="video/mp4" />
			</video>

			{/* Overlay */}
			<div className="absolute inset-0 bg-black/35" />

			{/* Center Content */}
			<div className="absolute inset-0 z-10 flex items-center justify-center px-6">
				<div className="max-w-3xl text-center text-white">
					<p className="mb-4 text-[11px] uppercase tracking-[0.45em] text-white/70 md:text-xs md:tracking-[0.55em]">
						Shop
					</p>

					<h2 className="text-4xl font-light leading-tight tracking-tight md:text-6xl">
						Explore Every Collection
					</h2>

					<p className="mx-auto mt-5 max-w-lg text-sm leading-7 text-neutral-200 md:text-base">
						Handcrafted pieces designed to bring warmth, character, and timeless style to every moment.
					</p>

					<Link
						href="/shop"
						className="mt-8 inline-block border border-white px-6 py-3 text-[11px] uppercase tracking-[0.3em] text-white transition-all duration-300 hover:bg-white hover:text-black md:px-8 md:text-xs md:tracking-[0.4em]"
					>
						Explore Shop
					</Link>
				</div>
			</div>
		</section>
	);
}