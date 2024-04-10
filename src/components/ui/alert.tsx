import { cva, type VariantProps } from "class-variance-authority"
import * as React from "react"

import { cn } from "@/lib/utils"

/**
 * Builds the sticker alert className from tone and variant options.
 */
const alertVariants = cva(
  "relative grid w-full gap-2 overflow-hidden border-2 border-ink text-ink shadow-sticker-md",
  {
    compoundVariants: [
      {
        class: "bg-fill-danger-soft text-text-danger",
        tone: "danger",
        variant: "filled",
      },
      {
        class: "border-text-danger bg-surface text-text-danger",
        tone: "danger",
        variant: "outlined",
      },
      {
        class: "border-l-[8px] border-text-danger bg-surface text-text-danger",
        tone: "danger",
        variant: "stripe",
      },
      {
        class: "bg-fill-default-soft text-ink",
        tone: "default",
        variant: "filled",
      },
      {
        class: "bg-surface text-ink",
        tone: "default",
        variant: "outlined",
      },
      {
        class: "border-l-[8px] bg-surface text-ink",
        tone: "default",
        variant: "stripe",
      },
      {
        class: "bg-fill-info text-text-info",
        tone: "info",
        variant: "filled",
      },
      {
        class: "border-text-info bg-surface text-text-info",
        tone: "info",
        variant: "outlined",
      },
      {
        class: "border-l-[8px] border-text-info bg-surface text-text-info",
        tone: "info",
        variant: "stripe",
      },
      {
        class: "bg-fill-secondary text-text-secondary",
        tone: "secondary",
        variant: "filled",
      },
      {
        class: "border-text-secondary bg-surface text-text-secondary",
        tone: "secondary",
        variant: "outlined",
      },
      {
        class:
          "border-l-[8px] border-text-secondary bg-surface text-text-secondary",
        tone: "secondary",
        variant: "stripe",
      },
      {
        class: "bg-fill-success text-text-success",
        tone: "success",
        variant: "filled",
      },
      {
        class: "border-text-success bg-surface text-text-success",
        tone: "success",
        variant: "outlined",
      },
      {
        class:
          "border-l-[8px] border-text-success bg-surface text-text-success",
        tone: "success",
        variant: "stripe",
      },
      {
        class: "bg-fill-warning text-text-warning",
        tone: "warning",
        variant: "filled",
      },
      {
        class: "border-text-warning bg-surface text-text-warning",
        tone: "warning",
        variant: "outlined",
      },
      {
        class:
          "border-l-[8px] border-text-warning bg-surface text-text-warning",
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
        lg: "rounded-sticker-2xl p-5",
        md: "rounded-sticker-xl p-4",
        sm: "rounded-sticker-lg p-3",
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
        outlined: "shadow-sticker-sm",
        stripe: "shadow-sticker-sm",
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
function Alert({
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
      className={cn("text-sm leading-6 font-medium text-current/85", className)}
      data-slot="alert-description"
      {...props}
    />
  )
}

export {
  Alert,
  AlertDescription,
  AlertTitle,
  alertVariants,
  type AlertDescriptionProps,
  type AlertProps,
  type AlertTitleProps,
}
