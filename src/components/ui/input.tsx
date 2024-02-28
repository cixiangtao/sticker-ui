import { cva, type VariantProps } from "class-variance-authority"
import * as React from "react"

import { cn } from "@/lib/utils"

/**
 * Builds the sticker input className from structure, tone, and size variants.
 */
const inputVariants = cva(
  "flex w-full min-w-0 border-2 border-ink bg-surface font-bold text-ink shadow-sticker-sm transition duration-150 outline-none selection:bg-fill-default selection:text-ink placeholder:text-text-placeholder focus-visible:shadow-sticker-md focus-visible:ring-[2px] focus-visible:ring-ring/65 disabled:cursor-not-allowed disabled:opacity-55 aria-invalid:border-text-danger aria-invalid:bg-fill-danger-soft aria-invalid:text-text-danger",
  {
    compoundVariants: [
      {
        class: "border-text-danger bg-fill-danger-soft text-text-danger",
        tone: "danger",
        variant: "filled",
      },
      {
        class: "border-text-danger bg-surface text-text-danger",
        tone: "danger",
        variant: "outlined",
      },
      {
        class: "border-transparent bg-fill-danger-soft text-text-danger",
        tone: "danger",
        variant: "quiet",
      },
      {
        class: "bg-fill-default-soft",
        tone: "default",
        variant: "filled",
      },
      {
        class: "bg-surface",
        tone: "default",
        variant: "outlined",
      },
      {
        class: "border-transparent bg-surface-muted shadow-none",
        tone: "default",
        variant: "quiet",
      },
      {
        class: "border-text-info bg-fill-info text-text-info",
        tone: "info",
        variant: "filled",
      },
      {
        class: "border-text-info bg-surface text-text-info",
        tone: "info",
        variant: "outlined",
      },
      {
        class: "border-transparent bg-fill-info text-text-info shadow-none",
        tone: "info",
        variant: "quiet",
      },
      {
        class: "border-text-secondary bg-fill-secondary text-text-secondary",
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
          "border-transparent bg-fill-secondary text-text-secondary shadow-none",
        tone: "secondary",
        variant: "quiet",
      },
      {
        class: "border-text-success bg-fill-success text-text-success",
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
          "border-transparent bg-fill-success text-text-success shadow-none",
        tone: "success",
        variant: "quiet",
      },
      {
        class: "border-text-warning bg-fill-warning text-text-warning",
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
          "border-transparent bg-fill-warning text-text-warning shadow-none",
        tone: "warning",
        variant: "quiet",
      },
    ],
    defaultVariants: {
      size: "md",
      tone: "default",
      variant: "outlined",
    },
    variants: {
      size: {
        lg: "h-12 rounded-sticker-xl px-4 text-base",
        md: "h-11 rounded-sticker-lg px-3.5 text-sm",
        sm: "h-9 rounded-sticker-md px-3 text-xs",
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
        outlined: "",
        quiet: "",
      },
    },
  },
)

type InputType = "email" | "search" | "tel" | "text" | "url"

type InputChangeHandler = (
  value: string,
  event: React.ChangeEvent<HTMLInputElement>,
) => void

/**
 * Props for the sticker input element.
 * @remarks Inherits native input attributes, except `onChange`, non-text input types, and the numeric HTML `size` attribute are replaced by sticker component APIs.
 */
interface InputProps
  extends
    Omit<
      React.InputHTMLAttributes<HTMLInputElement>,
      "onChange" | "size" | "type"
    >,
    Omit<VariantProps<typeof inputVariants>, "size" | "tone" | "variant"> {
  /**
   * Runs when the input value changes.
   * @remarks Receives the next string value first and the native change event second.
   */
  onChange?: InputChangeHandler
  /**
   * Controls the input height, radius, and text size.
   * @default "md"
   */
  size?: "lg" | "md" | "sm"
  /**
   * Controls the native text input type.
   * @default "text"
   */
  type?: InputType
  /**
   * Controls the input semantic paper tone.
   * @default "default"
   */
  tone?: "danger" | "default" | "info" | "secondary" | "success" | "warning"
  /**
   * Controls the input border and fill emphasis.
   * @default "outlined"
   */
  variant?: "filled" | "outlined" | "quiet"
}

function Input({
  className,
  onChange,
  size = "md",
  tone = "default",
  type = "text",
  variant = "outlined",
  ...props
}: InputProps) {
  return (
    <input
      className={cn(inputVariants({ size, tone, variant }), className)}
      data-slot="input"
      onChange={(event) => {
        onChange?.(event.currentTarget.value, event)
      }}
      type={type}
      {...props}
    />
  )
}

export { Input, inputVariants }
