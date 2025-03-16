import { cva, type VariantProps } from "class-variance-authority"
import * as React from "react"

import { Tag } from "@/components/ui/tag"
import { cn } from "@/lib/utils"

type FieldTone = "danger" | "default" | "muted" | "success" | "warning"

type FieldClassNames = {
  /**
   * Field body that groups the label and description in `layout="inline"`.
   */
  body?: string
  /**
   * Control wrapper.
   */
  control?: string
  /**
   * Field description text.
   */
  description?: string
  /**
   * Field label.
   */
  label?: string
  /**
   * Field root.
   */
  root?: string
}

/**
 * Builds the sticker field label className from size and tone variants.
 */
const fieldLabelVariants = cva(
  "inline-flex w-fit min-w-0 items-center gap-2 leading-none font-black text-ink select-none",
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
 * Props for the inline field marker.
 * @remarks Inherits sticker tag attributes and adds field tone variants.
 */
interface FieldMarkerProps extends Omit<
  React.ComponentProps<typeof Tag>,
  "as" | "color" | "dot" | "rounded" | "size" | "variant"
> {
  /**
   * Controls the marker paper color.
   * @default "default"
   */
  tone?: FieldTone
}

const fieldMarkerColors = {
  danger: "danger",
  default: "default",
  muted: "secondary",
  success: "success",
  warning: "warning",
} as const satisfies Record<
  FieldTone,
  NonNullable<React.ComponentProps<typeof Tag>["color"]>
>

const fieldMarkerToneClasses = {
  danger: "",
  default: "",
  muted: "bg-surface-muted",
  success: "bg-fill-success-strong",
  warning: "",
} as const satisfies Record<FieldTone, string>

/**
 * Props for the sticker field label element.
 * @remarks Inherits native label attributes and adds sticker variants.
 */
interface FieldLabelProps
  extends
    React.LabelHTMLAttributes<HTMLLabelElement>,
    VariantProps<typeof fieldLabelVariants> {
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
  tone?: FieldTone
}

/**
 * Props for the sticker field shell.
 * @remarks Connects one field control to a styled label and optional description with generated ids.
 */
interface FieldProps extends Omit<
  React.ComponentProps<"div">,
  "children" | "id"
> {
  /**
   * Single control that receives the generated `id` and description relationship.
   */
  children: React.ReactNode
  /**
   * Slot classNames for field internals.
   */
  classNames?: FieldClassNames
  /**
   * Helper copy connected to the control through `aria-describedby`.
   */
  description?: React.ReactNode
  /**
   * Props forwarded to the description element.
   */
  descriptionProps?: Omit<
    React.ComponentProps<typeof FieldDescription>,
    "children"
  > & {
    [key: `data-${string}`]: string | undefined
  }
  /**
   * Bound control id. When omitted, Field reuses the child id or generates one.
   */
  id?: string
  /**
   * Field label content.
   */
  label?: React.ReactNode
  /**
   * Props forwarded to the label element.
   */
  labelProps?: Omit<
    FieldLabelProps,
    | "children"
    | "htmlFor"
    | "optional"
    | "required"
    | "requiredMark"
    | "size"
    | "tone"
  > & {
    [key: `data-${string}`]: string | undefined
  }
  /**
   * Shows the optional marker after the label content.
   * @default false
   */
  optional?: boolean
  /**
   * Controls the field structure.
   * @default "stack"
   */
  layout?: "inline" | "stack"
  /**
   * Legacy control placement API.
   * @deprecated Use `layout="inline"` for checkbox, radio, and switch style fields.
   */
  controlPlacement?: "end" | "start"
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
  tone?: FieldTone
}

function FieldLabel({
  children,
  className,
  optional = false,
  required = false,
  requiredMark = "badge",
  size = "default",
  tone = "default",
  ...props
}: FieldLabelProps) {
  return (
    <label
      className={cn(fieldLabelVariants({ size, tone }), className)}
      data-slot="field-label"
      {...props}
    >
      {children}
      {required ? (
        requiredMark === "asterisk" ? (
          <span
            aria-hidden="true"
            className="-ml-1 inline-flex h-5 shrink-0 items-center text-base leading-none font-black text-text-danger"
            data-slot="field-required-mark"
          >
            *
          </span>
        ) : (
          <FieldMarker data-slot="field-required-marker" tone={tone}>
            required
          </FieldMarker>
        )
      ) : null}
      {optional ? <FieldMarker tone="muted">optional</FieldMarker> : null}
    </label>
  )
}

function FieldDescription({ className, ...props }: React.ComponentProps<"p">) {
  return (
    <p
      className={cn(
        "m-0 text-xs leading-5 font-medium text-text-muted",
        className,
      )}
      data-slot="field-description"
      {...props}
    />
  )
}

function Field({
  children,
  className,
  classNames,
  controlPlacement,
  description,
  descriptionProps,
  id,
  label,
  labelProps,
  layout,
  optional = false,
  required = false,
  requiredMark = "badge",
  size = "default",
  tone = "default",
  ...props
}: FieldProps) {
  const generatedId = React.useId()
  const childId = getChildId(children)
  const controlId = id ?? childId ?? generatedId
  const descriptionId =
    description === undefined || description === null || description === false
      ? undefined
      : (descriptionProps?.id ?? `${controlId}-description`)
  const labelSlot = (labelProps as Record<string, unknown> | undefined)?.[
    "data-slot"
  ]
  const control = getFieldControl(children, controlId, descriptionId)
  const resolvedLayout =
    layout ?? (controlPlacement === "start" ? "inline" : "stack")
  const labelNode =
    label === undefined || label === null || label === false ? null : (
      <FieldLabel
        {...labelProps}
        htmlFor={controlId}
        optional={optional}
        required={required}
        requiredMark={requiredMark}
        size={size}
        tone={tone}
        className={cn(classNames?.label, labelProps?.className)}
        data-slot={typeof labelSlot === "string" ? labelSlot : "field-label"}
      >
        {label}
      </FieldLabel>
    )
  const descriptionNode = descriptionId ? (
    <FieldDescription
      {...descriptionProps}
      className={cn(classNames?.description, descriptionProps?.className)}
      data-slot="field-description"
      id={descriptionId}
    >
      {description}
    </FieldDescription>
  ) : null

  if (resolvedLayout === "inline") {
    return (
      <div
        className={cn(
          "flex min-w-0 gap-3",
          descriptionNode ? "items-start" : "items-center",
          classNames?.root,
          className,
        )}
        data-slot="field"
        {...props}
      >
        <div
          className={cn("shrink-0", classNames?.control)}
          data-slot="field-control"
        >
          {control}
        </div>
        <div
          className={cn("grid min-w-0 gap-1", classNames?.body)}
          data-slot="field-body"
        >
          {labelNode}
          {descriptionNode}
        </div>
      </div>
    )
  }

  return (
    <div
      className={cn("grid min-w-0 gap-2", classNames?.root, className)}
      data-slot="field"
      {...props}
    >
      {labelNode}
      <div
        className={cn("grid min-w-0 gap-1.5", classNames?.body)}
        data-slot="field-body"
      >
        <div
          className={cn("min-w-0", classNames?.control)}
          data-slot="field-control"
        >
          {control}
        </div>
        {descriptionNode}
      </div>
    </div>
  )
}

function FieldMarker({
  className,
  tone = "default",
  ...props
}: FieldMarkerProps) {
  return (
    <Tag
      aria-hidden="true"
      as="span"
      className={cn(
        "px-2 font-black uppercase shadow-sticker-xs",
        fieldMarkerToneClasses[tone],
        className,
      )}
      color={fieldMarkerColors[tone]}
      data-slot="field-marker"
      rounded="pill"
      size="xs"
      variant="solid"
      {...props}
    />
  )
}

function getChildId(children: React.ReactNode) {
  if (!React.isValidElement<Record<string, unknown>>(children)) {
    return undefined
  }

  return typeof children.props.id === "string" ? children.props.id : undefined
}

function getFieldControl(
  children: React.ReactNode,
  controlId: string,
  descriptionId: string | undefined,
) {
  if (!React.isValidElement<Record<string, unknown>>(children)) {
    return children
  }

  const nextDescription = mergeFieldIds(
    children.props["aria-describedby"],
    descriptionId,
  )

  return React.cloneElement(children, {
    "aria-describedby": nextDescription,
    id: children.props.id ?? controlId,
  })
}

function mergeFieldIds(...ids: unknown[]) {
  const tokens = ids
    .filter((id): id is string => typeof id === "string" && id.length > 0)
    .flatMap((id) => id.split(/\s+/))
  const uniqueTokens = Array.from(new Set(tokens))

  return uniqueTokens.length > 0 ? uniqueTokens.join(" ") : undefined
}

export { Field, FieldDescription, FieldLabel, FieldMarker, fieldLabelVariants }
export type { FieldClassNames, FieldLabelProps, FieldProps }
