"use client";

import Image from "next/image";
import Link from "next/link";

const products = [
	{
		id: 1,
		name: "Crochet Cardigan",
		price: "Rs. 8,900",
		category: "Ready to Wear",
		image: "/chrochet products/tops/43065740182406141.jpg",
	},
	{
		id: 2,
		name: "Handmade Tote",
		price: "Rs. 5,400",
		category: "Bags",
		image:
			"/chrochet products/bags/Handmade Woven Crochet Bag_ Two-Tone T-Shirt Yarn Purse.jpg",
	},
	{
		id: 3,
		name: "Chunky Blanket",
		price: "Rs. 11,900",
		category: "Blankets",
		image:
			"/chrochet products/blanket/Easy Baby Blanket Crochet Pattern FREE - 2 color crochet blanket.jpg",
	},
	{
		id: 4,
		name: "Crochet Beanie",
		price: "Rs. 3,200",
		category: "Beanies",
		image: "/chrochet products/beanie/Animal-Themed Crochet Hats.jpg",
	},
	{
		id: 5,
		name: "Baby Dress",
		price: "Rs. 4,500",
		category: "Baby Collection",
		image:
			"/chrochet products/baby/CROCHET PATTERN Baby Flower Dress, Sunflower Granny Square, Baby Sundress, 0-24 Months, PDF Download - Etsy.jpg",
	},
	{
		id: 6,
		name: "Crochet Plush",
		price: "Rs. 2,900",
		category: "Crochet Plush",
		image: "/chrochet products/stuffed animals/I Made These Crochet Pieces.jpg",
	},
];

const categories = [
	"All",
	"Ready to Wear",
	"Bags",
	"Blankets",
	"Beanies",
	"Baby Collection",
	"Crochet Plush",
];

export default function ShopPage() {
	return (
		<main className="bg-white pt-32 pb-24">
			<div className="mx-auto max-w-7xl px-8">
				{/* Header */}
				<div className="mb-16">
					<p className="text-xs uppercase tracking-[0.5em] text-neutral-400">
						Shop
					</p>

					<div className="mt-4 flex items-end justify-between">
						<h1 className="text-5xl font-light tracking-tight">All Products</h1>

						<p className="text-neutral-500">{products.length} Products</p>
					</div>
				</div>

				{/* Categories */}
				<div className="mb-14 flex flex-wrap gap-3 border-b border-neutral-200 pb-8">
					{categories.map((category) => (
						<button
							key={category}
							className="rounded-full border border-neutral-300 px-5 py-2 text-sm transition hover:bg-black hover:text-white"
						>
							{category}
						</button>
					))}
				</div>

				{/* Products */}
				<div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-4">
					{products.map((product) => (
						<Link
							href={`/product/${product.id}`}
							key={product.id}
							className="group"
						>
							<div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-neutral-100">
								<Image
									src={product.image}
									alt={product.name}
									fill
									className="object-cover transition duration-700 group-hover:scale-105"
								/>
							</div>

							<div className="mt-5">
								<p className="text-xs uppercase tracking-[0.25em] text-neutral-400">
									{product.category}
								</p>

								<h2 className="mt-2 text-lg font-light">{product.name}</h2>

								<p className="mt-2 text-neutral-700">{product.price}</p>
							</div>
						</Link>
					))}
				</div>
			</div>
		</main>
	);
}
