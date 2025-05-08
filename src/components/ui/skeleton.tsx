import { cva, type VariantProps } from "class-variance-authority"
import * as React from "react"

import { cn } from "@/lib/utils"

/**
 * Builds the skeleton className from shape, tone, and animation options.
 */
const skeletonVariants = cva(
  "relative overflow-hidden border border-su-ink/10 bg-su-surface-muted",
  {
    defaultVariants: {
      animated: true,
      shape: "block",
      tone: "default",
    },
    variants: {
      animated: {
        false: "",
        true: "animate-pulse",
      },
      shape: {
        avatar: "size-12 rounded-full",
        block: "h-24 rounded-su-lg",
        card: "h-36 rounded-su-2xl",
        line: "h-4 rounded-full",
      },
      tone: {
        default: "bg-su-surface-muted",
        info: "bg-su-fill-info",
        secondary: "bg-su-fill-secondary",
        warning: "bg-su-fill-warning",
      },
    },
  },
)

/**
 * Props for the skeleton placeholder.
 * @remarks Inherits native div attributes and defaults to being hidden from assistive technology.
 */
interface SkeletonProps
  extends
    React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof skeletonVariants> {
  /**
   * Controls whether the placeholder pulses while content is loading.
   * @default true
   */
  animated?: boolean
  /**
   * Controls the placeholder geometry.
   * @default "block"
   */
  shape?: "avatar" | "block" | "card" | "line"
  /**
   * Controls the placeholder paper tone.
   * @default "default"
   */
  tone?: "default" | "info" | "secondary" | "warning"
}

/**
 * Quiet skeleton placeholder for loading cards, rows, avatars, and text lines.
 */
function Skeleton({
  "aria-hidden": ariaHidden = true,
  animated = true,
  className,
  shape = "block",
  tone = "default",
  ...props
}: SkeletonProps) {
  return (
    <div
      aria-hidden={ariaHidden}
      className={cn(skeletonVariants({ animated, shape, tone }), className)}
      data-slot="skeleton"
      {...props}
    />
  )
}

export { Skeleton, skeletonVariants, type SkeletonProps }
