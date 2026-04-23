import * as HoverCardPrimitive from "@radix-ui/react-hover-card"
import { cva, type VariantProps } from "class-variance-authority"
import * as React from "react"

import { cn } from "@/lib/utils"

/**
 * Builds the sticker hover card content className from tone and size options.
 */
const hoverCardContentVariants = cva(
  "z-50 origin-(--radix-hover-card-content-transform-origin) rounded-su-2xl border-2 border-su-ink text-su-ink shadow-su-lg transition duration-150 outline-none data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 motion-reduce:data-[state=closed]:animate-none motion-reduce:data-[state=open]:animate-none",
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

const HoverCardRoot = HoverCardPrimitive.Root
const HoverCardTrigger = HoverCardPrimitive.Trigger
const HoverCardPortal = HoverCardPrimitive.Portal

/**
 * Props for sticker hover card content.
 * @remarks Wraps Radix HoverCard.Content and adds sticker tone, size, and optional arrow styling.
 */
interface HoverCardContentProps
  extends
    React.ComponentPropsWithoutRef<typeof HoverCardPrimitive.Content>,
    VariantProps<typeof hoverCardContentVariants> {
  /**
   * Controls panel width and padding.
   * @default "md"
   */
  size?: "lg" | "md" | "sm"
  /**
   * Renders the small ink arrow that points at the trigger.
   * @default false
   */
  showArrow?: boolean
  /**
   * Controls the paper tone.
   * @default "default"
   */
  tone?: "default" | "info" | "secondary" | "success" | "warning"
}

/**
 * Portaled sticker hover card panel for non-interactive previews.
 */
const HoverCardContent = React.forwardRef<
  React.ElementRef<typeof HoverCardPrimitive.Content>,
  HoverCardContentProps
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
    <HoverCardPortal>
      <HoverCardPrimitive.Content
        align={align}
        className={cn(hoverCardContentVariants({ size, tone }), className)}
        data-slot="hover-card-content"
        ref={ref}
        sideOffset={sideOffset}
        {...props}
      >
        {children}
        {showArrow ? (
          <HoverCardPrimitive.Arrow
            aria-hidden="true"
            className="fill-su-ink"
            data-slot="hover-card-arrow"
          />
        ) : null}
      </HoverCardPrimitive.Content>
    </HoverCardPortal>
  ),
)
HoverCardContent.displayName = HoverCardPrimitive.Content.displayName

/**
 * Sticker hover card root powered by Radix HoverCard.
 */
const HoverCard = Object.assign(HoverCardRoot, {
  Content: HoverCardContent,
  Portal: HoverCardPortal,
  Trigger: HoverCardTrigger,
})

export {
  HoverCard,
  HoverCardContent,
  HoverCardPortal,
  HoverCardTrigger,
  hoverCardContentVariants,
  type HoverCardContentProps,
}
