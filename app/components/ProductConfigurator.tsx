"use client";

import { useState } from "react";
import AddToCartButton from "./AddToCartButton";
import type { Product } from "@/app/data/products";

type Props = {
	product: Product;
};

const options = {
	wearables: ["XS", "S", "M", "L", "XL"],

	beanies: ["Child", "Teen", "Adult"],

	blankets: [
		"Baby Blanket",
		"Throw Blanket",
		"Twin",
		"Queen",
	],

	"little-knits": [
		"Newborn",
		"0–3 Months",
		"3–6 Months",
		"6–12 Months",
		"1–2 Years",
		"2–4 Years",
	],
} as const;

export default function ProductConfigurator({ product }: Props) {
	const [size, setSize] = useState("");

	const collection = product.collection as keyof typeof options;

	const sizes = options[collection];

	return (
		<div className="mt-10 w-full">
			{sizes && (
				<div>
					<h3 className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-neutral-500">
						Select Size
					</h3>

					<div className="flex flex-wrap gap-3">
						{sizes.map((item) => (
							<button
								key={item}
								type="button"
								onClick={() => setSize(item)}
								className={`rounded-full border px-6 py-3 text-sm transition ${
									size === item
										? "border-black bg-black text-white"
										: "border-neutral-300 hover:border-black"
								}`}
							>
								{item}
							</button>
						))}
					</div>
				</div>
			)}

			<AddToCartButton
				product={product}
				size={size}
				disabled={!!sizes && !size}
			/>
		</div>
	);
}