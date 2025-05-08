import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Tag,
} from "sticker-ui"

import { defineMeta } from "@/layouts/preview"
import { cn } from "@/lib/utils"

const meta = defineMeta({
  className: "bg-su-fill-danger",
  order: 50,
  titleKey: "preview.components.interactiveList",
  descriptionKey:
    "preview.components.interactiveCardsKeepTactileMovementOnTheRootWhileNestedTextAndBadgesStayStable",
})

const tasks = [
  {
    cardClassName: "bg-su-fill-info",
    description: "Check props, variants, and translation coverage.",
    headerClassName: "bg-su-accent-info",
    status: "docs",
    tagColor: "info",
    title: "Audit API table",
  },
  {
    cardClassName: "bg-su-fill-warning",
    description: "Confirm generated registry JSON includes source files.",
    headerClassName: "bg-su-accent-warning",
    status: "registry",
    tagColor: "warning",
    title: "Build package entry",
  },
  {
    cardClassName: "bg-su-fill-success",
    description: "Verify hover and active tactile states.",
    headerClassName: "bg-su-accent-success",
    status: "ready",
    tagColor: "success",
    title: "Preview tactile states",
  },
] as const

function Demo() {
  return (
    <div className="grid gap-4">
      {tasks.map((task) => (
        <Card
          as="section"
          className={cn("cursor-pointer", task.cardClassName)}
          interactive
          key={task.title}
        >
          <CardHeader
            className={cn(
              "grid-cols-[1fr_auto] items-start gap-3",
              task.headerClassName,
            )}
          >
            <div className="grid gap-2">
              <Tag color={task.tagColor} rounded="pill" size="sm">
                {task.status}
              </Tag>
              <CardTitle>{task.title}</CardTitle>
              <CardDescription>{task.description}</CardDescription>
            </div>
            <Tag size="sm" variant="outlined">
              Open
            </Tag>
          </CardHeader>
          <CardContent>
            <p className="m-0 text-sm leading-6 font-medium text-su-fg-muted">
              Add handlers at the card root when the whole surface behaves like
              one action.
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

export { Demo, meta }
