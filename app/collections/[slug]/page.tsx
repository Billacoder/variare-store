import Image from "next/image";
import { notFound } from "next/navigation";
import { collections } from "@/app/data/collections";
import { products } from "@/app/data/products";
import Link from "next/link";

type Props = {
	params: Promise<{
		slug: string;
	}>;
};

export default async function CollectionPage({ params }: Props) {
	const { slug } = await params;

	// Find the selected collection
	const collection = collections.find((item) => item.slug === slug);

	if (!collection) {
		notFound();
	}

	// Get all products in this collection
	const collectionProducts = products.filter(
		(product) => product.collection === slug,
	);

	return (
		<main className="mx-auto max-w-7xl px-4 py-12">
			{/* Heading */}
			<div className="mb-12">
				<p className="text-xs uppercase tracking-[0.45em] text-neutral-400">
					Collection
				</p>

				<h1 className="mt-2 text-5xl font-light">{collection.title}</h1>
			</div>

			{/* Products */}
			<div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
				{collectionProducts.map((product) => (
					<Link
						href={`/product/${product.slug}`}
						key={product.id}
						className="group"
					>
						<div className="overflow-hidden bg-neutral-100">
							<Image
								src={product.images[0]}
								alt={product.title}
								width={400}
								height={400}
								className="aspect-square w-full object-cover transition duration-500 group-hover:scale-105"
							/>
						</div>

						<h2 className="mt-4 text-lg font-medium">{product.title}</h2>

						<p className="text-neutral-500">₹{product.price}</p>
					</Link>
				))}
			</div>

			{collectionProducts.length === 0 && (
				<p className="mt-10 text-neutral-500">
					No products found in this collection.
				</p>
			)}
		</main>
	);
}
