import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { resend } from "@/lib/resend";
import CustomOrderEmail from "@/emails/CustomRequestEmail";

export async function POST(request) {
  try {
    const {
      selectedProduct,
      measurements,
      uploadedImages,
      notes,
      form,
      timeline,
      agreed,
    } = await request.json();

    if (!selectedProduct) {
      return NextResponse.json(
        { error: "Please select a product." },
        { status: 400 }
      );
    }

    if (!form?.name || !form?.email || !form?.phone) {
      return NextResponse.json(
        { error: "Please complete your contact details." },
        { status: 400 }
      );
    }

    if (!agreed) {
      return NextResponse.json(
        { error: "Please accept the agreement." },
        { status: 400 }
      );
    }

    const customOrder = await prisma.customOrder.create({
      data: {
        product: selectedProduct,
        measurements,
        notes,
        timeline,
        agreed,

        name: form.name,
        email: form.email,
        phone: form.phone,

        imageUrls: uploadedImages ?? [],
      },
    });

    await resend.emails.send({
      from: "Variare Orders <onboarding@resend.dev>",
      to: "billamuti3@gmail.com",
      subject: `🧶 New Custom Order #${customOrder.id}`,
      react: (
        <CustomOrderEmail
          order={{
            id: customOrder.id,
            product: customOrder.product,
            measurements: customOrder.measurements,
            notes: customOrder.notes,
            timeline: customOrder.timeline,
          }}
          customer={{
            name: customOrder.name,
            email: customOrder.email,
            phone: customOrder.phone,
          }}
        />
      ),
    });

    return NextResponse.json({
      success: true,
      orderId: customOrder.id,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        error: "Something went wrong while creating your custom order.",
      },
      { status: 500 }
    );
  }
}