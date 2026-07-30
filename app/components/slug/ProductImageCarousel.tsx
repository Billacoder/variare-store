"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { useEffect, useState } from "react";

type Props = {
  images: string[];
  title: string;
};

export default function ProductImageCarousel({
  images,
  title,
}: Props) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    onSelect();
    emblaApi.on("select", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  return (
    <div className="relative">
      <div
        className="overflow-hidden rounded-2xl"
        ref={emblaRef}
      >
        <div className="flex">
          {images.map((image, index) => (
            <div
              key={index}
              className="min-w-0 flex-[0_0_100%]"
            >
              <Image
                src={image}
                alt={title}
                width={500}
                height={650}
                className="aspect-[3/4] w-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {images.length > 1 && (
        <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
          {images.map((_, index) => (
            <div
              key={index}
              className={`h-2 w-2 rounded-full transition ${
                selectedIndex === index
                  ? "bg-white"
                  : "bg-white/40"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}