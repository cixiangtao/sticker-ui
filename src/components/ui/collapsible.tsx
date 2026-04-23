import * as CollapsiblePrimitive from "@radix-ui/react-collapsible"
import { cva, type VariantProps } from "class-variance-authority"
import { ChevronDown } from "lucide-react"
import * as React from "react"

import { cn } from "@/lib/utils"

/**
 * Builds the sticker collapsible content className from tone and spacing options.
 */
const collapsibleContentVariants = cva(
  "overflow-hidden rounded-su-xl border-2 border-su-ink text-su-ink shadow-su-sm data-[state=closed]:animate-out data-[state=closed]:slide-out-to-top-1 data-[state=open]:animate-in data-[state=open]:slide-in-from-top-1 motion-reduce:data-[state=closed]:animate-none motion-reduce:data-[state=open]:animate-none",
  {
    defaultVariants: {
      padding: "md",
      tone: "default",
    },
    variants: {
      padding: {
        lg: "p-5",
        md: "p-4",
        sm: "p-3",
      },
      tone: {
        default: "bg-su-paper",
        info: "bg-su-fill-info",
        secondary: "bg-su-fill-secondary",
        warning: "bg-su-fill-warning",
      },
    },
  },
)

const CollapsibleRoot = CollapsiblePrimitive.Root

/**
 * Opens or closes the collapsible content.
 */
const CollapsibleTrigger = React.forwardRef<
  React.ElementRef<typeof CollapsiblePrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof CollapsiblePrimitive.Trigger>
>(({ children, className, ...props }, ref) => (
  <CollapsiblePrimitive.Trigger
    className={cn(
      "group inline-flex cursor-pointer items-center gap-2 rounded-su-lg border-2 border-su-ink bg-su-surface px-3 py-2 text-sm font-black text-su-ink shadow-su-sm transition duration-150 outline-none hover:-translate-y-0.5 hover:shadow-su-md focus-visible:ring-[2px] focus-visible:ring-su-ring/65 active:translate-x-0.5 active:translate-y-0.5 active:shadow-su-xs disabled:cursor-not-allowed disabled:opacity-55",
      className,
    )}
    data-slot="collapsible-trigger"
    ref={ref}
    {...props}
  >
    {children}
    <ChevronDown
      aria-hidden="true"
      className="size-4 stroke-[3] transition-transform group-data-[state=open]:rotate-180"
    />
  </CollapsiblePrimitive.Trigger>
))
CollapsibleTrigger.displayName = CollapsiblePrimitive.Trigger.displayName

/**
 * Props for sticker collapsible content.
 */
interface CollapsibleContentProps
  extends
    React.ComponentPropsWithoutRef<typeof CollapsiblePrimitive.Content>,
    VariantProps<typeof collapsibleContentVariants> {
  /**
   * Controls content padding.
   * @default "md"
   */
  padding?: "lg" | "md" | "sm"
  /**
   * Controls content paper tone.
   * @default "default"
   */
  tone?: "default" | "info" | "secondary" | "warning"
}

/**
 * Sticker collapsible content panel.
 */
const CollapsibleContent = React.forwardRef<
  React.ElementRef<typeof CollapsiblePrimitive.Content>,
  CollapsibleContentProps
>(({ className, padding = "md", tone = "default", ...props }, ref) => (
  <CollapsiblePrimitive.Content
    className={cn(collapsibleContentVariants({ padding, tone }), className)}
    data-slot="collapsible-content"
    ref={ref}
    {...props}
  />
))
CollapsibleContent.displayName = CollapsiblePrimitive.Content.displayName

/**
 * Sticker disclosure primitive powered by Radix Collapsible.
 */
const Collapsible = Object.assign(CollapsibleRoot, {
  Content: CollapsibleContent,
  Trigger: CollapsibleTrigger,
})

export {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
  collapsibleContentVariants,
  type CollapsibleContentProps,
}
