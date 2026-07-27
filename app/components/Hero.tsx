"use client";

import Link from "next/link";

export default function Hero() {
	return (
		<section className="relative h-[100dvh] w-full overflow-hidden">
			{/* Background Video */}
			<video
				autoPlay
				muted
				loop
				playsInline
				preload="auto"
				disablePictureInPicture
				className="absolute inset-0 h-full w-full object-cover"
			>
				<source src="/hero.mp4" type="video/mp4" />
			</video>

			{/* Dark Overlay */}
			<div className="absolute inset-0 bg-black/30" />

			{/* Bottom Content */}
			<div className="absolute inset-x-0 bottom-0 z-10 flex items-end justify-between px-8 pb-10">
				{/* Left */}
				<div className="text-white">
					<p className="mb-3 text-xs uppercase tracking-[0.55em] text-white/65">
						Variare
					</p>

					<h1 className="text-5xl font-light leading-none tracking-tight md:text-7xl">
						Modern Craft
					</h1>

					<p className="mt-4 max-w-md text-sm leading-7 text-neutral-200">
						Modern Craft • Everyday Essentials
					</p>
				</div>

				{/* Right */}
				<div className="flex gap-4">
					<Link
						href="/shop"
						className="border border-white/80 px-6 py-3 text-xs uppercase tracking-[0.35em] text-white transition-all duration-300 hover:bg-white hover:text-black"
					>
						Shop Crochet
					</Link>

					<Link
						href="/studio"
						className="bg-white px-6 py-3 text-xs uppercase tracking-[0.35em] text-black transition-all duration-300 hover:bg-neutral-200"
					>
						Explore Studio
					</Link>
				</div>
			</div>
		</section>
	);
}
