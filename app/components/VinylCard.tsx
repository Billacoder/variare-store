"use client";

import Image from "next/image";

interface VinylCardProps {
	title: string;
	image: string;
}

export default function VinylCard({ title, image }: VinylCardProps) {
	return (
		<div className="group relative w-[340px] cursor-pointer">
			{/* Vinyl */}
			<div
				className="
          absolute
          top-[135px]
          left-[90px]
          -translate-y-1/2
          z-0
          transition-all
          duration-1000
          ease-out
          group-hover:translate-x-[170px]
          group-hover:rotate-[360deg]
        "
			>
				<Image
					src="/studio/vinlyCD/ChatGPT Image Jul 3, 2026, 03_10_49 PM.png"
					alt="Vinyl Record"
					width={230}
					height={230}
					className="drop-shadow-2xl select-none"
					draggable={false}
				/>
			</div>

			{/* Sleeve */}
			<div
				className="
          relative
          z-10
          rounded-3xl
          bg-[#f6f4ef]
          p-5
          shadow-2xl
          transition-all
          duration-500
          group-hover:-translate-y-2
        "
			>
				{/* Sleeve Spine */}
				<div className="absolute left-0 top-0 h-full w-[6px] rounded-l-3xl bg-neutral-300" />

				{/* Album Artwork */}
				<div className="relative aspect-square overflow-hidden rounded-xl border border-neutral-200 bg-neutral-100">
					<Image
						src={image}
						alt={title}
						fill
						className="
              object-cover
              transition-all
              duration-700
              ease-out
              group-hover:scale-105
            "
					/>

					{/* Subtle paper finish */}
					<div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/5" />
				</div>
			</div>

			{/* Title */}
			<div className="mt-5">
				<h2 className="text-xl font-light tracking-tight transition-all duration-300 group-hover:translate-x-1">
					{title}
				</h2>
			</div>
		</div>
	);
}
