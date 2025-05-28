import * as React from "react"
import { Card, CardContent, Pagination, Tag } from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const totalItems = 57

const meta = defineMeta({
  className: "bg-su-fill-warning",
  order: 20,
  titleKey: "preview.components.pageSizeOptions",
  descriptionKey:
    "preview.components.pageSizeOptionsKeepLargeListsScannableWithoutChangingThePaginationContract",
})

function Demo() {
  const [pagination, setPagination] = React.useState({
    page: 1,
    pageSize: 5,
  })
  const startItem = (pagination.page - 1) * pagination.pageSize + 1
  const endItem = Math.min(pagination.page * pagination.pageSize, totalItems)

  return (
    <Card className="max-w-2xl" variant="panel">
      <CardContent className="grid gap-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="grid gap-1">
            <h3 className="text-lg font-black text-su-ink">Search Results</h3>
            <p className="text-sm leading-6 font-medium text-su-fg-muted">
              Showing {startItem}-{endItem} of {totalItems} matching components.
            </p>
          </div>
          <Tag color="warning" rounded="pill">
            {pagination.pageSize} rows
          </Tag>
        </div>
        <Pagination
          onChange={(nextPagination) => {
            setPagination({
              page: nextPagination.page,
              pageSize: nextPagination.pageSize,
            })
          }}
          page={pagination.page}
          pageSize={pagination.pageSize}
          pageSizeOptions={[5, 8, 12, 20]}
          total={totalItems}
        />
      </CardContent>
    </Card>
  )
}

export { Demo, meta }
