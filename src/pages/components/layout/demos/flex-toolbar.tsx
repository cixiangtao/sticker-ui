import { Button, Flex, Tag } from "sticker-ui"

import { usePreviewI18n } from "@/i18n/preview"
import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-[#EAF7FF]",
  order: 10,
  titleKey: "preview.components.flexToolbar",
  descriptionKey:
    "preview.components.flexKeepsToolbarAlignmentPredictableWhileClassnameCarriesTheStickerFrame",
})

function Demo() {
  const { tm } = usePreviewI18n()
  return (
    <Flex
      align="center"
      className="rounded-sticker-2xl border-2 border-ink bg-surface p-3 shadow-sticker-lg"
      gap="sm"
      justify="between"
      wrap="wrap"
    >
      <Flex align="center" gap="sm" wrap="wrap">
        <Tag color="info">{tm("preview.components.layout")}</Tag>
        <span className="text-sm font-extrabold text-ink">
          {tm("preview.components.reviewQueue")}
        </span>
        <Tag color="success" size="sm" variant="filled">
          12 ready
        </Tag>
      </Flex>
      <Flex align="center" gap="xs">
        <Button size="sm" variant="outlined">
          {tm("preview.components.sort")}
        </Button>
        <Button size="sm">{tm("preview.components.publish")}</Button>
      </Flex>
    </Flex>
  )
}

export { Demo, meta }
