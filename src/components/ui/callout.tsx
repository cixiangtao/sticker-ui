import { cva, type VariantProps } from "class-variance-authority"
import {
  BadgeCheck,
  CircleAlert,
  CircleHelp,
  Info,
  Lightbulb,
  TriangleAlert,
} from "lucide-react"
import * as React from "react"

import { cn } from "@/lib/utils"

type CalloutTone =
  | "danger"
  | "default"
  | "info"
  | "secondary"
  | "success"
  | "warning"

/**
 * Builds the sticker callout className from tone and size options.
 */
const calloutVariants = cva(
  "relative grid w-full grid-cols-[auto_1fr] gap-3 overflow-hidden border-2 border-su-ink text-su-ink shadow-su-md",
  {
    compoundVariants: [
      {
        class: "bg-su-fill-danger",
        tone: "danger",
      },
      {
        class: "bg-su-fill-default-soft",
        tone: "default",
      },
      {
        class: "bg-su-fill-info",
        tone: "info",
      },
      {
        class: "bg-su-fill-secondary",
        tone: "secondary",
      },
      {
        class: "bg-su-fill-success",
        tone: "success",
      },
      {
        class: "bg-su-fill-warning",
        tone: "warning",
      },
    ],
    defaultVariants: {
      size: "md",
      tone: "info",
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
    },
  },
)

const calloutIconVariants = cva(
  "mt-0.5 inline-flex shrink-0 items-center justify-center rounded-su-md border-2 border-su-ink bg-su-surface shadow-su-xs",
  {
    defaultVariants: {
      size: "md",
    },
    variants: {
      size: {
        lg: "size-9",
        md: "size-8",
        sm: "size-7",
      },
    },
  },
)

/**
 * Props for the sticker callout root.
 * @remarks Inherits native section attributes and adds semantic tone and size variants.
 */
interface CalloutProps
  extends
    React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof calloutVariants> {
  /**
   * Controls the semantic element used by the callout.
   * @default "section"
   */
  as?: "aside" | "div" | "section"
  /**
   * Controls the callout padding and radius.
   * @default "md"
   */
  size?: "lg" | "md" | "sm"
  /**
   * Controls the semantic paper tone and default icon.
   * @default "info"
   */
  tone?: CalloutTone
}

/**
 * Props for the callout icon slot.
 */
interface CalloutIconProps
  extends
    React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof calloutIconVariants> {
  /**
   * Controls the icon badge size.
   * @default "md"
   */
  size?: "lg" | "md" | "sm"
  /**
   * Controls the fallback icon when no children are provided.
   * @default "info"
   */
  tone?: CalloutTone
}

type CalloutTitleProps = React.HTMLAttributes<HTMLHeadingElement>
type CalloutDescriptionProps = React.HTMLAttributes<HTMLParagraphElement>
type CalloutActionsProps = React.HTMLAttributes<HTMLDivElement>

const toneIcons: Record<
  CalloutTone,
  React.ComponentType<{ className?: string }>
> = {
  danger: CircleAlert,
  default: CircleHelp,
  info: Info,
  secondary: Lightbulb,
  success: BadgeCheck,
  warning: TriangleAlert,
}

/**
 * Sticker callout surface for docs notes, warnings, tips, and inline status.
 */
function CalloutRoot({
  as: Component = "section",
  className,
  role = "note",
  size = "md",
  tone = "info",
  ...props
}: CalloutProps) {
  return (
    <Component
      className={cn(calloutVariants({ size, tone }), className)}
      data-slot="callout"
      data-tone={tone}
      role={role}
      {...props}
    />
  )
}

/**
 * Callout icon badge.
 */
function CalloutIcon({
  children,
  className,
  size = "md",
  tone = "info",
  ...props
}: CalloutIconProps) {
  const ToneIcon = toneIcons[tone]

  return (
    <span
      className={cn(calloutIconVariants({ size }), className)}
      data-slot="callout-icon"
      {...props}
    >
      {children ?? <ToneIcon className="size-4 stroke-[3]" />}
    </span>
  )
}

/**
 * Callout title text.
 */
function CalloutTitle({ className, ...props }: CalloutTitleProps) {
  return (
    <h3
      className={cn("m-0 text-sm leading-5 font-black", className)}
      data-slot="callout-title"
      {...props}
    />
  )
}

/**
 * Callout supporting copy.
 */
function CalloutDescription({ className, ...props }: CalloutDescriptionProps) {
  return (
    <p
      className={cn("m-0 text-sm leading-6 font-medium", className)}
      data-slot="callout-description"
      {...props}
    />
  )
}

/**
 * Callout action row.
 */
function CalloutActions({ className, ...props }: CalloutActionsProps) {
  return (
    <div
      className={cn("mt-2 flex flex-wrap gap-2", className)}
      data-slot="callout-actions"
      {...props}
    />
  )
}

/**
 * Sticker callout surface for docs notes, warnings, tips, and inline status.
 */
const Callout = Object.assign(CalloutRoot, {
  Actions: CalloutActions,
  Description: CalloutDescription,
  Icon: CalloutIcon,
  Title: CalloutTitle,
})

export {
  Callout,
  CalloutActions,
  CalloutDescription,
  CalloutIcon,
  CalloutTitle,
  calloutVariants,
  type CalloutActionsProps,
  type CalloutDescriptionProps,
  type CalloutIconProps,
  type CalloutProps,
  type CalloutTitleProps,
}
