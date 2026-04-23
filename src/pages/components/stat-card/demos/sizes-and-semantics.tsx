import { StatCard } from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-su-paper",
  descriptionKey:
    "preview.components.statCardSizeToneAndSemanticRootOptionsFitSummaryRowsAndSections",
  order: 30,
  titleKey: "preview.components.sizesAndSemantics",
})

const cards = [
  { as: "article", label: "Default", size: "sm", tone: "default", value: "24" },
  {
    as: "section",
    label: "Success",
    size: "md",
    tone: "success",
    value: "98%",
  },
  { as: "div", label: "Warning", size: "lg", tone: "warning", value: "7" },
] as const

function Demo() {
  return (
    <div className="grid w-full max-w-3xl gap-4 md:grid-cols-3">
      {cards.map((card) => (
        <StatCard
          as={card.as}
          key={card.label}
          size={card.size}
          tone={card.tone}
        >
          <StatCard.Label>{card.label}</StatCard.Label>
          <StatCard.Value>{card.value}</StatCard.Value>
          <StatCard.Description>Semantic KPI surface</StatCard.Description>
        </StatCard>
      ))}
    </div>
  )
}

export { Demo, meta }
