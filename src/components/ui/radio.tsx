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
  size: RadioSize
  tone: RadioTone
  variant: RadioVariant
}

interface RadioVariantOptions {
  className?: string
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
  },
  md: {
    indicator: "size-2.5",
    item: "size-6",
  },
  sm: {
    indicator: "size-2",
    item: "size-5",
  },
} satisfies Record<RadioSize, { indicator: string; item: string }>

const radioToneClassNames = {
  danger: {
    checked:
      "data-[state=checked]:bg-surface data-[state=checked]:text-accent-danger",
    fill: "bg-fill-danger-soft text-text-danger",
    quiet: "bg-fill-danger-soft text-text-danger",
  },
  default: {
    checked:
      "data-[state=checked]:bg-surface data-[state=checked]:text-fill-default",
    fill: "bg-fill-default-soft text-ink",
    quiet: "bg-surface-muted text-ink",
  },
  info: {
    checked:
      "data-[state=checked]:bg-surface data-[state=checked]:text-accent-info",
    fill: "bg-fill-info text-text-info",
    quiet: "bg-fill-info text-text-info",
  },
  secondary: {
    checked:
      "data-[state=checked]:bg-surface data-[state=checked]:text-accent-secondary",
    fill: "bg-fill-secondary text-text-secondary",
    quiet: "bg-fill-secondary text-text-secondary",
  },
  success: {
    checked:
      "data-[state=checked]:bg-surface data-[state=checked]:text-accent-success",
    fill: "bg-fill-success text-text-success",
    quiet: "bg-fill-success text-text-success",
  },
  warning: {
    checked:
      "data-[state=checked]:bg-surface data-[state=checked]:text-accent-warning",
    fill: "bg-fill-warning text-text-warning",
    quiet: "bg-fill-warning text-text-warning",
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
  size = "md",
  tone = "default",
  variant = "outlined",
}: RadioVariantOptions = {}) =>
  cn(
    "peer inline-flex shrink-0 cursor-pointer items-center justify-center rounded-full border-2 border-ink bg-surface text-ink shadow-sticker-sm transition-shadow duration-150 outline-none focus-visible:shadow-sticker-md focus-visible:ring-[2px] focus-visible:ring-ring/65 disabled:cursor-not-allowed disabled:opacity-55 aria-invalid:border-text-danger aria-invalid:bg-fill-danger-soft data-[state=checked]:shadow-sticker-md",
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
  onChange,
  onValueChange,
  size = "md",
  tone = "default",
  variant = "outlined",
  ...props
}: RadioGroupProps) {
  const contextValue = React.useMemo<RadioContextState>(
    () => ({
      size,
      tone,
      variant,
    }),
    [size, tone, variant],
  )

  return (
    <RadioContext.Provider value={contextValue}>
      <RadioGroupPrimitive.Root
        className={cn("grid gap-2", className)}
        data-slot="radio-group"
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
  "className"
> {
  /**
   * Custom className for the radio item root.
   */
  className?: string
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
>(({ className, size, tone, variant, ...props }, ref) => {
  const context = React.useContext(RadioContext)
  const resolvedSize = size ?? context.size

  return (
    <RadioGroupPrimitive.Item
      className={cn(
        radioVariants({
          size: resolvedSize,
          tone: tone ?? context.tone,
          variant: variant ?? context.variant,
        }),
        className,
      )}
      data-slot="radio-group-item"
      ref={ref}
      {...props}
    >
      <RadioGroupPrimitive.Indicator
        className="flex items-center justify-center"
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
})
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName

export { RadioGroup, RadioGroupItem, radioVariants }
export type { RadioGroupItemProps, RadioGroupProps }
