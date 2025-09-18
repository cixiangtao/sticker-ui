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
type CheckboxGroupDirection = "horizontal" | "vertical"
type CheckboxGroupValue = string[]
type CheckboxGroupChangeHandler = (value: CheckboxGroupValue) => void
type CheckboxCheckedState = NonNullable<
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>["checked"]
>

interface CheckboxContextState {
  disabled?: boolean
  name?: string
  onItemCheckedChange?: (
    itemValue: string,
    checked: CheckboxCheckedState,
  ) => void
  size: CheckboxSize
  tone: CheckboxTone
  value: readonly string[]
  variant: CheckboxVariant
}

interface CheckboxVariantOptions {
  className?: string
  disabled?: boolean
  size?: CheckboxSize
  tone?: CheckboxTone
  variant?: CheckboxVariant
}

const CheckboxContext = React.createContext<CheckboxContextState>({
  size: "md",
  tone: "default",
  value: [],
  variant: "outlined",
})

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
      "data-[state=checked]:bg-su-fill-danger-strong data-[state=checked]:text-su-ink",
    fill: "bg-su-fill-danger text-su-fg-danger",
    quiet: "bg-su-fill-danger text-su-fg-danger",
  },
  default: {
    checked:
      "data-[state=checked]:bg-su-fill-default data-[state=checked]:text-su-ink",
    fill: "bg-su-fill-default-soft text-su-ink",
    quiet: "bg-su-surface-muted text-su-ink",
  },
  info: {
    checked:
      "data-[state=checked]:bg-su-fill-info data-[state=checked]:text-su-ink",
    fill: "bg-su-fill-info text-su-fg-info",
    quiet: "bg-su-fill-info text-su-fg-info",
  },
  secondary: {
    checked:
      "data-[state=checked]:bg-su-fill-secondary data-[state=checked]:text-su-ink",
    fill: "bg-su-fill-secondary text-su-fg-secondary",
    quiet: "bg-su-fill-secondary text-su-fg-secondary",
  },
  success: {
    checked:
      "data-[state=checked]:bg-su-fill-success data-[state=checked]:text-su-ink",
    fill: "bg-su-fill-success text-su-fg-success",
    quiet: "bg-su-fill-success text-su-fg-success",
  },
  warning: {
    checked:
      "data-[state=checked]:bg-su-fill-warning data-[state=checked]:text-su-ink",
    fill: "bg-su-fill-warning text-su-fg-warning",
    quiet: "bg-su-fill-warning text-su-fg-warning",
  },
} satisfies Record<
  CheckboxTone,
  {
    checked: string
    fill: string
    quiet: string
  }
>

const checkboxGroupDirectionClassNames = {
  horizontal: "flex flex-wrap items-center gap-x-5 gap-y-3",
  vertical: "grid gap-2.5",
} satisfies Record<CheckboxGroupDirection, string>

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
    "peer relative inline-flex shrink-0 cursor-pointer items-center justify-center border-2 border-su-ink bg-su-surface text-su-ink shadow-su-sm transition duration-150 outline-none focus-visible:shadow-su-md focus-visible:ring-[2px] focus-visible:ring-su-ring/65 aria-invalid:border-su-fg-danger aria-invalid:bg-su-fill-danger data-[state=checked]:shadow-su-md data-[state=indeterminate]:bg-su-ink data-[state=indeterminate]:text-su-paper",
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
 * @remarks Wraps Radix Checkbox.Root and can inherit visual variants and checked state from CheckboxGroup.
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
 * Props for the sticker checkbox group.
 * @remarks Manages a string array value for multiple Checkbox children with matching `value` props.
 */
interface CheckboxGroupProps extends Omit<
  React.FieldsetHTMLAttributes<HTMLFieldSetElement>,
  "className" | "defaultValue" | "onChange" | "value"
> {
  /**
   * Custom className for the group fieldset.
   */
  className?: string
  /**
   * Initial selected checkbox values for uncontrolled groups.
   * @default []
   */
  defaultValue?: CheckboxGroupValue
  /**
   * Helper text rendered below the group label.
   */
  description?: React.ReactNode
  /**
   * Controls how checkbox children are arranged.
   * @default "vertical"
   */
  direction?: CheckboxGroupDirection
  /**
   * Group label rendered as a fieldset legend.
   */
  label?: React.ReactNode
  /**
   * Shared name passed to checkbox children for native form submission.
   */
  name?: string
  /**
   * Runs when the selected value array changes.
   * @remarks Receives the next string array. This mirrors the project form trigger convention.
   */
  onChange?: CheckboxGroupChangeHandler
  /**
   * Runs when the selected value array changes.
   */
  onValueChange?: CheckboxGroupChangeHandler
  /**
   * Controls child checkbox square, icon, and radius size.
   * @default "md"
   */
  size?: CheckboxSize
  /**
   * Controls the semantic paper tone for children.
   * @default "default"
   */
  tone?: CheckboxTone
  /**
   * Selected checkbox values.
   */
  value?: CheckboxGroupValue
  /**
   * Controls child checkbox border and fill emphasis.
   * @default "outlined"
   */
  variant?: CheckboxVariant
}

/**
 * Sticker checkbox group for managing multiple selected values.
 */
const CheckboxGroup = React.forwardRef<HTMLFieldSetElement, CheckboxGroupProps>(
  (
    {
      "aria-describedby": describedBy,
      children,
      className,
      defaultValue = [],
      description,
      direction = "vertical",
      disabled,
      label,
      name,
      onChange,
      onValueChange,
      size = "md",
      tone = "default",
      value,
      variant = "outlined",
      ...props
    },
    ref,
  ) => {
    const [internalValue, setInternalValue] =
      React.useState<CheckboxGroupValue>(defaultValue)
    const descriptionId = React.useId()
    const selectedValue = value ?? internalValue
    const hasDescription =
      description !== undefined && description !== null && description !== false
    const hasLabel = label !== undefined && label !== null && label !== false
    const resolvedDescribedBy = [describedBy, hasDescription && descriptionId]
      .filter(Boolean)
      .join(" ")
    const setItemChecked = React.useCallback(
      (itemValue: string, checked: CheckboxCheckedState) => {
        const currentValue = value ?? internalValue
        const nextValue =
          checked === true
            ? currentValue.includes(itemValue)
              ? currentValue
              : [...currentValue, itemValue]
            : currentValue.filter((currentItem) => currentItem !== itemValue)

        if (value === undefined) {
          setInternalValue(nextValue)
        }

        onValueChange?.(nextValue)
        onChange?.(nextValue)
      },
      [internalValue, onChange, onValueChange, value],
    )
    const contextValue = React.useMemo<CheckboxContextState>(
      () => ({
        disabled,
        name,
        onItemCheckedChange: setItemChecked,
        size,
        tone,
        value: selectedValue,
        variant,
      }),
      [disabled, name, selectedValue, setItemChecked, size, tone, variant],
    )

    return (
      <CheckboxContext.Provider value={contextValue}>
        <fieldset
          aria-describedby={resolvedDescribedBy || undefined}
          className={cn("min-w-0 border-0 p-0", className)}
          data-slot="checkbox-group"
          disabled={disabled}
          ref={ref}
          {...props}
        >
          {hasLabel && (
            <legend
              className={cn(
                "text-sm leading-none font-black text-su-ink select-none",
                hasDescription ? "mb-1" : "mb-3",
              )}
              data-slot="checkbox-group-label"
            >
              {label}
            </legend>
          )}
          {hasDescription && (
            <p
              className="mb-3 text-sm leading-6 font-medium text-su-fg-muted"
              data-slot="checkbox-group-description"
              id={descriptionId}
            >
              {description}
            </p>
          )}
          <div
            className={cn(checkboxGroupDirectionClassNames[direction])}
            data-slot="checkbox-group-items"
          >
            {children}
          </div>
        </fieldset>
      </CheckboxContext.Provider>
    )
  },
)
CheckboxGroup.displayName = "CheckboxGroup"

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
      checked,
      defaultChecked,
      disabled,
      id,
      label,
      name,
      onCheckedChange,
      size,
      tone,
      value,
      variant,
      ...props
    },
    ref,
  ) => {
    const context = React.useContext(CheckboxContext)
    const resolvedSize = size ?? context.size
    const resolvedTone = tone ?? context.tone
    const resolvedVariant = variant ?? context.variant
    const resolvedDisabled = Boolean(context.disabled || disabled)
    const isGroupedCheckbox =
      typeof value === "string" && context.onItemCheckedChange !== undefined
    const generatedId = React.useId()
    const hasLabel = label !== undefined && label !== null && label !== false
    const controlId = id ?? (hasLabel ? generatedId : undefined)
    const control = (
      <CheckboxPrimitive.Root
        className={cn(
          checkboxVariants({
            disabled: resolvedDisabled,
            size: resolvedSize,
            tone: resolvedTone,
            variant: resolvedVariant,
          }),
          className,
        )}
        checked={isGroupedCheckbox ? context.value.includes(value) : checked}
        data-slot="checkbox"
        defaultChecked={isGroupedCheckbox ? undefined : defaultChecked}
        disabled={resolvedDisabled}
        id={controlId}
        name={name ?? (isGroupedCheckbox ? context.name : undefined)}
        onCheckedChange={(nextChecked) => {
          if (isGroupedCheckbox) {
            context.onItemCheckedChange?.(value, nextChecked)
          }

          onCheckedChange?.(nextChecked)
        }}
        ref={ref}
        value={value}
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
              checkboxSizeClassNames[resolvedSize].icon,
            )}
          />
          <Check
            aria-hidden="true"
            className={cn(
              "stroke-[3.5] group-data-[state=indeterminate]:hidden",
              checkboxSizeClassNames[resolvedSize].icon,
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
          "inline-flex min-w-0 cursor-pointer items-center gap-3 text-su-ink select-none",
          resolvedDisabled && "cursor-not-allowed",
        )}
        data-slot="checkbox-label"
        htmlFor={controlId}
      >
        {control}
        <span
          className={cn(
            "min-w-0 leading-none font-black",
            checkboxSizeClassNames[resolvedSize].label,
            resolvedDisabled && "opacity-55",
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

/**
 * Sticker checkbox input with an optional grouped multi-select namespace.
 */
const CheckboxWithGroup = Object.assign(Checkbox, {
  Group: CheckboxGroup,
})

export { CheckboxWithGroup as Checkbox, CheckboxGroup, checkboxVariants }
export type { CheckboxGroupProps, CheckboxProps }
