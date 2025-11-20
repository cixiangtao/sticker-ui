import { Button, Form, Range } from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-su-fill-success",
  order: 30,
  titleKey: "preview.components.states",
  descriptionKey:
    "preview.components.rangeKeepsDisabledInvalidAndFormControlledValuesNumeric",
})

function Demo() {
  return (
    <Form
      initialValues={{
        contrast: 72,
        opacity: 35,
      }}
      onFinish={() => undefined}
    >
      <div className="grid gap-4 md:grid-cols-2">
        <Form.Item
          extra="Form.Item receives the numeric value from Range onChange."
          label="Contrast"
          name="contrast"
          rules={[
            {
              message: "Use at least 50 for readable sticker contrast.",
              validator: (_rule, value) => {
                if (Number(value) < 50) {
                  throw new Error(
                    "Use at least 50 for readable sticker contrast.",
                  )
                }
              },
            },
          ]}
        >
          <Range formatValue={(value) => `${value}%`} showValue />
        </Form.Item>
        <Form.Item
          extra="Disabled ranges keep the same track geometry."
          label="Managed Opacity"
          name="opacity"
        >
          <Range disabled showValue tone="secondary" />
        </Form.Item>
        <Form.Item
          extra="Use min, max, and step for smaller numeric scales."
          label="Shadow Step"
        >
          <Range
            defaultValue={4}
            formatValue={(value) => `${value}px`}
            max={12}
            showValue
            tone="warning"
          />
        </Form.Item>
        <Form.Item
          extra="Invalid can be set directly for custom states."
          label="Risk"
        >
          <Range aria-invalid defaultValue={88} showValue tone="danger" />
        </Form.Item>
      </div>
      <Button className="w-fit" type="submit">
        Save Values
      </Button>
    </Form>
  )
}

export { Demo, meta }
