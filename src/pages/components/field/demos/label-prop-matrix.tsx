import { Field, Input, Switch } from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-su-fill-default",
  order: 50,
  titleKey: "preview.components.labelPropMatrix",
  descriptionKey:
    "preview.components.fieldLabelPropMatrixCoversLegacyControlPlacementEndDefaultLabelSizeAndBadgeRequiredMarks",
})

function Demo() {
  return (
    <div className="grid max-w-3xl gap-4">
      <Field
        controlPlacement="end"
        description="controlPlacement=end keeps the legacy stacked behavior."
        label="Legacy end placement"
      >
        <Input defaultValue="Stacked control" />
      </Field>
      <Field layout="inline" label="Inline switch">
        <Switch defaultChecked />
      </Field>
      <div className="grid gap-3 rounded-su-xl border border-su-ink bg-su-surface p-4">
        <Field.Label
          required
          requiredMark="badge"
          size="default"
          tone="default"
        >
          Default label with badge
        </Field.Label>
        <Field.Label required requiredMark="asterisk" size="sm" tone="danger">
          Small danger label
        </Field.Label>
        <Field.Label optional size="lg" tone="muted">
          Large optional label
        </Field.Label>
      </div>
    </div>
  )
}

export { Demo, meta }
