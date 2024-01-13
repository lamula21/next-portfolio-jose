"use client"

import { MainButton } from "@/components/MainButton"
import { CashappIcon, CoffeeIcon, StripeIcon } from "@/components/icons"
import { Button } from "@/components/ui/button"
import {
	Drawer,
	DrawerClose,
	DrawerContent,
	DrawerDescription,
	DrawerFooter,
	DrawerHeader,
	DrawerNested,
	DrawerTitle,
	DrawerTrigger,
} from "@/components/ui/drawer"
import Image from "next/image"
import { PaymentButton } from "./components/PaymentButton"

import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"
import { toast } from "sonner"

export function PaymentDrawer() {
	const searchParams = useSearchParams()

	useEffect(() => {
		if (searchParams.get("success")) {
			toast.success("OMG THANK YOU. Your payment was processed!")
		}

		if (searchParams.get("canceled")) {
			toast.error("Oops! Payment was canceled.")
		}
	}, [searchParams])

	const stripeCheckout = async () => {
		const response = await fetch("api/checkout", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ quantity: 1 }),
		})

		const { url } = await response.json()

		window.location = url
	}

	return (
		<Drawer>
			<DrawerTrigger asChild>
				<MainButton className="group">
					Buy me a Coffee
					<CoffeeIcon className="w-5 h-5 group-hover:scale-[120%] transition" />
				</MainButton>
			</DrawerTrigger>

			<DrawerContent>
				<div className="mx-auto w-full max-w-sm">
					<DrawerHeader>
						<DrawerTitle>Buy me a Coffe ☕</DrawerTitle>
						<DrawerDescription>
							Your donation will motivate me to do more cool stuff!!
						</DrawerDescription>
					</DrawerHeader>

					<div className="p-4 pb-0 flex flex-col gap-4">
						<DrawerNested>
							<DrawerTrigger>
								<PaymentButton>
									<CashappIcon className="w-8 h-8 text-[#61d25e]" />
									CashApp
								</PaymentButton>
							</DrawerTrigger>

							<DrawerContent>
								<div className="mx-auto w-full max-w-sm">
									<div className="bg-white p-4 rounded-2xl mt-4">
										<Image
											src="/icons/cashappqr.png"
											width={500}
											height={500}
											alt="Cashapp logo"
										/>
									</div>

									<p className=" w-full text-center text-muted-foreground mt-2">
										SCAN TO PAY WITH CASH APP
									</p>

									<DrawerHeader className="w-full flex flex-col items-center">
										<DrawerTitle className="text-3xl">
											Jose Valdivia
										</DrawerTitle>
										<DrawerDescription className="text-lg">
											$josevaldivr
										</DrawerDescription>
									</DrawerHeader>
								</div>
							</DrawerContent>
						</DrawerNested>

						<PaymentButton onClick={stripeCheckout} className="cursor-pointer">
							<StripeIcon className="w-16 h-auto" />
						</PaymentButton>

						<PaymentButton
							href="https://www.paypal.com/paypalme/josevaldivr"
							target="_blank"
							rel="noopener noreferrer"
						>
							<Image
								src={"/icons/paypal.webp"}
								alt="Paypal logo"
								width={240}
								height={240}
								className="w-24"
							/>
						</PaymentButton>
					</div>

					<DrawerFooter>
						<DrawerClose asChild>
							<Button variant="secondary" className="">
								Cancel
							</Button>
						</DrawerClose>
					</DrawerFooter>
				</div>
			</DrawerContent>
		</Drawer>
	)
}
