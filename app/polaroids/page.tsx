"use client";

import Image from "next/image";

const posts = [
	{
		id: 1,
		image: "/chrochet products/tops/43065740182406141.jpg",
		user: "@olivia",
	},
	{
		id: 2,
		image:
			"/chrochet products/bags/Handmade Woven Crochet Bag_ Two-Tone T-Shirt Yarn Purse.jpg",
		user: "@amelia",
	},
	{
		id: 3,
		image: "/chrochet products/beanie/Animal-Themed Crochet Hats.jpg",
		user: "@james",
	},
	{
		id: 4,
		image:
			"/chrochet products/baby/CROCHET PATTERN Baby Flower Dress, Sunflower Granny Square, Baby Sundress, 0-24 Months, PDF Download - Etsy.jpg",
		user: "@mia",
	},
	{
		id: 5,
		image: "/chrochet products/stuffed animals/I Made These Crochet Pieces.jpg",
		user: "@ava",
	},
	{
		id: 6,
		image:
			"/chrochet products/blanket/Easy Baby Blanket Crochet Pattern FREE - 2 color crochet blanket.jpg",
		user: "@lucas",
	},
	{
		id: 7,
		image: "/chrochet products/tops/Offset cardigan by Juuulsmakes.jpg",
		user: "@zoe",
	},
	{
		id: 8,
		image: "/chrochet products/bags/red.jpg",
		user: "@noah",
	},
	{
		id: 9,
		image:
			"/chrochet products/tops/“Modern Crochet Top Patterns to Try Today”.jpg",
		user: "@ella",
	},
];

export default function CommunityPage() {
	return (
		<main className="bg-white pt-28 pb-24">
			<div className="mx-auto max-w-7xl px-6">
				{/* Hero */}
				<section className="flex flex-col items-center gap-16 lg:flex-row">
					<div className="relative h-[620px] w-full max-w-2xl overflow-hidden rounded-3xl">
						<Image
							src="/chrochet products/tops/43065740182406141.jpg"
							alt="Community Feature"
							fill
							priority
							className="object-cover"
						/>
					</div>

					<div className="max-w-md">
						<p className="text-xs uppercase tracking-[0.55em] text-neutral-400">
							Community
						</p>

						<h1 className="mt-3 text-5xl font-light tracking-tight">
							Worn by You
						</h1>

						<p className="mt-8 text-lg leading-8 text-neutral-600">
							Every Variare piece tells a story. From everyday outfits to
							special occasions, our community brings handcrafted crochet to
							life through their own unique style.
						</p>

						<p className="mt-6 text-lg leading-8 text-neutral-600">
							Tag your photos with{" "}
							<span className="font-medium text-black">#Variare</span> for a
							chance to be featured.
						</p>

						<button className="mt-10 rounded-full border border-black px-8 py-3 transition hover:bg-black hover:text-white">
							Share Your Look
						</button>
					</div>
				</section>

				{/* Gallery */}
				<section className="mt-32">
					<div className="mb-10 text-center">
						<h2 className="text-3xl font-light">Community Gallery</h2>
						<p className="mt-3 text-neutral-500">
							Discover how customers around the world style Variare.
						</p>
					</div>

					<div className="grid grid-cols-2 gap-6 md:grid-cols-3">
						{posts.map((post) => (
							<div
								key={post.id}
								className="group relative aspect-square overflow-hidden rounded-3xl"
							>
								<Image
									src={post.image}
									alt={post.user}
									fill
									className="object-cover transition duration-700 group-hover:scale-105"
								/>

								<div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition duration-300 group-hover:opacity-100">
									<p className="p-5 text-white">{post.user}</p>
								</div>
							</div>
						))}
					</div>
				</section>
			</div>
		</main>
	);
}
