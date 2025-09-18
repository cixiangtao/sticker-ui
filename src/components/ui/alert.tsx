import { cva, type VariantProps } from "class-variance-authority"
import * as React from "react"

import { cn } from "@/lib/utils"

/**
 * Builds the sticker alert className from tone and variant options.
 */
const alertVariants = cva(
  "relative grid w-full gap-2 overflow-hidden border-2 border-su-ink text-su-ink shadow-su-md",
  {
    compoundVariants: [
      {
        class: "bg-su-fill-danger",
        tone: "danger",
        variant: "filled",
      },
      {
        class: "border-su-fg-danger bg-su-fill-danger",
        tone: "danger",
        variant: "outlined",
      },
      {
        class: "border-l-[8px] border-su-fg-danger bg-su-fill-danger",
        tone: "danger",
        variant: "stripe",
      },
      {
        class: "bg-su-fill-default-soft text-su-ink",
        tone: "default",
        variant: "filled",
      },
      {
        class: "bg-su-fill-default-soft text-su-ink",
        tone: "default",
        variant: "outlined",
      },
      {
        class: "border-l-[8px] bg-su-fill-default-soft text-su-ink",
        tone: "default",
        variant: "stripe",
      },
      {
        class: "bg-su-fill-info",
        tone: "info",
        variant: "filled",
      },
      {
        class: "border-su-fg-info bg-su-fill-info",
        tone: "info",
        variant: "outlined",
      },
      {
        class: "border-l-[8px] border-su-fg-info bg-su-fill-info",
        tone: "info",
        variant: "stripe",
      },
      {
        class: "bg-su-fill-secondary",
        tone: "secondary",
        variant: "filled",
      },
      {
        class: "border-su-fg-secondary bg-su-fill-secondary",
        tone: "secondary",
        variant: "outlined",
      },
      {
        class: "border-l-[8px] border-su-fg-secondary bg-su-fill-secondary",
        tone: "secondary",
        variant: "stripe",
      },
      {
        class: "bg-su-fill-success",
        tone: "success",
        variant: "filled",
      },
      {
        class: "border-su-fg-success bg-su-fill-success",
        tone: "success",
        variant: "outlined",
      },
      {
        class: "border-l-[8px] border-su-fg-success bg-su-fill-success",
        tone: "success",
        variant: "stripe",
      },
      {
        class: "bg-su-fill-warning",
        tone: "warning",
        variant: "filled",
      },
      {
        class: "border-su-fg-warning bg-su-fill-warning",
        tone: "warning",
        variant: "outlined",
      },
      {
        class: "border-l-[8px] border-su-fg-warning bg-su-fill-warning",
        tone: "warning",
        variant: "stripe",
      },
    ],
    defaultVariants: {
      size: "md",
      tone: "default",
      variant: "stripe",
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
      variant: {
        filled: "",
        outlined: "shadow-su-sm",
        stripe: "shadow-su-sm",
      },
    },
  },
)

/**
 * Props for the sticker alert root.
 * @remarks Inherits native div attributes and adds semantic tone, size, and structure variants.
 */
interface AlertProps
  extends
    React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof alertVariants> {
  /**
   * Controls the alert padding and radius.
   * @default "md"
   */
  size?: "lg" | "md" | "sm"
  /**
   * Controls the semantic paper tone.
   * @default "default"
   */
  tone?: "danger" | "default" | "info" | "secondary" | "success" | "warning"
  /**
   * Controls the alert surface structure and emphasis.
   * @default "stripe"
   */
  variant?: "filled" | "outlined" | "stripe"
}

/**
 * Sticker alert surface for status messages, validation summaries, and helpful notes.
 */
function AlertRoot({
  className,
  role = "status",
  size = "md",
  tone = "default",
  variant = "stripe",
  ...props
}: AlertProps) {
  return (
    <div
      className={cn(alertVariants({ size, tone, variant }), className)}
      data-slot="alert"
      role={role}
      {...props}
    />
  )
}

type AlertTitleProps = React.HTMLAttributes<HTMLHeadingElement>

/**
 * Sticker alert heading.
 */
function AlertTitle({ className, ...props }: AlertTitleProps) {
  return (
    <h3
      className={cn("text-sm leading-5 font-black", className)}
      data-slot="alert-title"
      {...props}
    />
  )
}

type AlertDescriptionProps = React.HTMLAttributes<HTMLParagraphElement>

/**
 * Sticker alert body copy.
 */
function AlertDescription({ className, ...props }: AlertDescriptionProps) {
  return (
    <p
      className={cn(
        "text-sm leading-6 font-medium text-su-fg-muted",
        className,
      )}
      data-slot="alert-description"
      {...props}
    />
  )
}

/**
 * Sticker alert surface for status messages, validation summaries, and helpful notes.
 */
const Alert = Object.assign(AlertRoot, {
  Description: AlertDescription,
  Title: AlertTitle,
})

export {
  Alert,
  AlertDescription,
  AlertTitle,
  alertVariants,
  type AlertDescriptionProps,
  type AlertProps,
  type AlertTitleProps,
}
