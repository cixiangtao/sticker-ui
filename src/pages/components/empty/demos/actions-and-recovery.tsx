import { RefreshCcw, SearchX } from "lucide-react"
import { Button, Empty } from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-su-fill-warning",
  order: 20,
  titleKey: "preview.components.actionsAndRecovery",
  descriptionKey:
    "preview.components.emptyActionsGivePeopleClearRecoveryPathsWithoutLeavingTheBlankState",
})

function Demo() {
  return (
    <Empty className="max-w-2xl" tone="warning">
      <Empty.Icon>
        <SearchX />
      </Empty.Icon>
      <Empty.Title>No matching components</Empty.Title>
      <Empty.Description>
        Try clearing the active filters or refresh the registry after adding new
        source files.
      </Empty.Description>
      <Empty.Actions>
        <Button size="sm">Clear Filters</Button>
        <Button size="sm" variant="outlined">
          <RefreshCcw />
          Refresh
        </Button>
      </Empty.Actions>
    </Empty>
  )
}

export { Demo, meta }
