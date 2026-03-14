import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { cva, type VariantProps } from "class-variance-authority"
import { ChevronDown } from "lucide-react"
import * as React from "react"

import { cn } from "@/lib/utils"

interface AccordionContextState {
  size: NonNullable<AccordionProps["size"]>
  tone: NonNullable<AccordionProps["tone"]>
  variant: NonNullable<AccordionProps["variant"]>
}

const AccordionContext = React.createContext<AccordionContextState>({
  size: "md",
  tone: "default",
  variant: "solid",
})

/**
 * Builds the sticker accordion item className from tone and variant options.
 */
const accordionItemVariants = cva(
  "overflow-hidden rounded-su-xl border-2 border-su-ink bg-su-surface text-su-ink shadow-su-sm transition duration-150 data-[disabled]:opacity-60",
  {
    compoundVariants: [
      {
        class: "bg-su-fill-danger text-su-fg-danger",
        tone: "danger",
        variant: "filled",
      },
      {
        class: "bg-su-fill-info text-su-fg-info",
        tone: "info",
        variant: "filled",
      },
      {
        class: "bg-su-fill-secondary text-su-fg-secondary",
        tone: "secondary",
        variant: "filled",
      },
      {
        class: "bg-su-fill-success text-su-fg-success",
        tone: "success",
        variant: "filled",
      },
      {
        class: "bg-su-fill-warning text-su-fg-warning",
        tone: "warning",
        variant: "filled",
      },
    ],
    defaultVariants: {
      tone: "default",
      variant: "solid",
    },
    variants: {
      tone: {
        danger: "",
        default: "",
        info: "",
        secondary: "",
        success: "",
        warning: "",
      },
      variant: {
        filled: "",
        minimal: "border bg-transparent shadow-none",
        solid: "",
      },
    },
  },
)

/**
 * Builds the sticker accordion trigger className from size and variant options.
 */
const accordionTriggerVariants = cva(
  "group flex w-full cursor-pointer items-center justify-between gap-3 text-left font-extrabold text-current transition duration-150 outline-none hover:bg-su-fill-default-soft focus-visible:ring-[2px] focus-visible:ring-su-ring/65 active:translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-55 data-[state=open]:bg-su-fill-default-soft [&[data-state=open]>svg]:rotate-180",
  {
    defaultVariants: {
      size: "md",
      variant: "solid",
    },
    variants: {
      size: {
        lg: "px-5 py-4 text-base",
        md: "px-4 py-3 text-sm",
        sm: "px-3 py-2.5 text-xs",
      },
      variant: {
        filled: "",
        minimal:
          "hover:bg-su-fill-default/60 data-[state=open]:bg-su-fill-default/60",
        solid: "",
      },
    },
  },
)

/**
 * Builds the sticker accordion content className from size options.
 */
const accordionContentVariants = cva(
  "overflow-hidden border-t border-su-ink bg-su-paper text-sm leading-6 font-medium text-su-fg-muted",
  {
    defaultVariants: {
      size: "md",
    },
    variants: {
      size: {
        lg: "px-5 py-4",
        md: "px-4 py-3",
        sm: "px-3 py-2.5 text-xs leading-5",
      },
    },
  },
)

type AccordionPrimitiveRootProps = React.ComponentPropsWithoutRef<
  typeof AccordionPrimitive.Root
>

/**
 * Props for the sticker accordion root.
 * @remarks Wraps Radix Accordion.Root, so `type` remains required and can be `"single"` or `"multiple"`.
 */
type AccordionProps = AccordionPrimitiveRootProps & {
  /**
   * Custom className for the accordion root.
   */
  className?: string
  /**
   * Controls item and trigger density.
   * @default "md"
   */
  size?: "lg" | "md" | "sm"
  /**
   * Controls the semantic paper tone for filled accordion items.
   * @default "default"
   */
  tone?: "danger" | "default" | "info" | "secondary" | "success" | "warning"
  /**
   * Controls item frame and fill emphasis.
   * @default "solid"
   */
  variant?: "filled" | "minimal" | "solid"
}

/**
 * Sticker accordion root powered by Radix Accordion.
 */
function AccordionRoot({
  children,
  className,
  size = "md",
  tone = "default",
  variant = "solid",
  ...props
}: AccordionProps) {
  const contextValue = React.useMemo<AccordionContextState>(
    () => ({ size, tone, variant }),
    [size, tone, variant],
  )

  return (
    <AccordionContext.Provider value={contextValue}>
      <AccordionPrimitive.Root
        className={cn("grid w-full gap-3", className)}
        data-slot="accordion"
        {...props}
      >
        {children}
      </AccordionPrimitive.Root>
    </AccordionContext.Provider>
  )
}

/**
 * Props for a sticker accordion item.
 */
interface AccordionItemProps
  extends
    Omit<
      React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>,
      "className"
    >,
    VariantProps<typeof accordionItemVariants> {
  /**
   * Custom className for the accordion item.
   */
  className?: string
  /**
   * Controls item paper tone independently from the root.
   */
  tone?: "danger" | "default" | "info" | "secondary" | "success" | "warning"
  /**
   * Controls item frame and fill emphasis independently from the root.
   */
  variant?: "filled" | "minimal" | "solid"
}

/**
 * Single collapsible accordion section.
 */
const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  AccordionItemProps
>(({ className, tone, variant, ...props }, ref) => {
  const context = React.useContext(AccordionContext)

  return (
    <AccordionPrimitive.Item
      className={cn(
        accordionItemVariants({
          tone: tone ?? context.tone,
          variant: variant ?? context.variant,
        }),
        className,
      )}
      data-slot="accordion-item"
      ref={ref}
      {...props}
    />
  )
})
AccordionItem.displayName = AccordionPrimitive.Item.displayName

/**
 * Semantic heading wrapper for an accordion trigger.
 */
const AccordionHeader = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Header>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Header>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Header
    className={cn("m-0", className)}
    data-slot="accordion-header"
    ref={ref}
    {...props}
  />
))
AccordionHeader.displayName = AccordionPrimitive.Header.displayName

/**
 * Props for the sticker accordion trigger.
 */
interface AccordionTriggerProps
  extends
    Omit<
      React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>,
      "className"
    >,
    VariantProps<typeof accordionTriggerVariants> {
  /**
   * Custom className for the accordion trigger.
   */
  className?: string
  /**
   * Controls trigger density independently from the root.
   */
  size?: "lg" | "md" | "sm"
  /**
   * Controls trigger emphasis independently from the root.
   */
  variant?: "filled" | "minimal" | "solid"
}

/**
 * Button that expands or collapses an accordion item.
 */
const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  AccordionTriggerProps
>(({ children, className, size, variant, ...props }, ref) => {
  const context = React.useContext(AccordionContext)

  return (
    <AccordionPrimitive.Trigger
      className={cn(
        accordionTriggerVariants({
          size: size ?? context.size,
          variant: variant ?? context.variant,
        }),
        className,
      )}
      data-slot="accordion-trigger"
      ref={ref}
      {...props}
    >
      <span>{children}</span>
      <ChevronDown
        aria-hidden="true"
        className="size-4 shrink-0 transition duration-150"
      />
    </AccordionPrimitive.Trigger>
  )
})
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName

/**
 * Props for the sticker accordion content panel.
 */
interface AccordionContentProps
  extends
    Omit<
      React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>,
      "className"
    >,
    VariantProps<typeof accordionContentVariants> {
  /**
   * Custom className for the accordion content panel.
   */
  className?: string
  /**
   * Controls content padding independently from the root.
   */
  size?: "lg" | "md" | "sm"
}

/**
 * Collapsible panel content for an accordion item.
 */
const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  AccordionContentProps
>(({ className, size, ...props }, ref) => {
  const context = React.useContext(AccordionContext)

  return (
    <AccordionPrimitive.Content
      className={cn(
        accordionContentVariants({ size: size ?? context.size }),
        className,
      )}
      data-slot="accordion-content"
      ref={ref}
      {...props}
    />
  )
})
AccordionContent.displayName = AccordionPrimitive.Content.displayName

/**
 * Sticker accordion root powered by Radix Accordion.
 */
const Accordion = Object.assign(AccordionRoot, {
  Content: AccordionContent,
  Header: AccordionHeader,
  Item: AccordionItem,
  Trigger: AccordionTrigger,
})

export {
  Accordion,
  AccordionContent,
  accordionContentVariants,
  AccordionHeader,
  AccordionItem,
  accordionItemVariants,
  AccordionTrigger,
  accordionTriggerVariants,
}
export type {
  AccordionContentProps,
  AccordionItemProps,
  AccordionProps,
  AccordionTriggerProps,
}
