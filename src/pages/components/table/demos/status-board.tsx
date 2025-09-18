import { Table, Tag } from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "rotate-[-1deg] bg-su-fill-info",
  order: 20,
  titleKey: "preview.components.statusBoard",
  descriptionKey:
    "preview.components.composeTableCellsWithTagsAndCodeChipsWhileTheFrameHandlesScrollingAndInkBorders",
})

function Demo() {
  return (
    <Table className="min-w-[620px]">
      <Table.Caption>Component Readiness Snapshot</Table.Caption>
      <Table.Header>
        <Table.Row>
          <Table.Head>Component</Table.Head>
          <Table.Head>Status</Table.Head>
          <Table.Head>Owner</Table.Head>
          <Table.Head className="text-right">Demos</Table.Head>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        <Table.Row>
          <Table.Cell className="font-black">Button</Table.Cell>
          <Table.Cell>
            <Tag color="success" dot size="sm">
              Stable
            </Tag>
          </Table.Cell>
          <Table.Cell className="font-medium text-su-fg-muted">Core</Table.Cell>
          <Table.Cell className="text-right font-extrabold">2</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell className="font-black">Table</Table.Cell>
          <Table.Cell>
            <Tag color="info" dot size="sm">
              New
            </Tag>
          </Table.Cell>
          <Table.Cell className="font-medium text-su-fg-muted">Docs</Table.Cell>
          <Table.Cell className="text-right font-extrabold">2</Table.Cell>
        </Table.Row>
      </Table.Body>
      <Table.Footer>
        <Table.Row>
          <Table.Cell colSpan={3}>Total Demos</Table.Cell>
          <Table.Cell className="text-right">4</Table.Cell>
        </Table.Row>
      </Table.Footer>
    </Table>
  )
}

export { Demo, meta }
