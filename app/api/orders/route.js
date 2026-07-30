import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(request) {
	try {
		const { customer, cart } = await request.json();

		if (!customer || !cart || cart.length === 0) {
			return NextResponse.json(
				{ error: "Invalid order." },
				{ status: 400 }
			);
		}

		// Calculate total on the server
		const total = cart.reduce(
			(sum, item) => sum + item.price * item.quantity,
			0
		);

		// Save the order to the database
		const order = await prisma.order.create({
			data: {
				name: customer.name,
				phone: customer.phone,
				email: customer.email || null,
				address: customer.address,
				apartment: customer.apartment || null,
				city: customer.city,
				state: customer.state,
				pincode: customer.pincode,
				total,

				items: {
					create: cart.map((item) => ({
						productId: String(item.id),
						productName: item.name,
						price: item.price,
						quantity: item.quantity,
						size: item.size || null,
					})),
				},
			},
			include: {
				items: true,
			},
		});

		return NextResponse.json({
			success: true,
			orderId: order.id,
		});
	} catch (error) {
		console.error("Order creation failed:", error);

		return NextResponse.json(
			{
				success: false,
				error: "Something went wrong while creating your order.",
			},
			{ status: 500 }
		);
	}
}