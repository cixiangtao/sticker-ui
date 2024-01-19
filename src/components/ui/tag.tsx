import { cva, type VariantProps } from "class-variance-authority"
import * as React from "react"

import { cn } from "@/lib/utils"

/**
 * Builds the tag className from structure, color, and size variants.
 */
const tagVariants = cva(
  "inline-flex w-fit shrink-0 items-center justify-center gap-1.5 border-ink font-extrabold leading-none transition duration-150",
  {
    defaultVariants: {
      color: "default",
      rounded: "rounded",
      size: "default",
      variant: "solid",
    },
    compoundVariants: [
      {
        class: "rounded-sticker-xs",
        rounded: "rounded",
        size: "xs",
      },
      {
        class: "rounded-sticker-xs",
        rounded: "rounded",
        size: "sm",
      },
      {
        class: "rounded-sticker-sm",
        rounded: "rounded",
        size: "default",
      },
      {
        class: "rounded-sticker-md",
        rounded: "rounded",
        size: "lg",
      },
      {
        class: "bg-fill-danger text-text-danger",
        color: "danger",
        variant: "filled",
      },
      {
        class: "border-current bg-surface text-text-danger",
        color: "danger",
        variant: "outlined",
      },
      {
        class: "border-ink bg-fill-danger text-ink",
        color: "danger",
        variant: "solid",
      },
      {
        class: "bg-ink text-paper",
        color: "default",
        variant: "filled",
      },
      {
        class: "border-current bg-surface text-ink",
        color: "default",
        variant: "outlined",
      },
      {
        class: "bg-fill-default text-ink",
        color: "default",
        variant: "solid",
      },
      {
        class: "bg-fill-info-strong text-text-info",
        color: "info",
        variant: "filled",
      },
      {
        class: "border-current bg-surface text-text-info",
        color: "info",
        variant: "outlined",
      },
      {
        class: "border-ink bg-fill-info text-ink",
        color: "info",
        variant: "solid",
      },
      {
        class: "bg-fill-secondary-strong text-text-secondary",
        color: "secondary",
        variant: "filled",
      },
      {
        class: "border-current bg-surface text-text-secondary",
        color: "secondary",
        variant: "outlined",
      },
      {
        class: "border-ink bg-fill-secondary text-ink",
        color: "secondary",
        variant: "solid",
      },
      {
        class: "bg-fill-success-strong text-text-success",
        color: "success",
        variant: "filled",
      },
      {
        class: "border-current bg-surface text-text-success",
        color: "success",
        variant: "outlined",
      },
      {
        class: "border-ink bg-fill-success text-ink",
        color: "success",
        variant: "solid",
      },
      {
        class: "bg-fill-warning-strong text-text-warning",
        color: "warning",
        variant: "filled",
      },
      {
        class: "border-current bg-surface text-text-warning",
        color: "warning",
        variant: "outlined",
      },
      {
        class: "border-ink bg-fill-warning text-ink",
        color: "warning",
        variant: "solid",
      },
    ],
    variants: {
      color: {
        danger: "",
        default: "",
        info: "",
        secondary: "",
        success: "",
        warning: "",
      },
      rounded: {
        pill: "rounded-full",
        rounded: "",
      },
      size: {
        default: "h-8 border-2 px-3 text-xs",
        lg: "h-10 border-2 px-4 text-sm",
        sm: "h-6 border px-2 text-[11px]",
        xs: "h-5 gap-1 border px-1.5 text-[10px]",
      },
      variant: {
        filled: "border-transparent shadow-sticker-sm",
        outlined: "",
        solid: "shadow-sticker-sm",
      },
    },
  },
)

type TagElement = "a" | "button" | "code" | "div" | "span"

/**
 * Props for the sticker tag element.
 * @remarks Inherits native HTML attributes and adds semantic element and sticker variants.
 */
interface TagProps
  extends React.HTMLAttributes<HTMLElement>, VariantProps<typeof tagVariants> {
  /**
   * Controls the semantic root element rendered by the tag.
   * @default "span"
   */
  as?: TagElement
  /**
   * Controls the semantic tag color.
   * @default "default"
   */
  color?: "danger" | "default" | "info" | "secondary" | "success" | "warning"
  /**
   * Shows a small status dot before the tag content.
   * @default false
   */
  dot?: boolean
  /**
   * Controls whether the tag is pill-shaped or softly rounded by size.
   * @default "rounded"
   */
  rounded?: "pill" | "rounded"
  /**
   * Controls the tag height, padding, and text size.
   * @default "default"
   */
  size?: "default" | "lg" | "sm" | "xs"
  /**
   * Controls the tag visual structure and emphasis.
   * @default "solid"
   */
  variant?: "filled" | "outlined" | "solid"
}

function Tag({
  as: Component = "span",
  children,
  className,
  color = "default",
  dot = false,
  rounded = "rounded",
  size = "default",
  variant = "solid",
  ...props
}: TagProps) {
  const isInteractive = Component === "a" || Component === "button"

  return (
    <Component
      className={cn(
        tagVariants({ color, rounded, size, variant }),
        isInteractive &&
          "hover:shadow-sticker-sm active:shadow-sticker-xs cursor-pointer hover:-translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5",
        className,
      )}
      data-slot="tag"
      {...props}
    >
      {dot ? (
        <span
          aria-hidden="true"
          className={cn(
            "rounded-full border border-current bg-current",
            size === "xs" ? "size-1.5" : "size-2",
          )}
        />
      ) : null}
      {children}
    </Component>
  )
}

export { Tag, tagVariants }
