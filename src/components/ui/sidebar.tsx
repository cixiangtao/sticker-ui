import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import * as React from "react"

import { cn } from "@/lib/utils"

/**
 * Builds the sticker sidebar root className from size and variant options.
 */
const sidebarVariants = cva(
  "group/sidebar flex min-h-0 shrink-0 flex-col overflow-hidden border-2 border-su-ink bg-su-surface text-su-ink transition-[width] duration-200 data-[collapsed=true]:w-18 motion-reduce:transition-none",
  {
    defaultVariants: {
      size: "md",
      variant: "panel",
    },
    variants: {
      size: {
        lg: "w-80",
        md: "w-72",
        sm: "w-60",
      },
      variant: {
        flat: "rounded-su-xl shadow-none",
        panel: "rounded-su-panel shadow-su-xl",
      },
    },
  },
)

/**
 * Builds the sticker sidebar menu button className.
 */
const sidebarMenuButtonVariants = cva(
  "flex w-full cursor-pointer items-center gap-3 rounded-su-lg border-2 border-transparent px-3 font-extrabold text-su-ink transition duration-150 outline-none group-data-[collapsed=true]/sidebar:justify-center group-data-[collapsed=true]/sidebar:px-0 hover:-translate-y-0.5 hover:border-su-ink hover:bg-su-fill-default-soft hover:shadow-su-sm focus-visible:ring-[2px] focus-visible:ring-su-ring/65 active:translate-x-0.5 active:translate-y-0.5 data-[active=true]:border-su-ink data-[active=true]:bg-su-fill-default data-[active=true]:shadow-su-md data-[disabled=true]:pointer-events-none data-[disabled=true]:cursor-not-allowed data-[disabled=true]:opacity-55",
  {
    compoundVariants: [
      {
        class:
          "data-[active=true]:bg-su-fill-info data-[active=true]:text-su-fg-info",
        tone: "info",
      },
      {
        class:
          "data-[active=true]:bg-su-fill-secondary data-[active=true]:text-su-fg-secondary",
        tone: "secondary",
      },
      {
        class:
          "data-[active=true]:bg-su-fill-success data-[active=true]:text-su-fg-success",
        tone: "success",
      },
      {
        class:
          "data-[active=true]:bg-su-fill-warning data-[active=true]:text-su-fg-warning",
        tone: "warning",
      },
    ],
    defaultVariants: {
      size: "md",
      tone: "default",
    },
    variants: {
      size: {
        lg: "min-h-12 text-base",
        md: "min-h-10 text-sm",
        sm: "min-h-9 text-xs",
      },
      tone: {
        default: "",
        info: "",
        secondary: "",
        success: "",
        warning: "",
      },
    },
  },
)

interface SidebarContextState {
  collapsed: boolean
  size: "lg" | "md" | "sm"
}

const SidebarContext = React.createContext<SidebarContextState>({
  collapsed: false,
  size: "md",
})

/**
 * Props for the sticker sidebar root.
 * @remarks A PC-first application sidebar shell with optional collapsed mode.
 */
interface SidebarProps
  extends
    React.ComponentPropsWithoutRef<"aside">,
    VariantProps<typeof sidebarVariants> {
  /**
   * Collapses labels while keeping menu icons visible.
   * @default false
   */
  collapsed?: boolean
  /**
   * Controls sidebar width and inherited menu density.
   * @default "md"
   */
  size?: "lg" | "md" | "sm"
  /**
   * Controls sidebar frame emphasis.
   * @default "panel"
   */
  variant?: "flat" | "panel"
}

/**
 * PC-first sticker sidebar shell for app navigation.
 */
function Sidebar({
  children,
  className,
  collapsed = false,
  size = "md",
  variant = "panel",
  ...props
}: SidebarProps) {
  const contextValue = React.useMemo<SidebarContextState>(
    () => ({ collapsed, size }),
    [collapsed, size],
  )

  return (
    <SidebarContext.Provider value={contextValue}>
      <aside
        className={cn(sidebarVariants({ size, variant }), className)}
        data-collapsed={collapsed}
        data-slot="sidebar"
        {...props}
      >
        {children}
      </aside>
    </SidebarContext.Provider>
  )
}

/**
 * Sidebar header for brand, search, or workspace controls.
 */
function SidebarHeader({
  className,
  ...props
}: React.ComponentProps<"header">) {
  return (
    <header
      className={cn("grid gap-2 border-b-2 border-su-ink p-3", className)}
      data-slot="sidebar-header"
      {...props}
    />
  )
}

/**
 * Scrollable sidebar content area.
 */
function SidebarContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn("min-h-0 flex-1 overflow-y-auto p-3", className)}
      data-slot="sidebar-content"
      {...props}
    />
  )
}

/**
 * Sidebar footer for account or secondary actions.
 */
function SidebarFooter({
  className,
  ...props
}: React.ComponentProps<"footer">) {
  return (
    <footer
      className={cn("border-t-2 border-su-ink p-3", className)}
      data-slot="sidebar-footer"
      {...props}
    />
  )
}

/**
 * Sidebar group for related navigation items.
 */
function SidebarGroup({
  className,
  ...props
}: React.ComponentProps<"section">) {
  return (
    <section
      className={cn("grid gap-2 py-2", className)}
      data-slot="sidebar-group"
      {...props}
    />
  )
}

/**
 * Label for a sidebar group.
 */
function SidebarGroupLabel({
  className,
  ...props
}: React.ComponentProps<"h3">) {
  const { collapsed } = React.useContext(SidebarContext)

  if (collapsed) {
    return null
  }

  return (
    <h3
      className={cn(
        "px-2 text-xs leading-none font-black text-su-fg-muted uppercase",
        className,
      )}
      data-slot="sidebar-group-label"
      {...props}
    />
  )
}

/**
 * Sidebar menu list.
 */
function SidebarMenu({ className, ...props }: React.ComponentProps<"ul">) {
  return (
    <ul
      className={cn("grid gap-1.5", className)}
      data-slot="sidebar-menu"
      {...props}
    />
  )
}

/**
 * Sidebar menu item.
 */
function SidebarMenuItem({ className, ...props }: React.ComponentProps<"li">) {
  return (
    <li
      className={cn("min-w-0", className)}
      data-slot="sidebar-menu-item"
      {...props}
    />
  )
}

/**
 * Props for a sticker sidebar menu button.
 */
interface SidebarMenuButtonProps
  extends
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof sidebarMenuButtonVariants> {
  /**
   * Marks the item as the current navigation destination.
   * @default false
   */
  active?: boolean
  /**
   * Renders the button styles and state props on the only child element.
   * @default false
   */
  asChild?: boolean
  /**
   * Controls menu item density independently from the sidebar.
   */
  size?: "lg" | "md" | "sm"
  /**
   * Controls the active item semantic tone.
   * @default "default"
   */
  tone?: "default" | "info" | "secondary" | "success" | "warning"
}

/**
 * Tactile sidebar navigation item button.
 */
const SidebarMenuButton = React.forwardRef<
  HTMLButtonElement,
  SidebarMenuButtonProps
>(
  (
    {
      active = false,
      asChild = false,
      children,
      className,
      disabled,
      size,
      tone,
      ...props
    },
    ref,
  ) => {
    const Component = asChild ? Slot : "button"
    const context = React.useContext(SidebarContext)

    return (
      <Component
        aria-current={active ? "page" : undefined}
        className={cn(
          sidebarMenuButtonVariants({
            size: size ?? context.size,
            tone,
          }),
          className,
        )}
        data-active={active}
        data-disabled={disabled}
        data-slot="sidebar-menu-button"
        disabled={disabled}
        ref={ref}
        type={asChild ? undefined : "button"}
        {...props}
      >
        {children}
      </Component>
    )
  },
)
SidebarMenuButton.displayName = "SidebarMenuButton"

/**
 * Sidebar label text that hides automatically in collapsed mode.
 */
function SidebarMenuLabel({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      className={cn(
        "min-w-0 flex-1 truncate group-data-[collapsed=true]/sidebar:hidden",
        className,
      )}
      data-slot="sidebar-menu-label"
      {...props}
    />
  )
}

/**
 * Right-aligned sidebar badge or shortcut.
 */
function SidebarMenuBadge({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      className={cn(
        "ml-auto rounded-su-xs border border-su-ink bg-su-paper px-1.5 py-0.5 text-[10px] leading-none font-black text-su-ink group-data-[collapsed=true]/sidebar:hidden",
        className,
      )}
      data-slot="sidebar-menu-badge"
      {...props}
    />
  )
}

/**
 * Separator between sidebar groups.
 */
function SidebarSeparator({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn("my-2 h-px bg-su-ink/20", className)}
      data-slot="sidebar-separator"
      role="separator"
      {...props}
    />
  )
}

export {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuLabel,
  SidebarSeparator,
  sidebarMenuButtonVariants,
  sidebarVariants,
  type SidebarMenuButtonProps,
  type SidebarProps,
}
