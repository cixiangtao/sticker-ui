import { cva, type VariantProps } from "class-variance-authority"
import * as React from "react"

import { Tag } from "@/components/ui/tag"
import { cn } from "@/lib/utils"

type LabelTone = "danger" | "default" | "muted" | "success" | "warning"

/**
 * Builds the sticker label className from size and tone variants.
 */
const labelTones = cva(
  "inline-flex w-fit min-w-0 items-center gap-2 leading-none font-black text-ink",
  {
    defaultVariants: {
      size: "default",
      tone: "default",
    },
    variants: {
      size: {
        default: "text-sm",
        lg: "text-base",
        sm: "text-xs",
      },
      tone: {
        danger: "text-text-danger",
        default: "",
        muted: "text-text-muted",
        success: "text-text-success",
        warning: "text-text-warning",
      },
    },
  },
)

/**
 * Props for the inline label marker.
 * @remarks Inherits sticker tag attributes and adds label tone variants.
 */
interface LabelMarkerProps extends Omit<
  React.ComponentProps<typeof Tag>,
  "as" | "color" | "dot" | "rounded" | "size" | "variant"
> {
  /**
   * Controls the marker paper color.
   * @default "default"
   */
  tone?: LabelTone
}

const labelMarkerColors = {
  danger: "danger",
  default: "default",
  muted: "secondary",
  success: "success",
  warning: "warning",
} as const satisfies Record<
  LabelTone,
  NonNullable<React.ComponentProps<typeof Tag>["color"]>
>

const labelMarkerToneClasses = {
  danger: "",
  default: "",
  muted: "bg-surface-muted",
  success: "bg-fill-success-strong",
  warning: "",
} as const satisfies Record<LabelTone, string>

/**
 * Props for the sticker label root element.
 * @remarks Inherits native label attributes and adds sticker variants.
 */
interface LabelProps
  extends
    React.LabelHTMLAttributes<HTMLLabelElement>,
    VariantProps<typeof labelTones> {
  /**
   * Shows the optional marker after the label content.
   * @default false
   */
  optional?: boolean
  /**
   * Shows the required marker after the label content.
   * @default false
   */
  required?: boolean
  /**
   * Controls how the required marker is rendered.
   * @default "badge"
   */
  requiredMark?: "asterisk" | "badge"
  /**
   * Controls the label text size.
   * @default "default"
   */
  size?: "default" | "lg" | "sm"
  /**
   * Controls the label text tone and required marker color.
   * @default "default"
   */
  tone?: LabelTone
}

function Label({
  children,
  className,
  optional = false,
  required = false,
  requiredMark = "badge",
  size = "default",
  tone = "default",
  ...props
}: LabelProps) {
  return (
    <label
      className={cn(labelTones({ size, tone }), className)}
      data-slot="label"
      {...props}
    >
      {children}
      {required ? (
        requiredMark === "asterisk" ? (
          <span
            aria-hidden="true"
            className="-ml-1 inline-flex h-5 shrink-0 items-center text-base leading-none font-black text-text-danger"
            data-slot="label-required-mark"
          >
            *
          </span>
        ) : (
          <LabelMarker data-slot="label-required-marker" tone={tone}>
            required
          </LabelMarker>
        )
      ) : null}
      {optional ? <LabelMarker tone="muted">optional</LabelMarker> : null}
    </label>
  )
}

function LabelDescription({ className, ...props }: React.ComponentProps<"p">) {
  return (
    <p
      className={cn(
        "m-0 text-xs leading-5 font-medium text-text-muted",
        className,
      )}
      data-slot="label-description"
      {...props}
    />
  )
}

function LabelMarker({
  className,
  tone = "default",
  ...props
}: LabelMarkerProps) {
  return (
    <Tag
      aria-hidden="true"
      as="span"
      className={cn(
        "px-2 font-black uppercase shadow-sticker-xs",
        labelMarkerToneClasses[tone],
        className,
      )}
      color={labelMarkerColors[tone]}
      data-slot="label-marker"
      rounded="pill"
      size="xs"
      variant="solid"
      {...props}
    />
  )
}

export { Label, LabelDescription, LabelMarker, labelTones }
