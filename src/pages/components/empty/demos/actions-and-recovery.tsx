import { RefreshCcw, SearchX } from "lucide-react"
import {
  Button,
  Empty,
  EmptyActions,
  EmptyDescription,
  EmptyIcon,
  EmptyTitle,
} from "sticker-ui"

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
      <EmptyIcon>
        <SearchX />
      </EmptyIcon>
      <EmptyTitle>No matching components</EmptyTitle>
      <EmptyDescription>
        Try clearing the active filters or refresh the registry after adding new
        source files.
      </EmptyDescription>
      <EmptyActions>
        <Button size="sm">Clear Filters</Button>
        <Button size="sm" variant="outlined">
          <RefreshCcw />
          Refresh
        </Button>
      </EmptyActions>
    </Empty>
  )
}

export { Demo, meta }
