import { Field, Input } from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-su-fill-default",
  order: 50,
  titleKey: "preview.components.toneMatrix",
  descriptionKey:
    "preview.components.inputToneMatrixCoversDefaultInfoWarningDangerAndOutlinedStateCombinations",
})

function Demo() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <Field label="Default outlined">
        <Input defaultValue="Default" tone="default" variant="outlined" />
      </Field>
      <Field label="Info filled">
        <Input defaultValue="Info" tone="info" variant="filled" />
      </Field>
      <Field label="Warning quiet">
        <Input defaultValue="Warning" tone="warning" variant="quiet" />
      </Field>
      <Field label="Danger invalid">
        <Input aria-invalid defaultValue="Danger" tone="danger" />
      </Field>
    </div>
  )
}

export { Demo, meta }
