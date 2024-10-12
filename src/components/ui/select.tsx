import * as SelectPrimitive from "@radix-ui/react-select"
import { Check, ChevronDown, ChevronUp } from "lucide-react"
import * as React from "react"

import { inputVariants } from "@/components/ui/input"
import { cn } from "@/lib/utils"

type SelectSize = "lg" | "md" | "sm"
type SelectTone =
  | "danger"
  | "default"
  | "info"
  | "secondary"
  | "success"
  | "warning"
type SelectVariant = "filled" | "outlined" | "quiet"
type SelectChangeHandler = (value: string) => void

interface SelectContextState {
  describedBy?: string
  id?: string
  invalid?: React.AriaAttributes["aria-invalid"]
  size: SelectSize
  tone: SelectTone
  variant: SelectVariant
}

interface SelectVariantOptions {
  className?: string
  size?: SelectSize
  tone?: SelectTone
  variant?: SelectVariant
}

const SelectContext = React.createContext<SelectContextState>({
  size: "md",
  tone: "default",
  variant: "outlined",
})

const selectSizeClassNames = {
  lg: {
    icon: "size-4",
    item: "min-h-11 py-2.5 text-base",
    trigger: "pr-3",
  },
  md: {
    icon: "size-3.5",
    item: "min-h-10 py-2 text-sm",
    trigger: "pr-2.5",
  },
  sm: {
    icon: "size-3",
    item: "min-h-9 py-1.5 text-xs",
    trigger: "pr-2",
  },
} satisfies Record<
  SelectSize,
  {
    icon: string
    item: string
    trigger: string
  }
>

/**
 * Builds the sticker select trigger className from input variants and Radix select states.
 */
const selectVariants = ({
  className,
  size = "md",
  tone = "default",
  variant = "outlined",
}: SelectVariantOptions = {}) =>
  cn(
    inputVariants({ size, tone, variant }),
    "cursor-pointer items-center justify-between gap-2 text-left data-[placeholder]:text-text-placeholder data-[state=open]:shadow-sticker-md data-[state=open]:ring-[2px] data-[state=open]:ring-ring/65 [&>span]:truncate",
    selectSizeClassNames[size].trigger,
    className,
  )

/**
 * Props for the sticker select root.
 * @remarks Wraps Radix Select.Root and keeps `onChange(value)` as a Form.Item-friendly alias for `onValueChange`.
 */
interface SelectProps extends Omit<
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Root>,
  "onValueChange"
> {
  /**
   * Describes the trigger when used inside Form.Item.
   */
  "aria-describedby"?: string
  /**
   * Marks the trigger invalid when used inside Form.Item.
   */
  "aria-invalid"?: React.AriaAttributes["aria-invalid"]
  /**
   * Gives the trigger a stable id when used with Label.
   */
  id?: string
  /**
   * Runs when the selected value changes.
   * @remarks Receives the next string value. This mirrors the project form trigger convention.
   */
  onChange?: SelectChangeHandler
  /**
   * Runs when the selected value changes.
   */
  onValueChange?: SelectChangeHandler
  /**
   * Controls the select trigger height, radius, item spacing, and text size.
   * @default "md"
   */
  size?: SelectSize
  /**
   * Controls the select semantic paper tone.
   * @default "default"
   */
  tone?: SelectTone
  /**
   * Controls the select trigger border and fill emphasis.
   * @default "outlined"
   */
  variant?: SelectVariant
}

/**
 * Sticker select root powered by Radix Select.
 */
function Select({
  "aria-describedby": describedBy,
  "aria-invalid": invalid,
  children,
  id,
  onChange,
  onValueChange,
  size = "md",
  tone = "default",
  variant = "outlined",
  ...props
}: SelectProps) {
  const contextValue = React.useMemo<SelectContextState>(
    () => ({
      describedBy,
      id,
      invalid,
      size,
      tone,
      variant,
    }),
    [describedBy, id, invalid, size, tone, variant],
  )

  return (
    <SelectContext.Provider value={contextValue}>
      <SelectPrimitive.Root
        onValueChange={(value) => {
          if (value === "") {
            return
          }

          onValueChange?.(value)
          onChange?.(value)
        }}
        {...props}
      >
        {children}
      </SelectPrimitive.Root>
    </SelectContext.Provider>
  )
}

/**
 * Displays the currently selected item text or placeholder.
 */
const SelectValue = SelectPrimitive.Value

/**
 * Groups related select items.
 */
const SelectGroup = SelectPrimitive.Group

/**
 * Labels a group of select items.
 */
const SelectLabel = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Label
    className={cn(
      "px-3 py-2 text-xs font-black text-text-muted uppercase",
      className,
    )}
    data-slot="select-label"
    ref={ref}
    {...props}
  />
))
SelectLabel.displayName = SelectPrimitive.Label.displayName

/**
 * Opens the sticker select content.
 */
const SelectTrigger = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>
>(({ children, className, id, ...props }, ref) => {
  const context = React.useContext(SelectContext)

  return (
    <SelectPrimitive.Trigger
      aria-describedby={props["aria-describedby"] ?? context.describedBy}
      aria-invalid={props["aria-invalid"] ?? context.invalid}
      className={cn(
        selectVariants({
          size: context.size,
          tone: context.tone,
          variant: context.variant,
        }),
        "group",
        className,
      )}
      data-slot="select-trigger"
      id={id ?? context.id}
      ref={ref}
      {...props}
    >
      {children}
      <SelectPrimitive.Icon asChild>
        <ChevronDown
          aria-hidden="true"
          className={cn(
            "relative shrink-0 text-ink/75 transition group-data-[state=open]:rotate-180",
            selectSizeClassNames[context.size].icon,
          )}
          data-slot="select-indicator"
        />
      </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
  )
})
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName

/**
 * Scrolls the select content upward when items overflow.
 */
const SelectScrollUpButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollUpButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollUpButton>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollUpButton
    className={cn(
      "flex h-7 cursor-default items-center justify-center bg-fill-warning text-ink",
      className,
    )}
    data-slot="select-scroll-up-button"
    ref={ref}
    {...props}
  >
    <ChevronUp aria-hidden="true" className="size-4" />
  </SelectPrimitive.ScrollUpButton>
))
SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName

/**
 * Scrolls the select content downward when items overflow.
 */
const SelectScrollDownButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollDownButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollDownButton>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollDownButton
    className={cn(
      "flex h-7 cursor-default items-center justify-center bg-fill-warning text-ink",
      className,
    )}
    data-slot="select-scroll-down-button"
    ref={ref}
    {...props}
  >
    <ChevronDown aria-hidden="true" className="size-4" />
  </SelectPrimitive.ScrollDownButton>
))
SelectScrollDownButton.displayName =
  SelectPrimitive.ScrollDownButton.displayName

/**
 * Portaled sticker select dropdown content.
 */
const SelectContent = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>
>(
  (
    { children, className, position = "popper", sideOffset = 8, ...props },
    ref,
  ) => (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Content
        className={cn(
          "relative z-50 max-h-72 min-w-36 overflow-hidden rounded-sticker-xl border-2 border-ink bg-surface text-ink shadow-sticker-lg",
          "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
          position === "popper" &&
            "w-[var(--radix-select-trigger-width)] min-w-[var(--radix-select-trigger-width)]",
          className,
        )}
        data-slot="select-content"
        position={position}
        ref={ref}
        sideOffset={sideOffset}
        {...props}
      >
        <SelectScrollUpButton />
        <SelectPrimitive.Viewport className="p-1" data-slot="select-viewport">
          {children}
        </SelectPrimitive.Viewport>
        <SelectScrollDownButton />
      </SelectPrimitive.Content>
    </SelectPrimitive.Portal>
  ),
)
SelectContent.displayName = SelectPrimitive.Content.displayName

/**
 * Selectable sticker menu item.
 */
const SelectItem = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>(({ children, className, ...props }, ref) => {
  const context = React.useContext(SelectContext)

  return (
    <SelectPrimitive.Item
      className={cn(
        "relative flex w-full cursor-default items-center rounded-sticker-md border border-transparent pr-9 pl-3 font-bold text-ink transition duration-150 outline-none select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-45 data-[highlighted]:bg-fill-default-soft data-[state=checked]:bg-fill-info data-[state=checked]:text-text-info",
        selectSizeClassNames[context.size].item,
        className,
      )}
      data-slot="select-item"
      ref={ref}
      {...props}
    >
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
      <SelectPrimitive.ItemIndicator
        className="absolute right-3 inline-flex size-4 items-center justify-center text-ink"
        data-slot="select-item-indicator"
      >
        <Check aria-hidden="true" className="size-4 stroke-[3]" />
      </SelectPrimitive.ItemIndicator>
    </SelectPrimitive.Item>
  )
})
SelectItem.displayName = SelectPrimitive.Item.displayName

/**
 * Separates select item groups.
 */
const SelectSeparator = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Separator
    className={cn("my-1 h-px bg-ink/20", className)}
    data-slot="select-separator"
    ref={ref}
    {...props}
  />
))
SelectSeparator.displayName = SelectPrimitive.Separator.displayName

export {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
  selectVariants,
}
