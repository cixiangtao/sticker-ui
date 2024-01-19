import { Slot, Slottable } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import * as React from "react"

import { cn } from "@/lib/utils"

/**
 * Builds the sticker button className from structure, color, and size variants.
 */
const buttonVariants = cva(
  "inline-flex shrink-0 items-center justify-center gap-2 rounded-sticker-md border-2 font-extrabold leading-none outline-none transition duration-150 focus-visible:ring-[2px] focus-visible:ring-ring/65 disabled:pointer-events-none disabled:opacity-55 data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-55 data-[loading=true]:cursor-wait data-[loading=true]:opacity-75",
  {
    compoundVariants: [
      {
        class: "text-text-danger hover:bg-fill-danger-soft",
        color: "danger",
        variant: ["dashed", "outlined", "text"],
      },
      {
        class: "bg-fill-danger-soft text-text-danger hover:bg-fill-danger",
        color: "danger",
        variant: "filled",
      },
      {
        class: "text-text-danger hover:text-ink",
        color: "danger",
        variant: "link",
      },
      {
        class: "bg-fill-danger text-ink",
        color: "danger",
        variant: "solid",
      },
      {
        class: "text-ink hover:bg-fill-warning",
        color: "default",
        variant: ["dashed", "outlined", "text"],
      },
      {
        class: "bg-fill-warning text-ink hover:bg-fill-default",
        color: "default",
        variant: "filled",
      },
      {
        class: "text-ink hover:text-ink",
        color: "default",
        variant: "link",
      },
      {
        class: "bg-fill-default text-ink",
        color: "default",
        variant: "solid",
      },
      {
        class: "text-text-info hover:bg-fill-info",
        color: "info",
        variant: ["dashed", "outlined", "text"],
      },
      {
        class: "bg-fill-info text-text-info hover:bg-fill-info",
        color: "info",
        variant: "filled",
      },
      {
        class: "text-text-info hover:text-ink",
        color: "info",
        variant: "link",
      },
      {
        class: "bg-fill-info text-ink",
        color: "info",
        variant: "solid",
      },
      {
        class: "text-text-secondary hover:bg-fill-secondary",
        color: "secondary",
        variant: ["dashed", "outlined", "text"],
      },
      {
        class:
          "bg-fill-secondary text-text-secondary hover:bg-fill-secondary-strong",
        color: "secondary",
        variant: "filled",
      },
      {
        class: "text-text-secondary hover:text-ink",
        color: "secondary",
        variant: "link",
      },
      {
        class: "bg-fill-secondary text-ink",
        color: "secondary",
        variant: "solid",
      },
      {
        class: "text-text-success hover:bg-fill-success",
        color: "success",
        variant: ["dashed", "outlined", "text"],
      },
      {
        class: "bg-fill-success text-text-success hover:bg-fill-success",
        color: "success",
        variant: "filled",
      },
      {
        class: "text-text-success hover:text-ink",
        color: "success",
        variant: "link",
      },
      {
        class: "bg-fill-success text-ink",
        color: "success",
        variant: "solid",
      },
      {
        class: "text-text-warning hover:bg-fill-warning",
        color: "warning",
        variant: ["dashed", "outlined", "text"],
      },
      {
        class: "bg-fill-warning text-text-warning hover:bg-fill-warning",
        color: "warning",
        variant: "filled",
      },
      {
        class: "text-text-warning hover:text-ink",
        color: "warning",
        variant: "link",
      },
      {
        class: "bg-fill-warning text-ink",
        color: "warning",
        variant: "solid",
      },
    ],
    defaultVariants: {
      color: "default",
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
      size: {
        icon: "size-11 p-0",
        lg: "h-12 rounded-sticker-lg px-6 text-base",
        md: "h-11 px-5 text-sm",
        sm: "h-9 rounded-sticker-sm px-3 text-xs",
      },
      variant: {
        dashed:
          "border-dashed border-ink bg-surface shadow-sticker-sm hover:-translate-y-0.5 hover:shadow-sticker-md active:translate-x-0.5 active:translate-y-0.5 active:shadow-sticker-xs",
        filled:
          "border-0 shadow-none hover:-translate-y-0.5 hover:shadow-none active:translate-x-0.5 active:translate-y-0.5 active:shadow-none",
        link: "border-transparent bg-transparent shadow-none underline decoration-[3px] underline-offset-4 hover:-translate-y-0.5 hover:bg-transparent hover:shadow-none active:translate-y-0 active:shadow-none",
        outlined:
          "border-ink bg-surface shadow-sticker-md hover:-translate-y-0.5 hover:shadow-sticker-lg active:translate-x-1 active:translate-y-1 active:shadow-sticker-xs",
        solid:
          "border-ink shadow-sticker-md hover:-translate-y-0.5 hover:shadow-sticker-lg active:translate-x-1 active:translate-y-1 active:shadow-sticker-xs",
        text: "border-transparent bg-transparent shadow-none hover:-translate-y-0.5 hover:shadow-none active:translate-y-0 active:shadow-none",
      },
    },
  },
)

/**
 * Props for the sticker button root element.
 * @remarks Inherits native button attributes and adds sticker structure, color, size, and loading states.
 */
interface ButtonProps
  extends
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
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
   * Shows a loading indicator and disables the button while pending.
   * @default false
   */
  loading?: boolean
  /**
   * Controls the button size and padding.
   * @default "md"
   */
  size?: "icon" | "lg" | "md" | "sm"
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
      className={cn(buttonVariants({ color, size, variant }), className)}
      data-disabled={isDisabled}
      data-loading={loading}
      data-slot="button"
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

export { Button, buttonVariants }
