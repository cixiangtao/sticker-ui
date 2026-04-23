import { GripVertical } from "lucide-react"
import * as React from "react"
import {
  Group as ResizablePrimitiveGroup,
  Panel as ResizablePrimitivePanel,
  Separator as ResizablePrimitiveSeparator,
  type GroupProps as ResizablePrimitiveGroupProps,
  type SeparatorProps as ResizablePrimitiveSeparatorProps,
} from "react-resizable-panels"

import { cn } from "@/lib/utils"

const ResizablePanelGroup = React.forwardRef<
  HTMLDivElement,
  ResizablePrimitiveGroupProps
>(({ className, ...props }, ref) => (
  <ResizablePrimitiveGroup
    className={cn(
      "flex h-full w-full data-[panel-group-direction=vertical]:flex-col",
      className,
    )}
    data-slot="resizable-panel-group"
    elementRef={ref}
    {...props}
  />
))
ResizablePanelGroup.displayName = "ResizablePanelGroup"

/**
 * Resizable panel region.
 */
const ResizablePanel = ResizablePrimitivePanel

/**
 * Props for the sticker resize handle.
 */
interface ResizableHandleProps extends ResizablePrimitiveSeparatorProps {
  /**
   * Renders the centered grip affordance.
   * @default false
   */
  withHandle?: boolean
}

/**
 * Tactile resize handle for resizable sticker panels.
 */
const ResizableHandle = React.forwardRef<HTMLDivElement, ResizableHandleProps>(
  ({ className, withHandle = false, ...props }, ref) => (
    <ResizablePrimitiveSeparator
      className={cn(
        "group/resize-handle relative flex w-3 items-center justify-center bg-su-ink/10 transition-colors outline-none after:absolute after:inset-y-0 after:left-1/2 after:w-0.5 after:-translate-x-1/2 after:bg-su-ink/35 hover:bg-su-fill-default focus-visible:ring-[2px] focus-visible:ring-su-ring/65 aria-[orientation=horizontal]:h-3 aria-[orientation=horizontal]:w-full aria-[orientation=horizontal]:after:inset-x-0 aria-[orientation=horizontal]:after:top-1/2 aria-[orientation=horizontal]:after:h-0.5 aria-[orientation=horizontal]:after:w-full aria-[orientation=horizontal]:after:translate-x-0 aria-[orientation=horizontal]:after:-translate-y-1/2",
        className,
      )}
      data-slot="resizable-handle"
      elementRef={ref}
      {...props}
    >
      {withHandle ? (
        <span className="z-1 flex size-7 items-center justify-center rounded-su-md border-2 border-su-ink bg-su-surface shadow-su-xs group-aria-[orientation=horizontal]/resize-handle:rotate-90">
          <GripVertical aria-hidden="true" className="size-4 stroke-[3]" />
        </span>
      ) : null}
    </ResizablePrimitiveSeparator>
  ),
)
ResizableHandle.displayName = "ResizableHandle"

/**
 * Resizable panel primitives powered by react-resizable-panels.
 */
const Resizable = {
  Handle: ResizableHandle,
  Panel: ResizablePanel,
  PanelGroup: ResizablePanelGroup,
}

export {
  Resizable,
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
  type ResizableHandleProps,
}
