import { Flex, Grid, Tag } from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-fill-success",
  order: 40,
  titleKey: "preview.components.inlineAndAsChild",
  descriptionKey:
    "preview.components.inlineSwitchesToInlineFlexOrInlineGridWhileAschildDelegatesLayoutClassesToAnExistingSemanticElement",
})

function Demo() {
  return (
    <div className="grid gap-5">
      <Flex align="center" gap="sm" inline={true} wrap="wrap">
        <Tag color="success" dot={true} size="sm">
          Inline Flex
        </Tag>
        <span className="text-sm font-bold">Sits Inside Text Flow</span>
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
          <li className="font-bold">Delegated Flex List</li>
          <li className="font-bold">No Wrapper Element Added</li>
        </ul>
      </Flex>

      <Grid asChild columns="2" gap="xs">
        <ol className="m-0 rounded-sticker-xl border-2 border-ink bg-paper p-4 shadow-sticker-md">
          <li className="font-bold">Delegated Grid List</li>
          <li className="font-bold">Columns land on the list.</li>
        </ol>
      </Grid>
    </div>
  )
}

export { Demo, meta }
