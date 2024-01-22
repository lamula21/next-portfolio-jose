import { GradientButton } from "@/components/GradientButton"
import { MainButton } from "@/components/MainButton"
import { ContactIcon, DownloadIcon } from "@/components/icons"
import { PaymentDrawer } from "@/features/payment/Payment"

export function ButtonList() {
  return (
    <div className="flex animate-slowfade gap-5">
      <GradientButton className="group">
        {"Let's Connect!"}
        <ContactIcon className="h-4 w-4 transition group-hover:translate-x-[1px] group-hover:translate-y-[-1px]" />
      </GradientButton>

      <MainButton className="group">
        Download CV
        <DownloadIcon className="h-5 w-5 transition group-hover:translate-y-[2px]" />
      </MainButton>

      <PaymentDrawer />
    </div>
  )
}
