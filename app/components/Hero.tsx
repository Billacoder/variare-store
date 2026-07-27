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

			{/* Content */}
			<div className="absolute inset-x-0 bottom-0 z-10 flex flex-col items-start gap-6 px-6 pb-8 md:flex-row md:items-end md:justify-between md:px-8 md:pb-10">
				{/* Left */}
				<div className="text-white">
					
					<p className="mb-3 text-xs uppercase tracking-[0.55em] text-white/65 md:block">
						Variare
					</p>

					<h1 className="text-4xl font-light leading-none tracking-tight md:text-7xl">
						Modern Craft
					</h1>

					{/* Hidden on mobile */}
					<p className="mt-4 hidden max-w-md text-sm leading-7 text-neutral-200 md:block">
						Modern Craft • Everyday Essentials
					</p>
				</div>

				{/* Buttons */}
				<div className="flex w-full flex-col gap-3 md:w-auto md:flex-row md:gap-4">
					<Link
						href="/shop"
						className="border border-white/80 px-5 py-3 text-center text-[10px] uppercase tracking-[0.3em] text-white transition-all duration-300 hover:bg-white hover:text-black md:px-6 md:text-xs md:tracking-[0.35em]"
					>
						Shop Crochet
					</Link>

					<Link
						href="/studio"
						className="bg-white px-5 py-3 text-center text-[10px] uppercase tracking-[0.3em] text-black transition-all duration-300 hover:bg-neutral-200 md:px-6 md:text-xs md:tracking-[0.35em]"
					>
						Explore Studio
					</Link>
				</div>
			</div>
		</section>
	);
}