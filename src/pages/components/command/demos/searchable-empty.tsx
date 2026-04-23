import * as React from "react"
import { Command, Tag } from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-su-paper",
  descriptionKey:
    "preview.components.commandCanBeControlledToShowSearchResultStateAndEmptyCopy",
  order: 30,
  titleKey: "preview.components.searchableEmpty",
})

const items = [
  { group: "Pages", label: "Components", value: "components" },
  { group: "Pages", label: "Registry", value: "registry" },
  { group: "Tools", label: "Theme editor", value: "theme", disabled: true },
]

function Demo() {
  const [filterValue, setFilterValue] = React.useState("missing")

  return (
    <div className="grid w-full max-w-md gap-3">
      <Tag color="warning" rounded="pill">
        Current query: {filterValue || "all"}
      </Tag>
      <Command
        emptyDescription="No page matches this query."
        emptyHeading="Nothing here"
        filterValue={filterValue}
        items={items}
        onFilterValueChange={setFilterValue}
      />
    </div>
  )
}

export { Demo, meta }
