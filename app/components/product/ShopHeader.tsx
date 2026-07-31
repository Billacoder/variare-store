"use client";

import Heading from "@/app/components/ui/Heading";
import Paragraph from "@/app/components/ui/Paragraph";

export default function ShopHeader() {
  return (
    <div className="mb-8">
      <Heading className="mt-3">
        Shop All
      </Heading>

      <Paragraph className="text-black">
        Explore every handcrafted crochet piece from the
        Variare collection.
      </Paragraph>
    </div>
  );
}