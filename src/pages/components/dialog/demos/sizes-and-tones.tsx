import {
  Button,
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "sticker-ui"

import { usePreviewI18n } from "@/i18n/preview"
import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-[#FFF6DC]",
  description:
    "Sizes and tones keep modal surfaces aligned with the amount of content and the kind of decision.",
  order: 20,
  title: "Sizes & Tones",
  titleKey: "preview.components.sizesAndTones",
  descriptionKey:
    "preview.components.sizesAndTonesKeepModalSurfacesAlignedWithTheAmountOfContentAndTheKindOfDecision",
})

function Demo() {
  const { tm } = usePreviewI18n()
  return (
    <div className="flex flex-wrap gap-3">
      <Dialog>
        <DialogTrigger asChild>
          <Button color="info" variant="outlined">
            {tm("preview.components.smallInfo")}
          </Button>
        </DialogTrigger>
        <DialogContent size="sm" tone="info">
          <DialogHeader>
            <DialogTitle>{tm("preview.components.shortcutSaved")}</DialogTitle>
            <DialogDescription>
              {tm(
                "preview.components.smallDialogsWorkWellForOneDecisionAndOneFollowUpAction",
              )}
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <DialogClose asChild>
              <Button color="info">{tm("preview.components.done")}</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      <Dialog>
        <DialogTrigger asChild>
          <Button color="warning" variant="outlined">
            {tm("preview.components.largeReview")}
          </Button>
        </DialogTrigger>
        <DialogContent size="lg" tone="warning">
          <DialogHeader>
            <DialogTitle>
              {tm("preview.components.reviewBeforeShipping")}
            </DialogTitle>
            <DialogDescription>
              {tm(
                "preview.components.largeDialogsGiveLongerChecklistsAndFormsEnoughRoomWhileTheCloseButtonTitleAndFooterStayPredictable",
              )}
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-2 rounded-sticker-xl border border-ink bg-surface p-3 text-sm font-bold">
            <span>
              {tm("preview.components.previewDemosRenderOnDesktopAndMobile")}
            </span>
            <span>
              {tm("preview.components.registryJsonPointsAtSourceFiles")}
            </span>
            <span>
              {tm("preview.components.chinesePreviewStringsAreCovered")}
            </span>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outlined">
                {tm("preview.components.keepEditing")}
              </Button>
            </DialogClose>
            <DialogClose asChild>
              <Button color="warning">{tm("preview.components.shipIt")}</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export { Demo, meta }
