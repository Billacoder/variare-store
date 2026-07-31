"use client";

import Link from "next/link";
import Image from "next/image";
import { useCart } from "@/app/context/CartContext";

export default function CartPage() {
  const {
    cart,
    total,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
  } = useCart();

  if (cart.length === 0) {
    return (
      <main className="mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 pt-36 pb-24">
        <h1 className="text-5xl font-light tracking-tight md:text-6xl">
          Shopping Cart
        </h1>

        <p className="mt-6 max-w-md text-center leading-8 text-neutral-500">
          Your cart is currently empty. Browse our handcrafted crochet
          collection and add your favourite pieces.
        </p>

        <Link
          href="/shop"
          className="mt-10 rounded-full border border-black px-8 py-3 text-xs font-medium uppercase tracking-[0.3em] transition-all duration-300 hover:bg-black hover:text-white"
        >
          Continue Shopping
        </Link>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-7xl px-6 pt-36 pb-24">
      <div className="mb-16">
        
        <h1 className="mt-4 text-5xl font-light tracking-tight md:text-6xl">
          Shopping Cart
        </h1>
      </div>

      <div className="grid gap-16 lg:grid-cols-[1fr_380px]">
        {/* Cart Items */}
        <div className="space-y-8">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex flex-col gap-8 rounded-3xl border border-neutral-200 bg-white p-8 transition-all duration-300 hover:border-neutral-300 hover:shadow-lg md:flex-row md:items-center md:justify-between"
            >
              <div className="flex items-center gap-6">
                <div className="relative h-36 w-36 overflow-hidden rounded-2xl bg-neutral-100">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover transition duration-500 hover:scale-105"
                  />
                </div>

                <div>
                  <h2 className="text-2xl font-light tracking-tight">
                    {item.name}
                  </h2>

                  <p className="mt-3 text-lg font-medium text-neutral-900">
                    ₹{item.price.toFixed(2)}
                  </p>

                  <div className="mt-6 inline-flex items-center rounded-full border border-neutral-300 bg-white">
                    <button
                      onClick={() => decreaseQuantity(item.id)}
                      className="px-4 py-2 transition hover:bg-neutral-100"
                    >
                      −
                    </button>

                    <span className="min-w-10 text-center text-sm font-medium">
                      {item.quantity}
                    </span>

                    <button
                      onClick={() => increaseQuantity(item.id)}
                      className="px-4 py-2 transition hover:bg-neutral-100"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>

              <div className="text-left md:text-right">
                <p className="text-xl font-medium text-neutral-900">
                  ₹{item.price.toFixed(2)}
                </p>

                {item.size && (
                  <p className="mt-3 text-xs uppercase tracking-[0.2em] text-neutral-500">
                    Size{" "}
                    <span className="font-medium text-neutral-900">
                      {item.size}
                    </span>
                  </p>
                )}

                <button
                  onClick={() => removeFromCart(item.id)}
                  className="mt-6 text-sm text-neutral-500 transition hover:text-black"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="sticky top-28 h-fit rounded-3xl border border-neutral-200 bg-white p-10 shadow-sm">
          <h2 className="text-2xl font-light tracking-tight">
            Order Summary
          </h2>

          <div className="mt-8 border-t border-neutral-200 pt-6">
            <div className="flex justify-between text-lg">
              <span className="text-neutral-600">Total</span>

              <span className="font-semibold text-neutral-900">
                ₹{total.toFixed(2)}
              </span>
            </div>
          </div>

          <Link
            href="/checkout"
            className="mt-10 flex w-full items-center justify-center rounded-full bg-black px-8 py-4 text-xs font-medium uppercase tracking-[0.3em] text-white transition-all duration-300 hover:bg-neutral-800"
          >
            Proceed to Checkout
          </Link>

          <Link
            href="/shop"
            className="mt-6 block text-center text-sm text-neutral-500 transition hover:text-black"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    </main>
  );
}