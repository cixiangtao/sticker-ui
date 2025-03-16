import { Button, Form, RadioGroup, RadioGroupItem } from "sticker-ui"

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
            <RadioOption label="Docs Page" value="docs" />
            <RadioOption label="Registry Card" value="registry" />
          </RadioGroup>
        </Form.Item>
        <Form.Item
          extra="Use disabled for locked choice groups."
          label="Locked"
        >
          <RadioGroup defaultValue="managed" disabled>
            <RadioOption label="Managed" value="managed" />
            <RadioOption label="Open" value="open" />
          </RadioGroup>
        </Form.Item>
        <Form.Item
          extra="Tone can reinforce confident routing choices."
          label="Confidence"
          name="confidence"
        >
          <RadioGroup tone="success" variant="filled">
            <RadioOption label="Ready" value="ready" />
            <RadioOption label="Review" value="review" />
          </RadioGroup>
        </Form.Item>
        <Form.Item
          extra="Quiet radio items sit inside dense cards."
          label="View"
        >
          <RadioGroup defaultValue="compact" tone="secondary" variant="quiet">
            <RadioOption label="Compact Cards" value="compact" />
            <RadioOption label="Roomy Panels" value="roomy" />
          </RadioGroup>
        </Form.Item>
      </div>
      <Button className="w-fit" type="submit">
        Save Route
      </Button>
    </Form>
  )
}

function RadioOption({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-sticker-lg border border-ink bg-white/80 px-3 py-2">
      <RadioGroupItem label={label} value={value} />
    </div>
  )
}

export { Demo, meta }
