import { cva, type VariantProps } from "class-variance-authority"
import * as React from "react"

import { cn } from "@/lib/utils"

/**
 * Builds the sticker input className from structure, tone, and size variants.
 */
const inputVariants = cva(
  "flex w-full min-w-0 border-2 border-su-ink bg-su-surface font-bold text-su-ink shadow-su-sm transition duration-150 outline-none selection:bg-su-fill-default selection:text-su-ink placeholder:text-su-fg-placeholder focus-visible:shadow-su-md focus-visible:ring-[2px] focus-visible:ring-su-ring/65 aria-invalid:border-su-fg-danger aria-invalid:bg-su-fill-danger aria-invalid:text-su-fg-danger",
  {
    compoundVariants: [
      {
        class: "border-su-fg-danger bg-su-fill-danger text-su-fg-danger",
        tone: "danger",
        variant: "filled",
      },
      {
        class: "border-su-fg-danger bg-su-surface text-su-fg-danger",
        tone: "danger",
        variant: "outlined",
      },
      {
        class: "border-transparent bg-su-fill-danger text-su-fg-danger",
        tone: "danger",
        variant: "quiet",
      },
      {
        class: "bg-su-fill-default-soft",
        tone: "default",
        variant: "filled",
      },
      {
        class: "bg-su-surface",
        tone: "default",
        variant: "outlined",
      },
      {
        class: "border-transparent bg-su-surface-muted shadow-none",
        tone: "default",
        variant: "quiet",
      },
      {
        class: "border-su-fg-info bg-su-fill-info text-su-fg-info",
        tone: "info",
        variant: "filled",
      },
      {
        class: "border-su-fg-info bg-su-surface text-su-fg-info",
        tone: "info",
        variant: "outlined",
      },
      {
        class: "border-transparent bg-su-fill-info text-su-fg-info shadow-none",
        tone: "info",
        variant: "quiet",
      },
      {
        class:
          "border-su-fg-secondary bg-su-fill-secondary text-su-fg-secondary",
        tone: "secondary",
        variant: "filled",
      },
      {
        class: "border-su-fg-secondary bg-su-surface text-su-fg-secondary",
        tone: "secondary",
        variant: "outlined",
      },
      {
        class:
          "border-transparent bg-su-fill-secondary text-su-fg-secondary shadow-none",
        tone: "secondary",
        variant: "quiet",
      },
      {
        class: "border-su-fg-success bg-su-fill-success text-su-fg-success",
        tone: "success",
        variant: "filled",
      },
      {
        class: "border-su-fg-success bg-su-surface text-su-fg-success",
        tone: "success",
        variant: "outlined",
      },
      {
        class:
          "border-transparent bg-su-fill-success text-su-fg-success shadow-none",
        tone: "success",
        variant: "quiet",
      },
      {
        class: "border-su-fg-warning bg-su-fill-warning text-su-fg-warning",
        tone: "warning",
        variant: "filled",
      },
      {
        class: "border-su-fg-warning bg-su-surface text-su-fg-warning",
        tone: "warning",
        variant: "outlined",
      },
      {
        class:
          "border-transparent bg-su-fill-warning text-su-fg-warning shadow-none",
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
      disabled: {
        false: "",
        true: "cursor-not-allowed opacity-55",
      },
      size: {
        lg: "h-12 rounded-su-xl px-4 text-base",
        md: "h-11 rounded-su-lg px-3.5 text-sm",
        sm: "h-9 rounded-su-md px-3 text-xs",
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
    Omit<
      VariantProps<typeof inputVariants>,
      "disabled" | "size" | "tone" | "variant"
    > {
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
  disabled,
  onChange,
  size = "md",
  tone = "default",
  type = "text",
  variant = "outlined",
  ...props
}: InputProps) {
  return (
    <input
      className={cn(
        inputVariants({ disabled, size, tone, variant }),
        className,
      )}
      data-slot="input"
      disabled={disabled}
      onChange={(event) => {
        onChange?.(event.currentTarget.value, event)
      }}
      type={type}
      {...props}
    />
  )
}

export { Input, inputVariants }
