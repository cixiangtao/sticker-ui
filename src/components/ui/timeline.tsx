import { cva, type VariantProps } from "class-variance-authority"
import * as React from "react"

import { cn } from "@/lib/utils"

/**
 * Builds the sticker timeline root className from density options.
 */
const timelineVariants = cva("relative grid text-su-ink", {
  defaultVariants: {
    density: "comfortable",
  },
  variants: {
    density: {
      comfortable: "gap-5",
      compact: "gap-3",
    },
  },
})

/**
 * Builds the sticker timeline indicator className from tone options.
 */
const timelineIndicatorVariants = cva(
  "relative z-1 inline-flex size-8 shrink-0 items-center justify-center rounded-full border-2 border-su-ink bg-su-surface font-black shadow-su-xs",
  {
    compoundVariants: [
      {
        class: "bg-su-fill-danger text-su-fg-danger",
        tone: "danger",
      },
      {
        class: "bg-su-fill-default text-su-ink",
        tone: "default",
      },
      {
        class: "bg-su-fill-info text-su-fg-info",
        tone: "info",
      },
      {
        class: "bg-su-fill-secondary text-su-fg-secondary",
        tone: "secondary",
      },
      {
        class: "bg-su-fill-success text-su-fg-success",
        tone: "success",
      },
      {
        class: "bg-su-fill-warning text-su-fg-warning",
        tone: "warning",
      },
    ],
    defaultVariants: {
      tone: "default",
    },
    variants: {
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
 * Props for the sticker timeline root.
 */
interface TimelineProps
  extends
    React.HTMLAttributes<HTMLOListElement>,
    VariantProps<typeof timelineVariants> {
  /**
   * Controls vertical spacing between items.
   * @default "comfortable"
   */
  density?: "comfortable" | "compact"
}

/**
 * Props for the timeline item.
 */
interface TimelineItemProps extends React.LiHTMLAttributes<HTMLLIElement> {
  /**
   * Hides the connector after this item.
   * @default false
   */
  last?: boolean
}

/**
 * Props for the timeline indicator.
 */
interface TimelineIndicatorProps
  extends
    React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof timelineIndicatorVariants> {
  /**
   * Controls the semantic indicator tone.
   * @default "default"
   */
  tone?: "danger" | "default" | "info" | "secondary" | "success" | "warning"
}

type TimelineContentProps = React.HTMLAttributes<HTMLDivElement>
type TimelineTitleProps = React.HTMLAttributes<HTMLHeadingElement>
type TimelineDescriptionProps = React.HTMLAttributes<HTMLParagraphElement>
type TimelineTimeProps = React.TimeHTMLAttributes<HTMLTimeElement>

/**
 * Vertical event list for activity feeds, changelogs, and staged workflows.
 */
function TimelineRoot({
  className,
  density = "comfortable",
  ...props
}: TimelineProps) {
  return (
    <ol
      className={cn(timelineVariants({ density }), className)}
      data-slot="timeline"
      {...props}
    />
  )
}

/**
 * Timeline row with indicator and content columns.
 */
function TimelineItem({
  className,
  last = false,
  ...props
}: TimelineItemProps) {
  return (
    <li
      className={cn("relative grid grid-cols-[auto_1fr] gap-3", className)}
      data-last={last}
      data-slot="timeline-item"
      {...props}
    />
  )
}

/**
 * Timeline indicator badge.
 */
function TimelineIndicator({
  children,
  className,
  tone = "default",
  ...props
}: TimelineIndicatorProps) {
  return (
    <span
      className={cn(
        "after:absolute after:top-full after:left-1/2 after:h-[calc(100%+1.25rem)] after:border-l-2 after:border-dashed after:border-su-ink after:content-[''] in-data-[last=true]:after:hidden",
        timelineIndicatorVariants({ tone }),
        className,
      )}
      data-slot="timeline-indicator"
      {...props}
    >
      {children}
    </span>
  )
}

/**
 * Timeline content body.
 */
function TimelineContent({ className, ...props }: TimelineContentProps) {
  return (
    <div
      className={cn(
        "grid gap-1 rounded-su-xl border-2 border-su-ink bg-su-paper p-3 shadow-su-sm",
        className,
      )}
      data-slot="timeline-content"
      {...props}
    />
  )
}

/**
 * Timeline item title.
 */
function TimelineTitle({ className, ...props }: TimelineTitleProps) {
  return (
    <h3
      className={cn("m-0 text-sm leading-5 font-black", className)}
      data-slot="timeline-title"
      {...props}
    />
  )
}

/**
 * Timeline item supporting copy.
 */
function TimelineDescription({
  className,
  ...props
}: TimelineDescriptionProps) {
  return (
    <p
      className={cn(
        "m-0 text-sm leading-6 font-medium text-su-fg-muted",
        className,
      )}
      data-slot="timeline-description"
      {...props}
    />
  )
}

/**
 * Timeline timestamp.
 */
function TimelineTime({ className, ...props }: TimelineTimeProps) {
  return (
    <time
      className={cn("text-xs leading-5 font-black text-su-fg-muted", className)}
      data-slot="timeline-time"
      {...props}
    />
  )
}

/**
 * Vertical event list for activity feeds, changelogs, and staged workflows.
 */
const Timeline = Object.assign(TimelineRoot, {
  Content: TimelineContent,
  Description: TimelineDescription,
  Indicator: TimelineIndicator,
  Item: TimelineItem,
  Time: TimelineTime,
  Title: TimelineTitle,
})

export {
  Timeline,
  TimelineContent,
  TimelineDescription,
  TimelineIndicator,
  TimelineItem,
  TimelineTime,
  TimelineTitle,
  timelineIndicatorVariants,
  timelineVariants,
  type TimelineContentProps,
  type TimelineDescriptionProps,
  type TimelineIndicatorProps,
  type TimelineItemProps,
  type TimelineProps,
  type TimelineTimeProps,
  type TimelineTitleProps,
}
