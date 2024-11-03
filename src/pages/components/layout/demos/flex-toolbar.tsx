import { Button, Flex, Tag } from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-fill-info",
  order: 10,
  titleKey: "preview.components.flexToolbar",
  descriptionKey:
    "preview.components.flexKeepsToolbarAlignmentPredictableWhileClassnameCarriesTheStickerFrame",
})

function Demo() {
  return (
    <Flex
      align="center"
      className="rounded-sticker-2xl border-2 border-ink bg-surface p-3 shadow-sticker-lg"
      gap="sm"
      justify="between"
      wrap="wrap"
    >
      <Flex align="center" gap="sm" wrap="wrap">
        <Tag color="info">Layout</Tag>
        <span className="text-sm font-extrabold text-ink">Review Queue</span>
        <Tag color="success" size="sm" variant="filled">
          12 Ready
        </Tag>
      </Flex>
      <Flex align="center" gap="xs">
        <Button size="sm" variant="outlined">
          Sort
        </Button>
        <Button size="sm">Publish</Button>
      </Flex>
    </Flex>
  )
}

export { Demo, meta }
