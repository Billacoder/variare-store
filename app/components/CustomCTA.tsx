"use client";

import Eyebrow from "@/app/components/ui/Eyebrow";
import Heading from "@/app/components/ui/Heading";
import Paragraph from "@/app/components/ui/Paragraph";
import SectionLabel from "@/app/components/ui/SectionLabel";
import Button from "@/app/components/ui/Button";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function CustomCTA() {
	return (
		<section className="py-4 md:py-8">

			<div className="mb-5 px-5 md:px-3">
					<SectionLabel>custom order</SectionLabel>
				  </div>
			

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
					<Eyebrow className="text-neutral-400">
						Custom Orders
					</Eyebrow>

					<Heading className="text-4xl font-medium leading-tight text-neutral-900 md:text-6xl">
						<>
							Create Something
							<br />
							Just for You
						</>
					</Heading>

					<Paragraph className="mt-8 max-w-xl text-lg leading-8 text-neutral-600">
						Every crochet piece is handmade to order. Personalise
						colours, sizing and details—or simply send us your
						inspiration and we'll craft a piece that feels uniquely
						yours.
					</Paragraph>

					<div className="mt-10 space-y-5">
						
						<div className="flex items-center gap-4">
							<div className="h-2 w-2 rounded-full bg-black" />
							<Paragraph className="mt-0 max-w-none text-neutral-700">
								Choose any colour palette
							</Paragraph>
						</div>

						<div className="flex items-center gap-4">
							<div className="h-2 w-2 rounded-full bg-black" />
							<Paragraph className="mt-0 max-w-none text-neutral-700">
								Send inspiration photos or sketches
							</Paragraph>
						</div>

						<div className="flex items-center gap-4">
							<div className="h-2 w-2 rounded-full bg-black" />
							<Paragraph className="mt-0 max-w-none text-neutral-700">
								Handcrafted using premium yarns
							</Paragraph>
						</div>

						<div className="flex items-center gap-4">
							<div className="h-2 w-2 rounded-full bg-black" />
							<Paragraph className="mt-0 max-w-none text-neutral-700">
								Made exclusively for you
							</Paragraph>
						</div>
					</div>

					<div className="mt-12">
						<Button href="/custom" variant="outlineDark">
							Start Customising
						</Button>
					</div>
				</div>
			</div>
		</section>
	);
}