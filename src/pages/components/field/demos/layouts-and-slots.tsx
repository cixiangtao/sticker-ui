import { Checkbox, Field, Input, Switch } from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-su-fill-success",
  order: 40,
  titleKey: "preview.components.layoutsAndSlots",
  descriptionKey:
    "preview.components.fieldLayoutSlotClassnamesIdsAndForwardedLabelDescriptionPropsShowTheFullShellContract",
})

function Demo() {
  return (
    <div className="grid max-w-3xl gap-4">
      <Field
        classNames={{
          body: "rounded-su-lg border border-su-ink bg-su-surface p-3",
          control: "rounded-su-md bg-su-fill-success p-2",
          description: "text-su-fg-success",
          label: "uppercase tracking-wide",
          root: "rounded-su-xl border-2 border-su-ink bg-white p-3 shadow-su-sm",
        }}
        description="Slot classNames let an aggregate field adapt to denser form layouts."
        descriptionProps={{ "data-kind": "slot-description" }}
        id="component-slug"
        label="Component slug"
        labelProps={{ "data-kind": "slot-label" }}
        layout="stack"
        required
        requiredMark="badge"
        size="default"
        tone="success"
      >
        <Input placeholder="data-table" />
      </Field>

      <div className="grid gap-4 md:grid-cols-2">
        <Field
          description="Inline layout places the control before the caption."
          label="Enable preview warnings"
          layout="inline"
        >
          <Switch defaultChecked />
        </Field>
        <Field
          controlPlacement="start"
          description="Legacy controlPlacement=start maps to the same inline layout."
          label="Keep compatibility path"
        >
          <Checkbox defaultChecked />
        </Field>
      </div>
    </div>
  )
}

export { Demo, meta }
