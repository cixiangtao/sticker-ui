import * as React from "react"

import { Button } from "@/components/ui/button"
import { Input, inputVariants } from "@/components/ui/input"
import { cn } from "@/lib/utils"

type InputPasswordBase = React.ComponentProps<typeof Input>
type InputPasswordSize = NonNullable<InputPasswordBase["size"]>

const inputPasswordSizeClassNames = {
  lg: {
    root: "pr-1",
    toggle: "h-9 px-3 text-xs",
  },
  md: {
    root: "pr-1",
    toggle: "h-8 px-2.5 text-[11px]",
  },
  sm: {
    root: "pr-1",
    toggle: "h-7 px-2 text-[10px]",
  },
} satisfies Record<
  InputPasswordSize,
  {
    root: string
    toggle: string
  }
>

/**
 * Props for the sticker password input element.
 * @remarks Inherits native input attributes, except the native `type` and numeric HTML `size` attributes are replaced by password-specific sticker APIs.
 */
interface InputPasswordProps extends Omit<InputPasswordBase, "type"> {
  /**
   * Sets the initial uncontrolled password visibility state.
   * @default false
   */
  defaultVisible?: boolean
  /**
   * Accessible label and visible text for the hide-password button state.
   * @default "Hide"
   */
  hideLabel?: string
  /**
   * Runs when password visibility changes.
   */
  onVisibleChange?: (visible: boolean) => void
  /**
   * Accessible label and visible text for the show-password button state.
   * @default "Show"
   */
  showLabel?: string
  /**
   * Controls the input height, radius, and text size.
   * @default "md"
   */
  size?: InputPasswordSize
  /**
   * Controlled password visibility state.
   */
  visible?: boolean
}

function InputPassword({
  "aria-invalid": ariaInvalid,
  className,
  defaultVisible = false,
  disabled,
  hideLabel = "Hide",
  onVisibleChange,
  showLabel = "Show",
  size = "md",
  tone = "default",
  variant = "outlined",
  visible: visibleProp,
  ...props
}: InputPasswordProps) {
  const [uncontrolledVisible, setUncontrolledVisible] =
    React.useState(defaultVisible)
  const visible = visibleProp ?? uncontrolledVisible
  const visibilityLabel = visible ? hideLabel : showLabel

  function toggleVisibility() {
    const nextVisible = !visible

    if (visibleProp === undefined) {
      setUncontrolledVisible(nextVisible)
    }

    onVisibleChange?.(nextVisible)
  }

  return (
    <div
      aria-invalid={ariaInvalid}
      className={cn(
        inputVariants({ size, tone, variant }),
        "items-center gap-2 py-0 focus-within:shadow-sticker-md focus-within:ring-2 focus-within:ring-ring/65",
        disabled && "cursor-not-allowed opacity-55",
        inputPasswordSizeClassNames[size].root,
        className,
      )}
      data-disabled={disabled ? "" : undefined}
      data-slot="input-password"
    >
      <input
        aria-invalid={ariaInvalid}
        className={cn(
          "h-full min-w-0 flex-1 bg-transparent font-bold text-inherit outline-none placeholder:text-text-placeholder disabled:cursor-not-allowed",
        )}
        data-slot="input-password-control"
        disabled={disabled}
        type={visible ? "text" : "password"}
        {...props}
      />
      <Button
        aria-label={visibilityLabel}
        className={cn(
          "shrink-0 rounded-sticker-md border border-ink bg-surface-muted font-black tracking-[0.08em] text-ink uppercase shadow-none hover:-translate-y-0.5 hover:bg-fill-default-soft hover:shadow-none active:translate-y-0 active:shadow-none",
          inputPasswordSizeClassNames[size].toggle,
        )}
        color="default"
        data-slot="input-password-toggle"
        disabled={disabled}
        onClick={toggleVisibility}
        size="sm"
        variant="filled"
      >
        {visibilityLabel}
      </Button>
    </div>
  )
}

export { InputPassword }
