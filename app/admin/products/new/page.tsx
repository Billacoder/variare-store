"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Upload, Plus, X } from "lucide-react";

const collections = [
  "wearables",
  "bags",
  "beanies",
  "blankets",
  "crochet-plush",
  "little-knits",
];

export default function NewProductPage() {
  const [images, setImages] = useState<File[]>([]);

  const [form, setForm] = useState({
    title: "",
    slug: "",
    collection: "wearables",
    price: "",
    description: "",
    bestSeller: false,
  });

  const handleImages = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;

    setImages((prev) => [...prev, ...Array.from(e.target.files)]);
  };

  const removeImage = (index: number) => {
    setImages(images.filter((_, i) => i !== index));
  };

  const handleSave = () => {
    console.log({
      ...form,
      images,
    });

    alert("Product saved (UI only for now).");
  };

  return (
    <main className="mx-auto max-w-5xl">

      <Link
        href="/admin/products"
        className="mb-8 inline-flex items-center gap-2 text-neutral-500 hover:text-black"
      >
        <ArrowLeft size={18} />
        Back to Products
      </Link>

      <h1 className="text-5xl font-light">
        New Product
      </h1>

      <p className="mt-3 text-neutral-500">
        Create a new product for your store.
      </p>

      <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_350px]">

        {/* LEFT */}

        <div className="space-y-8">

          <div className="rounded-3xl border bg-white p-8">

            <h2 className="mb-6 text-xl font-medium">
              Basic Information
            </h2>

            <div className="space-y-5">

              <input
                placeholder="Product Title"
                value={form.title}
                onChange={(e) =>
                  setForm({
                    ...form,
                    title: e.target.value,
                  })
                }
                className="w-full rounded-xl border p-4"
              />

              <input
                placeholder="Slug"
                value={form.slug}
                onChange={(e) =>
                  setForm({
                    ...form,
                    slug: e.target.value,
                  })
                }
                className="w-full rounded-xl border p-4"
              />

              <textarea
                rows={6}
                placeholder="Description..."
                value={form.description}
                onChange={(e) =>
                  setForm({
                    ...form,
                    description: e.target.value,
                  })
                }
                className="w-full rounded-xl border p-4"
              />

            </div>

          </div>

          <div className="rounded-3xl border bg-white p-8">

            <h2 className="mb-6 text-xl font-medium">
              Images
            </h2>

            <label className="flex h-44 cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed">

              <Upload size={34} />

              <span className="mt-3">
                Upload Product Images
              </span>

              <input
                type="file"
                multiple
                hidden
                onChange={handleImages}
              />

            </label>

            {images.length > 0 && (
              <div className="mt-8 grid grid-cols-3 gap-4">

                {images.map((image, index) => (
                  <div
                    key={index}
                    className="relative overflow-hidden rounded-xl border"
                  >
                    <img
                      src={URL.createObjectURL(image)}
                      className="aspect-square w-full object-cover"
                    />

                    <button
                      onClick={() => removeImage(index)}
                      className="absolute right-2 top-2 rounded-full bg-white p-2"
                    >
                      <X size={16} />
                    </button>

                  </div>
                ))}

              </div>
            )}

          </div>

        </div>

        {/* RIGHT */}

        <div className="space-y-8">

          <div className="rounded-3xl border bg-white p-8">

            <h2 className="mb-6 text-xl font-medium">
              Details
            </h2>

            <div className="space-y-5">

              <select
                value={form.collection}
                onChange={(e) =>
                  setForm({
                    ...form,
                    collection: e.target.value,
                  })
                }
                className="w-full rounded-xl border p-4"
              >
                {collections.map((collection) => (
                  <option
                    key={collection}
                    value={collection}
                  >
                    {collection}
                  </option>
                ))}
              </select>

              <input
                type="number"
                placeholder="Price"
                value={form.price}
                onChange={(e) =>
                  setForm({
                    ...form,
                    price: e.target.value,
                  })
                }
                className="w-full rounded-xl border p-4"
              />

              <label className="flex items-center justify-between rounded-xl border p-4">

                Best Seller

                <input
                  type="checkbox"
                  checked={form.bestSeller}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      bestSeller: e.target.checked,
                    })
                  }
                />

              </label>

            </div>

          </div>

          <button
            onClick={handleSave}
            className="flex w-full items-center justify-center gap-2 rounded-full bg-black py-4 text-white"
          >
            <Plus size={18} />
            Save Product
          </button>

        </div>

      </div>

    </main>
  );
}