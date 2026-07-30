"use client";

import { useEffect } from "react";

type IntroAnimationProps = {
	onComplete: () => void;
};

export default function IntroAnimation({ onComplete }: IntroAnimationProps) {
	useEffect(() => {
		const timer = setTimeout(() => {
			onComplete();
		}, 2500);

		return () => clearTimeout(timer);
	}, [onComplete]);

	return (
		<div className="flex h-screen w-full items-center justify-center bg-black">
			<h1 className="animate-pulse text-6xl font-bold tracking-[0.4em] text-white">
				VARIARE
			</h1>
		</div>
	);
}
