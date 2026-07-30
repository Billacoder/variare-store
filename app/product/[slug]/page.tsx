import { notFound } from "next/navigation";

import { products } from "@/app/data/products";
import ProductConfigurator from "@/app/components/slug/ProductConfigurator";
import ProductImageCarousel from "@/app/components/slug/ProductImageCarousel";
import WishlistButton from "@/app/components/wishList/WishlistButton";
import ProductReviews from "@/app/components/slug/ProductReviews";
import RelatedProducts from "@/app/components/slug/RelatedProducts";

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
				{/* Product Gallery */}
				<div className="mx-auto w-full max-w-md">
					<ProductImageCarousel
						images={product.images}
						title={product.title}
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
								: Number(
										String(product.price).replace(/[^0-9.]/g, "")
								  )
						).toLocaleString("en-IN")}
					</p>

					{/* Wishlist */}
					<div className="mt-6">
						<WishlistButton product={product} />
					</div>

					{/* Rating */}
					<div className="mt-6 flex items-center gap-3">
						<div className="flex text-lg text-yellow-500">
							{"★".repeat(Math.round(product.rating))}
						</div>

						<span className="text-sm text-neutral-500">
							{product.rating} ({product.reviewCount} Reviews)
						</span>
					</div>

					<span className="mt-6 rounded-full bg-green-100 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-green-700">
						In Stock
					</span>

					{/* Description */}
					<p className="mt-8 max-w-lg leading-8 text-neutral-600">
						{product.description}
					</p>

					{/* Product Highlights */}
					<div className="mt-8 space-y-2 text-sm text-neutral-600">
						{product.highlights.map((highlight) => (
							<p key={highlight}>• {highlight}</p>
						))}
					</div>
					{/* Product Configurator */}
					<ProductConfigurator product={product} />
				</div>
			</div>

			{/* Reviews */}
			<ProductReviews
				reviews={product.reviews}
				rating={product.rating}
				reviewCount={product.reviewCount}
			/>

			{/* Related Products */}
			<RelatedProducts
				currentId={product.id}
				collection={product.collection}
			/>
		</main>
	);
}