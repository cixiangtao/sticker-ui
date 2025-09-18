import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu"
import { cva, type VariantProps } from "class-variance-authority"
import { ChevronDown } from "lucide-react"
import * as React from "react"

import { cn } from "@/lib/utils"

/**
 * Builds the sticker navigation menu trigger className.
 */
const navigationMenuTriggerVariants = cva(
  "group inline-flex cursor-pointer items-center justify-center gap-1.5 rounded-su-md border-2 border-transparent font-extrabold text-su-ink transition duration-150 outline-none hover:-translate-y-0.5 focus-visible:ring-[2px] focus-visible:ring-su-ring/65 data-[active]:border-su-ink data-[active]:shadow-su-md data-[disabled]:pointer-events-none data-[disabled]:cursor-not-allowed data-[disabled]:opacity-55 data-[state=open]:border-su-ink data-[state=open]:shadow-su-md",
  {
    compoundVariants: [
      {
        class:
          "data-[active]:bg-su-fill-default data-[state=open]:bg-su-fill-default",
        tone: "default",
      },
      {
        class:
          "data-[active]:bg-su-fill-info data-[state=open]:bg-su-fill-info",
        tone: "info",
      },
      {
        class:
          "data-[active]:bg-su-fill-secondary data-[state=open]:bg-su-fill-secondary",
        tone: "secondary",
      },
      {
        class:
          "data-[active]:bg-su-fill-warning data-[state=open]:bg-su-fill-warning",
        tone: "warning",
      },
    ],
    defaultVariants: {
      size: "md",
      tone: "default",
    },
    variants: {
      size: {
        lg: "h-12 px-5 text-base",
        md: "h-10 px-4 text-sm",
        sm: "h-9 rounded-su-sm px-3 text-xs",
      },
      tone: {
        default: "",
        info: "",
        secondary: "",
        warning: "",
      },
    },
  },
)

/**
 * Builds the sticker navigation menu content className.
 */
const navigationMenuContentVariants = cva(
  "top-0 left-0 w-full rounded-su-2xl border-2 border-su-ink text-su-ink shadow-su-xl data-[motion=from-end]:animate-in data-[motion=from-end]:slide-in-from-right-6 data-[motion=from-start]:animate-in data-[motion=from-start]:slide-in-from-left-6 data-[motion=to-end]:animate-out data-[motion=to-end]:slide-out-to-right-6 data-[motion=to-start]:animate-out data-[motion=to-start]:slide-out-to-left-6 motion-reduce:data-[motion=from-end]:animate-none motion-reduce:data-[motion=from-start]:animate-none motion-reduce:data-[motion=to-end]:animate-none motion-reduce:data-[motion=to-start]:animate-none md:absolute md:w-auto",
  {
    defaultVariants: {
      tone: "default",
    },
    variants: {
      tone: {
        default: "bg-su-surface",
        info: "bg-su-fill-info",
        secondary: "bg-su-fill-secondary",
        warning: "bg-su-fill-warning",
      },
    },
  },
)

type NavigationMenuContextState = Required<
  Pick<NavigationMenuProps, "size" | "tone">
>

const NavigationMenuContext = React.createContext<NavigationMenuContextState>({
  size: "md",
  tone: "default",
})

/**
 * Props for the sticker navigation menu root.
 * @remarks Wraps Radix NavigationMenu.Root and shares size and tone with child triggers and content.
 */
interface NavigationMenuProps extends React.ComponentPropsWithoutRef<
  typeof NavigationMenuPrimitive.Root
> {
  /**
   * Controls trigger density.
   * @default "md"
   */
  size?: "lg" | "md" | "sm"
  /**
   * Controls active trigger and menu content paper tone.
   * @default "default"
   */
  tone?: "default" | "info" | "secondary" | "warning"
}

/**
 * Sticker navigation menu root powered by Radix NavigationMenu.
 */
function NavigationMenuRoot({
  children,
  className,
  size = "md",
  tone = "default",
  ...props
}: NavigationMenuProps) {
  const contextValue = React.useMemo<NavigationMenuContextState>(
    () => ({ size, tone }),
    [size, tone],
  )

  return (
    <NavigationMenuContext.Provider value={contextValue}>
      <NavigationMenuPrimitive.Root
        className={cn(
          "relative z-10 flex max-w-max flex-1 items-center justify-center",
          className,
        )}
        data-slot="navigation-menu"
        {...props}
      >
        {children}
      </NavigationMenuPrimitive.Root>
    </NavigationMenuContext.Provider>
  )
}

/**
 * Navigation menu list that contains top-level items.
 */
const NavigationMenuList = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.List>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.List
    className={cn(
      "group flex list-none items-center justify-center gap-1 rounded-su-xl border-2 border-su-ink bg-su-surface p-1 shadow-su-sm",
      className,
    )}
    data-slot="navigation-menu-list"
    ref={ref}
    {...props}
  />
))
NavigationMenuList.displayName = NavigationMenuPrimitive.List.displayName

/**
 * Top-level navigation menu item.
 */
const NavigationMenuItem = NavigationMenuPrimitive.Item

/**
 * Props for the sticker navigation menu trigger.
 */
interface NavigationMenuTriggerProps
  extends
    React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Trigger>,
    VariantProps<typeof navigationMenuTriggerVariants> {
  /**
   * Controls trigger density independently from the root.
   */
  size?: "lg" | "md" | "sm"
  /**
   * Controls active trigger tone independently from the root.
   */
  tone?: "default" | "info" | "secondary" | "warning"
}

/**
 * Trigger that opens navigation menu content.
 */
const NavigationMenuTrigger = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Trigger>,
  NavigationMenuTriggerProps
>(({ children, className, size, tone, ...props }, ref) => {
  const context = React.useContext(NavigationMenuContext)

  return (
    <NavigationMenuPrimitive.Trigger
      className={cn(
        navigationMenuTriggerVariants({
          size: size ?? context.size,
          tone: tone ?? context.tone,
        }),
        className,
      )}
      data-slot="navigation-menu-trigger"
      ref={ref}
      {...props}
    >
      {children}
      <ChevronDown
        aria-hidden="true"
        className="size-4 transition duration-150 group-data-[state=open]:rotate-180"
      />
    </NavigationMenuPrimitive.Trigger>
  )
})
NavigationMenuTrigger.displayName = NavigationMenuPrimitive.Trigger.displayName

/**
 * Props for sticker navigation menu content.
 */
interface NavigationMenuContentProps
  extends
    React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Content>,
    VariantProps<typeof navigationMenuContentVariants> {
  /**
   * Controls menu content paper tone independently from the root.
   */
  tone?: "default" | "info" | "secondary" | "warning"
}

/**
 * Floating navigation menu content panel.
 */
const NavigationMenuContent = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Content>,
  NavigationMenuContentProps
>(({ className, tone, ...props }, ref) => {
  const context = React.useContext(NavigationMenuContext)

  return (
    <NavigationMenuPrimitive.Content
      className={cn(
        navigationMenuContentVariants({ tone: tone ?? context.tone }),
        className,
      )}
      data-slot="navigation-menu-content"
      ref={ref}
      {...props}
    />
  )
})
NavigationMenuContent.displayName = NavigationMenuPrimitive.Content.displayName

/**
 * Clickable navigation menu link.
 */
const NavigationMenuLink = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Link>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Link>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.Link
    className={cn(
      "block rounded-su-lg p-3 text-sm leading-5 font-bold text-su-ink transition duration-150 outline-none hover:-translate-y-0.5 hover:bg-su-fill-default-soft focus-visible:ring-[2px] focus-visible:ring-su-ring/65 data-[active]:bg-su-fill-default data-[active]:shadow-su-sm",
      className,
    )}
    data-slot="navigation-menu-link"
    ref={ref}
    {...props}
  />
))
NavigationMenuLink.displayName = NavigationMenuPrimitive.Link.displayName

/**
 * Animated viewport that sizes to the open navigation panel.
 */
const NavigationMenuViewport = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Viewport>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Viewport>
>(({ className, ...props }, ref) => (
  <div
    className="absolute top-full left-0 flex justify-center pt-3"
    data-slot="navigation-menu-viewport-wrapper"
  >
    <NavigationMenuPrimitive.Viewport
      className={cn(
        "origin-top-center relative h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-su-2xl border-2 border-su-ink bg-su-surface text-su-ink shadow-su-xl transition-[width,height] duration-200 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:animate-in data-[state=open]:fade-in-0 motion-reduce:data-[state=closed]:animate-none motion-reduce:data-[state=open]:animate-none md:w-[var(--radix-navigation-menu-viewport-width)]",
        className,
      )}
      data-slot="navigation-menu-viewport"
      ref={ref}
      {...props}
    />
  </div>
))
NavigationMenuViewport.displayName =
  NavigationMenuPrimitive.Viewport.displayName

/**
 * Small marker below the active navigation trigger.
 */
const NavigationMenuIndicator = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Indicator>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Indicator>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.Indicator
    className={cn(
      "top-full z-10 flex h-3 items-end justify-center overflow-hidden transition duration-150 data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:animate-in data-[state=visible]:fade-in motion-reduce:data-[state=hidden]:animate-none motion-reduce:data-[state=visible]:animate-none",
      className,
    )}
    data-slot="navigation-menu-indicator"
    ref={ref}
    {...props}
  >
    <div className="relative top-1 size-3 rotate-45 rounded-su-xs border-t-2 border-l-2 border-su-ink bg-su-surface" />
  </NavigationMenuPrimitive.Indicator>
))
NavigationMenuIndicator.displayName =
  NavigationMenuPrimitive.Indicator.displayName

/**
 * Sticker navigation menu root powered by Radix NavigationMenu.
 */
const NavigationMenu = Object.assign(NavigationMenuRoot, {
  Content: NavigationMenuContent,
  Indicator: NavigationMenuIndicator,
  Item: NavigationMenuItem,
  Link: NavigationMenuLink,
  List: NavigationMenuList,
  Trigger: NavigationMenuTrigger,
  Viewport: NavigationMenuViewport,
})

export {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuContentVariants,
  navigationMenuTriggerVariants,
  type NavigationMenuContentProps,
  type NavigationMenuProps,
  type NavigationMenuTriggerProps,
}
