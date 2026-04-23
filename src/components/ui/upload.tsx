import { FileText, UploadCloud, X } from "lucide-react"
import * as React from "react"

import { cn } from "@/lib/utils"

import { Button } from "./button"
import { Empty } from "./empty"
import { Progress } from "./progress"

/**
 * File item shown by the upload queue.
 */
interface UploadItem {
  /**
   * Error message for failed uploads.
   */
  error?: React.ReactNode
  /**
   * Stable item id.
   */
  id: string
  /**
   * Display file name.
   */
  name: string
  /**
   * Progress percentage from 0 to 100.
   */
  progress?: number
  /**
   * File size label.
   */
  size?: string
  /**
   * Current upload status.
   * @default "idle"
   */
  status?: "done" | "error" | "idle" | "uploading"
}

/**
 * Props for the sticker upload surface.
 * @remarks Handles file picking and drop interaction, while upload transport remains application-owned.
 */
interface UploadProps extends Omit<
  React.HTMLAttributes<HTMLDivElement>,
  "onDrop"
> {
  /**
   * Accepted MIME types or file extensions.
   */
  accept?: string
  /**
   * Disables file picking and removal actions.
   * @default false
   */
  disabled?: boolean
  /**
   * Empty queue helper copy.
   * @default "Drag files here or choose from your device."
   */
  emptyDescription?: React.ReactNode
  /**
   * Empty queue heading.
   * @default "No files selected"
   */
  emptyHeading?: React.ReactNode
  /**
   * File queue shown below the picker.
   */
  items?: UploadItem[]
  /**
   * Allows selecting more than one file.
   * @default false
   */
  multiple?: boolean
  /**
   * Called when files are selected or dropped.
   */
  onFilesChange?: (files: File[]) => void
  /**
   * Called when a queue item remove action is activated.
   */
  onRemove?: (item: UploadItem) => void
  /**
   * Picker button label.
   * @default "Choose files"
   */
  pickLabel?: string
}

/**
 * UI-only file picker and upload queue surface.
 */
function Upload({
  accept,
  className,
  disabled = false,
  emptyDescription = "Drag files here or choose from your device.",
  emptyHeading = "No files selected",
  items = [],
  multiple = false,
  onFilesChange,
  onRemove,
  pickLabel = "Choose files",
  ...props
}: UploadProps) {
  const inputRef = React.useRef<HTMLInputElement>(null)

  function emitFiles(fileList: FileList | null) {
    if (!fileList || disabled) {
      return
    }

    onFilesChange?.(Array.from(fileList))
  }

  function handleDrop(event: React.DragEvent<HTMLDivElement>) {
    event.preventDefault()
    emitFiles(event.dataTransfer.files)
  }

  return (
    <div
      className={cn("grid gap-3 text-su-ink", className)}
      data-slot="upload"
      {...props}
    >
      <div
        className={cn(
          "grid justify-items-center gap-3 rounded-su-2xl border-2 border-dashed border-su-ink bg-su-fill-default-soft p-5 text-center shadow-su-sm transition duration-150",
          !disabled && "hover:bg-su-fill-default hover:shadow-su-md",
          disabled && "cursor-not-allowed opacity-55",
        )}
        data-slot="upload-dropzone"
        onDragOver={(event) => event.preventDefault()}
        onDrop={handleDrop}
      >
        <span
          aria-hidden="true"
          className="grid size-14 place-items-center rounded-su-xl border-2 border-su-ink bg-su-surface shadow-su-sm"
          data-slot="upload-icon"
        >
          <UploadCloud className="size-6 stroke-[3]" />
        </span>
        <div className="grid gap-1">
          <div className="text-sm leading-5 font-black">{emptyHeading}</div>
          <div className="text-sm leading-6 font-medium text-su-fg-muted">
            {emptyDescription}
          </div>
        </div>
        <Button
          disabled={disabled}
          onClick={() => inputRef.current?.click()}
          size="sm"
          variant="outlined"
        >
          {pickLabel}
        </Button>
        <input
          accept={accept}
          className="sr-only"
          data-slot="upload-input"
          disabled={disabled}
          multiple={multiple}
          onChange={(event) => {
            emitFiles(event.target.files)
            event.target.value = ""
          }}
          ref={inputRef}
          type="file"
        />
      </div>
      {items.length ? (
        <div className="grid gap-2" data-slot="upload-list">
          {items.map((item) => (
            <div
              className={cn(
                "grid gap-2 rounded-su-xl border-2 border-su-ink bg-su-paper p-3 shadow-su-sm",
                item.status === "error" && "bg-su-fill-danger",
                item.status === "done" && "bg-su-fill-success",
              )}
              data-slot="upload-item"
              data-status={item.status ?? "idle"}
              key={item.id}
            >
              <div className="grid grid-cols-[auto_1fr_auto] items-center gap-3">
                <span
                  aria-hidden="true"
                  className="grid size-9 place-items-center rounded-su-md border-2 border-su-ink bg-su-surface shadow-su-xs"
                >
                  <FileText className="size-4 stroke-[3]" />
                </span>
                <div className="min-w-0">
                  <div className="truncate text-sm leading-5 font-black">
                    {item.name}
                  </div>
                  {item.size ? (
                    <div className="text-xs leading-5 font-bold text-su-fg-muted">
                      {item.size}
                    </div>
                  ) : null}
                </div>
                {onRemove ? (
                  <Button
                    aria-label={`Remove ${item.name}`}
                    color="danger"
                    disabled={disabled}
                    onClick={() => onRemove(item)}
                    shape="square"
                    size="sm"
                    variant="text"
                  >
                    <X aria-hidden="true" className="size-4 stroke-[3]" />
                  </Button>
                ) : null}
              </div>
              {item.status === "uploading" ? (
                <Progress size="sm" tone="info" value={item.progress ?? 0} />
              ) : null}
              {item.error ? (
                <div className="text-xs leading-5 font-bold text-su-fg-danger">
                  {item.error}
                </div>
              ) : null}
            </div>
          ))}
        </div>
      ) : (
        <Empty
          className="border-2 border-dashed shadow-none"
          description={emptyDescription}
          heading={emptyHeading}
          icon={<UploadCloud />}
          size="sm"
          variant="outlined"
        />
      )}
    </div>
  )
}

export { Upload, type UploadItem, type UploadProps }
