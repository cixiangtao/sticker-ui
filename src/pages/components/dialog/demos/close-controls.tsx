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
  className: "bg-fill-success",
  order: 30,
  titleKey: "preview.components.closeControls",
  descriptionKey:
    "preview.components.showcloseAndCloselabelTuneTheBuiltInIconCloseButtonOrRemoveItWhenTheFooterShouldOwnDismissal",
})

function Demo() {
  const { tm } = usePreviewI18n()
  return (
    <div className="flex flex-wrap gap-3">
      <Dialog>
        <DialogTrigger asChild>
          <Button color="success" variant="outlined">
            {tm("preview.components.customLabel")}
          </Button>
        </DialogTrigger>
        <DialogContent
          closeLabel={tm("preview.components.closeReviewDialog")}
          tone="info"
        >
          <DialogHeader>
            <DialogTitle>
              {tm("preview.components.accessibleCloseLabel")}
            </DialogTitle>
            <DialogDescription>
              {tm(
                "preview.components.theIconButtonKeepsTheSameVisualTreatmentWhileExposingAContextSpecificAriaLabel",
              )}
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>

      <Dialog>
        <DialogTrigger asChild>
          <Button color="warning" variant="outlined">
            {tm("preview.components.footerOnly")}
          </Button>
        </DialogTrigger>
        <DialogContent showClose={false} tone="warning">
          <DialogHeader className="pr-0">
            <DialogTitle>{tm("preview.components.noIconClose")}</DialogTitle>
            <DialogDescription>
              {tm(
                "preview.components.someConfirmationsKeepDismissalInTheFooterSoTheAvailableChoicesRemainExplicit",
              )}
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <DialogClose asChild>
              <Button color="warning">
                {tm("preview.components.iUnderstand")}
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export { Demo, meta }
