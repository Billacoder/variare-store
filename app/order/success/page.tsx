"use client";

import Link from "next/link";
import { CheckCircle2, MessageCircle } from "lucide-react";

export default function OrderSuccessPage() {
	return (
		<div className="flex min-h-screen items-center justify-center bg-white px-6">
			<div className="w-full max-w-lg rounded-3xl border border-neutral-200 p-10 text-center shadow-sm">
				<CheckCircle2 className="mx-auto h-16 w-16 text-green-600" />

				<h1 className="mt-6 text-3xl font-medium text-neutral-900">
					Order Placed Successfully
				</h1>

				<p className="mt-4 text-neutral-600">
					Thank you for shopping with Variare.
				</p>

				<p className="mt-2 text-neutral-600">
					Your order has been saved successfully.
				</p>

				<div className="mt-8 rounded-2xl bg-neutral-100 p-5">
					<p className="text-sm uppercase tracking-widest text-neutral-500">
						Order Number
					</p>

					<p className="mt-2 text-2xl font-semibold">
						Coming Soon...
					</p>
				</div>

				<div className="mt-10 flex flex-col gap-4">
					<button
						className="inline-flex items-center justify-center gap-2 rounded-full bg-black px-6 py-3 text-white transition hover:bg-neutral-800"
					>
						<MessageCircle className="h-5 w-5" />
						Continue to WhatsApp
					</button>

					<Link
						href="/"
						className="rounded-full border border-neutral-300 px-6 py-3 transition hover:bg-neutral-100"
					>
						Return Home
					</Link>
				</div>
			</div>
		</div>
	);
}