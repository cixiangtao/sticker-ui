import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"
import { cva, type VariantProps } from "class-variance-authority"
import { Check, ChevronRight, Circle } from "lucide-react"
import * as React from "react"

import { cn } from "@/lib/utils"

/**
 * Builds the sticker dropdown menu content className from size and tone options.
 */
const dropdownMenuContentVariants = cva(
  "z-50 min-w-48 origin-(--radix-dropdown-menu-content-transform-origin) overflow-hidden rounded-su-xl border-2 border-su-ink text-su-ink shadow-su-lg transition duration-150 outline-none data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 motion-reduce:data-[state=closed]:animate-none motion-reduce:data-[state=open]:animate-none",
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
 * Builds the sticker dropdown menu item className.
 */
const dropdownMenuItemVariants = cva(
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

/**
 * Sticker dropdown menu root powered by Radix DropdownMenu.
 */
const DropdownMenu = DropdownMenuPrimitive.Root

/**
 * Opens the dropdown menu.
 */
const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger

/**
 * Groups related dropdown menu items.
 */
const DropdownMenuGroup = DropdownMenuPrimitive.Group

/**
 * Portals dropdown menu content to the document body.
 */
const DropdownMenuPortal = DropdownMenuPrimitive.Portal

/**
 * Creates a nested dropdown menu.
 */
const DropdownMenuSub = DropdownMenuPrimitive.Sub

/**
 * Groups related radio menu items.
 */
const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup

/**
 * Props for sticker dropdown menu content.
 * @remarks Wraps Radix DropdownMenu.Content and adds sticker tone, size, and offset styling.
 */
interface DropdownMenuContentProps
  extends
    React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content>,
    VariantProps<typeof dropdownMenuContentVariants> {
  /**
   * Controls dropdown width and padding.
   * @default "md"
   */
  size?: "lg" | "md" | "sm"
  /**
   * Controls the dropdown paper tone.
   * @default "default"
   */
  tone?: "default" | "info" | "secondary" | "warning"
}

/**
 * Portaled sticker dropdown menu panel.
 */
const DropdownMenuContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Content>,
  DropdownMenuContentProps
>(
  (
    { align = "start", className, sideOffset = 8, size = "md", tone, ...props },
    ref,
  ) => (
    <DropdownMenuPrimitive.Portal>
      <DropdownMenuPrimitive.Content
        align={align}
        className={cn(dropdownMenuContentVariants({ size, tone }), className)}
        data-slot="dropdown-menu-content"
        ref={ref}
        sideOffset={sideOffset}
        {...props}
      />
    </DropdownMenuPrimitive.Portal>
  ),
)
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName

/**
 * Props for a sticker dropdown menu item.
 */
interface DropdownMenuItemProps
  extends
    React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item>,
    VariantProps<typeof dropdownMenuItemVariants> {
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
 * Selectable dropdown menu item.
 */
const DropdownMenuItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Item>,
  DropdownMenuItemProps
>(({ className, inset = false, tone, ...props }, ref) => (
  <DropdownMenuPrimitive.Item
    className={cn(dropdownMenuItemVariants({ inset, tone }), className)}
    data-slot="dropdown-menu-item"
    ref={ref}
    {...props}
  />
))
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName

/**
 * Props for a nested sticker dropdown menu trigger.
 */
interface DropdownMenuSubTriggerProps
  extends
    React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubTrigger>,
    VariantProps<typeof dropdownMenuItemVariants> {
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
 * Opens a nested dropdown menu.
 */
const DropdownMenuSubTrigger = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubTrigger>,
  DropdownMenuSubTriggerProps
>(({ children, className, inset = false, tone, ...props }, ref) => (
  <DropdownMenuPrimitive.SubTrigger
    className={cn(dropdownMenuItemVariants({ inset, tone }), className)}
    data-slot="dropdown-menu-sub-trigger"
    ref={ref}
    {...props}
  >
    {children}
    <ChevronRight
      aria-hidden="true"
      className="ml-auto size-4 stroke-[3] text-su-ink/75"
    />
  </DropdownMenuPrimitive.SubTrigger>
))
DropdownMenuSubTrigger.displayName =
  DropdownMenuPrimitive.SubTrigger.displayName

/**
 * Props for nested sticker dropdown menu content.
 */
interface DropdownMenuSubContentProps
  extends
    React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubContent>,
    VariantProps<typeof dropdownMenuContentVariants> {
  /**
   * Controls nested dropdown width and padding.
   * @default "md"
   */
  size?: "lg" | "md" | "sm"
  /**
   * Controls nested dropdown paper tone.
   * @default "default"
   */
  tone?: "default" | "info" | "secondary" | "warning"
}

/**
 * Nested sticker dropdown menu panel.
 */
const DropdownMenuSubContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubContent>,
  DropdownMenuSubContentProps
>(({ className, size = "md", tone, ...props }, ref) => (
  <DropdownMenuPrimitive.SubContent
    className={cn(dropdownMenuContentVariants({ size, tone }), className)}
    data-slot="dropdown-menu-sub-content"
    ref={ref}
    {...props}
  />
))
DropdownMenuSubContent.displayName =
  DropdownMenuPrimitive.SubContent.displayName

/**
 * Props for sticker checkbox menu items.
 */
interface DropdownMenuCheckboxItemProps extends React.ComponentPropsWithoutRef<
  typeof DropdownMenuPrimitive.CheckboxItem
> {
  /**
   * Hides the check indicator while preserving selected state semantics.
   * @default false
   */
  hideIndicator?: boolean
}

/**
 * Checkbox dropdown menu item.
 */
const DropdownMenuCheckboxItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.CheckboxItem>,
  DropdownMenuCheckboxItemProps
>(({ children, className, hideIndicator = false, ...props }, ref) => (
  <DropdownMenuPrimitive.CheckboxItem
    className={cn(dropdownMenuItemVariants({ inset: true }), className)}
    data-slot="dropdown-menu-checkbox-item"
    ref={ref}
    {...props}
  >
    {hideIndicator ? null : (
      <span
        className="absolute left-2 flex size-5 items-center justify-center rounded-su-xs border border-su-ink bg-su-paper"
        data-slot="dropdown-menu-item-indicator"
      >
        <DropdownMenuPrimitive.ItemIndicator>
          <Check aria-hidden="true" className="size-3.5 stroke-[3]" />
        </DropdownMenuPrimitive.ItemIndicator>
      </span>
    )}
    {children}
  </DropdownMenuPrimitive.CheckboxItem>
))
DropdownMenuCheckboxItem.displayName =
  DropdownMenuPrimitive.CheckboxItem.displayName

/**
 * Radio dropdown menu item.
 */
const DropdownMenuRadioItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.RadioItem>
>(({ children, className, ...props }, ref) => (
  <DropdownMenuPrimitive.RadioItem
    className={cn(dropdownMenuItemVariants({ inset: true }), className)}
    data-slot="dropdown-menu-radio-item"
    ref={ref}
    {...props}
  >
    <span
      className="absolute left-2 flex size-5 items-center justify-center rounded-full border border-su-ink bg-su-paper"
      data-slot="dropdown-menu-item-indicator"
    >
      <DropdownMenuPrimitive.ItemIndicator>
        <Circle aria-hidden="true" className="size-2.5 fill-current" />
      </DropdownMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </DropdownMenuPrimitive.RadioItem>
))
DropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName

/**
 * Labels a dropdown menu group.
 */
const DropdownMenuLabel = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Label> & {
    /**
     * Adds leading space to align with inset menu items.
     * @default false
     */
    inset?: boolean
  }
>(({ className, inset = false, ...props }, ref) => (
  <DropdownMenuPrimitive.Label
    className={cn(
      "px-3 py-2 text-xs leading-none font-black text-su-fg-muted uppercase",
      inset && "pl-9",
      className,
    )}
    data-slot="dropdown-menu-label"
    ref={ref}
    {...props}
  />
))
DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName

/**
 * Separates dropdown menu item groups.
 */
const DropdownMenuSeparator = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.Separator
    className={cn("my-1 h-px bg-su-ink/20", className)}
    data-slot="dropdown-menu-separator"
    ref={ref}
    {...props}
  />
))
DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName

/**
 * Right-aligned helper text for shortcuts and secondary item metadata.
 */
function DropdownMenuShortcut({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      className={cn(
        "ml-auto pl-4 text-xs font-black tracking-normal text-su-fg-muted",
        className,
      )}
      data-slot="dropdown-menu-shortcut"
      {...props}
    />
  )
}

export {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
  dropdownMenuContentVariants,
  dropdownMenuItemVariants,
  type DropdownMenuCheckboxItemProps,
  type DropdownMenuContentProps,
  type DropdownMenuItemProps,
  type DropdownMenuSubContentProps,
  type DropdownMenuSubTriggerProps,
}
