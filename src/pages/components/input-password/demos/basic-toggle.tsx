import { Field, InputPassword } from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-su-fill-info",
  order: 10,
  titleKey: "preview.components.basicToggle",
  descriptionKey:
    "preview.components.inputpasswordWrapsANativePasswordFieldWithTheSameStickerFrameAndAnAccessibleShowHideToggle",
})

function Demo() {
  return (
    <div className="grid max-w-xl gap-3">
      <Field
        description="Use inputpassword when a password field needs a built in visibility toggle."
        label="Password"
        required
      >
        <InputPassword
          autoComplete="current-password"
          hideLabel="Hide"
          placeholder="Enter Password"
          showLabel="Show"
        />
      </Field>
    </div>
  )
}

export { Demo, meta }
