import { Eye, EyeOff } from "lucide-react"
import * as React from "react"

import { Input, inputVariants } from "@/components/ui/input"
import { cn } from "@/lib/utils"

type InputPasswordBase = React.ComponentProps<typeof Input>
type InputPasswordSize = NonNullable<InputPasswordBase["size"]>
type InputPasswordChangeHandler = (
  value: string,
  event: React.ChangeEvent<HTMLInputElement>,
) => void

const inputPasswordSizeClassNames = {
  lg: {
    root: "pr-1",
    icon: "size-[18px]",
    toggle: "size-9",
  },
  md: {
    root: "pr-1",
    icon: "size-4",
    toggle: "size-8",
  },
  sm: {
    root: "pr-1",
    icon: "size-3.5",
    toggle: "size-7",
  },
} satisfies Record<
  InputPasswordSize,
  {
    icon: string
    root: string
    toggle: string
  }
>

/**
 * Props for the sticker password input element.
 * @remarks Inherits sticker input attributes, except `onChange`, the native `type`, and numeric HTML `size` attributes are replaced by password-specific sticker APIs.
 */
interface InputPasswordProps extends Omit<
  InputPasswordBase,
  "onChange" | "type"
> {
  /**
   * Sets the initial uncontrolled password visibility state.
   * @default false
   */
  defaultVisible?: boolean
  /**
   * Accessible label for the hide-password icon button state.
   * @default "Hide"
   */
  hideLabel?: string
  /**
   * Runs when password visibility changes.
   */
  onVisibleChange?: (visible: boolean) => void
  /**
   * Runs when the password value changes.
   * @remarks Receives the next string value first and the native change event second.
   */
  onChange?: InputPasswordChangeHandler
  /**
   * Accessible label for the show-password icon button state.
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
  onChange,
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
        onChange={(event) => {
          onChange?.(event.currentTarget.value, event)
        }}
        type={visible ? "text" : "password"}
        {...props}
      />
      <button
        aria-label={visibilityLabel}
        aria-pressed={visible}
        className={cn(
          "inline-flex shrink-0 items-center justify-center rounded-sticker-md bg-transparent text-ink/70 transition duration-150 outline-none hover:text-ink focus-visible:ring-2 focus-visible:ring-ring/65 active:text-ink disabled:pointer-events-none disabled:opacity-55",
          inputPasswordSizeClassNames[size].toggle,
        )}
        data-slot="input-password-toggle"
        data-visible={visible ? "" : undefined}
        disabled={disabled}
        onClick={toggleVisibility}
        type="button"
      >
        {visible ? (
          <EyeOff
            aria-hidden="true"
            className={inputPasswordSizeClassNames[size].icon}
          />
        ) : (
          <Eye
            aria-hidden="true"
            className={inputPasswordSizeClassNames[size].icon}
          />
        )}
      </button>
    </div>
  )
}

export { InputPassword }
