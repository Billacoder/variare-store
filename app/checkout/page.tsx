"use client";

import { useCart } from "@/app/context/CartContext";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function CheckoutPage() {
  const { cart, total } = useCart();
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const [customer, setCustomer] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    apartment: "",
    city: "",
    state: "",
    pincode: "",
  });

  useEffect(() => {
    if (cart.length === 0) {
      router.push("/cart");
    }
  }, [cart, router]);

    const handleCheckout = async () => {
    if (
      !customer.name ||
      !customer.phone ||
      !customer.address ||
      !customer.city ||
      !customer.state ||
      !customer.pincode
    ) {
      alert("Please complete the shipping information.");
      return;
    }

    try {
      setLoading(true);

      const response = await fetch("/api/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          customer,
          cart,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error);
      }

      if (data.url) {
        window.location.href = data.url;
      }
    } catch (error) {
      console.error(error);
      alert("Unable to start checkout.");
    } finally {
      setLoading(false);
    }
  };


    return (
    <main className="mx-auto max-w-6xl px-6 pt-32 pb-20">

      <h1 className="mb-12 text-5xl font-light tracking-tight">
        Checkout
      </h1>

      <div className="grid gap-12 lg:grid-cols-[1fr_400px]">

              <div className="rounded-2xl border p-8 shadow-sm">

          <h2 className="mb-8 text-2xl font-medium">
            Shipping Details
          </h2>

          <div className="space-y-5">

            <input
              placeholder="Full Name"
              value={customer.name}
              onChange={(e) =>
                setCustomer({
                  ...customer,
                  name: e.target.value,
                })
              }
              className="w-full rounded-lg border p-4"
            />

            <input
              placeholder="Phone Number"
              value={customer.phone}
              onChange={(e) =>
                setCustomer({
                  ...customer,
                  phone: e.target.value,
                })
              }
              className="w-full rounded-lg border p-4"
            />

            <input
              placeholder="Email (optional)"
              value={customer.email}
              onChange={(e) =>
                setCustomer({
                  ...customer,
                  email: e.target.value,
                })
              }
              className="w-full rounded-lg border p-4"
            />

            <input
              placeholder="Address"
              value={customer.address}
              onChange={(e) =>
                setCustomer({
                  ...customer,
                  address: e.target.value,
                })
              }
              className="w-full rounded-lg border p-4"
            />

            <input
              placeholder="Apartment / Landmark"
              value={customer.apartment}
              onChange={(e) =>
                setCustomer({
                  ...customer,
                  apartment: e.target.value,
                })
              }
              className="w-full rounded-lg border p-4"
            />

                        <div className="grid gap-4 md:grid-cols-3">

              <input
                placeholder="City"
                value={customer.city}
                onChange={(e) =>
                  setCustomer({
                    ...customer,
                    city: e.target.value,
                  })
                }
                className="rounded-lg border p-4"
              />

              <input
                placeholder="State"
                value={customer.state}
                onChange={(e) =>
                  setCustomer({
                    ...customer,
                    state: e.target.value,
                  })
                }
                className="rounded-lg border p-4"
              />

              <input
                placeholder="PIN Code"
                value={customer.pincode}
                onChange={(e) =>
                  setCustomer({
                    ...customer,
                    pincode: e.target.value,
                  })
                }
                className="rounded-lg border p-4"
              />

            </div>

          </div>

        </div>

        <div className="h-fit rounded-2xl border p-8 shadow-sm">

          <h2 className="mb-8 text-2xl font-medium">
            Order Summary
          </h2>

          <div className="space-y-6">

            {cart.map((item) => (
              <div
                key={`${item.id}-${item.size ?? "default"}`}
                className="border-b pb-4"
              >

                <div className="flex items-center justify-between">

                  <div>

                    <h3 className="text-lg font-medium">
                      {item.name}
                    </h3>

                    {item.size && (
                      <p className="mt-1 text-sm text-neutral-500">
                        Size: {item.size}
                      </p>
                    )}

                    <p className="mt-1 text-sm text-neutral-500">
                      ₹{item.price.toFixed(2)} × {item.quantity}
                    </p>

                  </div>

                  <p className="font-medium">
                    ₹{(item.price * item.quantity).toFixed(2)}
                  </p>

                </div>

              </div>
            ))}

          </div>

          <div className="mt-8 flex items-center justify-between border-t pt-6">
            <span className="text-xl font-medium">
              Total
            </span>

            <span className="text-2xl font-semibold">
              ₹{total.toFixed(2)}
            </span>
          </div>

          <button
            onClick={handleCheckout}
            disabled={loading}
            className="mt-8 w-full rounded-full bg-black px-8 py-4 text-white transition hover:bg-neutral-800 disabled:cursor-not-allowed disabled:bg-neutral-400"
          >
            {loading ? "Redirecting..." : "Proceed to Payment"}
          </button>

        </div>

      </div>

    </main>
  );
}