import { Label, LabelMarker } from "sticker-ui"

import type { PreviewDemoMeta } from "@/layouts/preview"

const meta = {
  className: "bg-[#F6EFFF]",
  description:
    "Sizes align with compact, standard, and roomy controls. Markers can be composed directly when a form needs custom wording.",
  title: "Sizes & Custom Markers",
} satisfies PreviewDemoMeta

function Demo() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      <div className="rounded-[16px] border border-[#2E3038] bg-white p-4">
        <Label htmlFor="label-small" size="sm">
          Small caption
        </Label>
        <input
          className="mt-3 min-h-9 w-full rounded-[14px] border-2 border-[#2E3038] bg-white px-3 text-sm font-bold shadow-[2px_2px_0_#2E3038] outline-none focus-visible:ring-2 focus-visible:ring-[#FF9BB2]"
          id="label-small"
          placeholder="Compact"
        />
      </div>
      <div className="rounded-[16px] border border-[#2E3038] bg-white p-4">
        <Label htmlFor="label-default">
          Default caption
          <LabelMarker>new</LabelMarker>
        </Label>
        <input
          className="mt-3 min-h-11 w-full rounded-[16px] border-2 border-[#2E3038] bg-white px-3 text-sm font-bold shadow-[2px_2px_0_#2E3038] outline-none focus-visible:ring-2 focus-visible:ring-[#FF9BB2]"
          id="label-default"
          placeholder="Standard"
        />
      </div>
      <div className="rounded-[16px] border border-[#2E3038] bg-white p-4">
        <Label htmlFor="label-large" size="lg">
          Large caption
        </Label>
        <input
          className="mt-3 min-h-12 w-full rounded-[18px] border-2 border-[#2E3038] bg-white px-4 text-base font-bold shadow-[2px_2px_0_#2E3038] outline-none focus-visible:ring-2 focus-visible:ring-[#FF9BB2]"
          id="label-large"
          placeholder="Roomy"
        />
      </div>
    </div>
  )
}

export { Demo }
export default meta
