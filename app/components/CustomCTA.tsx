"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function CustomCTA() {
	return (
		<section className="bg-stone-50 py-24 md:py-8">
			<div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">
				{/* Image */}
				<div className="group relative overflow-hidden bg-neutral-100">
					<Image
						src="/chrochet products/tops/Offset cardigan by Juuulsmakes.jpg"
						alt="Custom Crochet"
						width={900}
						height={1200}
						className="aspect-[4/5] w-full object-cover transition duration-700 group-hover:scale-105"
					/>
				</div>

				{/* Content */}
				<div>
					<p className="mb-4 text-[11px] uppercase tracking-[0.45em] text-neutral-400">
						Custom Orders
					</p>

					<h2 className="text-4xl font-medium leading-tight text-neutral-900 md:text-6xl">
						Create Something
						<br />
						Just for You
					</h2>

					<p className="mt-8 max-w-xl text-lg leading-8 text-neutral-600">
						Every crochet piece is handmade to order. Personalise
						colours, sizing and details—or simply send us your
						inspiration and we'll craft a piece that feels uniquely
						yours.
					</p>

					<div className="mt-10 space-y-5">
						<div className="flex items-center gap-4">
							<div className="h-2 w-2 rounded-full bg-black" />
							<span className="text-neutral-700">
								Choose any colour palette
							</span>
						</div>

						<div className="flex items-center gap-4">
							<div className="h-2 w-2 rounded-full bg-black" />
							<span className="text-neutral-700">
								Send inspiration photos or sketches
							</span>
						</div>

						<div className="flex items-center gap-4">
							<div className="h-2 w-2 rounded-full bg-black" />
							<span className="text-neutral-700">
								Handcrafted using premium yarns
							</span>
						</div>

						<div className="flex items-center gap-4">
							<div className="h-2 w-2 rounded-full bg-black" />
							<span className="text-neutral-700">
								Made exclusively for you
							</span>
						</div>
					</div>

					<div className="mt-12">
						<Link
							href="/custom"
							className="group inline-flex items-center gap-3 border border-neutral-900 px-8 py-4 text-[11px] uppercase tracking-[0.3em] transition-all duration-300 hover:bg-neutral-900 hover:text-white"
						>
							Start Customising

							<ArrowUpRight
								size={16}
								className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
							/>
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
}