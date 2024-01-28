import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import * as React from "react"

import { cn } from "@/lib/utils"

/**
 * Builds the sticker card className from structure variants.
 */
const cardVariants = cva(
  "relative flex flex-col overflow-hidden text-ink transition duration-150",
  {
    defaultVariants: {
      padding: "md",
      variant: "elevated",
    },
    variants: {
      padding: {
        lg: "p-5 [--card-padding-x:1.25rem] [--card-padding-y:1.25rem] sm:p-6 sm:[--card-padding-x:1.5rem] sm:[--card-padding-y:1.5rem]",
        md: "p-4 [--card-padding-x:1rem] [--card-padding-y:1rem] sm:p-5 sm:[--card-padding-x:1.25rem] sm:[--card-padding-y:1.25rem]",
        none: "p-0 [--card-padding-x:0px] [--card-padding-y:0px]",
        sm: "p-3 [--card-padding-x:0.75rem] [--card-padding-y:0.75rem]",
      },
      variant: {
        elevated:
          "rounded-sticker-3xl border-2 border-ink bg-paper shadow-sticker-lg data-[interactive=true]:hover:-translate-y-0.5 data-[interactive=true]:hover:shadow-sticker-xl data-[interactive=true]:active:translate-x-1 data-[interactive=true]:active:translate-y-1 data-[interactive=true]:active:shadow-sticker-xs",
        minimal:
          "rounded-sticker-2xl border border-ink/25 bg-surface shadow-none data-[interactive=true]:hover:border-ink/45 data-[interactive=true]:hover:bg-surface data-[interactive=true]:active:border-ink/60",
        panel:
          "rounded-sticker-panel border-[3px] border-ink bg-surface shadow-sticker-2xl data-[interactive=true]:hover:-translate-y-0.5 data-[interactive=true]:active:translate-x-1 data-[interactive=true]:active:translate-y-1 data-[interactive=true]:active:shadow-sticker-lg",
      },
    },
  },
)

const cardSlotSpacingClassName =
  "-mx-(--card-padding-x) px-(--card-padding-x) py-(--card-padding-y) last:-mb-(--card-padding-y)"

type CardElement =
  | "article"
  | "aside"
  | "div"
  | "footer"
  | "header"
  | "main"
  | "section"

type CardPadding = "lg" | "md" | "none" | "sm"

type CardHeaderDivider = "dashed" | "none" | "solid"

type CardHeaderDividerInset = "card" | CardPadding

/**
 * Builds the sticker card header className from structure variants.
 */
const cardHeaderVariants = cva(
  cn(
    cardSlotSpacingClassName,
    "relative border-ink after:pointer-events-none after:absolute after:bottom-0 after:border-ink after:content-[''] first:-mt-(--card-padding-y)",
  ),
  {
    defaultVariants: {
      divider: "solid",
      dividerInset: "none",
    },
    variants: {
      divider: {
        dashed:
          "after:border-b-2 after:border-dashed in-data-[variant=minimal]:after:border-b in-data-[variant=minimal]:after:border-surface-muted",
        none: "after:hidden",
        solid:
          "after:border-b-2 in-data-[variant=minimal]:after:border-b in-data-[variant=minimal]:after:border-surface-muted",
      },
      dividerInset: {
        card: "after:right-(--card-padding-x) after:left-(--card-padding-x)",
        lg: "after:right-5 after:left-5 sm:after:right-6 sm:after:left-6",
        md: "after:right-4 after:left-4 sm:after:right-5 sm:after:left-5",
        none: "after:right-0 after:left-0",
        sm: "after:right-3 after:left-3",
      },
    },
  },
)

/**
 * Props for the sticker card root element.
 * @remarks Inherits native HTML attributes and adds semantic element and interactive states.
 */
interface CardProps
  extends React.HTMLAttributes<HTMLElement>, VariantProps<typeof cardVariants> {
  /**
   * Controls the semantic root element rendered by the card.
   * @default "article"
   */
  as?: CardElement
  /**
   * Renders the card styles and state props on the only child element.
   * @default false
   */
  asChild?: boolean
  /**
   * Enables tactile hover and pressed states for clickable card compositions.
   * @default false
   */
  interactive?: boolean
  /**
   * Controls root spacing and the spacing consumed by card slots.
   * @default "md"
   */
  padding?: CardPadding
  /**
   * Controls the card surface structure and emphasis.
   * @default "elevated"
   */
  variant?: "elevated" | "minimal" | "panel"
}

/**
 * Props for the sticker card header.
 */
interface CardHeaderProps extends React.ComponentProps<"header"> {
  /**
   * Controls decorative content rendered at the end of the header.
   * @remarks Pass `true` to render the default header dots, or pass custom content.
   * @default false
   */
  decoration?: boolean | React.ReactNode
  /**
   * Controls the divider between the header and the card body.
   * @default "solid"
   */
  divider?: CardHeaderDivider
  /**
   * Controls the horizontal inset of the header divider.
   * @default "none"
   */
  dividerInset?: CardHeaderDividerInset
}

function Card({
  as: Component = "article",
  asChild = false,
  className,
  interactive = false,
  padding = "md",
  variant = "elevated",
  ...props
}: CardProps) {
  const Root = asChild ? Slot : Component

  return (
    <Root
      className={cn(cardVariants({ padding, variant }), className)}
      data-interactive={interactive}
      data-padding={padding}
      data-slot="card"
      data-variant={variant}
      {...props}
    />
  )
}

function HeaderDots() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none flex gap-2"
      data-slot="panel-header-dots"
    >
      <span
        className="size-3.5 rounded-full border-2 border-ink bg-[#EF476F]"
        data-slot="panel-header-dot"
      />
      <span
        className="size-3.5 rounded-full border-2 border-ink bg-[#FFCF56]"
        data-slot="panel-header-dot"
      />
      <span
        className="size-3.5 rounded-full border-2 border-ink bg-[#00B894]"
        data-slot="panel-header-dot"
      />
    </div>
  )
}

function CardHeader({
  children,
  className,
  decoration = false,
  divider = "solid",
  dividerInset = "none",
  ...props
}: CardHeaderProps) {
  const decorationNode = decoration === true ? <HeaderDots /> : decoration

  return (
    <header
      className={cn(
        "grid gap-2",
        cardHeaderVariants({
          divider,
          dividerInset,
        }),
        className,
      )}
      data-slot="card-header"
      {...props}
    >
      <>
        <div className="absolute top-(--card-padding-y) right-(--card-padding-x) z-1 flex justify-end">
          {decoration === null ? null : (
            <div
              aria-hidden="true"
              className="pointer-events-none shrink-0"
              data-slot="card-header-decoration"
            >
              {decorationNode}
            </div>
          )}
        </div>
        {children}
      </>
    </header>
  )
}

function CardTitle({ className, ...props }: React.ComponentProps<"h3">) {
  return (
    <h3
      className={cn("m-0 text-lg leading-6 font-black text-ink", className)}
      data-slot="card-title"
      {...props}
    />
  )
}

function CardDescription({ className, ...props }: React.ComponentProps<"p">) {
  return (
    <p
      className={cn(
        "m-0 text-sm leading-6 font-medium text-text-muted",
        className,
      )}
      data-slot="card-description"
      {...props}
    />
  )
}

function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(cardSlotSpacingClassName, "mt-auto grid gap-4", className)}
      data-slot="card-content"
      {...props}
    />
  )
}

function CardFooter({ className, ...props }: React.ComponentProps<"footer">) {
  return (
    <footer
      className={cn(
        cardSlotSpacingClassName,
        "mt-auto flex flex-wrap items-center gap-2 border-t-2 border-ink in-data-[variant=minimal]:border-t in-data-[variant=minimal]:border-surface-muted",
        className,
      )}
      data-slot="card-footer"
      {...props}
    />
  )
}

export {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  cardVariants,
}
