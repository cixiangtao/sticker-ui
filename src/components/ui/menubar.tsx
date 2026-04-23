import * as MenubarPrimitive from "@radix-ui/react-menubar"
import { cva, type VariantProps } from "class-variance-authority"
import { Check, ChevronRight, Circle } from "lucide-react"
import * as React from "react"

import { cn } from "@/lib/utils"

/**
 * Builds sticker menubar trigger className from size and tone options.
 */
const menubarTriggerVariants = cva(
  "inline-flex cursor-pointer items-center justify-center rounded-su-md border-2 border-transparent font-black text-su-ink transition duration-150 outline-none hover:border-su-ink hover:bg-su-fill-default hover:shadow-su-xs focus-visible:ring-[2px] focus-visible:ring-su-ring/65 disabled:pointer-events-none disabled:opacity-55 data-[state=open]:border-su-ink data-[state=open]:bg-su-fill-default data-[state=open]:shadow-su-xs",
  {
    defaultVariants: {
      size: "md",
      tone: "default",
    },
    variants: {
      size: {
        lg: "h-11 px-4 text-base",
        md: "h-10 px-3 text-sm",
        sm: "h-8 px-2 text-xs",
      },
      tone: {
        default: "",
        info: "data-[state=open]:bg-su-fill-info",
        secondary: "data-[state=open]:bg-su-fill-secondary",
        warning: "data-[state=open]:bg-su-fill-warning",
      },
    },
  },
)

/**
 * Builds sticker menubar content className from size and tone options.
 */
const menubarContentVariants = cva(
  "z-50 min-w-48 overflow-hidden rounded-su-2xl border-2 border-su-ink p-2 text-su-ink shadow-su-lg transition duration-150 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 motion-reduce:data-[state=closed]:animate-none motion-reduce:data-[state=open]:animate-none",
  {
    defaultVariants: {
      tone: "default",
    },
    variants: {
      tone: {
        default: "bg-su-paper",
        info: "bg-su-fill-info",
        secondary: "bg-su-fill-secondary",
        warning: "bg-su-fill-warning",
      },
    },
  },
)

/**
 * Builds sticker menubar item className from inset options.
 */
const menubarItemVariants = cva(
  "relative flex min-h-9 cursor-pointer items-center rounded-su-md px-3 py-2 text-sm font-bold text-su-ink transition duration-150 outline-none select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-55 data-[highlighted]:bg-su-fill-default data-[highlighted]:shadow-su-xs",
  {
    defaultVariants: {
      inset: false,
    },
    variants: {
      inset: {
        false: "",
        true: "pl-8",
      },
    },
  },
)

const MenubarRoot = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Root>
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.Root
    className={cn(
      "flex w-fit items-center gap-1 rounded-su-xl border-2 border-su-ink bg-su-surface p-1 shadow-su-sm",
      className,
    )}
    data-slot="menubar"
    ref={ref}
    {...props}
  />
))
MenubarRoot.displayName = MenubarPrimitive.Root.displayName

type MenubarMenuProps = MenubarPrimitive.MenubarMenuProps
type MenubarGroupProps = MenubarPrimitive.MenubarGroupProps
type MenubarPortalProps = MenubarPrimitive.MenubarPortalProps
type MenubarRadioGroupProps = MenubarPrimitive.MenubarRadioGroupProps
type MenubarSubProps = MenubarPrimitive.MenubarSubProps

const MenubarMenu = MenubarPrimitive.Menu as React.FC<MenubarMenuProps>
const MenubarGroup: React.ForwardRefExoticComponent<
  MenubarGroupProps & React.RefAttributes<HTMLDivElement>
> = MenubarPrimitive.Group
const MenubarPortal: React.FC<MenubarPortalProps> = MenubarPrimitive.Portal
const MenubarRadioGroup: React.ForwardRefExoticComponent<
  MenubarRadioGroupProps & React.RefAttributes<HTMLDivElement>
> = MenubarPrimitive.RadioGroup

interface MenubarTriggerProps
  extends
    React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Trigger>,
    VariantProps<typeof menubarTriggerVariants> {
  /**
   * Controls trigger height and padding.
   * @default "md"
   */
  size?: "lg" | "md" | "sm"
  /**
   * Controls trigger open-state tone.
   * @default "default"
   */
  tone?: "default" | "info" | "secondary" | "warning"
}

const MenubarTrigger = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Trigger>,
  MenubarTriggerProps
>(({ className, size = "md", tone = "default", ...props }, ref) => (
  <MenubarPrimitive.Trigger
    className={cn(menubarTriggerVariants({ size, tone }), className)}
    data-slot="menubar-trigger"
    ref={ref}
    {...props}
  />
))
MenubarTrigger.displayName = MenubarPrimitive.Trigger.displayName

interface MenubarContentProps
  extends
    React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Content>,
    VariantProps<typeof menubarContentVariants> {
  /**
   * Controls menu paper tone.
   * @default "default"
   */
  tone?: "default" | "info" | "secondary" | "warning"
}

interface MenubarSubContentProps
  extends
    React.ComponentPropsWithoutRef<typeof MenubarPrimitive.SubContent>,
    VariantProps<typeof menubarContentVariants> {
  /**
   * Controls submenu paper tone.
   * @default "default"
   */
  tone?: "default" | "info" | "secondary" | "warning"
}

const MenubarContent = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Content>,
  MenubarContentProps
>(
  (
    {
      align = "start",
      alignOffset = -4,
      className,
      tone = "default",
      ...props
    },
    ref,
  ) => (
    <MenubarPortal>
      <MenubarPrimitive.Content
        align={align}
        alignOffset={alignOffset}
        className={cn(menubarContentVariants({ tone }), className)}
        data-slot="menubar-content"
        ref={ref}
        {...props}
      />
    </MenubarPortal>
  ),
)
MenubarContent.displayName = MenubarPrimitive.Content.displayName

interface MenubarItemProps
  extends
    React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Item>,
    VariantProps<typeof menubarItemVariants> {
  /**
   * Adds leading space for icon-aligned menu rows.
   * @default false
   */
  inset?: boolean
}

const MenubarItem = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Item>,
  MenubarItemProps
>(({ className, inset = false, ...props }, ref) => (
  <MenubarPrimitive.Item
    className={cn(menubarItemVariants({ inset }), className)}
    data-slot="menubar-item"
    ref={ref}
    {...props}
  />
))
MenubarItem.displayName = MenubarPrimitive.Item.displayName

const MenubarCheckboxItem = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.CheckboxItem>
>(({ children, className, checked, ...props }, ref) => (
  <MenubarPrimitive.CheckboxItem
    checked={checked}
    className={cn(menubarItemVariants({ inset: true }), className)}
    data-slot="menubar-checkbox-item"
    ref={ref}
    {...props}
  >
    <span className="absolute left-2 flex size-4 items-center justify-center">
      <MenubarPrimitive.ItemIndicator>
        <Check aria-hidden="true" className="size-4 stroke-[3]" />
      </MenubarPrimitive.ItemIndicator>
    </span>
    {children}
  </MenubarPrimitive.CheckboxItem>
))
MenubarCheckboxItem.displayName = MenubarPrimitive.CheckboxItem.displayName

const MenubarRadioItem = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.RadioItem>
>(({ children, className, ...props }, ref) => (
  <MenubarPrimitive.RadioItem
    className={cn(menubarItemVariants({ inset: true }), className)}
    data-slot="menubar-radio-item"
    ref={ref}
    {...props}
  >
    <span className="absolute left-2 flex size-4 items-center justify-center">
      <MenubarPrimitive.ItemIndicator>
        <Circle aria-hidden="true" className="size-2 fill-current" />
      </MenubarPrimitive.ItemIndicator>
    </span>
    {children}
  </MenubarPrimitive.RadioItem>
))
MenubarRadioItem.displayName = MenubarPrimitive.RadioItem.displayName

const MenubarLabel = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Label> & {
    inset?: boolean
  }
>(({ className, inset = false, ...props }, ref) => (
  <MenubarPrimitive.Label
    className={cn(
      "px-3 py-2 text-xs font-black text-su-fg-muted uppercase",
      inset && "pl-8",
      className,
    )}
    data-slot="menubar-label"
    ref={ref}
    {...props}
  />
))
MenubarLabel.displayName = MenubarPrimitive.Label.displayName

const MenubarSeparator = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.Separator
    className={cn(
      "-mx-2 my-2 border-t-2 border-dashed border-su-ink",
      className,
    )}
    data-slot="menubar-separator"
    ref={ref}
    {...props}
  />
))
MenubarSeparator.displayName = MenubarPrimitive.Separator.displayName

function MenubarShortcut({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "ml-auto pl-4 text-xs font-black text-su-fg-muted",
        className,
      )}
      data-slot="menubar-shortcut"
      {...props}
    />
  )
}

const MenubarSub: React.FC<MenubarSubProps> = MenubarPrimitive.Sub

const MenubarSubTrigger = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.SubTrigger> & {
    inset?: boolean
  }
>(({ children, className, inset = false, ...props }, ref) => (
  <MenubarPrimitive.SubTrigger
    className={cn(menubarItemVariants({ inset }), className)}
    data-slot="menubar-sub-trigger"
    ref={ref}
    {...props}
  >
    {children}
    <ChevronRight aria-hidden="true" className="ml-auto size-4 stroke-[3]" />
  </MenubarPrimitive.SubTrigger>
))
MenubarSubTrigger.displayName = MenubarPrimitive.SubTrigger.displayName

const MenubarSubContent = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.SubContent>,
  MenubarSubContentProps
>(({ className, tone = "default", ...props }, ref) => (
  <MenubarPrimitive.SubContent
    className={cn(menubarContentVariants({ tone }), className)}
    data-slot="menubar-sub-content"
    ref={ref}
    {...props}
  />
))
MenubarSubContent.displayName = MenubarPrimitive.SubContent.displayName

/**
 * Application menubar powered by Radix Menubar.
 */
const Menubar = Object.assign(MenubarRoot, {
  CheckboxItem: MenubarCheckboxItem,
  Content: MenubarContent,
  Group: MenubarGroup,
  Item: MenubarItem,
  Label: MenubarLabel,
  Menu: MenubarMenu,
  Portal: MenubarPortal,
  RadioGroup: MenubarRadioGroup,
  RadioItem: MenubarRadioItem,
  Separator: MenubarSeparator,
  Shortcut: MenubarShortcut,
  Sub: MenubarSub,
  SubContent: MenubarSubContent,
  SubTrigger: MenubarSubTrigger,
  Trigger: MenubarTrigger,
})

export {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarGroup,
  MenubarItem,
  MenubarLabel,
  MenubarMenu,
  MenubarPortal,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarRoot,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
  menubarContentVariants,
  menubarItemVariants,
  menubarTriggerVariants,
  type MenubarContentProps,
  type MenubarGroupProps,
  type MenubarItemProps,
  type MenubarMenuProps,
  type MenubarPortalProps,
  type MenubarRadioGroupProps,
  type MenubarSubProps,
  type MenubarSubContentProps,
  type MenubarTriggerProps,
}
