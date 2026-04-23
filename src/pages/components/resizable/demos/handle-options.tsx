import { Resizable } from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-su-paper",
  descriptionKey:
    "preview.components.resizableHandlesCanStayQuietOrExposeAGripAffordance",
  order: 30,
  titleKey: "preview.components.handleOptions",
})

function Demo() {
  return (
    <div className="grid w-full max-w-2xl gap-4">
      <div className="h-32 rounded-su-2xl border-2 border-su-ink bg-su-paper shadow-su-md">
        <Resizable.PanelGroup orientation="horizontal">
          <Resizable.Panel defaultSize="50%">
            <div className="grid size-full place-items-center text-sm font-black">
              Quiet handle
            </div>
          </Resizable.Panel>
          <Resizable.Handle />
          <Resizable.Panel defaultSize="50%">
            <div className="grid size-full place-items-center bg-su-fill-info text-sm font-black">
              Details
            </div>
          </Resizable.Panel>
        </Resizable.PanelGroup>
      </div>
      <div className="h-32 rounded-su-2xl border-2 border-su-ink bg-su-paper shadow-su-md">
        <Resizable.PanelGroup orientation="horizontal">
          <Resizable.Panel defaultSize="50%">
            <div className="grid size-full place-items-center text-sm font-black">
              Grip handle
            </div>
          </Resizable.Panel>
          <Resizable.Handle withHandle />
          <Resizable.Panel defaultSize="50%">
            <div className="grid size-full place-items-center bg-su-fill-warning text-sm font-black">
              Preview
            </div>
          </Resizable.Panel>
        </Resizable.PanelGroup>
      </div>
    </div>
  )
}

export { Demo, meta }
