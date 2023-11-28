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

import type { PreviewDemoMeta } from "@/layouts/preview"

const meta = {
  className: "rotate-[-1deg] bg-[#EAF7FF]",
  description:
    "Compose table cells with tags and code chips while the frame handles scrolling and ink borders.",
  title: "Status Board",
} satisfies PreviewDemoMeta

function Demo() {
  return (
    <Table className="min-w-[620px]">
      <TableCaption>Component readiness snapshot.</TableCaption>
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
              stable
            </Tag>
          </TableCell>
          <TableCell className="font-medium text-[#5B5E6A]">Core</TableCell>
          <TableCell className="text-right font-extrabold">2</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-black">Table</TableCell>
          <TableCell>
            <Tag color="info" dot size="sm">
              new
            </Tag>
          </TableCell>
          <TableCell className="font-medium text-[#5B5E6A]">Docs</TableCell>
          <TableCell className="text-right font-extrabold">2</TableCell>
        </TableRow>
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total demos</TableCell>
          <TableCell className="text-right">4</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  )
}

export { Demo }
export default meta
