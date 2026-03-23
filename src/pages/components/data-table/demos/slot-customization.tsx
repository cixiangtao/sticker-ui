import * as React from "react"
import { DataTable, Empty, Tag, type DataTableColumn } from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

interface RegistryRow {
  id: string
  owner: string
  status: "Done" | "Draft" | "Review"
  title: string
}

const rows: RegistryRow[] = [
  { id: "button", owner: "Core", status: "Done", title: "Button" },
  { id: "popover", owner: "Overlay", status: "Review", title: "Popover" },
  { id: "upload", owner: "Input", status: "Draft", title: "Upload" },
]

const statusColor = {
  Done: "success",
  Draft: "warning",
  Review: "info",
} as const

const columns: DataTableColumn<RegistryRow>[] = [
  {
    dataIndex: "title",
    render: (value) => <span className="font-black">{String(value)}</span>,
    sortable: true,
    title: "Component",
  },
  {
    dataIndex: "status",
    filters: [
      { label: "Done", value: "Done" },
      { label: "Review", value: "Review" },
      { label: "Draft", value: "Draft" },
    ],
    render: (value) => (
      <Tag color={statusColor[value as RegistryRow["status"]]} size="sm">
        {String(value)}
      </Tag>
    ),
    title: "Status",
    width: 140,
  },
  {
    dataIndex: "owner",
    filterable: true,
    title: "Owner",
  },
]

const meta = defineMeta({
  className: "bg-su-fill-success",
  order: 40,
  titleKey: "preview.components.slotCustomization",
  descriptionKey:
    "preview.components.datatableClassnamesEmptyTextPaginationAndRowSelectionConfigCoverAggregateTableCustomization",
})

function Demo() {
  const [selectedRowKeys, setSelectedRowKeys] = React.useState(["button"])

  return (
    <DataTable
      classNames={{
        filter: "bg-su-paper",
        pagination: "rounded-su-xl border border-su-ink bg-su-fill-success p-2",
        selectionSummary: "bg-su-fill-success text-su-fg-success",
        tableContainer: "border-l-[8px] border-l-su-accent-success",
        toolbar: "bg-su-surface",
      }}
      columns={columns}
      dataSource={rows}
      emptyText={
        <Empty
          description="Try clearing filters or adding another registry item."
          heading="No components match"
          size="sm"
          tone="success"
          variant="plain"
        />
      }
      pagination={{
        defaultPageSize: 2,
        pageSizeOptions: [2, 3],
        showSizeChanger: true,
      }}
      rowKey="id"
      rowSelection={{
        getCheckboxProps: (record) => ({
          "aria-label": `Select ${record.title}`,
          disabled: record.status === "Draft",
        }),
        onChange: setSelectedRowKeys,
        selectedRowKeys,
      }}
      toolbar={
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-sm font-black">Customized table</span>
          <Tag color="success" size="sm">
            {selectedRowKeys.length} selected
          </Tag>
        </div>
      }
    />
  )
}

export { Demo, meta }
