import { InputPassword, Label, LabelDescription } from "sticker-ui"

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
  return (
    <div className="grid max-w-xl gap-3">
      <Label htmlFor="input-password-basic" required>
        Password
      </Label>
      <InputPassword
        autoComplete="current-password"
        hideLabel="Hide"
        id="input-password-basic"
        placeholder="Enter password"
        showLabel="Show"
      />
      <LabelDescription>
        Use InputPassword when a password field needs a built-in visibility
        toggle.
      </LabelDescription>
    </div>
  )
}

export { Demo, meta }
