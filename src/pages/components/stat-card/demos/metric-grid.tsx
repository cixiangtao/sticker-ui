import { StatCard } from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-su-fill-info",
  order: 10,
  titleKey: "preview.components.metricGrid",
  descriptionKey:
    "preview.components.statCardsShowKpisWithEnoughStructureForDashboardsAndReports",
})

function Demo() {
  return (
    <div className="grid gap-3 sm:grid-cols-3">
      <StatCard>
        <StatCard.Label>Registry items</StatCard.Label>
        <StatCard.Value>42</StatCard.Value>
        <StatCard.Trend>+11</StatCard.Trend>
        <StatCard.Description>
          Ready for copy-based installs.
        </StatCard.Description>
      </StatCard>
      <StatCard tone="success">
        <StatCard.Label>Build checks</StatCard.Label>
        <StatCard.Value>8/8</StatCard.Value>
        <StatCard.Description>
          All release gates are green.
        </StatCard.Description>
      </StatCard>
      <StatCard tone="warning">
        <StatCard.Label>Docs todo</StatCard.Label>
        <StatCard.Value>3</StatCard.Value>
        <StatCard.Description>Missing examples to review.</StatCard.Description>
      </StatCard>
    </div>
  )
}

export { Demo, meta }
