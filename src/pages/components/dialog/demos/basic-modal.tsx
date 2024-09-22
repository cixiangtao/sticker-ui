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
  className: "bg-fill-info",
  order: 10,
  titleKey: "preview.components.basicModal",
  descriptionKey:
    "preview.components.dialogCreatesAFocusedModalStickerPanelForDecisionsThatNeedTitleDescriptionAndActions",
})

function Demo() {
  const { tm } = usePreviewI18n()
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>{tm("preview.components.openDialog")}</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            {tm("preview.components.publishComponentPage")}
          </DialogTitle>
          <DialogDescription>
            {tm(
              "preview.components.confirmThePreviewDemosApiTableTranslationsAndRegistryOutputBeforeMarkingThisComponentReady",
            )}
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outlined">
              {tm("preview.components.cancel")}
            </Button>
          </DialogClose>
          <DialogClose asChild>
            <Button color="success">{tm("preview.components.publish")}</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export { Demo, meta }
