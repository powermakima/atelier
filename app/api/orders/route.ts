import { NextResponse } from "next/server";

type IncomingOrder = {
  userId: string;
  items: Array<{ productId: string; quantity: number }>;
  shippingAddress: string;
};

export async function POST(request: Request) {
  const payload = (await request.json()) as IncomingOrder;

  return NextResponse.json(
    {
      message: "Order accepted",
      order: {
        id: `ord_${Date.now()}`,
        ...payload,
        status: "pending",
      },
      nextStep: "Persist order and items into PostgreSQL",
    },
    { status: 201 },
  );
}
