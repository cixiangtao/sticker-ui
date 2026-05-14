import * as DialogPrimitive from "@radix-ui/react-dialog"
import { cva, type VariantProps } from "class-variance-authority"
import { X } from "lucide-react"
import * as React from "react"

import { cn } from "@/lib/utils"

/**
 * Builds the sticker sheet content className from side, size, and tone options.
 */
const sheetContentVariants = cva(
  "fixed z-50 grid gap-4 overflow-y-auto border-su-ink text-su-ink shadow-su-2xl transition duration-200 outline-none data-[state=closed]:animate-out data-[state=open]:animate-in motion-reduce:data-[state=closed]:animate-none motion-reduce:data-[state=open]:animate-none",
  {
    compoundVariants: [
      {
        class:
          "inset-y-0 right-0 h-dvh border-l-[3px] data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right",
        side: "right",
      },
      {
        class:
          "inset-y-0 left-0 h-dvh border-r-[3px] data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left",
        side: "left",
      },
      {
        class:
          "inset-x-0 top-0 max-h-dvh border-b-[3px] data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
        side: "top",
      },
      {
        class:
          "inset-x-0 bottom-0 max-h-dvh border-t-[3px] data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
        side: "bottom",
      },
      {
        class: "w-full sm:max-w-md",
        side: ["left", "right"],
        size: "md",
      },
      {
        class: "w-full sm:max-w-sm",
        side: ["left", "right"],
        size: "sm",
      },
      {
        class: "w-full sm:max-w-xl",
        side: ["left", "right"],
        size: "lg",
      },
    ],
    defaultVariants: {
      side: "right",
      size: "md",
      tone: "default",
    },
    variants: {
      side: {
        bottom: "",
        left: "",
        right: "",
        top: "",
      },
      size: {
        lg: "p-6",
        md: "p-5",
        sm: "p-4",
      },
      tone: {
        default: "bg-su-paper",
        info: "bg-su-fill-info",
        secondary: "bg-su-fill-secondary",
        warning: "bg-su-fill-warning",
      },
    },
  },
)

function SheetRoot(props: React.ComponentProps<typeof DialogPrimitive.Root>) {
  return <DialogPrimitive.Root {...props} />
}
SheetRoot.displayName = DialogPrimitive.Root.displayName
const SheetTrigger = DialogPrimitive.Trigger
const SheetClose = DialogPrimitive.Close
const SheetPortal = DialogPrimitive.Portal

/**
 * Props for the sticker sheet overlay.
 */
type SheetOverlayProps = React.ComponentPropsWithoutRef<
  typeof DialogPrimitive.Overlay
>

/**
 * Sticker sheet scrim.
 */
const SheetOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  SheetOverlayProps
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    className={cn(
      "fixed inset-0 z-50 bg-su-overlay transition duration-150 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:animate-in data-[state=open]:fade-in-0 motion-reduce:data-[state=closed]:animate-none motion-reduce:data-[state=open]:animate-none",
      className,
    )}
    data-slot="sheet-overlay"
    ref={ref}
    {...props}
  />
))
SheetOverlay.displayName = DialogPrimitive.Overlay.displayName

/**
 * Props for sticker sheet content.
 * @remarks Wraps Radix Dialog.Content and adds drawer side, size, tone, and close button styling.
 */
interface SheetContentProps
  extends
    React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>,
    VariantProps<typeof sheetContentVariants> {
  /**
   * Accessible label for the icon close button.
   * @default "Close sheet"
   */
  closeLabel?: string
  /**
   * Controls which viewport edge the sheet enters from.
   * @default "right"
   */
  side?: "bottom" | "left" | "right" | "top"
  /**
   * Controls sheet padding and width presets.
   * @default "md"
   */
  size?: "lg" | "md" | "sm"
  /**
   * Renders the top-right close button.
   * @default true
   */
  showClose?: boolean
  /**
   * Controls sheet paper tone.
   * @default "default"
   */
  tone?: "default" | "info" | "secondary" | "warning"
}

/**
 * Portaled sticker sheet panel.
 */
const SheetContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  SheetContentProps
>(
  (
    {
      children,
      className,
      closeLabel = "Close sheet",
      side = "right",
      showClose = true,
      size = "md",
      tone = "default",
      ...props
    },
    ref,
  ) => (
    <SheetPortal>
      <SheetOverlay />
      <DialogPrimitive.Content
        className={cn(sheetContentVariants({ side, size, tone }), className)}
        data-side={side}
        data-slot="sheet-content"
        ref={ref}
        {...props}
      >
        {children}
        {showClose ? (
          <SheetClose
            aria-label={closeLabel}
            className="absolute top-4 right-4 inline-flex size-9 cursor-pointer items-center justify-center rounded-su-md border-2 border-su-ink bg-su-surface text-su-ink shadow-su-sm transition duration-150 outline-none hover:-translate-y-0.5 hover:shadow-su-md focus-visible:ring-[2px] focus-visible:ring-su-ring/65 active:translate-x-0.5 active:translate-y-0.5 active:shadow-su-xs"
          >
            <X aria-hidden="true" className="size-4 stroke-[3]" />
          </SheetClose>
        ) : null}
      </DialogPrimitive.Content>
    </SheetPortal>
  ),
)
SheetContent.displayName = DialogPrimitive.Content.displayName

/**
 * Sheet header area.
 */
function SheetHeader({ className, ...props }: React.ComponentProps<"header">) {
  return (
    <header
      className={cn("grid gap-2 pr-10", className)}
      data-slot="sheet-header"
      {...props}
    />
  )
}

/**
 * Sheet footer action area.
 */
function SheetFooter({ className, ...props }: React.ComponentProps<"footer">) {
  return (
    <footer
      className={cn(
        "mt-auto flex flex-col-reverse gap-2 border-t-2 border-su-ink pt-4 sm:flex-row sm:justify-end",
        className,
      )}
      data-slot="sheet-footer"
      {...props}
    />
  )
}

/**
 * Sticker sheet title.
 */
const SheetTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    className={cn("m-0 text-xl leading-7 font-black text-su-ink", className)}
    data-slot="sheet-title"
    ref={ref}
    {...props}
  />
))
SheetTitle.displayName = DialogPrimitive.Title.displayName

/**
 * Sticker sheet description.
 */
const SheetDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    className={cn(
      "m-0 text-sm leading-6 font-medium text-su-fg-muted",
      className,
    )}
    data-slot="sheet-description"
    ref={ref}
    {...props}
  />
))
SheetDescription.displayName = DialogPrimitive.Description.displayName

/**
 * Sticker drawer panel powered by Radix Dialog.
 */
const Sheet = Object.assign(SheetRoot, {
  Close: SheetClose,
  Content: SheetContent,
  Description: SheetDescription,
  Footer: SheetFooter,
  Header: SheetHeader,
  Overlay: SheetOverlay,
  Portal: SheetPortal,
  Title: SheetTitle,
  Trigger: SheetTrigger,
})

export {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetOverlay,
  SheetPortal,
  SheetTitle,
  SheetTrigger,
  sheetContentVariants,
  type SheetContentProps,
  type SheetOverlayProps,
}
