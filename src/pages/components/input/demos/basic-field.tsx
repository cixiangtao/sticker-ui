import { Input, Label, LabelDescription } from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-[#EAF7FF]",
  description:
    "Inputs keep native form behavior while adding a chunky sticker frame, hard shadow, and readable helper copy.",
  order: 10,
  title: "Basic Field",
})

function Demo() {
  return (
    <div className="grid max-w-xl gap-3">
      <Label htmlFor="input-project-name" required>
        Project name
      </Label>
      <Input
        defaultValue="Sticker Handbook"
        id="input-project-name"
        placeholder="Sticker Handbook"
      />
      <LabelDescription>
        Pair Input with Label when the field needs accessible captions and
        helper text.
      </LabelDescription>
    </div>
  )
}

export { Demo, meta }
