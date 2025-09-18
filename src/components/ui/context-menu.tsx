import * as ContextMenuPrimitive from "@radix-ui/react-context-menu"
import { cva, type VariantProps } from "class-variance-authority"
import { Check, ChevronRight, Circle } from "lucide-react"
import * as React from "react"

import { cn } from "@/lib/utils"

/**
 * Builds the sticker context menu content className from size and tone options.
 */
const contextMenuContentVariants = cva(
  "z-50 min-w-48 origin-(--radix-context-menu-content-transform-origin) overflow-hidden rounded-su-xl border-2 border-su-ink text-su-ink shadow-su-lg transition duration-150 outline-none data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 motion-reduce:data-[state=closed]:animate-none motion-reduce:data-[state=open]:animate-none",
  {
    defaultVariants: {
      size: "md",
      tone: "default",
    },
    variants: {
      size: {
        lg: "w-64 p-2",
        md: "w-56 p-1.5",
        sm: "w-48 p-1",
      },
      tone: {
        default: "bg-su-surface",
        info: "bg-su-fill-info",
        secondary: "bg-su-fill-secondary",
        warning: "bg-su-fill-warning",
      },
    },
  },
)

/**
 * Builds the sticker context menu item className.
 */
const contextMenuItemVariants = cva(
  "relative flex min-h-9 cursor-default items-center gap-2 rounded-su-md px-3 py-2 text-sm leading-5 font-bold text-su-ink transition duration-150 outline-none select-none data-[disabled]:pointer-events-none data-[disabled]:cursor-not-allowed data-[disabled]:opacity-55 data-[highlighted]:translate-x-0.5 data-[highlighted]:bg-su-fill-default-soft data-[highlighted]:shadow-su-xs",
  {
    defaultVariants: {
      tone: "default",
    },
    variants: {
      inset: {
        false: "",
        true: "pl-9",
      },
      tone: {
        danger: "text-su-fg-danger data-[highlighted]:bg-su-fill-danger",
        default: "",
      },
    },
  },
)

const ContextMenuRoot = ContextMenuPrimitive.Root

/**
 * Area that opens the context menu on secondary click.
 */
const ContextMenuTrigger = ContextMenuPrimitive.Trigger

/**
 * Groups related context menu items.
 */
const ContextMenuGroup = ContextMenuPrimitive.Group

/**
 * Portals context menu content to the document body.
 */
const ContextMenuPortal = ContextMenuPrimitive.Portal

/**
 * Creates a nested context menu.
 */
const ContextMenuSub = ContextMenuPrimitive.Sub

/**
 * Groups related radio menu items.
 */
const ContextMenuRadioGroup = ContextMenuPrimitive.RadioGroup

/**
 * Props for sticker context menu content.
 * @remarks Wraps Radix ContextMenu.Content and adds sticker tone and size styling.
 */
interface ContextMenuContentProps
  extends
    React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Content>,
    VariantProps<typeof contextMenuContentVariants> {
  /**
   * Controls context menu width and padding.
   * @default "md"
   */
  size?: "lg" | "md" | "sm"
  /**
   * Controls the context menu paper tone.
   * @default "default"
   */
  tone?: "default" | "info" | "secondary" | "warning"
}

/**
 * Portaled sticker context menu panel.
 */
const ContextMenuContent = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Content>,
  ContextMenuContentProps
>(({ className, size = "md", tone, ...props }, ref) => (
  <ContextMenuPrimitive.Portal>
    <ContextMenuPrimitive.Content
      className={cn(contextMenuContentVariants({ size, tone }), className)}
      data-slot="context-menu-content"
      ref={ref}
      {...props}
    />
  </ContextMenuPrimitive.Portal>
))
ContextMenuContent.displayName = ContextMenuPrimitive.Content.displayName

/**
 * Props for a sticker context menu item.
 */
interface ContextMenuItemProps
  extends
    React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Item>,
    VariantProps<typeof contextMenuItemVariants> {
  /**
   * Adds leading space for items aligned with checkbox, radio, or icon rows.
   * @default false
   */
  inset?: boolean
  /**
   * Controls semantic text and highlighted item tone.
   * @default "default"
   */
  tone?: "danger" | "default"
}

/**
 * Selectable context menu item.
 */
const ContextMenuItem = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Item>,
  ContextMenuItemProps
>(({ className, inset = false, tone, ...props }, ref) => (
  <ContextMenuPrimitive.Item
    className={cn(contextMenuItemVariants({ inset, tone }), className)}
    data-slot="context-menu-item"
    ref={ref}
    {...props}
  />
))
ContextMenuItem.displayName = ContextMenuPrimitive.Item.displayName

/**
 * Props for a nested sticker context menu trigger.
 */
interface ContextMenuSubTriggerProps
  extends
    React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.SubTrigger>,
    VariantProps<typeof contextMenuItemVariants> {
  /**
   * Adds leading space for items aligned with checkbox, radio, or icon rows.
   * @default false
   */
  inset?: boolean
  /**
   * Controls semantic text and highlighted item tone.
   * @default "default"
   */
  tone?: "danger" | "default"
}

/**
 * Opens a nested context menu.
 */
const ContextMenuSubTrigger = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.SubTrigger>,
  ContextMenuSubTriggerProps
>(({ children, className, inset = false, tone, ...props }, ref) => (
  <ContextMenuPrimitive.SubTrigger
    className={cn(contextMenuItemVariants({ inset, tone }), className)}
    data-slot="context-menu-sub-trigger"
    ref={ref}
    {...props}
  >
    {children}
    <ChevronRight
      aria-hidden="true"
      className="ml-auto size-4 stroke-[3] text-su-ink/75"
    />
  </ContextMenuPrimitive.SubTrigger>
))
ContextMenuSubTrigger.displayName = ContextMenuPrimitive.SubTrigger.displayName

/**
 * Props for nested sticker context menu content.
 */
interface ContextMenuSubContentProps
  extends
    React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.SubContent>,
    VariantProps<typeof contextMenuContentVariants> {
  /**
   * Controls nested context menu width and padding.
   * @default "md"
   */
  size?: "lg" | "md" | "sm"
  /**
   * Controls nested context menu paper tone.
   * @default "default"
   */
  tone?: "default" | "info" | "secondary" | "warning"
}

/**
 * Nested sticker context menu panel.
 */
const ContextMenuSubContent = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.SubContent>,
  ContextMenuSubContentProps
>(({ className, size = "md", tone, ...props }, ref) => (
  <ContextMenuPrimitive.SubContent
    className={cn(contextMenuContentVariants({ size, tone }), className)}
    data-slot="context-menu-sub-content"
    ref={ref}
    {...props}
  />
))
ContextMenuSubContent.displayName = ContextMenuPrimitive.SubContent.displayName

/**
 * Props for sticker checkbox context menu items.
 */
interface ContextMenuCheckboxItemProps extends React.ComponentPropsWithoutRef<
  typeof ContextMenuPrimitive.CheckboxItem
> {
  /**
   * Hides the check indicator while preserving selected state semantics.
   * @default false
   */
  hideIndicator?: boolean
}

/**
 * Checkbox context menu item.
 */
const ContextMenuCheckboxItem = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.CheckboxItem>,
  ContextMenuCheckboxItemProps
>(({ children, className, hideIndicator = false, ...props }, ref) => (
  <ContextMenuPrimitive.CheckboxItem
    className={cn(contextMenuItemVariants({ inset: true }), className)}
    data-slot="context-menu-checkbox-item"
    ref={ref}
    {...props}
  >
    {hideIndicator ? null : (
      <span
        className="absolute left-2 flex size-5 items-center justify-center rounded-su-xs border border-su-ink bg-su-paper"
        data-slot="context-menu-item-indicator"
      >
        <ContextMenuPrimitive.ItemIndicator>
          <Check aria-hidden="true" className="size-3.5 stroke-[3]" />
        </ContextMenuPrimitive.ItemIndicator>
      </span>
    )}
    {children}
  </ContextMenuPrimitive.CheckboxItem>
))
ContextMenuCheckboxItem.displayName =
  ContextMenuPrimitive.CheckboxItem.displayName

/**
 * Radio context menu item.
 */
const ContextMenuRadioItem = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.RadioItem>
>(({ children, className, ...props }, ref) => (
  <ContextMenuPrimitive.RadioItem
    className={cn(contextMenuItemVariants({ inset: true }), className)}
    data-slot="context-menu-radio-item"
    ref={ref}
    {...props}
  >
    <span
      className="absolute left-2 flex size-5 items-center justify-center rounded-full border border-su-ink bg-su-paper"
      data-slot="context-menu-item-indicator"
    >
      <ContextMenuPrimitive.ItemIndicator>
        <Circle aria-hidden="true" className="size-2.5 fill-current" />
      </ContextMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </ContextMenuPrimitive.RadioItem>
))
ContextMenuRadioItem.displayName = ContextMenuPrimitive.RadioItem.displayName

/**
 * Labels a context menu group.
 */
const ContextMenuLabel = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Label> & {
    /**
     * Adds leading space to align with inset menu items.
     * @default false
     */
    inset?: boolean
  }
>(({ className, inset = false, ...props }, ref) => (
  <ContextMenuPrimitive.Label
    className={cn(
      "px-3 py-2 text-xs leading-none font-black text-su-fg-muted uppercase",
      inset && "pl-9",
      className,
    )}
    data-slot="context-menu-label"
    ref={ref}
    {...props}
  />
))
ContextMenuLabel.displayName = ContextMenuPrimitive.Label.displayName

/**
 * Separates context menu item groups.
 */
const ContextMenuSeparator = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <ContextMenuPrimitive.Separator
    className={cn("my-1 h-px bg-su-ink/20", className)}
    data-slot="context-menu-separator"
    ref={ref}
    {...props}
  />
))
ContextMenuSeparator.displayName = ContextMenuPrimitive.Separator.displayName

/**
 * Right-aligned helper text for shortcuts and secondary item metadata.
 */
function ContextMenuShortcut({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      className={cn(
        "ml-auto pl-4 text-xs font-black tracking-normal text-su-fg-muted",
        className,
      )}
      data-slot="context-menu-shortcut"
      {...props}
    />
  )
}

/**
 * Sticker context menu root powered by Radix ContextMenu.
 */
const ContextMenu = Object.assign(ContextMenuRoot, {
  CheckboxItem: ContextMenuCheckboxItem,
  Content: ContextMenuContent,
  Group: ContextMenuGroup,
  Item: ContextMenuItem,
  Label: ContextMenuLabel,
  Portal: ContextMenuPortal,
  RadioGroup: ContextMenuRadioGroup,
  RadioItem: ContextMenuRadioItem,
  Separator: ContextMenuSeparator,
  Shortcut: ContextMenuShortcut,
  Sub: ContextMenuSub,
  SubContent: ContextMenuSubContent,
  SubTrigger: ContextMenuSubTrigger,
  Trigger: ContextMenuTrigger,
})

export {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuPortal,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
  contextMenuContentVariants,
  contextMenuItemVariants,
  type ContextMenuCheckboxItemProps,
  type ContextMenuContentProps,
  type ContextMenuItemProps,
  type ContextMenuSubContentProps,
  type ContextMenuSubTriggerProps,
}
