import { Table, Tag } from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-su-fill-success",
  order: 30,
  titleKey: "preview.components.customFrame",
  descriptionKey:
    "preview.components.tableContainerClassnameAndSlotClassnamesLetDenseTablesFitCustomPanelsWithoutLosingSemanticMarkup",
})

function Demo() {
  return (
    <Table
      className="min-w-[720px] text-xs"
      containerClassName="max-w-2xl border-l-[8px] border-l-su-accent-success bg-su-fill-success shadow-su-xl"
    >
      <Table.Caption>
        Custom scroll frame with semantic table slots
      </Table.Caption>
      <Table.Header className="bg-su-fill-success">
        <Table.Row>
          <Table.Head className="w-40">Surface</Table.Head>
          <Table.Head>Prop shown</Table.Head>
          <Table.Head>Usage</Table.Head>
          <Table.Head className="text-right">State</Table.Head>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        <Table.Row className="bg-su-surface/80">
          <Table.Cell className="font-black">Container</Table.Cell>
          <Table.Cell>
            <Tag color="success" size="sm" variant="outlined">
              containerClassName
            </Tag>
          </Table.Cell>
          <Table.Cell>Change the outer scroll frame.</Table.Cell>
          <Table.Cell className="text-right font-black">Ready</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell className="font-black">Cells</Table.Cell>
          <Table.Cell>
            <Tag size="sm" variant="outlined">
              className
            </Tag>
          </Table.Cell>
          <Table.Cell>
            Use native table slots for alignment and emphasis.
          </Table.Cell>
          <Table.Cell className="text-right font-black">Native</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  )
}

export { Demo, meta }
