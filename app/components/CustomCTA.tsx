"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CustomCTA() {
	return (
		<section className="bg-stone-50 py-24 md:py-36">
			<div className="mx-auto flex max-w-7xl flex-col items-center gap-16 px-6 md:flex-row md:px-10">

				{/* Image */}
				<div className="relative h-[500px] w-full overflow-hidden rounded-3xl md:w-1/2">
					<Image
						src="/custom-crochet.jpg"
						alt="Custom Crochet"
						fill
						className="object-cover transition duration-700 hover:scale-105"
					/>
				</div>

				{/* Content */}
				<div className="flex w-full flex-col md:w-1/2">

					<p className="mb-3 uppercase tracking-[0.35em] text-neutral-500">
						Custom Orders
					</p>

					<h2 className="font-serif text-4xl leading-tight md:text-6xl">
						Create Something
						<br />
						Truly Yours
					</h2>

					<p className="mt-8 max-w-lg text-lg leading-8 text-neutral-600">
						Every crochet piece is handmade to order.
						Choose your colours, size and details—or upload
						your inspiration and we'll bring it to life.
					</p>

					<div className="mt-10 space-y-4 text-lg text-neutral-700">

						<div className="flex items-center gap-3">
							<div className="h-2 w-2 rounded-full bg-black" />
							Unlimited colour choices
						</div>

						<div className="flex items-center gap-3">
							<div className="h-2 w-2 rounded-full bg-black" />
							Upload inspiration photos
						</div>

						<div className="flex items-center gap-3">
							<div className="h-2 w-2 rounded-full bg-black" />
							Made by hand with premium yarn
						</div>

					</div>

					<Link
						href="/custom"
						className="group mt-12 flex w-fit items-center gap-3 rounded-full bg-black px-8 py-4 text-white transition hover:bg-neutral-800"
					>
						Start Customising

						<ArrowRight
							size={18}
							className="transition-transform duration-300 group-hover:translate-x-1"
						/>
					</Link>

				</div>
			</div>
		</section>
	);
}