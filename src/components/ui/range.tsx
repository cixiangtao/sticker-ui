import { cva, type VariantProps } from "class-variance-authority"
import * as React from "react"

import { cn } from "@/lib/utils"

type RangeStyle = React.CSSProperties & {
  "--range-percent"?: string
}

type RangeChangeHandler = (
  value: number,
  event: React.ChangeEvent<HTMLInputElement>,
) => void

/**
 * Builds the sticker range className from size and tone variants.
 */
const rangeVariants = cva(
  "grid w-full min-w-0 gap-2 text-su-ink [--range-track:var(--color-su-surface)]",
  {
    defaultVariants: {
      disabled: false,
      size: "md",
      tone: "default",
    },
    variants: {
      disabled: {
        false: "",
        true: "opacity-55",
      },
      size: {
        lg: "text-sm",
        md: "text-xs",
        sm: "text-[11px]",
      },
      tone: {
        danger: "[--range-fill:var(--color-su-fill-danger-strong)]",
        default: "[--range-fill:var(--color-su-fill-default)]",
        info: "[--range-fill:var(--color-su-fill-info-strong)]",
        secondary: "[--range-fill:var(--color-su-fill-secondary-strong)]",
        success: "[--range-fill:var(--color-su-fill-success-strong)]",
        warning: "[--range-fill:var(--color-su-fill-warning-strong)]",
      },
    },
  },
)

const rangeControlSizeClassNames = {
  lg: "h-7 [--range-thumb-size:1.75rem] [--range-track-size:1rem]",
  md: "h-6 [--range-thumb-size:1.5rem] [--range-track-size:0.875rem]",
  sm: "h-5 [--range-thumb-size:1.25rem] [--range-track-size:0.75rem]",
} satisfies Record<NonNullable<RangeProps["size"]>, string>

/**
 * Props for the sticker range control.
 * @remarks Wraps the native `input[type="range"]` and reports numeric values through `onChange(value, event)`.
 */
interface RangeProps
  extends
    Omit<
      React.InputHTMLAttributes<HTMLInputElement>,
      | "children"
      | "className"
      | "defaultValue"
      | "max"
      | "min"
      | "onChange"
      | "size"
      | "step"
      | "style"
      | "type"
      | "value"
    >,
    Omit<VariantProps<typeof rangeVariants>, "disabled" | "size" | "tone"> {
  /**
   * Custom className for the range wrapper.
   */
  className?: string
  /**
   * Initial uncontrolled numeric value.
   * @default 0
   */
  defaultValue?: number
  /**
   * Formats the optional visible value label.
   */
  formatValue?: (value: number) => React.ReactNode
  /**
   * Maximum selectable value.
   * @default 100
   */
  max?: number
  /**
   * Minimum selectable value.
   * @default 0
   */
  min?: number
  /**
   * Runs when the range value changes.
   * @remarks Receives the next number first and the native change event second.
   */
  onChange?: RangeChangeHandler
  /**
   * Shows the current value beside the track.
   * @default false
   */
  showValue?: boolean
  /**
   * Controls the range track and thumb size.
   * @default "md"
   */
  size?: "lg" | "md" | "sm"
  /**
   * Step amount between values.
   * @default 1
   */
  step?: number
  /**
   * Custom style for the range wrapper.
   */
  style?: React.CSSProperties
  /**
   * Controls the semantic fill tone.
   * @default "default"
   */
  tone?: "danger" | "default" | "info" | "secondary" | "success" | "warning"
  /**
   * Controlled numeric value.
   */
  value?: number
}

function Range({
  "aria-invalid": ariaInvalid,
  className,
  defaultValue = 0,
  disabled,
  formatValue,
  id,
  max = 100,
  min = 0,
  onChange,
  showValue = false,
  size = "md",
  step = 1,
  style,
  tone = "default",
  value,
  ...props
}: RangeProps) {
  const generatedId = React.useId()
  const controlId = id ?? generatedId
  const [uncontrolledValue, setUncontrolledValue] = React.useState(defaultValue)
  const safeMin = toFiniteNumber(min, 0)
  const safeMax = Math.max(toFiniteNumber(max, 100), safeMin + 1)
  const safeStep = Math.max(toFiniteNumber(step, 1), 0.0001)
  const currentValue = clampValue(value ?? uncontrolledValue, safeMin, safeMax)
  const percent = ((currentValue - safeMin) / (safeMax - safeMin)) * 100
  const rangeStyle = {
    ...style,
    "--range-percent": `${percent}%`,
  } satisfies RangeStyle

  return (
    <span
      aria-invalid={ariaInvalid}
      className={cn(rangeVariants({ disabled, size, tone }), className)}
      data-slot="range"
      style={rangeStyle}
    >
      <span
        className={cn(
          "grid min-w-0 items-center gap-3",
          showValue && "grid-cols-[minmax(0,1fr)_auto]",
        )}
        data-slot="range-body"
      >
        <input
          aria-invalid={ariaInvalid}
          className={cn(
            "w-full min-w-0 cursor-pointer appearance-none bg-transparent transition duration-150 outline-none focus-visible:shadow-su-md focus-visible:ring-[2px] focus-visible:ring-su-ring/65 disabled:cursor-not-allowed aria-invalid:[--range-fill:var(--color-su-fill-danger-strong)] aria-invalid:[--range-track:var(--color-su-fill-danger)] [&::-moz-range-progress]:rounded-full [&::-moz-range-progress]:bg-transparent [&::-moz-range-thumb]:box-border [&::-moz-range-thumb]:size-[var(--range-thumb-size)] [&::-moz-range-thumb]:appearance-none [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-2 [&::-moz-range-thumb]:border-su-ink [&::-moz-range-thumb]:bg-su-paper [&::-moz-range-track]:box-border [&::-moz-range-track]:h-[var(--range-track-size)] [&::-moz-range-track]:rounded-full [&::-moz-range-track]:border-2 [&::-moz-range-track]:border-su-ink [&::-moz-range-track]:bg-[linear-gradient(90deg,var(--range-fill)_0%,var(--range-fill)_var(--range-percent),var(--range-track)_var(--range-percent),var(--range-track)_100%)] [&::-moz-range-track]:shadow-su-xs [&::-webkit-slider-runnable-track]:box-border [&::-webkit-slider-runnable-track]:h-[var(--range-track-size)] [&::-webkit-slider-runnable-track]:rounded-full [&::-webkit-slider-runnable-track]:border-2 [&::-webkit-slider-runnable-track]:border-su-ink [&::-webkit-slider-runnable-track]:bg-[linear-gradient(90deg,var(--range-fill)_0%,var(--range-fill)_var(--range-percent),var(--range-track)_var(--range-percent),var(--range-track)_100%)] [&::-webkit-slider-runnable-track]:shadow-su-xs [&::-webkit-slider-thumb]:mt-[calc((var(--range-track-size)-var(--range-thumb-size))/2)] [&::-webkit-slider-thumb]:box-border [&::-webkit-slider-thumb]:size-[var(--range-thumb-size)] [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-su-ink [&::-webkit-slider-thumb]:bg-su-paper",
            rangeControlSizeClassNames[size],
          )}
          data-slot="range-control"
          disabled={disabled}
          id={controlId}
          max={safeMax}
          min={safeMin}
          onChange={(event) => {
            const nextValue = toFiniteNumber(event.currentTarget.value, safeMin)

            if (value === undefined) {
              setUncontrolledValue(nextValue)
            }

            onChange?.(nextValue, event)
          }}
          step={safeStep}
          type="range"
          value={currentValue}
          {...props}
        />
        {showValue ? (
          <output
            className="min-w-10 rounded-su-sm border border-su-ink bg-su-paper px-2 py-1 text-center font-black text-su-ink tabular-nums shadow-su-xs"
            data-slot="range-value"
            htmlFor={controlId}
          >
            {formatValue ? formatValue(currentValue) : currentValue}
          </output>
        ) : null}
      </span>
    </span>
  )
}

function toFiniteNumber(value: number | string, fallback: number) {
  const numericValue =
    typeof value === "number" ? value : Number.parseFloat(value)

  return Number.isFinite(numericValue) ? numericValue : fallback
}

function clampValue(value: number, min: number, max: number) {
  const safeValue = toFiniteNumber(value, min)

  return Math.min(Math.max(safeValue, min), max)
}

export { Range, rangeVariants, type RangeProps }
