import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2026-02-25.clover",
});

const PRODUCTS = {
  "openclaw-guide": {
    name: "OpenClaw Quick-Start: The Felix Playbook",
    description: "Step-by-step guide to building an autonomous AI business with OpenClaw. PDF, instant download.",
    amount: 1900, // $19.00
    mode: "payment" as const,
  },
  "aether-preorder": {
    name: "Aether SaaS Template — Pre-Order",
    description: "Premium dark glassmorphism Next.js 14 SaaS template. Includes Figma file. Delivered within 30 days.",
    amount: 4900, // $49.00
    mode: "payment" as const,
  },
};

export async function POST(req: NextRequest) {
  try {
    const { product } = await req.json();
    const p = PRODUCTS[product as keyof typeof PRODUCTS];
    if (!p) return NextResponse.json({ error: "Unknown product" }, { status: 400 });

    const origin = req.headers.get("origin") || "http://localhost:3000";

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: p.mode,
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: p.name,
              description: p.description,
            },
            unit_amount: p.amount,
          },
          quantity: 1,
        },
      ],
      success_url: `${origin}/${product === "openclaw-guide" ? "download" : "success"}?product=${product}`,
      cancel_url: `${origin}/${product === "openclaw-guide" ? "openclaw-guide" : "aether"}`,
    });

    return NextResponse.json({ url: session.url });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Checkout failed" }, { status: 500 });
  }
}
