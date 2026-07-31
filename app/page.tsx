"use client";

import Hero from "./components/home/Hero";
import ShopAll from "./components/home/shopAll";
import Collections from "./components/home/Collections";
import BestSellers from "./components/home/BestSellers";
import ImageBanner from "./components/home/ImageBanner";
import CustomCTA from "./components/home/CustomCTA";
import JustAdded from "./components/home/JustAdded";

export default function Home() {
	return (
		<>
			<Hero />
			<JustAdded />
			<ImageBanner />
			<BestSellers />
			<ShopAll />
			<Collections />
			<CustomCTA/>
		</>
	);
}
