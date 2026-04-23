import { cva, type VariantProps } from "class-variance-authority"
import * as React from "react"

import { cn } from "@/lib/utils"

type StepStatus = "complete" | "current" | "pending"

/**
 * Builds the sticker steps root className from orientation options.
 */
const stepsVariants = cva("grid text-su-ink", {
  defaultVariants: {
    orientation: "horizontal",
  },
  variants: {
    orientation: {
      horizontal: "gap-3 sm:auto-cols-fr sm:grid-flow-col",
      vertical: "gap-3",
    },
  },
})

/**
 * Props for an item passed to the Steps convenience API.
 */
interface StepsItemData {
  /**
   * Supporting copy for the step.
   */
  description?: React.ReactNode
  /**
   * Stable value used for rendering.
   */
  key?: React.Key
  /**
   * Step status. When omitted it is derived from current index.
   */
  status?: StepStatus
  /**
   * Main step label.
   */
  title: React.ReactNode
}

/**
 * Props for the sticker steps root.
 */
interface StepsProps
  extends
    React.HTMLAttributes<HTMLOListElement>,
    VariantProps<typeof stepsVariants> {
  /**
   * Current zero-based step index used when item statuses are omitted.
   * @default 0
   */
  current?: number
  /**
   * Convenience item data. Children take precedence when provided.
   */
  items?: StepsItemData[]
  /**
   * Controls step layout direction.
   * @default "horizontal"
   */
  orientation?: "horizontal" | "vertical"
}

/**
 * Props for an individual step.
 */
interface StepItemProps extends Omit<
  React.LiHTMLAttributes<HTMLLIElement>,
  "title"
> {
  /**
   * Step supporting copy.
   */
  description?: React.ReactNode
  /**
   * One-based number shown in the marker.
   */
  index?: number
  /**
   * Step status.
   * @default "pending"
   */
  status?: StepStatus
  /**
   * Step label.
   */
  title?: React.ReactNode
}

function getStepStatus(index: number, current: number): StepStatus {
  if (index < current) {
    return "complete"
  }

  if (index === current) {
    return "current"
  }

  return "pending"
}

/**
 * Ordered progress indicator for onboarding, checkout, and setup flows.
 */
function StepsRoot({
  children,
  className,
  current = 0,
  items,
  orientation = "horizontal",
  ...props
}: StepsProps) {
  const content =
    children ??
    items?.map((item, index) => (
      <StepItem
        description={item.description}
        index={index + 1}
        key={item.key ?? index}
        status={item.status ?? getStepStatus(index, current)}
        title={item.title}
      />
    ))

  return (
    <ol
      className={cn(stepsVariants({ orientation }), className)}
      data-orientation={orientation}
      data-slot="steps"
      {...props}
    >
      {content}
    </ol>
  )
}

/**
 * Individual step panel.
 */
function StepItem({
  children,
  className,
  description,
  index,
  status = "pending",
  title,
  ...props
}: StepItemProps) {
  return (
    <li
      aria-current={status === "current" ? "step" : undefined}
      className={cn(
        "grid grid-cols-[auto_1fr] gap-3 rounded-su-xl border-2 border-su-ink bg-su-paper p-3 shadow-su-sm",
        status === "complete" && "bg-su-fill-success",
        status === "current" && "bg-su-fill-default",
        status === "pending" && "bg-su-surface",
        className,
      )}
      data-slot="step-item"
      data-status={status}
      {...props}
    >
      <span
        className={cn(
          "inline-flex size-8 items-center justify-center rounded-full border-2 border-su-ink bg-su-paper text-sm font-black shadow-su-xs",
          status === "complete" && "bg-su-fill-success-strong",
          status === "current" && "bg-su-fill-warning",
        )}
        data-slot="step-marker"
      >
        {status === "complete" ? "✓" : index}
      </span>
      <span className="grid min-w-0 gap-1" data-slot="step-content">
        {children ?? (
          <>
            <span
              className="text-sm leading-5 font-black"
              data-slot="step-title"
            >
              {title}
            </span>
            {description ? (
              <span
                className="text-sm leading-6 font-medium text-su-fg-muted"
                data-slot="step-description"
              >
                {description}
              </span>
            ) : null}
          </>
        )}
      </span>
    </li>
  )
}

/**
 * Ordered progress indicator for onboarding, checkout, and setup flows.
 */
const Steps = Object.assign(StepsRoot, {
  Item: StepItem,
})

export {
  Steps,
  StepItem,
  stepsVariants,
  type StepItemProps,
  type StepsItemData,
  type StepsProps,
}
