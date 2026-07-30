import Link from "next/link";
import Image from "next/image";
import { Plus, Pencil, Trash2 } from "lucide-react";

import { products } from "@/app/data/products";

export default function ProductsPage() {
  return (
    <main>
      <div className="mb-10 flex items-center justify-between">
        <div>
          <h1 className="text-5xl font-light">
            Products
          </h1>

          <p className="mt-2 text-neutral-500">
            Manage your catalogue.
          </p>
        </div>

        <Link
          href="/admin/products/new"
          className="flex items-center gap-2 rounded-full bg-black px-6 py-3 text-white transition hover:bg-neutral-800"
        >
          <Plus size={18} />
          New Product
        </Link>
      </div>

      <div className="overflow-hidden rounded-3xl border bg-white">

        <div className="grid grid-cols-[90px_1.8fr_1fr_140px_170px] border-b bg-neutral-50 px-8 py-5 text-sm font-medium uppercase tracking-wider text-neutral-500">

          <div>Image</div>

          <div>Product</div>

          <div>Collection</div>

          <div>Price</div>

          <div className="text-right">
            Actions
          </div>

        </div>

        {products.map((product) => (
          <div
            key={product.id}
            className="grid grid-cols-[90px_1.8fr_1fr_140px_170px] items-center border-b px-8 py-6 last:border-none"
          >
            <Image
              src={product.images[0]}
              alt={product.title}
              width={70}
              height={70}
              className="rounded-xl object-cover"
            />

            <div>
              <h2 className="font-medium">
                {product.title}
              </h2>

              <p className="mt-1 text-sm text-neutral-500">
                {product.slug}
              </p>
            </div>

            <p className="capitalize text-neutral-600">
              {product.collection}
            </p>

            <p className="font-medium">
              ₹{product.price.toLocaleString("en-IN")}
            </p>

            <div className="flex justify-end gap-2">

              <button className="rounded-lg border p-3 transition hover:bg-neutral-100">
                <Pencil size={18} />
              </button>

              <button className="rounded-lg border p-3 text-red-600 transition hover:bg-red-50">
                <Trash2 size={18} />
              </button>

            </div>

          </div>
        ))}
      </div>
    </main>
  );
}