import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Tag,
} from "sticker-ui"

import type { PreviewDemoMeta } from "@/layouts/preview"

const meta = {
  className: "bg-[#FFFDF7]",
  description:
    "Minimal cards remove the shadow and keep only a thin border for quieter grouping.",
  title: "Minimal Mode",
} satisfies PreviewDemoMeta

function Demo() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <Card>
        <CardHeader>
          <Tag rounded="pill" size="sm">
            Elevated
          </Tag>
          <CardTitle>Sticker Surface</CardTitle>
          <CardDescription>
            The default card keeps a chunky outline and hard offset shadow.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="m-0 text-sm leading-6 font-medium text-[#5B5E6A]">
            Use this for prominent previews, route cards, and action groups.
          </p>
        </CardContent>
      </Card>

      <Card variant="minimal">
        <CardHeader>
          <Tag rounded="pill" size="sm">
            Minimal
          </Tag>
          <CardTitle>Quiet Surface</CardTitle>
          <CardDescription>
            Minimal cards remove the shadow and use a thin border.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="m-0 text-sm leading-6 font-medium text-[#5B5E6A]">
            Use this inside dense pages, side panels, and repeated content
            lists.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}

export { Demo }
export default meta
