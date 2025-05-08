import { cva, type VariantProps } from "class-variance-authority"
import * as React from "react"

import { cn } from "@/lib/utils"

type ProgressStyle = React.CSSProperties & {
  "--progress-value"?: string
}

/**
 * Builds the sticker progress track className from size and tone.
 */
const progressVariants = cva(
  "relative overflow-hidden rounded-full border-2 border-su-ink bg-su-surface shadow-su-xs",
  {
    defaultVariants: {
      size: "md",
      tone: "default",
    },
    variants: {
      size: {
        lg: "h-7",
        md: "h-5",
        sm: "h-3",
      },
      tone: {
        danger: "[--progress-fill:var(--color-su-fill-danger-strong)]",
        default: "[--progress-fill:var(--color-su-fill-default)]",
        info: "[--progress-fill:var(--color-su-fill-info-strong)]",
        secondary: "[--progress-fill:var(--color-su-fill-secondary-strong)]",
        success: "[--progress-fill:var(--color-su-fill-success-strong)]",
        warning: "[--progress-fill:var(--color-su-fill-warning-strong)]",
      },
    },
  },
)

/**
 * Props for the sticker progress indicator.
 * @remarks Inherits native div attributes and exposes ARIA progressbar values.
 */
interface ProgressProps
  extends
    React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof progressVariants> {
  /**
   * Maximum value used to calculate completion.
   * @default 100
   */
  max?: number
  /**
   * Shows the current percentage as a compact label.
   * @default false
   */
  showValue?: boolean
  /**
   * Controls the progress track height.
   * @default "md"
   */
  size?: "lg" | "md" | "sm"
  /**
   * Controls the semantic fill tone.
   * @default "default"
   */
  tone?: "danger" | "default" | "info" | "secondary" | "success" | "warning"
  /**
   * Current progress value. Pass null for an indeterminate loading stripe.
   * @default 0
   */
  value?: null | number
}

/**
 * Accessible sticker progress bar for task completion and loading progress.
 */
function Progress({
  className,
  max = 100,
  showValue = false,
  size = "md",
  style,
  tone = "default",
  value = 0,
  ...props
}: ProgressProps) {
  const safeMax = Number.isFinite(max) && max > 0 ? max : 100
  const safeValue =
    typeof value === "number" && Number.isFinite(value)
      ? Math.min(Math.max(value, 0), safeMax)
      : null
  const percentage =
    safeValue === null ? null : Math.round((safeValue / safeMax) * 100)
  const progressStyle = {
    ...style,
    "--progress-value": percentage === null ? "45%" : `${percentage}%`,
  } satisfies ProgressStyle

  return (
    <div
      aria-valuemax={safeMax}
      aria-valuemin={0}
      aria-valuenow={safeValue ?? undefined}
      className={cn(progressVariants({ size, tone }), className)}
      data-slot="progress"
      role="progressbar"
      style={progressStyle}
      {...props}
    >
      <div
        className={cn(
          "h-full w-[var(--progress-value)] rounded-full border-r-2 border-su-ink bg-[var(--progress-fill)] transition-[width] duration-300",
          percentage === null && "animate-pulse",
        )}
        data-slot="progress-indicator"
      />
      {showValue && percentage !== null ? (
        <span
          className={cn(
            "absolute inset-0 flex items-center justify-center font-black text-su-ink",
            size === "lg" ? "text-xs" : "text-[10px]",
            size === "sm" && "sr-only",
          )}
          data-slot="progress-value"
        >
          {percentage}%
        </span>
      ) : null}
    </div>
  )
}

export { Progress, progressVariants, type ProgressProps }
