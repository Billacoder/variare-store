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
      <main className="mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 pt-32 pb-20">
        <h1 className="text-5xl font-light tracking-tight">
          Shopping Cart
        </h1>

        <p className="mt-6 max-w-md text-center text-neutral-500">
          Your cart is currently empty. Browse our handcrafted crochet
          collection and add your favourite pieces.
        </p>

        <Link
          href="/shop"
          className="mt-10 rounded-full border border-black px-8 py-3 text-sm uppercase tracking-[0.25em] transition hover:bg-black hover:text-white"
        >
          Continue Shopping
        </Link>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-7xl px-6 pt-32 pb-20">
      <h1 className="mb-12 text-5xl font-light tracking-tight">
        Shopping Cart
      </h1>

      <div className="grid gap-12 lg:grid-cols-[1fr_350px]">
        {/* Cart Items */}
        <div className="space-y-8">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between border-b pb-6"
            >
              <div className="flex items-center gap-6">
                <div className="relative h-28 w-28 overflow-hidden rounded-lg">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <div>
                  <h2 className="text-xl font-medium">{item.name}</h2>

                  <p className="mt-1 text-neutral-500">
                    ₹{item.price.toFixed(2)}
                  </p>

                  <div className="mt-4 flex items-center gap-3">
                    <button
                      onClick={() => decreaseQuantity(item.id)}
                      className="flex h-8 w-8 items-center justify-center rounded-full border"
                    >
                      −
                    </button>

                    <span>{item.quantity}</span>

                    <button
                      onClick={() => increaseQuantity(item.id)}
                      className="flex h-8 w-8 items-center justify-center rounded-full border"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>

              <div className="text-right">
                <p className="mt-1 text-neutral-500">
                  ₹{item.price.toFixed(2)}
                </p>

          {item.size && (
            <p className="mt-1 text-sm uppercase tracking-wide text-neutral-500">
              Size: <span className="font-medium text-neutral-800">{item.size}</span>
            </p>
          )}
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="mt-3 text-sm text-red-500 hover:text-red-700"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="h-fit rounded-2xl border p-8 shadow-sm">
          <h2 className="text-2xl font-medium">
            Order Summary
          </h2>

          <div className="mt-8 flex justify-between text-lg">
            <span>Total</span>
            <span className="font-semibold">
              ₹{total.toFixed(2)}
            </span>
          </div>

          

          <Link
            href="/checkout"
            className="mt-8 flex w-full items-center justify-center rounded-full bg-black px-8 py-4 text-white transition hover:bg-neutral-800"
          >
            Proceed to Checkout
          </Link>

          <Link
            href="/shop"
            className="mt-4 block text-center text-sm text-neutral-500 hover:text-black"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    </main>
  );
}