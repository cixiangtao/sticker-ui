import * as LabelPrimitive from "@radix-ui/react-label"
import { cva, type VariantProps } from "class-variance-authority"
import * as React from "react"

import { cn } from "@/lib/utils"

/**
 * Builds the sticker label className from size and tone options.
 */
const labelVariants = cva(
  "inline-flex w-fit items-center gap-1.5 font-black text-su-ink peer-disabled:cursor-not-allowed peer-disabled:opacity-55",
  {
    compoundVariants: [
      {
        class: "text-su-fg-danger",
        tone: "danger",
      },
      {
        class: "text-su-ink",
        tone: "default",
      },
      {
        class: "text-su-fg-info",
        tone: "info",
      },
      {
        class: "text-su-fg-success",
        tone: "success",
      },
      {
        class: "text-su-fg-warning",
        tone: "warning",
      },
    ],
    defaultVariants: {
      required: false,
      size: "md",
      tone: "default",
    },
    variants: {
      required: {
        false: "",
        true: "after:text-su-fg-danger after:content-['*']",
      },
      size: {
        lg: "text-base leading-6",
        md: "text-sm leading-5",
        sm: "text-xs leading-5",
      },
      tone: {
        danger: "",
        default: "",
        info: "",
        success: "",
        warning: "",
      },
    },
  },
)

/**
 * Props for the sticker label.
 * @remarks Wraps Radix Label.Root and adds size, tone, and required marker variants.
 */
interface LabelProps
  extends
    React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>,
    VariantProps<typeof labelVariants> {
  /**
   * Renders a semantic required marker after the text.
   * @default false
   */
  required?: boolean
  /**
   * Controls label text size.
   * @default "md"
   */
  size?: "lg" | "md" | "sm"
  /**
   * Controls label semantic tone.
   * @default "default"
   */
  tone?: "danger" | "default" | "info" | "success" | "warning"
}

/**
 * Accessible sticker label for form controls and compact field captions.
 */
const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  LabelProps
>(
  (
    { className, required = false, size = "md", tone = "default", ...props },
    ref,
  ) => (
    <LabelPrimitive.Root
      className={cn(labelVariants({ required, size, tone }), className)}
      data-slot="label"
      ref={ref}
      {...props}
    />
  ),
)
Label.displayName = LabelPrimitive.Root.displayName

export { Label, labelVariants, type LabelProps }
