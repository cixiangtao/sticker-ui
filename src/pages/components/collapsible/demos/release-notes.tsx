import { Collapsible, Tag } from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-su-fill-warning",
  descriptionKey:
    "preview.components.collapsiblePairsARadixDisclosureTriggerWithAStickerContentPanel",
  order: 10,
  titleKey: "preview.components.releaseNotes",
})

function Demo() {
  return (
    <Collapsible className="w-full max-w-xl" defaultOpen>
      <Collapsible.Trigger>
        <span>Show release notes</span>
        <Tag color="success" rounded="pill" size="sm">
          3 updates
        </Tag>
      </Collapsible.Trigger>
      <Collapsible.Content className="mt-3" tone="secondary">
        <ul className="m-0 space-y-2 pl-5 text-sm leading-6 font-bold">
          <li>
            Calendar and DatePicker now share the same day-button language.
          </li>
          <li>Upload queues expose file status without owning network work.</li>
          <li>HoverCard and Sheet fill the common floating-panel gap.</li>
        </ul>
      </Collapsible.Content>
    </Collapsible>
  )
}

export { Demo, meta }
