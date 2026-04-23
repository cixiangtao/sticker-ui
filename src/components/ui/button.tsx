import { Slot, Slottable } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import * as React from "react"

import { cn } from "@/lib/utils"

/**
 * Builds the sticker button className from structure, color, size, and shape variants.
 */
const buttonVariants = cva(
  "inline-flex shrink-0 cursor-pointer items-center justify-center gap-2 rounded-su-md border-2 leading-none font-extrabold transition duration-150 outline-none focus-visible:ring-[2px] focus-visible:ring-su-ring/65",
  {
    compoundVariants: [
      {
        class: "size-12 p-0",
        shape: "square",
        size: "lg",
      },
      {
        class: "size-11 p-0",
        shape: "square",
        size: "md",
      },
      {
        class: "size-9 p-0",
        shape: "square",
        size: "sm",
      },
      {
        class: "text-su-fg-danger hover:bg-su-fill-danger",
        color: "danger",
        variant: ["dashed", "outlined", "text"],
      },
      {
        class:
          "bg-su-fill-danger text-su-fg-danger hover:bg-su-fill-danger-strong",
        color: "danger",
        variant: "filled",
      },
      {
        class: "text-su-fg-danger hover:text-su-ink",
        color: "danger",
        variant: "link",
      },
      {
        class: "bg-su-fill-danger-strong text-su-ink",
        color: "danger",
        variant: "solid",
      },
      {
        class: "text-su-ink hover:bg-su-fill-warning",
        color: "default",
        variant: ["dashed", "outlined", "text"],
      },
      {
        class: "bg-su-fill-warning text-su-ink hover:bg-su-fill-default",
        color: "default",
        variant: "filled",
      },
      {
        class: "text-su-ink hover:text-su-ink",
        color: "default",
        variant: "link",
      },
      {
        class: "bg-su-fill-default text-su-ink",
        color: "default",
        variant: "solid",
      },
      {
        class: "text-su-fg-info hover:bg-su-fill-info",
        color: "info",
        variant: ["dashed", "outlined", "text"],
      },
      {
        class: "bg-su-fill-info text-su-fg-info hover:bg-su-fill-info",
        color: "info",
        variant: "filled",
      },
      {
        class: "text-su-fg-info hover:text-su-ink",
        color: "info",
        variant: "link",
      },
      {
        class: "bg-su-fill-info text-su-ink",
        color: "info",
        variant: "solid",
      },
      {
        class: "text-su-fg-secondary hover:bg-su-fill-secondary",
        color: "secondary",
        variant: ["dashed", "outlined", "text"],
      },
      {
        class:
          "bg-su-fill-secondary text-su-fg-secondary hover:bg-su-fill-secondary-strong",
        color: "secondary",
        variant: "filled",
      },
      {
        class: "text-su-fg-secondary hover:text-su-ink",
        color: "secondary",
        variant: "link",
      },
      {
        class: "bg-su-fill-secondary text-su-ink",
        color: "secondary",
        variant: "solid",
      },
      {
        class: "text-su-fg-success hover:bg-su-fill-success",
        color: "success",
        variant: ["dashed", "outlined", "text"],
      },
      {
        class: "bg-su-fill-success text-su-fg-success hover:bg-su-fill-success",
        color: "success",
        variant: "filled",
      },
      {
        class: "text-su-fg-success hover:text-su-ink",
        color: "success",
        variant: "link",
      },
      {
        class: "bg-su-fill-success text-su-ink",
        color: "success",
        variant: "solid",
      },
      {
        class: "text-su-fg-warning hover:bg-su-fill-warning",
        color: "warning",
        variant: ["dashed", "outlined", "text"],
      },
      {
        class: "bg-su-fill-warning text-su-fg-warning hover:bg-su-fill-warning",
        color: "warning",
        variant: "filled",
      },
      {
        class: "text-su-fg-warning hover:text-su-ink",
        color: "warning",
        variant: "link",
      },
      {
        class: "bg-su-fill-warning text-su-ink",
        color: "warning",
        variant: "solid",
      },
    ],
    defaultVariants: {
      color: "default",
      shape: "default",
      size: "md",
      variant: "solid",
    },
    variants: {
      color: {
        danger: "",
        default: "",
        info: "",
        secondary: "",
        success: "",
        warning: "",
      },
      disabled: {
        false: "",
        true: "cursor-not-allowed opacity-55",
      },
      loading: {
        false: "",
        true: "cursor-wait opacity-75",
      },
      shape: {
        default: "",
        square: "",
      },
      size: {
        lg: "h-12 rounded-su-lg px-6 text-base",
        md: "h-11 px-5 text-sm",
        sm: "h-9 rounded-su-sm px-3 text-xs",
      },
      variant: {
        dashed:
          "border-dashed border-su-ink bg-su-surface shadow-su-sm hover:-translate-y-0.5 hover:shadow-su-md active:translate-x-0.5 active:translate-y-0.5 active:shadow-su-xs",
        filled:
          "border-0 shadow-none hover:-translate-y-0.5 hover:shadow-none active:translate-x-0.5 active:translate-y-0.5 active:shadow-none",
        link: "border-transparent bg-transparent underline decoration-[3px] underline-offset-4 shadow-none hover:-translate-y-0.5 hover:bg-transparent hover:shadow-none active:translate-y-0 active:shadow-none",
        outlined:
          "border-su-ink bg-su-surface shadow-su-md hover:-translate-y-0.5 hover:shadow-su-lg active:translate-x-1 active:translate-y-1 active:shadow-su-xs",
        solid:
          "border-su-ink shadow-su-md hover:-translate-y-0.5 hover:shadow-su-lg active:translate-x-1 active:translate-y-1 active:shadow-su-xs",
        text: "border-transparent bg-transparent shadow-none hover:-translate-y-0.5 hover:shadow-none active:translate-y-0 active:shadow-none",
      },
    },
  },
)

/**
 * Props for the sticker button root element.
 * @remarks Inherits native button attributes and adds sticker structure, color, size, shape, and loading states.
 */
interface ButtonProps
  extends
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    Omit<VariantProps<typeof buttonVariants>, "disabled" | "loading"> {
  /**
   * Renders the button styles and state props on the only child element.
   * @default false
   */
  asChild?: boolean
  /**
   * Controls the semantic button color.
   * @default "default"
   */
  color?: "danger" | "default" | "info" | "secondary" | "success" | "warning"
  /**
   * Controls whether the button uses its normal content shape or a square command shape.
   * @default "default"
   */
  shape?: "default" | "square"
  /**
   * Shows a loading indicator and disables the button while pending.
   * @default false
   */
  loading?: boolean
  /**
   * Controls the button height, text scale, and standard padding.
   * @default "md"
   */
  size?: "lg" | "md" | "sm"
  /**
   * Controls the button visual structure and emphasis.
   * @default "solid"
   */
  variant?: "dashed" | "filled" | "link" | "outlined" | "solid" | "text"
}

function Button({
  asChild = false,
  className,
  color = "default",
  disabled,
  loading = false,
  onClick,
  onClickCapture,
  shape = "default",
  size = "md",
  type = "button",
  variant = "solid",
  children,
  ...props
}: ButtonProps) {
  const isDisabled = disabled || loading
  const Component = asChild ? Slot : "button"
  const childProps = asChild
    ? { "aria-disabled": isDisabled || undefined }
    : { disabled: isDisabled, type }

  return (
    <Component
      aria-busy={loading || undefined}
      className={cn(
        buttonVariants({
          color,
          disabled: isDisabled,
          loading,
          shape,
          size,
          variant,
        }),
        className,
      )}
      data-slot="button"
      onClickCapture={(event) => {
        if (isDisabled) {
          event.preventDefault()
          event.stopPropagation()
          return
        }

        onClickCapture?.(event)
      }}
      onClick={(event) => {
        if (isDisabled) {
          event.preventDefault()
          event.stopPropagation()
          return
        }

        onClick?.(event)
      }}
      {...childProps}
      {...props}
    >
      {loading ? (
        <span
          aria-hidden="true"
          className="size-3.5 animate-spin rounded-full border-2 border-current border-r-transparent"
          data-slot="button-loading-indicator"
        />
      ) : null}
      <Slottable>{children}</Slottable>
    </Component>
  )
}

export { Button, buttonVariants, type ButtonProps }
