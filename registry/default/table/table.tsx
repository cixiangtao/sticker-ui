import * as React from "react"

import { cn } from "@/lib/utils"

/**
 * Props for the sticker table root.
 * @remarks Inherits native table attributes and wraps the table in a scrollable sticker frame.
 */
interface TableProps extends React.ComponentProps<"table"> {
  /**
   * Class name applied to the scroll container around the table.
   */
  containerClassName?: string
}

/**
 * A scrollable handbook-style table frame for dense, structured data.
 */
function Table({ className, containerClassName, ...props }: TableProps) {
  return (
    <div
      className={cn(
        "rounded-sticker-xl border-ink bg-paper shadow-sticker-md w-full overflow-x-auto border-2",
        containerClassName,
      )}
      data-slot="table-container"
    >
      <table
        className={cn(
          "text-ink w-full caption-bottom border-collapse text-left text-sm",
          className,
        )}
        data-slot="table"
        {...props}
      />
    </div>
  )
}

function TableBody({ className, ...props }: React.ComponentProps<"tbody">) {
  return (
    <tbody
      className={cn("[&_tr:last-child]:border-b-0", className)}
      data-slot="table-body"
      {...props}
    />
  )
}

function TableCaption({
  className,
  ...props
}: React.ComponentProps<"caption">) {
  return (
    <caption
      className={cn("text-text-subtle mt-3 text-xs font-bold", className)}
      data-slot="table-caption"
      {...props}
    />
  )
}

function TableCell({ className, ...props }: React.ComponentProps<"td">) {
  return (
    <td
      className={cn("px-3 py-3 align-top", className)}
      data-slot="table-cell"
      {...props}
    />
  )
}

function TableFooter({ className, ...props }: React.ComponentProps<"tfoot">) {
  return (
    <tfoot
      className={cn(
        "border-ink bg-fill-warning border-t-2 font-extrabold",
        className,
      )}
      data-slot="table-footer"
      {...props}
    />
  )
}

function TableHead({ className, ...props }: React.ComponentProps<"th">) {
  return (
    <th
      className={cn(
        "h-10 px-3 py-2 align-middle text-xs font-black tracking-wide uppercase",
        className,
      )}
      data-slot="table-head"
      {...props}
    />
  )
}

function TableHeader({ className, ...props }: React.ComponentProps<"thead">) {
  return (
    <thead
      className={cn("border-ink bg-fill-info border-b-2", className)}
      data-slot="table-header"
      {...props}
    />
  )
}

function TableRow({ className, ...props }: React.ComponentProps<"tr">) {
  return (
    <tr
      className={cn(
        "border-ink/25 hover:bg-fill-warning/55 border-b transition-colors",
        className,
      )}
      data-slot="table-row"
      {...props}
    />
  )
}

export {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
}
