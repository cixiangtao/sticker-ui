import * as React from "react"
import { Tabs, Tag } from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-su-fill-success",
  order: 40,
  titleKey: "preview.components.valueCallbacks",
  descriptionKey:
    "preview.components.tabsExposeBothOnchangeAndOnvaluechangeForControlledStateAndRadixCompatibility",
})

function Demo() {
  const [value, setValue] = React.useState("props")
  const [lastEvent, setLastEvent] = React.useState("No tab change yet")

  return (
    <Tabs
      className="max-w-2xl"
      onChange={(nextValue) => {
        setValue(nextValue)
        setLastEvent(`onChange -> ${nextValue}`)
      }}
      onValueChange={(nextValue) => {
        setLastEvent(`onValueChange -> ${nextValue}`)
      }}
      value={value}
    >
      <Tabs.List aria-label="Callback examples">
        <Tabs.Trigger value="props">Props</Tabs.Trigger>
        <Tabs.Trigger value="combos">Combos</Tabs.Trigger>
        <Tabs.Trigger value="a11y">A11y</Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content value="props">
        <div className="grid gap-3">
          <Tag rounded="pill" size="sm">
            {lastEvent}
          </Tag>
          <p className="m-0 text-sm leading-6 font-medium">
            Use onChange for the sticker-ui form convention, or onValueChange
            when mirroring Radix examples.
          </p>
        </div>
      </Tabs.Content>
      <Tabs.Content value="combos">
        Variant, tone, and size can stay on root.
      </Tabs.Content>
      <Tabs.Content value="a11y">
        Radix owns keyboard navigation and focus.
      </Tabs.Content>
    </Tabs>
  )
}

export { Demo, meta }
