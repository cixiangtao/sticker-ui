import { colordx, extend, getFormat, type Colordx } from "@colordx/core"
import a98 from "@colordx/core/plugins/a98rgb"
import hwb from "@colordx/core/plugins/hwb"
import lab from "@colordx/core/plugins/lab"
import lch from "@colordx/core/plugins/lch"
import names from "@colordx/core/plugins/names"
import p3 from "@colordx/core/plugins/p3"
import prophoto from "@colordx/core/plugins/prophoto"
import rec2020 from "@colordx/core/plugins/rec2020"
import { cva } from "class-variance-authority"
import * as React from "react"

import { cn } from "@/lib/utils"

type ColorPickerChangeHandler = (
  value: string,
  event: React.ChangeEvent<HTMLInputElement>,
) => void

/**
 * Serialization format used when the native color panel emits a new color.
 * @remarks `auto` keeps the current value's format when possible; named colors are emitted as hex after selection.
 */
type ColorPickerOutputFormat =
  | "auto"
  | "a98"
  | "hex"
  | "hsl"
  | "hwb"
  | "lab"
  | "lch"
  | "oklab"
  | "oklch"
  | "p3"
  | "prophoto"
  | "rec2020"
  | "rgb"
type ColorPickerResolvedOutputFormat = Exclude<ColorPickerOutputFormat, "auto">
type ColorPickerSize = "lg" | "md" | "sm"

const DEFAULT_COLOR_PICKER_VALUE = "#000000"

extend([a98, hwb, lab, lch, names, p3, prophoto, rec2020])

const colorPickerSwatchClassNames = {
  lg: "size-7 rounded-su-md",
  md: "size-6 rounded-su-sm",
  sm: "size-5 rounded-su-xs",
} satisfies Record<ColorPickerSize, string>

/**
 * Builds the sticker color picker className from structure and size variants.
 */
const colorPickerVariants = cva(
  "relative inline-flex min-w-0 items-center gap-2 overflow-hidden border-2 border-su-ink bg-su-surface font-extrabold text-su-ink shadow-su-sm transition duration-150 outline-none focus-within:shadow-su-md focus-within:ring-[2px] focus-within:ring-su-ring/65 aria-invalid:border-su-fg-danger aria-invalid:bg-su-fill-danger",
  {
    defaultVariants: {
      disabled: false,
      size: "md",
    },
    variants: {
      disabled: {
        false: "cursor-pointer",
        true: "cursor-not-allowed opacity-55",
      },
      size: {
        lg: "h-12 rounded-su-xl px-3 text-sm",
        md: "h-11 rounded-su-lg px-2.5 text-xs",
        sm: "h-9 rounded-su-md px-2 text-[11px]",
      },
    },
  },
)

/**
 * Props for the sticker color picker element.
 * @remarks Wraps the native `input[type="color"]`, accepts CSS color strings, and converts picker changes back to the requested output format.
 */
interface ColorPickerProps extends Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  | "children"
  | "className"
  | "defaultValue"
  | "onChange"
  | "size"
  | "type"
  | "value"
> {
  /**
   * Custom className for the picker frame.
   */
  className?: string
  /**
   * Initial uncontrolled CSS color value.
   * @default "#000000"
   */
  defaultValue?: string
  /**
   * Runs when the selected color changes.
   * @remarks Receives the next CSS color value first and the native change event second.
   */
  onChange?: ColorPickerChangeHandler
  /**
   * Controls how picker changes are serialized.
   * @default "auto"
   */
  outputFormat?: ColorPickerOutputFormat
  /**
   * Shows the current CSS color value beside the swatch.
   * @default true
   */
  showValue?: boolean
  /**
   * Controls the picker frame, swatch, and text size.
   * @default "md"
   */
  size?: ColorPickerSize
  /**
   * Controlled CSS color value.
   */
  value?: string
}

function ColorPicker({
  "aria-invalid": ariaInvalid,
  className,
  defaultValue = DEFAULT_COLOR_PICKER_VALUE,
  disabled,
  onChange,
  outputFormat = "auto",
  showValue = true,
  size = "md",
  value,
  ...props
}: ColorPickerProps) {
  const [uncontrolledValue, setUncontrolledValue] = React.useState(defaultValue)
  const currentValue = value ?? uncontrolledValue
  const parsedColor = parseColor(currentValue)
  const swatchValue = parsedColor
    ? getColorInputValue(parsedColor)
    : DEFAULT_COLOR_PICKER_VALUE

  return (
    <span
      aria-invalid={ariaInvalid}
      className={cn(
        colorPickerVariants({ disabled, size }),
        !showValue && "w-12 justify-center px-1",
        className,
      )}
      data-slot="color-picker"
    >
      <span
        aria-hidden="true"
        className={cn(
          "shrink-0 border-2 border-su-ink bg-su-paper shadow-su-xs",
          colorPickerSwatchClassNames[size],
        )}
        data-slot="color-picker-swatch"
        style={{ backgroundColor: parsedColor ? currentValue : swatchValue }}
      />
      {showValue ? (
        <span
          aria-hidden="true"
          className="min-w-0 truncate"
          data-slot="color-picker-value"
        >
          {currentValue}
        </span>
      ) : null}
      <input
        aria-invalid={ariaInvalid}
        className="cursor-inherit absolute inset-0 h-full w-full opacity-0 outline-none"
        data-slot="color-picker-control"
        disabled={disabled}
        onChange={(event) => {
          const nextValue = createNextColorValue(
            event.currentTarget.value,
            currentValue,
            outputFormat,
          )

          if (value === undefined) {
            setUncontrolledValue(nextValue)
          }

          onChange?.(nextValue, event)
        }}
        type="color"
        value={swatchValue}
        {...props}
      />
    </span>
  )
}

function createNextColorValue(
  nextHexValue: string,
  currentValue: string,
  outputFormat: ColorPickerOutputFormat,
) {
  const nextColor = parseColor(nextHexValue)

  if (!nextColor) {
    return nextHexValue
  }

  const currentColor = parseColor(currentValue)
  const nextColorWithAlpha = currentColor
    ? nextColor.alpha(currentColor.alpha())
    : nextColor
  const resolvedFormat =
    outputFormat === "auto" ? getAutoOutputFormat(currentValue) : outputFormat

  if (resolvedFormat === "hex") {
    return hasHexAlpha(currentValue)
      ? nextColorWithAlpha.toHex8()
      : nextColorWithAlpha.toHex()
  }

  if (resolvedFormat === "rgb") {
    return nextColorWithAlpha.toRgbString()
  }

  if (resolvedFormat === "hsl") {
    return nextColorWithAlpha.toHslString()
  }

  if (resolvedFormat === "a98") {
    return nextColorWithAlpha.toA98String()
  }

  if (resolvedFormat === "hwb") {
    return nextColorWithAlpha.toHwbString()
  }

  if (resolvedFormat === "lab") {
    return nextColorWithAlpha.toLabString()
  }

  if (resolvedFormat === "lch") {
    return nextColorWithAlpha.toLchString()
  }

  if (resolvedFormat === "oklab") {
    return nextColorWithAlpha.toOklabString()
  }

  if (resolvedFormat === "oklch") {
    return nextColorWithAlpha.toOklchString()
  }

  if (resolvedFormat === "p3") {
    return nextColorWithAlpha.toP3String()
  }

  if (resolvedFormat === "prophoto") {
    return nextColorWithAlpha.toProphotoString()
  }

  if (resolvedFormat === "rec2020") {
    return nextColorWithAlpha.toRec2020String()
  }

  return nextColorWithAlpha.toHex()
}

function getAutoOutputFormat(value: string): ColorPickerResolvedOutputFormat {
  const format = getFormat(value)

  if (
    format === "a98-rgb" ||
    format === "hex" ||
    format === "hsl" ||
    format === "hwb" ||
    format === "lab" ||
    format === "lch" ||
    format === "oklab" ||
    format === "oklch" ||
    format === "p3" ||
    format === "prophoto-rgb" ||
    format === "rec2020" ||
    format === "rgb"
  ) {
    return normalizeOutputFormat(format)
  }

  return "hex"
}

function normalizeOutputFormat(
  format: string,
): ColorPickerResolvedOutputFormat {
  if (format === "a98-rgb") {
    return "a98"
  }

  if (format === "prophoto-rgb") {
    return "prophoto"
  }

  return format as ColorPickerResolvedOutputFormat
}

function parseColor(value: string) {
  const color = colordx(value)

  return color.isValid() ? color : null
}

function getColorInputValue(color: Colordx) {
  return color.toHex().slice(0, 7)
}

function hasHexAlpha(value: string) {
  return /^#(?:[0-9a-fA-F]{4}|[0-9a-fA-F]{8})$/.test(value.trim())
}

export { ColorPicker, colorPickerVariants }
export type { ColorPickerOutputFormat, ColorPickerProps }
