import { OTPInput, OTPInputContext } from "input-otp"
import * as React from "react"

import { cn } from "@/lib/utils"

/**
 * Props for the sticker OTP input root.
 */
type InputOtpProps = React.ComponentPropsWithoutRef<typeof OTPInput>

/**
 * Props for grouping OTP slots.
 */
type InputOtpGroupProps = React.ComponentProps<"div">

/**
 * Props for a single OTP slot.
 */
interface InputOtpSlotProps extends React.ComponentProps<"div"> {
  /**
   * Zero-based slot index.
   */
  index: number
}

type InputOtpSeparatorProps = React.ComponentProps<"div">

/**
 * Sticker OTP root for one-time codes and short verification inputs.
 */
const InputOtpRoot = React.forwardRef<
  React.ElementRef<typeof OTPInput>,
  InputOtpProps
>(({ className, containerClassName, ...props }, ref) => (
  <OTPInput
    className={cn("disabled:cursor-not-allowed", className)}
    containerClassName={cn(
      "flex items-center gap-2 has-[:disabled]:opacity-55",
      containerClassName,
    )}
    data-slot="input-otp"
    ref={ref}
    {...props}
  />
))
InputOtpRoot.displayName = "InputOtp"

/**
 * OTP slot group.
 */
function InputOtpGroup({ className, ...props }: InputOtpGroupProps) {
  return (
    <div
      className={cn("flex items-center gap-2", className)}
      data-slot="input-otp-group"
      {...props}
    />
  )
}

/**
 * Single OTP character slot.
 */
function InputOtpSlot({ className, index, ...props }: InputOtpSlotProps) {
  const inputOtpContext = React.useContext(OTPInputContext)
  const slot = inputOtpContext.slots[index]

  return (
    <div
      className={cn(
        "relative flex size-11 items-center justify-center rounded-su-lg border-2 border-su-ink bg-su-surface text-sm font-black text-su-ink shadow-su-sm transition duration-150",
        slot?.isActive && "shadow-su-md ring-[2px] ring-su-ring/65",
        className,
      )}
      data-active={slot?.isActive}
      data-slot="input-otp-slot"
      {...props}
    >
      {slot?.char}
      {slot?.hasFakeCaret ? (
        <div
          className="pointer-events-none absolute inset-0 flex items-center justify-center"
          data-slot="input-otp-caret"
        >
          <div className="h-5 w-px animate-pulse bg-su-ink" />
        </div>
      ) : null}
    </div>
  )
}

/**
 * Visual separator between OTP slot groups.
 */
function InputOtpSeparator({ className, ...props }: InputOtpSeparatorProps) {
  return (
    <div
      className={cn("h-0.5 w-4 rounded-full bg-su-ink", className)}
      data-slot="input-otp-separator"
      role="separator"
      {...props}
    />
  )
}

/**
 * Sticker OTP root for one-time codes and short verification inputs.
 */
const InputOtp = Object.assign(InputOtpRoot, {
  Group: InputOtpGroup,
  Separator: InputOtpSeparator,
  Slot: InputOtpSlot,
})

export {
  InputOtp,
  InputOtpGroup,
  InputOtpRoot,
  InputOtpSeparator,
  InputOtpSlot,
  type InputOtpGroupProps,
  type InputOtpProps,
  type InputOtpSeparatorProps,
  type InputOtpSlotProps,
}
