"use client";

import Link from "next/link";
import { Heart } from "lucide-react";

import { products } from "@/app/data/products";
import { useWishlist } from "@/app/context/WishlistContext";
import ProductImageCarousel from "@/app/components/slug/ProductImageCarousel";

export default function ShopPage() {
  const { addToWishlist, isInWishlist } = useWishlist();

  return (
    <section className="mx-auto max-w-7xl px-5 py-16 md:px-8">
      <div className="mb-14">
        <p className="text-[11px] uppercase tracking-[0.45em] text-neutral-400">
          Collection
        </p>

        <h1 className="mt-3 text-4xl font-light md:text-6xl">
          Shop All
        </h1>

        <p className="mt-4 max-w-xl text-sm leading-7 text-neutral-500">
          Explore every handcrafted crochet piece from the Variare collection.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <div
            key={product.slug}
            className="group"
          >
            <Link href={`/product/${product.slug}`}>
              <div className="relative overflow-hidden rounded-2xl bg-neutral-100">

                <ProductImageCarousel
                  images={product.images}
                  title={product.title}
                />

                <button
                  onClick={(e) => {
                    e.preventDefault();

                    addToWishlist({
                      id: product.id,
                      name: product.title,
                      price:
                        typeof product.price === "number"
                          ? product.price
                          : Number(
                              String(product.price).replace(/[^0-9.]/g, "")
                            ),
                      image: product.images[0],
                    });
                  }}
                  className={`absolute right-3 top-3 z-20 flex h-10 w-10 items-center justify-center rounded-full backdrop-blur-md transition ${
                    isInWishlist(product.id)
                      ? "bg-black text-white"
                      : "bg-white/80 hover:bg-black hover:text-white"
                  }`}
                >
                  <Heart
                    size={18}
                    fill={
                      isInWishlist(product.id)
                        ? "currentColor"
                        : "none"
                    }
                  />
                </button>
              </div>

              <div className="mt-4">
                <h2 className="text-sm font-medium md:text-base">
                  {product.title}
                </h2>

                <p className="mt-1 text-sm text-neutral-500">
                  ₹
                  {(
                    typeof product.price === "number"
                      ? product.price
                      : Number(
                          String(product.price).replace(/[^0-9.]/g, "")
                        )
                  ).toLocaleString("en-IN")}
                  .00
                </p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}