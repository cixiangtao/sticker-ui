import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Tag,
} from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-[#EAF7FF]",
  description:
    "Root props control semantic elements, delegated children, tactile interaction, and the spacing shared by card slots.",
  order: 60,
  title: "Root & Spacing Props",
  titleKey: "preview.components.rootAndSpacingProps",
  descriptionKey:
    "preview.components.rootPropsControlSemanticElementsDelegatedChildrenTactileInteractionAndTheSpacingSharedByCardSlots",
})

function Demo() {
  return (
    <div className="grid gap-4 lg:grid-cols-2">
      <Card as="section" interactive={true} padding="sm" variant="elevated">
        <CardHeader decoration={true} divider="dashed" dividerInset="card">
          <CardTitle>Compact section</CardTitle>
          <CardDescription>
            as, interactive, padding, decoration, divider, and dividerInset work
            together across the composed slots.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tag color="info" dot={true} size="sm" variant="outlined">
            padding=sm
          </Tag>
        </CardContent>
      </Card>

      <Card asChild interactive={true} padding="none" variant="minimal">
        <a
          className="block no-underline"
          href="#card-as-child"
          aria-label="Open delegated card"
        >
          <CardHeader
            decoration={<Tag size="xs">Link</Tag>}
            divider="solid"
            dividerInset="md"
          >
            <CardTitle>Delegated link card</CardTitle>
            <CardDescription>
              asChild puts the card root classes on the anchor while slot
              spacing stays explicit.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <span className="text-sm font-extrabold text-ink">
              Open composed surface
            </span>
          </CardContent>
        </a>
      </Card>
    </div>
  )
}

export { Demo, meta }
