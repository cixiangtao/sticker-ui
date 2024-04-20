import { cva, type VariantProps } from "class-variance-authority"
import * as React from "react"

import { cn } from "@/lib/utils"

/**
 * Builds the divider root className from orientation and label alignment.
 */
const dividerVariants = cva("min-w-0 text-ink", {
  defaultVariants: {
    align: "center",
    orientation: "horizontal",
  },
  variants: {
    align: {
      center: "justify-center",
      end: "justify-end",
      start: "justify-start",
    },
    orientation: {
      horizontal: "flex w-full items-center",
      vertical: "inline-flex min-h-8 flex-col items-center self-stretch",
    },
  },
})

const dividerLineVariants = cva("shrink-0", {
  compoundVariants: [
    {
      class: "border-text-danger",
      tone: "danger",
    },
    {
      class: "border-ink",
      tone: "default",
    },
    {
      class: "border-text-info",
      tone: "info",
    },
    {
      class: "border-text-secondary",
      tone: "secondary",
    },
    {
      class: "border-text-success",
      tone: "success",
    },
    {
      class: "border-text-warning",
      tone: "warning",
    },
  ],
  defaultVariants: {
    orientation: "horizontal",
    tone: "default",
    variant: "solid",
    weight: "md",
  },
  variants: {
    orientation: {
      horizontal: "h-0 flex-1 border-t",
      vertical: "w-0 flex-1 border-l",
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
      dashed: "border-dashed",
      dotted: "border-dotted",
      solid: "border-solid",
    },
    weight: {
      lg: "",
      md: "",
      sm: "",
    },
  },
})

type DividerOrientation = "horizontal" | "vertical"
type DividerTone =
  | "danger"
  | "default"
  | "info"
  | "secondary"
  | "success"
  | "warning"

/**
 * Props for the sticker divider.
 * @remarks Inherits native div attributes and adds line orientation, tone, weight, and optional label content.
 */
interface DividerProps
  extends
    React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof dividerVariants>,
    VariantProps<typeof dividerLineVariants> {
  /**
   * Aligns label content along a horizontal divider.
   * @default "center"
   */
  align?: "center" | "end" | "start"
  /**
   * Hides the divider from assistive technology when it is purely decorative.
   * @default true
   */
  decorative?: boolean
  /**
   * Controls divider direction.
   * @default "horizontal"
   */
  orientation?: DividerOrientation
  /**
   * Controls semantic line color.
   * @default "default"
   */
  tone?: DividerTone
  /**
   * Controls line style.
   * @default "solid"
   */
  variant?: "dashed" | "dotted" | "solid"
  /**
   * Controls line thickness.
   * @default "md"
   */
  weight?: "lg" | "md" | "sm"
}

const dividerWeightClassNames = {
  horizontal: {
    lg: "border-t-[3px]",
    md: "border-t-2",
    sm: "border-t",
  },
  vertical: {
    lg: "border-l-[3px]",
    md: "border-l-2",
    sm: "border-l",
  },
} satisfies Record<DividerOrientation, Record<"lg" | "md" | "sm", string>>

/**
 * Sticker separator for sections, metadata rows, and split panes.
 */
function Divider({
  align = "center",
  children,
  className,
  decorative = true,
  orientation = "horizontal",
  tone = "default",
  variant = "solid",
  weight = "md",
  ...props
}: DividerProps) {
  const hasLabel = Boolean(children)
  const accessibilityProps = decorative
    ? { "aria-hidden": true }
    : {
        "aria-orientation": orientation,
        role: "separator",
      }
  const lineClassName = cn(
    dividerLineVariants({ orientation, tone, variant, weight }),
    dividerWeightClassNames[orientation][weight],
  )

  return (
    <div
      className={cn(dividerVariants({ align, orientation }), className)}
      data-align={align}
      data-orientation={orientation}
      data-slot="divider"
      data-tone={tone}
      data-variant={variant}
      data-weight={weight}
      {...accessibilityProps}
      {...props}
    >
      <span className={lineClassName} data-slot="divider-line" />
      {hasLabel ? (
        <span
          className={cn(
            "shrink-0 rounded-sticker-md bg-surface px-2.5 py-1 text-xs leading-none font-black text-ink",
            orientation === "horizontal" ? "mx-3" : "my-2",
          )}
          data-slot="divider-label"
        >
          {children}
        </span>
      ) : null}
      {hasLabel ? (
        <span className={lineClassName} data-slot="divider-line" />
      ) : null}
    </div>
  )
}

export { Divider, dividerVariants, type DividerProps }
