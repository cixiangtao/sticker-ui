import { Form, Input } from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-su-fill-danger",
  order: 30,
  titleKey: "preview.components.states",
  descriptionKey:
    "preview.components.invalidDisabledAndSemanticToneStatesStayVisibleThroughNativeAttributesSuchAsAriaInvalidAndDisabled",
})

function Demo() {
  return (
    <Form
      initialValues={{
        email: "hello@sticker.dev",
        handle: "sticker-captain",
      }}
      onFinish={() => undefined}
    >
      <div className="grid gap-4 md:grid-cols-2">
        <Form.Item
          extra="The field shell passes ARIA invalid to input when validation fails."
          label="Email"
          name="email"
          rules={[
            {
              message: "Email Is Required",
              required: true,
              whitespace: true,
            },
            {
              message: "Use a valid email address.",
              type: "email",
            },
          ]}
        >
          <Input placeholder="Hello Sticker Dev" type="email" />
        </Form.Item>
        <Form.Item extra="Use disabled for locked settings." label="Handle">
          <Input defaultValue="@sticker" disabled />
        </Form.Item>
        <Form.Item extra="Tone can reinforce success copy." label="Ready State">
          <Input defaultValue="ready-to-ship" tone="success" variant="filled" />
        </Form.Item>
        <Form.Item extra="Quiet inputs sit inside dense cards." label="Invite">
          <Input placeholder="Sticker" tone="secondary" variant="quiet" />
        </Form.Item>
      </div>
    </Form>
  )
}

export { Demo, meta }
