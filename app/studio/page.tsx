import VinylCard from "@/app/components/VinylCard";

const albums = [
	{
		title: "Chunky Knit Blanket",
		image: "/chrochet products/bags/red.jpg",
	},
	{
		title: "Crochet Storage Basket",
		image:
			"/chrochet products/tops/“Modern Crochet Top Patterns to Try Today”.jpg",
	},
	{
		title: "Handwoven Throw Blanket",
		image:
			"/chrochet products/stuffed animals/Make this Cozy Amigurumi Bunny Keychain Crochet….jpg",
	},
	{
		title: "Decorative Cushion Cover",
		image: "/chrochet products/tops/Offset cardigan by Juuulsmakes.jpg",
	},
	{
		title: "Handcrafted Crochet Tote",
		image:
			"/chrochet products/bags/Handmade Woven Crochet Bag_ Two-Tone T-Shirt Yarn Purse.jpg",
	},
];

export default function StudioPage() {
	return (
		<main className="min-h-screen bg-white pt-32">
			<div className="mx-auto max-w-7xl px-8">
				{/* Header */}
				<div className="mb-12">
					<p className="text-xs uppercase tracking-[0.55em] text-neutral-400">
						Studio
					</p>

					<h1 className="mt-2 text-5xl font-light tracking-tight">
						Creative Portfolio
					</h1>

					<p className="mt-5 max-w-xl text-neutral-500 leading-7">
						A curated collection of campaigns, handcrafted creations, and visual
						stories from the Variare studio.
					</p>
				</div>

				{/* Vinyl Cards */}
				<div className="hide-scrollbar flex gap-14 overflow-x-auto pb-10">
					{albums.map((album) => (
						<VinylCard
							key={album.title}
							title={album.title}
							image={album.image}
						/>
					))}
				</div>
			</div>
		</main>
	);
}
