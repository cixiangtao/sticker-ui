import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "sticker-ui"

import type { PreviewDemoMeta } from "@/layouts/preview"

const meta = {
  className: "bg-[#FFF6DC]",
  description:
    "Use tables for API props, registry metadata, and compact technical reference blocks.",
  title: "API Reference",
} satisfies PreviewDemoMeta

function Demo() {
  return (
    <Table className="min-w-[640px]">
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
            <span className="text-xs font-bold text-[#858894]">-</span>
          </TableCell>
          <TableCell className="leading-6 font-medium text-[#5B5E6A]">
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
            <span className="text-xs font-bold text-[#858894]">-</span>
          </TableCell>
          <TableCell className="leading-6 font-medium text-[#5B5E6A]">
            Applies classes to the scrollable frame around the table.
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  )
}

export { Demo }
export default meta
