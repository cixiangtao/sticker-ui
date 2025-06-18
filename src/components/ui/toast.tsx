import { cva } from "class-variance-authority"
import * as React from "react"
import {
  Toaster as SonnerToaster,
  toast as sonnerToast,
  type ExternalToast,
  type ToastClassnames,
  type ToasterProps as SonnerToasterProps,
} from "sonner"

import { cn } from "@/lib/utils"

/**
 * Semantic tone options for toast feedback.
 */
type ToastTone = "default" | "error" | "info" | "success" | "warning"

/**
 * Size options for toast padding and radius.
 */
type ToastSize = "lg" | "md" | "sm"

/**
 * Window edge placement options for the Toaster viewport.
 */
type ToastPlacement =
  | "bottom-center"
  | "bottom-left"
  | "bottom-right"
  | "top-center"
  | "top-left"
  | "top-right"

/**
 * Stable id returned from toast commands.
 */
type ToastId = number | string

/**
 * Scope id used to pair toast commands with a specific Toaster.
 */
type ToasterId = string

const toastRootClassName = [
  "group pointer-events-auto relative grid w-full grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-x-2 gap-y-1 overflow-visible border-2 border-su-ink text-su-ink shadow-su-sm transition duration-200 outline-none [&[data-type=error]_[data-icon]]:text-su-fg-danger [&[data-type=info]_[data-icon]]:text-su-fg-info [&[data-type=loading]_[data-icon]]:text-su-fg-info [&[data-type=loading]_.sonner-loading-bar]:bg-su-fg-info [&[data-type=success]_[data-icon]]:text-su-fg-success [&[data-type=warning]_[data-icon]]:text-su-fg-warning",
  "[&[data-expanded=false][data-front=false]>*]:opacity-0",
].join(" ")

const toasterHoverAreaClassName = [
  "overflow-visible",
  "[&:has([data-expanded=true])::before]:absolute",
  "[&:has([data-expanded=true])::before]:-left-3",
  "[&:has([data-expanded=true])::before]:h-[var(--sticker-toast-hover-height)]",
  "[&:has([data-expanded=true])::before]:w-[calc(var(--width)+1.5rem)]",
  "[&:has([data-expanded=true])::before]:content-['']",
  "[&:has([data-expanded=true])::before]:pointer-events-auto",
  "[&[data-y-position=bottom]:has([data-expanded=true])::before]:bottom-0",
  "[&[data-y-position=top]:has([data-expanded=true])::before]:top-0",
].join(" ")

const DEFAULT_VISIBLE_TOASTS = 3

const toastBaseClassName = `${toastRootClassName} border-l-[5px]`

const toastSizeClassNames = {
  lg: "rounded-su-xl px-4 py-3 pr-11",
  md: "rounded-su-lg px-3.5 py-2.5 pr-10",
  sm: "rounded-su-md px-3 py-2 pr-9",
} satisfies Record<ToastSize, string>

const toastRootToneClassNames = {
  default: "[&&&]:border-l-su-ink [&&&]:bg-su-fill-default-soft",
  error: "[&&&]:border-l-su-fg-danger [&&&]:bg-su-fill-danger",
  info: "[&&&]:border-l-su-fg-info [&&&]:bg-su-fill-info",
  success: "[&&&]:border-l-su-fg-success [&&&]:bg-su-fill-success",
  warning: "[&&&]:border-l-su-fg-warning [&&&]:bg-su-fill-warning",
} satisfies Record<ToastTone, string>

const toastDefaultRootToneClassNames = {
  default:
    "[&[data-type=default]]:border-l-su-ink [&[data-type=default]]:bg-su-fill-default-soft",
  error:
    "[&[data-type=default]]:border-l-su-fg-danger [&[data-type=default]]:bg-su-fill-danger",
  info: "[&[data-type=default]]:border-l-su-fg-info [&[data-type=default]]:bg-su-fill-info",
  success:
    "[&[data-type=default]]:border-l-su-fg-success [&[data-type=default]]:bg-su-fill-success",
  warning:
    "[&[data-type=default]]:border-l-su-fg-warning [&[data-type=default]]:bg-su-fill-warning",
} satisfies Record<ToastTone, string>

const toastToneClassNames = {
  default:
    "[&:not([data-type])_.sonner-loading-bar]:bg-su-ink [&:not([data-type])_[data-icon]]:text-su-ink [&[data-type=default]_.sonner-loading-bar]:bg-su-ink [&[data-type=default]_[data-icon]]:text-su-ink",
  error:
    "[&:not([data-type])_.sonner-loading-bar]:bg-su-fg-danger [&:not([data-type])_[data-icon]]:text-su-fg-danger [&[data-type=default]_.sonner-loading-bar]:bg-su-fg-danger [&[data-type=default]_[data-icon]]:text-su-fg-danger",
  info: "[&:not([data-type])_.sonner-loading-bar]:bg-su-fg-info [&:not([data-type])_[data-icon]]:text-su-fg-info [&[data-type=default]_.sonner-loading-bar]:bg-su-fg-info [&[data-type=default]_[data-icon]]:text-su-fg-info",
  success:
    "[&:not([data-type])_.sonner-loading-bar]:bg-su-fg-success [&:not([data-type])_[data-icon]]:text-su-fg-success [&[data-type=default]_.sonner-loading-bar]:bg-su-fg-success [&[data-type=default]_[data-icon]]:text-su-fg-success",
  warning:
    "[&:not([data-type])_.sonner-loading-bar]:bg-su-fg-warning [&:not([data-type])_[data-icon]]:text-su-fg-warning [&[data-type=default]_.sonner-loading-bar]:bg-su-fg-warning [&[data-type=default]_[data-icon]]:text-su-fg-warning",
} satisfies Record<ToastTone, string>

const toastDefaultToneClassNames = {
  default: "[&_.sonner-loading-bar]:bg-su-ink [&_[data-icon]]:text-su-ink",
  error:
    "[&_.sonner-loading-bar]:bg-su-fg-danger [&_[data-icon]]:text-su-fg-danger",
  info: "[&_.sonner-loading-bar]:bg-su-fg-info [&_[data-icon]]:text-su-fg-info",
  success:
    "[&_.sonner-loading-bar]:bg-su-fg-success [&_[data-icon]]:text-su-fg-success",
  warning:
    "[&_.sonner-loading-bar]:bg-su-fg-warning [&_[data-icon]]:text-su-fg-warning",
} satisfies Record<ToastTone, string>

/**
 * Builds the sticker toast item className from tone and size options.
 */
const toastVariants = cva(toastBaseClassName, {
  defaultVariants: {
    size: "md",
    tone: "default",
  },
  variants: {
    size: toastSizeClassNames,
    tone: {
      default:
        "[&_.sonner-loading-bar]:bg-su-ink [&_[data-icon]]:text-su-ink [&&&]:border-l-su-ink [&&&]:bg-su-fill-default-soft",
      error:
        "[&_.sonner-loading-bar]:bg-su-fg-danger [&_[data-icon]]:text-su-fg-danger [&&&]:border-l-su-fg-danger [&&&]:bg-su-fill-danger",
      info: "[&_.sonner-loading-bar]:bg-su-fg-info [&_[data-icon]]:text-su-fg-info [&&&]:border-l-su-fg-info [&&&]:bg-su-fill-info",
      success:
        "[&_.sonner-loading-bar]:bg-su-fg-success [&_[data-icon]]:text-su-fg-success [&&&]:border-l-su-fg-success [&&&]:bg-su-fill-success",
      warning:
        "[&_.sonner-loading-bar]:bg-su-fg-warning [&_[data-icon]]:text-su-fg-warning [&&&]:border-l-su-fg-warning [&&&]:bg-su-fill-warning",
    },
  },
})

/**
 * Builds the fixed sticker toast viewport className from placement options.
 */
const toastViewportVariants = cva(
  "fixed z-50 flex max-h-dvh w-full max-w-[min(calc(100vw-2rem),24rem)] flex-col gap-1.5 p-4 outline-none",
  {
    defaultVariants: {
      placement: "top-right",
    },
    variants: {
      placement: {
        "bottom-center": "bottom-0 left-1/2 -translate-x-1/2",
        "bottom-left": "bottom-0 left-0",
        "bottom-right": "right-0 bottom-0",
        "top-center": "top-0 left-1/2 -translate-x-1/2",
        "top-left": "top-0 left-0",
        "top-right": "top-0 right-0",
      },
    },
  },
)

/**
 * Action rendered inside a command-created toast.
 */
interface ToastAction {
  /**
   * Visible action label.
   */
  label: React.ReactNode
  /**
   * Called when the action is clicked.
   */
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
  /**
   * Inline styles for this action button.
   */
  style?: React.CSSProperties
}

/**
 * Options accepted by toast commands.
 */
interface ToastOptions extends Omit<
  ExternalToast,
  "action" | "cancel" | "classNames" | "closeButton" | "position"
> {
  /**
   * Optional primary action button.
   */
  action?: React.ReactNode | ToastAction
  /**
   * Optional secondary cancel action.
   */
  cancel?: React.ReactNode | ToastAction
  /**
   * Custom classNames passed to Sonner slots for this toast.
   */
  classNames?: Partial<ToastClassnames>
  /**
   * Window edge placement for this toast.
   */
  placement?: ToastPlacement
  /**
   * Renders the close button.
   * @default false
   */
  showClose?: boolean
  /**
   * Per-toast size override.
   */
  size?: ToastSize
  /**
   * Per-toast tone override.
   */
  tone?: ToastTone
}

/**
 * Options accepted by toast.update.
 */
interface ToastUpdateOptions extends Omit<ToastOptions, "id"> {
  /**
   * Replacement title for the existing toast.
   */
  title?: React.ReactNode
}

type SonnerToastOptions = NonNullable<SonnerToasterProps["toastOptions"]>

/**
 * Default options applied by Toaster to every rendered toast.
 */
interface ToasterToastOptions extends Omit<
  SonnerToastOptions,
  "className" | "classNames" | "closeButton" | "descriptionClassName"
> {
  /**
   * Custom className passed to every toast item.
   */
  className?: string
  /**
   * Custom classNames passed to Sonner slots.
   */
  classNames?: Partial<ToastClassnames>
  /**
   * Custom className passed to every toast description.
   */
  descriptionClassName?: string
  /**
   * Renders the close button for every toast.
   * @default false
   */
  showClose?: boolean
  /**
   * Default toast size.
   * @default "md"
   */
  size?: ToastSize
  /**
   * Default toast tone for neutral toasts.
   * @default "default"
   */
  tone?: ToastTone
}

/**
 * Props for the sticker-styled Sonner toaster host.
 */
interface ToasterProps extends Omit<
  SonnerToasterProps,
  "expand" | "gap" | "id" | "position" | "toastOptions"
> {
  /**
   * Uses Sonner's collapsed stack with a parent hover area that wraps visible toasts.
   * Set to true to keep stacked toasts expanded.
   * @default false
   */
  expand?: boolean
  /**
   * Space between expanded toasts.
   * @default 6
   */
  gap?: number
  /**
   * Window edge placement for the toast stack.
   * @default "top-right"
   */
  placement?: ToastPlacement
  /**
   * Default options applied to every toast rendered by this host.
   */
  toastOptions?: ToasterToastOptions
  /**
   * Scope id used to route toast commands to this host.
   */
  toasterId?: ToasterId
}

type ToastPromiseOptions<Data = unknown> = Parameters<
  typeof sonnerToast.promise<Data>
>[1]

function getToastClassName({
  className,
  size = "md",
  tone = "default",
}: {
  className?: string
  size?: ToastSize
  tone?: ToastTone
}) {
  return cn(toastVariants({ size, tone }), className)
}

function createToastClassNames({
  classNames,
  size,
  tone,
}: {
  classNames?: Partial<ToastClassnames>
  size: ToastSize
  tone: ToastTone
}): ToastClassnames {
  const defaults: ToastClassnames = {
    actionButton:
      "col-start-3 row-start-1 inline-flex min-h-7 items-center justify-center self-center rounded-su-sm border-2 border-su-ink bg-su-paper px-2.5 py-1 text-xs font-extrabold text-su-ink shadow-su-xs transition hover:-translate-y-0.5 hover:shadow-su-sm focus-visible:ring-2 focus-visible:ring-su-ink focus-visible:ring-offset-2 focus-visible:ring-offset-su-paper focus-visible:outline-none active:translate-x-0.5 active:translate-y-0.5 active:shadow-none disabled:pointer-events-none disabled:opacity-50",
    cancelButton:
      "col-start-3 row-start-2 inline-flex min-h-7 items-center justify-center self-center rounded-su-sm border-2 border-su-ink bg-su-fill-secondary px-2.5 py-1 text-xs font-extrabold text-su-ink shadow-su-xs transition hover:-translate-y-0.5 hover:shadow-su-sm focus-visible:ring-2 focus-visible:ring-su-ink focus-visible:ring-offset-2 focus-visible:ring-offset-su-paper focus-visible:outline-none active:translate-x-0.5 active:translate-y-0.5 active:shadow-none disabled:pointer-events-none disabled:opacity-50",
    closeButton:
      "absolute top-2 right-2 inline-flex size-6 items-center justify-center rounded-full border-2 border-su-ink bg-su-paper text-su-ink opacity-70 shadow-su-xs transition hover:-translate-y-0.5 hover:bg-su-fill-danger hover:opacity-100 focus-visible:ring-2 focus-visible:ring-su-ink focus-visible:ring-offset-2 focus-visible:ring-offset-su-paper focus-visible:outline-none active:translate-x-0.5 active:translate-y-0.5 active:shadow-none",
    content: "col-start-2 grid min-w-0 gap-0.5",
    default: cn(
      toastDefaultRootToneClassNames[tone],
      toastDefaultToneClassNames[tone],
    ),
    description: "col-start-1 text-xs leading-5 text-su-fg-muted",
    error: cn(toastRootToneClassNames.error, toastToneClassNames.error),
    icon: "relative col-start-1 row-start-1 row-span-2 flex size-4 shrink-0 items-center justify-center text-su-ink",
    info: cn(toastRootToneClassNames.info, toastToneClassNames.info),
    loader: "[--gray11:var(--color-su-fg-info)]",
    loading: cn(toastRootToneClassNames.info, toastToneClassNames.info),
    success: cn(toastRootToneClassNames.success, toastToneClassNames.success),
    title: "col-start-1 text-sm leading-5 font-extrabold text-su-ink",
    toast: cn(toastBaseClassName, toastSizeClassNames[size]),
    warning: cn(toastRootToneClassNames.warning, toastToneClassNames.warning),
  }

  return Object.fromEntries(
    Object.entries(defaults).map(([key, value]) => [
      key,
      cn(value, classNames?.[key as keyof ToastClassnames]),
    ]),
  ) as ToastClassnames
}

function normalizeAction(
  action: React.ReactNode | ToastAction | undefined,
): ExternalToast["action"] {
  if (!action || React.isValidElement(action)) {
    return action
  }

  if (typeof action === "object" && "label" in action) {
    return {
      actionButtonStyle: action.style,
      label: action.label,
      onClick: action.onClick ?? (() => undefined),
    }
  }

  return action
}

function normalizeToastOptions(
  options: ToastOptions = {},
  toneOverride?: ToastTone,
): ExternalToast {
  const {
    action,
    cancel,
    className,
    placement,
    showClose,
    size,
    tone,
    ...sonnerOptions
  } = options
  const resolvedTone = toneOverride ?? tone ?? "default"
  const needsPerToastClassName = Boolean(size) || Boolean(tone)

  return {
    ...sonnerOptions,
    action: normalizeAction(action),
    cancel: normalizeAction(cancel),
    className: cn(
      needsPerToastClassName
        ? getToastClassName({ size, tone: resolvedTone })
        : undefined,
      className,
    ),
    closeButton: showClose,
    position: placement,
  }
}

function showToast(
  title: React.ReactNode,
  options?: ToastOptions,
  toneOverride?: ToastTone,
) {
  const tone = toneOverride ?? options?.tone ?? "default"
  const normalizedOptions = normalizeToastOptions(options, tone)

  if (tone === "error") {
    return sonnerToast.error(title, normalizedOptions)
  }

  if (tone === "info") {
    return sonnerToast.info(title, normalizedOptions)
  }

  if (tone === "success") {
    return sonnerToast.success(title, normalizedOptions)
  }

  if (tone === "warning") {
    return sonnerToast.warning(title, normalizedOptions)
  }

  return sonnerToast(title, normalizedOptions)
}

function showLoadingToast(title: React.ReactNode, options?: ToastOptions) {
  return sonnerToast.loading(title, normalizeToastOptions(options, "info"))
}

/**
 * Sticker-styled Sonner host. Render once near the app root, then create short feedback with toast().
 */
function Toaster({
  className,
  closeButton = false,
  duration = 4200,
  expand = false,
  gap = 6,
  placement = "top-right",
  style,
  toasterId,
  toastOptions,
  visibleToasts = DEFAULT_VISIBLE_TOASTS,
  ...props
}: ToasterProps) {
  const {
    className: toastClassName,
    classNames,
    descriptionClassName,
    showClose,
    size = "md",
    tone = "default",
    ...sonnerToastOptions
  } = toastOptions ?? {}
  const hoverVisibleToasts = Math.max(1, visibleToasts)
  const hoverGapCount = Math.max(0, hoverVisibleToasts - 1)
  const toasterStyle = {
    "--sticker-toast-hover-height": `min(calc(100dvh - 2rem), calc((var(--front-toast-height) * ${hoverVisibleToasts}) + (var(--gap) * ${hoverGapCount}) + 1rem))`,
    ...style,
  } as React.CSSProperties

  return (
    <SonnerToaster
      className={cn(toasterHoverAreaClassName, className)}
      closeButton={closeButton}
      duration={duration}
      expand={expand}
      gap={gap}
      id={toasterId}
      position={placement}
      style={toasterStyle}
      toastOptions={{
        ...sonnerToastOptions,
        className: toastClassName,
        classNames: createToastClassNames({ classNames, size, tone }),
        closeButton: showClose,
        descriptionClassName,
        unstyled: true,
      }}
      visibleToasts={visibleToasts}
      {...props}
    />
  )
}

/**
 * Command-style toast API backed by Sonner.
 */
const toast = Object.assign(
  (title: React.ReactNode, options?: ToastOptions) => showToast(title, options),
  {
    custom: sonnerToast.custom,
    dismiss: sonnerToast.dismiss,
    error: (title: React.ReactNode, options?: ToastOptions) =>
      showToast(title, options, "error"),
    info: (title: React.ReactNode, options?: ToastOptions) =>
      showToast(title, options, "info"),
    loading: (title: React.ReactNode, options?: ToastOptions) =>
      showLoadingToast(title, options),
    promise: <Data,>(
      promise: Promise<Data> | (() => Promise<Data>),
      options?: ToastPromiseOptions<Data>,
    ) => sonnerToast.promise(promise, options),
    success: (title: React.ReactNode, options?: ToastOptions) =>
      showToast(title, options, "success"),
    update: (id: ToastId, options: ToastUpdateOptions) =>
      showToast(options.title ?? "", { ...options, id }, options.tone),
    warning: (title: React.ReactNode, options?: ToastOptions) =>
      showToast(title, options, "warning"),
  },
)

export {
  Toaster,
  toast,
  toastVariants,
  toastViewportVariants,
  type ToastAction,
  type ToastId,
  type ToastOptions,
  type ToastPlacement,
  type ToastPromiseOptions,
  type ToastSize,
  type ToastTone,
  type ToastUpdateOptions,
  type ToasterId,
  type ToasterProps,
  type ToasterToastOptions,
}
