import { NextRequest, NextResponse } from "next/server"
import Stripe from "stripe"

import { stripe } from "@/lib/stripe"

export async function POST(req: NextRequest) {
	const { quantity } = await req
		.json()
		.then((data) => data as { quantity: number })

	const line_items: Stripe.Checkout.SessionCreateParams.LineItem[] = [
		{
			quantity: quantity,
			price_data: {
				currency: "USD",
				product_data: {
					name: "A Donation of $2",
				},
				unit_amount: 2 * 100,
			},
		},
	]

	try {
		const session = await stripe.checkout.sessions.create({
			line_items,
			mode: "payment",
			billing_address_collection: "required",
			success_url: `${process.env.NEXT_PUBLIC_DOMAIN}/?success=1`,
			cancel_url: `${process.env.NEXT_PUBLIC_DOMAIN}/?canceled=1`,
		})

		return NextResponse.json({ url: session.url }, { status: 200 })
	} catch (error) {
		return NextResponse.json({ error: error.message }, { status: 500 })
	}
}
