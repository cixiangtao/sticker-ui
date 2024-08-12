import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "sticker-ui"

import { usePreviewI18n } from "@/i18n/preview"
import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-[#FFF6DC]",
  order: 10,
  titleKey: "preview.common.apiReference",
  descriptionKey:
    "preview.components.useTablesForApiPropsRegistryMetadataAndCompactTechnicalReferenceBlocks",
})

function Demo() {
  const { tm } = usePreviewI18n()

  return (
    <Table
      className="min-w-[640px]"
      containerClassName="bg-fill-info shadow-sticker-lg"
    >
      <TableHeader>
        <TableRow>
          <TableHead>{tm("preview.common.prop")}</TableHead>
          <TableHead>{tm("preview.common.type")}</TableHead>
          <TableHead>{tm("preview.common.default")}</TableHead>
          <TableHead>{tm("preview.components.description")}</TableHead>
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
            {tm("preview.components.appliesClassesToTheNativeTableElement")}
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
            {tm(
              "preview.components.appliesClassesToTheScrollableFrameAroundTheTable",
            )}
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  )
}

export { Demo, meta }
