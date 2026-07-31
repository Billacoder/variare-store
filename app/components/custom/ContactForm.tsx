"use client";

import { User } from "lucide-react";

type ContactFormProps = {
  form: {
    name: string;
    email: string;
    phone: string;
  };
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement>
  ) => void;
};

export default function ContactForm({
  form,
  handleChange,
}: ContactFormProps) {
  return (
    <section className="space-y-8">
      <div>
        <div className="flex items-center gap-3">
          <User className="text-neutral-400" size={24} />

          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">
              Step 5
            </p>

            <h2 className="mt-1 font-serif text-3xl">
              Your Contact Details
            </h2>
          </div>
        </div>

        <p className="mt-4 max-w-2xl text-neutral-600">
          We'll use these details to contact you about pricing,
          availability, and updates on your custom order.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="md:col-span-2">
          <label className="mb-2 block text-sm font-medium text-neutral-700">
            Full Name
          </label>

          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your full name"
            className="w-full rounded-2xl border border-neutral-300 px-5 py-4 outline-none transition focus:border-black focus:ring-2 focus:ring-black/5"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-neutral-700">
            Email Address
          </label>

          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="you@example.com"
            className="w-full rounded-2xl border border-neutral-300 px-5 py-4 outline-none transition focus:border-black focus:ring-2 focus:ring-black/5"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-neutral-700">
            Phone Number
          </label>

          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="+91 98765 43210"
            className="w-full rounded-2xl border border-neutral-300 px-5 py-4 outline-none transition focus:border-black focus:ring-2 focus:ring-black/5"
          />
        </div>
      </div>
    </section>
  );
}