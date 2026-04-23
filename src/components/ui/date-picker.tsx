import { CalendarIcon } from "lucide-react"
import * as React from "react"

import { cn } from "@/lib/utils"

import { Button } from "./button"
import { Calendar, type CalendarProps } from "./calendar"
import { Popover } from "./popover"

/**
 * Props for the sticker date picker.
 * @remarks Combines Button, Popover, and Calendar into a compact single-date picker.
 */
interface DatePickerProps extends Omit<
  React.HTMLAttributes<HTMLDivElement>,
  "onChange"
> {
  /**
   * Calendar props passed to the inner calendar.
   */
  calendarProps?: Omit<CalendarProps, "onSelect" | "value">
  /**
   * Disables the trigger and inner calendar selection.
   * @default false
   */
  disabled?: boolean
  /**
   * Formats the selected date for the trigger.
   */
  formatDate?: (date: Date) => string
  /**
   * Accessible label for the trigger.
   * @default "Choose date"
   */
  label?: string
  /**
   * Called when a date is selected.
   */
  onChange?: (date: Date) => void
  /**
   * Placeholder shown when no date is selected.
   * @default "Choose date"
   */
  placeholder?: React.ReactNode
  /**
   * Selected date.
   */
  value?: Date
}

function defaultFormatDate(date: Date) {
  return new Intl.DateTimeFormat(undefined, {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(date)
}

/**
 * Compact sticker date picker for forms, filters, and scheduling panels.
 */
function DatePicker({
  calendarProps,
  className,
  disabled = false,
  formatDate = defaultFormatDate,
  label = "Choose date",
  onChange,
  placeholder = "Choose date",
  value,
  ...props
}: DatePickerProps) {
  const [open, setOpen] = React.useState(false)

  function handleSelect(date: Date) {
    onChange?.(date)
    setOpen(false)
  }

  return (
    <div
      className={cn("inline-flex", className)}
      data-slot="date-picker"
      {...props}
    >
      <Popover onOpenChange={setOpen} open={open}>
        <Popover.Trigger asChild>
          <Button aria-label={label} disabled={disabled} variant="outlined">
            <CalendarIcon aria-hidden="true" className="size-4 stroke-[3]" />
            <span>{value ? formatDate(value) : placeholder}</span>
          </Button>
        </Popover.Trigger>
        <Popover.Content
          align="start"
          className="w-80 p-0"
          showArrow
          sideOffset={8}
        >
          <Calendar
            {...calendarProps}
            className="border-0 shadow-none"
            disabledDate={(date) =>
              disabled || (calendarProps?.disabledDate?.(date) ?? false)
            }
            onSelect={handleSelect}
            value={value}
          />
        </Popover.Content>
      </Popover>
    </div>
  )
}

export { DatePicker, type DatePickerProps }
