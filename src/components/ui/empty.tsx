import { cva, type VariantProps } from "class-variance-authority"
import { Inbox } from "lucide-react"
import * as React from "react"

import { cn } from "@/lib/utils"

/**
 * Builds the sticker empty-state root className from size, tone, and structure variants.
 */
const emptyVariants = cva(
  "relative grid w-full justify-items-center overflow-hidden border-su-ink text-center text-su-ink",
  {
    compoundVariants: [
      {
        class: "border-[3px] bg-[var(--empty-fill)] shadow-su-xl",
        variant: "panel",
      },
      {
        class: "border-2 bg-su-surface shadow-su-sm",
        variant: "outlined",
      },
      {
        class: "border-transparent bg-transparent shadow-none",
        variant: "plain",
      },
    ],
    defaultVariants: {
      size: "md",
      tone: "default",
      variant: "panel",
    },
    variants: {
      size: {
        lg: "gap-4 rounded-su-panel px-6 py-9 [--empty-description-size:0.9375rem] [--empty-icon-size:4.5rem] [--empty-icon-svg:2rem] [--empty-title-size:1.25rem] sm:px-8",
        md: "gap-3 rounded-su-3xl px-5 py-7 [--empty-description-size:0.875rem] [--empty-icon-size:3.75rem] [--empty-icon-svg:1.625rem] [--empty-title-size:1.125rem]",
        sm: "gap-2 rounded-su-2xl px-4 py-5 [--empty-description-size:0.8125rem] [--empty-icon-size:3rem] [--empty-icon-svg:1.25rem] [--empty-title-size:1rem]",
      },
      tone: {
        danger:
          "[--empty-accent:var(--color-su-fill-danger-strong)] [--empty-fg:var(--color-su-fg-danger)] [--empty-fill:var(--color-su-fill-danger)]",
        default:
          "[--empty-accent:var(--color-su-fill-default)] [--empty-fg:var(--color-su-ink)] [--empty-fill:var(--color-su-fill-default-soft)]",
        info: "[--empty-accent:var(--color-su-fill-info-strong)] [--empty-fg:var(--color-su-fg-info)] [--empty-fill:var(--color-su-fill-info)]",
        secondary:
          "[--empty-accent:var(--color-su-fill-secondary-strong)] [--empty-fg:var(--color-su-fg-secondary)] [--empty-fill:var(--color-su-fill-secondary)]",
        success:
          "[--empty-accent:var(--color-su-fill-success-strong)] [--empty-fg:var(--color-su-fg-success)] [--empty-fill:var(--color-su-fill-success)]",
        warning:
          "[--empty-accent:var(--color-su-fill-warning-strong)] [--empty-fg:var(--color-su-fg-warning)] [--empty-fill:var(--color-su-fill-warning)]",
      },
      variant: {
        outlined: "",
        panel: "",
        plain: "",
      },
    },
  },
)

type EmptyElement = "article" | "div" | "section"

/**
 * Props for the sticker empty-state root.
 * @remarks Inherits native HTML attributes and adds semantic element, size, tone, and structure variants.
 */
interface EmptyProps
  extends
    React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof emptyVariants> {
  /**
   * Convenience actions shown when `children` are not provided.
   */
  actions?: React.ReactNode
  /**
   * Controls the semantic root element rendered by the empty state.
   * @default "section"
   */
  as?: EmptyElement
  /**
   * Convenience body copy shown when `children` are not provided.
   * @default "There is nothing to show yet."
   */
  description?: React.ReactNode
  /**
   * Convenience heading shown when `children` are not provided.
   * @default "No data"
   */
  heading?: React.ReactNode
  /**
   * Convenience icon shown when `children` are not provided.
   * @default <Inbox />
   */
  icon?: React.ReactNode
  /**
   * Controls spacing, radius, and inner icon scale.
   * @default "md"
   */
  size?: "lg" | "md" | "sm"
  /**
   * Controls the semantic paper tone.
   * @default "default"
   */
  tone?: "danger" | "default" | "info" | "secondary" | "success" | "warning"
  /**
   * Controls the empty-state surface structure and emphasis.
   * @default "panel"
   */
  variant?: "outlined" | "panel" | "plain"
}

/**
 * Sticker empty state for blank lists, filtered results, and onboarding placeholders.
 */
function Empty({
  actions,
  as: Component = "section",
  children,
  className,
  description = "There is nothing to show yet.",
  heading = "No data",
  icon = <Inbox />,
  size = "md",
  tone = "default",
  variant = "panel",
  ...props
}: EmptyProps) {
  return (
    <Component
      className={cn(emptyVariants({ size, tone, variant }), className)}
      data-size={size}
      data-slot="empty"
      data-tone={tone}
      data-variant={variant}
      {...props}
    >
      {children ?? (
        <>
          {icon ? <EmptyIcon>{icon}</EmptyIcon> : null}
          {heading ? <EmptyTitle>{heading}</EmptyTitle> : null}
          {description ? (
            <EmptyDescription>{description}</EmptyDescription>
          ) : null}
          {actions ? <EmptyActions>{actions}</EmptyActions> : null}
        </>
      )}
    </Component>
  )
}

interface EmptyIconProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Hides the icon from assistive technologies when it is decorative.
   * @default true
   */
  decorative?: boolean
}

/**
 * Sticker empty-state icon badge.
 */
function EmptyIcon({
  "aria-hidden": ariaHidden,
  children,
  className,
  decorative = true,
  ...props
}: EmptyIconProps) {
  return (
    <div
      aria-hidden={decorative ? true : ariaHidden}
      className={cn(
        "grid size-(--empty-icon-size) place-items-center rounded-su-2xl border-2 border-su-ink bg-[var(--empty-accent)] text-[length:var(--empty-icon-svg)] font-black text-su-ink shadow-su-md [&_svg]:size-[var(--empty-icon-svg)] [&_svg]:stroke-[2.75]",
        className,
      )}
      data-slot="empty-icon"
      {...props}
    >
      {children}
    </div>
  )
}

type EmptyTitleProps = React.HTMLAttributes<HTMLHeadingElement>

/**
 * Sticker empty-state heading.
 */
function EmptyTitle({ className, ...props }: EmptyTitleProps) {
  return (
    <h3
      className={cn(
        "m-0 max-w-xl text-[length:var(--empty-title-size)] leading-6 font-black text-su-ink",
        className,
      )}
      data-slot="empty-title"
      {...props}
    />
  )
}

type EmptyDescriptionProps = React.HTMLAttributes<HTMLParagraphElement>

/**
 * Sticker empty-state body copy.
 */
function EmptyDescription({ className, ...props }: EmptyDescriptionProps) {
  return (
    <p
      className={cn(
        "m-0 max-w-md text-[length:var(--empty-description-size)] leading-6 font-medium text-su-fg-muted",
        className,
      )}
      data-slot="empty-description"
      {...props}
    />
  )
}

type EmptyActionsProps = React.HTMLAttributes<HTMLDivElement>

/**
 * Sticker empty-state action row.
 */
function EmptyActions({ className, ...props }: EmptyActionsProps) {
  return (
    <div
      className={cn(
        "mt-1 flex flex-wrap items-center justify-center gap-2",
        className,
      )}
      data-slot="empty-actions"
      {...props}
    />
  )
}

export {
  Empty,
  EmptyActions,
  EmptyDescription,
  EmptyIcon,
  EmptyTitle,
  emptyVariants,
  type EmptyActionsProps,
  type EmptyDescriptionProps,
  type EmptyIconProps,
  type EmptyProps,
  type EmptyTitleProps,
}
