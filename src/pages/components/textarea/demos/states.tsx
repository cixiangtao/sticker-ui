import { Form, Textarea } from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-[#FFF0F4]",
  description:
    "Invalid, disabled, and semantic tone states stay visible on multiline fields through native attributes and Form.Item validation.",
  order: 30,
  title: "States",
})

function Demo() {
  return (
    <Form onFinish={() => undefined}>
      <div className="grid gap-4 md:grid-cols-2">
        <Form.Item
          extra="The field shell passes aria-invalid to Textarea when validation fails."
          label="Summary"
          name="summary"
          rules={[
            {
              message: "Summary is required.",
              required: true,
              whitespace: true,
            },
            { message: "Use at least 12 characters.", min: 12 },
          ]}
        >
          <Textarea placeholder="Write a useful summary" />
        </Form.Item>
        <Form.Item
          extra="Use disabled for archived notes."
          label="Archive note"
        >
          <Textarea defaultValue="Locked after review." disabled />
        </Form.Item>
        <Form.Item extra="Tone can reinforce success copy." label="Ready note">
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
            placeholder="Capture a rough draft"
            tone="secondary"
            variant="quiet"
          />
        </Form.Item>
      </div>
    </Form>
  )
}

export { Demo, meta }
