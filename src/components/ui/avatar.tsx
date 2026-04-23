import { cva, type VariantProps } from "class-variance-authority"
import * as React from "react"

import { cn } from "@/lib/utils"

/**
 * Builds the sticker avatar className from size, shape, and tone options.
 */
const avatarVariants = cva(
  "relative inline-flex shrink-0 items-center justify-center overflow-hidden border-2 border-su-ink bg-su-paper align-middle font-black text-su-ink shadow-su-sm",
  {
    compoundVariants: [
      {
        class: "bg-su-fill-danger text-su-fg-danger",
        tone: "danger",
      },
      {
        class: "bg-su-fill-default text-su-ink",
        tone: "default",
      },
      {
        class: "bg-su-fill-info text-su-fg-info",
        tone: "info",
      },
      {
        class: "bg-su-fill-secondary text-su-fg-secondary",
        tone: "secondary",
      },
      {
        class: "bg-su-fill-success text-su-fg-success",
        tone: "success",
      },
      {
        class: "bg-su-fill-warning text-su-fg-warning",
        tone: "warning",
      },
    ],
    defaultVariants: {
      shape: "circle",
      size: "md",
      tone: "default",
    },
    variants: {
      shape: {
        circle: "rounded-full",
        rounded: "rounded-su-lg",
        square: "rounded-su-sm",
      },
      size: {
        lg: "size-16 text-xl",
        md: "size-12 text-base",
        sm: "size-9 text-xs",
        xl: "size-20 text-2xl",
        xs: "size-7 text-[0.625rem]",
      },
      tone: {
        danger: "",
        default: "",
        info: "",
        secondary: "",
        success: "",
        warning: "",
      },
    },
  },
)

/**
 * Props for the sticker avatar root.
 * @remarks Inherits native span attributes and adds sticker size, shape, and tone variants.
 */
interface AvatarProps
  extends
    React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof avatarVariants> {
  /**
   * Accessible label for image-only avatars.
   */
  "aria-label"?: string
  /**
   * Controls the avatar silhouette.
   * @default "circle"
   */
  shape?: "circle" | "rounded" | "square"
  /**
   * Controls the avatar dimensions.
   * @default "md"
   */
  size?: "lg" | "md" | "sm" | "xl" | "xs"
  /**
   * Controls the fallback paper tone.
   * @default "default"
   */
  tone?: "danger" | "default" | "info" | "secondary" | "success" | "warning"
}

/**
 * Props for the avatar image slot.
 */
type AvatarImageProps = React.ImgHTMLAttributes<HTMLImageElement>

/**
 * Props for the avatar fallback slot.
 */
type AvatarFallbackProps = React.HTMLAttributes<HTMLSpanElement>

/**
 * Sticker avatar frame for profile photos, initials, and team stacks.
 */
function AvatarRoot({
  className,
  shape = "circle",
  size = "md",
  tone = "default",
  ...props
}: AvatarProps) {
  return (
    <span
      className={cn(avatarVariants({ shape, size, tone }), className)}
      data-slot="avatar"
      {...props}
    />
  )
}

/**
 * Avatar image that fills the sticker frame.
 */
function AvatarImage({ alt = "", className, ...props }: AvatarImageProps) {
  return (
    <img
      alt={alt}
      className={cn("size-full object-cover", className)}
      data-slot="avatar-image"
      {...props}
    />
  )
}

/**
 * Avatar fallback for initials or small icons.
 */
function AvatarFallback({ className, ...props }: AvatarFallbackProps) {
  return (
    <span
      className={cn("grid size-full place-items-center", className)}
      data-slot="avatar-fallback"
      {...props}
    />
  )
}

/**
 * Sticker avatar frame for profile photos, initials, and team stacks.
 */
const Avatar = Object.assign(AvatarRoot, {
  Fallback: AvatarFallback,
  Image: AvatarImage,
})

export {
  Avatar,
  AvatarFallback,
  AvatarImage,
  avatarVariants,
  type AvatarFallbackProps,
  type AvatarImageProps,
  type AvatarProps,
}
