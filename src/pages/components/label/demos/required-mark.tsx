import { Input, Label, LabelDescription, LabelMarker } from "sticker-ui"

import { usePreviewI18n } from "@/i18n/preview"
import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-[#FFF0F4]",
  description:
    "Required marks handle field semantics, while LabelMarker stays available for custom status chips.",
  order: 25,
  title: "Required Mark",
  titleKey: "preview.components.requiredMark",
  descriptionKey:
    "preview.components.requiredMarksHandleFieldSemanticsWhileLabelmarkerStaysAvailableForCustomStatusChips",
})

function Demo() {
  const { tm } = usePreviewI18n()
  return (
    <div className="grid gap-4 md:grid-cols-3">
      <div className="grid gap-2 rounded-sticker-lg border border-[#2E3038] bg-white p-4">
        <Label htmlFor="label-required-badge" required>
          {tm("preview.components.badgeRequired")}
        </Label>
        <Input
          defaultValue="Badge keeps the sticker feel"
          id="label-required-badge"
          required
        />
        <LabelDescription>
          {tm("preview.components.useTheDefaultBadgeWhenTheLabelHasRoom")}
        </LabelDescription>
      </div>
      <div className="grid gap-2 rounded-sticker-lg border border-[#2E3038] bg-white p-4">
        <Label
          htmlFor="label-required-asterisk"
          required
          requiredMark="asterisk"
        >
          {tm("preview.components.asteriskRequired")}
        </Label>
        <Input
          defaultValue="Compact for narrow label columns"
          id="label-required-asterisk"
          required
        />
        <LabelDescription>
          {tm(
            "preview.components.useTheAsteriskWhenHorizontalFormsNeedTighterLabels",
          )}
        </LabelDescription>
      </div>
      <div className="grid gap-2 rounded-sticker-lg border border-[#2E3038] bg-white p-4">
        <Label htmlFor="label-marker-custom">
          {tm("preview.components.customMarker")}
          <LabelMarker tone="success">
            {tm("preview.components.new")}
          </LabelMarker>
        </Label>
        <Input
          defaultValue="Status copy stays manual"
          id="label-marker-custom"
        />
        <LabelDescription>
          {tm(
            "preview.components.labelmarkerIsForExtraStatusTextNotRequiredSemantics",
          )}
        </LabelDescription>
      </div>
    </div>
  )
}

export { Demo, meta }
