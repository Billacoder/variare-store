"use client";

import { useState } from "react";

import { products } from "@/app/data/products";

import ProductSelector from "@/app/components/custom/ProductSelector";
import MeasurementSection from "@/app/components/custom/MeasurementSection";
import UploadBox from "@/app/components/custom/UploadBox";
import NotesSection from "@/app/components/custom/NotesSection";
import ContactForm from "@/app/components/custom/ContactForm";
import TimelineSelect from "@/app/components/custom/TimelineSelect";
import Agreement from "@/app/components/custom/Agreement";
import SubmitSection from "@/app/components/custom/SubmitSection";

export default function CustomPage() {
  const [selectedProduct, setSelectedProduct] = useState("");

  const [measurements, setMeasurements] = useState<Record<string, string>>({});

  const [uploadedImages, setUploadedImages] = useState<File[]>([]);

  const [notes, setNotes] = useState("");

  const [timeline, setTimeline] = useState("No Rush");

  const [agreed, setAgreed] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleMeasurement = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setMeasurements((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (
  e: React.FormEvent<HTMLFormElement>
) => {
  e.preventDefault();

  console.log("Sending:", {
    selectedProduct,
    measurements,
    uploadedImages,
    notes,
    form,
    timeline,
    agreed,
  });

  try {
    const response = await fetch("/api/custom-order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        selectedProduct,
        measurements,
        uploadedImages,
        notes,
        form,
        timeline,
        agreed,
      }),
    });

    const data = await response.json();

    console.log("Status:", response.status);
    console.log("API Response:", data);

    if (!response.ok) {
      throw new Error(data.error || "Failed to submit request.");
    }

    alert("Custom order submitted!");

    // Optional: Reset the form
    setSelectedProduct("");
    setMeasurements({});
    setUploadedImages([]);
    setNotes("");
    setTimeline("No Rush");
    setAgreed(false);
    setForm({
      name: "",
      email: "",
      phone: "",
    });
  } catch (error) {
    console.error("Submit Error:", error);
  }
};

console.log("selectedProduct:", selectedProduct);

  return (
    <form onSubmit={handleSubmit}>
      <main className="min-h-screen bg-stone-50 pt-32 pb-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="mb-20 text-center">
            <p className="uppercase tracking-[0.35em] text-neutral-500">
              Custom Crochet
            </p>

            <h1 className="mt-4 font-serif text-5xl md:text-7xl">
              Design Your Piece
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-neutral-600">
              Every custom order is handmade with care. Tell us your vision
              and we'll create something that's uniquely yours.
            </p>
          </div>

          <div className="space-y-16 rounded-3xl bg-white p-8 shadow-sm md:p-14">
            <ProductSelector
              products={products as any}
              selectedProduct={selectedProduct}
              setSelectedProduct={setSelectedProduct}
            />

            <MeasurementSection
              selectedProduct={selectedProduct}
              measurements={measurements}
              handleMeasurement={handleMeasurement}
            />

            <UploadBox
              uploadedImages={uploadedImages}
              setUploadedImages={setUploadedImages}
            />

            <NotesSection
              notes={notes}
              setNotes={setNotes}
            />

            <ContactForm
              form={form}
              handleChange={handleChange}
            />

            <TimelineSelect
              timeline={timeline}
              setTimeline={setTimeline}
            />

            <Agreement
              agreed={agreed}
              setAgreed={setAgreed}
            />

            <SubmitSection agreed={agreed} />
          </div>
        </div>
      </main>
    </form>
  );
}