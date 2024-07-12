import { Form, Input } from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-[#FFF0F4]",
  description:
    "Invalid, disabled, and semantic tone states stay visible through native attributes such as aria-invalid and disabled.",
  order: 30,
  title: "States",
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
          extra="The field shell passes aria-invalid to Input when validation fails."
          label="Email"
          name="email"
          rules={[
            { message: "Email is required.", required: true, whitespace: true },
            { message: "Use a valid email address.", type: "email" },
          ]}
        >
          <Input placeholder="hello@sticker.dev" type="email" />
        </Form.Item>
        <Form.Item extra="Use disabled for locked settings." label="Handle">
          <Input defaultValue="@sticker" disabled />
        </Form.Item>
        <Form.Item extra="Tone can reinforce success copy." label="Ready state">
          <Input defaultValue="ready-to-ship" tone="success" variant="filled" />
        </Form.Item>
        <Form.Item extra="Quiet inputs sit inside dense cards." label="Invite">
          <Input placeholder="STICKER" tone="secondary" variant="quiet" />
        </Form.Item>
      </div>
    </Form>
  )
}

export { Demo, meta }
