"use client";

import Hero from "./components/Hero";
import ShopAll from "./components/shopAll";
import Collections from "./components/Collections";
import BestSellers from "./components/BestSellers";
import ImageBanner from "./components/ImageBanner";
import CustomCTA from "./components/CustomCTA";

export default function Home() {
	return (
		<>
			<Hero />
			<BestSellers />
			<ImageBanner />
			<ShopAll />
			<Collections />
			<CustomCTA/>
		</>
	);
}
