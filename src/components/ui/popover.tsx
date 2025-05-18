import * as PopoverPrimitive from "@radix-ui/react-popover"
import { cva, type VariantProps } from "class-variance-authority"
import * as React from "react"

import { cn } from "@/lib/utils"

/**
 * Builds the sticker popover content className from tone and size options.
 */
const popoverContentVariants = cva(
  "z-50 origin-(--radix-popover-content-transform-origin) rounded-su-2xl border-2 border-su-ink text-su-ink shadow-su-lg transition duration-150 outline-none data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 motion-reduce:data-[state=closed]:animate-none motion-reduce:data-[state=open]:animate-none",
  {
    defaultVariants: {
      size: "md",
      tone: "default",
    },
    variants: {
      size: {
        lg: "w-96 p-5",
        md: "w-80 p-4",
        sm: "w-64 p-3",
      },
      tone: {
        default: "bg-su-paper",
        info: "bg-su-fill-info",
        secondary: "bg-su-fill-secondary",
        success: "bg-su-fill-success",
        warning: "bg-su-fill-warning",
      },
    },
  },
)

function getPopoverActionClassName(disabled?: boolean) {
  return cn("cursor-pointer", disabled && "cursor-not-allowed opacity-55")
}

/**
 * Sticker popover root powered by Radix Popover.
 */
const Popover = PopoverPrimitive.Root

/**
 * Opens the popover.
 */
const PopoverTrigger = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Trigger>
>(({ className, disabled, ...props }, ref) => (
  <PopoverPrimitive.Trigger
    className={cn(getPopoverActionClassName(disabled), className)}
    data-slot="popover-trigger"
    disabled={disabled}
    ref={ref}
    {...props}
  />
))
PopoverTrigger.displayName = PopoverPrimitive.Trigger.displayName

/**
 * Positions popover content against a custom anchor.
 */
const PopoverAnchor = PopoverPrimitive.Anchor

/**
 * Closes the popover when activated.
 */
const PopoverClose = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Close>,
  React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Close>
>(({ className, disabled, ...props }, ref) => (
  <PopoverPrimitive.Close
    className={cn(getPopoverActionClassName(disabled), className)}
    data-slot="popover-close"
    disabled={disabled}
    ref={ref}
    {...props}
  />
))
PopoverClose.displayName = PopoverPrimitive.Close.displayName

/**
 * Props for sticker popover content.
 * @remarks Wraps Radix Popover.Content and adds sticker tone, size, and optional arrow styling.
 */
interface PopoverContentProps
  extends
    React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content>,
    VariantProps<typeof popoverContentVariants> {
  /**
   * Controls popover width and padding.
   * @default "md"
   */
  size?: "lg" | "md" | "sm"
  /**
   * Renders the small ink arrow that points at the trigger.
   * @default false
   */
  showArrow?: boolean
  /**
   * Controls the popover paper tone.
   * @default "default"
   */
  tone?: "default" | "info" | "secondary" | "success" | "warning"
}

/**
 * Portaled sticker popover panel for interactive floating content.
 */
const PopoverContent = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Content>,
  PopoverContentProps
>(
  (
    {
      align = "center",
      children,
      className,
      sideOffset = 10,
      showArrow = false,
      size = "md",
      tone = "default",
      ...props
    },
    ref,
  ) => (
    <PopoverPrimitive.Portal>
      <PopoverPrimitive.Content
        align={align}
        className={cn(popoverContentVariants({ size, tone }), className)}
        data-slot="popover-content"
        ref={ref}
        sideOffset={sideOffset}
        {...props}
      >
        {children}
        {showArrow ? (
          <PopoverPrimitive.Arrow
            aria-hidden="true"
            className="fill-su-ink"
            data-slot="popover-arrow"
          />
        ) : null}
      </PopoverPrimitive.Content>
    </PopoverPrimitive.Portal>
  ),
)
PopoverContent.displayName = PopoverPrimitive.Content.displayName

export {
  Popover,
  PopoverAnchor,
  PopoverClose,
  PopoverContent,
  PopoverTrigger,
  popoverContentVariants,
  type PopoverContentProps,
}
