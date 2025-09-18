import { ChevronRight, MoreHorizontal } from "lucide-react"
import * as React from "react"

import { cn } from "@/lib/utils"

const BreadcrumbRoot = React.forwardRef<
  HTMLElement,
  React.ComponentPropsWithoutRef<"nav">
>(({ className, ...props }, ref) => (
  <nav
    aria-label={props["aria-label"] ?? "Breadcrumb"}
    className={cn("text-su-ink", className)}
    data-slot="breadcrumb"
    ref={ref}
    {...props}
  />
))
BreadcrumbRoot.displayName = "Breadcrumb"

/**
 * Ordered breadcrumb list.
 */
const BreadcrumbList = React.forwardRef<
  HTMLOListElement,
  React.ComponentPropsWithoutRef<"ol">
>(({ className, ...props }, ref) => (
  <ol
    className={cn(
      "flex flex-wrap items-center gap-1.5 rounded-su-xl border-2 border-su-ink bg-su-surface px-3 py-2 text-sm font-bold shadow-su-sm",
      className,
    )}
    data-slot="breadcrumb-list"
    ref={ref}
    {...props}
  />
))
BreadcrumbList.displayName = "BreadcrumbList"

/**
 * Breadcrumb list item.
 */
const BreadcrumbItem = React.forwardRef<
  HTMLLIElement,
  React.ComponentPropsWithoutRef<"li">
>(({ className, ...props }, ref) => (
  <li
    className={cn("inline-flex items-center gap-1.5", className)}
    data-slot="breadcrumb-item"
    ref={ref}
    {...props}
  />
))
BreadcrumbItem.displayName = "BreadcrumbItem"

/**
 * Clickable breadcrumb link.
 */
const BreadcrumbLink = React.forwardRef<
  HTMLAnchorElement,
  React.ComponentPropsWithoutRef<"a">
>(({ className, ...props }, ref) => (
  <a
    className={cn(
      "rounded-su-sm text-su-fg-muted underline-offset-4 transition duration-150 hover:text-su-ink hover:underline focus-visible:ring-[2px] focus-visible:ring-su-ring/65 focus-visible:outline-none",
      className,
    )}
    data-slot="breadcrumb-link"
    ref={ref}
    {...props}
  />
))
BreadcrumbLink.displayName = "BreadcrumbLink"

/**
 * Current breadcrumb page label.
 */
const BreadcrumbPage = React.forwardRef<
  HTMLSpanElement,
  React.ComponentPropsWithoutRef<"span">
>(({ className, ...props }, ref) => (
  <span
    aria-current="page"
    className={cn(
      "rounded-su-sm bg-su-fill-default px-2 py-1 font-black text-su-ink",
      className,
    )}
    data-slot="breadcrumb-page"
    ref={ref}
    {...props}
  />
))
BreadcrumbPage.displayName = "BreadcrumbPage"

/**
 * Separator between breadcrumb items.
 */
function BreadcrumbSeparator({
  children,
  className,
  ...props
}: React.ComponentProps<"li">) {
  return (
    <li
      aria-hidden="true"
      className={cn("inline-flex items-center text-su-ink/55", className)}
      data-slot="breadcrumb-separator"
      role="presentation"
      {...props}
    >
      {children ?? <ChevronRight aria-hidden="true" className="size-4" />}
    </li>
  )
}

/**
 * Collapsed breadcrumb marker for hidden middle levels.
 */
function BreadcrumbEllipsis({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      aria-label={props["aria-label"] ?? "More breadcrumb levels"}
      className={cn(
        "inline-flex size-7 items-center justify-center rounded-su-sm border border-su-ink bg-su-paper text-su-ink",
        className,
      )}
      data-slot="breadcrumb-ellipsis"
      role="img"
      {...props}
    >
      <MoreHorizontal aria-hidden="true" className="size-4" />
    </span>
  )
}

/**
 * Sticker breadcrumb navigation landmark.
 */
const Breadcrumb = Object.assign(BreadcrumbRoot, {
  Ellipsis: BreadcrumbEllipsis,
  Item: BreadcrumbItem,
  Link: BreadcrumbLink,
  List: BreadcrumbList,
  Page: BreadcrumbPage,
  Separator: BreadcrumbSeparator,
})

export {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
}
