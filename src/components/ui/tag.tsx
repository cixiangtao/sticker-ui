import { cva, type VariantProps } from "class-variance-authority"
import * as React from "react"

import { cn } from "@/lib/utils"

/**
 * Builds the tag className from structure, color, and size variants.
 */
const tagVariants = cva(
  "inline-flex w-fit shrink-0 items-center justify-center gap-1.5 border-su-ink leading-none font-extrabold transition duration-150",
  {
    defaultVariants: {
      color: "default",
      rounded: "rounded",
      size: "default",
      variant: "solid",
    },
    compoundVariants: [
      {
        class: "rounded-su-xs",
        rounded: "rounded",
        size: "xs",
      },
      {
        class: "rounded-su-xs",
        rounded: "rounded",
        size: "sm",
      },
      {
        class: "rounded-su-sm",
        rounded: "rounded",
        size: "default",
      },
      {
        class: "rounded-su-md",
        rounded: "rounded",
        size: "lg",
      },
      {
        class: "bg-su-fill-danger-strong text-su-fg-danger",
        color: "danger",
        variant: "filled",
      },
      {
        class: "border-current bg-su-surface text-su-fg-danger",
        color: "danger",
        variant: "outlined",
      },
      {
        class: "border-su-ink bg-su-fill-danger-strong text-su-ink",
        color: "danger",
        variant: "solid",
      },
      {
        class: "bg-su-ink text-su-paper",
        color: "default",
        variant: "filled",
      },
      {
        class: "border-current bg-su-surface text-su-ink",
        color: "default",
        variant: "outlined",
      },
      {
        class: "bg-su-fill-default text-su-ink",
        color: "default",
        variant: "solid",
      },
      {
        class: "bg-su-fill-info-strong text-su-fg-info",
        color: "info",
        variant: "filled",
      },
      {
        class: "border-current bg-su-surface text-su-fg-info",
        color: "info",
        variant: "outlined",
      },
      {
        class: "border-su-ink bg-su-fill-info text-su-ink",
        color: "info",
        variant: "solid",
      },
      {
        class: "bg-su-fill-secondary-strong text-su-fg-secondary",
        color: "secondary",
        variant: "filled",
      },
      {
        class: "border-current bg-su-surface text-su-fg-secondary",
        color: "secondary",
        variant: "outlined",
      },
      {
        class: "border-su-ink bg-su-fill-secondary text-su-ink",
        color: "secondary",
        variant: "solid",
      },
      {
        class: "bg-su-fill-success-strong text-su-fg-success",
        color: "success",
        variant: "filled",
      },
      {
        class: "border-current bg-su-surface text-su-fg-success",
        color: "success",
        variant: "outlined",
      },
      {
        class: "border-su-ink bg-su-fill-success text-su-ink",
        color: "success",
        variant: "solid",
      },
      {
        class: "bg-su-fill-warning-strong text-su-fg-warning",
        color: "warning",
        variant: "filled",
      },
      {
        class: "border-current bg-su-surface text-su-fg-warning",
        color: "warning",
        variant: "outlined",
      },
      {
        class: "border-su-ink bg-su-fill-warning text-su-ink",
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
        filled: "border-transparent shadow-su-sm",
        outlined: "",
        solid: "shadow-su-sm",
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
          "cursor-pointer hover:-translate-y-0.5 hover:shadow-su-sm active:translate-x-0.5 active:translate-y-0.5 active:shadow-su-xs",
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
