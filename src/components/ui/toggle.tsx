import * as TogglePrimitive from "@radix-ui/react-toggle"
import { cva, type VariantProps } from "class-variance-authority"
import * as React from "react"

import { cn } from "@/lib/utils"

/**
 * Builds the sticker toggle className from size, tone, and variant options.
 */
const toggleVariants = cva(
  "inline-flex shrink-0 cursor-pointer items-center justify-center gap-2 rounded-su-md border-2 border-su-ink font-black text-su-ink transition duration-150 outline-none hover:-translate-y-0.5 hover:shadow-su-md focus-visible:ring-[2px] focus-visible:ring-su-ring/65 active:translate-x-0.5 active:translate-y-0.5 active:shadow-su-xs disabled:cursor-not-allowed disabled:opacity-55 data-[state=on]:bg-su-fill-default data-[state=on]:shadow-su-xs",
  {
    compoundVariants: [
      {
        class:
          "data-[state=on]:bg-su-fill-info data-[state=on]:text-su-fg-info",
        tone: "info",
      },
      {
        class:
          "data-[state=on]:bg-su-fill-secondary data-[state=on]:text-su-fg-secondary",
        tone: "secondary",
      },
      {
        class:
          "data-[state=on]:bg-su-fill-success data-[state=on]:text-su-fg-success",
        tone: "success",
      },
      {
        class:
          "data-[state=on]:bg-su-fill-warning data-[state=on]:text-su-fg-warning",
        tone: "warning",
      },
      {
        class: "border-transparent shadow-none hover:shadow-none",
        variant: "ghost",
      },
      {
        class: "bg-su-surface shadow-su-sm",
        variant: "outlined",
      },
    ],
    defaultVariants: {
      size: "md",
      tone: "default",
      variant: "outlined",
    },
    variants: {
      size: {
        lg: "h-11 min-w-11 px-4 text-base",
        md: "h-10 min-w-10 px-3 text-sm",
        sm: "h-8 min-w-8 px-2 text-xs",
      },
      tone: {
        default: "",
        info: "",
        secondary: "",
        success: "",
        warning: "",
      },
      variant: {
        ghost: "",
        outlined: "",
      },
    },
  },
)

/**
 * Props for the sticker toggle button.
 * @remarks Wraps Radix Toggle.Root and adds sticker size, tone, and structure variants.
 */
interface ToggleProps
  extends
    React.ComponentPropsWithoutRef<typeof TogglePrimitive.Root>,
    VariantProps<typeof toggleVariants> {
  /**
   * Controls toggle height and padding.
   * @default "md"
   */
  size?: "lg" | "md" | "sm"
  /**
   * Controls the active semantic tone.
   * @default "default"
   */
  tone?: "default" | "info" | "secondary" | "success" | "warning"
  /**
   * Controls toggle surface structure.
   * @default "outlined"
   */
  variant?: "ghost" | "outlined"
}

/**
 * Pressable two-state sticker control powered by Radix Toggle.
 */
const Toggle = React.forwardRef<
  React.ElementRef<typeof TogglePrimitive.Root>,
  ToggleProps
>(
  (
    {
      className,
      size = "md",
      tone = "default",
      variant = "outlined",
      ...props
    },
    ref,
  ) => (
    <TogglePrimitive.Root
      className={cn(toggleVariants({ size, tone, variant }), className)}
      data-slot="toggle"
      ref={ref}
      {...props}
    />
  ),
)
Toggle.displayName = TogglePrimitive.Root.displayName

export { Toggle, toggleVariants, type ToggleProps }
