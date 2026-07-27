"use client";

import Image from "next/image";
import Link from "next/link";

export default function ImageBanner() {
	return (
		<section className="relative h-[80vh] w-full overflow-hidden">
			{/* Background Image */}
			<video
				autoPlay
				muted
				loop
				playsInline
				className="absolute inset-0 h-full w-full object-cover"
			>
				<source
					src="/hero.mp4"
					type="video/mp4"
				/>
			</video>

			{/* Overlay */}
			<div className="absolute inset-0 bg-black/35" />

			{/* Bottom Content */}
			<div className="absolute inset-x-0 bottom-0 z-10 flex items-end justify-between px-8 pb-10">
				{/* Left */}
				<div className="text-white">
					<p className="mb-3 text-xs uppercase tracking-[0.55em] text-white/65">
						Collections
					</p>

					<h2 className="text-5xl font-light leading-none tracking-tight md:text-6xl">
						Explore Every Collection
					</h2>

					<p className="mt-4 max-w-md text-sm leading-7 text-neutral-200">
						Handcrafted pieces for every style.
					</p>
				</div>
			</div>
		</section>
	);
}
