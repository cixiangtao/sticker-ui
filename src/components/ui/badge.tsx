import { cva, type VariantProps } from "class-variance-authority"
import * as React from "react"

import { cn } from "@/lib/utils"

type BadgePlacement = "bottom-left" | "bottom-right" | "top-left" | "top-right"
type BadgeSize = "lg" | "md" | "sm"

/**
 * Builds the badge indicator className from tone, size, and emphasis.
 */
const badgeVariants = cva(
  "z-10 inline-flex shrink-0 items-center justify-center rounded-full border-2 border-ink leading-none font-extrabold whitespace-nowrap ring-2 ring-surface",
  {
    compoundVariants: [
      {
        class: "bg-fill-danger-soft text-text-danger",
        tone: "danger",
        variant: "soft",
      },
      {
        class: "bg-surface text-text-danger",
        tone: "danger",
        variant: "outline",
      },
      {
        class: "bg-fill-danger text-ink",
        tone: "danger",
        variant: "solid",
      },
      {
        class: "bg-fill-default-soft text-ink",
        tone: "default",
        variant: "soft",
      },
      {
        class: "bg-surface text-ink",
        tone: "default",
        variant: "outline",
      },
      {
        class: "bg-fill-default text-ink",
        tone: "default",
        variant: "solid",
      },
      {
        class: "bg-fill-info text-text-info",
        tone: "info",
        variant: "soft",
      },
      {
        class: "bg-surface text-text-info",
        tone: "info",
        variant: "outline",
      },
      {
        class: "bg-fill-info-strong text-ink",
        tone: "info",
        variant: "solid",
      },
      {
        class: "bg-fill-secondary text-text-secondary",
        tone: "secondary",
        variant: "soft",
      },
      {
        class: "bg-surface text-text-secondary",
        tone: "secondary",
        variant: "outline",
      },
      {
        class: "bg-fill-secondary-strong text-ink",
        tone: "secondary",
        variant: "solid",
      },
      {
        class: "bg-fill-success text-text-success",
        tone: "success",
        variant: "soft",
      },
      {
        class: "bg-surface text-text-success",
        tone: "success",
        variant: "outline",
      },
      {
        class: "bg-fill-success-strong text-ink",
        tone: "success",
        variant: "solid",
      },
      {
        class: "bg-fill-warning text-text-warning",
        tone: "warning",
        variant: "soft",
      },
      {
        class: "bg-surface text-text-warning",
        tone: "warning",
        variant: "outline",
      },
      {
        class: "bg-fill-warning-strong text-ink",
        tone: "warning",
        variant: "solid",
      },
    ],
    defaultVariants: {
      size: "md",
      tone: "default",
      variant: "solid",
    },
    variants: {
      size: {
        lg: "h-7 min-w-7 px-2 text-xs",
        md: "h-6 min-w-6 px-2 text-[11px]",
        sm: "h-5 min-w-5 px-1.5 text-[10px]",
      },
      tone: {
        danger: "",
        default: "",
        info: "",
        secondary: "",
        success: "",
        warning: "",
      },
      variant: {
        outline: "border-dashed",
        soft: "",
        solid: "",
      },
    },
  },
)

const badgePlacementClassNames: Record<BadgePlacement, string> = {
  "bottom-left": "absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2",
  "bottom-right": "absolute right-0 bottom-0 translate-x-1/2 translate-y-1/2",
  "top-left": "absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2",
  "top-right": "absolute top-0 right-0 translate-x-1/2 -translate-y-1/2",
}

const badgeDotClassNames: Record<BadgeSize, string> = {
  lg: "size-4 min-w-0 rounded-full p-0",
  md: "size-3.5 min-w-0 rounded-full p-0",
  sm: "size-3 min-w-0 rounded-full p-0",
}

/**
 * Props for the badge root.
 * @remarks Inherits native span attributes and positions a compact indicator over optional children.
 */
interface BadgeProps
  extends
    Omit<React.HTMLAttributes<HTMLSpanElement>, "content">,
    Pick<VariantProps<typeof badgeVariants>, "size" | "tone" | "variant"> {
  /**
   * Element or content that receives the corner badge.
   */
  children?: React.ReactNode
  /**
   * Badge content rendered inside the corner indicator.
   */
  content?: React.ReactNode
  /**
   * Renders the indicator as a dot instead of showing content.
   * @default false
   */
  dot?: boolean
  /**
   * Custom className for the positioned indicator.
   */
  indicatorClassName?: string
  /**
   * Maximum number to show before rendering a plus suffix.
   * @default 99
   */
  max?: number
  /**
   * Controls which corner receives the badge when children are present.
   * @default "top-right"
   */
  placement?: BadgePlacement
  /**
   * Controls whether the badge indicator is rendered.
   * @default true
   */
  show?: boolean
  /**
   * Renders numeric zero instead of hiding the badge.
   * @default false
   */
  showZero?: boolean
  /**
   * Controls the badge indicator height, minimum width, and text size.
   * @default "md"
   */
  size?: BadgeSize
  /**
   * Controls the semantic badge tone.
   * @default "default"
   */
  tone?: "danger" | "default" | "info" | "secondary" | "success" | "warning"
  /**
   * Controls the badge surface emphasis.
   * @default "solid"
   */
  variant?: "outline" | "soft" | "solid"
}

/**
 * Corner badge for counts, status dots, and notification markers.
 */
function Badge({
  children,
  className,
  content,
  dot = false,
  indicatorClassName,
  max = 99,
  placement = "top-right",
  show = true,
  showZero = false,
  size = "md",
  tone = "default",
  variant = "solid",
  ...props
}: BadgeProps) {
  const hasAnchor = children !== undefined && children !== null
  const shouldRenderIndicator = getShouldRenderIndicator({
    content,
    dot,
    show,
    showZero,
  })

  if (!hasAnchor && !shouldRenderIndicator) {
    return null
  }

  return (
    <span
      className={cn(
        "relative inline-block w-fit max-w-full align-middle",
        className,
      )}
      data-slot="badge"
      {...props}
    >
      {children}
      {shouldRenderIndicator ? (
        <span
          aria-hidden={dot ? true : undefined}
          className={cn(
            badgeVariants({ size, tone, variant }),
            hasAnchor && badgePlacementClassNames[placement],
            dot && badgeDotClassNames[size],
            indicatorClassName,
          )}
          data-slot="badge-indicator"
        >
          {dot ? null : formatBadgeContent(content, max)}
        </span>
      ) : null}
    </span>
  )
}

function getShouldRenderIndicator({
  content,
  dot,
  show,
  showZero,
}: {
  content: React.ReactNode
  dot: boolean
  show: boolean
  showZero: boolean
}) {
  if (!show) {
    return false
  }

  if (dot) {
    return true
  }

  if (content === 0) {
    return showZero
  }

  return (
    content !== undefined &&
    content !== null &&
    content !== false &&
    content !== ""
  )
}

function formatBadgeContent(content: React.ReactNode, max: number) {
  return typeof content === "number" && content > max ? `${max}+` : content
}

export { Badge, badgeVariants, type BadgeProps }
