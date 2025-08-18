import * as TabsPrimitive from "@radix-ui/react-tabs"
import { cva, type VariantProps } from "class-variance-authority"
import * as React from "react"

import { cn } from "@/lib/utils"

type TabsChangeHandler = (value: string) => void

type TabsContextState = Required<Pick<TabsProps, "size" | "tone" | "variant">>

const TabsContext = React.createContext<TabsContextState>({
  size: "md",
  tone: "default",
  variant: "solid",
})

/**
 * Builds the sticker tabs list className from size and variant options.
 */
const tabsListVariants = cva(
  "inline-flex max-w-full items-center gap-1 overflow-x-auto rounded-su-xl border-2 border-su-ink bg-su-surface p-1 text-su-ink shadow-su-sm data-[orientation=vertical]:flex-col data-[orientation=vertical]:items-stretch data-[orientation=vertical]:overflow-x-visible",
  {
    defaultVariants: {
      size: "md",
      variant: "solid",
    },
    variants: {
      size: {
        lg: "min-h-13",
        md: "min-h-11",
        sm: "min-h-9 rounded-su-lg p-0.5",
      },
      variant: {
        quiet: "border-transparent bg-su-surface-muted shadow-none",
        solid: "",
        underline:
          "rounded-none border-x-0 border-t-0 bg-transparent px-0 shadow-none",
      },
    },
  },
)

/**
 * Builds the sticker tab trigger className from size, tone, and variant options.
 */
const tabsTriggerVariants = cva(
  "inline-flex shrink-0 cursor-pointer items-center justify-center rounded-su-lg border-2 border-transparent font-extrabold whitespace-nowrap text-su-ink transition duration-150 outline-none hover:-translate-y-0.5 focus-visible:ring-[2px] focus-visible:ring-su-ring/65 active:translate-y-0 data-[disabled]:cursor-not-allowed data-[disabled]:opacity-55 data-[orientation=vertical]:justify-start data-[state=active]:border-su-ink data-[state=active]:shadow-su-md",
  {
    compoundVariants: [
      {
        class: "data-[state=active]:bg-su-fill-danger",
        tone: "danger",
        variant: ["quiet", "solid"],
      },
      {
        class: "data-[state=active]:bg-su-fill-default",
        tone: "default",
        variant: ["quiet", "solid"],
      },
      {
        class: "data-[state=active]:bg-su-fill-info",
        tone: "info",
        variant: ["quiet", "solid"],
      },
      {
        class: "data-[state=active]:bg-su-fill-secondary",
        tone: "secondary",
        variant: ["quiet", "solid"],
      },
      {
        class: "data-[state=active]:bg-su-fill-success",
        tone: "success",
        variant: ["quiet", "solid"],
      },
      {
        class: "data-[state=active]:bg-su-fill-warning",
        tone: "warning",
        variant: ["quiet", "solid"],
      },
      {
        class:
          "rounded-none border-x-0 border-t-0 border-b-transparent px-1 shadow-none hover:translate-y-0 data-[state=active]:border-su-ink data-[state=active]:bg-transparent data-[state=active]:shadow-none",
        variant: "underline",
      },
    ],
    defaultVariants: {
      size: "md",
      tone: "default",
      variant: "solid",
    },
    variants: {
      size: {
        lg: "min-h-11 px-5 text-base",
        md: "min-h-9 px-4 text-sm",
        sm: "min-h-8 rounded-su-md px-3 text-xs",
      },
      tone: {
        danger: "data-[state=active]:text-su-fg-danger",
        default: "data-[state=active]:text-su-ink",
        info: "data-[state=active]:text-su-fg-info",
        secondary: "data-[state=active]:text-su-fg-secondary",
        success: "data-[state=active]:text-su-fg-success",
        warning: "data-[state=active]:text-su-fg-warning",
      },
      variant: {
        quiet: "",
        solid: "",
        underline: "",
      },
    },
  },
)

/**
 * Builds the sticker tab content className from size and tone options.
 */
const tabsContentVariants = cva(
  "mt-3 rounded-su-xl border-2 border-su-ink bg-su-paper text-su-ink shadow-su-md outline-none focus-visible:ring-[2px] focus-visible:ring-su-ring/65 data-[orientation=vertical]:mt-0",
  {
    defaultVariants: {
      size: "md",
      tone: "default",
    },
    variants: {
      size: {
        lg: "p-5",
        md: "p-4",
        sm: "p-3",
      },
      tone: {
        danger: "bg-su-fill-danger text-su-fg-danger",
        default: "bg-su-paper",
        info: "bg-su-fill-info text-su-fg-info",
        secondary: "bg-su-fill-secondary text-su-fg-secondary",
        success: "bg-su-fill-success text-su-fg-success",
        warning: "bg-su-fill-warning text-su-fg-warning",
      },
    },
  },
)

/**
 * Props for the sticker tabs root.
 * @remarks Wraps Radix Tabs.Root and keeps `onChange(value)` as a friendly alias for `onValueChange`.
 */
interface TabsProps extends Omit<
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Root>,
  "className" | "onChange" | "onValueChange"
> {
  /**
   * Custom className for the tabs root.
   */
  className?: string
  /**
   * Runs when the active tab value changes.
   * @remarks Receives the next string value.
   */
  onChange?: TabsChangeHandler
  /**
   * Runs when the active tab value changes.
   */
  onValueChange?: TabsChangeHandler
  /**
   * Controls list and trigger density.
   * @default "md"
   */
  size?: "lg" | "md" | "sm"
  /**
   * Controls the semantic paper tone for active triggers and content.
   * @default "default"
   */
  tone?: "danger" | "default" | "info" | "secondary" | "success" | "warning"
  /**
   * Controls trigger structure and list emphasis.
   * @default "solid"
   */
  variant?: "quiet" | "solid" | "underline"
}

/**
 * Sticker tabs root powered by Radix Tabs.
 */
function Tabs({
  children,
  className,
  onChange,
  onValueChange,
  size = "md",
  tone = "default",
  variant = "solid",
  ...props
}: TabsProps) {
  const contextValue = React.useMemo<TabsContextState>(
    () => ({
      size,
      tone,
      variant,
    }),
    [size, tone, variant],
  )

  return (
    <TabsContext.Provider value={contextValue}>
      <TabsPrimitive.Root
        className={cn("w-full", className)}
        data-slot="tabs"
        onValueChange={(value) => {
          onValueChange?.(value)
          onChange?.(value)
        }}
        {...props}
      >
        {children}
      </TabsPrimitive.Root>
    </TabsContext.Provider>
  )
}

/**
 * Props for the sticker tabs list.
 */
interface TabsListProps
  extends
    Omit<
      React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>,
      "className"
    >,
    Pick<VariantProps<typeof tabsListVariants>, "size" | "variant"> {
  /**
   * Custom className for the tabs list.
   */
  className?: string
  /**
   * Controls list density independently from the root.
   */
  size?: "lg" | "md" | "sm"
  /**
   * Controls list frame emphasis independently from the root.
   */
  variant?: "quiet" | "solid" | "underline"
}

/**
 * Groups tab triggers.
 */
const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  TabsListProps
>(({ className, size, variant, ...props }, ref) => {
  const context = React.useContext(TabsContext)

  return (
    <TabsPrimitive.List
      className={cn(
        tabsListVariants({
          size: size ?? context.size,
          variant: variant ?? context.variant,
        }),
        className,
      )}
      data-slot="tabs-list"
      ref={ref}
      {...props}
    />
  )
})
TabsList.displayName = TabsPrimitive.List.displayName

/**
 * Props for the sticker tab trigger.
 */
interface TabsTriggerProps extends Omit<
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>,
  "className"
> {
  /**
   * Custom className for the tab trigger.
   */
  className?: string
  /**
   * Controls trigger density independently from the root.
   */
  size?: "lg" | "md" | "sm"
  /**
   * Controls active trigger tone independently from the root.
   */
  tone?: "danger" | "default" | "info" | "secondary" | "success" | "warning"
  /**
   * Controls trigger structure independently from the root.
   */
  variant?: "quiet" | "solid" | "underline"
}

/**
 * Selects a tab panel.
 */
const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  TabsTriggerProps
>(({ className, size, tone, variant, ...props }, ref) => {
  const context = React.useContext(TabsContext)

  return (
    <TabsPrimitive.Trigger
      className={cn(
        tabsTriggerVariants({
          size: size ?? context.size,
          tone: tone ?? context.tone,
          variant: variant ?? context.variant,
        }),
        className,
      )}
      data-slot="tabs-trigger"
      ref={ref}
      {...props}
    />
  )
})
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName

/**
 * Props for the sticker tab content.
 */
interface TabsContentProps
  extends
    Omit<
      React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>,
      "className"
    >,
    VariantProps<typeof tabsContentVariants> {
  /**
   * Custom className for the tab panel.
   */
  className?: string
  /**
   * Controls panel padding independently from the root.
   */
  size?: "lg" | "md" | "sm"
  /**
   * Controls panel paper tone independently from the root.
   */
  tone?: "danger" | "default" | "info" | "secondary" | "success" | "warning"
}

/**
 * Displays the active tab panel.
 */
const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  TabsContentProps
>(({ className, size, tone, ...props }, ref) => {
  const context = React.useContext(TabsContext)

  return (
    <TabsPrimitive.Content
      className={cn(
        tabsContentVariants({
          size: size ?? context.size,
          tone: tone ?? context.tone,
        }),
        className,
      )}
      data-slot="tabs-content"
      ref={ref}
      {...props}
    />
  )
})
TabsContent.displayName = TabsPrimitive.Content.displayName

export {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  tabsContentVariants,
  tabsListVariants,
  tabsTriggerVariants,
}
export type { TabsContentProps, TabsListProps, TabsProps, TabsTriggerProps }
