import { Table } from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-su-fill-warning",
  order: 10,
  titleKey: "preview.common.apiReference",
  descriptionKey:
    "preview.components.useTablesForApiPropsRegistryMetadataAndCompactTechnicalReferenceBlocks",
})

function Demo() {
  return (
    <Table
      className="min-w-[640px]"
      containerClassName="bg-su-fill-info shadow-su-lg"
    >
      <Table.Header>
        <Table.Row>
          <Table.Head>Prop</Table.Head>
          <Table.Head>Type</Table.Head>
          <Table.Head>Default</Table.Head>
          <Table.Head>Description</Table.Head>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        <Table.Row>
          <Table.Cell>
            <code className="font-black">className</code>
          </Table.Cell>
          <Table.Cell>
            <code className="text-xs font-bold">string</code>
          </Table.Cell>
          <Table.Cell>
            <span className="text-xs font-bold text-su-fg-placeholder">-</span>
          </Table.Cell>
          <Table.Cell className="leading-6 font-medium text-su-fg-muted">
            Applies classes to the native table element.
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            <code className="font-black">containerClassName</code>
          </Table.Cell>
          <Table.Cell>
            <code className="text-xs font-bold">string</code>
          </Table.Cell>
          <Table.Cell>
            <span className="text-xs font-bold text-su-fg-placeholder">-</span>
          </Table.Cell>
          <Table.Cell className="leading-6 font-medium text-su-fg-muted">
            Applies classes to the scrollable frame around the table.
          </Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  )
}

export { Demo, meta }
