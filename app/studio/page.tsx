"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import VinylCard from "@/app/components/studio/VinylCard";

const process = [
	{
		id: 1,
		title: "Inspiration",
		image: "/process/inspiration.jpg",
		description:
			"Every collection begins with ideas, mood boards and colour palettes gathered from everyday life.",
	},
	{
		id: 2,
		title: "Sketches",
		image: "/process/sketches.jpg",
		description:
			"Concepts are translated into crochet patterns through hand sketches and planning.",
	},
	{
		id: 3,
		title: "Choosing Yarn",
		image: "/process/yarn.jpg",
		description:
			"The perfect fibres, textures and colours are selected before the first stitch.",
	},
	{
		id: 4,
		title: "Crocheting",
		image: "/process/crochet.jpg",
		description:
			"Every piece is carefully crocheted by hand with patience and attention to detail.",
	},
	{
		id: 5,
		title: "Finishing",
		image: "/process/finishing.jpg",
		description:
			"Blocking, trimming and final inspection ensure every piece meets our standard.",
	},
	{
		id: 6,
		title: "Packaging",
		image: "/process/packaging.jpg",
		description:
			"Your handmade piece is beautifully prepared before beginning its journey to you.",
	},
];

export default function CreativeArchive() {
	const [active, setActive] = useState(0);

	return (
		<section className="bg-[#faf8f5] py-32">
			<div className="mx-auto max-w-7xl px-6">
				{/* Heading */}

				<div className="mx-auto max-w-3xl text-center">
					<p className="text-xs uppercase tracking-[0.55em] text-neutral-500">
						Creative Archive
					</p>

					<h2 className="mt-5 text-5xl font-light md:text-6xl">
						Behind Every Stitch
					</h2>

					<p className="mt-8 text-lg leading-8 text-neutral-600">
						Every handmade piece tells a story long before it reaches your
						wardrobe. Browse each chapter of our creative journey like flipping
						through a collection of vinyl records.
					</p>
				</div>

				{/* Top Info */}

				<div className="mt-20 flex items-center justify-between">
					<div>
						<p className="text-sm uppercase tracking-[0.4em] text-neutral-400">
							Archive
						</p>

						<h3 className="mt-2 text-3xl font-light">
							Chapter {String(active + 1).padStart(2, "0")}
						</h3>
					</div>

					<div className="flex gap-3">
						<div className="flex h-12 w-12 items-center justify-center rounded-full border">
							<ChevronLeft size={18} />
						</div>

						<div className="flex h-12 w-12 items-center justify-center rounded-full border">
							<ChevronRight size={18} />
						</div>
					</div>
				</div>

				{/* Shelf */}

				<div className="relative mt-20">
					<div className="absolute left-0 right-0 top-[245px] h-5 rounded-full bg-neutral-900" />

					<div className="absolute left-0 right-0 top-[250px] h-10 bg-black/10 blur-xl" />

					<div className="overflow-x-auto pb-10">
						<div className="flex min-w-max gap-16 px-8">
							{process.map((item, index) => (
								<div
									key={item.id}
									onMouseEnter={() => setActive(index)}
									className={`transition-all duration-500 ${
										active === index
											? "scale-100 opacity-100"
											: "scale-95 opacity-60"
									}`}
								>
									<VinylCard
										title={item.title}
										image={item.image}
									/>

									<div className="mt-8 w-[320px] text-center md:w-[420px]">
										<p className="text-[11px] uppercase tracking-[0.45em] text-neutral-400">
											Chapter {String(index + 1).padStart(2, "0")}
										</p>

										<h4 className="mt-3 text-2xl font-light">
											{item.title}
										</h4>

										<p className="mt-5 leading-7 text-neutral-600">
											{item.description}
										</p>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>

				{/* Bottom Text */}

				<div className="mx-auto mt-24 max-w-3xl text-center">
					<p className="text-lg leading-8 text-neutral-600">
						Hover over each record to reveal a chapter of our handmade process.
						From inspiration to the final package, every step reflects the care,
						time and craftsmanship behind every Variare creation.
					</p>
				</div>
			</div>
		</section>
	);
}