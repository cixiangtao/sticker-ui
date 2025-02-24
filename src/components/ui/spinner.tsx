import { cva, type VariantProps } from "class-variance-authority"
import * as React from "react"

import { cn } from "@/lib/utils"

/**
 * Builds the spinner className from size and tone.
 */
const spinnerVariants = cva(
  "relative inline-flex shrink-0 items-center justify-center rounded-full text-ink",
  {
    defaultVariants: {
      size: "md",
      tone: "default",
    },
    variants: {
      size: {
        lg: "size-10",
        md: "size-7",
        sm: "size-5",
      },
      tone: {
        danger: "text-text-danger",
        default: "text-ink",
        info: "text-text-info",
        secondary: "text-text-secondary",
        success: "text-text-success",
        warning: "text-text-warning",
      },
    },
  },
)

/**
 * Props for the loading spinner.
 * @remarks Inherits native span attributes and can be decorative or announced as a status.
 */
interface SpinnerProps
  extends
    React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof spinnerVariants> {
  /**
   * Hides the spinner from assistive technology when nearby text already announces loading.
   * @default false
   */
  decorative?: boolean
  /**
   * Accessible status label used when the spinner is not decorative.
   * @default "Loading"
   */
  label?: string
  /**
   * Controls the spinner dimensions.
   * @default "md"
   */
  size?: "lg" | "md" | "sm"
  /**
   * Controls the semantic spinner color.
   * @default "default"
   */
  tone?: "danger" | "default" | "info" | "secondary" | "success" | "warning"
}

/**
 * Quiet loading spinner for pending buttons, cards, and async regions.
 */
function Spinner({
  className,
  decorative = false,
  label = "Loading",
  role,
  size = "md",
  tone = "default",
  ...props
}: SpinnerProps) {
  return (
    <span
      aria-hidden={decorative || undefined}
      aria-label={decorative ? undefined : label}
      className={cn(spinnerVariants({ size, tone }), className)}
      data-slot="spinner"
      role={decorative ? undefined : (role ?? "status")}
      {...props}
    >
      <span
        aria-hidden="true"
        className="absolute inset-0 rounded-full border-2 border-current opacity-20"
        data-slot="spinner-track"
      />
      <span
        aria-hidden="true"
        className="size-full animate-spin rounded-full border-2 border-transparent border-t-current border-r-current"
        data-slot="spinner-indicator"
      />
    </span>
  )
}

export { Spinner, spinnerVariants, type SpinnerProps }
