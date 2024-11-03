import { Button, Form, Label, RadioGroup, RadioGroupItem } from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-fill-danger-soft",
  order: 30,
  titleKey: "preview.components.states",
  descriptionKey:
    "preview.components.invalidDisabledAndSemanticRadioStatesStayVisibleThroughRadixPropsAndFormItemValidation",
})

function Demo() {
  return (
    <Form
      initialValues={{
        channel: "",
        confidence: "ready",
      }}
      onFinish={() => undefined}
    >
      <div className="grid gap-4 md:grid-cols-2">
        <Form.Item
          extra="Radiogroup exposes onchange value so form item can collect the selected string value."
          label="Channel"
          name="channel"
          rules={[
            {
              message: "Choose One Launch Channel",
              required: true,
            },
          ]}
        >
          <RadioGroup>
            <RadioOption id="radio-state-docs" label="Docs Page" value="docs" />
            <RadioOption
              id="radio-state-registry"
              label="Registry Card"
              value="registry"
            />
          </RadioGroup>
        </Form.Item>
        <Form.Item
          extra="Use disabled for locked choice groups."
          label="Locked"
        >
          <RadioGroup defaultValue="managed" disabled>
            <RadioOption
              id="radio-state-managed"
              label="Managed"
              value="managed"
            />
            <RadioOption id="radio-state-open" label="Open" value="open" />
          </RadioGroup>
        </Form.Item>
        <Form.Item
          extra="Tone can reinforce confident routing choices."
          label="Confidence"
          name="confidence"
        >
          <RadioGroup tone="success" variant="filled">
            <RadioOption id="radio-state-ready" label="Ready" value="ready" />
            <RadioOption
              id="radio-state-review"
              label="Review"
              value="review"
            />
          </RadioGroup>
        </Form.Item>
        <Form.Item
          extra="Quiet radio items sit inside dense cards."
          label="View"
        >
          <RadioGroup defaultValue="compact" tone="secondary" variant="quiet">
            <RadioOption
              id="radio-state-compact"
              label="Compact Cards"
              value="compact"
            />
            <RadioOption
              id="radio-state-roomy"
              label="Roomy Panels"
              value="roomy"
            />
          </RadioGroup>
        </Form.Item>
      </div>
      <Button className="w-fit" type="submit">
        Save Route
      </Button>
    </Form>
  )
}

function RadioOption({
  id,
  label,
  value,
}: {
  id: string
  label: string
  value: string
}) {
  return (
    <div className="flex items-center gap-3 rounded-sticker-lg border border-ink bg-white/80 px-3 py-2">
      <RadioGroupItem id={id} value={value} />
      <Label htmlFor={id}>{label}</Label>
    </div>
  )
}

export { Demo, meta }
