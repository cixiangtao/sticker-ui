import { cva, type VariantProps } from "class-variance-authority"
import { ChevronLeft, ChevronRight } from "lucide-react"
import * as React from "react"

import { cn } from "@/lib/utils"

import { Button } from "./button"

const WEEKDAY_LABELS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

/**
 * Builds the sticker calendar className from size and tone options.
 */
const calendarVariants = cva(
  "grid w-full gap-3 rounded-su-2xl border-2 border-su-ink bg-su-paper text-su-ink shadow-su-lg",
  {
    defaultVariants: {
      size: "md",
      tone: "default",
    },
    variants: {
      size: {
        md: "p-4 text-sm",
        sm: "p-3 text-xs",
      },
      tone: {
        default: "bg-su-paper",
        info: "bg-su-fill-info",
        secondary: "bg-su-fill-secondary",
      },
    },
  },
)

/**
 * Props for the sticker calendar.
 * @remarks Renders a single-month date grid with optional controlled month and selected date.
 */
interface CalendarProps
  extends
    Omit<React.HTMLAttributes<HTMLDivElement>, "onSelect">,
    VariantProps<typeof calendarVariants> {
  /**
   * Default visible month for uncontrolled month navigation.
   * @default new Date()
   */
  defaultMonth?: Date
  /**
   * Returns true when a day should be disabled.
   */
  disabledDate?: (date: Date) => boolean
  /**
   * Label for the next-month button.
   * @default "Next month"
   */
  nextLabel?: string
  /**
   * Controlled visible month.
   */
  month?: Date
  /**
   * Called after month navigation.
   */
  onMonthChange?: (date: Date) => void
  /**
   * Called when an enabled date is selected.
   */
  onSelect?: (date: Date) => void
  /**
   * Label for the previous-month button.
   * @default "Previous month"
   */
  previousLabel?: string
  /**
   * Controls calendar padding and day-cell scale.
   * @default "md"
   */
  size?: "md" | "sm"
  /**
   * Controls calendar paper tone.
   * @default "default"
   */
  tone?: "default" | "info" | "secondary"
  /**
   * Selected date.
   */
  value?: Date
  /**
   * Day index used as the first column. Sunday is 0.
   * @default 0
   */
  weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
  /**
   * Weekday labels rendered in the heading row.
   * @default ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
   */
  weekdayLabels?: string[]
}

function startOfDay(date: Date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate())
}

function startOfMonth(date: Date) {
  return new Date(date.getFullYear(), date.getMonth(), 1)
}

function addMonths(date: Date, amount: number) {
  return new Date(date.getFullYear(), date.getMonth() + amount, 1)
}

function addDays(date: Date, amount: number) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate() + amount)
}

function isSameDay(firstDate?: Date, secondDate?: Date) {
  if (!firstDate || !secondDate) {
    return false
  }

  return startOfDay(firstDate).getTime() === startOfDay(secondDate).getTime()
}

function getMonthGrid(
  month: Date,
  weekStartsOn: CalendarProps["weekStartsOn"],
) {
  const monthStart = startOfMonth(month)
  const weekdayOffset = (monthStart.getDay() - (weekStartsOn ?? 0) + 7) % 7
  const gridStart = addDays(monthStart, -weekdayOffset)

  return Array.from({ length: 42 }, (_, index) => addDays(gridStart, index))
}

function formatMonthLabel(date: Date) {
  return new Intl.DateTimeFormat(undefined, {
    month: "long",
    year: "numeric",
  }).format(date)
}

/**
 * Single-month sticker calendar for date selection and compact scheduling.
 */
function Calendar({
  className,
  defaultMonth = new Date(),
  disabledDate,
  month,
  nextLabel = "Next month",
  onMonthChange,
  onSelect,
  previousLabel = "Previous month",
  size = "md",
  tone = "default",
  value,
  weekStartsOn = 0,
  weekdayLabels = WEEKDAY_LABELS,
  ...props
}: CalendarProps) {
  const [innerMonth, setInnerMonth] = React.useState(() =>
    startOfMonth(value ?? defaultMonth),
  )
  const visibleMonth = startOfMonth(month ?? innerMonth)
  const dayCells = getMonthGrid(visibleMonth, weekStartsOn)
  const orderedWeekdayLabels = [
    ...weekdayLabels.slice(weekStartsOn),
    ...weekdayLabels.slice(0, weekStartsOn),
  ]

  function setVisibleMonth(nextMonth: Date) {
    setInnerMonth(nextMonth)
    onMonthChange?.(nextMonth)
  }

  return (
    <div
      className={cn(calendarVariants({ size, tone }), className)}
      data-slot="calendar"
      {...props}
    >
      <div
        className="grid grid-cols-[auto_1fr_auto] items-center gap-2"
        data-slot="calendar-header"
      >
        <Button
          aria-label={previousLabel}
          onClick={() => setVisibleMonth(addMonths(visibleMonth, -1))}
          shape="square"
          size="sm"
          variant="outlined"
        >
          <ChevronLeft aria-hidden="true" className="size-4 stroke-[3]" />
        </Button>
        <div
          className="text-center text-sm leading-5 font-black"
          data-slot="calendar-caption"
        >
          {formatMonthLabel(visibleMonth)}
        </div>
        <Button
          aria-label={nextLabel}
          onClick={() => setVisibleMonth(addMonths(visibleMonth, 1))}
          shape="square"
          size="sm"
          variant="outlined"
        >
          <ChevronRight aria-hidden="true" className="size-4 stroke-[3]" />
        </Button>
      </div>
      <div
        className="grid grid-cols-7 gap-1 text-center"
        data-slot="calendar-weekdays"
      >
        {orderedWeekdayLabels.map((weekday) => (
          <div
            className="py-1 text-xs leading-5 font-black text-su-fg-muted"
            data-slot="calendar-weekday"
            key={weekday}
          >
            {weekday}
          </div>
        ))}
      </div>
      <div
        className="grid grid-cols-7 gap-1"
        data-slot="calendar-grid"
        role="grid"
      >
        {dayCells.map((date) => {
          const disabled = disabledDate?.(date) ?? false
          const muted = date.getMonth() !== visibleMonth.getMonth()
          const selected = isSameDay(date, value)

          return (
            <button
              aria-label={date.toDateString()}
              aria-selected={selected}
              className={cn(
                "inline-flex aspect-square min-h-9 cursor-pointer items-center justify-center rounded-su-md border-2 border-transparent bg-su-surface text-sm leading-none font-black transition duration-150 outline-none hover:border-su-ink hover:bg-su-fill-default hover:shadow-su-xs focus-visible:ring-[2px] focus-visible:ring-su-ring/65 disabled:cursor-not-allowed disabled:opacity-45",
                size === "sm" && "min-h-8 text-xs",
                muted && "text-su-fg-muted",
                selected && "border-su-ink bg-su-fill-default shadow-su-sm",
              )}
              data-muted={muted}
              data-selected={selected}
              data-slot="calendar-day"
              disabled={disabled}
              key={date.toISOString()}
              onClick={() => onSelect?.(date)}
              role="gridcell"
              type="button"
            >
              <time dateTime={date.toISOString().slice(0, 10)}>
                {date.getDate()}
              </time>
            </button>
          )
        })}
      </div>
    </div>
  )
}

export { Calendar, calendarVariants, type CalendarProps }
