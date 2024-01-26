import { GradientButton } from "@/components/buttons/GradientButton"
import { MainButton } from "@/components/buttons/MainButton"
import { ContactIcon, DownloadIcon } from "@/components/icons"
import { PaymentDrawer } from "@/features/payment/Payment"

export function ButtonList() {
  return (
    <div className="flex animate-slowfade gap-5 will-change-transform">
      <GradientButton className="group inline-flex h-12 px-4 py-6 text-sm md:px-5 md:py-7 md:text-base">
        <span className="hidden md:flex">{"Let's Connect!"}</span>
        <span className="flex md:hidden">{"Connect!"}</span>
        <ContactIcon className="h-4 w-4 transition group-hover:translate-x-[1px] group-hover:translate-y-[-1px]" />
      </GradientButton>

      <MainButton className="group inline-flex h-12 px-4 py-6 text-sm will-change-transform md:px-5 md:py-7 md:text-base">
        <span>Download CV</span>
        <DownloadIcon className="h-5 w-5 transition group-hover:translate-y-[2px]" />
      </MainButton>

      <PaymentDrawer />
    </div>
  )
}
