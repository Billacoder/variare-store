"use client";

import SectionLabel from "@/app/components/ui/SectionLabel";
import Heading from "@/app/components/ui/Heading";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { collections } from "@/app/data/collections";

export default function Collections() {
	return (
		<section className="mx-auto max-w-7xl px-3 py-10">
			{/* Header */}
			<div className="mb-5 px-5 md:px-3">
				<SectionLabel>Collections</SectionLabel>
			</div>

			{/* Grid */}
			<div className="grid auto-rows-[80px] grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3">
				{collections.map((collection) => (
					<Link
						key={collection.title}
						href={`/collections/${collection.slug}`}
						className={`group relative block transition-transform duration-500 hover:-translate-y-1 ${collection.rowSpan}`}
					>
						<div className="relative h-full overflow-hidden rounded-3xl border border-white/10 bg-neutral-100">
							{/* Image */}
							<Image
								src={collection.image}
								alt={collection.title}
								fill
								className="object-cover transition-all duration-700 ease-out group-hover:scale-[1.04] group-hover:brightness-110"
							/>

							{/* Overlay */}
							<div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent transition-all duration-500 group-hover:from-black/40" />

							{/* Content */}
							<div className="absolute bottom-0 left-0 p-6">
								<SectionLabel className="text-white">Collection</SectionLabel>

								<Heading className="text-white">{collection.title}</Heading>

								<div className="mt-3 flex items-center gap-2 opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100">
									<span className="text-xs uppercase tracking-[0.3em] text-white/80">
										Explore
									</span>

									<ArrowUpRight size={16} className="text-white" />
								</div>
							</div>
						</div>
					</Link>
				))}
			</div>
		</section>
	);
}
