import Image from "next/image";
import { notFound } from "next/navigation";
import { products } from "@/app/data/products";
import ProductConfigurator from "@/app/components/ProductConfigurator";

type Props = {
	params: Promise<{
		slug: string;
	}>;
};

export default async function ProductPage({ params }: Props) {
	const { slug } = await params;

	const product = products.find((item) => item.slug === slug);

	if (!product) {
		notFound();
	}

	return (
		<main className="mx-auto max-w-6xl px-6 pt-36 pb-20">
			<div className="grid items-start gap-16 lg:grid-cols-2">
				{/* Product Image */}
				<div className="mx-auto w-full max-w-md overflow-hidden rounded-3xl bg-neutral-100">
					<Image
						src={product.image}
						alt={product.title}
						width={600}
						height={600}
						className="aspect-square w-full object-cover"
					/>
				</div>

				{/* Product Information */}
				<div className="flex flex-col items-start">
					<p className="text-xs uppercase tracking-[0.45em] text-neutral-400">
						{product.collection}
					</p>

					<h1 className="mt-4 text-4xl font-light tracking-tight md:text-5xl">
						{product.title}
					</h1>

					<p className="mt-6 text-3xl font-semibold text-neutral-900">
						₹
						{(
							typeof product.price === "number"
								? product.price
								: Number(String(product.price).replace(/[^0-9.]/g, ""))
						).toLocaleString("en-IN")}
					</p>

					<span className="mt-4 rounded-full bg-green-100 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-green-700">
						In Stock
					</span>

					<p className="mt-8 max-w-lg leading-8 text-neutral-600">
						Beautifully handcrafted crochet piece made with care and
						attention to detail. Designed to bring warmth, comfort, and
						timeless style to your everyday collection.
					</p>

					{/* Product Highlights */}
					<div className="mt-8 space-y-2 text-sm text-neutral-600">
						<p>• Handmade with premium-quality yarn</p>
						<p>• Soft, lightweight and durable</p>
						<p>• Perfect for gifting or everyday use</p>
					</div>

					{/* Product Configurator */}
					<ProductConfigurator product={product} />
				</div>
			</div>
		</main>
	);
}