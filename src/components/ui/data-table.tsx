import {
  type Column,
  type ColumnDef,
  type ColumnFiltersState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  type OnChangeFn,
  type PaginationState,
  type RowSelectionState,
  type SortingState,
  type Updater,
  useReactTable,
} from "@tanstack/react-table"
import {
  ArrowDown,
  ArrowUp,
  ArrowUpDown,
  ChevronsLeft,
  ChevronsRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"
import * as React from "react"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Spinner } from "@/components/ui/spinner"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { cn } from "@/lib/utils"

type DataTableAlign = "center" | "left" | "right"
type DataTableDataIndex<TData extends object> =
  | keyof TData
  | ((record: TData) => unknown)
type DataTableFilterValue = number | string
type DataTableRowKey<TData extends object> =
  | keyof TData
  | ((record: TData, index: number) => string)

interface DataTableColumnMeta {
  align?: DataTableAlign
  className?: string
  filterOptions?: DataTableFilterOption[]
  filterPlaceholder?: string
  filterVariant?: "select" | "text"
  headerClassName?: string
  width?: number | string
}

/**
 * Selectable filter option for a data table column.
 */
interface DataTableFilterOption {
  /**
   * Visible option label.
   */
  label: React.ReactNode
  /**
   * Option value passed into the column filter state.
   */
  value: DataTableFilterValue
}

/**
 * Column definition for `DataTable`.
 * @remarks Keeps an antd-like column shape while the component maps it to TanStack Table internally.
 */
interface DataTableColumn<TData extends object> {
  /**
   * Aligns header and body cells.
   * @default "left"
   */
  align?: DataTableAlign
  /**
   * Class name applied to body cells in this column.
   */
  className?: string
  /**
   * Property key or accessor function used as the column value.
   */
  dataIndex?: DataTableDataIndex<TData>
  /**
   * Enables a text filter input for the column.
   * @default false
   */
  filterable?: boolean
  /**
   * Custom filter predicate for this column.
   */
  filterFn?: (value: unknown, record: TData, filterValue: unknown) => boolean
  /**
   * Placeholder for the text filter input.
   * @default "Filter..."
   */
  filterPlaceholder?: string
  /**
   * Select filter options for the column.
   */
  filters?: DataTableFilterOption[]
  /**
   * Class name applied to this column's header cell.
   */
  headerClassName?: string
  /**
   * Stable column key. Required when `dataIndex` is an accessor function.
   */
  key?: string
  /**
   * Custom cell renderer.
   */
  render?: (value: unknown, record: TData, index: number) => React.ReactNode
  /**
   * Enables column sorting.
   * @default false
   */
  sortable?: boolean
  /**
   * Header content.
   */
  title: React.ReactNode
  /**
   * Column width applied to header and body cells.
   */
  width?: number | string
}

/**
 * Pagination options for `DataTable`.
 */
interface DataTablePaginationConfig {
  /**
   * Initial zero-based page index.
   * @default 0
   */
  defaultPageIndex?: number
  /**
   * Initial page size.
   * @default 10
   */
  defaultPageSize?: number
  /**
   * Page size choices shown in the footer select.
   * @default [5, 10, 20, 50]
   */
  pageSizeOptions?: number[]
  /**
   * Shows the page size select.
   * @default true
   */
  showSizeChanger?: boolean
}

/**
 * Row selection options for `DataTable`.
 */
interface DataTableRowSelection<TData extends object> {
  /**
   * Initial selected row keys for uncontrolled selection.
   */
  defaultSelectedRowKeys?: string[]
  /**
   * Per-row checkbox props. Return `disabled` to prevent selecting a row.
   */
  getCheckboxProps?: (record: TData) => {
    "aria-label"?: string
    disabled?: boolean
  }
  /**
   * Runs when selected row keys change.
   */
  onChange?: (selectedRowKeys: string[], selectedRows: TData[]) => void
  /**
   * Controlled selected row keys.
   */
  selectedRowKeys?: string[]
}

/**
 * Slot class names for the aggregate data table surface.
 */
interface DataTableClassNames {
  /**
   * Class name applied to body cells.
   */
  cell?: string
  /**
   * Class name applied to the empty or loading row.
   */
  emptyState?: string
  /**
   * Class name applied to filter controls in header cells.
   */
  filter?: string
  /**
   * Class name applied to header cells.
   */
  headerCell?: string
  /**
   * Class name applied to the loading summary badge.
   */
  loadingSummary?: string
  /**
   * Class name applied to the pagination footer.
   */
  pagination?: string
  /**
   * Class name applied to body rows.
   */
  row?: string
  /**
   * Class name applied to the selected-row summary.
   */
  selectionSummary?: string
  /**
   * Class name applied to the native table.
   */
  table?: string
  /**
   * Class name applied to the table scroll frame.
   */
  tableContainer?: string
  /**
   * Class name applied to the top toolbar.
   */
  toolbar?: string
}

/**
 * State payload emitted when table sorting, filtering, pagination, or selection changes.
 */
interface DataTableChangeState<TData extends object> {
  /**
   * Active column filters.
   */
  filters: ColumnFiltersState
  /**
   * Current pagination state.
   */
  pagination: PaginationState
  /**
   * Selected row keys.
   */
  selectedRowKeys: string[]
  /**
   * Selected records from `dataSource`.
   */
  selectedRows: TData[]
  /**
   * Active sorting state.
   */
  sorting: SortingState
}

/**
 * Props for the antd-like sticker data table.
 */
interface DataTableProps<TData extends object> extends Omit<
  React.HTMLAttributes<HTMLDivElement>,
  "onChange"
> {
  /**
   * Slot-level class names for the aggregate table parts.
   */
  classNames?: DataTableClassNames
  /**
   * Column definitions.
   */
  columns: DataTableColumn<TData>[]
  /**
   * Records rendered by the table.
   */
  dataSource: TData[]
  /**
   * Empty state content shown when the current row model is empty.
   * @default "No data"
   */
  emptyText?: React.ReactNode
  /**
   * Shows a loading summary or loading row while data is pending.
   * @default false
   */
  loading?: boolean
  /**
   * Runs when table state changes.
   */
  onChange?: (state: DataTableChangeState<TData>) => void
  /**
   * Pagination config. Pass `false` to render all filtered rows.
   * @default true
   */
  pagination?: boolean | DataTablePaginationConfig
  /**
   * Row key property or resolver.
   * @default row index
   */
  rowKey?: DataTableRowKey<TData>
  /**
   * Enables row selection. Pass an object to control selected keys or row checkbox behavior.
   * @default false
   */
  rowSelection?: boolean | DataTableRowSelection<TData>
  /**
   * Extra content rendered above the table.
   */
  toolbar?: React.ReactNode
}

const SELECT_ALL_FILTER_VALUE = "__sticker_data_table_all__"
const DEFAULT_PAGE_SIZE_OPTIONS = [5, 10, 20, 50]
const EMPTY_ROW_HEIGHT_CLASS = "h-24"

/**
 * Antd-like data table powered by TanStack Table and styled with sticker primitives.
 */
function DataTable<TData extends object>({
  className,
  classNames,
  columns,
  dataSource,
  emptyText = "No data",
  loading = false,
  onChange,
  pagination = true,
  rowKey,
  rowSelection = false,
  toolbar,
  ...props
}: DataTableProps<TData>) {
  const paginationConfig =
    typeof pagination === "object" ? pagination : undefined
  const isPaginationEnabled = pagination !== false
  const rowSelectionConfig =
    typeof rowSelection === "object" ? rowSelection : undefined
  const isRowSelectionEnabled = Boolean(rowSelection)
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    [],
  )
  const [paginationState, setPaginationState] = React.useState<PaginationState>(
    () => ({
      pageIndex: paginationConfig?.defaultPageIndex ?? 0,
      pageSize: paginationConfig?.defaultPageSize ?? 10,
    }),
  )
  const [internalRowSelection, setInternalRowSelection] =
    React.useState<RowSelectionState>(() =>
      toRowSelectionState(rowSelectionConfig?.defaultSelectedRowKeys ?? []),
    )
  const hasMountedRef = React.useRef(false)
  const hasSelectionMountedRef = React.useRef(false)
  const controlledRowSelection = React.useMemo(
    () =>
      rowSelectionConfig?.selectedRowKeys
        ? toRowSelectionState(rowSelectionConfig.selectedRowKeys)
        : undefined,
    [rowSelectionConfig?.selectedRowKeys],
  )
  const selectedRowState = controlledRowSelection ?? internalRowSelection
  const selectedRowKeys = React.useMemo(
    () => getSelectedRowKeys(selectedRowState),
    [selectedRowState],
  )
  const selectedRows = React.useMemo(
    () => getSelectedRows(dataSource, selectedRowKeys, rowKey),
    [dataSource, rowKey, selectedRowKeys],
  )
  const rowSelectionOnChange = rowSelectionConfig?.onChange

  const tableColumns = React.useMemo<ColumnDef<TData, unknown>[]>(
    () => [
      ...(isRowSelectionEnabled
        ? [createSelectionColumn<TData>(rowSelectionConfig)]
        : []),
      ...columns.map((column, index) => createColumnDef(column, index)),
    ],
    [columns, isRowSelectionEnabled, rowSelectionConfig],
  )

  const handleRowSelectionChange = React.useCallback<
    OnChangeFn<RowSelectionState>
  >(
    (updater) => {
      const nextSelection = resolveUpdater(updater, selectedRowState)

      if (controlledRowSelection === undefined) {
        setInternalRowSelection(nextSelection)
        return
      }

      const nextSelectedKeys = getSelectedRowKeys(nextSelection)
      rowSelectionOnChange?.(
        nextSelectedKeys,
        getSelectedRows(dataSource, nextSelectedKeys, rowKey),
      )
    },
    [
      controlledRowSelection,
      dataSource,
      rowKey,
      rowSelectionOnChange,
      selectedRowState,
    ],
  )

  const table = useReactTable({
    columns: tableColumns,
    data: dataSource,
    enableRowSelection: (row) =>
      !rowSelectionConfig?.getCheckboxProps?.(row.original)?.disabled,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: isPaginationEnabled
      ? getPaginationRowModel()
      : undefined,
    getRowId: (record, index) => getDataTableRowKey(record, index, rowKey),
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    onPaginationChange: setPaginationState,
    onRowSelectionChange: handleRowSelectionChange,
    onSortingChange: setSorting,
    state: {
      columnFilters,
      pagination: paginationState,
      rowSelection: selectedRowState,
      sorting,
    },
  })

  React.useEffect(() => {
    if (!hasMountedRef.current) {
      hasMountedRef.current = true
      return
    }

    onChange?.({
      filters: columnFilters,
      pagination: paginationState,
      selectedRowKeys,
      selectedRows,
      sorting,
    })
  }, [
    columnFilters,
    onChange,
    paginationState,
    selectedRowKeys,
    selectedRows,
    sorting,
  ])

  React.useEffect(() => {
    if (!hasSelectionMountedRef.current) {
      hasSelectionMountedRef.current = true
      return
    }

    if (controlledRowSelection !== undefined) {
      return
    }

    rowSelectionOnChange?.(selectedRowKeys, selectedRows)
  }, [
    controlledRowSelection,
    rowSelectionOnChange,
    selectedRowKeys,
    selectedRows,
  ])

  const hasToolbar = toolbar || isRowSelectionEnabled || loading
  const rows = table.getRowModel().rows
  const visibleColumnCount = table.getVisibleLeafColumns().length
  const pageCount = Math.max(table.getPageCount(), 1)
  const pageSizeOptions =
    paginationConfig?.pageSizeOptions ?? DEFAULT_PAGE_SIZE_OPTIONS

  return (
    <div
      aria-busy={loading || undefined}
      className={cn("grid min-w-0 gap-3", className)}
      data-slot="data-table"
      {...props}
    >
      {hasToolbar ? (
        <div
          className={cn(
            "flex min-w-0 flex-wrap items-center justify-between gap-3",
            classNames?.toolbar,
          )}
          data-slot="data-table-toolbar"
        >
          <div className="min-w-0">{toolbar}</div>
          {loading ? (
            <span
              className={cn(
                "inline-flex items-center gap-2 rounded-su-md border border-su-ink bg-su-fill-warning px-3 py-1.5 text-xs font-black text-su-ink",
                classNames?.loadingSummary,
              )}
              data-slot="data-table-loading-summary"
              role="status"
            >
              <Spinner decorative size="sm" />
              Loading
            </span>
          ) : isRowSelectionEnabled ? (
            <span
              className={cn(
                "rounded-su-md border border-su-ink bg-su-fill-info px-3 py-1.5 text-xs font-black text-su-fg-info",
                classNames?.selectionSummary,
              )}
              data-slot="data-table-selection-summary"
            >
              {selectedRowKeys.length} selected
            </span>
          ) : null}
        </div>
      ) : null}

      <Table
        className={cn("min-w-[760px]", classNames?.table)}
        containerClassName={cn(
          "relative bg-su-surface",
          classNames?.tableContainer,
        )}
      >
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                const meta = getColumnMeta(header.column)

                return (
                  <TableHead
                    className={cn(
                      getAlignClassName(meta.align),
                      meta.headerClassName,
                      classNames?.headerCell,
                    )}
                    colSpan={header.colSpan}
                    key={header.id}
                    style={getWidthStyle(meta.width)}
                  >
                    {header.isPlaceholder ? null : (
                      <div className="grid gap-2">
                        <ColumnHeader column={header.column}>
                          {flexRender(
                            header.column.columnDef.header,
                            header.getContext(),
                          )}
                        </ColumnHeader>
                        {header.column.getCanFilter() ? (
                          <DataTableColumnFilter
                            className={classNames?.filter}
                            column={header.column}
                          />
                        ) : null}
                      </div>
                    )}
                  </TableHead>
                )
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {rows.length > 0 ? (
            rows.map((row) => (
              <TableRow
                data-state={row.getIsSelected() ? "selected" : undefined}
                key={row.id}
                className={cn(
                  row.getIsSelected() && "bg-su-fill-info/50",
                  classNames?.row,
                )}
              >
                {row.getVisibleCells().map((cell) => {
                  const meta = getColumnMeta(cell.column)

                  return (
                    <TableCell
                      className={cn(
                        getAlignClassName(meta.align),
                        meta.className,
                        classNames?.cell,
                      )}
                      key={cell.id}
                      style={getWidthStyle(meta.width)}
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext(),
                      )}
                    </TableCell>
                  )
                })}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell
                className={cn(
                  EMPTY_ROW_HEIGHT_CLASS,
                  "text-center align-middle font-bold text-su-fg-muted",
                  classNames?.emptyState,
                )}
                colSpan={visibleColumnCount}
              >
                {loading ? (
                  <span
                    className="inline-flex items-center gap-2"
                    role="status"
                  >
                    <Spinner decorative size="sm" />
                    Loading
                  </span>
                ) : (
                  emptyText
                )}
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>

      {isPaginationEnabled ? (
        <div
          className={cn(
            "flex min-w-0 flex-wrap items-center justify-between gap-3 rounded-su-xl border-2 border-su-ink bg-su-paper px-3 py-2 shadow-su-sm",
            classNames?.pagination,
          )}
          data-slot="data-table-pagination"
        >
          {paginationConfig?.showSizeChanger !== false ? (
            <label className="flex items-center gap-2 text-xs font-black text-su-ink">
              Rows per page
              <Select
                onValueChange={(value) => {
                  table.setPageSize(Number(value))
                }}
                size="sm"
                value={String(table.getState().pagination.pageSize)}
              >
                <SelectTrigger className="w-20" aria-label="Rows per page">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {pageSizeOptions.map((pageSize) => (
                    <SelectItem key={pageSize} value={String(pageSize)}>
                      {pageSize}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </label>
          ) : (
            <span />
          )}

          <div className="flex items-center gap-2">
            <span
              className="text-xs font-black text-su-fg-muted"
              data-slot="data-table-page-summary"
            >
              Page {table.getState().pagination.pageIndex + 1} of {pageCount}
            </span>
            <div className="flex items-center gap-1">
              <Button
                aria-label="First page"
                disabled={!table.getCanPreviousPage()}
                onClick={() => {
                  table.firstPage()
                }}
                size="icon"
                variant="outlined"
              >
                <ChevronsLeft aria-hidden="true" className="size-4" />
              </Button>
              <Button
                aria-label="Previous page"
                disabled={!table.getCanPreviousPage()}
                onClick={() => {
                  table.previousPage()
                }}
                size="icon"
                variant="outlined"
              >
                <ChevronLeft aria-hidden="true" className="size-4" />
              </Button>
              <Button
                aria-label="Next page"
                disabled={!table.getCanNextPage()}
                onClick={() => {
                  table.nextPage()
                }}
                size="icon"
                variant="outlined"
              >
                <ChevronRight aria-hidden="true" className="size-4" />
              </Button>
              <Button
                aria-label="Last page"
                disabled={!table.getCanNextPage()}
                onClick={() => {
                  table.lastPage()
                }}
                size="icon"
                variant="outlined"
              >
                <ChevronsRight aria-hidden="true" className="size-4" />
              </Button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  )
}

function ColumnHeader<TData extends object>({
  children,
  column,
}: {
  children: React.ReactNode
  column: Column<TData, unknown>
}) {
  const sorted = column.getIsSorted()

  if (!column.getCanSort()) {
    return <span className="inline-flex min-w-0 items-center">{children}</span>
  }

  return (
    <button
      aria-label={`Sort column ${column.id}`}
      className="inline-flex min-w-0 cursor-pointer items-center gap-1.5 rounded-su-sm text-left transition hover:text-su-fg-info focus-visible:ring-[2px] focus-visible:ring-su-ring/65 focus-visible:outline-none"
      onClick={column.getToggleSortingHandler()}
      type="button"
    >
      <span className="min-w-0 truncate">{children}</span>
      {sorted === "asc" ? (
        <ArrowUp aria-hidden="true" className="size-3.5 shrink-0" />
      ) : sorted === "desc" ? (
        <ArrowDown aria-hidden="true" className="size-3.5 shrink-0" />
      ) : (
        <ArrowUpDown aria-hidden="true" className="size-3.5 shrink-0" />
      )}
    </button>
  )
}

function DataTableColumnFilter<TData extends object>({
  className,
  column,
}: {
  className?: string
  column: Column<TData, unknown>
}) {
  const meta = getColumnMeta(column)
  const filterValue = column.getFilterValue()

  if (meta.filterVariant === "select") {
    return (
      <Select
        onValueChange={(nextValue) => {
          column.setFilterValue(
            nextValue === SELECT_ALL_FILTER_VALUE ? undefined : nextValue,
          )
        }}
        size="sm"
        value={String(filterValue ?? SELECT_ALL_FILTER_VALUE)}
      >
        <SelectTrigger
          aria-label={`Filter ${column.id}`}
          className={cn("h-8 min-w-28 text-xs", className)}
        >
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value={SELECT_ALL_FILTER_VALUE}>All</SelectItem>
          {meta.filterOptions?.map((option) => (
            <SelectItem key={String(option.value)} value={String(option.value)}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    )
  }

  return (
    <Input
      aria-label={`Filter ${column.id}`}
      className={cn("h-8 min-w-28 text-xs shadow-none", className)}
      onChange={(value) => {
        column.setFilterValue(value || undefined)
      }}
      placeholder={meta.filterPlaceholder ?? "Filter..."}
      size="sm"
      value={(filterValue ?? "") as string}
      variant="quiet"
    />
  )
}

function createSelectionColumn<TData extends object>(
  rowSelection?: DataTableRowSelection<TData>,
): ColumnDef<TData, unknown> {
  return {
    cell: ({ row }) => {
      const checkboxProps = rowSelection?.getCheckboxProps?.(row.original)

      return (
        <Checkbox
          aria-label={checkboxProps?.["aria-label"] ?? "Select row"}
          checked={row.getIsSelected()}
          disabled={checkboxProps?.disabled || !row.getCanSelect()}
          onCheckedChange={(checked) => {
            row.toggleSelected(checked === true)
          }}
          size="sm"
        />
      )
    },
    enableColumnFilter: false,
    enableSorting: false,
    header: ({ table }) => (
      <Checkbox
        aria-label="Select current page"
        checked={
          table.getIsAllPageRowsSelected()
            ? true
            : table.getIsSomePageRowsSelected()
              ? "indeterminate"
              : false
        }
        onCheckedChange={(checked) => {
          table.toggleAllPageRowsSelected(checked === true)
        }}
        size="sm"
      />
    ),
    id: "__selection__",
    meta: {
      align: "center",
      width: 52,
    } satisfies DataTableColumnMeta,
  }
}

function createColumnDef<TData extends object>(
  column: DataTableColumn<TData>,
  index: number,
): ColumnDef<TData, unknown> {
  const id = getColumnId(column, index)
  const filterOptions = column.filters
  const enableColumnFilter = Boolean(column.filterable || filterOptions?.length)

  return {
    accessorFn: (record) => getColumnValue(record, column),
    cell: ({ getValue, row }) =>
      column.render
        ? column.render(getValue(), row.original, row.index)
        : renderPlainValue(getValue()),
    enableColumnFilter,
    enableSorting: Boolean(column.sortable),
    filterFn: enableColumnFilter
      ? (row, columnId, filterValue) => {
          const value = row.getValue(columnId)

          if (filterValue === undefined || filterValue === null) {
            return true
          }

          if (column.filterFn) {
            return column.filterFn(value, row.original, filterValue)
          }

          if (filterOptions?.length) {
            return String(value) === String(filterValue)
          }

          return String(value ?? "")
            .toLowerCase()
            .includes(String(filterValue).toLowerCase())
        }
      : undefined,
    header: () => column.title,
    id,
    meta: {
      align: column.align,
      className: column.className,
      filterOptions,
      filterPlaceholder: column.filterPlaceholder,
      filterVariant: filterOptions?.length ? "select" : "text",
      headerClassName: column.headerClassName,
      width: column.width,
    } satisfies DataTableColumnMeta,
  }
}

function getColumnValue<TData extends object>(
  record: TData,
  column: DataTableColumn<TData>,
) {
  if (typeof column.dataIndex === "function") {
    return column.dataIndex(record)
  }

  if (column.dataIndex) {
    return record[column.dataIndex]
  }

  return undefined
}

function getColumnId<TData extends object>(
  column: DataTableColumn<TData>,
  index: number,
) {
  if (column.key) {
    return column.key
  }

  if (typeof column.dataIndex === "string") {
    return column.dataIndex
  }

  if (typeof column.title === "string") {
    return column.title
  }

  return `column-${index}`
}

function getColumnMeta<TData extends object>(column: Column<TData, unknown>) {
  return (column.columnDef.meta ?? {}) as DataTableColumnMeta
}

function getAlignClassName(align: DataTableAlign | undefined) {
  if (align === "center") {
    return "text-center"
  }

  if (align === "right") {
    return "text-right"
  }

  return "text-left"
}

function getWidthStyle(width: number | string | undefined) {
  return width === undefined ? undefined : { width }
}

function renderPlainValue(value: unknown) {
  if (value === null || value === undefined || value === "") {
    return <span className="text-su-fg-placeholder">-</span>
  }

  return String(value)
}

function getDataTableRowKey<TData extends object>(
  record: TData,
  index: number,
  rowKey: DataTableRowKey<TData> | undefined,
) {
  if (typeof rowKey === "function") {
    return rowKey(record, index)
  }

  if (rowKey) {
    return String(record[rowKey])
  }

  return String(index)
}

function toRowSelectionState(rowKeys: string[]) {
  return Object.fromEntries(rowKeys.map((key) => [key, true]))
}

function getSelectedRowKeys(rowSelection: RowSelectionState) {
  return Object.entries(rowSelection)
    .filter(([, selected]) => selected)
    .map(([key]) => key)
}

function getSelectedRows<TData extends object>(
  dataSource: TData[],
  selectedRowKeys: string[],
  rowKey: DataTableRowKey<TData> | undefined,
) {
  const selectedKeySet = new Set(selectedRowKeys)

  return dataSource.filter((record, index) =>
    selectedKeySet.has(getDataTableRowKey(record, index, rowKey)),
  )
}

function resolveUpdater<TValue>(
  updater: Updater<TValue>,
  currentValue: TValue,
) {
  return typeof updater === "function"
    ? (updater as (value: TValue) => TValue)(currentValue)
    : updater
}

export { DataTable }
export type {
  DataTableChangeState,
  DataTableClassNames,
  DataTableColumn,
  DataTableFilterOption,
  DataTablePaginationConfig,
  DataTableProps,
  DataTableRowSelection,
}
