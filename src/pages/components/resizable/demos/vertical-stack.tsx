import { Resizable, Tag } from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-su-fill-info",
  descriptionKey:
    "preview.components.resizableSupportsVerticalPanelGroupsForStackedWorkspaces",
  order: 20,
  titleKey: "preview.components.verticalStack",
})

function Demo() {
  return (
    <div className="h-80 w-full max-w-xl rounded-su-2xl border-2 border-su-ink bg-su-paper shadow-su-lg">
      <Resizable.PanelGroup orientation="vertical">
        <Resizable.Panel defaultSize="55%">
          <div className="grid size-full place-items-center p-4">
            <Tag color="info" rounded="pill">
              Canvas
            </Tag>
          </div>
        </Resizable.Panel>
        <Resizable.Handle withHandle />
        <Resizable.Panel defaultSize="45%">
          <div className="grid size-full place-items-center bg-su-fill-secondary p-4 text-sm font-black">
            Inspector notes
          </div>
        </Resizable.Panel>
      </Resizable.PanelGroup>
    </div>
  )
}

export { Demo, meta }
