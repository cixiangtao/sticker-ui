import { Field, Select } from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-su-fill-info",
  order: 10,
  titleKey: "preview.components.basicField",
  descriptionKey:
    "preview.components.selectKeepsAccessibleKeyboardBehaviorWhileAddingAChunkyStickerMenuAndAClearPaperIndicator",
})

function Demo() {
  return (
    <div className="grid max-w-xl gap-3">
      <Field
        description="Pair select with label when a finite option list needs accessible captions and helper text."
        label="Team Role"
        required
      >
        <Select defaultValue="designer">
          <Select.Trigger>
            <Select.Value placeholder="Choose A Role" />
          </Select.Trigger>
          <Select.Content>
            <Select.Item value="designer">Design Captain</Select.Item>
            <Select.Item value="engineer">Build Lead</Select.Item>
            <Select.Item value="researcher">Research Scout</Select.Item>
          </Select.Content>
        </Select>
      </Field>
    </div>
  )
}

export { Demo, meta }
