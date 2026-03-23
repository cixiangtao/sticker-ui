import { Divider, Tag } from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-su-fill-default",
  order: 40,
  titleKey: "preview.components.propMatrix",
  descriptionKey:
    "preview.components.dividerPropMatrixShowsAlignmentTextureWeightToneOrientationAndAccessibilityCombinations",
})

function Demo() {
  return (
    <div className="grid gap-5 rounded-su-2xl border-2 border-su-ink bg-su-surface p-5 shadow-su-lg">
      <Tag size="sm" variant="outlined">
        Alignment
      </Tag>
      <Divider align="start" decorative={false} variant="solid" weight="md">
        Start
      </Divider>
      <Divider align="center" tone="info">
        Center
      </Divider>
      <Divider align="end" tone="secondary">
        End
      </Divider>

      <Tag color="warning" size="sm" variant="outlined">
        Texture and weight
      </Tag>
      <Divider tone="default" variant="solid" weight="sm">
        Solid sm
      </Divider>
      <Divider tone="warning" variant="dashed" weight="md">
        Dashed md
      </Divider>
      <Divider tone="danger" variant="dotted" weight="lg">
        Dotted lg
      </Divider>

      <div className="flex min-h-28 items-stretch gap-4">
        <Divider orientation="vertical" tone="success" weight="sm" />
        <Divider
          orientation="vertical"
          tone="info"
          variant="dashed"
          weight="md"
        >
          Vertical
        </Divider>
        <Divider
          orientation="vertical"
          tone="danger"
          variant="dotted"
          weight="lg"
        />
      </div>
    </div>
  )
}

export { Demo, meta }
