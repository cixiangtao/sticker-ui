import { Search } from "lucide-react"
import * as React from "react"

import { cn } from "@/lib/utils"

import { Empty } from "./empty"

/**
 * Command item data used by the convenience `items` API.
 */
interface CommandItemData {
  /**
   * Optional grouping label.
   */
  group?: string
  /**
   * Leading icon or avatar.
   */
  icon?: React.ReactNode
  /**
   * Stable item label.
   */
  label: React.ReactNode
  /**
   * Disabled items remain visible but cannot be selected.
   */
  disabled?: boolean
  /**
   * Supporting description.
   */
  description?: React.ReactNode
  /**
   * Searchable text. Falls back to string labels and value.
   */
  keywords?: string
  /**
   * Value passed to `onSelect`.
   */
  value: string
}

/**
 * Props for the sticker command surface.
 * @remarks Provides a search input plus grouped command list. Use `items` for the convenience API or compose children manually.
 */
interface CommandProps extends Omit<
  React.HTMLAttributes<HTMLDivElement>,
  "onSelect"
> {
  /**
   * Children override the convenience item renderer.
   */
  children?: React.ReactNode
  /**
   * Empty-state description.
   * @default "Try a different keyword or clear the search."
   */
  emptyDescription?: React.ReactNode
  /**
   * Empty-state heading.
   * @default "No commands found"
   */
  emptyHeading?: React.ReactNode
  /**
   * Current search value.
   */
  filterValue?: string
  /**
   * Convenience command data.
   */
  items?: CommandItemData[]
  /**
   * Called when the search value changes.
   */
  onFilterValueChange?: (value: string) => void
  /**
   * Called when an enabled command is selected.
   */
  onSelect?: (value: string, item: CommandItemData) => void
  /**
   * Search input placeholder.
   * @default "Search commands..."
   */
  placeholder?: string
}

type CommandGroupProps = React.HTMLAttributes<HTMLDivElement>
type CommandGroupHeadingProps = React.HTMLAttributes<HTMLDivElement>
type CommandListProps = React.HTMLAttributes<HTMLDivElement>

/**
 * Props for a command item button.
 */
interface CommandItemProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Supporting description shown below the main label.
   */
  description?: React.ReactNode
  /**
   * Leading icon or avatar.
   */
  icon?: React.ReactNode
}

function getSearchText(item: CommandItemData) {
  const labelText = typeof item.label === "string" ? item.label : ""
  return `${item.value} ${labelText} ${item.keywords ?? ""}`.toLowerCase()
}

function groupCommandItems(items: CommandItemData[]) {
  return items.reduce<Record<string, CommandItemData[]>>((groups, item) => {
    const group = item.group ?? "Commands"
    groups[group] = [...(groups[group] ?? []), item]
    return groups
  }, {})
}

/**
 * Searchable sticker command list for palettes, quick switchers, and menu-like workflows.
 */
function CommandRoot({
  children,
  className,
  emptyDescription = "Try a different keyword or clear the search.",
  emptyHeading = "No commands found",
  filterValue,
  items,
  onFilterValueChange,
  onSelect,
  placeholder = "Search commands...",
  ...props
}: CommandProps) {
  const [innerFilterValue, setInnerFilterValue] = React.useState("")
  const searchValue = filterValue ?? innerFilterValue
  const normalizedSearch = searchValue.trim().toLowerCase()
  const filteredItems =
    items?.filter((item) =>
      normalizedSearch ? getSearchText(item).includes(normalizedSearch) : true,
    ) ?? []
  const groups = groupCommandItems(filteredItems)
  const groupEntries = Object.entries(groups)

  function handleFilterChange(event: React.ChangeEvent<HTMLInputElement>) {
    const nextValue = event.target.value
    setInnerFilterValue(nextValue)
    onFilterValueChange?.(nextValue)
  }

  return (
    <div
      className={cn(
        "grid overflow-hidden rounded-su-2xl border-2 border-su-ink bg-su-paper text-su-ink shadow-su-lg",
        className,
      )}
      data-slot="command"
      {...props}
    >
      <label
        className="flex items-center gap-2 border-b-2 border-su-ink bg-su-surface px-3 py-2"
        data-slot="command-search"
      >
        <Search aria-hidden="true" className="size-4 stroke-[3]" />
        <input
          className="h-9 min-w-0 flex-1 bg-transparent text-sm font-bold outline-none placeholder:text-su-fg-placeholder"
          data-slot="command-input"
          onChange={handleFilterChange}
          placeholder={placeholder}
          type="search"
          value={searchValue}
        />
      </label>
      {children ? (
        <CommandList>{children}</CommandList>
      ) : groupEntries.length ? (
        <CommandList>
          {groupEntries.map(([group, groupItems]) => (
            <CommandGroup key={group}>
              <CommandGroupHeading>{group}</CommandGroupHeading>
              {groupItems.map((item) => (
                <CommandItem
                  description={item.description}
                  disabled={item.disabled}
                  icon={item.icon}
                  key={item.value}
                  onClick={() => onSelect?.(item.value, item)}
                >
                  {item.label}
                </CommandItem>
              ))}
            </CommandGroup>
          ))}
        </CommandList>
      ) : (
        <Empty
          className="rounded-none border-0 shadow-none"
          description={emptyDescription}
          heading={emptyHeading}
          size="sm"
          variant="plain"
        />
      )}
    </div>
  )
}

/**
 * Scrollable command list.
 */
function CommandList({ className, ...props }: CommandListProps) {
  return (
    <div
      className={cn("grid max-h-80 gap-2 overflow-y-auto p-2", className)}
      data-slot="command-list"
      role="listbox"
      {...props}
    />
  )
}

/**
 * Command group wrapper.
 */
function CommandGroup({ className, ...props }: CommandGroupProps) {
  return (
    <div
      className={cn("grid gap-1", className)}
      data-slot="command-group"
      {...props}
    />
  )
}

/**
 * Command group heading.
 */
function CommandGroupHeading({
  className,
  ...props
}: CommandGroupHeadingProps) {
  return (
    <div
      className={cn(
        "px-2 pt-2 pb-1 text-xs leading-5 font-black text-su-fg-muted uppercase",
        className,
      )}
      data-slot="command-group-heading"
      {...props}
    />
  )
}

/**
 * Command item button.
 */
function CommandItem({
  children,
  className,
  description,
  disabled,
  icon,
  type = "button",
  ...props
}: CommandItemProps) {
  return (
    <button
      className={cn(
        "grid cursor-pointer grid-cols-[auto_1fr] items-center gap-3 rounded-su-lg border-2 border-transparent px-2 py-2 text-left transition duration-150 outline-none hover:border-su-ink hover:bg-su-fill-default hover:shadow-su-xs focus-visible:border-su-ink focus-visible:ring-[2px] focus-visible:ring-su-ring/65 disabled:cursor-not-allowed disabled:opacity-55",
        className,
      )}
      data-slot="command-item"
      disabled={disabled}
      role="option"
      type={type}
      {...props}
    >
      {icon ? (
        <span
          className="inline-flex size-8 items-center justify-center rounded-su-md border-2 border-su-ink bg-su-surface shadow-su-xs"
          data-slot="command-item-icon"
        >
          {icon}
        </span>
      ) : null}
      <span className="grid min-w-0 gap-0.5" data-slot="command-item-content">
        <span className="truncate text-sm leading-5 font-black">
          {children}
        </span>
        {description ? (
          <span className="truncate text-xs leading-5 font-medium text-su-fg-muted">
            {description}
          </span>
        ) : null}
      </span>
    </button>
  )
}

/**
 * Searchable sticker command list for palettes, quick switchers, and menu-like workflows.
 */
const Command = Object.assign(CommandRoot, {
  Group: CommandGroup,
  GroupHeading: CommandGroupHeading,
  Item: CommandItem,
  List: CommandList,
})

export {
  Command,
  CommandGroup,
  CommandGroupHeading,
  CommandItem,
  CommandList,
  type CommandGroupHeadingProps,
  type CommandGroupProps,
  type CommandItemData,
  type CommandItemProps,
  type CommandListProps,
  type CommandProps,
}
