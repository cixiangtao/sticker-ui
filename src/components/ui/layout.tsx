import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import * as React from "react"

import { cn } from "@/lib/utils"

/**
 * Builds the flex layout className from direction, alignment, gap, and wrapping variants.
 */
const flexVariants = cva("min-w-0", {
  defaultVariants: {
    align: "stretch",
    direction: "row",
    gap: "md",
    inline: false,
    justify: "start",
    wrap: "nowrap",
  },
  variants: {
    align: {
      baseline: "items-baseline",
      center: "items-center",
      end: "items-end",
      start: "items-start",
      stretch: "items-stretch",
    },
    direction: {
      column: "flex-col",
      "column-reverse": "flex-col-reverse",
      row: "flex-row",
      "row-reverse": "flex-row-reverse",
    },
    gap: {
      lg: "gap-4",
      md: "gap-3",
      none: "gap-0",
      sm: "gap-2",
      xl: "gap-6",
      xs: "gap-1.5",
    },
    inline: {
      false: "flex",
      true: "inline-flex",
    },
    justify: {
      around: "justify-around",
      between: "justify-between",
      center: "justify-center",
      end: "justify-end",
      evenly: "justify-evenly",
      start: "justify-start",
    },
    wrap: {
      nowrap: "flex-nowrap",
      reverse: "flex-wrap-reverse",
      wrap: "flex-wrap",
    },
  },
})

/**
 * Builds the grid layout className from column, alignment, and gap variants.
 */
const gridVariants = cva("min-w-0", {
  defaultVariants: {
    align: "stretch",
    columns: "1",
    gap: "md",
    inline: false,
    justify: "stretch",
  },
  variants: {
    align: {
      center: "items-center",
      end: "items-end",
      start: "items-start",
      stretch: "items-stretch",
    },
    columns: {
      "1": "grid-cols-1",
      "2": "grid-cols-2",
      "3": "grid-cols-3",
      "4": "grid-cols-4",
      "5": "grid-cols-5",
      "6": "grid-cols-6",
      "auto-fill": "grid-cols-[repeat(auto-fill,minmax(min(14rem,100%),1fr))]",
      "auto-fit": "grid-cols-[repeat(auto-fit,minmax(min(14rem,100%),1fr))]",
      "responsive-2": "grid-cols-1 sm:grid-cols-2",
      "responsive-3": "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
      "responsive-4": "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
    },
    gap: {
      lg: "gap-4",
      md: "gap-3",
      none: "gap-0",
      sm: "gap-2",
      xl: "gap-6",
      xs: "gap-1.5",
    },
    inline: {
      false: "grid",
      true: "inline-grid",
    },
    justify: {
      center: "justify-items-center",
      end: "justify-items-end",
      start: "justify-items-start",
      stretch: "justify-items-stretch",
    },
  },
})

type LayoutElement =
  | "article"
  | "aside"
  | "div"
  | "footer"
  | "form"
  | "header"
  | "li"
  | "main"
  | "nav"
  | "ol"
  | "section"
  | "ul"

/**
 * Props for the sticker flex layout primitive.
 * @remarks Inherits native HTML attributes and adds static Tailwind-safe layout variants.
 */
interface FlexProps
  extends React.HTMLAttributes<HTMLElement>, VariantProps<typeof flexVariants> {
  /**
   * Controls cross-axis item alignment.
   * @default "stretch"
   */
  align?: "baseline" | "center" | "end" | "start" | "stretch"
  /**
   * Controls the semantic root element rendered by the layout.
   * @default "div"
   */
  as?: LayoutElement
  /**
   * Renders the layout classes and state props on the only child element.
   * @default false
   */
  asChild?: boolean
  /**
   * Controls flex axis and visual order.
   * @default "row"
   */
  direction?: "column" | "column-reverse" | "row" | "row-reverse"
  /**
   * Controls spacing between children.
   * @default "md"
   */
  gap?: "lg" | "md" | "none" | "sm" | "xl" | "xs"
  /**
   * Uses `inline-flex` instead of `flex`.
   * @default false
   */
  inline?: boolean
  /**
   * Controls main-axis distribution.
   * @default "start"
   */
  justify?: "around" | "between" | "center" | "end" | "evenly" | "start"
  /**
   * Controls line wrapping behavior.
   * @default "nowrap"
   */
  wrap?: "nowrap" | "reverse" | "wrap"
}

/**
 * Props for the sticker grid layout primitive.
 * @remarks Inherits native HTML attributes and adds static Tailwind-safe layout variants.
 */
interface GridProps
  extends React.HTMLAttributes<HTMLElement>, VariantProps<typeof gridVariants> {
  /**
   * Controls block-axis item alignment.
   * @default "stretch"
   */
  align?: "center" | "end" | "start" | "stretch"
  /**
   * Controls the semantic root element rendered by the layout.
   * @default "div"
   */
  as?: LayoutElement
  /**
   * Renders the layout classes and state props on the only child element.
   * @default false
   */
  asChild?: boolean
  /**
   * Controls the grid column template.
   * @default "1"
   */
  columns?:
    | "1"
    | "2"
    | "3"
    | "4"
    | "5"
    | "6"
    | "auto-fill"
    | "auto-fit"
    | "responsive-2"
    | "responsive-3"
    | "responsive-4"
  /**
   * Controls spacing between children.
   * @default "md"
   */
  gap?: "lg" | "md" | "none" | "sm" | "xl" | "xs"
  /**
   * Uses `inline-grid` instead of `grid`.
   * @default false
   */
  inline?: boolean
  /**
   * Controls inline-axis item alignment.
   * @default "stretch"
   */
  justify?: "center" | "end" | "start" | "stretch"
}

/**
 * Flex layout primitive for toolbars, rows, stacks, and wrapped action groups.
 */
function Flex({
  align = "stretch",
  as: Component = "div",
  asChild = false,
  className,
  direction = "row",
  gap = "md",
  inline = false,
  justify = "start",
  wrap = "nowrap",
  ...props
}: FlexProps) {
  const Root = asChild ? Slot : Component

  return (
    <Root
      className={cn(
        flexVariants({ align, direction, gap, inline, justify, wrap }),
        className,
      )}
      data-align={align}
      data-direction={direction}
      data-gap={gap}
      data-inline={inline}
      data-justify={justify}
      data-slot="flex"
      data-wrap={wrap}
      {...props}
    />
  )
}

/**
 * Grid layout primitive for responsive card rows and repeated content groups.
 */
function Grid({
  align = "stretch",
  as: Component = "div",
  asChild = false,
  className,
  columns = "1",
  gap = "md",
  inline = false,
  justify = "stretch",
  ...props
}: GridProps) {
  const Root = asChild ? Slot : Component

  return (
    <Root
      className={cn(
        gridVariants({ align, columns, gap, inline, justify }),
        className,
      )}
      data-align={align}
      data-columns={columns}
      data-gap={gap}
      data-inline={inline}
      data-justify={justify}
      data-slot="grid"
      {...props}
    />
  )
}

export {
  Flex,
  Grid,
  flexVariants,
  gridVariants,
  type FlexProps,
  type GridProps,
}
