import { InputPassword, Label, LabelDescription } from "sticker-ui"

import { usePreviewI18n } from "@/i18n/preview"
import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-[#EAF7FF]",
  description:
    "InputPassword wraps a native password field with the same sticker frame and an accessible show-hide toggle.",
  order: 10,
  title: "Basic Toggle",
  titleKey: "preview.components.basicToggle",
  descriptionKey:
    "preview.components.inputpasswordWrapsANativePasswordFieldWithTheSameStickerFrameAndAnAccessibleShowHideToggle",
})

function Demo() {
  const { tm } = usePreviewI18n()
  return (
    <div className="grid max-w-xl gap-3">
      <Label htmlFor="input-password-basic" required>
        {tm("preview.components.password")}
      </Label>
      <InputPassword
        autoComplete="current-password"
        hideLabel={tm("preview.components.hide")}
        id="input-password-basic"
        placeholder={tm("preview.components.enterPassword")}
        showLabel={tm("preview.components.show")}
      />
      <LabelDescription>
        {tm(
          "preview.components.useInputpasswordWhenAPasswordFieldNeedsABuiltInVisibilityToggle",
        )}
      </LabelDescription>
    </div>
  )
}

export { Demo, meta }
