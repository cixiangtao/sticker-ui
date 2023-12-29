import { Input, Label, LabelDescription } from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-[#EAF7FF]",
  description:
    "Labels stay compact, readable, and connected to native controls with the normal htmlFor relationship.",
  order: 10,
  title: "Form Captions",
})

function Demo() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <div className="grid gap-2">
        <Label htmlFor="label-component-name" required>
          Component name
        </Label>
        <Input
          defaultValue="Sticker Label"
          id="label-component-name"
          required
        />
        <LabelDescription>
          Required markers are part of the caption, not the input frame.
        </LabelDescription>
      </div>
      <div className="grid gap-2">
        <Label htmlFor="label-component-note" optional>
          Release note
        </Label>
        <textarea
          className="min-h-24 resize-none rounded-[16px] border-2 border-[#2E3038] bg-white px-3 py-2 text-sm font-bold shadow-[2px_2px_0_#2E3038] outline-none focus-visible:ring-2 focus-visible:ring-[#FF9BB2]"
          defaultValue="Use optional markers for helper fields and short notes."
          id="label-component-note"
        />
        <LabelDescription>
          Description copy can sit under any control in the same field.
        </LabelDescription>
      </div>
    </div>
  )
}

export { Demo }
export default meta
