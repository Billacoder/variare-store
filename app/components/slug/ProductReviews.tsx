"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import type { Product } from "@/app/data/products";

type Props = {
	reviews: Product["reviews"];
	rating: number;
	reviewCount: number;
};

export default function ProductReviews({
	reviews,
	rating,
	reviewCount,
}: Props) {
	const [open, setOpen] = useState(false);

	return (
		<section className="mt-24 border-t border-neutral-200 pt-8">
			<button
				onClick={() => setOpen(!open)}
				className="flex w-full items-center justify-between"
			>
				<div>
					<h2 className="text-3xl font-light">
						Customer Reviews
					</h2>

					<div className="mt-2 flex items-center gap-3 text-sm text-neutral-500">
						<span className="text-yellow-500">
							★ {rating}
						</span>

						<span>({reviewCount} Reviews)</span>
					</div>
				</div>

				<ChevronDown
					size={24}
					className={`transition-transform duration-300 ${
						open ? "rotate-180" : ""
					}`}
				/>
			</button>

			<div
				className={`overflow-hidden transition-all duration-300 ${
					open ? "mt-8 max-h-[1200px]" : "max-h-0"
				}`}
			>
				<div className="space-y-6">
					{reviews.map((review) => (
						<div
							key={review.id}
							className="rounded-2xl border p-6"
						>
							<div className="flex items-start justify-between">
								<div>
									<h3 className="font-medium">
										{review.name}
									</h3>

									<p className="mt-1 text-sm text-neutral-400">
										{review.date}
									</p>
								</div>

								<div className="text-yellow-500">
									{"★".repeat(review.rating)}
								</div>
							</div>

							<p className="mt-4 leading-7 text-neutral-600">
								{review.comment}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}