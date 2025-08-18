import * as React from "react"
import {
  Button,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  Tag,
} from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-su-fill-secondary",
  order: 30,
  titleKey: "preview.components.controlledVertical",
  descriptionKey:
    "preview.components.controlledVerticalTabsCanPairASideListWithDisabledStepsAndFormFriendlyChangeHandlers",
})

const tabs = [
  {
    description: "Plan copy, component states, and examples before shipping.",
    disabled: false,
    label: "Plan",
    value: "plan",
  },
  {
    description: "Wire source, registry, preview demos, and API docs together.",
    disabled: false,
    label: "Build",
    value: "build",
  },
  {
    description: "Locked until the build phase is complete.",
    disabled: true,
    label: "Publish",
    value: "publish",
  },
] as const

function Demo() {
  const [value, setValue] = React.useState("plan")

  return (
    <Tabs
      className="grid max-w-3xl gap-4 md:grid-cols-[180px_1fr]"
      onChange={setValue}
      orientation="vertical"
      value={value}
      variant="solid"
    >
      <TabsList aria-label="Release checklist" className="md:w-full">
        {tabs.map((tab) => (
          <TabsTrigger
            disabled={tab.disabled}
            key={tab.value}
            value={tab.value}
          >
            {tab.label}
          </TabsTrigger>
        ))}
      </TabsList>

      {tabs.map((tab) => (
        <TabsContent key={tab.value} value={tab.value}>
          <div className="grid gap-3">
            <Tag color={tab.disabled ? "warning" : "info"} rounded="pill">
              {tab.label}
            </Tag>
            <p className="m-0 text-sm leading-6 font-medium">
              {tab.description}
            </p>
            <Button
              disabled={tab.value === "build"}
              onClick={() => setValue("build")}
              size="sm"
              variant="outlined"
            >
              Jump To Build
            </Button>
          </div>
        </TabsContent>
      ))}
    </Tabs>
  )
}

export { Demo, meta }
