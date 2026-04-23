import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area"
import { cva, type VariantProps } from "class-variance-authority"
import * as React from "react"

import { cn } from "@/lib/utils"

/**
 * Builds the sticker scroll-area root className from frame options.
 */
const scrollAreaVariants = cva("relative overflow-hidden text-su-ink", {
  defaultVariants: {
    framed: true,
    tone: "default",
  },
  variants: {
    framed: {
      false: "",
      true: "rounded-su-2xl border-2 border-su-ink shadow-su-md",
    },
    tone: {
      default: "bg-su-paper",
      info: "bg-su-fill-info",
      secondary: "bg-su-fill-secondary",
    },
  },
})

/**
 * Props for the sticker scroll area.
 * @remarks Wraps Radix ScrollArea.Root and adds optional sticker framing.
 */
interface ScrollAreaProps
  extends
    React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Root>,
    VariantProps<typeof scrollAreaVariants> {
  /**
   * Adds the sticker border, radius, and hard shadow frame.
   * @default true
   */
  framed?: boolean
  /**
   * Controls root paper tone.
   * @default "default"
   */
  tone?: "default" | "info" | "secondary"
}

const ScrollAreaScrollbar = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>,
  React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>
>(({ className, orientation = "vertical", ...props }, ref) => (
  <ScrollAreaPrimitive.ScrollAreaScrollbar
    className={cn(
      "flex touch-none bg-su-surface-muted p-1 transition-colors select-none",
      orientation === "vertical" && "h-full w-3 border-l border-su-ink/25",
      orientation === "horizontal" && "h-3 flex-col border-t border-su-ink/25",
      className,
    )}
    data-slot="scroll-area-scrollbar"
    orientation={orientation}
    ref={ref}
    {...props}
  >
    <ScrollAreaPrimitive.ScrollAreaThumb
      className="relative flex-1 rounded-full border border-su-ink bg-su-fill-default shadow-su-xs"
      data-slot="scroll-area-thumb"
    />
  </ScrollAreaPrimitive.ScrollAreaScrollbar>
))
ScrollAreaScrollbar.displayName =
  ScrollAreaPrimitive.ScrollAreaScrollbar.displayName

/**
 * Sticker scroll area for bounded panels, code regions, and dense lists.
 */
const ScrollArea = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.Root>,
  ScrollAreaProps
>(({ children, className, framed = true, tone = "default", ...props }, ref) => (
  <ScrollAreaPrimitive.Root
    className={cn(scrollAreaVariants({ framed, tone }), className)}
    data-slot="scroll-area"
    ref={ref}
    {...props}
  >
    <ScrollAreaPrimitive.Viewport
      className="size-full rounded-[inherit]"
      data-slot="scroll-area-viewport"
    >
      {children}
    </ScrollAreaPrimitive.Viewport>
    <ScrollAreaScrollbar />
    <ScrollAreaScrollbar orientation="horizontal" />
    <ScrollAreaPrimitive.Corner className="bg-su-surface-muted" />
  </ScrollAreaPrimitive.Root>
))
ScrollArea.displayName = ScrollAreaPrimitive.Root.displayName

export {
  ScrollArea,
  ScrollAreaScrollbar,
  scrollAreaVariants,
  type ScrollAreaProps,
}
