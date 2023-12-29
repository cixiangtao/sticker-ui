import {
  Button,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Tag,
} from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-[#FFE8F0]",
  description:
    "Use panel cards for layout shells, preview windows, and grouped page regions.",
  order: 20,
  title: "Panel Surfaces",
})

function HeaderDots() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none flex gap-2"
      data-slot="panel-header-dots"
    >
      <span
        className="border-ink size-3.5 rounded-full border-2 bg-[#EF476F]"
        data-slot="panel-header-dot"
      />
      <span
        className="border-ink size-3.5 rounded-full border-2 bg-[#FFCF56]"
        data-slot="panel-header-dot"
      />
      <span
        className="border-ink size-3.5 rounded-full border-2 bg-[#00B894]"
        data-slot="panel-header-dot"
      />
    </div>
  )
}

function Demo() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <Card variant="panel">
        <CardHeader
          decoration={<HeaderDots />}
          divider="dashed"
          dividerInset="md"
        >
          <Tag color="danger">Panel</Tag>
          <CardTitle className="mt-3">Preview Window</CardTitle>
        </CardHeader>
        <div className="grid gap-3 py-5">
          <p className="text-text-muted m-0 text-sm leading-6 font-medium">
            Use this pattern when the surface frames navigation, filters, or a
            large preview area.
          </p>
          <Button size="sm">Start review</Button>
        </div>
      </Card>

      <Card variant="minimal">
        <CardHeader divider="dashed" dividerInset="card">
          <CardTitle>Toolbar Shell</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-3">
          <p className="text-text-muted m-0 text-sm leading-6 font-medium">
            Use minimal panel cards for quiet shells that should sit below
            content cards in the visual hierarchy.
          </p>
          <Tag color="info">Dashed divider</Tag>
        </CardContent>
      </Card>
    </div>
  )
}

export { Demo }
export default meta
