import * as AspectRatioPrimitive from "@radix-ui/react-aspect-ratio"
import { cva, type VariantProps } from "class-variance-authority"
import * as React from "react"

import { cn } from "@/lib/utils"

/**
 * Builds the sticker aspect-ratio frame className from structure variants.
 */
const aspectRatioVariants = cva("relative overflow-hidden text-su-ink", {
  defaultVariants: {
    framed: true,
    tone: "default",
  },
  variants: {
    framed: {
      false: "",
      true: "rounded-su-2xl border-2 border-su-ink shadow-su-lg",
    },
    tone: {
      default: "bg-su-paper",
      info: "bg-su-fill-info",
      secondary: "bg-su-fill-secondary",
      warning: "bg-su-fill-warning",
    },
  },
})

/**
 * Props for the sticker aspect-ratio frame.
 * @remarks Wraps Radix AspectRatio.Root and keeps media surfaces stable while content loads.
 */
interface AspectRatioProps
  extends
    React.ComponentPropsWithoutRef<typeof AspectRatioPrimitive.Root>,
    VariantProps<typeof aspectRatioVariants> {
  /**
   * Adds the sticker border, radius, and hard shadow frame.
   * @default true
   */
  framed?: boolean
  /**
   * Controls the fallback paper tone behind the media.
   * @default "default"
   */
  tone?: "default" | "info" | "secondary" | "warning"
}

/**
 * Stable sticker media frame for thumbnails, embeds, and responsive previews.
 */
function AspectRatio({
  className,
  framed = true,
  tone = "default",
  ...props
}: AspectRatioProps) {
  return (
    <AspectRatioPrimitive.Root
      className={cn(aspectRatioVariants({ framed, tone }), className)}
      data-slot="aspect-ratio"
      {...props}
    />
  )
}

export { AspectRatio, aspectRatioVariants, type AspectRatioProps }
