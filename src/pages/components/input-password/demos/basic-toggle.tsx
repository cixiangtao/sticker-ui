import { InputPassword, Label, LabelDescription } from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-fill-info",
  order: 10,
  titleKey: "preview.components.basicToggle",
  descriptionKey:
    "preview.components.inputpasswordWrapsANativePasswordFieldWithTheSameStickerFrameAndAnAccessibleShowHideToggle",
})

function Demo() {
  return (
    <div className="grid max-w-xl gap-3">
      <Label htmlFor="input-password-basic" required>
        Password
      </Label>
      <InputPassword
        autoComplete="current-password"
        hideLabel="Hide"
        id="input-password-basic"
        placeholder="Enter Password"
        showLabel="Show"
      />
      <LabelDescription>
        Use inputpassword when a password field needs a built in visibility
        toggle.
      </LabelDescription>
    </div>
  )
}

export { Demo, meta }
