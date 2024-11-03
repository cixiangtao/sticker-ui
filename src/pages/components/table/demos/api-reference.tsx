import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-fill-warning",
  order: 10,
  titleKey: "preview.common.apiReference",
  descriptionKey:
    "preview.components.useTablesForApiPropsRegistryMetadataAndCompactTechnicalReferenceBlocks",
})

function Demo() {
  return (
    <Table
      className="min-w-[640px]"
      containerClassName="bg-fill-info shadow-sticker-lg"
    >
      <TableHeader>
        <TableRow>
          <TableHead>Prop</TableHead>
          <TableHead>Type</TableHead>
          <TableHead>Default</TableHead>
          <TableHead>Description</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>
            <code className="font-black">className</code>
          </TableCell>
          <TableCell>
            <code className="text-xs font-bold">string</code>
          </TableCell>
          <TableCell>
            <span className="text-xs font-bold text-text-placeholder">-</span>
          </TableCell>
          <TableCell className="leading-6 font-medium text-text-muted">
            Applies classes to the native table element.
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <code className="font-black">containerClassName</code>
          </TableCell>
          <TableCell>
            <code className="text-xs font-bold">string</code>
          </TableCell>
          <TableCell>
            <span className="text-xs font-bold text-text-placeholder">-</span>
          </TableCell>
          <TableCell className="leading-6 font-medium text-text-muted">
            Applies classes to the scrollable frame around the table.
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  )
}

export { Demo, meta }
