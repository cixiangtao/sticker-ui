import {
  Field,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "sticker-ui"

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
          <SelectTrigger>
            <SelectValue placeholder="Choose A Role" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="designer">Design Captain</SelectItem>
            <SelectItem value="engineer">Build Lead</SelectItem>
            <SelectItem value="researcher">Research Scout</SelectItem>
          </SelectContent>
        </Select>
      </Field>
    </div>
  )
}

export { Demo, meta }
