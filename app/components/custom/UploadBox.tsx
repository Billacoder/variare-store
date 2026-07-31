"use client";

import { Upload, X } from "lucide-react";
import Image from "next/image";
import { ChangeEvent, DragEvent, useRef } from "react";

type UploadBoxProps = {
  uploadedImages: File[];
  setUploadedImages: React.Dispatch<React.SetStateAction<File[]>>;
};

export default function UploadBox({
  uploadedImages,
  setUploadedImages,
}: UploadBoxProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFiles = (files: FileList | null) => {
    if (!files) return;

    setUploadedImages((prev) => [...prev, ...Array.from(files)]);
  };

  const removeImage = (index: number) => {
    setUploadedImages((prev) => prev.filter((_, i) => i !== index));
  };

  const onDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    handleFiles(e.dataTransfer.files);
  };

  return (
    <section className="space-y-8">
      <div>
        <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">
          Step 3
        </p>

        <h2 className="mt-2 font-serif text-3xl">
          Inspiration Images
        </h2>

        <p className="mt-3 max-w-xl text-neutral-600">
          Upload reference photos, Pinterest screenshots, sketches, or
          anything that helps us understand your vision.
        </p>
      </div>

      <div
        onClick={() => inputRef.current?.click()}
        onDrop={onDrop}
        onDragOver={(e) => e.preventDefault()}
        className="cursor-pointer rounded-3xl border-2 border-dashed border-neutral-300 p-12 text-center transition hover:border-black"
      >
        <Upload
          className="mx-auto mb-4 text-neutral-400"
          size={36}
        />

        <p className="font-medium">
          Click or drag images here
        </p>

        <p className="mt-2 text-sm text-neutral-500">
          PNG, JPG or WEBP
        </p>

        <input
          ref={inputRef}
          hidden
          type="file"
          multiple
          accept="image/*"
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            handleFiles(e.target.files)
          }
        />
      </div>

      {uploadedImages.length > 0 && (
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {uploadedImages.map((file, index) => (
            <div
              key={index}
              className="group relative aspect-square overflow-hidden rounded-2xl"
            >
              <Image
                src={URL.createObjectURL(file)}
                alt={file.name}
                fill
                className="object-cover"
              />

              <button
                type="button"
                onClick={() => removeImage(index)}
                className="absolute right-2 top-2 rounded-full bg-white p-1 shadow transition hover:bg-black hover:text-white"
              >
                <X size={16} />
              </button>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}