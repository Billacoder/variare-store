"use client";

import { createContext, useContext, useState, ReactNode } from "react";

export interface WishlistItem {
	id: number;
	name: string;
	price: number;
	image: string;
}

interface WishlistContextType {
	wishlist: WishlistItem[];
	addToWishlist: (item: WishlistItem) => void;
	removeFromWishlist: (id: number) => void;
	toggleWishlist: (item: WishlistItem) => void;
	isInWishlist: (id: number) => boolean;
}

const WishlistContext = createContext<WishlistContextType | undefined>(
	undefined,
);

export function WishlistProvider({ children }: { children: ReactNode }) {
	const [wishlist, setWishlist] = useState<WishlistItem[]>([]);

	function addToWishlist(item: WishlistItem) {
		setWishlist((prev) => {
			if (prev.some((product) => product.id === item.id)) {
				return prev;
			}

			return [...prev, item];
		});
	}

	function removeFromWishlist(id: number) {
		setWishlist((prev) => prev.filter((item) => item.id !== id));
	}

	function toggleWishlist(item: WishlistItem) {
		setWishlist((prev) => {
			const exists = prev.some((product) => product.id === item.id);

			if (exists) {
				return prev.filter((product) => product.id !== item.id);
			}

			return [...prev, item];
		});
	}

	function isInWishlist(id: number) {
		return wishlist.some((item) => item.id === id);
	}

	return (
		<WishlistContext.Provider
			value={{
				wishlist,
				addToWishlist,
				removeFromWishlist,
				toggleWishlist,
				isInWishlist,
			}}
		>
			{children}
		</WishlistContext.Provider>
	);
}

export function useWishlist() {
	const context = useContext(WishlistContext);

	if (!context) {
		throw new Error("useWishlist must be used within WishlistProvider");
	}

	return context;
}
