"use client";

import { useCart } from "@/app/context/CartContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function CheckoutPage() {
  const { cart, total } = useCart();
  const router = useRouter();

  // Redirect back to cart if the cart is empty
  useEffect(() => {
    if (cart.length === 0) {
      router.push("/cart");
    }
  }, [cart, router]);

  const handleCheckout = async () => {
    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(cart),
      });

      const data = await response.json();

      console.log(data);

      if (!response.ok) {
        throw new Error(data.error);
      }

      window.location.href = data.url;

      const { url } = await response.json();

      if (url) {
        window.location.href = url;
      }
    } catch (error) {
      console.error("Checkout Error:", error);
      alert("Unable to start checkout. Please try again.");
    }
  };

  return (
    <main className="mx-auto max-w-5xl px-6 pt-32 pb-20">
      <h1 className="mb-12 text-5xl font-light tracking-tight">
        Checkout
      </h1>

      <div className="rounded-2xl border p-8 shadow-sm">
        <h2 className="mb-8 text-2xl font-medium">
          Order Summary
        </h2>

        <div className="space-y-6">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between border-b pb-4"
            >
              <div>
                <h3 className="text-lg font-medium">{item.name}</h3>

                <p className="text-neutral-500">
                  ₹{item.price.toFixed(2)} × {item.quantity}
                </p>
              </div>

              <p className="font-medium">
                ₹{(item.price * item.quantity).toFixed(2)}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 flex items-center justify-between border-t pt-6">
          <span className="text-xl font-medium">Total</span>

          <span className="text-2xl font-semibold">
            ₹{total.toFixed(2)}
          </span>
        </div>

        <button
          onClick={handleCheckout}
          className="mt-8 w-full rounded-full bg-black px-8 py-4 text-lg text-white transition hover:bg-neutral-800"
        >
          Pay Securely
        </button>
      </div>
    </main>
  );
}