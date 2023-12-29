import { Input, Label } from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-[#FFF6DC]",
  description:
    "Sizes align inputs with compact filters, standard forms, and roomy settings panels while file controls keep the same ink outline.",
  order: 20,
  title: "Sizes & Types",
})

function Demo() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      <div className="rounded-sticker-xl border-ink grid gap-2 border bg-white/80 p-4">
        <Label htmlFor="input-size-small" size="sm">
          Small search
        </Label>
        <Input id="input-size-small" placeholder="Search docs" size="sm" />
      </div>
      <div className="rounded-sticker-xl border-ink grid gap-2 border bg-white/80 p-4">
        <Label htmlFor="input-size-medium">Standard URL</Label>
        <Input
          id="input-size-medium"
          placeholder="https://sticker.dev"
          type="url"
        />
      </div>
      <div className="rounded-sticker-xl border-ink grid gap-2 border bg-white/80 p-4">
        <Label htmlFor="input-size-large" size="lg">
          Roomy file
        </Label>
        <Input id="input-size-large" size="lg" type="file" />
      </div>
    </div>
  )
}

export { Demo }
export default meta
