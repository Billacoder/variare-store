"use client";

import Eyebrow from "@/app/components/ui/Eyebrow";
import Heading from "@/app/components/ui/Heading";
import Paragraph from "@/app/components/ui/Paragraph";

import Button from "@/app/components/ui/Button";
import VideoBackground from "@/app/components/ui/VideoBackground";

export default function Hero() {
	return (
		<section className="relative h-[100dvh] w-full overflow-hidden">

			<VideoBackground src="/hero.mp4" />

			<div className="absolute inset-x-0 bottom-0 z-10 flex flex-col items-start gap-6 px-6 pb-8 md:flex-row md:items-end md:justify-between md:px-8 md:pb-10">
				<div className="text-white">
					
					<Eyebrow>Variare</Eyebrow>

					<Heading>Modern Craft</Heading>

					<Paragraph hideOnMobile>
						Modern Craft • Everyday Essentials
					</Paragraph>
					
				</div>

				<div className="flex w-full flex-col gap-3 md:w-auto md:flex-row md:gap-4">
					<Button href="/shop" variant="outline">
						Shop Crochet
					</Button>

					<Button href="/studio" variant="filled">
						Explore Studio
					</Button>
				</div>
			</div>
		</section>
	);
}