import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Tag,
} from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-su-fill-warning",
  order: 10,
  titleKey: "preview.components.basicComposition",
  descriptionKey:
    "preview.components.useCardSlotsToKeepHeadingsBodyCopyMetadataAndActionsVisuallySeparated",
})

function Demo() {
  return (
    <Card className="max-w-md">
      <CardHeader>
        <Tag rounded="pill" size="sm">
          Preview
        </Tag>
        <CardTitle>Component Kit</CardTitle>
        <CardDescription>
          A compact paper card for component summaries docs links and quick
          actions.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="m-0 text-sm leading-6 font-medium text-su-fg-muted">
          The header owns the accent strip while the content keeps a quieter
          paper surface for longer copy.
        </p>
      </CardContent>
      <CardFooter>
        <Button size="sm">Open Docs</Button>
        <Button size="sm" variant="text">
          Copy Import
        </Button>
      </CardFooter>
    </Card>
  )
}

export { Demo, meta }
