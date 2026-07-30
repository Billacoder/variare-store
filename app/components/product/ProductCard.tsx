"use client";

import Image from "next/image";
import Link from "next/link";
import { Bookmark, ArrowUpRight } from "lucide-react";

import { useWishlist } from "@/app/context/WishlistContext";

type Product = {
  id: number;
  slug: string;
  title: string;
  price: number;
  images: string[];
};

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({
  product,
}: ProductCardProps) {
  const { toggleWishlist, isInWishlist } = useWishlist();

  return (
    <Link
      href={`/product/${product.slug}`}
      className="group flex-[0_0_78%] sm:flex-[0_0_46%] lg:flex-[0_0_250px]"
    >
      {/* Image */}
      <div className="relative overflow-hidden bg-neutral-100">
        <Image
          src={product.images[0]}
          alt={product.title}
          width={400}
          height={650}
          className="aspect-[3/4] w-full object-cover transition duration-700 group-hover:scale-105"
        />

        {/* Wishlist */}
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();

            toggleWishlist({
              id: product.id,
              name: product.title,
              price: product.price,
              image: product.images[0],
            });
          }}
          aria-label="Toggle Wishlist"
          className={`absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full border shadow-lg backdrop-blur-xl transition-all duration-300 md:h-10 md:w-10 ${
            isInWishlist(product.id)
              ? "border-black bg-black text-white"
              : "border-white/30 bg-white/80 text-black md:translate-y-2 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100 hover:bg-black hover:text-white"
          }`}
        >
          <Bookmark
            size={16}
            strokeWidth={1.8}
            fill={isInWishlist(product.id) ? "currentColor" : "none"}
          />
        </button>
      </div>

      {/* Product Info */}
      <div className="mt-4 space-y-1">
        <h3 className="text-sm font-medium tracking-tight text-neutral-900 md:text-base md:transition-transform md:duration-300 md:group-hover:translate-x-1">
          {product.title}
        </h3>

        <p className="text-sm text-neutral-500">
          ₹{product.price.toLocaleString("en-IN")}.00
        </p>

        <div className="mt-3 hidden items-center gap-2 opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100 md:flex">
          <span className="text-[11px] uppercase tracking-[0.3em] text-neutral-500">
            View Product
          </span>

          <ArrowUpRight size={15} className="text-neutral-600" />
        </div>
      </div>
    </Link>
  );
}