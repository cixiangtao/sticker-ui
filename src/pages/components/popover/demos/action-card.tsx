import {
  Button,
  Popover,
  PopoverClose,
  PopoverContent,
  PopoverTrigger,
} from "sticker-ui"

import { usePreviewI18n } from "@/i18n/preview"
import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-[#EAFBF5]",
  description:
    "Close can wrap a sticker button so short popover workflows can finish from inside the panel.",
  order: 20,
  title: "Action Card",
  titleKey: "preview.components.actionCard",
  descriptionKey:
    "preview.components.closeCanWrapAStickerButtonSoShortPopoverWorkflowsCanFinishFromInsideThePanel",
})

function Demo() {
  const { tm } = usePreviewI18n()
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button color="success" variant="outlined">
          {tm("preview.components.reviewDraft")}
        </Button>
      </PopoverTrigger>
      <PopoverContent showArrow size="sm" tone="success">
        <div className="grid gap-3">
          <div className="grid gap-1">
            <h3 className="m-0 text-base leading-6 font-black">
              {tm("preview.components.draftReady")}
            </h3>
            <p className="m-0 text-sm leading-6 font-medium text-text-muted">
              {tm(
                "preview.components.theComponentPageHasDemosApiDocsAndTranslatedPreviewCopy",
              )}
            </p>
          </div>
          <PopoverClose asChild>
            <Button color="success" size="sm">
              {tm("preview.components.looksGood")}
            </Button>
          </PopoverClose>
        </div>
      </PopoverContent>
    </Popover>
  )
}

export { Demo, meta }
