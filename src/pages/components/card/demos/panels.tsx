import {
  Button,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Tag,
} from "sticker-ui"

import { usePreviewI18n } from "@/i18n/preview"
import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-[#FFE8F0]",
  order: 20,
  titleKey: "preview.components.panelSurfaces",
  descriptionKey:
    "preview.components.usePanelCardsForLayoutShellsPreviewWindowsAndGroupedPageRegions",
})

function HeaderDots() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none flex gap-2"
      data-slot="panel-header-dots"
    >
      <span
        className="size-3.5 rounded-full border-2 border-ink bg-[#EF476F]"
        data-slot="panel-header-dot"
      />
      <span
        className="size-3.5 rounded-full border-2 border-ink bg-[#FFCF56]"
        data-slot="panel-header-dot"
      />
      <span
        className="size-3.5 rounded-full border-2 border-ink bg-[#00B894]"
        data-slot="panel-header-dot"
      />
    </div>
  )
}

function Demo() {
  const { tm } = usePreviewI18n()
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <Card variant="panel">
        <CardHeader
          decoration={<HeaderDots />}
          divider="dashed"
          dividerInset="md"
        >
          <Tag color="danger">{tm("preview.components.panel")}</Tag>
          <CardTitle className="mt-3">
            {tm("preview.components.previewWindow")}
          </CardTitle>
        </CardHeader>
        <div className="grid gap-3 py-5">
          <p className="m-0 text-sm leading-6 font-medium text-text-muted">
            {tm(
              "preview.components.useThisPatternWhenTheSurfaceFramesNavigationFiltersOrALargePreviewArea",
            )}
          </p>
          <Button size="sm">{tm("preview.components.startReview")}</Button>
        </div>
      </Card>

      <Card variant="minimal">
        <CardHeader divider="dashed" dividerInset="card">
          <CardTitle>{tm("preview.components.toolbarShell")}</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-3">
          <p className="m-0 text-sm leading-6 font-medium text-text-muted">
            {tm(
              "preview.components.useMinimalPanelCardsForQuietShellsThatShouldSitBelowContentCardsInTheVisualHierarchy",
            )}
          </p>
          <Tag color="info">{tm("preview.components.dashedDivider")}</Tag>
        </CardContent>
      </Card>
    </div>
  )
}

export { Demo, meta }
