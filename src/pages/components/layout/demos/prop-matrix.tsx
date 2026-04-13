import { Flex, Grid, Tag } from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-su-fill-default",
  order: 50,
  titleKey: "preview.components.propMatrix",
  descriptionKey:
    "preview.components.layoutPropMatrixShowsEveryFlexAndGridVariantValueAsCopyableStaticExamples",
})

function Swatch({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-su-sm border border-su-ink bg-su-paper px-2 py-1 text-xs font-black">
      {children}
    </span>
  )
}

function Demo() {
  return (
    <div className="grid gap-5">
      <section className="grid gap-3 rounded-su-2xl border-2 border-su-ink bg-su-surface p-4 shadow-su-md">
        <Tag size="sm" variant="outlined">
          Flex direction / align / justify / wrap / gap
        </Tag>
        <Flex direction="row" gap="md" justify="start" wrap="nowrap">
          <Swatch>row</Swatch>
          <Swatch>gap md</Swatch>
          <Swatch>justify start</Swatch>
          <Swatch>nowrap</Swatch>
        </Flex>
        <Flex direction="row-reverse" gap="none" justify="end">
          <Swatch>row-reverse</Swatch>
          <Swatch>justify end</Swatch>
        </Flex>
        <Flex direction="column" gap="xl" align="start">
          <Swatch>column</Swatch>
          <Swatch>align start</Swatch>
        </Flex>
        <Flex direction="column-reverse" gap="lg" align="end">
          <Swatch>column-reverse</Swatch>
          <Swatch>align end</Swatch>
        </Flex>
        <Flex align="baseline" gap="xs" justify="around" wrap="reverse">
          <Swatch>align baseline</Swatch>
          <Swatch>justify around</Swatch>
          <Swatch>wrap reverse</Swatch>
        </Flex>
        <Flex align="stretch" gap="sm" justify="evenly" wrap="wrap">
          <Swatch>align stretch</Swatch>
          <Swatch>justify evenly</Swatch>
          <Swatch>wrap</Swatch>
        </Flex>
        <Flex align="center" justify="center">
          <Swatch>align center</Swatch>
          <Swatch>justify center</Swatch>
        </Flex>
      </section>

      <section className="grid gap-3 rounded-su-2xl border-2 border-su-ink bg-su-surface p-4 shadow-su-md">
        <Tag color="info" size="sm" variant="outlined">
          Grid columns / align / justify / gap
        </Tag>
        <Grid columns="1" gap="md" justify="stretch">
          <Swatch>columns 1</Swatch>
        </Grid>
        <Grid columns="2" gap="none" align="start" justify="start">
          <Swatch>columns 2</Swatch>
          <Swatch>align start</Swatch>
        </Grid>
        <Grid columns="3" gap="xs" align="center" justify="center">
          <Swatch>columns 3</Swatch>
          <Swatch>align center</Swatch>
          <Swatch>justify center</Swatch>
        </Grid>
        <Grid columns="4" gap="sm" align="end" justify="end">
          <Swatch>columns 4</Swatch>
          <Swatch>align end</Swatch>
          <Swatch>justify end</Swatch>
          <Swatch>gap sm</Swatch>
        </Grid>
        <Grid columns="5" gap="lg">
          <Swatch>1</Swatch>
          <Swatch>2</Swatch>
          <Swatch>3</Swatch>
          <Swatch>4</Swatch>
          <Swatch>5</Swatch>
        </Grid>
        <Grid columns="6" gap="xl" align="stretch">
          <Swatch>1</Swatch>
          <Swatch>2</Swatch>
          <Swatch>3</Swatch>
          <Swatch>4</Swatch>
          <Swatch>5</Swatch>
          <Swatch>6</Swatch>
        </Grid>
        <Grid columns="auto-fill" gap="sm">
          <Swatch>auto-fill</Swatch>
          <Swatch>fills tracks</Swatch>
        </Grid>
        <Grid columns="auto-fit" gap="sm">
          <Swatch>auto-fit</Swatch>
          <Swatch>collapses empty tracks</Swatch>
        </Grid>
        <Grid columns="responsive-2" gap="sm">
          <Swatch>responsive-2</Swatch>
          <Swatch>second item</Swatch>
        </Grid>
        <Grid columns="responsive-3" gap="sm">
          <Swatch>responsive-3</Swatch>
          <Swatch>second item</Swatch>
          <Swatch>third item</Swatch>
        </Grid>
        <Grid columns="responsive-4" gap="sm">
          <Swatch>responsive-4</Swatch>
          <Swatch>second item</Swatch>
          <Swatch>third item</Swatch>
          <Swatch>fourth item</Swatch>
        </Grid>
      </section>
    </div>
  )
}

export { Demo, meta }
