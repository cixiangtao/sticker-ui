import { Form, Textarea } from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-su-fill-danger",
  order: 30,
  titleKey: "preview.components.states",
  descriptionKey:
    "preview.components.invalidDisabledAndSemanticToneStatesStayVisibleOnMultilineFieldsThroughNativeAttributesAndFormItemValidation",
})

function Demo() {
  return (
    <Form onFinish={() => undefined}>
      <div className="grid gap-4 md:grid-cols-2">
        <Form.Item
          extra="The field shell passes ARIA invalid to textarea when validation fails."
          label="Summary"
          name="summary"
          rules={[
            {
              message: "Summary Is Required",
              required: true,
              whitespace: true,
            },
            {
              message: "Use at least 12 characters.",
              min: 12,
            },
          ]}
        >
          <Textarea placeholder="Write A Useful Summary" />
        </Form.Item>
        <Form.Item
          extra="Use disabled for archived notes."
          label="Archive Note"
        >
          <Textarea defaultValue="Locked After Review" disabled />
        </Form.Item>
        <Form.Item extra="Tone can reinforce success copy." label="Ready Note">
          <Textarea
            defaultValue="This copy is approved and ready to ship."
            tone="success"
            variant="filled"
          />
        </Form.Item>
        <Form.Item
          extra="Quiet textareas sit inside dense cards."
          label="Draft"
        >
          <Textarea
            placeholder="Capture A Rough Draft"
            tone="secondary"
            variant="quiet"
          />
        </Form.Item>
      </div>
    </Form>
  )
}

export { Demo, meta }
