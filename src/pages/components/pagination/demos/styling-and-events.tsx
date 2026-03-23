import * as React from "react"
import { Card, Pagination, Tag } from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-su-fill-success",
  order: 40,
  titleKey: "preview.components.stylingAndEvents",
  descriptionKey:
    "preview.components.paginationClassnamesDefaultPageSizeAndSizeCallbacksCanBeCombinedForCustomToolbars",
})

function Demo() {
  const [lastChange, setLastChange] = React.useState("Waiting for changes")

  return (
    <Card className="max-w-2xl" variant="panel">
      <Card.Header className="grid-cols-[1fr_auto] items-center gap-3">
        <Card.Title>Styled pager</Card.Title>
        <Tag color="success" rounded="pill" size="sm">
          Uncontrolled
        </Tag>
      </Card.Header>
      <Card.Content className="grid gap-4">
        <Pagination
          classNames={{
            controls: "rounded-su-lg bg-su-fill-success p-1",
            sizeChanger:
              "rounded-su-lg border border-su-ink bg-su-surface px-2",
            summary: "rounded-su-sm bg-su-paper px-2 py-1 shadow-su-xs",
          }}
          defaultPage={3}
          defaultPageSize={8}
          labels={{
            pageSummary: ({ page, pageCount, pageSize }) =>
              `Sheet ${page} of ${pageCount} / ${pageSize} rows`,
            rowsPerPage: "Rows",
            rowsPerPageSelect: "Choose row count",
          }}
          onChange={({ page, pageSize }) => {
            setLastChange(`Page ${page}, ${pageSize} rows`)
          }}
          onPageSizeChange={(pageSize) => {
            setLastChange(`Page size changed to ${pageSize}`)
          }}
          pageSizeOptions={[4, 8, 16]}
          total={64}
        />
        <p className="m-0 rounded-su-lg border border-su-ink bg-su-surface px-3 py-2 text-sm font-bold text-su-ink">
          {lastChange}
        </p>
      </Card.Content>
    </Card>
  )
}

export { Demo, meta }
