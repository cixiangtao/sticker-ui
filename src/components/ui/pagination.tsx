import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react"
import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { cn } from "@/lib/utils"

const DEFAULT_PAGE_SIZE = 10
const DEFAULT_PAGE_SIZE_OPTIONS = [5, 10, 20, 50]

/**
 * State values used to render the pagination summary.
 */
interface PaginationSummaryState {
  /**
   * Current one-based page number.
   */
  page: number
  /**
   * Current total page count.
   */
  pageCount: number
  /**
   * Current page size.
   */
  pageSize: number
  /**
   * Optional total record count used to calculate `pageCount`.
   */
  total?: number
}

/**
 * State payload emitted when the active page or page size changes.
 */
interface PaginationChangeState extends PaginationSummaryState {}

/**
 * Accessible labels and summary formatter for `Pagination`.
 */
interface PaginationLabels {
  /**
   * Accessible label for the first-page button.
   * @default "First page"
   */
  firstPage?: string
  /**
   * Accessible label for the last-page button.
   * @default "Last page"
   */
  lastPage?: string
  /**
   * Formats the visible page summary.
   * @default "Page {page} of {pageCount}"
   */
  pageSummary?: (state: PaginationSummaryState) => React.ReactNode
  /**
   * Accessible label for the next-page button.
   * @default "Next page"
   */
  nextPage?: string
  /**
   * Accessible label for the previous-page button.
   * @default "Previous page"
   */
  previousPage?: string
  /**
   * Visible label for the page size select.
   * @default "Rows per page"
   */
  rowsPerPage?: React.ReactNode
  /**
   * Accessible label for the page size select trigger.
   * @default "Rows per page"
   */
  rowsPerPageSelect?: string
}

/**
 * Slot class names for the aggregate pagination surface.
 */
interface PaginationClassNames {
  /**
   * Class name applied to the icon button group.
   */
  controls?: string
  /**
   * Class name applied to the page size label and select group.
   */
  sizeChanger?: string
  /**
   * Class name applied to the visible page summary.
   */
  summary?: string
}

/**
 * Props for the sticker pagination navigation.
 * @remarks Uses one-based page numbers in the public API. Pass either `pageCount` or `total` to describe the result set.
 */
interface PaginationProps extends Omit<
  React.HTMLAttributes<HTMLElement>,
  "onChange"
> {
  /**
   * Slot-level class names for the pagination parts.
   */
  classNames?: PaginationClassNames
  /**
   * Initial one-based page for uncontrolled usage.
   * @default 1
   */
  defaultPage?: number
  /**
   * Initial page size for uncontrolled usage.
   * @default 10
   */
  defaultPageSize?: number
  /**
   * Disables all pagination controls.
   * @default false
   */
  disabled?: boolean
  /**
   * Custom labels and summary formatting.
   */
  labels?: PaginationLabels
  /**
   * Runs when either the page or page size changes.
   */
  onChange?: (state: PaginationChangeState) => void
  /**
   * Runs when the one-based page changes.
   */
  onPageChange?: (page: number) => void
  /**
   * Runs when the page size changes.
   */
  onPageSizeChange?: (pageSize: number) => void
  /**
   * Controlled one-based page number.
   */
  page?: number
  /**
   * Total page count. Takes priority over `total` when both are provided.
   * @default 1
   */
  pageCount?: number
  /**
   * Controlled page size.
   */
  pageSize?: number
  /**
   * Page size choices shown in the select.
   * @default [5, 10, 20, 50]
   */
  pageSizeOptions?: number[]
  /**
   * Shows first-page and last-page jump buttons.
   * @default true
   */
  showFirstLast?: boolean
  /**
   * Shows the page size select.
   * @default true
   */
  showSizeChanger?: boolean
  /**
   * Total record count used to calculate `pageCount` when `pageCount` is not provided.
   */
  total?: number
}

/**
 * Sticker pagination controls for paged lists, tables, and search results.
 */
function Pagination({
  "aria-label": ariaLabel = "Pagination",
  className,
  classNames,
  defaultPage = 1,
  defaultPageSize = DEFAULT_PAGE_SIZE,
  disabled = false,
  labels,
  onChange,
  onPageChange,
  onPageSizeChange,
  page,
  pageCount,
  pageSize,
  pageSizeOptions = DEFAULT_PAGE_SIZE_OPTIONS,
  showFirstLast = true,
  showSizeChanger = true,
  total,
  ...props
}: PaginationProps) {
  const [internalPage, setInternalPage] = React.useState(() =>
    normalizePage(defaultPage),
  )
  const [internalPageSize, setInternalPageSize] = React.useState(() =>
    normalizePageSize(defaultPageSize),
  )
  const resolvedTotal = normalizeTotal(total)
  const resolvedPageSize = normalizePageSize(pageSize ?? internalPageSize)
  const resolvedPageCount = getPageCount({
    pageCount,
    pageSize: resolvedPageSize,
    total: resolvedTotal,
  })
  const resolvedPage = clampPage(page ?? internalPage, resolvedPageCount)
  const pageSizeChoices = React.useMemo(
    () => getPageSizeChoices(pageSizeOptions, resolvedPageSize),
    [pageSizeOptions, resolvedPageSize],
  )
  const summaryState = {
    page: resolvedPage,
    pageCount: resolvedPageCount,
    pageSize: resolvedPageSize,
    total: resolvedTotal,
  } satisfies PaginationSummaryState
  const rowsPerPageLabel = labels?.rowsPerPage ?? "Rows per page"
  const rowsPerPageSelectLabel =
    labels?.rowsPerPageSelect ??
    (typeof rowsPerPageLabel === "string" ? rowsPerPageLabel : "Rows per page")
  const canPreviousPage = !disabled && resolvedPage > 1
  const canNextPage = !disabled && resolvedPage < resolvedPageCount

  React.useEffect(() => {
    if (page !== undefined || internalPage === resolvedPage) {
      return
    }

    setInternalPage(resolvedPage)
  }, [internalPage, page, resolvedPage])

  const setPage = React.useCallback(
    (nextPage: number) => {
      const nextState = {
        page: clampPage(nextPage, resolvedPageCount),
        pageCount: resolvedPageCount,
        pageSize: resolvedPageSize,
        total: resolvedTotal,
      } satisfies PaginationChangeState

      if (nextState.page === resolvedPage) {
        return
      }

      if (page === undefined) {
        setInternalPage(nextState.page)
      }

      onPageChange?.(nextState.page)
      onChange?.(nextState)
    },
    [
      onChange,
      onPageChange,
      page,
      resolvedPage,
      resolvedPageCount,
      resolvedPageSize,
      resolvedTotal,
    ],
  )

  const setPageSize = React.useCallback(
    (value: string) => {
      const nextPageSize = normalizePageSize(Number(value))
      const nextPageCount = getPageCount({
        pageCount,
        pageSize: nextPageSize,
        total: resolvedTotal,
      })
      const nextPage = clampPage(resolvedPage, nextPageCount)
      const hasPageSizeChanged = nextPageSize !== resolvedPageSize
      const hasPageChanged = nextPage !== resolvedPage

      if (!hasPageSizeChanged && !hasPageChanged) {
        return
      }

      if (pageSize === undefined) {
        setInternalPageSize(nextPageSize)
      }

      if (page === undefined) {
        setInternalPage(nextPage)
      }

      if (hasPageSizeChanged) {
        onPageSizeChange?.(nextPageSize)
      }

      if (hasPageChanged) {
        onPageChange?.(nextPage)
      }

      onChange?.({
        page: nextPage,
        pageCount: nextPageCount,
        pageSize: nextPageSize,
        total: resolvedTotal,
      })
    },
    [
      onChange,
      onPageChange,
      onPageSizeChange,
      page,
      pageCount,
      pageSize,
      resolvedPage,
      resolvedPageSize,
      resolvedTotal,
    ],
  )

  return (
    <nav
      aria-label={ariaLabel}
      className={cn(
        "flex min-w-0 flex-wrap items-center justify-between gap-3 rounded-su-xl border-2 border-su-ink bg-su-paper px-3 py-2 shadow-su-sm",
        disabled && "opacity-60",
        className,
      )}
      data-disabled={disabled || undefined}
      data-slot="pagination"
      {...props}
    >
      {showSizeChanger ? (
        <label
          className={cn(
            "flex items-center gap-2 text-xs font-black text-su-ink",
            disabled && "cursor-not-allowed",
            classNames?.sizeChanger,
          )}
          data-slot="pagination-size-changer"
        >
          {rowsPerPageLabel}
          <Select
            disabled={disabled}
            onValueChange={setPageSize}
            size="sm"
            value={String(resolvedPageSize)}
          >
            <SelectTrigger className="w-20" aria-label={rowsPerPageSelectLabel}>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {pageSizeChoices.map((choice) => (
                <SelectItem key={choice} value={String(choice)}>
                  {choice}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </label>
      ) : null}

      <div className="ml-auto flex items-center gap-2">
        <span
          className={cn(
            "text-xs font-black text-su-fg-muted",
            classNames?.summary,
          )}
          data-slot="pagination-summary"
        >
          {labels?.pageSummary?.(summaryState) ??
            `Page ${resolvedPage} of ${resolvedPageCount}`}
        </span>
        <div
          className={cn("flex items-center gap-1", classNames?.controls)}
          data-slot="pagination-controls"
        >
          {showFirstLast ? (
            <Button
              aria-label={labels?.firstPage ?? "First page"}
              disabled={!canPreviousPage}
              onClick={() => {
                setPage(1)
              }}
              shape="square"
              variant="outlined"
            >
              <ChevronsLeft aria-hidden="true" className="size-4" />
            </Button>
          ) : null}
          <Button
            aria-label={labels?.previousPage ?? "Previous page"}
            disabled={!canPreviousPage}
            onClick={() => {
              setPage(resolvedPage - 1)
            }}
            shape="square"
            variant="outlined"
          >
            <ChevronLeft aria-hidden="true" className="size-4" />
          </Button>
          <Button
            aria-label={labels?.nextPage ?? "Next page"}
            disabled={!canNextPage}
            onClick={() => {
              setPage(resolvedPage + 1)
            }}
            shape="square"
            variant="outlined"
          >
            <ChevronRight aria-hidden="true" className="size-4" />
          </Button>
          {showFirstLast ? (
            <Button
              aria-label={labels?.lastPage ?? "Last page"}
              disabled={!canNextPage}
              onClick={() => {
                setPage(resolvedPageCount)
              }}
              shape="square"
              variant="outlined"
            >
              <ChevronsRight aria-hidden="true" className="size-4" />
            </Button>
          ) : null}
        </div>
      </div>
    </nav>
  )
}

function getPageCount({
  pageCount,
  pageSize,
  total,
}: {
  pageCount?: number
  pageSize: number
  total?: number
}) {
  if (Number.isFinite(pageCount) && pageCount !== undefined) {
    return Math.max(1, Math.ceil(pageCount))
  }

  if (Number.isFinite(total) && total !== undefined) {
    return Math.max(1, Math.ceil(total / pageSize))
  }

  return 1
}

function normalizePage(page: number) {
  return Number.isFinite(page) ? Math.max(1, Math.floor(page)) : 1
}

function normalizePageSize(pageSize: number) {
  const roundedPageSize = Math.floor(pageSize)

  return Number.isFinite(pageSize) && roundedPageSize > 0
    ? roundedPageSize
    : DEFAULT_PAGE_SIZE
}

function normalizeTotal(total: number | undefined) {
  return Number.isFinite(total) && total !== undefined
    ? Math.max(0, Math.floor(total))
    : undefined
}

function clampPage(page: number, pageCount: number) {
  return Math.min(normalizePage(page), pageCount)
}

function getPageSizeChoices(pageSizeOptions: number[], pageSize: number) {
  const choices = [...pageSizeOptions, pageSize]
    .map(normalizePageSize)
    .filter((choice, index, options) => options.indexOf(choice) === index)

  return choices.length > 0 ? choices : [DEFAULT_PAGE_SIZE]
}

export { Pagination }
export type {
  PaginationChangeState,
  PaginationClassNames,
  PaginationLabels,
  PaginationProps,
  PaginationSummaryState,
}
