import { cva, type VariantProps } from "class-variance-authority"
import * as React from "react"

import { cn } from "@/lib/utils"

/**
 * Builds the sticker stat card className from tone and size options.
 */
const statCardVariants = cva(
  "relative grid gap-3 overflow-hidden border-2 border-su-ink text-su-ink shadow-su-md",
  {
    compoundVariants: [
      {
        class: "bg-su-fill-danger",
        tone: "danger",
      },
      {
        class: "bg-su-paper",
        tone: "default",
      },
      {
        class: "bg-su-fill-info",
        tone: "info",
      },
      {
        class: "bg-su-fill-secondary",
        tone: "secondary",
      },
      {
        class: "bg-su-fill-success",
        tone: "success",
      },
      {
        class: "bg-su-fill-warning",
        tone: "warning",
      },
    ],
    defaultVariants: {
      size: "md",
      tone: "default",
    },
    variants: {
      size: {
        lg: "rounded-su-2xl p-5",
        md: "rounded-su-xl p-4",
        sm: "rounded-su-lg p-3",
      },
      tone: {
        danger: "",
        default: "",
        info: "",
        secondary: "",
        success: "",
        warning: "",
      },
    },
  },
)

/**
 * Props for the sticker stat card.
 * @remarks Inherits native article attributes and adds tone and size variants.
 */
interface StatCardProps
  extends
    React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof statCardVariants> {
  /**
   * Controls the semantic root element.
   * @default "article"
   */
  as?: "article" | "div" | "section"
  /**
   * Controls card padding and radius.
   * @default "md"
   */
  size?: "lg" | "md" | "sm"
  /**
   * Controls the paper tone.
   * @default "default"
   */
  tone?: "danger" | "default" | "info" | "secondary" | "success" | "warning"
}

type StatCardLabelProps = React.HTMLAttributes<HTMLDivElement>
type StatCardValueProps = React.HTMLAttributes<HTMLDivElement>
type StatCardDescriptionProps = React.HTMLAttributes<HTMLParagraphElement>
type StatCardTrendProps = React.HTMLAttributes<HTMLSpanElement>
type StatCardIconProps = React.HTMLAttributes<HTMLSpanElement>

/**
 * Compact metric surface for dashboards, summaries, and KPI rows.
 */
function StatCardRoot({
  as: Component = "article",
  className,
  size = "md",
  tone = "default",
  ...props
}: StatCardProps) {
  return (
    <Component
      className={cn(statCardVariants({ size, tone }), className)}
      data-slot="stat-card"
      {...props}
    />
  )
}

/**
 * Stat card label.
 */
function StatCardLabel({ className, ...props }: StatCardLabelProps) {
  return (
    <div
      className={cn(
        "text-xs leading-5 font-black tracking-normal uppercase",
        className,
      )}
      data-slot="stat-card-label"
      {...props}
    />
  )
}

/**
 * Stat card primary value.
 */
function StatCardValue({ className, ...props }: StatCardValueProps) {
  return (
    <div
      className={cn("text-3xl leading-none font-black", className)}
      data-slot="stat-card-value"
      {...props}
    />
  )
}

/**
 * Stat card supporting copy.
 */
function StatCardDescription({
  className,
  ...props
}: StatCardDescriptionProps) {
  return (
    <p
      className={cn(
        "m-0 text-sm leading-6 font-medium text-su-fg-muted",
        className,
      )}
      data-slot="stat-card-description"
      {...props}
    />
  )
}

/**
 * Stat card trend badge.
 */
function StatCardTrend({ className, ...props }: StatCardTrendProps) {
  return (
    <span
      className={cn(
        "inline-flex w-fit items-center rounded-su-sm border-2 border-su-ink bg-su-surface px-2 py-1 text-xs leading-none font-black shadow-su-xs",
        className,
      )}
      data-slot="stat-card-trend"
      {...props}
    />
  )
}

/**
 * Stat card icon badge.
 */
function StatCardIcon({ className, ...props }: StatCardIconProps) {
  return (
    <span
      className={cn(
        "absolute top-3 right-3 inline-flex size-9 items-center justify-center rounded-su-md border-2 border-su-ink bg-su-surface shadow-su-xs",
        className,
      )}
      data-slot="stat-card-icon"
      {...props}
    />
  )
}

/**
 * Compact metric surface for dashboards, summaries, and KPI rows.
 */
const StatCard = Object.assign(StatCardRoot, {
  Description: StatCardDescription,
  Icon: StatCardIcon,
  Label: StatCardLabel,
  Trend: StatCardTrend,
  Value: StatCardValue,
})

export {
  StatCard,
  StatCardDescription,
  StatCardIcon,
  StatCardLabel,
  StatCardTrend,
  StatCardValue,
  statCardVariants,
  type StatCardDescriptionProps,
  type StatCardIconProps,
  type StatCardLabelProps,
  type StatCardProps,
  type StatCardTrendProps,
  type StatCardValueProps,
}
