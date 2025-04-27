import { DataTable, Tag, type DataTableColumn } from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

interface ComponentTask {
  demos: number
  id: string
  owner: string
  priority: "High" | "Low" | "Medium"
  status: "Blocked" | "Ready" | "Review"
  task: string
}

const tasks: ComponentTask[] = [
  {
    demos: 6,
    id: "button",
    owner: "Core",
    priority: "High",
    status: "Ready",
    task: "Button coverage",
  },
  {
    demos: 4,
    id: "data-table",
    owner: "Data",
    priority: "High",
    status: "Review",
    task: "DataTable interactions",
  },
  {
    demos: 3,
    id: "form",
    owner: "Forms",
    priority: "Medium",
    status: "Ready",
    task: "Form validation",
  },
  {
    demos: 2,
    id: "calendar",
    owner: "Planning",
    priority: "Low",
    status: "Blocked",
    task: "Calendar draft",
  },
]

const statusColor = {
  Blocked: "danger",
  Ready: "success",
  Review: "info",
} as const

const columns: DataTableColumn<ComponentTask>[] = [
  {
    dataIndex: "task",
    filterable: true,
    render: (value) => <span className="font-black">{String(value)}</span>,
    sortable: true,
    title: "Task",
    width: 210,
  },
  {
    dataIndex: "status",
    filters: [
      { label: "Ready", value: "Ready" },
      { label: "Review", value: "Review" },
      { label: "Blocked", value: "Blocked" },
    ],
    render: (value) => (
      <Tag color={statusColor[value as ComponentTask["status"]]} dot size="sm">
        {String(value)}
      </Tag>
    ),
    title: "Status",
    width: 150,
  },
  {
    dataIndex: "owner",
    filterable: true,
    title: "Owner",
  },
  {
    align: "right",
    dataIndex: "demos",
    render: (value) => <span className="font-extrabold">{String(value)}</span>,
    sortable: true,
    title: "Demos",
    width: 110,
  },
]

const meta = defineMeta({
  className: "bg-fill-info",
  order: 10,
  titleKey: "preview.components.basicDataTable",
  descriptionKey:
    "preview.components.columnsMapRecordsIntoSortablePaginatedRowsWithStickerControls",
})

function Demo() {
  return (
    <DataTable
      columns={columns}
      dataSource={tasks}
      pagination={{ defaultPageSize: 3 }}
      rowKey="id"
      rowSelection
      toolbar={
        <div className="grid gap-1">
          <span className="text-sm font-black text-ink">Component backlog</span>
          <span className="text-xs font-bold text-text-muted">
            Sort, filter, paginate, and select rows from one data model.
          </span>
        </div>
      }
    />
  )
}

export { Demo, meta }
