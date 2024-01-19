import * as React from "react"

import { inputVariants } from "@/components/ui/input"
import { cn } from "@/lib/utils"

type TextareaSize = "lg" | "md" | "sm"
type TextareaTone =
  | "danger"
  | "default"
  | "info"
  | "secondary"
  | "success"
  | "warning"
type TextareaVariant = "filled" | "outlined" | "quiet"

interface TextareaVariantOptions {
  className?: string
  size?: TextareaSize
  tone?: TextareaTone
  variant?: TextareaVariant
}

const textareaSizeClassNames = {
  lg: "min-h-36 py-3 leading-6",
  md: "min-h-28 py-2.5 leading-6",
  sm: "min-h-20 py-2 leading-5",
} satisfies Record<TextareaSize, string>

/**
 * Builds the sticker textarea className by reusing the input variants and adding multiline sizing.
 */
const textareaVariants = ({
  className,
  size = "md",
  tone = "default",
  variant = "outlined",
}: TextareaVariantOptions = {}) =>
  cn(
    inputVariants({ size, tone, variant }),
    "resize-y",
    textareaSizeClassNames[size],
    className,
  )

/**
 * Props for the sticker textarea element.
 * @remarks Inherits native textarea attributes, except the numeric HTML `size` attribute is replaced by the sticker component API.
 */
interface TextareaProps extends Omit<
  React.TextareaHTMLAttributes<HTMLTextAreaElement>,
  "size"
> {
  /**
   * Controls the textarea minimum height, radius, padding, and text size.
   * @default "md"
   */
  size?: TextareaSize
  /**
   * Controls the textarea semantic paper tone.
   * @default "default"
   */
  tone?: TextareaTone
  /**
   * Controls the textarea border and fill emphasis.
   * @default "outlined"
   */
  variant?: TextareaVariant
}

function Textarea({
  className,
  size = "md",
  tone = "default",
  variant = "outlined",
  ...props
}: TextareaProps) {
  return (
    <textarea
      className={cn(textareaVariants({ size, tone, variant }), className)}
      data-slot="textarea"
      {...props}
    />
  )
}

export { Textarea, textareaVariants }
