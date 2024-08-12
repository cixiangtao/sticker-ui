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

import { usePreviewI18n } from "@/i18n/preview"
import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "rotate-[-1deg] bg-[#EAF7FF]",
  order: 20,
  titleKey: "preview.components.statusBoard",
  descriptionKey:
    "preview.components.composeTableCellsWithTagsAndCodeChipsWhileTheFrameHandlesScrollingAndInkBorders",
})

function Demo() {
  const { tm } = usePreviewI18n()

  return (
    <Table className="min-w-[620px]">
      <TableCaption>
        {tm("preview.components.componentReadinessSnapshot")}
      </TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>{tm("preview.common.component")}</TableHead>
          <TableHead>{tm("preview.components.status")}</TableHead>
          <TableHead>{tm("preview.components.owner")}</TableHead>
          <TableHead className="text-right">
            {tm("preview.components.demos")}
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="font-black">
            {tm("preview.components.button")}
          </TableCell>
          <TableCell>
            <Tag color="success" dot size="sm">
              {tm("preview.components.stable")}
            </Tag>
          </TableCell>
          <TableCell className="font-medium text-[#5B5E6A]">
            {tm("preview.components.core")}
          </TableCell>
          <TableCell className="text-right font-extrabold">2</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-black">
            {tm("preview.components.table")}
          </TableCell>
          <TableCell>
            <Tag color="info" dot size="sm">
              {tm("preview.components.new")}
            </Tag>
          </TableCell>
          <TableCell className="font-medium text-[#5B5E6A]">
            {tm("preview.components.docs")}
          </TableCell>
          <TableCell className="text-right font-extrabold">2</TableCell>
        </TableRow>
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>
            {tm("preview.components.totalDemos")}
          </TableCell>
          <TableCell className="text-right">4</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  )
}

export { Demo, meta }
