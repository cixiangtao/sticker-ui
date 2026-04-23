import { FileCode, PackagePlus, SearchCheck } from "lucide-react"
import { Command } from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-su-fill-info",
  order: 10,
  titleKey: "preview.components.basicCommand",
  descriptionKey:
    "preview.components.commandFiltersItemDataAndCallsOnSelectForEnabledRows",
})

function Demo() {
  return (
    <Command
      items={[
        {
          description: "Add a registry component.",
          group: "Actions",
          icon: <PackagePlus className="size-4 stroke-[3]" />,
          label: "Install component",
          value: "install",
        },
        {
          description: "Open source preview.",
          group: "Actions",
          icon: <FileCode className="size-4 stroke-[3]" />,
          label: "View source",
          value: "source",
        },
        {
          description: "Run the component audit.",
          group: "Checks",
          icon: <SearchCheck className="size-4 stroke-[3]" />,
          label: "Verify coverage",
          value: "verify",
        },
      ]}
    />
  )
}

export { Demo, meta }
