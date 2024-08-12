import { Flex, Grid, Tag } from "sticker-ui"

import { usePreviewI18n } from "@/i18n/preview"
import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-[#EAFBF5]",
  order: 40,
  titleKey: "preview.components.inlineAndAsChild",
  descriptionKey:
    "preview.components.inlineSwitchesToInlineFlexOrInlineGridWhileAschildDelegatesLayoutClassesToAnExistingSemanticElement",
})

function Demo() {
  const { tm } = usePreviewI18n()
  return (
    <div className="grid gap-5">
      <Flex align="center" gap="sm" inline={true} wrap="wrap">
        <Tag color="success" dot={true} size="sm">
          {tm("preview.components.inlineFlex")}
        </Tag>
        <span className="text-sm font-bold">
          {tm("preview.components.sitsInsideTextFlow")}
        </span>
      </Flex>

      <Grid columns="3" gap="xs" inline={true}>
        {["XS", "SM", "MD"].map((size) => (
          <Tag key={size} size="xs" variant="outlined">
            {size}
          </Tag>
        ))}
      </Grid>

      <Flex asChild direction="column" gap="xs">
        <ul className="m-0 rounded-sticker-xl border-2 border-ink bg-surface p-4 shadow-sticker-md">
          <li className="font-bold">
            {tm("preview.components.delegatedFlexList")}
          </li>
          <li className="font-bold">
            {tm("preview.components.noWrapperElementAdded")}
          </li>
        </ul>
      </Flex>

      <Grid asChild columns="2" gap="xs">
        <ol className="m-0 rounded-sticker-xl border-2 border-ink bg-paper p-4 shadow-sticker-md">
          <li className="font-bold">
            {tm("preview.components.delegatedGridList")}
          </li>
          <li className="font-bold">
            {tm("preview.components.columnsLandOnTheList")}
          </li>
        </ol>
      </Grid>
    </div>
  )
}

export { Demo, meta }
