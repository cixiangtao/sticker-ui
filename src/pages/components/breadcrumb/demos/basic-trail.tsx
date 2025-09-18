import { Breadcrumb } from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  order: 10,
  titleKey: "preview.components.basicTrail",
  descriptionKey:
    "preview.components.breadcrumbKeepsDesktopPageHierarchyVisibleWithoutTakingOverTheToolbar",
})

function Demo() {
  return (
    <Breadcrumb>
      <Breadcrumb.List>
        <Breadcrumb.Item>
          <Breadcrumb.Link href="#/components">Components</Breadcrumb.Link>
        </Breadcrumb.Item>
        <Breadcrumb.Separator />
        <Breadcrumb.Item>
          <Breadcrumb.Link href="#/components/navigation">
            Navigation
          </Breadcrumb.Link>
        </Breadcrumb.Item>
        <Breadcrumb.Separator />
        <Breadcrumb.Item>
          <Breadcrumb.Page>Breadcrumb</Breadcrumb.Page>
        </Breadcrumb.Item>
      </Breadcrumb.List>
    </Breadcrumb>
  )
}

export { Demo, meta }
