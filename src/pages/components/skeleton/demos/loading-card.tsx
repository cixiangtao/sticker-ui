import { Card, CardContent, CardHeader, Skeleton } from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-su-fill-info",
  order: 10,
  titleKey: "preview.components.loadingCard",
  descriptionKey:
    "preview.components.skeletonsReserveTheShapeOfContentWhileKeepingTheLoadingStateQuiet",
})

function Demo() {
  return (
    <Card>
      <CardHeader className="flex-row items-center gap-3">
        <Skeleton shape="avatar" />
        <div className="grid flex-1 gap-2">
          <Skeleton className="max-w-40" shape="line" />
          <Skeleton className="max-w-56" shape="line" />
        </div>
      </CardHeader>
      <CardContent className="grid gap-3">
        <Skeleton shape="block" tone="info" />
        <div className="grid gap-2">
          <Skeleton className="max-w-full" shape="line" />
          <Skeleton className="max-w-[82%]" shape="line" />
          <Skeleton className="max-w-[58%]" shape="line" />
        </div>
      </CardContent>
    </Card>
  )
}

export { Demo, meta }
