import * as SliderPrimitive from "@radix-ui/react-slider"
import { cva, type VariantProps } from "class-variance-authority"
import * as React from "react"

import { cn } from "@/lib/utils"

/**
 * Value accepted by the sticker slider.
 */
type SliderValue = number | number[]

/**
 * Form-friendly single-thumb slider change handler.
 */
type SliderChangeHandler = (value: number) => void

/**
 * Radix-compatible slider change handler.
 */
type SliderValueChangeHandler = (value: number[]) => void

/**
 * Builds the sticker slider root className from size and tone options.
 */
const sliderVariants = cva(
  "relative flex w-full touch-none items-center select-none aria-invalid:[--slider-fill:var(--color-su-fill-danger-strong)] data-[disabled]:opacity-55 data-[orientation=vertical]:h-48 data-[orientation=vertical]:w-auto data-[orientation=vertical]:flex-col",
  {
    defaultVariants: {
      size: "md",
      tone: "default",
    },
    variants: {
      size: {
        lg: "[--slider-thumb-size:1.75rem] [--slider-track-size:1rem]",
        md: "[--slider-thumb-size:1.5rem] [--slider-track-size:0.875rem]",
        sm: "[--slider-thumb-size:1.25rem] [--slider-track-size:0.75rem]",
      },
      tone: {
        danger: "[--slider-fill:var(--color-su-fill-danger-strong)]",
        default: "[--slider-fill:var(--color-su-fill-default)]",
        info: "[--slider-fill:var(--color-su-fill-info-strong)]",
        secondary: "[--slider-fill:var(--color-su-fill-secondary-strong)]",
        success: "[--slider-fill:var(--color-su-fill-success-strong)]",
        warning: "[--slider-fill:var(--color-su-fill-warning-strong)]",
      },
    },
  },
)

/**
 * Props for the sticker slider.
 * @remarks Wraps Radix Slider.Root, accepts number or number array values, and supports single or multiple thumbs.
 */
interface SliderProps
  extends
    Omit<
      React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>,
      "defaultValue" | "onChange" | "onValueChange" | "value"
    >,
    VariantProps<typeof sliderVariants> {
  /**
   * Initial uncontrolled value.
   * @remarks Pass a number for a single-thumb slider or an array for range thumbs.
   * @default 0
   */
  defaultValue?: SliderValue
  /**
   * Runs when the slider value changes.
   * @remarks Receives the first thumb value as a Form.Item-friendly single number.
   */
  onChange?: SliderChangeHandler
  /**
   * Runs when the Radix slider value changes.
   * @remarks Receives the normalized number array from Radix.
   */
  onValueChange?: SliderValueChangeHandler
  /**
   * Controls track and thumb size.
   * @default "md"
   */
  size?: "lg" | "md" | "sm"
  /**
   * Controls the semantic fill tone.
   * @default "default"
   */
  tone?: "danger" | "default" | "info" | "secondary" | "success" | "warning"
  /**
   * Controlled value.
   * @remarks Pass a number for a single-thumb slider or an array for range thumbs.
   */
  value?: SliderValue
}

/**
 * Radix-powered sticker slider for single values, ranges, and keyboard control.
 */
const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  SliderProps
>(
  (
    {
      className,
      defaultValue = 0,
      onChange,
      onValueChange,
      size = "md",
      tone = "default",
      value,
      ...props
    },
    ref,
  ) => {
    const normalizedDefaultValue = toSliderValueArray(defaultValue)
    const normalizedValue =
      value === undefined ? undefined : toSliderValueArray(value)
    const thumbValues = normalizedValue ?? normalizedDefaultValue

    return (
      <SliderPrimitive.Root
        className={cn(sliderVariants({ size, tone }), className)}
        data-slot="slider"
        defaultValue={normalizedDefaultValue}
        onValueChange={(nextValue) => {
          onValueChange?.(nextValue)
          onChange?.(nextValue[0] ?? 0)
        }}
        ref={ref}
        value={normalizedValue}
        {...props}
      >
        <SliderPrimitive.Track
          className="relative h-[var(--slider-track-size)] grow overflow-hidden rounded-full border-2 border-su-ink bg-su-surface shadow-su-xs data-[orientation=vertical]:h-full data-[orientation=vertical]:w-[var(--slider-track-size)]"
          data-slot="slider-track"
        >
          <SliderPrimitive.Range
            className="absolute h-full bg-[var(--slider-fill)] data-[orientation=vertical]:w-full"
            data-slot="slider-range"
          />
        </SliderPrimitive.Track>
        {thumbValues.map((_, index) => (
          <SliderPrimitive.Thumb
            className="block size-[var(--slider-thumb-size)] rounded-full border-2 border-su-ink bg-su-paper shadow-su-md transition duration-150 outline-none hover:-translate-y-0.5 hover:shadow-su-lg focus-visible:ring-[2px] focus-visible:ring-su-ring/65 disabled:pointer-events-none disabled:opacity-55"
            data-slot="slider-thumb"
            key={index}
          />
        ))}
      </SliderPrimitive.Root>
    )
  },
)
Slider.displayName = SliderPrimitive.Root.displayName

function toSliderValueArray(value: SliderValue) {
  return Array.isArray(value) ? value : [value]
}

export {
  Slider,
  sliderVariants,
  type SliderChangeHandler,
  type SliderProps,
  type SliderValue,
  type SliderValueChangeHandler,
}
