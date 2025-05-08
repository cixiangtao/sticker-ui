import * as RadioGroupPrimitive from "@radix-ui/react-radio-group"
import * as React from "react"

import { cn } from "@/lib/utils"

type RadioSize = "lg" | "md" | "sm"
type RadioTone =
  | "danger"
  | "default"
  | "info"
  | "secondary"
  | "success"
  | "warning"
type RadioVariant = "filled" | "outlined" | "quiet"
type RadioChangeHandler = (value: string) => void

interface RadioContextState {
  disabled?: boolean
  size: RadioSize
  tone: RadioTone
  variant: RadioVariant
}

interface RadioVariantOptions {
  className?: string
  disabled?: boolean
  size?: RadioSize
  tone?: RadioTone
  variant?: RadioVariant
}

const RadioContext = React.createContext<RadioContextState>({
  size: "md",
  tone: "default",
  variant: "outlined",
})

const radioSizeClassNames = {
  lg: {
    indicator: "size-3.5",
    item: "size-7",
    label: "text-base",
  },
  md: {
    indicator: "size-2.5",
    item: "size-6",
    label: "text-sm",
  },
  sm: {
    indicator: "size-2",
    item: "size-5",
    label: "text-xs",
  },
} satisfies Record<
  RadioSize,
  { indicator: string; item: string; label: string }
>

const radioToneClassNames = {
  danger: {
    checked:
      "data-[state=checked]:bg-su-surface data-[state=checked]:text-su-accent-danger",
    fill: "bg-su-fill-danger text-su-fg-danger",
    quiet: "bg-su-fill-danger text-su-fg-danger",
  },
  default: {
    checked:
      "data-[state=checked]:bg-su-surface data-[state=checked]:text-su-fill-default",
    fill: "bg-su-fill-default-soft text-su-ink",
    quiet: "bg-su-surface-muted text-su-ink",
  },
  info: {
    checked:
      "data-[state=checked]:bg-su-surface data-[state=checked]:text-su-accent-info",
    fill: "bg-su-fill-info text-su-fg-info",
    quiet: "bg-su-fill-info text-su-fg-info",
  },
  secondary: {
    checked:
      "data-[state=checked]:bg-su-surface data-[state=checked]:text-su-accent-secondary",
    fill: "bg-su-fill-secondary text-su-fg-secondary",
    quiet: "bg-su-fill-secondary text-su-fg-secondary",
  },
  success: {
    checked:
      "data-[state=checked]:bg-su-surface data-[state=checked]:text-su-accent-success",
    fill: "bg-su-fill-success text-su-fg-success",
    quiet: "bg-su-fill-success text-su-fg-success",
  },
  warning: {
    checked:
      "data-[state=checked]:bg-su-surface data-[state=checked]:text-su-accent-warning",
    fill: "bg-su-fill-warning text-su-fg-warning",
    quiet: "bg-su-fill-warning text-su-fg-warning",
  },
} satisfies Record<
  RadioTone,
  {
    checked: string
    fill: string
    quiet: string
  }
>

/**
 * Builds the sticker radio item className from structure, tone, and size variants.
 */
const radioVariants = ({
  className,
  disabled,
  size = "md",
  tone = "default",
  variant = "outlined",
}: RadioVariantOptions = {}) =>
  cn(
    "peer relative inline-flex shrink-0 cursor-pointer items-center justify-center rounded-full border-2 border-su-ink bg-su-surface text-su-ink shadow-su-sm transition-shadow duration-150 outline-none focus-visible:shadow-su-md focus-visible:ring-[2px] focus-visible:ring-su-ring/65 aria-invalid:border-su-fg-danger aria-invalid:bg-su-fill-danger data-[state=checked]:shadow-su-md",
    disabled && "cursor-not-allowed opacity-55",
    radioSizeClassNames[size].item,
    radioToneClassNames[tone].checked,
    variant === "filled" && radioToneClassNames[tone].fill,
    variant === "quiet" &&
      cn("border-transparent shadow-none", radioToneClassNames[tone].quiet),
    className,
  )

/**
 * Props for the sticker radio group root.
 * @remarks Wraps Radix RadioGroup.Root and keeps `onChange(value)` as a Form.Item-friendly alias for `onValueChange`.
 */
interface RadioGroupProps extends Omit<
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>,
  "className" | "onChange" | "onValueChange"
> {
  /**
   * Custom className for the radio group root.
   */
  className?: string
  /**
   * Runs when the selected value changes.
   * @remarks Receives the next string value. This mirrors the project form trigger convention.
   */
  onChange?: RadioChangeHandler
  /**
   * Runs when the selected value changes.
   */
  onValueChange?: RadioChangeHandler
  /**
   * Controls item and indicator size for children.
   * @default "md"
   */
  size?: RadioSize
  /**
   * Controls the semantic paper tone for children.
   * @default "default"
   */
  tone?: RadioTone
  /**
   * Controls child item border and fill emphasis.
   * @default "outlined"
   */
  variant?: RadioVariant
}

/**
 * Sticker radio group powered by Radix Radio Group.
 */
function RadioGroup({
  children,
  className,
  disabled,
  onChange,
  onValueChange,
  size = "md",
  tone = "default",
  variant = "outlined",
  ...props
}: RadioGroupProps) {
  const contextValue = React.useMemo<RadioContextState>(
    () => ({
      disabled,
      size,
      tone,
      variant,
    }),
    [disabled, size, tone, variant],
  )

  return (
    <RadioContext.Provider value={contextValue}>
      <RadioGroupPrimitive.Root
        className={cn("grid gap-2", className)}
        data-slot="radio-group"
        disabled={disabled}
        onValueChange={(value) => {
          onValueChange?.(value)
          onChange?.(value)
        }}
        {...props}
      >
        {children}
      </RadioGroupPrimitive.Root>
    </RadioContext.Provider>
  )
}

/**
 * Props for a sticker radio group item.
 * @remarks Wraps Radix RadioGroup.Item and can inherit visual variants from RadioGroup.
 */
interface RadioGroupItemProps extends Omit<
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>,
  "children" | "className"
> {
  /**
   * Custom className for the radio item root.
   */
  className?: string
  /**
   * Clickable option label rendered next to the radio item.
   */
  label?: React.ReactNode
  /**
   * Controls the radio item and dot size.
   */
  size?: RadioSize
  /**
   * Controls the semantic paper tone.
   */
  tone?: RadioTone
  /**
   * Controls the item border and fill emphasis.
   */
  variant?: RadioVariant
}

/**
 * Selectable sticker radio item.
 */
const RadioGroupItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  RadioGroupItemProps
>(({ className, disabled, id, label, size, tone, variant, ...props }, ref) => {
  const context = React.useContext(RadioContext)
  const resolvedSize = size ?? context.size
  const resolvedDisabled = Boolean(context.disabled || disabled)
  const generatedId = React.useId()
  const hasLabel = label !== undefined && label !== null && label !== false
  const controlId = id ?? (hasLabel ? generatedId : undefined)
  const control = (
    <RadioGroupPrimitive.Item
      className={cn(
        radioVariants({
          disabled: resolvedDisabled,
          size: resolvedSize,
          tone: tone ?? context.tone,
          variant: variant ?? context.variant,
        }),
        className,
      )}
      data-slot="radio-group-item"
      disabled={resolvedDisabled}
      id={controlId}
      ref={ref}
      {...props}
    >
      <RadioGroupPrimitive.Indicator
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
        data-slot="radio-group-indicator"
      >
        <span
          aria-hidden="true"
          className={cn(
            "block rounded-full bg-current",
            radioSizeClassNames[resolvedSize].indicator,
          )}
        />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  )

  if (!hasLabel) {
    return control
  }

  return (
    <label
      className={cn(
        "inline-flex min-w-0 cursor-pointer items-center gap-3 text-su-ink select-none",
        resolvedDisabled && "cursor-not-allowed",
      )}
      data-slot="radio-group-label"
      htmlFor={controlId}
    >
      {control}
      <span
        className={cn(
          "min-w-0 leading-none font-black",
          radioSizeClassNames[resolvedSize].label,
          resolvedDisabled && "opacity-55",
        )}
        data-slot="radio-group-label-text"
      >
        {label}
      </span>
    </label>
  )
})
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName

export { RadioGroup, RadioGroupItem, radioVariants }
export type { RadioGroupItemProps, RadioGroupProps }
