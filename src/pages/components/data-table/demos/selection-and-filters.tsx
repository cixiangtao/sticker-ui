import * as React from "react"
import { Button, DataTable, Tag, type DataTableColumn } from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

interface ReleaseRow {
  area: string
  id: string
  owner: string
  readiness: "Archived" | "Ready" | "Review"
  score: number
}

const releaseRows: ReleaseRow[] = [
  {
    area: "Inputs",
    id: "inputs",
    owner: "Forms",
    readiness: "Ready",
    score: 96,
  },
  {
    area: "Overlays",
    id: "overlays",
    owner: "Surface",
    readiness: "Review",
    score: 84,
  },
  {
    area: "Navigation",
    id: "navigation",
    owner: "Preview",
    readiness: "Archived",
    score: 64,
  },
  {
    area: "Data",
    id: "data",
    owner: "Registry",
    readiness: "Ready",
    score: 91,
  },
]

const readinessColor = {
  Archived: "default",
  Ready: "success",
  Review: "warning",
} as const

const columns: DataTableColumn<ReleaseRow>[] = [
  {
    dataIndex: "area",
    filterable: true,
    render: (value) => <span className="font-black">{String(value)}</span>,
    title: "Area",
  },
  {
    dataIndex: "readiness",
    filters: [
      { label: "Ready", value: "Ready" },
      { label: "Review", value: "Review" },
      { label: "Archived", value: "Archived" },
    ],
    render: (value) => (
      <Tag
        color={readinessColor[value as ReleaseRow["readiness"]]}
        rounded="pill"
        size="sm"
      >
        {String(value)}
      </Tag>
    ),
    title: "Readiness",
  },
  {
    dataIndex: "owner",
    filterable: true,
    title: "Owner",
  },
  {
    align: "right",
    dataIndex: "score",
    render: (value) => <span className="font-extrabold">{String(value)}%</span>,
    sortable: true,
    title: "Score",
    width: 110,
  },
]

const meta = defineMeta({
  className: "bg-fill-warning",
  order: 20,
  titleKey: "preview.components.selectionAndFilters",
  descriptionKey:
    "preview.components.rowSelectionAndColumnFiltersStayControlledWhileTheTableKeepsPaginationPredictable",
})

function Demo() {
  const [selectedRowKeys, setSelectedRowKeys] = React.useState<string[]>([
    "inputs",
  ])

  return (
    <DataTable
      columns={columns}
      dataSource={releaseRows}
      pagination={false}
      rowKey="id"
      rowSelection={{
        getCheckboxProps: (record) => ({
          disabled: record.readiness === "Archived",
        }),
        onChange: (nextSelectedRowKeys) => {
          setSelectedRowKeys(nextSelectedRowKeys)
        },
        selectedRowKeys,
      }}
      toolbar={
        <div className="flex min-w-0 flex-wrap items-center gap-2">
          <Tag color="info" size="sm">
            Controlled selection
          </Tag>
          <Button
            onClick={() => {
              setSelectedRowKeys([])
            }}
            size="sm"
            variant="outlined"
          >
            Clear
          </Button>
        </div>
      }
    />
  )
}

export { Demo, meta }
