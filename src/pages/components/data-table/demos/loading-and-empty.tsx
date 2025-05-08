import { DataTable, type DataTableColumn } from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

interface AuditRow {
  id: string
  owner: string
  status: string
  title: string
}

const columns: DataTableColumn<AuditRow>[] = [
  {
    dataIndex: "title",
    render: (value) => <span className="font-black">{String(value)}</span>,
    title: "Audit",
  },
  {
    dataIndex: "owner",
    title: "Owner",
    width: 140,
  },
  {
    dataIndex: "status",
    title: "Status",
    width: 140,
  },
]

const meta = defineMeta({
  className: "bg-su-fill-secondary",
  order: 30,
  titleKey: "preview.components.loadingAndEmpty",
  descriptionKey:
    "preview.components.loadingAndEmptyStatesKeepDenseTablesAccessibleWithoutReplacingTheUnderlyingColumnModel",
})

function Demo() {
  return (
    <div className="grid gap-4">
      <DataTable
        columns={columns}
        dataSource={[]}
        loading
        pagination={false}
        rowKey="id"
        toolbar={
          <span className="text-sm font-black text-su-ink">
            Fetching audit rows
          </span>
        }
      />
      <DataTable
        columns={columns}
        dataSource={[]}
        emptyText="No matching audits"
        pagination={false}
        rowKey="id"
        toolbar={
          <span className="text-sm font-black text-su-ink">
            Filtered results
          </span>
        }
      />
    </div>
  )
}

export { Demo, meta }
