import Link from "next/link";
import Image from "next/image";

import { products } from "@/app/data/products";

export default function RelatedProducts({
  currentId,
  collection,
}: {
  currentId: number;
  collection: string;
}) {
  const related = products
    .filter(
      (product) =>
        product.collection === collection &&
        product.id !== currentId
    )
    .slice(0, 4);

  if (related.length === 0) return null;

  return (
    <section className="mt-28">
      <div className="mb-10">
        <p className="text-sm uppercase tracking-[0.35em] text-neutral-400">
          Discover More
        </p>

        <h2 className="mt-3 text-4xl font-light">
          You May Also Like
        </h2>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {related.map((product) => (
          <Link
            key={product.id}
            href={`/product/${product.slug}`}
            className="group"
          >
            <div className="overflow-hidden rounded-3xl">
              <Image
                src={product.images[0]}
                alt={product.title}
                width={600}
                height={600}
                className="aspect-square w-full object-cover transition duration-500 group-hover:scale-105"
              />
            </div>

            <h3 className="mt-5 text-lg">
              {product.title}
            </h3>

            <p className="mt-2 text-neutral-500">
              ₹{product.price.toLocaleString("en-IN")}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}