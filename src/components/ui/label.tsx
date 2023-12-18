import { cva, type VariantProps } from "class-variance-authority"
import * as React from "react"

import { cn } from "@/lib/utils"

/**
 * Builds the sticker label className from size and tone variants.
 */
const labelTones = cva(
  "inline-flex w-fit min-w-0 items-center gap-2 font-black leading-none text-ink",
  {
    defaultVariants: {
      size: "default",
      tone: "default",
    },
    variants: {
      size: {
        default: "text-sm",
        lg: "text-base",
        sm: "text-xs",
      },
      tone: {
        danger: "text-text-danger",
        default: "",
        muted: "text-text-muted",
        success: "text-text-success",
        warning: "text-text-warning",
      },
    },
  },
)

/**
 * Builds the inline marker className from tone variants.
 */
const markerTones = cva(
  "inline-flex h-5 shrink-0 items-center rounded-full border border-ink px-2 text-[10px] leading-none font-black text-ink uppercase shadow-sticker-xs",
  {
    defaultVariants: {
      tone: "default",
    },
    variants: {
      tone: {
        danger: "bg-fill-danger",
        default: "bg-fill-default",
        muted: "bg-surface-muted",
        success: "bg-fill-success-strong",
        warning: "bg-fill-warning",
      },
    },
  },
)

/**
 * Props for the inline label marker.
 * @remarks Inherits native span attributes and adds sticker tone variants.
 */
interface LabelMarkerProps
  extends React.ComponentProps<"span">, VariantProps<typeof markerTones> {
  /**
   * Controls the marker paper color.
   * @default "default"
   */
  tone?: "danger" | "default" | "muted" | "success" | "warning"
}

/**
 * Props for the sticker label root element.
 * @remarks Inherits native label attributes and adds sticker variants.
 */
interface LabelProps
  extends
    React.LabelHTMLAttributes<HTMLLabelElement>,
    VariantProps<typeof labelTones> {
  /**
   * Shows the optional marker after the label content.
   * @default false
   */
  optional?: boolean
  /**
   * Shows the required marker after the label content.
   * @default false
   */
  required?: boolean
  /**
   * Controls the label text size.
   * @default "default"
   */
  size?: "default" | "lg" | "sm"
  /**
   * Controls the label text tone and required marker color.
   * @default "default"
   */
  tone?: "danger" | "default" | "muted" | "success" | "warning"
}

function Label({
  children,
  className,
  optional = false,
  required = false,
  size = "default",
  tone = "default",
  ...props
}: LabelProps) {
  return (
    <label
      className={cn(labelTones({ size, tone }), className)}
      data-slot="label"
      {...props}
    >
      {children}
      {required ? <LabelMarker tone={tone}>required</LabelMarker> : null}
      {optional ? <LabelMarker tone="muted">optional</LabelMarker> : null}
    </label>
  )
}

function LabelDescription({ className, ...props }: React.ComponentProps<"p">) {
  return (
    <p
      className={cn(
        "text-text-muted m-0 text-xs leading-5 font-medium",
        className,
      )}
      data-slot="label-description"
      {...props}
    />
  )
}

function LabelMarker({
  className,
  tone = "default",
  ...props
}: LabelMarkerProps) {
  return (
    <span
      aria-hidden="true"
      className={cn(markerTones({ tone }), className)}
      data-slot="label-marker"
      {...props}
    />
  )
}

export { Label, LabelDescription, LabelMarker, labelTones }
