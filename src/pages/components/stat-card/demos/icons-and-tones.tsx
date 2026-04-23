import { PackageCheck, Route, Sparkles } from "lucide-react"
import { StatCard } from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-su-fill-secondary",
  order: 20,
  titleKey: "preview.components.iconsAndTones",
  descriptionKey:
    "preview.components.statCardIconsAndTonesKeepDenseSummaryRowsScannable",
})

function Demo() {
  return (
    <div className="grid gap-3 sm:grid-cols-3">
      <StatCard size="sm" tone="info">
        <StatCard.Icon>
          <Sparkles className="size-4 stroke-[3]" />
        </StatCard.Icon>
        <StatCard.Label>New</StatCard.Label>
        <StatCard.Value>11</StatCard.Value>
      </StatCard>
      <StatCard size="sm" tone="secondary">
        <StatCard.Icon>
          <Route className="size-4 stroke-[3]" />
        </StatCard.Icon>
        <StatCard.Label>Routes</StatCard.Label>
        <StatCard.Value>42</StatCard.Value>
      </StatCard>
      <StatCard size="sm" tone="success">
        <StatCard.Icon>
          <PackageCheck className="size-4 stroke-[3]" />
        </StatCard.Icon>
        <StatCard.Label>Registry</StatCard.Label>
        <StatCard.Value>OK</StatCard.Value>
      </StatCard>
    </div>
  )
}

export { Demo, meta }
