"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

interface VinylCardProps {
	title: string;
	image: string;
}

export default function VinylCard({
	title,
	image,
}: VinylCardProps) {
	const [hovered, setHovered] = useState(false);

	return (
		<div className="w-[320px] md:w-[420px]">
			<div className="relative h-[320px] w-[320px] md:h-[420px] md:w-[420px]">
				{/* Vinyl */}
				<motion.div
					animate={{
						x: hovered ? 120 : 240,
					}}
					transition={{
						type: "spring",
						stiffness: 170,
						damping: 22,
					}}
					className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center"
				>
					<motion.div
						animate={{ rotate: 360 }}
						transition={{
							repeat: Infinity,
							duration: 10,
							ease: "linear",
						}}
						className="relative h-full w-full rounded-full bg-[#121212] shadow-[0_30px_60px_rgba(0,0,0,.35)]"
					>
						{/* Reflection */}
						<div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_30%_25%,rgba(255,255,255,.16),transparent_30%)]" />

						{/* Grooves */}
						{Array.from({ length: 14 }).map((_, i) => (
							<div
								key={i}
								className="absolute rounded-full border border-neutral-800"
								style={{
									inset: `${8 + i * 12}px`,
								}}
							/>
						))}

						{/* Centre Label */}
						<div className="absolute left-1/2 top-1/2 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-stone-200 shadow-inner md:h-28 md:w-28">
							<div className="h-3 w-3 rounded-full bg-black" />
						</div>
					</motion.div>
				</motion.div>

				{/* Sleeve */}
				<div
					onMouseEnter={() => setHovered(true)}
					onMouseLeave={() => setHovered(false)}
					className="absolute inset-0 z-10"
				>
					{/* Paper wrap */}
					<div className="absolute inset-0 rounded-md bg-[#f6f3ef] shadow-[0_20px_45px_rgba(0,0,0,.18)]">
						{/* Opening */}
						<div className="absolute right-0 top-0 h-full w-5 bg-gradient-to-l from-black/15 to-transparent" />

						{/* Cover */}
						<div className="absolute inset-3 overflow-hidden rounded-sm">
							<Image
								src={image}
								alt={title}
								fill
								className="object-cover transition duration-700 hover:scale-105"
							/>

							<div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
						</div>
					</div>
				</div>
			</div>

			<h3 className="mt-8 text-center text-xl font-light tracking-wide">
				{title}
			</h3>
		</div>
	);
}