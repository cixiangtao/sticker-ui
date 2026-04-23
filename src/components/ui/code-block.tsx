import { cva, type VariantProps } from "class-variance-authority"
import * as React from "react"

import { cn } from "@/lib/utils"

import { CopyButton } from "./copy-button"

/**
 * Builds the sticker code block className from size and tone options.
 */
const codeBlockVariants = cva(
  "relative overflow-hidden border-2 border-su-ink bg-su-paper text-su-ink shadow-su-lg",
  {
    defaultVariants: {
      size: "md",
      tone: "default",
    },
    variants: {
      size: {
        lg: "rounded-su-2xl text-sm",
        md: "rounded-su-xl text-sm",
        sm: "rounded-su-lg text-xs",
      },
      tone: {
        default: "bg-su-paper",
        info: "bg-su-fill-info",
        secondary: "bg-su-fill-secondary",
      },
    },
  },
)

/**
 * Props for the sticker code block.
 * @remarks Renders a titled pre/code surface with optional copy action.
 */
interface CodeBlockProps
  extends
    Omit<React.HTMLAttributes<HTMLDivElement>, "children" | "title">,
    VariantProps<typeof codeBlockVariants> {
  /**
   * Code content rendered inside the block.
   */
  children: string
  /**
   * Text copied by the copy button.
   * @default children
   */
  copyText?: string
  /**
   * Language label and code class suffix.
   */
  language?: string
  /**
   * Renders the copy action.
   * @default true
   */
  showCopy?: boolean
  /**
   * Controls container radius and text size.
   * @default "md"
   */
  size?: "lg" | "md" | "sm"
  /**
   * Optional code block title.
   */
  title?: React.ReactNode
  /**
   * Controls the paper tone.
   * @default "default"
   */
  tone?: "default" | "info" | "secondary"
  /**
   * Wraps long code lines instead of scrolling horizontally.
   * @default false
   */
  wrap?: boolean
}

/**
 * Tactile pre/code surface for install snippets, tokens, and examples.
 */
function CodeBlock({
  children,
  className,
  copyText = children,
  language,
  showCopy = true,
  size = "md",
  title,
  tone = "default",
  wrap = false,
  ...props
}: CodeBlockProps) {
  const hasHeader = title || language || showCopy

  return (
    <div
      className={cn(codeBlockVariants({ size, tone }), className)}
      data-slot="code-block"
      {...props}
    >
      {hasHeader ? (
        <div
          className="flex min-h-11 items-center justify-between gap-3 border-b-2 border-su-ink bg-su-surface px-3 py-2"
          data-slot="code-block-header"
        >
          <div className="min-w-0">
            {title ? (
              <div
                className="truncate text-sm font-black"
                data-slot="code-block-title"
              >
                {title}
              </div>
            ) : null}
            {language ? (
              <div
                className="text-xs leading-5 font-bold text-su-fg-muted uppercase"
                data-slot="code-block-language"
              >
                {language}
              </div>
            ) : null}
          </div>
          {showCopy ? <CopyButton copyText={copyText} /> : null}
        </div>
      ) : null}
      <pre
        className={cn(
          "m-0 overflow-x-auto p-4 font-mono leading-6",
          wrap && "break-words whitespace-pre-wrap",
        )}
        data-slot="code-block-pre"
      >
        <code
          className={language ? `language-${language}` : undefined}
          data-slot="code-block-code"
        >
          {children}
        </code>
      </pre>
    </div>
  )
}

export { CodeBlock, codeBlockVariants, type CodeBlockProps }
