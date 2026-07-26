import Image from "next/image";
import Link from "next/link";
import { products } from "@/app/data/products";

export default function ShopPage() {
	return (
		<main className="mx-auto max-w-7xl px-4 py-12">
			{/* Header */}
			<div className="mb-12">
				<p className="text-xs uppercase tracking-[0.55em] text-neutral-400">
					Shop
				</p>

				<h1 className="mt-2 text-5xl font-light">All Products</h1>

				<p className="mt-4 max-w-2xl text-neutral-500">
					Explore our complete collection of handcrafted crochet pieces.
				</p>
			</div>

			{/* Products */}
			<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
				{products.map((product) => (
					<Link
						key={product.id}
						href={`/product/${product.slug}`}
						className="group"
					>
						<div className="relative h-[430px] overflow-hidden rounded-3xl bg-neutral-100">
							<Image
								src={product.image}
								alt={product.title}
								fill
								className="object-cover transition-transform duration-700 group-hover:scale-105"
							/>

							{product.bestSeller && (
								<span className="absolute left-5 top-5 rounded-full bg-white/90 px-4 py-2 text-[10px] uppercase tracking-[0.3em] backdrop-blur-sm">
									Best Seller
								</span>
							)}
						</div>

						<div className="mt-4">
							<h2 className="text-lg font-medium">{product.title}</h2>

							<p className="mt-1 text-neutral-500">{product.price}</p>
						</div>
					</Link>
				))}
			</div>
		</main>
	);
}
