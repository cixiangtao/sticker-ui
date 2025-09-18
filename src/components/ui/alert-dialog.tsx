import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog"
import { cva, type VariantProps } from "class-variance-authority"
import * as React from "react"

import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

/**
 * Builds the sticker alert dialog content className from size and tone options.
 */
const alertDialogContentVariants = cva(
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
        danger: "bg-su-fill-danger",
        default: "bg-su-paper",
        info: "bg-su-fill-info",
        warning: "bg-su-fill-warning",
      },
    },
  },
)

const AlertDialogRoot = AlertDialogPrimitive.Root

/**
 * Opens the alert dialog.
 */
const AlertDialogTrigger = AlertDialogPrimitive.Trigger

/**
 * Portals alert dialog overlay and content to the document body.
 */
const AlertDialogPortal = AlertDialogPrimitive.Portal

/**
 * Props for the sticker alert dialog overlay.
 */
type AlertDialogOverlayProps = React.ComponentPropsWithoutRef<
  typeof AlertDialogPrimitive.Overlay
>

/**
 * Sticker alert dialog scrim.
 */
const AlertDialogOverlay = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Overlay>,
  AlertDialogOverlayProps
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Overlay
    className={cn(
      "fixed inset-0 z-50 bg-su-overlay transition duration-150 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:animate-in data-[state=open]:fade-in-0 motion-reduce:data-[state=closed]:animate-none motion-reduce:data-[state=open]:animate-none",
      className,
    )}
    data-slot="alert-dialog-overlay"
    ref={ref}
    {...props}
  />
))
AlertDialogOverlay.displayName = AlertDialogPrimitive.Overlay.displayName

/**
 * Props for sticker alert dialog content.
 * @remarks Wraps Radix AlertDialog.Content and adds sticker size and tone styling.
 */
interface AlertDialogContentProps
  extends
    React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Content>,
    VariantProps<typeof alertDialogContentVariants> {
  /**
   * Controls alert dialog width and padding.
   * @default "md"
   */
  size?: "lg" | "md" | "sm"
  /**
   * Controls the alert dialog paper tone.
   * @default "default"
   */
  tone?: "danger" | "default" | "info" | "warning"
}

/**
 * Portaled sticker alert dialog panel for high-stakes decisions.
 */
const AlertDialogContent = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Content>,
  AlertDialogContentProps
>(({ children, className, size = "md", tone, ...props }, ref) => (
  <AlertDialogPortal>
    <AlertDialogOverlay />
    <AlertDialogPrimitive.Content
      className={cn(alertDialogContentVariants({ size, tone }), className)}
      data-slot="alert-dialog-content"
      ref={ref}
      {...props}
    >
      {children}
    </AlertDialogPrimitive.Content>
  </AlertDialogPortal>
))
AlertDialogContent.displayName = AlertDialogPrimitive.Content.displayName

/**
 * Header area for alert dialog title and description.
 */
function AlertDialogHeader({
  className,
  ...props
}: React.ComponentProps<"header">) {
  return (
    <header
      className={cn("grid gap-2", className)}
      data-slot="alert-dialog-header"
      {...props}
    />
  )
}

/**
 * Footer area for alert dialog action buttons.
 */
function AlertDialogFooter({
  className,
  ...props
}: React.ComponentProps<"footer">) {
  return (
    <footer
      className={cn(
        "flex flex-col-reverse gap-2 border-t-2 border-su-ink pt-4 sm:flex-row sm:justify-end",
        className,
      )}
      data-slot="alert-dialog-footer"
      {...props}
    />
  )
}

/**
 * Sticker alert dialog title.
 */
const AlertDialogTitle = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Title
    className={cn("m-0 text-xl leading-7 font-black text-su-ink", className)}
    data-slot="alert-dialog-title"
    ref={ref}
    {...props}
  />
))
AlertDialogTitle.displayName = AlertDialogPrimitive.Title.displayName

/**
 * Sticker alert dialog description.
 */
const AlertDialogDescription = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Description
    className={cn(
      "m-0 text-sm leading-6 font-medium text-su-fg-muted",
      className,
    )}
    data-slot="alert-dialog-description"
    ref={ref}
    {...props}
  />
))
AlertDialogDescription.displayName =
  AlertDialogPrimitive.Description.displayName

/**
 * Props for a sticker alert dialog action button.
 */
interface AlertDialogActionProps extends React.ComponentPropsWithoutRef<
  typeof AlertDialogPrimitive.Action
> {
  /**
   * Controls the semantic button color.
   * @default "danger"
   */
  color?: "danger" | "default" | "info" | "secondary" | "success" | "warning"
  /**
   * Controls the button size.
   * @default "md"
   */
  size?: "icon" | "lg" | "md" | "sm"
  /**
   * Controls the button visual structure and emphasis.
   * @default "solid"
   */
  variant?: "dashed" | "filled" | "link" | "outlined" | "solid" | "text"
}

/**
 * Confirms the alert dialog decision.
 */
const AlertDialogAction = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Action>,
  AlertDialogActionProps
>(
  (
    { className, color = "danger", disabled, size = "md", variant, ...props },
    ref,
  ) => (
    <AlertDialogPrimitive.Action
      className={cn(
        buttonVariants({ color, disabled, size, variant }),
        className,
      )}
      data-slot="alert-dialog-action"
      disabled={disabled}
      ref={ref}
      {...props}
    />
  ),
)
AlertDialogAction.displayName = AlertDialogPrimitive.Action.displayName

/**
 * Props for a sticker alert dialog cancel button.
 */
interface AlertDialogCancelProps extends React.ComponentPropsWithoutRef<
  typeof AlertDialogPrimitive.Cancel
> {
  /**
   * Controls the semantic button color.
   * @default "default"
   */
  color?: "danger" | "default" | "info" | "secondary" | "success" | "warning"
  /**
   * Controls the button size.
   * @default "md"
   */
  size?: "icon" | "lg" | "md" | "sm"
  /**
   * Controls the button visual structure and emphasis.
   * @default "outlined"
   */
  variant?: "dashed" | "filled" | "link" | "outlined" | "solid" | "text"
}

/**
 * Cancels the alert dialog decision.
 */
const AlertDialogCancel = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Cancel>,
  AlertDialogCancelProps
>(
  (
    { className, color = "default", disabled, size = "md", variant, ...props },
    ref,
  ) => (
    <AlertDialogPrimitive.Cancel
      className={cn(
        buttonVariants({
          color,
          disabled,
          size,
          variant: variant ?? "outlined",
        }),
        className,
      )}
      data-slot="alert-dialog-cancel"
      disabled={disabled}
      ref={ref}
      {...props}
    />
  ),
)
AlertDialogCancel.displayName = AlertDialogPrimitive.Cancel.displayName

/**
 * Sticker alert dialog root powered by Radix AlertDialog.
 */
const AlertDialog = Object.assign(AlertDialogRoot, {
  Action: AlertDialogAction,
  Cancel: AlertDialogCancel,
  Content: AlertDialogContent,
  Description: AlertDialogDescription,
  Footer: AlertDialogFooter,
  Header: AlertDialogHeader,
  Overlay: AlertDialogOverlay,
  Portal: AlertDialogPortal,
  Title: AlertDialogTitle,
  Trigger: AlertDialogTrigger,
})

export {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  AlertDialogPortal,
  AlertDialogTitle,
  AlertDialogTrigger,
  alertDialogContentVariants,
  type AlertDialogActionProps,
  type AlertDialogCancelProps,
  type AlertDialogContentProps,
  type AlertDialogOverlayProps,
}
