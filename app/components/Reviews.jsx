"use client";

const reviews = [
	{
		name: "Sarah M.",
		review:
			"The craftsmanship is exceptional. Every stitch feels thoughtfully made, and the quality exceeded my expectations.",
	},
	{
		name: "Emily R.",
		review:
			"Beautifully handmade pieces that instantly made my home feel warmer. I'll definitely be ordering again.",
	},
	{
		name: "Jessica T.",
		review:
			"The attention to detail is incredible. It arrived beautifully packaged and looked even better in person.",
	},
];

export default function Reviews() {
	return (
		<section className="bg-stone-50 py-32">
			<div className="mx-auto max-w-4xl px-8 text-center">
				<p className="text-sm uppercase tracking-[0.4em] text-neutral-500">
					Testimonials
				</p>

				<h2 className="mt-4 text-5xl font-light">Loved by Our Customers</h2>

				<p className="mx-auto mt-6 max-w-2xl leading-7 text-neutral-600">
					Kind words from customers who have welcomed our handmade crochet
					pieces into their homes.
				</p>

				<div className="mt-20 space-y-16">
					{reviews.map((review) => (
						<div key={review.name}>
							<p className="text-xl tracking-[0.3em] text-amber-500">★★★★★</p>

							<p className="mx-auto mt-8 max-w-3xl text-3xl font-light leading-relaxed text-neutral-800">
								“{review.review}”
							</p>

							<p className="mt-8 text-sm uppercase tracking-[0.3em] text-neutral-500">
								{review.name}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
