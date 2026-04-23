import { Resizable, Tag } from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-su-fill-secondary",
  descriptionKey:
    "preview.components.resizableCreatesKeyboardAccessibleSplitPanelsWithStickerHandles",
  order: 10,
  titleKey: "preview.components.workspacePanes",
})

function Demo() {
  return (
    <div className="h-72 w-full max-w-3xl overflow-hidden rounded-su-2xl border-2 border-su-ink bg-su-paper shadow-su-lg">
      <Resizable.PanelGroup orientation="horizontal">
        <Resizable.Panel defaultSize="32%" id="nav" minSize="160px">
          <div className="h-full space-y-3 bg-su-fill-info p-4">
            <Tag rounded="pill">Navigation</Tag>
            <p className="m-0 text-sm leading-6 font-bold">
              Drag the ink handle to rebalance a desktop workspace.
            </p>
          </div>
        </Resizable.Panel>
        <Resizable.Handle withHandle />
        <Resizable.Panel defaultSize="68%" id="preview" minSize="240px">
          <div className="grid h-full place-items-center p-5">
            <div className="rounded-su-xl border-2 border-su-ink bg-su-surface p-5 text-center shadow-su-sm">
              <h3 className="m-0 text-xl font-black">Preview canvas</h3>
              <p className="mt-2 text-sm leading-6 font-bold text-su-fg-muted">
                Panels stay plain enough to host app content.
              </p>
            </div>
          </div>
        </Resizable.Panel>
      </Resizable.PanelGroup>
    </div>
  )
}

export { Demo, meta }
