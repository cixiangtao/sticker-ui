import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Pagination,
} from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-su-fill-secondary",
  order: 30,
  titleKey: "preview.components.compactAndDisabled",
  descriptionKey:
    "preview.components.minimalControlsCanHideTheSizeChangerOrFirstLastJumpsWhenSpaceIsTight",
})

function Demo() {
  return (
    <div className="grid max-w-2xl gap-4">
      <Card>
        <CardHeader>
          <CardTitle>Compact Toolbar</CardTitle>
        </CardHeader>
        <CardContent>
          <Pagination
            defaultPage={2}
            labels={{
              pageSummary: ({ page, pageCount }) => `${page} / ${pageCount}`,
            }}
            pageCount={5}
            showFirstLast={false}
            showSizeChanger={false}
          />
        </CardContent>
      </Card>
      <Card variant="minimal">
        <CardContent className="grid gap-3">
          <p className="text-sm leading-6 font-medium text-su-fg-muted">
            Disabled controls keep their layout for pending list refreshes.
          </p>
          <Pagination disabled pageCount={3} showSizeChanger={false} />
        </CardContent>
      </Card>
    </div>
  )
}

export { Demo, meta }
