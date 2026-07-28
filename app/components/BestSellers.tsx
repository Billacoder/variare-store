"use client";

import Image from "next/image";
import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";
import {
  ChevronLeft,
  ChevronRight,
  Bookmark,
  ArrowUpRight,
} from "lucide-react";

import { products } from "@/app/data/products";
import { useWishlist } from "@/app/context/WishlistContext";

export default function BestSellers() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
    dragFree: true,
  });

  const { toggleWishlist, isInWishlist } = useWishlist();

  const bestSellers = products.filter((product) => product.bestSeller);

  return (
    <section className="bg-stone-50 py-8 md:py-12">
      {/* Header */}
      <div className="mb-5 px-5 md:px-3">
        <p className="text-[11px] uppercase tracking-[0.45em] text-neutral-400">
          Best Sellers
        </p>
      </div>

      <div className="relative">
        {/* Desktop Arrows */}
        <button
          onClick={() => emblaApi?.scrollPrev()}
          className="absolute left-3 top-36 z-20 hidden -translate-y-1/2 rounded-full border border-neutral-200 bg-white/90 p-3 shadow-md backdrop-blur-md transition-all duration-300 hover:scale-110 hover:bg-black hover:text-white md:flex"
        >
          <ChevronLeft size={22} />
        </button>

        <button
          onClick={() => emblaApi?.scrollNext()}
          className="absolute right-1 top-36 z-20 hidden -translate-y-1/2 rounded-full border border-neutral-200 bg-white/90 p-3 shadow-md backdrop-blur-md transition-all duration-300 hover:scale-110 hover:bg-black hover:text-white md:flex"
        >
          <ChevronRight size={22} />
        </button>

        {/* Carousel */}
        <div ref={emblaRef} className="overflow-hidden px-5 md:px-3">
          <div className="flex gap-4 md:gap-2">
            {bestSellers.map((product) => (
              <Link
                key={product.id}
                href={`/product/${product.slug}`}
                className="group flex-[0_0_78%] sm:flex-[0_0_46%] lg:flex-[0_0_250px]"
              >
                {/* Image */}
                <div className="relative overflow-hidden bg-neutral-100">
                  <Image
                    src={product.image}
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
                        price:
                          typeof product.price === "number"
                            ? product.price
                            : Number(
                                String(product.price).replace(/[^0-9.]/g, "")
                              ),
                        image: product.image,
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

                    <ArrowUpRight
                      size={15}
                      className="text-neutral-600"
                    />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="mt-8 flex justify-center px-5">
        <Link
          href="/best-sellers"
          className="w-full border border-neutral-900 py-3 text-center text-[11px] uppercase tracking-[0.3em] transition-all duration-300 hover:bg-neutral-900 hover:text-white md:w-auto md:px-8 md:text-xs md:tracking-[0.45em]"
        >
          View All Collection
        </Link>
      </div>
    </section>
  );
}