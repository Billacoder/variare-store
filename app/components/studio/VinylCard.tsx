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
			<div
				onMouseEnter={() => setHovered(true)}
				onMouseLeave={() => setHovered(false)}
				className="relative h-[320px] w-[320px] md:h-[420px] md:w-[420px]"
			>
				{/* Vinyl (Behind Sleeve) */}
				<div className="absolute inset-0 flex items-center justify-center">
					<motion.div
						animate={{
							x: hovered ? 130 : 0,
						}}
						transition={{
							type: "spring",
							stiffness: 180,
							damping: 20,
						}}
						className="absolute h-full w-full"
					>
						<motion.div
							animate={{
								rotate: hovered ? 360 : 0,
							}}
							transition={{
								rotate: {
									duration: 8,
									repeat: Infinity,
									ease: "linear",
								},
							}}
							className="relative h-full w-full rounded-full bg-[#141414] shadow-[0_40px_70px_rgba(0,0,0,.35)]"
						>
							{/* Reflection */}
							<div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_30%_25%,rgba(255,255,255,.15),transparent_30%)]" />

							{/* Grooves */}
							{Array.from({ length: 15 }).map((_, i) => (
								<div
									key={i}
									className="absolute rounded-full border border-neutral-800"
									style={{
										inset: `${8 + i * 11}px`,
									}}
								/>
							))}

							{/* Label */}
							<div className="absolute left-1/2 top-1/2 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full bg-[#efe8df] shadow-inner">
								<p className="text-[9px] uppercase tracking-[0.35em] text-neutral-500">
									VARIARE
								</p>

								<p className="mt-1 text-xs font-light">
									ARCHIVE
								</p>

								<div className="mt-2 h-3 w-3 rounded-full bg-black" />
							</div>
						</motion.div>
					</motion.div>
				</div>

				{/* Sleeve */}
				<div className="absolute inset-0 z-10 overflow-hidden rounded-md">
					<motion.div
						animate={{
							y: hovered ? -6 : 0,
							scale: hovered ? 1.02 : 1,
						}}
						transition={{
							duration: 0.35,
						}}
						className="absolute inset-0 rounded-md bg-gradient-to-br from-[#f8f5f0] via-[#f3eee6] to-[#ebe4d9] shadow-[0_25px_60px_rgba(0,0,0,.18)]"
					>
						{/* Opening */}
						<div className="absolute right-0 top-0 h-full w-5 bg-gradient-to-l from-black/15 to-transparent" />

						{/* Header */}
						<div className="absolute left-6 top-6 z-20">
							<p className="text-[10px] uppercase tracking-[0.45em] text-neutral-500">
								VARIARE
							</p>

							<h4 className="mt-3 text-xl font-light">
								{title}
							</h4>

							<p className="mt-2 text-xs uppercase tracking-[0.3em] text-neutral-400">
								Creative Archive
							</p>
						</div>

						{/* Image */}
						<div className="absolute bottom-5 left-5 right-5 top-28 overflow-hidden rounded-sm">
							<Image
								src={image}
								alt={title}
								fill
								className="object-cover transition duration-700 hover:scale-105"
							/>

							<div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
						</div>

						{/* Bottom Left */}
						<div className="absolute bottom-6 left-6">
							<p className="text-[10px] uppercase tracking-[0.35em] text-neutral-400">
								ARCHIVE
							</p>

							<p className="mt-1 text-2xl font-light">
								01
							</p>
						</div>

						{/* Stamp */}
						<div className="absolute bottom-6 right-6 rounded-full border border-neutral-300 px-4 py-2">
							<p className="text-[9px] uppercase tracking-[0.35em] text-neutral-500">
								HANDMADE
							</p>
						</div>
					</motion.div>
				</div>
			</div>

			<div className="mt-8 text-center">
				<p className="text-[11px] uppercase tracking-[0.45em] text-neutral-400">
					Creative Process
				</p>

				<h3 className="mt-3 text-2xl font-light tracking-wide">
					{title}
				</h3>
			</div>
		</div>
	);
}