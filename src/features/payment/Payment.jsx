"use client"

import { MainButton } from "@/components/buttons/MainButton"
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
import { useEffect } from "react"
import { toast } from "sonner"

export function PaymentDrawer() {
  const searchParams = useSearchParams()

  const stripeCheckout = async () => {
    const response = await fetch("/api/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ quantity: 1 }),
    })

    const { url } = await response.json()

    window.location = url
  }

  useEffect(() => {
    if (searchParams.get("success")) {
      toast.success(
        <div className="flex">
          Icon
          <div>
            <h1>Thank you for your donation!</h1>
            <p>
              Your support is greatly appreciated. You can see my courses{" "}
              <a href="/courses">here</a>
            </p>
          </div>
        </div>,
      )
    }

    if (searchParams.get("canceled")) {
      toast.error("Oops! Payment was canceled.")
    }
  }, [searchParams])

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <div>
          <MainButton className="group">
            Buy me a Coffee
            <CoffeeIcon className="h-5 w-5 transition will-change-transform group-hover:scale-[120%]" />
          </MainButton>
        </div>
      </DrawerTrigger>

      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle>Buy me a Coffe ☕</DrawerTitle>
            <DrawerDescription>
              Your donation will motivate me to do more cool stuff!!
            </DrawerDescription>
          </DrawerHeader>

          <div className="flex flex-col gap-4 p-4 pb-0">
            <DrawerNested>
              <DrawerTrigger>
                <PaymentButton>
                  <CashappIcon className="h-8 w-8 text-[#61d25e]" />
                  CashApp
                </PaymentButton>
              </DrawerTrigger>

              <DrawerContent>
                <div className="mx-auto w-full max-w-sm">
                  <div className="mt-4 rounded-2xl bg-white p-4">
                    <Image
                      src="/icons/cashappqr.png"
                      width={500}
                      height={500}
                      alt="Cashapp logo"
                    />
                  </div>

                  <p className=" mt-2 w-full text-center text-muted-foreground">
                    SCAN TO PAY WITH CASH APP
                  </p>

                  <DrawerHeader className="flex w-full flex-col items-center">
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
              <StripeIcon className="h-auto w-16" />
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
