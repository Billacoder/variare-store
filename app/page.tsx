"use client";

import Hero from "./components/Hero";
import ShopAll from "./components/shopAll";
import Collections from "./components/Collections";
import BestSellers from "./components/BestSellers";
import ImageBanner from "./components/ImageBanner";

export default function Home() {
	return (
		<>
			<Hero />
			<ShopAll />
			<ImageBanner />
			<Collections />
			<BestSellers />
		</>
	);
}
