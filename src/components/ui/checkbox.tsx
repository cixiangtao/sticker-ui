import * as CheckboxPrimitive from "@radix-ui/react-checkbox"
import { Check, Minus } from "lucide-react"
import * as React from "react"

import { cn } from "@/lib/utils"

type CheckboxSize = "lg" | "md" | "sm"
type CheckboxTone =
  | "danger"
  | "default"
  | "info"
  | "secondary"
  | "success"
  | "warning"
type CheckboxVariant = "filled" | "outlined" | "quiet"

interface CheckboxVariantOptions {
  className?: string
  disabled?: boolean
  size?: CheckboxSize
  tone?: CheckboxTone
  variant?: CheckboxVariant
}

const checkboxSizeClassNames = {
  lg: {
    icon: "size-4",
    label: "text-base",
    root: "size-7 rounded-md",
  },
  md: {
    icon: "size-3.5",
    label: "text-sm",
    root: "size-6 rounded-sm",
  },
  sm: {
    icon: "size-3",
    label: "text-xs",
    root: "size-5 rounded-sm",
  },
} satisfies Record<CheckboxSize, { icon: string; label: string; root: string }>

const checkboxToneClassNames = {
  danger: {
    checked:
      "data-[state=checked]:bg-fill-danger data-[state=checked]:text-ink",
    fill: "bg-fill-danger-soft text-text-danger",
    quiet: "bg-fill-danger-soft text-text-danger",
  },
  default: {
    checked:
      "data-[state=checked]:bg-fill-default data-[state=checked]:text-ink",
    fill: "bg-fill-default-soft text-ink",
    quiet: "bg-surface-muted text-ink",
  },
  info: {
    checked: "data-[state=checked]:bg-fill-info data-[state=checked]:text-ink",
    fill: "bg-fill-info text-text-info",
    quiet: "bg-fill-info text-text-info",
  },
  secondary: {
    checked:
      "data-[state=checked]:bg-fill-secondary data-[state=checked]:text-ink",
    fill: "bg-fill-secondary text-text-secondary",
    quiet: "bg-fill-secondary text-text-secondary",
  },
  success: {
    checked:
      "data-[state=checked]:bg-fill-success data-[state=checked]:text-ink",
    fill: "bg-fill-success text-text-success",
    quiet: "bg-fill-success text-text-success",
  },
  warning: {
    checked:
      "data-[state=checked]:bg-fill-warning data-[state=checked]:text-ink",
    fill: "bg-fill-warning text-text-warning",
    quiet: "bg-fill-warning text-text-warning",
  },
} satisfies Record<
  CheckboxTone,
  {
    checked: string
    fill: string
    quiet: string
  }
>

/**
 * Builds the sticker checkbox className from structure, tone, and size variants.
 */
const checkboxVariants = ({
  className,
  disabled,
  size = "md",
  tone = "default",
  variant = "outlined",
}: CheckboxVariantOptions = {}) =>
  cn(
    "peer relative inline-flex shrink-0 cursor-pointer items-center justify-center border-2 border-ink bg-surface text-ink shadow-sticker-sm transition duration-150 outline-none focus-visible:shadow-sticker-md focus-visible:ring-[2px] focus-visible:ring-ring/65 aria-invalid:border-text-danger aria-invalid:bg-fill-danger-soft data-[state=checked]:shadow-sticker-md data-[state=indeterminate]:bg-ink data-[state=indeterminate]:text-paper",
    disabled && "cursor-not-allowed opacity-55",
    checkboxSizeClassNames[size].root,
    checkboxToneClassNames[tone].checked,
    variant === "filled" && checkboxToneClassNames[tone].fill,
    variant === "quiet" &&
      cn("border-transparent shadow-none", checkboxToneClassNames[tone].quiet),
    className,
  )

/**
 * Props for the sticker checkbox root.
 * @remarks Wraps Radix Checkbox.Root and adds sticker size, tone, and variant props.
 */
interface CheckboxProps extends Omit<
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>,
  "children" | "className"
> {
  /**
   * Custom className for the checkbox root.
   */
  className?: string
  /**
   * Clickable option label rendered next to the checkbox.
   */
  label?: React.ReactNode
  /**
   * Controls the checkbox square, icon, and radius size.
   * @default "md"
   */
  size?: CheckboxSize
  /**
   * Controls the semantic paper tone.
   * @default "default"
   */
  tone?: CheckboxTone
  /**
   * Controls the checkbox border and fill emphasis.
   * @default "outlined"
   */
  variant?: CheckboxVariant
}

/**
 * Sticker checkbox powered by Radix Checkbox.
 */
const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  CheckboxProps
>(
  (
    {
      className,
      disabled,
      id,
      label,
      size = "md",
      tone = "default",
      variant = "outlined",
      ...props
    },
    ref,
  ) => {
    const generatedId = React.useId()
    const hasLabel = label !== undefined && label !== null && label !== false
    const controlId = id ?? (hasLabel ? generatedId : undefined)
    const control = (
      <CheckboxPrimitive.Root
        className={cn(
          checkboxVariants({ disabled, size, tone, variant }),
          className,
        )}
        data-slot="checkbox"
        disabled={disabled}
        id={controlId}
        ref={ref}
        {...props}
      >
        <CheckboxPrimitive.Indicator
          className="group pointer-events-none absolute inset-0 flex items-center justify-center"
          data-slot="checkbox-indicator"
        >
          <Minus
            aria-hidden="true"
            className={cn(
              "hidden stroke-[3.5] group-data-[state=indeterminate]:block",
              checkboxSizeClassNames[size].icon,
            )}
          />
          <Check
            aria-hidden="true"
            className={cn(
              "stroke-[3.5] group-data-[state=indeterminate]:hidden",
              checkboxSizeClassNames[size].icon,
            )}
          />
        </CheckboxPrimitive.Indicator>
      </CheckboxPrimitive.Root>
    )

    if (!hasLabel) {
      return control
    }

    return (
      <label
        className={cn(
          "inline-flex min-w-0 cursor-pointer items-center gap-3 text-ink select-none",
          disabled && "cursor-not-allowed",
        )}
        data-slot="checkbox-label"
        htmlFor={controlId}
      >
        {control}
        <span
          className={cn(
            "min-w-0 leading-none font-black",
            checkboxSizeClassNames[size].label,
            disabled && "opacity-55",
          )}
          data-slot="checkbox-label-text"
        >
          {label}
        </span>
      </label>
    )
  },
)
Checkbox.displayName = CheckboxPrimitive.Root.displayName

export { Checkbox, checkboxVariants }
export type { CheckboxProps }
