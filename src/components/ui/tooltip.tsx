import * as TooltipPrimitive from "@radix-ui/react-tooltip"
import { cva, type VariantProps } from "class-variance-authority"
import * as React from "react"

import { cn } from "@/lib/utils"

/**
 * Builds the sticker tooltip content className from tone and size options.
 */
const tooltipContentVariants = cva(
  "z-50 max-w-72 origin-(--radix-tooltip-content-transform-origin) rounded-sticker-lg border-2 border-ink text-ink shadow-sticker-md transition duration-150 outline-none data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
  {
    defaultVariants: {
      size: "md",
      tone: "default",
    },
    variants: {
      size: {
        lg: "px-4 py-3 text-sm leading-6 font-bold",
        md: "px-3 py-2 text-xs leading-5 font-extrabold",
        sm: "px-2.5 py-1.5 text-xs leading-4 font-extrabold",
      },
      tone: {
        default: "bg-fill-default-soft",
        info: "bg-fill-info text-text-info",
        secondary: "bg-fill-secondary text-text-secondary",
        success: "bg-fill-success text-text-success",
        warning: "bg-fill-warning text-text-warning",
      },
    },
  },
)

function getTooltipTriggerClassName(disabled?: boolean) {
  return cn("cursor-pointer", disabled && "cursor-not-allowed opacity-55")
}

/**
 * Props for the sticker tooltip provider.
 */
interface TooltipProviderProps extends React.ComponentPropsWithoutRef<
  typeof TooltipPrimitive.Provider
> {
  /**
   * Delay in milliseconds before the tooltip opens.
   * @default 120
   */
  delayDuration?: number
  /**
   * Delay in milliseconds before another tooltip reuses the instant-open window.
   * @default 120
   */
  skipDelayDuration?: number
}

/**
 * Provides responsive timing defaults for sticker tooltips.
 */
function TooltipProvider({
  delayDuration = 120,
  skipDelayDuration = 120,
  ...props
}: TooltipProviderProps) {
  return (
    <TooltipPrimitive.Provider
      delayDuration={delayDuration}
      skipDelayDuration={skipDelayDuration}
      {...props}
    />
  )
}

/**
 * Sticker tooltip root powered by Radix Tooltip.
 */
const Tooltip = TooltipPrimitive.Root

/**
 * Opens the tooltip on hover or focus.
 */
const TooltipTrigger = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Trigger>
>(({ className, disabled, ...props }, ref) => (
  <TooltipPrimitive.Trigger
    className={cn(getTooltipTriggerClassName(disabled), className)}
    data-slot="tooltip-trigger"
    disabled={disabled}
    ref={ref}
    {...props}
  />
))
TooltipTrigger.displayName = TooltipPrimitive.Trigger.displayName

/**
 * Props for sticker tooltip content.
 * @remarks Wraps Radix Tooltip.Content and adds sticker tone, size, and optional arrow styling.
 */
interface TooltipContentProps
  extends
    React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>,
    VariantProps<typeof tooltipContentVariants> {
  /**
   * Controls tooltip padding and text size.
   * @default "md"
   */
  size?: "lg" | "md" | "sm"
  /**
   * Renders the small ink arrow that points at the trigger.
   * @default true
   */
  showArrow?: boolean
  /**
   * Controls the tooltip paper tone.
   * @default "default"
   */
  tone?: "default" | "info" | "secondary" | "success" | "warning"
}

/**
 * Portaled sticker tooltip bubble.
 */
const TooltipContent = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>,
  TooltipContentProps
>(
  (
    {
      children,
      className,
      sideOffset = 8,
      showArrow = true,
      size = "md",
      tone = "default",
      ...props
    },
    ref,
  ) => (
    <TooltipPrimitive.Portal>
      <TooltipPrimitive.Content
        className={cn(tooltipContentVariants({ size, tone }), className)}
        data-slot="tooltip-content"
        ref={ref}
        sideOffset={sideOffset}
        {...props}
      >
        {children}
        {showArrow ? (
          <TooltipPrimitive.Arrow
            aria-hidden="true"
            className="fill-ink"
            data-slot="tooltip-arrow"
          />
        ) : null}
      </TooltipPrimitive.Content>
    </TooltipPrimitive.Portal>
  ),
)
TooltipContent.displayName = TooltipPrimitive.Content.displayName

export {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
  tooltipContentVariants,
  type TooltipContentProps,
  type TooltipProviderProps,
}
