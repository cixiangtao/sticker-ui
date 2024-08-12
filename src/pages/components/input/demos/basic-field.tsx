import { Input, Label, LabelDescription } from "sticker-ui"

import { usePreviewI18n } from "@/i18n/preview"
import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-[#EAF7FF]",
  order: 10,
  titleKey: "preview.components.basicField",
  descriptionKey:
    "preview.components.inputsKeepNativeFormBehaviorWhileAddingAChunkyStickerFrameHardShadowAndReadableHelperCopy",
})

function Demo() {
  const { tm } = usePreviewI18n()
  return (
    <div className="grid max-w-xl gap-3">
      <Label htmlFor="input-project-name" required>
        {tm("preview.components.projectName")}
      </Label>
      <Input
        defaultValue="Sticker Handbook"
        id="input-project-name"
        placeholder={tm("preview.components.stickerHandbook")}
      />
      <LabelDescription>
        {tm(
          "preview.components.pairInputWithLabelWhenTheFieldNeedsAccessibleCaptionsAndHelperText",
        )}
      </LabelDescription>
    </div>
  )
}

export { Demo, meta }
