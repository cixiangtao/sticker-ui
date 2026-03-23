import { Slash } from "lucide-react"
import { Breadcrumb } from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-su-fill-success",
  order: 30,
  titleKey: "preview.components.customSeparators",
  descriptionKey:
    "preview.components.breadcrumbSlotsCanCustomizeLandmarkLabelsSeparatorsLinksCurrentPageAndCollapsedLevels",
})

function Demo() {
  return (
    <Breadcrumb aria-label="Component documentation path">
      <Breadcrumb.List className="border-l-[8px] border-l-su-accent-success bg-su-fill-success">
        <Breadcrumb.Item>
          <Breadcrumb.Link href="#/components">Components</Breadcrumb.Link>
        </Breadcrumb.Item>
        <Breadcrumb.Separator>
          <Slash aria-hidden="true" className="size-3" />
        </Breadcrumb.Separator>
        <Breadcrumb.Item>
          <Breadcrumb.Ellipsis aria-label="Registry and form sections hidden" />
        </Breadcrumb.Item>
        <Breadcrumb.Separator>
          <Slash aria-hidden="true" className="size-3" />
        </Breadcrumb.Separator>
        <Breadcrumb.Item>
          <Breadcrumb.Link href="#/components/form">Form</Breadcrumb.Link>
        </Breadcrumb.Item>
        <Breadcrumb.Separator>
          <Slash aria-hidden="true" className="size-3" />
        </Breadcrumb.Separator>
        <Breadcrumb.Item>
          <Breadcrumb.Page>Validation rules</Breadcrumb.Page>
        </Breadcrumb.Item>
      </Breadcrumb.List>
    </Breadcrumb>
  )
}

export { Demo, meta }
