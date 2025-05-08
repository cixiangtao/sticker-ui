import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
  Tag,
} from "sticker-ui"

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
      <TableCaption>Component Readiness Snapshot</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Component</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Owner</TableHead>
          <TableHead className="text-right">Demos</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="font-black">Button</TableCell>
          <TableCell>
            <Tag color="success" dot size="sm">
              Stable
            </Tag>
          </TableCell>
          <TableCell className="font-medium text-su-fg-muted">Core</TableCell>
          <TableCell className="text-right font-extrabold">2</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-black">Table</TableCell>
          <TableCell>
            <Tag color="info" dot size="sm">
              New
            </Tag>
          </TableCell>
          <TableCell className="font-medium text-su-fg-muted">Docs</TableCell>
          <TableCell className="text-right font-extrabold">2</TableCell>
        </TableRow>
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total Demos</TableCell>
          <TableCell className="text-right">4</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  )
}

export { Demo, meta }
