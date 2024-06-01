import { Label, LabelDescription, Textarea } from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-[#EAF7FF]",
  description:
    "Textarea keeps native multiline behavior while adding a chunky sticker frame, hard shadow, and comfortable writing space.",
  order: 10,
  title: "Basic Field",
})

function Demo() {
  return (
    <div className="grid max-w-xl gap-3">
      <Label htmlFor="textarea-project-notes" required>
        Project notes
      </Label>
      <Textarea
        defaultValue="Draft the launch checklist, capture edge cases, and mark anything the team should revisit before shipping."
        id="textarea-project-notes"
        placeholder="Write a short project note"
      />
      <LabelDescription>
        Pair Textarea with Label when longer copy needs accessible captions and
        helper text.
      </LabelDescription>
    </div>
  )
}

export { Demo, meta }
