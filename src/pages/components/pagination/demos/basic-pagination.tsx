import * as React from "react"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Pagination,
  Tag,
} from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const queueItems = [
  "Audit data table pagination copy",
  "Review empty state contrast",
  "Package select examples",
  "Check keyboard focus order",
  "Update registry install notes",
  "Refresh API docs",
  "Verify preview route labels",
  "Record visual QA notes",
  "Polish disabled states",
  "Prepare release checklist",
  "Share component handoff",
  "Archive old screenshots",
]

const meta = defineMeta({
  className: "bg-su-fill-info",
  order: 10,
  titleKey: "preview.components.basicPagination",
  descriptionKey:
    "preview.components.paginationCanRunControlledForServerBackedListsOrLocalResultSets",
})

function Demo() {
  const [page, setPage] = React.useState(1)
  const pageSize = 4
  const start = (page - 1) * pageSize
  const visibleItems = queueItems.slice(start, start + pageSize)

  return (
    <Card className="max-w-2xl">
      <CardHeader className="grid-cols-[1fr_auto] items-center gap-3">
        <CardTitle>Release Queue</CardTitle>
        <Tag color="info" variant="outlined">
          Page {page}
        </Tag>
      </CardHeader>
      <CardContent className="grid gap-3">
        <ul className="grid gap-2">
          {visibleItems.map((item) => (
            <li
              className="rounded-su-lg border border-su-ink bg-su-surface px-3 py-2 text-sm font-bold text-su-ink"
              key={item}
            >
              {item}
            </li>
          ))}
        </ul>
        <Pagination
          onPageChange={setPage}
          page={page}
          pageSize={pageSize}
          showSizeChanger={false}
          total={queueItems.length}
        />
      </CardContent>
    </Card>
  )
}

export { Demo, meta }
