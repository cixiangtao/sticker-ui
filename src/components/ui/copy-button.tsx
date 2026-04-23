import { Check, Copy } from "lucide-react"
import * as React from "react"

import { Button, type ButtonProps } from "./button"

/**
 * Props for the sticker copy button.
 * @remarks Copies a provided string to the clipboard and exposes temporary copied state.
 */
interface CopyButtonProps extends Omit<
  ButtonProps,
  "children" | "onClick" | "shape"
> {
  /**
   * Accessible label after the copy action succeeds.
   * @default "Copied"
   */
  copiedLabel?: string
  /**
   * Duration in milliseconds before copied state resets.
   * @default 1600
   */
  copiedTimeout?: number
  /**
   * Text copied to the clipboard.
   */
  copyText: string
  /**
   * Accessible label before the copy action succeeds.
   * @default "Copy"
   */
  label?: string
  /**
   * Called after a successful copy action.
   */
  onCopied?: (text: string) => void
  /**
   * Controls whether visible text appears beside the icon.
   * @default false
   */
  showLabel?: boolean
}

/**
 * Icon button for copying code, tokens, commands, and install snippets.
 */
function CopyButton({
  copiedLabel = "Copied",
  copiedTimeout = 1600,
  copyText,
  label = "Copy",
  onCopied,
  showLabel = false,
  size = "sm",
  variant = "outlined",
  ...props
}: CopyButtonProps) {
  const [copied, setCopied] = React.useState(false)
  const timeoutRef = React.useRef<ReturnType<typeof setTimeout> | null>(null)

  React.useEffect(
    () => () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    },
    [],
  )

  async function handleCopy() {
    await navigator.clipboard.writeText(copyText)
    setCopied(true)
    onCopied?.(copyText)

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }

    timeoutRef.current = setTimeout(() => {
      setCopied(false)
    }, copiedTimeout)
  }

  const visibleLabel = copied ? copiedLabel : label

  return (
    <Button
      aria-label={visibleLabel}
      color={copied ? "success" : "default"}
      onClick={() => void handleCopy()}
      shape={showLabel ? "default" : "square"}
      size={size}
      variant={variant}
      {...props}
    >
      {copied ? (
        <Check aria-hidden="true" className="size-4 stroke-[3]" />
      ) : (
        <Copy aria-hidden="true" className="size-4 stroke-[3]" />
      )}
      {showLabel ? <span>{visibleLabel}</span> : null}
    </Button>
  )
}

export { CopyButton, type CopyButtonProps }
