import * as SwitchPrimitive from "@radix-ui/react-switch"
import * as React from "react"

import { cn } from "@/lib/utils"

type SwitchSize = "lg" | "md" | "sm"
type SwitchTone =
  | "danger"
  | "default"
  | "info"
  | "secondary"
  | "success"
  | "warning"
type SwitchVariant = "filled" | "outlined" | "quiet"

interface SwitchVariantOptions {
  className?: string
  disabled?: boolean
  size?: SwitchSize
  tone?: SwitchTone
  variant?: SwitchVariant
}

const switchSizeClassNames = {
  lg: {
    root: "h-8 w-15 rounded-full p-1",
    thumb: "size-6 data-[state=checked]:translate-x-6",
  },
  md: {
    root: "h-7 w-13 rounded-full p-1",
    thumb: "size-5 data-[state=checked]:translate-x-5",
  },
  sm: {
    root: "h-6 w-11 rounded-full p-0.5",
    thumb: "size-4 data-[state=checked]:translate-x-5",
  },
} satisfies Record<SwitchSize, { root: string; thumb: string }>

const switchToneClassNames = {
  danger: {
    checked: "data-[state=checked]:bg-su-fill-danger-strong",
    fill: "bg-su-fill-danger",
    quiet: "bg-su-fill-danger",
  },
  default: {
    checked: "data-[state=checked]:bg-su-fill-default",
    fill: "bg-su-fill-default-soft",
    quiet: "bg-su-surface-muted",
  },
  info: {
    checked: "data-[state=checked]:bg-su-fill-info",
    fill: "bg-su-fill-info",
    quiet: "bg-su-fill-info",
  },
  secondary: {
    checked: "data-[state=checked]:bg-su-fill-secondary",
    fill: "bg-su-fill-secondary",
    quiet: "bg-su-fill-secondary",
  },
  success: {
    checked: "data-[state=checked]:bg-su-fill-success",
    fill: "bg-su-fill-success",
    quiet: "bg-su-fill-success",
  },
  warning: {
    checked: "data-[state=checked]:bg-su-fill-warning",
    fill: "bg-su-fill-warning",
    quiet: "bg-su-fill-warning",
  },
} satisfies Record<
  SwitchTone,
  {
    checked: string
    fill: string
    quiet: string
  }
>

/**
 * Builds the sticker switch className from structure, tone, and size variants.
 */
const switchVariants = ({
  className,
  disabled,
  size = "md",
  tone = "default",
  variant = "outlined",
}: SwitchVariantOptions = {}) =>
  cn(
    "peer inline-flex shrink-0 cursor-pointer items-center border-2 border-su-ink bg-su-surface shadow-su-sm transition duration-150 outline-none focus-visible:shadow-su-md focus-visible:ring-[2px] focus-visible:ring-su-ring/65 aria-invalid:border-su-fg-danger aria-invalid:bg-su-fill-danger data-[state=checked]:shadow-su-md data-[state=unchecked]:bg-su-surface",
    disabled && "cursor-not-allowed opacity-55",
    switchSizeClassNames[size].root,
    switchToneClassNames[tone].checked,
    variant === "filled" && switchToneClassNames[tone].fill,
    variant === "quiet" &&
      cn("border-transparent shadow-none", switchToneClassNames[tone].quiet),
    className,
  )

/**
 * Props for the sticker switch root.
 * @remarks Wraps Radix Switch.Root and adds sticker size, tone, and variant props.
 */
interface SwitchProps extends Omit<
  React.ComponentPropsWithoutRef<typeof SwitchPrimitive.Root>,
  "className"
> {
  /**
   * Custom className for the switch root.
   */
  className?: string
  /**
   * Controls the switch track and thumb size.
   * @default "md"
   */
  size?: SwitchSize
  /**
   * Controls the semantic paper tone.
   * @default "default"
   */
  tone?: SwitchTone
  /**
   * Controls the switch border and fill emphasis.
   * @default "outlined"
   */
  variant?: SwitchVariant
}

/**
 * Sticker switch powered by Radix Switch.
 */
const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitive.Root>,
  SwitchProps
>(
  (
    {
      className,
      disabled,
      size = "md",
      tone = "default",
      variant = "outlined",
      ...props
    },
    ref,
  ) => (
    <SwitchPrimitive.Root
      className={cn(
        switchVariants({ disabled, size, tone, variant }),
        className,
      )}
      data-slot="switch"
      disabled={disabled}
      ref={ref}
      {...props}
    >
      <SwitchPrimitive.Thumb
        className={cn(
          "block rounded-full border-2 border-su-ink bg-su-surface shadow-su-xs transition-transform duration-150",
          switchSizeClassNames[size].thumb,
        )}
        data-slot="switch-thumb"
      />
    </SwitchPrimitive.Root>
  ),
)
Switch.displayName = SwitchPrimitive.Root.displayName

export { Switch, switchVariants }
export type { SwitchProps }
