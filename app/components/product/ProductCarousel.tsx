"use client";

import { ReactNode } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type ProductCarouselProps = {
  children: ReactNode;
};

export default function ProductCarousel({
  children,
}: ProductCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
    dragFree: true,
  });

  return (
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
        <div className="flex gap-4 md:gap-2">{children}</div>
      </div>
    </div>
  );
}