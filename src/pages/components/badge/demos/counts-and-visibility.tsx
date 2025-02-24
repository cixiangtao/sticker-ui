import { Badge, Button } from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const BADGE_TONES = [
  "default",
  "info",
  "secondary",
  "success",
  "warning",
  "danger",
] as const

const BADGE_VARIANTS = [
  ["solid", "3"],
  ["soft", "0"],
  ["outline", "!"],
] as const

const meta = defineMeta({
  className: "bg-fill-secondary",
  order: 30,
  titleKey: "preview.components.countsAndVisibility",
  descriptionKey:
    "preview.components.badgeCountsCanCapOverflowShowZeroOrDisappearWhenInactive",
})

function Demo() {
  return (
    <div className="grid gap-5">
      <div className="flex flex-wrap items-center gap-5">
        <Badge content={128} max={99} tone="danger">
          <Button aria-label="Inbox, more than 99 unread messages">
            Overflow
          </Button>
        </Badge>
        <Badge content={0} showZero tone="secondary" variant="soft">
          <Button aria-label="Queue, 0 waiting items" color="secondary">
            Zero
          </Button>
        </Badge>
        <Badge content={4} show={false} tone="info">
          <Button aria-label="Drafts, no active badge" color="info">
            Hidden
          </Button>
        </Badge>
      </div>
      <div className="flex flex-wrap items-center gap-5">
        {BADGE_TONES.map((tone, index) => {
          const [variant, content] =
            BADGE_VARIANTS[index % BADGE_VARIANTS.length]

          return (
            <Badge content={content} key={tone} tone={tone} variant={variant}>
              <Button aria-label={`${tone} badge sample`} variant="outlined">
                {tone}
              </Button>
            </Badge>
          )
        })}
      </div>
    </div>
  )
}

export { Demo, meta }
