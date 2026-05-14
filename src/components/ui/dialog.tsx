import * as DialogPrimitive from "@radix-ui/react-dialog"
import { cva, type VariantProps } from "class-variance-authority"
import { X } from "lucide-react"
import * as React from "react"

import { cn } from "@/lib/utils"

/**
 * Builds the sticker dialog content className from size and tone options.
 */
const dialogContentVariants = cva(
  "fixed top-1/2 left-1/2 z-50 grid max-h-[calc(100dvh-2rem)] w-[calc(100vw-2rem)] -translate-x-1/2 -translate-y-1/2 gap-4 overflow-y-auto rounded-su-panel border-[3px] border-su-ink text-su-ink shadow-su-2xl transition duration-150 outline-none data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 motion-reduce:data-[state=closed]:animate-none motion-reduce:data-[state=open]:animate-none",
  {
    defaultVariants: {
      size: "md",
      tone: "default",
    },
    variants: {
      size: {
        lg: "max-w-2xl p-5 sm:p-6",
        md: "max-w-lg p-5",
        sm: "max-w-md p-4",
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

function getDialogActionClassName(disabled?: boolean) {
  return cn("cursor-pointer", disabled && "cursor-not-allowed opacity-55")
}

function DialogRoot(props: React.ComponentProps<typeof DialogPrimitive.Root>) {
  return <DialogPrimitive.Root {...props} />
}
DialogRoot.displayName = DialogPrimitive.Root.displayName

/**
 * Opens the dialog.
 */
const DialogTrigger = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Trigger>
>(({ className, disabled, ...props }, ref) => (
  <DialogPrimitive.Trigger
    className={cn(getDialogActionClassName(disabled), className)}
    data-slot="dialog-trigger"
    disabled={disabled}
    ref={ref}
    {...props}
  />
))
DialogTrigger.displayName = DialogPrimitive.Trigger.displayName

/**
 * Closes the dialog when activated.
 */
const DialogClose = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Close>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Close>
>(({ className, disabled, ...props }, ref) => (
  <DialogPrimitive.Close
    className={cn(getDialogActionClassName(disabled), className)}
    data-slot="dialog-close"
    disabled={disabled}
    ref={ref}
    {...props}
  />
))
DialogClose.displayName = DialogPrimitive.Close.displayName

/**
 * Portals dialog overlay and content to the document body.
 */
const DialogPortal = DialogPrimitive.Portal

/**
 * Props for the sticker dialog overlay.
 */
type DialogOverlayProps = React.ComponentPropsWithoutRef<
  typeof DialogPrimitive.Overlay
>

/**
 * Sticker dialog scrim.
 */
const DialogOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  DialogOverlayProps
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    className={cn(
      "fixed inset-0 z-50 bg-su-overlay transition duration-150 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:animate-in data-[state=open]:fade-in-0 motion-reduce:data-[state=closed]:animate-none motion-reduce:data-[state=open]:animate-none",
      className,
    )}
    data-slot="dialog-overlay"
    ref={ref}
    {...props}
  />
))
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName

/**
 * Props for sticker dialog content.
 * @remarks Wraps Radix Dialog.Content and adds sticker size, tone, and close button styling.
 */
interface DialogContentProps
  extends
    React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>,
    VariantProps<typeof dialogContentVariants> {
  /**
   * Accessible label for the icon close button.
   * @default "Close dialog"
   */
  closeLabel?: string
  /**
   * Controls dialog width and padding.
   * @default "md"
   */
  size?: "lg" | "md" | "sm"
  /**
   * Renders the top-right close button.
   * @default true
   */
  showClose?: boolean
  /**
   * Controls the dialog paper tone.
   * @default "default"
   */
  tone?: "default" | "info" | "secondary" | "warning"
}

/**
 * Portaled sticker dialog panel.
 */
const DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  DialogContentProps
>(
  (
    {
      children,
      className,
      closeLabel = "Close dialog",
      showClose = true,
      size = "md",
      tone = "default",
      ...props
    },
    ref,
  ) => (
    <DialogPortal>
      <DialogOverlay />
      <DialogPrimitive.Content
        className={cn(dialogContentVariants({ size, tone }), className)}
        data-slot="dialog-content"
        ref={ref}
        {...props}
      >
        {children}
        {showClose ? (
          <DialogClose
            aria-label={closeLabel}
            className="absolute top-4 right-4 inline-flex size-9 cursor-pointer items-center justify-center rounded-su-md border-2 border-su-ink bg-su-surface text-su-ink shadow-su-sm transition duration-150 outline-none hover:-translate-y-0.5 hover:shadow-su-md focus-visible:ring-[2px] focus-visible:ring-su-ring/65 active:translate-x-0.5 active:translate-y-0.5 active:shadow-su-xs"
          >
            <X aria-hidden="true" className="size-4 stroke-[3]" />
          </DialogClose>
        ) : null}
      </DialogPrimitive.Content>
    </DialogPortal>
  ),
)
DialogContent.displayName = DialogPrimitive.Content.displayName

/**
 * Header area for dialog title and description.
 */
function DialogHeader({ className, ...props }: React.ComponentProps<"header">) {
  return (
    <header
      className={cn("grid gap-2 pr-10", className)}
      data-slot="dialog-header"
      {...props}
    />
  )
}

/**
 * Footer area for dialog actions.
 */
function DialogFooter({ className, ...props }: React.ComponentProps<"footer">) {
  return (
    <footer
      className={cn(
        "flex flex-col-reverse gap-2 border-t-2 border-su-ink pt-4 sm:flex-row sm:justify-end",
        className,
      )}
      data-slot="dialog-footer"
      {...props}
    />
  )
}

/**
 * Sticker dialog title.
 */
const DialogTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    className={cn("m-0 text-xl leading-7 font-black text-su-ink", className)}
    data-slot="dialog-title"
    ref={ref}
    {...props}
  />
))
DialogTitle.displayName = DialogPrimitive.Title.displayName

/**
 * Sticker dialog description.
 */
const DialogDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    className={cn(
      "m-0 text-sm leading-6 font-medium text-su-fg-muted",
      className,
    )}
    data-slot="dialog-description"
    ref={ref}
    {...props}
  />
))
DialogDescription.displayName = DialogPrimitive.Description.displayName

/**
 * Sticker dialog root powered by Radix Dialog.
 */
const Dialog = Object.assign(DialogRoot, {
  Close: DialogClose,
  Content: DialogContent,
  Description: DialogDescription,
  Footer: DialogFooter,
  Header: DialogHeader,
  Overlay: DialogOverlay,
  Portal: DialogPortal,
  Title: DialogTitle,
  Trigger: DialogTrigger,
})

export {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
  dialogContentVariants,
  type DialogContentProps,
  type DialogOverlayProps,
}
