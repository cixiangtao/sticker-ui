import * as ToggleGroupPrimitive from "@radix-ui/react-toggle-group"
import * as React from "react"

import { cn } from "@/lib/utils"

import { toggleVariants, type ToggleProps } from "./toggle"

type ToggleGroupContextValue = Pick<ToggleProps, "size" | "tone" | "variant">

const ToggleGroupContext = React.createContext<ToggleGroupContextValue>({
  size: "md",
  tone: "default",
  variant: "outlined",
})

/**
 * Props for the sticker toggle group.
 * @remarks Wraps Radix ToggleGroup.Root and shares size, tone, and variant with items.
 */
type ToggleGroupRootPrimitiveProps =
  | ToggleGroupPrimitive.ToggleGroupMultipleProps
  | ToggleGroupPrimitive.ToggleGroupSingleProps

type ToggleGroupProps = ToggleGroupRootPrimitiveProps &
  ToggleGroupContextValue & {
    /**
     * Controls item height and padding.
     * @default "md"
     */
    size?: ToggleProps["size"]
    /**
     * Controls the active semantic tone.
     * @default "default"
     */
    tone?: ToggleProps["tone"]
    /**
     * Controls item surface structure.
     * @default "outlined"
     */
    variant?: ToggleProps["variant"]
  }

/**
 * Props for the sticker toggle group item.
 */
interface ToggleGroupItemProps
  extends
    React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Item>,
    ToggleGroupContextValue {}

/**
 * Group of related sticker toggle controls powered by Radix ToggleGroup.
 */
const ToggleGroupRoot = React.forwardRef<
  React.ElementRef<typeof ToggleGroupPrimitive.Root>,
  ToggleGroupProps
>(
  (
    {
      children,
      className,
      size = "md",
      tone = "default",
      variant = "outlined",
      ...props
    },
    ref,
  ) => {
    const contextValue = React.useMemo(
      () => ({ size, tone, variant }),
      [size, tone, variant],
    )

    return (
      <ToggleGroupContext.Provider value={contextValue}>
        <ToggleGroupPrimitive.Root
          className={cn("inline-flex flex-wrap gap-2", className)}
          data-slot="toggle-group"
          ref={ref}
          {...props}
        >
          {children}
        </ToggleGroupPrimitive.Root>
      </ToggleGroupContext.Provider>
    )
  },
)
ToggleGroupRoot.displayName = ToggleGroupPrimitive.Root.displayName

/**
 * Toggle group item.
 */
const ToggleGroupItem = React.forwardRef<
  React.ElementRef<typeof ToggleGroupPrimitive.Item>,
  ToggleGroupItemProps
>(({ className, size, tone, variant, ...props }, ref) => {
  const context = React.useContext(ToggleGroupContext)

  return (
    <ToggleGroupPrimitive.Item
      className={cn(
        toggleVariants({
          size: size ?? context.size,
          tone: tone ?? context.tone,
          variant: variant ?? context.variant,
        }),
        className,
      )}
      data-slot="toggle-group-item"
      ref={ref}
      {...props}
    />
  )
})
ToggleGroupItem.displayName = ToggleGroupPrimitive.Item.displayName

/**
 * Group of related sticker toggle controls powered by Radix ToggleGroup.
 */
const ToggleGroup = Object.assign(ToggleGroupRoot, {
  Item: ToggleGroupItem,
})

export {
  ToggleGroup,
  ToggleGroupItem,
  ToggleGroupRoot,
  type ToggleGroupItemProps,
  type ToggleGroupProps,
}
