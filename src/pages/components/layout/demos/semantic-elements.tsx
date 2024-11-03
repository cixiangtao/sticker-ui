import { Flex, Grid, Tag } from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-fill-secondary",
  order: 30,
  titleKey: "preview.components.semanticElements",
  descriptionKey:
    "preview.components.useAsToChooseSemanticRootsForNavigationListsAndGroupedPageRegions",
})

const links = ["Foundation", "Components", "Registry"]

function Demo() {
  return (
    <Grid as="section" columns="responsive-2" gap="lg">
      <Flex
        as="nav"
        aria-label="Preview Sections"
        className="rounded-sticker-2xl border-2 border-ink bg-surface p-4 shadow-sticker-md"
        direction="column"
        gap="sm"
      >
        <Tag color="secondary" size="sm">
          Navigation
        </Tag>
        <Flex as="ul" direction="column" gap="xs">
          {links.map((link) => (
            <li
              className="rounded-sticker-md border border-ink bg-paper px-3 py-2 text-sm font-extrabold"
              key={link}
            >
              {link}
            </li>
          ))}
        </Flex>
      </Flex>

      <Grid
        as="section"
        className="rounded-sticker-2xl border-2 border-ink bg-surface p-4 shadow-sticker-md"
        columns="auto-fit"
        gap="sm"
      >
        {["Flex", "Grid"].map((item) => (
          <div
            className="rounded-sticker-md border border-ink bg-fill-info px-3 py-2 text-sm font-extrabold"
            key={item}
          >
            {item}
          </div>
        ))}
      </Grid>
    </Grid>
  )
}

export { Demo, meta }
