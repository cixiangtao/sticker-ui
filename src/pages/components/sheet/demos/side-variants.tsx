import { Button, Sheet } from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-su-fill-warning",
  order: 20,
  titleKey: "preview.components.sideVariants",
  descriptionKey:
    "preview.components.sheetCanEnterFromAnyViewportEdgeForDesktopAndMobileLayouts",
})

function Demo() {
  return (
    <div className="flex flex-wrap gap-3">
      {(["left", "right", "top", "bottom"] as const).map((side) => (
        <Sheet key={side}>
          <Sheet.Trigger asChild>
            <Button variant="outlined">{side}</Button>
          </Sheet.Trigger>
          <Sheet.Content side={side} size="sm" tone="secondary">
            <Sheet.Header>
              <Sheet.Title>{side} sheet</Sheet.Title>
              <Sheet.Description>
                The same drawer primitive can adapt to tool panels, mobile
                navigation, and bottom actions.
              </Sheet.Description>
            </Sheet.Header>
          </Sheet.Content>
        </Sheet>
      ))}
    </div>
  )
}

export { Demo, meta }
