"use client";

import Button from "@/app/components/ui/Button";
import Heading from "@/app/components/ui/Heading";
import Paragraph from "@/app/components/ui/Paragraph";
import Eyebrow from "@/app/components/ui/Eyebrow";
import VideoBackground from "@/app/components/ui/VideoBackground";


export default function ImageBanner() {
	return (
		<section className="relative h-[65vh] md:h-[80vh] w-full overflow-hidden">
			{/* Background Video */}

			<VideoBackground src="/hero.mp4" />
			
			{/* Overlay */}
			<div className="absolute inset-0 bg-black/35" />

			{/* Center Content */}
			<div className="absolute inset-0 z-10 flex items-center justify-center px-6">
				<div className="max-w-3xl text-center text-white">
					
					<Eyebrow>Shop</Eyebrow>

					<Heading>Explore Every Collection</Heading>

					<Paragraph>Handcrafted pieces designed to bring warmth, character, and timeless style to every moment.</Paragraph>

					<div className="mt-5">
						<Button
						href="/shop"
						variant="outline"
						>
						Explore Shop
					</Button>
					</div>

				</div>
			</div>
		</section>
	);
}