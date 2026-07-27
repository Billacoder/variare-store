"use client";

import Image from "next/image";
import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";
import {
  ChevronLeft,
  ChevronRight,
  Bookmark,
  ArrowRight,
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
    <section className="bg-stone-50 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">

        {/* Header */}

        <div className="mb-14 flex flex-col justify-between gap-8 md:flex-row md:items-end">

          <div>

            <p className="text-[11px] uppercase tracking-[0.45em] text-neutral-400">
              Best Sellers
            </p>

            <h2 className="mt-4 font-serif text-4xl md:text-6xl">
              Customer Favorites
            </h2>

          </div>

          <div className="hidden gap-3 md:flex">

            <button
              onClick={() => emblaApi?.scrollPrev()}
              className="rounded-full border border-neutral-300 p-3 transition hover:bg-black hover:text-white"
            >
              <ChevronLeft size={20} />
            </button>

            <button
              onClick={() => emblaApi?.scrollNext()}
              className="rounded-full border border-neutral-300 p-3 transition hover:bg-black hover:text-white"
            >
              <ChevronRight size={20} />
            </button>

          </div>

        </div>

        {/* Carousel */}

        <div
          ref={emblaRef}
          className="overflow-hidden"
        >
          <div className="flex gap-6">

            {bestSellers.map((product) => (

              <Link
                key={product.id}
                href={`/product/${product.slug}`}
                className="group flex-[0_0_78%] sm:flex-[0_0_46%] lg:flex-[0_0_320px]"
              >

                <div className="relative overflow-hidden rounded-3xl bg-neutral-100">

                  <Image
                    src={product.image}
                    alt={product.title}
                    width={500}
                    height={650}
                    className="aspect-[3/4] w-full object-cover transition duration-700 group-hover:scale-105"
                  />

                  <span className="absolute left-5 top-5 rounded-full bg-white/90 px-4 py-2 text-[10px] uppercase tracking-[0.35em] backdrop-blur">
                    Best Seller
                  </span>

                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();

                      toggleWishlist({
                        id: product.id,
                        name: product.title,
                        price: product.price,
                        image: product.image,
                      });
                    }}
                    className={`absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full backdrop-blur transition ${
                      isInWishlist(product.id)
                        ? "bg-black text-white"
                        : "bg-white/90 hover:bg-black hover:text-white"
                    }`}
                  >
                    <Bookmark
                      size={18}
                      fill={isInWishlist(product.id) ? "currentColor" : "none"}
                    />
                  </button>

                </div>

                <div className="mt-5">

                  <h3 className="font-medium text-lg">
                    {product.title}
                  </h3>

                  <p className="mt-2 text-neutral-500">
                    ₹{product.price.toLocaleString("en-IN")}.00
                  </p>

                </div>

              </Link>

            ))}

          </div>
        </div>

        {/* Bottom Link */}

        <div className="mt-14 flex justify-center">

          <Link
            href="/best-sellers"
            className="group flex items-center gap-3 text-sm uppercase tracking-[0.35em] text-neutral-600 transition hover:text-black"
          >
            View All Collection

            <ArrowRight
              size={16}
              className="transition group-hover:translate-x-1"
            />

          </Link>

        </div>

      </div>
    </section>
  );
}