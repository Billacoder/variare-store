import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { resend } from "@/lib/resend";
import OrderEmail from "@/emails/OrderEmail";

export async function POST(request) {
  try {
    const { customer, cart } = await request.json();

    if (!customer || !cart || cart.length === 0) {
      return NextResponse.json(
        { error: "Invalid order." },
        { status: 400 }
      );
    }

    const total = cart.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );

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

    try {
      await resend.emails.send({
        from: "Variare Orders <onboarding@resend.dev>",
        to: "billamuti3@gmail.com",
        subject: `🛍️ New Order #${order.id}`,

        react: (
          <OrderEmail
            customer={{
              name: order.name,
              email: order.email || "Not provided",
              phone: order.phone,
            }}
            address={[
              order.address,
              order.apartment,
              `${order.city}, ${order.state}`,
              order.pincode,
            ]
              .filter(Boolean)
              .join(", ")}
            items={order.items.map((item) => ({
              title: item.productName,
              size: item.size || undefined,
              quantity: item.quantity,
              price: item.price,
            }))}
            total={order.total}
          />
        ),
      });
    } catch (emailError) {
      console.error("Failed to send email:", emailError);
    }

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