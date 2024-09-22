import {
  Label,
  LabelDescription,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "sticker-ui"

import { usePreviewI18n } from "@/i18n/preview"
import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-fill-info",
  order: 10,
  titleKey: "preview.components.basicField",
  descriptionKey:
    "preview.components.selectKeepsAccessibleKeyboardBehaviorWhileAddingAChunkyStickerMenuAndAClearPaperIndicator",
})

function Demo() {
  const { tm } = usePreviewI18n()
  return (
    <div className="grid max-w-xl gap-3">
      <Label htmlFor="select-team-role" required>
        {tm("preview.components.teamRole")}
      </Label>
      <Select defaultValue="designer" id="select-team-role">
        <SelectTrigger>
          <SelectValue placeholder={tm("preview.components.chooseARole")} />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="designer">
            {tm("preview.components.designCaptain")}
          </SelectItem>
          <SelectItem value="engineer">
            {tm("preview.components.buildLead")}
          </SelectItem>
          <SelectItem value="researcher">
            {tm("preview.components.researchScout")}
          </SelectItem>
        </SelectContent>
      </Select>
      <LabelDescription>
        {tm(
          "preview.components.pairSelectWithLabelWhenAFiniteOptionListNeedsAccessibleCaptionsAndHelperText",
        )}
      </LabelDescription>
    </div>
  )
}

export { Demo, meta }
