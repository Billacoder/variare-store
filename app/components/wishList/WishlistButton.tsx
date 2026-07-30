"use client";

import { Heart } from "lucide-react";
import { useWishlist } from "@/app/context/WishlistContext";

type Product = {
  id: number | string;
  title: string;
  price: number;
  images: string[];
};

export default function WishlistButton({
  product,
}: {
  product: Product;
}) {
  const { addToWishlist, isInWishlist } = useWishlist();

  const wished = isInWishlist(product.id);

  return (
    <button
      onClick={() =>
        addToWishlist({
          id: product.id,
          name: product.title,
          price: product.price,
          image: product.images[0],
        })
      }
      className={`flex items-center gap-3 rounded-full border px-6 py-3 transition ${
        wished
          ? "border-black bg-black text-white"
          : "hover:border-black hover:bg-black hover:text-white"
      }`}
    >
      <Heart
        size={18}
        fill={wished ? "currentColor" : "none"}
      />

      {wished ? "Saved to Wishlist" : "Add to Wishlist"}
    </button>
  );
}