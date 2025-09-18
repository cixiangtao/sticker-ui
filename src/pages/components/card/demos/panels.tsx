import { Button, Card, Tag } from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-su-fill-danger",
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
        className="size-3.5 rounded-full border-2 border-su-ink bg-su-accent-danger"
        data-slot="panel-header-dot"
      />
      <span
        className="size-3.5 rounded-full border-2 border-su-ink bg-su-fill-default"
        data-slot="panel-header-dot"
      />
      <span
        className="size-3.5 rounded-full border-2 border-su-ink bg-su-accent-success"
        data-slot="panel-header-dot"
      />
    </div>
  )
}

function Demo() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <Card variant="panel">
        <Card.Header
          decoration={<HeaderDots />}
          divider="dashed"
          dividerInset="md"
        >
          <Tag color="danger">Panel</Tag>
          <Card.Title className="mt-3">Preview Window</Card.Title>
        </Card.Header>
        <div className="grid gap-3 py-5">
          <p className="m-0 text-sm leading-6 font-medium text-su-fg-muted">
            Use this pattern when the surface frames navigation filters or a
            large preview area.
          </p>
          <Button size="sm">Start Review</Button>
        </div>
      </Card>

      <Card variant="minimal">
        <Card.Header divider="dashed" dividerInset="card">
          <Card.Title>Toolbar Shell</Card.Title>
        </Card.Header>
        <Card.Content className="grid gap-3">
          <p className="m-0 text-sm leading-6 font-medium text-su-fg-muted">
            Use minimal panel cards for quiet shells that should sit below
            content cards in the visual hierarchy.
          </p>
          <Tag color="info">Dashed Divider</Tag>
        </Card.Content>
      </Card>
    </div>
  )
}

export { Demo, meta }
